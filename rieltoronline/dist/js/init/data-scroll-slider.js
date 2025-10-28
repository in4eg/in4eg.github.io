// scroll-drag-compat.js
class ScrollDragCompat {
	constructor({
		selector = '[data-scroll-slider]',
		dragClass = 'is-dragging',
		threshold = 6 // px
	} = {}) {
		this.selector = selector;
		this.dragClass = dragClass;
		this.threshold = threshold;

		this._init();
	}

	_init() {
		document.querySelectorAll(this.selector).forEach((el) => this._bind(el));
	}

	_bind(el) {
		if (!el.style.overflowX) el.style.overflowX = 'auto';
		if (!el.style.overflowY) el.style.overflowY = 'hidden';
		if (!el.style.whiteSpace) el.style.whiteSpace = 'nowrap'; // щоб елементи стояли в ряд (якщо немає свого CSS)
		if (!el.style.webkitOverflowScrolling) el.style.webkitOverflowScrolling = 'touch'; // iOS
		if (!el.style.cursor) el.style.cursor = 'grab';
		el.style.userSelect = 'none';

		el.style.touchAction = 'pan-y';

		let isDragging = false;
		let startX = 0;
		let startScrollLeft = 0;
		let moved = false;

		const onDown = (x) => {
			isDragging = true;
			moved = false;
			startX = x;
			startScrollLeft = el.scrollLeft;
			el.classList.add(this.dragClass);
			el.style.cursor = 'grabbing';
		};

		const onMove = (x, preventDefault = () => {}) => {
			if (!isDragging) return;
			preventDefault();
			const dx = x - startX;
			if (Math.abs(dx) > this.threshold) moved = true;
			el.scrollLeft = startScrollLeft - dx;
		};

		const endDrag = () => {
			if (!isDragging) return;
			isDragging = false;
			el.classList.remove(this.dragClass);
			el.style.cursor = 'grab';
			// якщо був реальний драг — приглушимо ОДИН наступний клік всередині контейнера
			if (moved) {
				const swallowOnce = (evt) => {
					evt.stopPropagation();
					evt.preventDefault();
					el.removeEventListener('click', swallowOnce, true);
				};
				el.addEventListener('click', swallowOnce, true);
				// якщо кліку не буде — слухач сам зніметься при першому ж кліку, додатково чистити не потрібно
			}
		};

		// ====== Mouse ======
		el.addEventListener('mousedown', (e) => {
			if (e.button !== 0) return;
			onDown(e.clientX);
			const mm = (ev) => onMove(ev.clientX, () => ev.preventDefault());
			const mu = () => {
				document.removeEventListener('mousemove', mm);
				document.removeEventListener('mouseup', mu);
				endDrag();
			};
			document.addEventListener('mousemove', mm, { passive: false });
			document.addEventListener('mouseup', mu, { passive: true });
		}, { passive: true });

		el.querySelectorAll('img, figure').forEach((n) => {
			n.addEventListener('dragstart', (e) => e.preventDefault());
		});

		// ====== Touch ======
		el.addEventListener('touchstart', (e) => {
			if (!e.touches || e.touches.length !== 1) return;
			onDown(e.touches[0].clientX);
		}, { passive: true });

		el.addEventListener('touchmove', (e) => {
			if (!e.touches || e.touches.length !== 1) return;
			onMove(e.touches[0].clientX, () => e.preventDefault());
		}, { passive: false });

		el.addEventListener('touchend', endDrag, { passive: true });
		el.addEventListener('touchcancel', endDrag, { passive: true });

	}
}

document.addEventListener('DOMContentLoaded', () => {
	new ScrollDragCompat({
		selector: '[data-scroll-slider]',
		dragClass: 'is-dragging',
		threshold: 6
	});
});
