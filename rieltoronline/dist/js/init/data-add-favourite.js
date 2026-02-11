	// ================= Helpers =================
	function strHash(s) {
		let h = 5381;
		for (let i = 0; i < s.length; i++) h = ((h << 5) + h) ^ s.charCodeAt(i);
		return (h >>> 0).toString(36);
	}

	// ================= Store =================
	class FavStore {
		constructor(key = 'favourites') {
			this.key = key;
			this._listeners = new Set();
			this._state = this._read();
		}
		_read() {
			try {
				const raw = JSON.parse(localStorage.getItem(this.key));
				return {
					items: Array.isArray(raw?.items) ? raw.items : [],
					data:  raw?.data && typeof raw.data === 'object' ? raw.data : {}
				};
			} catch { return { items: [], data: {} }; }
		}
		_write() {
			localStorage.setItem(this.key, JSON.stringify(this._state));
			this._emit();
		}
		_emit() {
			const payload = { items: this.items(), count: this.count(), data: this._state.data };
			this._listeners.forEach(fn => fn(payload));
		}
		onChange(fn) {
			this._listeners.add(fn);
			fn({ items: this.items(), count: this.count(), data: this._state.data });
			return () => this._listeners.delete(fn);
		}
		items() { return [...this._state.items]; }
		count() { return this._state.items.length; }
		has(id) { return this._state.items.includes(id); }
		getAllData() { return this._state.items.map(id => this._state.data[id]).filter(Boolean); }

		add(id, dataObj) {
			if (!id) return;
			if (!this._state.items.includes(id)) {
				this._state.items.push(id);
				if (dataObj && typeof dataObj === 'object') this._state.data[id] = dataObj;
				this._write();
				console.log('Added to favourites:', id);
			}
		}
		remove(id) {
			if (!id) return;
			if (this._state.items.includes(id)) {
				this._state.items = this._state.items.filter(x => x !== id);
				delete this._state.data[id];
				this._write();
				console.log('Removed from favourites:', id);
			}
		}
		toggle(id, dataObj) {
			if (this.has(id)) return this.remove(id);
			return this.add(id, dataObj);
		}
		clear() {
			this._state = { items: [], data: {} };
			this._write();
			console.log('Cleared all favourites');
		}
	}

	// ================= Cards =================
	class FavCards {
		constructor(store, { rootSelector = 'body', itemSelector = '.item' } = {}) {
			this.store = store;
			this.root = document.querySelector(rootSelector) || document.body;
			this.itemSelector = itemSelector;

			this._onClick = this._onClick.bind(this);

			this.root.addEventListener('click', this._onClick, false);
			this.unsubscribe = this.store.onChange(() => this.syncAll());

			this.syncAll();
		}

		destroy() {
			this.root.removeEventListener('click', this._onClick, false);
			this.unsubscribe?.();
		}

		_onClick(e) {
			const btn = e.target.closest('[data-add-favourite]');
			if (!btn || !this.root.contains(btn)) return;

			e.preventDefault();
			const itemEl = btn.closest(this.itemSelector);
			if (!itemEl) return;

			const id = this._ensureId(itemEl);
			if (!id) return;

			const data = this._extractData(itemEl, id);
			this.store.toggle(id, data);

			this._applyIcons(btn, this.store.has(id));
		}

	// стабільний uid на основі вмісту картки (а не Date.now)
	_ensureId(itemEl) {
		if (itemEl.dataset?.id)  return itemEl.dataset.id;
		if (itemEl.dataset?.uid) return itemEl.dataset.uid;

		const href  = itemEl.querySelector('.object-preview[href]')?.getAttribute('href') || '';
		const title = (itemEl.querySelector('.object-title')?.textContent || '').trim();
		const date  = (itemEl.querySelector('.date')?.textContent || '').trim();

		// локальний індекс серед сусідів .item — щоб уникнути колізій
		let localIndex = 0;
		const parent = itemEl.parentElement;
		if (parent) {
			const siblings = Array.from(parent.children).filter(el => el.matches?.(this.itemSelector));
			localIndex = Math.max(0, siblings.indexOf(itemEl));
		}

		const uid = `fav-${strHash(`href=${href}|title=${title}|date=${date}|idx=${localIndex}`)}`;
		itemEl.dataset.uid = uid;
		return uid;
	}

	// збираємо ВСІ потрібні поля для сторінки Обране
	_extractData(itemEl, id) {
		const a       = itemEl.querySelector('.object-preview[href]');
		const img     = itemEl.querySelector('.object-image img');
		const dateEl  = itemEl.querySelector('.date');
		const titleEl = itemEl.querySelector('.object-title');
		const desc    = itemEl.querySelector('.description');
		const line1   = desc?.querySelector('.line:nth-child(1)');
		const line2   = desc?.querySelector('.line:nth-child(2)');
		const priceEl = desc?.querySelector('.price-primary');

		return {
			id,
			href:      a ? a.getAttribute('href') : '#',
			image:     img ? img.getAttribute('src') : '',
			imageAlt:  img ? (img.getAttribute('alt') || 'image') : 'image',
			dateText:  dateEl ? dateEl.textContent.trim() : '',
			title:     titleEl ? titleEl.textContent.trim() : '',
			line1Text: line1 ? line1.textContent.trim() : '',
			line2HTML: line2 ? line2.innerHTML.trim() : '',
			priceHTML: priceEl ? priceEl.innerHTML.trim() : ''
		};
	}


		_applyIcons(btn, isFav) {
			const emptyIcon  = btn.querySelector('.icon-heart-empty');
			const filledIcon = btn.querySelector('.icon-heart-filled');

			if (emptyIcon) emptyIcon.classList.remove('active');
			if (filledIcon) filledIcon.classList.remove('active');

			if (isFav) {
				if (filledIcon) filledIcon.classList.add('active');
			} else {
				if (emptyIcon) emptyIcon.classList.add('active');
			}
		}

		syncAll() {
			const buttons = this.root.querySelectorAll('[data-add-favourite]');
			buttons.forEach(btn => {
				const itemEl = btn.closest(this.itemSelector);
				if (!itemEl) return;
				const id = this._ensureId(itemEl);
				this._applyIcons(btn, this.store.has(id));
			});
		}
	}



	// ================= Header (іконка у шапці) =================
	class FavHeaderNav {
		constructor(store, { headerSelector = '[data-fav-button]' } = {}) {
			this.store = store;
			this.els = document.querySelectorAll(headerSelector);
			this.badge = null;
			this.unsubscribe = this.store.onChange(({ count }) => this.render(count));
			this.render(this.store.count());
		}
		render(count) {
			if (!this.els.length) return;

			this.els.forEach(el => {
				let badge = el.querySelector('.counter');

				if (!badge) {
					badge = document.createElement('span');
					badge.className = 'counter';
					el.appendChild(badge);
				}

				if (count > 0) {
					badge.textContent = String(count);
					badge.style.display = '';
				} else {
					badge.textContent = '';
					badge.style.display = 'none';
				}
			});
		}
	}

	// ================= Section header (Обране) =================
	class FavSectionHeader {
		constructor(store, {
			containerSelector = '#favHeader',
			counterSelector   = '.h2-title .counter',
			clearSelector     = '[data-clear-favourite]'
		} = {}) {
			this.store = store;
			this.container = document.querySelector(containerSelector);
			if (!this.container) return;
			this.counterEl = this.container.querySelector(counterSelector);
			this.clearBtn  = this.container.querySelector(clearSelector);
			this._onClick = this._onClick.bind(this);
			this.container.addEventListener('click', this._onClick, false);
			this.unsubscribe = this.store.onChange(({ count }) => this.render(count));
			this.render(this.store.count());
		}
		_onClick(e) {
			const btn = e.target.closest('[data-clear-favourite]');
			if (!btn || !this.container.contains(btn)) return;
			e.preventDefault();
			this.store.clear();
			this.render(0);
		}
		render(count) {
			if (this.counterEl) this.counterEl.textContent = String(count);
			if (this.clearBtn) {
				if (count > 0) this.clearBtn.classList.remove('hidden');
				else this.clearBtn.classList.add('hidden');
			}
		}
	}

	// ================= Favourites Page Renderer =================
	class FavouritesPage {
		constructor(store, {
			listSelector   = '#loadContent[data-load-favourites]',
			paginationId   = 'pagination',
			alertSelector  = '.search-alert'
		} = {}) {
			this.store = store;
			this.list  = document.querySelector(listSelector);
			if (!this.list) return;
			this.pagination = document.getElementById(paginationId);
			this.alertEl    = document.querySelector(alertSelector);
			this.unsubscribe = this.store.onChange(() => this.render());
			this.render();
		}
		render() {
			const data = this.store.getAllData();
			this.list.innerHTML = '';

			if (!data.length) {
				this.list.style.display = 'none';
				if (this.pagination) this.pagination.classList.add('hidden');
				if (this.alertEl) this.alertEl.classList.remove('hidden');
				return;
			}

			this.list.style.display = '';
			if (this.alertEl) this.alertEl.classList.add('hidden');

			const frag = document.createDocumentFragment();
			data.forEach(d => frag.appendChild(this._makeLi(d)));
			this.list.appendChild(frag);

			// ховаємо пагінацію якщо менше 12
			if (this.pagination) {
				if (data.length < 12) {
					this.pagination.classList.add('hidden');
				} else {
					this.pagination.classList.remove('hidden');
				}
			}
		}
		_makeLi(d) {
			const li = document.createElement('li');
			li.className = 'item';
			li.dataset.id = d.id;
			li.innerHTML = `
				<button type="button" class="button round-link" data-add-favourite>
					<i class="icon icon-heart-empty"></i>
					<i class="icon icon-heart-filled active"></i>
				</button>
				<a href="${d.href}" aria-label="Read more" class="object-preview">
					<div class="spaced-inner">
						<figure class="object-image">
							<img src="${d.image}" draggable="false" alt="${d.imageAlt}">
						</figure>
					</div>
					<div class="caption">
						<div class="spaced-inner bordered">
							<div class="date">${d.dateText || ''}</div>
						</div>
						<div class="spaced-inner stretch-inner">
							<h2 class="object-title">${d.title || ''}</h2>
							<div class="description">
								<div class="line">${d.line1Text || ''}</div>
								<div class="line">${d.line2HTML || ''}</div>
								<div class="price-primary">${d.priceHTML || ''}</div>
							</div>
						</div>
					</div>
				</a>`;
			return li;
		}
	}

	// ================= Init =================
	document.addEventListener('DOMContentLoaded', () => {
		const store = new FavStore('favourites');
		new FavCards(store, { rootSelector: 'body', itemSelector: '.item' });
		new FavHeaderNav(store, { headerSelector: '[data-fav-button]' });
		new FavSectionHeader(store, {
			containerSelector : '#favHeader',
			counterSelector   : '.h2-title .counter',
			clearSelector     : '[data-clear-favourite]'
		});
		new FavouritesPage(store, {
			listSelector  : '#loadContent[data-load-favourites]',
			paginationId  : 'pagination',
			alertSelector : '.search-alert'
		});
	});



