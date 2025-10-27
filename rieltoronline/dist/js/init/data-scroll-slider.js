class ScrollSliderLightbox {
	constructor({
		sliderSelector = '[data-scroll-slider]',
		thumbSelector = '.thumb-item img',
		targetAttr = 'image',          // data-image селектор головного зображення
		overlayClass = 'overlayed',
		modalIdPrefix = 'slb-'
	} = {}) {
		this.sliderSelector = sliderSelector;
		this.thumbSelector = thumbSelector;
		this.targetAttr = targetAttr;
		this.overlayClass = overlayClass;
		this.modalIdPrefix = modalIdPrefix;

		this._instances = []; // [{container, target, images:[], index:0}]
		this._build();
		this._ensureModal();
	}

	_build() {
		document.querySelectorAll(this.sliderSelector).forEach((container, idx) => {
			const targetSel = container.dataset[this.targetAttr];
			if (!targetSel) return;

			const target = document.querySelector(targetSel);
			if (!target) return;

			// зібрати список картинок з контейнера
			const imgs = Array.from(container.querySelectorAll(this.thumbSelector))
				.map(img => img.getAttribute('src'))
				.filter(Boolean);

			if (!imgs.length) return;

			// зберегти інстанс
			const instance = { container, target, images: imgs, index: 0, id: this.modalIdPrefix + idx };
			this._instances.push(instance);

			// клік по main image -> відкрити модалку з першою відповідною картинкою
			const mainImg = target.querySelector('img');
			if (mainImg) {
				target.style.cursor = 'zoom-in';
				target.addEventListener('click', (e) => {
					e.preventDefault();
					// визначимо початковий індекс як перший збіг src, якщо є
					const currentSrc = mainImg.getAttribute('src');
					const startIndex = Math.max(0, instance.images.indexOf(currentSrc));
					this.open(instance, startIndex);
				});
			}

			// клік по тумбі — також оновлює main і відкриває конкретний слайд по бажанню (можеш лишити тільки оновлення main)
			container.querySelectorAll(this.thumbSelector).forEach((thumb, i) => {
				thumb.addEventListener('click', () => {
					if (mainImg) mainImg.src = thumb.src;
					// якщо потрібно одразу відкривати лайтбокс по кліку на тумбу, розкоментуй:
					// this.open(instance, i);
				});
			});
		});
	}

	// ---------- Modal core ----------
	ensureStylesOnce() {
		if (document.getElementById('slb-styles')) return;
		const css = `
.slb-modal{position:fixed;inset:0;z-index:9999;display:none;opacity:0;transition:opacity .2s ease}
.slb-modal.show{display:flex;opacity:1}
.slb-backdrop{position:absolute;inset:0;background:rgba(0,0,0,.85)}
.slb-stage{position:relative;z-index:1;display:flex;align-items:center;justify-content:center;width:100%;height:100%;padding:4rem 5rem;box-sizing:border-box}
.slb-img{max-width:100%;max-height:100%;object-fit:contain;box-shadow:0 10px 30px rgba(0,0,0,.6);border-radius:0}
.slb-close,.slb-prev,.slb-next{position:absolute;z-index:2;border:none;background:rgba(255,255,255,.08);backdrop-filter:saturate(140%) blur(4px);cursor:pointer;line-height:1;padding:.75rem 1rem;border-radius:.5rem;transition:transform .12s ease, background .12s ease}
.slb-close{top:1rem;right:1rem}
.slb-prev{left:1rem;top:50%;transform:translateY(-50%)}
.slb-next{right:1rem;top:50%;transform:translateY(-50%)}
.slb-close:hover,.slb-prev:hover,.slb-next:hover{background:rgba(255,255,255,.16)}
.slb-counter{position:absolute;left:50%;top:1rem;transform:translateX(-50%);color:#fff;font:500 14px/1.2 system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial}
@media (max-width:768px){
	.slb-stage{padding:3rem 3.5rem}
	.slb-prev{left:.5rem}
	.slb-next{right:.5rem}
	.slb-close{right:.5rem}
}
		`.trim();
		const style = document.createElement('style');
		style.id = 'slb-styles';
		style.textContent = css;
		document.head.appendChild(style);
	}

	_ensureModal() {
		this.ensureStylesOnce();

		if (this.modal) return;
		const modal = document.createElement('div');
		modal.className = 'slb-modal';
		modal.setAttribute('role', 'dialog');
		modal.setAttribute('aria-modal', 'true');
		modal.innerHTML = `
			<div class="slb-backdrop" data-slb="backdrop"></div>
			<div class="slb-stage">
				<img class="slb-img" alt="preview">
				<button class="slb-prev" type="button" aria-label="Previous" data-slb="prev">‹</button>
				<button class="slb-next" type="button" aria-label="Next" data-slb="next">›</button>
				<button class="slb-close" type="button" aria-label="Close" data-slb="close">✕</button>
				<div class="slb-counter" data-slb="counter">1 / 1</div>
			</div>
		`;

		document.body.appendChild(modal);
		this.modal = modal;
		this.imgEl = modal.querySelector('.slb-img');
		this.btnPrev = modal.querySelector('[data-slb="prev"]');
		this.btnNext = modal.querySelector('[data-slb="next"]');
		this.btnClose = modal.querySelector('[data-slb="close"]');
		this.backdrop = modal.querySelector('[data-slb="backdrop"]');
		this.counter = modal.querySelector('[data-slb="counter"]');

		// події
		this._onKey = this._onKey.bind(this);
		this._onClose = this._onClose.bind(this);

		this.backdrop.addEventListener('click', this._onClose);
		this.btnPrev.addEventListener('click', () => this._onPrev());
		this.btnNext.addEventListener('click', () => this._onNext());
		this.btnClose.addEventListener('click', this._onClose);

		// клік поза картинкою — теж закриває
		this.modal.addEventListener('click', (e) => {
			if (!e.target.closest('.slb-img') && !e.target.closest('button')) {
				this._onClose();
			}
		});

		// простий свайп на мобільних
		let sx = 0, dx = 0;
		this.modal.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; dx = 0; }, {passive:true});
		this.modal.addEventListener('touchmove', (e) => { dx = e.touches[0].clientX - sx; }, {passive:true});
		this.modal.addEventListener('touchend', () => {
			if (dx > 60) this._onPrev();
			else if (dx < -60) this._onNext();
			sx = 0; dx = 0;
		}, {passive:true});
	}


	open(instance, index = 0) {
		this.active = instance;
		this.index = this._clamp(index, 0, instance.images.length - 1);
		this._render();

		this.modal.classList.add('show');
		document.body.classList.add(this.overlayClass);
		document.documentElement.classList.add(this.overlayClass);
		document.addEventListener('keydown', this._onKey);
	}

	close() {
		this.modal.classList.remove('show');
		document.body.classList.remove(this.overlayClass);
		document.documentElement.classList.remove(this.overlayClass);
		document.removeEventListener('keydown', this._onKey);
		this.active = null;
	}

	_render() {
		if (!this.active) return;
		const src = this.active.images[this.index];
		this.imgEl.src = src;
		this.counter.textContent = `${this.index + 1} / ${this.active.images.length}`;
		// дизейбл кнопок якщо 1 зображення
		const single = this.active.images.length <= 1;
		this.btnPrev.style.display = single ? 'none' : '';
		this.btnNext.style.display = single ? 'none' : '';
	}

	_onPrev() {
		if (!this.active) return;
		this.index = (this.index - 1 + this.active.images.length) % this.active.images.length;
		this._render();
	}
	_onNext() {
		if (!this.active) return;
		this.index = (this.index + 1) % this.active.images.length;
		this._render();
	}
	_onClose() { this.close(); }
	_onBackdrop() { this.close(); }
	_onKey(e) {
		if (e.key === 'Escape') this.close();
		else if (e.key === 'ArrowLeft') this._onPrev();
		else if (e.key === 'ArrowRight') this._onNext();
	}

	_clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }
}

// ініт
document.addEventListener('DOMContentLoaded', () => {
	new ScrollSliderLightbox();
});