class SimpleFavToggle {
	constructor({ 
		root = document, 
		onAdd = () => {}, 
		onRemove = () => {} 
	} = {}) {
		this.root = root;
		this.onAdd = onAdd;
		this.onRemove = onRemove;

		this._onClick = this._onClick.bind(this);
		this.root.addEventListener('click', this._onClick, false);
	}

	_onClick(e) {
		const btn = e.target.closest('[data-add-favourite="simple"]');
		if (!btn) return;

		e.preventDefault();

		const emptyIcon  = btn.querySelector('.icon-heart-empty');
		const filledIcon = btn.querySelector('.icon-heart-filled');

		// toggle
		if (emptyIcon?.classList.contains('active')) {
			emptyIcon.classList.remove('active');
			filledIcon?.classList.add('active');
			this.onAdd(btn); // виклик callback при додаванні
		} else {
			filledIcon?.classList.remove('active');
			emptyIcon?.classList.add('active');
			this.onRemove(btn); // виклик callback при видаленні
		}
	}
}

// init
document.addEventListener('DOMContentLoaded', () => {
	new SimpleFavToggle({
		onAdd: (btn) => {
			console.log('Додано в обране', btn);
		},
		onRemove: (btn) => {
			console.log('Видалено з обраного', btn);
		}
	});
});
