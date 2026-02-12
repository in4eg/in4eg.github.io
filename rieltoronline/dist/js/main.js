// accordeon
class Accordion {
	constructor(groupEl, options = {}) {
		this.root = groupEl;

		this.opts = {
			activeClass: options.activeClass || 'active',
			titleSelector: options.titleSelector || '.accordeon-title',
			itemSelector: options.itemSelector || '[data-accordeon]',
			closeOthers: options.closeOthers !== false,
		};

		this._onClick = this._onClick.bind(this);
		this._cache();
		this._bind();
	}

	_cache() {
		this.items = Array.from(this.root.querySelectorAll(this.opts.itemSelector));
	}

	_bind() {
		this.root.addEventListener('click', this._onClick, false);
	}

	destroy() {
		this.root.removeEventListener('click', this._onClick);
	}

	_onClick(e) {
		const title = e.target.closest(this.opts.titleSelector);
		if (!title || !this.root.contains(title)) return;

		e.preventDefault();

		const item = title.closest(this.opts.itemSelector);
		if (!item || !this.root.contains(item)) return;

		const isActive = item.classList.contains(this.opts.activeClass);

		if (isActive) {
			this.close(item);
		} else {
			if (this.opts.closeOthers) this.closeAll();
			this.open(item);
		}
	}

	open(item) {
		item.classList.add(this.opts.activeClass);
	}

	close(item) {
		item.classList.remove(this.opts.activeClass);
	}

	closeAll() {
		this.root
			.querySelectorAll(this.opts.itemSelector)
			.forEach(el => el.classList.remove(this.opts.activeClass));
	}

	static initAll(options) {
		return Array.from(document.querySelectorAll('.accordeon-list'))
			.map(group => new Accordion(group, options));
	}
}

document.addEventListener('DOMContentLoaded', () => {
	Accordion.initAll();
});

class ArticlesPagerLoader {
	constructor({ loadBtn, container, progressEl, captionEl, pagination, perPage = 12, jsonUrl = "articles.json" }) {
		this.loadBtn    = loadBtn;
		this.container  = container;
		this.progressEl = progressEl;
		this.captionEl  = captionEl;
		this.pagination = pagination;
		this.perPage    = perPage;
		this.jsonUrl    = jsonUrl;

		this.baseCount   = this.container ? this.container.querySelectorAll("li.item").length : 0;

		this.jsonItems   = [];
		this.combined    = [];
		this.totalCount  = this.baseCount;
		this.loadedCount = this.baseCount;
		this.activePage  = 1;

		this.appendNextChunk = this.appendNextChunk.bind(this);
	}

	makeLi(item) {
		const li = document.createElement("li");
		li.className = "item";
		li.innerHTML = `
			<a href="${item.link}" class="article-preview">
				<div class="spaced-inner">
					<figure class="article-image">
						<img src="${item.image}" alt="image">
					</figure>
				</div>
				<div class="caption">
					<div class="spaced-inner bordered"><div class="date">${item.date}</div></div>
					<div class="spaced-inner">
						<h2 class="article-title">${item.title}</h2>
						<div class="description">${item.description}</div>
					</div>
				</div>
			</a>`;
		return li;
	}

	buildPagination() {
		if (!this.pagination) return;
		const totalPages = Math.max(1, Math.ceil(this.totalCount / this.perPage));

		this.pagination.innerHTML = "";

		// Prev
		const prev = document.createElement("a");
		prev.href = "#";
		prev.className = "item";
		prev.innerHTML = '<i class="icon icon-chevron-left"></i>';
		if (this.activePage <= 1) prev.classList.add("disabled");
		this.pagination.appendChild(prev);

		// Pages
		for (let i = 1; i <= totalPages; i++) {
			const a = document.createElement("a");
			a.href = "#";
			a.className = "item" + (i <= this.activePage ? " active" : "");
			a.textContent = i;
			this.pagination.appendChild(a);
		}

		// Next
		const next = document.createElement("a");
		next.href = "#";
		next.className = "item";
		next.innerHTML = '<i class="icon icon-chevron-right"></i>';
		if (this.activePage >= totalPages || totalPages === 1) {
			next.classList.add("disabled");
		}
		this.pagination.appendChild(next);
	}

	updateProgress() {
		const percent = this.totalCount ? Math.min((this.loadedCount / this.totalCount) * 100, 100) : 0;
		const left    = Math.max(this.totalCount - this.loadedCount, 0);

		if (this.progressEl) this.progressEl.style.width = percent + "%";
		if (this.captionEl)  this.captionEl.textContent  = left > 0 ? `Залишилось ще ${left} дописів` : "Більше дописів немає";
		if (left <= 0) {
			this.loadBtn.disabled = true;
			this.loadBtn.classList.add("disabled");
		} else {
			this.loadBtn.disabled = false;
			this.loadBtn.classList.remove("disabled");
		}
	}

	appendNextChunk() {
		if (this.loadedCount >= this.totalCount) return;

		const start = this.loadedCount;
		const end   = Math.min(start + this.perPage, this.totalCount);

		const frag = document.createDocumentFragment();
		for (let i = start; i < end; i++) frag.appendChild(this.makeLi(this.combined[i]));
		this.container.appendChild(frag);

		this.loadedCount = end;
		this.activePage  = Math.ceil(this.loadedCount / this.perPage);

		this.updateProgress();
		this.buildPagination();
	}

	async init() {
		try {
			const res = await fetch(this.jsonUrl, { cache: "no-store" });
			this.jsonItems = await res.json();
		} catch {
			this.jsonItems = [];
		}

		const baseShadow = Array.from(this.container.querySelectorAll("li.item")).map(li => {
			const a   = li.querySelector("a.article-preview");
			const img = li.querySelector("img");
			return {
				link: a ? a.getAttribute("href") : "#",
				image: img ? img.getAttribute("src") : "",
				date:  (li.querySelector(".date")?.textContent || "").trim(),
				title: (li.querySelector(".article-title")?.textContent || "").trim(),
				description: (li.querySelector(".description")?.textContent || "").trim()
			};
		});

		this.combined   = baseShadow.concat(this.jsonItems);
		this.totalCount = this.baseCount + this.jsonItems.length;

		this.buildPagination();
		this.updateProgress();

		this.loadBtn.addEventListener("click", this.appendNextChunk);
	}
}

// Виклик класу
document.addEventListener("DOMContentLoaded", () => {
	const loadBtn = document.querySelector("[data-load]");
	if (!loadBtn) return;

	const containerId = loadBtn.getAttribute("data-load");
	const pager = new ArticlesPagerLoader({
		loadBtn,
		container:  document.querySelector(containerId),
		progressEl: loadBtn.querySelector(".progress-bar .state"),
		captionEl:  document.querySelector(".top .caption"),
		pagination: document.querySelector(".pagination-nav"),
		perPage:    12,
		jsonUrl:    "articles.json"
	});
	pager.init();
});

// objects-pager-loader.js
class ObjectsPagerLoader {
	constructor({ loadBtn, container, progressEl, captionEl, pagination, perPage = 12, jsonUrl = "objects.json" }) {
		this.loadBtn    = loadBtn;
		this.container  = container;
		this.progressEl = progressEl;
		this.captionEl  = captionEl;
		this.pagination = pagination;
		this.perPage    = perPage;
		this.jsonUrl    = jsonUrl;

		this.baseCount   = this.container ? this.container.querySelectorAll("li.item").length : 0;

		this.jsonItems   = [];
		this.combined    = [];
		this.totalCount  = this.baseCount;
		this.loadedCount = this.baseCount;
		this.activePage  = 1;

		this.appendNextChunk = this.appendNextChunk.bind(this);
	}

	// перетворює "м2" -> "м<sup>2</sup>"
	_formatM2(s) {
		return (s || "").replace(/м2\b/g, "м<sup>2</sup>");
	}

	makeLi(item) {
		const li = document.createElement("li");
		li.className = "item";
		const detailsHTML = this._formatM2(item.details);

		li.innerHTML = `
			<button type="button" class="button round-link" data-add-favourite>
				<i class="icon icon-heart-empty active"></i>
				<i class="icon icon-heart-filled"></i>
			</button>
			<a href="${item.link}" aria-label="Read more" class="object-preview">
				<div class="spaced-inner">
					<figure class="object-image">
						<img src="${item.image}" alt="image">
					</figure>
				</div>
				<div class="caption">
					<div class="spaced-inner bordered"><div class="date">${item.date || ""}</div></div>
					<div class="spaced-inner stretch-inner">
						<h2 class="object-title">${item.title || ""}</h2>
						<div class="description">
							<div class="line">${item.location || ""}</div>
							<div class="line">${detailsHTML}</div>
							<div class="price">${item.price || ""}</div>
						</div>
					</div>
				</div>
			</a>`;
		return li;
	}

	buildPagination() {
		if (!this.pagination) return;
		const totalPages = Math.max(1, Math.ceil(this.totalCount / this.perPage));

		this.pagination.innerHTML = "";

		const prev = document.createElement("a");
		prev.href = "#";
		prev.className = "item";
		prev.innerHTML = '<i class="icon icon-chevron-left"></i>';
		if (this.activePage <= 1) prev.classList.add("disabled");
		this.pagination.appendChild(prev);

		for (let i = 1; i <= totalPages; i++) {
			const a = document.createElement("a");
			a.href = "#";
			a.className = "item" + (i <= this.activePage ? " active" : "");
			a.textContent = i;
			this.pagination.appendChild(a);
		}

		const next = document.createElement("a");
		next.href = "#";
		next.className = "item";
		next.innerHTML = '<i class="icon icon-chevron-right"></i>';
		if (this.activePage >= totalPages || totalPages === 1) next.classList.add("disabled");
		this.pagination.appendChild(next);
	}

	updateProgress() {
		const percent = this.totalCount ? Math.min((this.loadedCount / this.totalCount) * 100, 100) : 0;
		const left    = Math.max(this.totalCount - this.loadedCount, 0);

		if (this.progressEl) this.progressEl.style.width = percent + "%";
		if (this.captionEl)  this.captionEl.textContent  = left > 0 ? `Залишилось ще ${left} об’єктів` : "Більше об’єктів немає";

		if (left <= 0) {
			this.loadBtn.disabled = true;
			this.loadBtn.classList.add("disabled");
		} else {
			this.loadBtn.disabled = false;
			this.loadBtn.classList.remove("disabled");
		}
	}

	appendNextChunk() {
		if (this.loadedCount >= this.totalCount) return;

		const start = this.loadedCount;
		const end   = Math.min(start + this.perPage, this.totalCount);

		const frag = document.createDocumentFragment();
		for (let i = start; i < end; i++) frag.appendChild(this.makeLi(this.combined[i]));
		this.container.appendChild(frag);

		this.loadedCount = end;
		this.activePage  = Math.ceil(this.loadedCount / this.perPage);

		this.updateProgress();
		this.buildPagination();
	}

	async init() {
		try {
			const res = await fetch(this.jsonUrl, { cache: "no-store" });
			this.jsonItems = await res.json();
		} catch {
			this.jsonItems = [];
		}

		const baseShadow = Array.from(this.container.querySelectorAll("li.item")).map(li => {
			const a   = li.querySelector("a.object-preview");
			const img = li.querySelector("img");
			return {
				link: a ? a.getAttribute("href") : "#",
				image: img ? img.getAttribute("src") : "",
				date:  (li.querySelector(".date")?.textContent || "").trim(),
				title: (li.querySelector(".object-title")?.textContent || "").trim(),
				location: (li.querySelector(".description .line:nth-child(1)")?.textContent || "").trim(),
				details: (li.querySelector(".description .line:nth-child(2)")?.innerHTML || "").trim().replace(/<sup>2<\/sup>/g, "2"),
				price: (li.querySelector(".description .price")?.textContent || "").trim()
			};
		});

		this.combined   = baseShadow.concat(this.jsonItems);
		this.totalCount = this.baseCount + this.jsonItems.length;

		this.buildPagination();
		this.updateProgress();

		this.loadBtn.addEventListener("click", this.appendNextChunk);
	}
}

// Виклик класу
document.addEventListener("DOMContentLoaded", () => {
	const loadBtn = document.querySelector("[data-load-object]");
	if (!loadBtn) return;

	const containerId = loadBtn.getAttribute("data-load-object");
	const pager = new ObjectsPagerLoader({
		loadBtn,
		container:  document.querySelector(containerId),
		progressEl: loadBtn.querySelector(".progress-bar .state"),
		captionEl:  document.querySelector(".top .caption"),
		pagination: document.querySelector(".pagination-nav"),
		perPage:    12,
		jsonUrl:    "objects.json"
	});
	pager.init();
});

class DateRange {
	constructor(root, opts = {}) {
		this.root   = root;
		this.header = root.querySelector('.range-header');
		this.iStart = root.querySelector('[data-start]');
		this.iEnd   = root.querySelector('[data-end]');

		if (!this.header || !this.iStart || !this.iEnd) {
			throw new Error('DateRange: потрібні .range-header, [data-start], [data-end]');
		}

		this.placeholder = this.header.textContent?.trim() || 'Не вибрано';
		this.formatter = opts.formatter || new Intl.DateTimeFormat('uk-UA', { 
			day: '2-digit', month: '2-digit', year: 'numeric' 
		});

		this._onStartChange = this._onStartChange.bind(this);
		this._onEndChange   = this._onEndChange.bind(this);
		this._onClickWrap   = this._onClickWrap.bind(this);

		this._bind();
		this._render();
	}

	_bind() {
		this.iStart.addEventListener('change', this._onStartChange, false);
		this.iEnd.addEventListener('change', this._onEndChange, false);

		this.root.addEventListener('click', this._onClickWrap, { passive: true });

		this.header.addEventListener('click', () => {
			if (typeof this.iStart.showPicker === 'function') {
				this.iStart.showPicker();
			} else {
				this.iStart.focus();
			}
		});

		const form = this.root.closest('form');
		if (form) {
			form.addEventListener('reset', () => {
				requestAnimationFrame(() => {
					this.iStart.value = '';
					this.iEnd.value   = '';
					this.root.classList.remove('focused');
					this._render(true);
				});
			});
		}
	}

	_onClickWrap() {
		this.root.classList.add('focused');
	}

	_onStartChange() {
		if (this.iStart.value) {
			this.iEnd.min = this.iStart.value;
			if (this.iEnd.value && this.iEnd.value < this.iStart.value) {
				this.iEnd.value = this.iStart.value;
			}
		} else {
			this.iEnd.removeAttribute('min');
		}
		this._render(true);
	}

	_onEndChange() {
		if (this.iEnd.value) {
			this.iStart.max = this.iEnd.value;
			if (this.iStart.value && this.iStart.value > this.iEnd.value) {
				this.iStart.value = this.iEnd.value;
			}
		} else {
			this.iStart.removeAttribute('max');
		}
		this._render(true);
	}

	get values() {
		return { start: this.iStart.value || null, end: this.iEnd.value || null };
	}

	set values({ start = null, end = null } = {}) {
		this.iStart.value = start || '';
		this.iEnd.value   = end || '';
		this._onStartChange();
		this._onEndChange();
		this._render(true);
	}

	_formatISO(iso) {
		if (!iso) return '';
		const [y, m, d] = iso.split('-').map(Number);
		const date = new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
		return this.formatter.format(date);
	}

	_render(emit = false) {
		const { start, end } = this.values;
		let text = this.placeholder;

		if (start && end) {
			text = `${this._formatISO(start)} — ${this._formatISO(end)}`;
		} else if (start && !end) {
			text = `з ${this._formatISO(start)}`;
		} else if (!start && end) {
			text = `до ${this._formatISO(end)}`;
		}

		this.header.textContent = text;

		if (emit) {
			this.root.dispatchEvent(new CustomEvent('daterangechange', {
				bubbles: true,
				detail: { start, end, label: text }
			}));
		}
	}
}

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('[data-calendar]').forEach((wrap) => {
		new DateRange(wrap);
	});
});

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('input[type="date"]').forEach((el) => {
		el.addEventListener('click', () => {
			if (typeof el.showPicker === 'function') el.showPicker();
		});
		el.addEventListener('keydown', (e) => {
			if ((e.key === 'Enter' || e.key === ' ') && typeof el.showPicker === 'function') {
				e.preventDefault();
				el.showPicker();
			}
		});
	});
});

class FiltersUI {
	constructor(root) {
		this.root = root;
		this.tagCover = root.querySelector('.tag-cover');
		this.tagList = root.querySelector('.tag-list');
		this.clearBtn = root.querySelector('.button-link');

		this.bind();
		this.rebuild();
	}

	qsa = s => [...this.root.querySelectorAll(s)];
	txt = el => el?.textContent.trim() || '';

	bind() {
		this.root.addEventListener('change', e => {
			if (
				e.target.matches(
					'input[type="radio"], input[type="checkbox"], input[type="date"], select'
				)
			) {
				this.rebuild();
			}
		});

		this.qsa('[data-range]').forEach(block => {
			block.addEventListener('dualrangechange', () => this.rebuild());
		});

		this.clearBtn?.addEventListener('click', e => {
			e.preventDefault();
			location.href = location.origin + location.pathname;
		});
	}

	rebuild() {
		this.tagList.innerHTML = '';

		// radio + checkbox
		this.qsa('input[type="radio"]:checked, input[type="checkbox"]:checked')
			.forEach(inp => {
				const label = this.root.querySelector(`label[for="${inp.id}"]`);
				if (label) {
					this.addTag(inp.name, this.txt(label), inp.value);
				}
			});

		// date
		const s = this.root.querySelector('[name="filter[startDatetime]"]')?.value;
		const e = this.root.querySelector('[name="filter[endDatetime]"]')?.value;
		if (s || e) {
			this.addTag('filter[date]', `Дата: ${s || '…'} – ${e || '…'}`);
		}

		// ranges
		this.qsa('[data-range]').forEach(block => {
			const group = block.querySelector('.range-group');
			const dr = group?._dualRange;
			if (!dr) return;

			if (Number(dr.rMin.value) === dr.min &&
				Number(dr.rMax.value) === dr.max) return;

			const label = this.txt(block.querySelector('.label'));
			const key = group.querySelector('.input-min')?.name;
			if (!key) return;

			this.addTag(
				key,
				`${label}: ${dr.rMin.value} – ${dr.rMax.value}`
			);
		});

		this.updateCounter();
	}

	addTag(key, text, value = null) {
		const tag = document.createElement('div');
		tag.className = 'tag';
		tag.dataset.key = key;
		if (value !== null) tag.dataset.value = value;
		tag.textContent = text;
		this.tagList.appendChild(tag);
	}

	updateCounter() {
		const c = this.tagList.children.length;
		this.qsa('.counter').forEach(el => el.textContent = c);
		this.tagCover?.classList.toggle('hidden', c === 0);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.filters-cover').forEach(el => {
		el._filtersUI = new FiltersUI(el);
	});
});

class CopyToClipboard {

	constructor(button) {
		this.button = button;
		this.copied = false;
		this.copiedId = '';

		this.button.addEventListener('click', () => {
			const value = this.button.dataset.clipboardCopy;
			if (!value) return;

			this.copyValue(value);
		});
	}

	copyValue(val) {
		const textarea = document.createElement('textarea');

		textarea.value = val;
		textarea.setAttribute('readonly', '');
		textarea.style.position = 'fixed';
		textarea.style.top = '-9999px';
		textarea.style.left = '-9999px';

		document.body.appendChild(textarea);
		textarea.select();

		try {
			document.execCommand('copy');
			this.copied = true;
			this.copiedId = val;
			this.button.classList.add('tooltip-show');
		} catch (e) {
			console.error('Copy failed', e);
		}

		document.body.removeChild(textarea);

		setTimeout(() => {
			this.copied = false;
			this.button.classList.remove('tooltip-show');
			this.copiedId = '';
		}, 350);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('[data-clipboard-copy]').forEach(button => {
		new CopyToClipboard(button);
	});
});

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

class ToggleHandler {
	constructor({ 
		btnSelector = '[data-toggle]', 
		activeClass = 'active', 
		animatedClass = 'animated', 
		openedClass = 'opened',
		overlayClass = 'overlayed',
		delay = 250 
	} = {}) {
		this.btnSelector = btnSelector;
		this.activeClass = activeClass;
		this.animatedClass = animatedClass;
		this.openedClass = openedClass;
		this.overlayClass = overlayClass;
		this.delay = delay;

		this._onClick = this._onClick.bind(this);
		this._onResize = this._onResize.bind(this);

		this.init();
	}

	init() {
		document.addEventListener('click', this._onClick);
		window.addEventListener('resize', this._onResize, { passive: true });
	}

	_onClick(e) {
		const button = e.target.closest(this.btnSelector);
		if (!button) return;

		const targetSelector = button.getAttribute('data-toggle');
		const target = document.querySelector(targetSelector);
		if (!target) return;

		const isActive = target.classList.contains(this.activeClass);

		if (!isActive) {
			target.classList.add(this.activeClass);
			button.classList.add(this.openedClass);

			if (window.innerWidth <= 768) {
				document.documentElement.classList.add(this.overlayClass);
				document.body.classList.add(this.overlayClass);
			}

			setTimeout(() => {
				target.classList.add(this.animatedClass);
			}, this.delay);
		} else {
			target.classList.remove(this.activeClass, this.animatedClass);
			button.classList.remove(this.openedClass);

			document.documentElement.classList.remove(this.overlayClass);
			document.body.classList.remove(this.overlayClass);
		}
	}

	_onResize() {
		if (window.innerWidth > 768) {
			document.documentElement.classList.remove(this.overlayClass);
			document.body.classList.remove(this.overlayClass);
		}
	}
}

document.addEventListener('DOMContentLoaded', () => {
	new ToggleHandler();
});

class HeaderToggler {
	constructor({
		headerSelector = '#mainHeader',
		navSelector = '#mainNavigation',
		toggleAttr = '[data-toggle-element]',
		closeAttr = '[data-header-close]',
		defaultActiveClass = 'active',
		animatedClass = 'animated',
		overlayClass = 'overlayed'
	} = {}) {
		this.header = document.querySelector(headerSelector);
		this.nav = document.querySelector(navSelector);
		this.toggleAttr = toggleAttr;
		this.closeAttr = closeAttr;
		this.DEFAULT_ACTIVE = defaultActiveClass;
		this.ANIMATED = animatedClass;
		this.OVERLAYED = overlayClass;

		this.toggles = Array.from(document.querySelectorAll(this.toggleAttr));
		this.closeButtons = Array.from(document.querySelectorAll(this.closeAttr));

		this._onToggleClick = this._onToggleClick.bind(this);
		this._onBodyClick = this._onBodyClick.bind(this);
		this.hideMobileNav = this.hideMobileNav.bind(this);

		this.init();
	}

	init() {
		if (!this.header) return;

		this.toggles.forEach((btn) => {
			btn.addEventListener('click', this._onToggleClick, false);
		});

		this.closeButtons.forEach((btn) => {
			btn.addEventListener('click', this.hideMobileNav, false);
		});

		document.body.addEventListener('click', this._onBodyClick, { passive: true });
	}

	destroy() {
		this.toggles.forEach((btn) => {
			btn.removeEventListener('click', this._onToggleClick);
		});
		this.closeButtons.forEach((btn) => {
			btn.removeEventListener('click', this.hideMobileNav);
		});
		document.body.removeEventListener('click', this._onBodyClick, { passive: true });
	}

	_onToggleClick(e) {
		const button = e.currentTarget;

		// Original behavior: always remove 'menu-active' from header first
		this.header.classList.remove('menu-active');

		const defaultClass = this.DEFAULT_ACTIVE;
		const toggleClass = button.dataset.toggleClass ? button.dataset.toggleClass : defaultClass;
		const elementLink = button.dataset.toggleElement;

		if (!elementLink) return;

		const targets = Array.from(document.querySelectorAll(elementLink));
		if (!targets.length) return;

		targets.forEach((el) => {
			const isOpen = el.classList.contains(toggleClass);

			if (!isOpen) {
				this._openElement(el, button, toggleClass, defaultClass);
			} else {
				this._closeElement(el, button, toggleClass, defaultClass);
			}
		});
	}

	_openElement(element, button, toggleClass, defaultClass) {
		element.classList.add(toggleClass);
		button.classList.add(defaultClass);

		window.setTimeout(() => {
			element.classList.add(this.ANIMATED);
		}, 250);

		if (element.classList.contains('header-navigation')) {
			this._lockBody();
		}
	}

	_closeElement(element, button, toggleClass, defaultClass) {
		element.classList.remove(toggleClass);
		button.classList.remove(defaultClass);

		// Unlock body if it was overlayed
		if (document.body.classList.contains(this.OVERLAYED)) {
			this._unlockBody();
		}

		// Keep original exception: do not remove animated from .main-header
		if (!element.classList.contains('main-header')) {
			element.classList.remove(this.ANIMATED);
		}
	}

	hideMobileNav() {
		// Guard if nav missing
		if (!this.nav) return;

		if (this.nav.classList.contains(this.DEFAULT_ACTIVE)) {
			const navToggleBtn = document.querySelector('[data-toggle-element="#mainNavigation"]');

			if (navToggleBtn) {
				navToggleBtn.classList.remove(this.DEFAULT_ACTIVE);
			}

			this.nav.classList.remove(this.DEFAULT_ACTIVE, this.ANIMATED);
			this._unlockBody();
		}
	}

	_onBodyClick(e) {
		if (e.target.closest('[data-toggle-element="#mainNavigation"]')) return;
		if (e.target.closest('#mainNavigation')) return;

		this.hideMobileNav();
	}

	_lockBody() {
		const bodyComputedWidth = window.getComputedStyle(document.body).width;
		document.body.style.width = bodyComputedWidth;
		document.body.classList.add(this.OVERLAYED);

		if (this.header) {
			const headerComputedWidth = window.getComputedStyle(this.header).width;
			this.header.style.width = headerComputedWidth;
		}
	}

	_unlockBody() {
		document.body.classList.remove(this.OVERLAYED);
		document.body.style.width = '';

		if (this.header) {
			this.header.style.width = '';
		}
	}
}

// Init immediately on DOM ready
document.addEventListener('DOMContentLoaded', function () {
	new HeaderToggler();
});

class ScrollFixedFooterAware {
	constructor(selector) {
		this.fixedEl = document.querySelector(selector);
		this.footer = document.querySelector('footer');

		if (!this.fixedEl || !this.footer) return;

		this.defaultBottom = 50;
		this.offset = 35;

		this.onScroll = this.onScroll.bind(this);
		window.addEventListener('scroll', this.onScroll);
		window.addEventListener('resize', this.onScroll);

		this.onScroll();
	}

	onScroll() {
		const footerRect = this.footer.getBoundingClientRect();
		const windowHeight = window.innerHeight;

		const overlap = windowHeight - footerRect.top;

		if (overlap > 0) {
			const newBottom = overlap + this.offset;
			this.fixedEl.style.bottom = `${newBottom}px`;
		} else {
			this.fixedEl.style.bottom = `${this.defaultBottom}px`;
		}
	}
}

new ScrollFixedFooterAware('[data-scroll-fixed]');
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

// smoth scroll
document.addEventListener('DOMContentLoaded', function(){
	Array.prototype.forEach.call(document.querySelectorAll("[data-scrollto]"), function(button){
		button.addEventListener("click", function (e) {
			e.preventDefault();
			let scrollTarget = button.dataset.scrollto;
			document.querySelector(scrollTarget).scrollIntoView({
				behavior: 'smooth' 
			});
		});
	});
});
// data-show-more
document.addEventListener('DOMContentLoaded', function(){
	let showMoreButton = document.getElementById('showMore') ? document.getElementById('showMore').querySelector("[data-show-more]") : null;
	let elementsCover = showMoreButton ? document.querySelector(showMoreButton.dataset.showMore) : null;

	function setMoreCounter() {
		if (!elementsCover) return;
		let totalCount = elementsCover.children.length;
		let visibleCount = parseInt(elementsCover.dataset.mobileVisible);

		for (i = visibleCount; i < elementsCover.children.length; i++) {
			elementsCover.children[i].classList.add('hidden');
		};

		if (showMoreButton) {
			showMoreButton.querySelector('.count').innerHTML = totalCount - visibleCount;
		}
	};

	function showMoreElements(button){
		let allChildren = elementsCover.children;
		for (i = 0; i < elementsCover.children.length; i++) {
			elementsCover.children[i].classList.remove('hidden');
		};
		showMoreButton.parentElement.classList.add('hidden');
	}

	if (window.innerWidth <= 768) {
		setMoreCounter();
	};

	window.addEventListener('resize', function(event){
		if (window.innerWidth <= 768) {
			setMoreCounter();
		};
	});

	document.body.addEventListener('click', function(e){
		let showMoreButton = e.target.closest("[data-show-more]");
		if (showMoreButton){
			showMoreElements(showMoreButton);
		};
	});
});
// data-accordeon
document.addEventListener('DOMContentLoaded', function(){
	let allTabFilters = document.querySelectorAll("[data-tag-filter]");

	function alertAndNavigationToggle(open){
		let alertMessage = document.getElementById('searchEmptyMessage');
		let pagination = document.getElementById('filterPagination');
		let filterForm = document.getElementById('searchCaseForm');

		if (open) {
			if (filterForm) filterForm.classList.add('disabled');
			if (alertMessage) alertMessage.classList.remove('hidden');
			if (pagination) pagination.classList.add('hidden');
		} else {
			if (filterForm) filterForm.classList.remove('disabled');
			if (alertMessage) alertMessage.classList.add('hidden');
			if (pagination) pagination.classList.remove('hidden');
		};
	};

	let applyTagFilter = function(data){
		if (!data) return;

		let parentCover = document.querySelector(data.parent);
		let selectedTags = parentCover.querySelectorAll(data.tag);

		let alertMessage = document.getElementById('searchEmptyMessage');
		let pagination = document.getElementById('filterPagination');

		document.getElementById('searchCaseForm').classList.remove('disabled');

		[].forEach.call(parentCover.children, function(tag) {
			tag.classList.add('hidden-tag');
		});

		if (selectedTags.length) {
			[].forEach.call(selectedTags, function(tag) {
				tag.classList.remove('hidden-tag');
			});
			// we need to combine tag filter and form filter
			let allListItems = parentCover.querySelectorAll('li');
			let hiddenListItems = parentCover.querySelectorAll('.hidden');
			let hiddenByFilterListItems = parentCover.querySelectorAll('.hidden-tag');

			if (parentCover.querySelectorAll('li:not(.hidden):not(.hidden-tag)').length) {
				alertAndNavigationToggle(false);
			} else {
				if (hiddenByFilterListItems.length >= hiddenListItems.length || hiddenListItems.length >= hiddenByFilterListItems.length) {
					alertAndNavigationToggle(true);
				}
			}
		} else {
			alertAndNavigationToggle(true);
		}
		// callback
		window.onTagFilter(data);
	};

	function applyDropdownFilter(button, dropdown){
		let buttonText = button.innerHTML;
		let dropdownTitle = dropdown.querySelector('.dropdown-header').querySelector('.item');
		dropdownTitle.innerHTML = buttonText;
		dropdown.classList.remove('opened');
	};

	for (i = 0; i < allTabFilters.length; i++) {
		let allTabButtons = allTabFilters[i].querySelectorAll("[data-tag]");
		let tagParent = allTabFilters[i].dataset.tagFilter;
		for (n = 0; n < allTabButtons.length; n++) {
			let button = allTabButtons[n];
			button.addEventListener('click', function(e){
				let tag = button.dataset.tag;
				if (tag) {
					if (button.closest('[data-dropdown]')) {
						applyDropdownFilter(button, button.closest('[data-dropdown]'));
					}
					applyTagFilter({tag: tag, parent: tagParent});
				};
			}, true);
		}
	}
});

// show video modal
document.addEventListener('DOMContentLoaded', function(){
	let videoTriggerElemens = document.querySelectorAll("[data-video-src]");

	let videoModalToggle = function(){
		let videoSrc = this.src;
		let videoPopup = document.getElementById('videoPopup');

		function showModal(){
			videoPopup.classList.add('showed')

			setTimeout(function(){
				videoPopup.classList.add('active');
			}, 25)
		}

		let promise = new Promise(function(resolve, reject) {
			videoPopup.querySelector('iframe').src = videoSrc;
		});
		promise.then(showModal())
	}

	for (i = 0; i < videoTriggerElemens.length; i++) {
		let videoSrc = videoTriggerElemens[i].dataset.videoSrc;
		if (videoSrc) {
			videoTriggerElemens[i].addEventListener('click', videoModalToggle.bind({src: videoSrc}), true);
		};
	};
})
//dropdown
document.addEventListener('DOMContentLoaded', function(){
	let DROPDOWN_ACTIVE_CLASS = 'opened';
	let allDropdowns = document.querySelectorAll("[data-dropdown]");
	let allDropdownButtons = document.querySelectorAll("[data-dropdown] .dropdown-header");

	let closeAllDropdowns = function(){
		for (i = 0; i < allDropdowns.length; i++) {
			let dropdownInner = allDropdowns[i].querySelector('.dropdown-inner');
			allDropdowns[i].classList.remove(DROPDOWN_ACTIVE_CLASS);
			dropdownInner.style.maxHeight = null;
		}
	}

	let dropdownToggle = function() {
		let button = this;
		let dropdownInner = button.parentElement.querySelector('.dropdown-inner');
		if (button.parentElement.classList.contains(DROPDOWN_ACTIVE_CLASS)) {
			closeAllDropdowns();
		} else {
			closeAllDropdowns();
			button.parentElement.classList.add(DROPDOWN_ACTIVE_CLASS);
		};
	}

	for (i = 0; i < allDropdownButtons.length; i++) {
		allDropdownButtons[i].addEventListener('click', dropdownToggle, false);
	};

	document.addEventListener("DOMContentLoaded", function(){

		let dropdownInners = document.querySelectorAll('.dropdown-inner');

		dropdownInners.forEach(inner => {
			inner.addEventListener('click', function(e){
				e.stopPropagation();
			});
		});

	});


});
(function(){
	function isImage(file) {
		return file && file.type && file.type.startsWith('image/');
	}

	function readFileAsDataURL(file) {
		return new Promise(function(resolve, reject){
			const reader = new FileReader();
			reader.onload = function() { resolve(reader.result); };
			reader.onerror = function(err) { reject(err); };
			reader.readAsDataURL(file);
		});
	}

	document.querySelectorAll('.userpic').forEach(function(userpic){
		const uploadBox = userpic.querySelector('[data-upload]');
		const label = userpic.querySelector('[data-label]');
		const input = userpic.querySelector('[data-file]');
		if (!uploadBox || !label || !input) return;

		const existingImg = uploadBox.querySelector('img');
		const originalSrc = existingImg ? existingImg.src : '';

		function removeButtonRemove() {
			const prev = uploadBox.querySelector('.userpic-remove');
			if (prev) prev.remove();
		}

		function addRemoveButton() {
			removeButtonRemove();
			const btn = document.createElement('button');
			btn.type = 'button';
			btn.className = 'userpic-remove';
			btn.setAttribute('aria-label', 'Remove photo');
			btn.textContent = '×';
			btn.addEventListener('click', function(e){
				e.stopPropagation();
				if (existingImg) existingImg.src = originalSrc;
				else uploadBox.innerHTML = originalSrc ? ('<img src="' + originalSrc + '" class="image">') : '';
				input.value = '';
				removeButtonRemove();
				// reset header icon if present
				resetHeaderUserPhoto();
			});
			uploadBox.appendChild(btn);
		}

		async function handleFile(file) {
			if (!file) return;
			if (!isImage(file)) {
				uploadBox.classList.add('file-error');
				setTimeout(()=>uploadBox.classList.remove('file-error'), 1500);
				return;
			}
			try {
				const dataUrl = await readFileAsDataURL(file);
				let img = uploadBox.querySelector('img');
				if (!img) {
					img = document.createElement('img');
					img.className = 'image';
					uploadBox.innerHTML = '';
					uploadBox.appendChild(img);
				}
				img.src = dataUrl;
				img.style.opacity = "1";
				addRemoveButton();
				updateHeaderUserPhoto(dataUrl);
			} catch (err) {
				console.error('File read error', err);
			}
		}

		input.addEventListener('change', function(){
			const file = input.files && input.files[0];
			handleFile(file);
		});

		label.ondragover = function(e){
			e.preventDefault();
			label.classList.add('hover');
		};
		label.ondragleave = function(e){
			e.preventDefault();
			label.classList.remove('hover');
		};
		label.ondrop = function(e){
			e.preventDefault();
			label.classList.remove('hover');
			const dt = e.dataTransfer;
			if (!dt) return;
			const file = dt.files && dt.files[0];
			if (file) {
				try {
					const dataTransfer = new DataTransfer();
					dataTransfer.items.add(file);
					input.files = dataTransfer.files;
				} catch (err) {
					console.warn('Could not set input.files programmatically', err);
				}
				handleFile(file);
			}
		};

		uploadBox.addEventListener('click', function(){
			input.click();
		});
	});

	// === HEADER PHOTO SWAP ===
	function updateHeaderUserPhoto(src) {
		const header = document.getElementById('mainHeader');
		if (!header) return;
		const userLink = header.querySelector('#userLink');
		if (!userLink) return;
		const existingImg = userLink.querySelector('img');
		const icon = userLink.querySelector('i.icon-user');
		if (existingImg) {
			existingImg.src = src;
		} else {
			if (icon) icon.remove();
			const img = document.createElement('img');
			img.src = src;
			img.alt = 'user';
			img.className = 'userpic';
			userLink.appendChild(img);
		}
	}

	function resetHeaderUserPhoto() {
		const header = document.getElementById('mainHeader');
		if (!header) return;
		const userLink = header.querySelector('#userLink');
		if (!userLink) return;
		const img = userLink.querySelector('img');
		if (img) img.remove();
		if (!userLink.querySelector('i.icon-user')) {
			const icon = document.createElement('i');
			icon.className = 'icon icon-user';
			userLink.appendChild(icon);
		}
	}
})();

// Get Cities for radio / checkbox (filter[…])
class GetCities {
	constructor({
		jsonSelector = '#city-rayon',
		cityName = 'filter[city]',
		districtName = 'filter[district][]',
		cityInputSelector = '#city',
		districtGroupSelector = '#district'
	} = {}) {
		this.jsonEl = document.querySelector(jsonSelector);
		if (!this.jsonEl) return;

		this.data = JSON.parse(this.jsonEl.textContent);

		this.cityContainer = document.querySelector(`[name="${cityName}"]`)?.closest('[data-options]');
		this.districtContainer = document.querySelector(`[name="${districtName}"]`)?.closest('[data-options]');

		this.cityInput = document.querySelector(cityInputSelector);
		this.districtGroup = document
			.querySelector(districtGroupSelector)
			?.closest('.labeled-group.filter-group.form-group');

		this.params = new URLSearchParams(location.search);

		this.cityName = cityName;
		this.districtName = districtName;

		this.init();
	}

	init() {
		this.renderCities();
		this.restoreFromGet();
		this.toggleDistrictState();
		this.bindEvents();
	}

	/* ---------- RENDER ---------- */
	renderCities() {
		if (!this.cityContainer) return;
		this.cityContainer.innerHTML = '';

		this.data.cities.forEach(city => {
			this.cityContainer.appendChild(this._createCityItem(city));
		});
	}

	renderDistricts(cityId) {
		if (!this.districtContainer) return;
		this.districtContainer.innerHTML = '';

		Object.values(this.data.rayons)
			.filter(r => String(r.city_id) === String(cityId))
			.forEach(rayon => {
				this.districtContainer.appendChild(this._createDistrictItem(rayon));
			});
	}

	/* ---------- CREATE ---------- */
	_createCityItem(city) {
		const item = document.createElement('div');
		item.className = 'item';
		item.innerHTML = `
			<div class="radio-group form-group">
				<input
					type="radio"
					name="${this.cityName}"
					class="radio"
					id="city-${city.id}"
					value="${city.id}">
				<label for="city-${city.id}" class="radio-label" data-label>
					${city.name}
				</label>
			</div>`;
		return item;
	}

	_createDistrictItem(rayon) {
		const item = document.createElement('div');
		item.className = 'item';
		item.innerHTML = `
			<div class="checkbox-group form-group">
				<input
					type="checkbox"
					name="${this.districtName}"
					class="checkbox"
					id="district-${rayon.url}"
					value="${rayon.url}">
				<label for="district-${rayon.url}" class="checkbox-label" data-label>
					${rayon.name}
				</label>
			</div>`;
		return item;
	}

	/* ---------- EVENTS ---------- */
	bindEvents() {
		document.addEventListener('change', e => {
			if (e.target.name !== this.cityName) return;

			this.renderDistricts(e.target.value);
			this.toggleDistrictState(true);
			this.rebuildFiltersUI();
		});

		this.cityInput?.addEventListener('input', () => {
			this.toggleDistrictState();
		});
	}

	/* ---------- RESTORE ---------- */
	restoreFromGet() {
		const cityId = this.params.get(this.cityName);
		if (!cityId) return;

		const radio = document.querySelector(
			`[name="${this.cityName}"][value="${cityId}"]`
		);

		if (radio) {
			radio.checked = true;
			this.renderDistricts(cityId);
		}

		const districts = this.params.getAll(this.districtName);
		districts.forEach(val => {
			const cb = document.querySelector(
				`[name="${this.districtName}"][value="${val}"]`
			);
			if (cb) cb.checked = true;
		});
	}

	/* ---------- STATE ---------- */
	toggleDistrictState(enable = false) {
		if (!this.districtGroup) return;

		if (enable || document.querySelector(`[name="${this.cityName}"]:checked`)) {
			this.districtGroup.classList.remove('disabled');
		} else {
			this.districtGroup.classList.add('disabled');
			this.districtContainer && (this.districtContainer.innerHTML = '');
		}
	}

	rebuildFiltersUI() {
		document.querySelectorAll('.filters-cover').forEach(el => {
			el._filtersUI?.rebuild?.();
		});
	}
}

document.addEventListener('DOMContentLoaded', () => {
	new GetCities();
});




// Home page/ Telegram Page
class GetCitiesForSelect {
	constructor({
		jsonSelector = '#city-rayon',
		citySelect = '#city-select',
		districtSelect = '#district-select'
	} = {}) {
		this.jsonEl = document.querySelector(jsonSelector);
		if (!this.jsonEl) return;

		this.data = JSON.parse(this.jsonEl.textContent);

		this.citySelect = document.querySelector(citySelect);
		this.districtSelect = document.querySelector(districtSelect);

		if (!this.citySelect || !this.districtSelect) return;

		this.init();
	}

	init() {
		this.renderCities();
		this.disableDistricts();
		this.bindSelecterEvents();
	}

	/* ---------- CITIES ---------- */
	renderCities() {
		this.citySelect.innerHTML = '';
		this.citySelect.appendChild(new Option('Усі', ''));

		this.data.cities.forEach(city => {
			this.citySelect.appendChild(
				new Option(city.name, city.id)
			);
		});

		this.refreshSelecter(this.citySelect);
	}

	/* ---------- DISTRICTS ---------- */
	renderDistricts(cityId) {
		this.districtSelect.innerHTML = '';
		this.districtSelect.appendChild(new Option('Усі', ''));

		Object.values(this.data.rayons)
			.filter(r => String(r.city_id) === String(cityId))
			.forEach(rayon => {
				this.districtSelect.appendChild(
					new Option(rayon.name, rayon.url)
				);
			});

		this.districtSelect.disabled = false;
		this.districtSelect.classList.remove('disabled');

		this.refreshSelecter(this.districtSelect);
	}

	clearDistricts() {
		this.districtSelect.innerHTML = '';
		this.districtSelect.appendChild(new Option('Усі', ''));
		this.disableDistricts();
		this.refreshSelecter(this.districtSelect);
	}

	disableDistricts() {
		this.districtSelect.disabled = true;
		this.districtSelect.classList.add('disabled');
	}

	/* ---------- SELECTER INTEGRATION ---------- */
	bindSelecterEvents() {
		if (!window.__selecterInstances) return;

		const cityInstance = window.__selecterInstances.find(
			i => i.select === this.citySelect
		);

		if (!cityInstance) return;

		const originalOnChange = cityInstance.settings.onChange;

		cityInstance.settings.onChange = (selectEl, settings, value) => {
			if (!value) {
				this.clearDistricts();
			} else {
				this.renderDistricts(value);
			}

			if (typeof originalOnChange === 'function') {
				originalOnChange(selectEl, settings, value);
			}
		};
	}

	refreshSelecter(selectEl) {
		if (!window.__selecterInstances) return;

		const instance = window.__selecterInstances.find(
			i => i.select === selectEl
		);

		instance?.refresh();
	}
}

document.addEventListener('DOMContentLoaded', () => {
	window.__selecterInstances = initSelecter('.select');

	new GetCitiesForSelect();
});

// header scroll
document.addEventListener('DOMContentLoaded', function(){
	const CHECK_POINT = 10;
	const DARK_HEADER_CLASS = 'dark';
	const LIGTH_HEADER_CLASS = 'light';

	let addHeaderShadow = function(point){
		if (window.pageYOffset && window.pageYOffset >= CHECK_POINT) {
			document.getElementById('mainHeader').classList.add('scrolled');
		} else {
			document.getElementById('mainHeader').classList.remove('scrolled');
		}
	};

	let addHeaderColor = function(){
		let pageHeader = document.getElementById('mainHeader');
		let sections = pageHeader.dataset.scrollCheck;
		let sectionData = {};
		if (sections && sections.length) {
			Array.prototype.forEach.call(document.querySelectorAll(sections), function(section, i){
				let sectionStart = section.offsetTop;
				let sectionEnd = sectionStart + section.getBoundingClientRect().height;
				let pageOffset = window.pageYOffset + pageHeader.getBoundingClientRect().height/2;
				if (pageOffset >= sectionStart && pageOffset  <= sectionEnd) {
					sectionData[i] = true;
				} else {
					sectionData[i] = false;
				}
			});
		}
		if (Object.values(sectionData).every(el => el == false)) {
			pageHeader.classList.add(DARK_HEADER_CLASS)
			pageHeader.classList.remove(LIGTH_HEADER_CLASS)
		} else {
			pageHeader.classList.remove(DARK_HEADER_CLASS)
			pageHeader.classList.add(LIGTH_HEADER_CLASS)
		}
	};

	addHeaderShadow(CHECK_POINT);
	addHeaderColor();

	document.addEventListener("scroll", (event) => {
		addHeaderShadow(CHECK_POINT);
		addHeaderColor();
	});

	window.addEventListener('resize', function(event){
		addHeaderColor();
	});
});

!(function (e, t) {
		if ("object" == typeof exports && "object" == typeof module) module.exports = t();
		else if ("function" == typeof define && define.amd) define([], t);
		else {
				var n = t();
				for (var o in n) ("object" == typeof exports ? exports : e)[o] = n[o];
		}
})(window, function () {
		return (function (e) {
				var t = {};
				function n(o) {
						if (t[o]) return t[o].exports;
						var i = (t[o] = { i: o, l: !1, exports: {} });
						return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
				}
				return (
						(n.m = e),
						(n.c = t),
						(n.d = function (e, t, o) {
								n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
						}),
						(n.r = function (e) {
								"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
						}),
						(n.t = function (e, t) {
								if ((1 & t && (e = n(e)), 8 & t)) return e;
								if (4 & t && "object" == typeof e && e && e.__esModule) return e;
								var o = Object.create(null);
								if ((n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
										for (var i in e)
												n.d(
														o,
														i,
														function (t) {
																return e[t];
														}.bind(null, i)
												);
								return o;
						}),
						(n.n = function (e) {
								var t =
										e && e.__esModule
												? function () {
															return e.default;
													}
												: function () {
															return e;
													};
								return n.d(t, "a", t), t;
						}),
						(n.o = function (e, t) {
								return Object.prototype.hasOwnProperty.call(e, t);
						}),
						(n.p = ""),
						n((n.s = 0))
				);
		})([
				function (e, t, n) {
						"use strict";
						n.r(t);
						var o,
								i = "fslightbox-",
								r = "".concat(i, "styles"),
								s = "".concat(i, "cursor-grabbing"),
								a = "".concat(i, "full-dimension"),
								c = "".concat(i, "flex-centered"),
								l = "".concat(i, "open"),
								u = "".concat(i, "transform-transition"),
								d = "".concat(i, "absoluted"),
								p = "".concat(i, "slide-btn"),
								f = "".concat(p, "-container"),
								h = "".concat(i, "fade-in"),
								m = "".concat(i, "fade-out"),
								g = h + "-strong",
								v = m + "-strong",
								b = "".concat(i, "opacity-"),
								x = "".concat(b, "1"),
								y = "".concat(i, "source");
						function w(e) {
								return (w =
										"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
												? function (e) {
															return typeof e;
													}
												: function (e) {
															return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
													})(e);
						}
						function S(e) {
								var t = e.stageIndexes,
										n = e.core.stageManager,
										o = e.props.sources.length - 1;
								(n.getPreviousSlideIndex = function () {
										return 0 === t.current ? o : t.current - 1;
								}),
										(n.getNextSlideIndex = function () {
												return t.current === o ? 0 : t.current + 1;
										}),
										(n.updateStageIndexes =
												0 === o
														? function () {}
														: 1 === o
														? function () {
																	0 === t.current ? ((t.next = 1), delete t.previous) : ((t.previous = 0), delete t.next);
															}
														: function () {
																	(t.previous = n.getPreviousSlideIndex()), (t.next = n.getNextSlideIndex());
															}),
										(n.i =
												o <= 2
														? function () {
																	return !0;
															}
														: function (e) {
																	var n = t.current;
																	if ((0 === n && e === o) || (n === o && 0 === e)) return !0;
																	var i = n - e;
																	return -1 === i || 0 === i || 1 === i;
															});
						}
						"object" === ("undefined" == typeof document ? "undefined" : w(document)) &&
								(((o = document.createElement("style")).className = r),
								o.appendChild(
										document.createTextNode(
												".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightboxv{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightboxl{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightboxl div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightboxl 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightboxl div:nth-child(1){animation-delay:-.45s}.fslightboxl div:nth-child(2){animation-delay:-.3s}.fslightboxl div:nth-child(3){animation-delay:-.15s}@keyframes fslightboxl{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}"
										)
								),
								document.head.appendChild(o));
						function L(e) {
								var t,
										n = e.props,
										o = 0,
										i = {};
								(this.getSourceTypeFromLocalStorageByUrl = function (e) {
										return t[e] ? t[e] : r(e);
								}),
										(this.handleReceivedSourceTypeForUrl = function (e, n) {
												if (!1 === i[n] && (o--, "invalid" !== e ? (i[n] = e) : delete i[n], 0 === o)) {
														!(function (e, t) {
																for (var n in t) e[n] = t[n];
														})(t, i);
														try {
																localStorage.setItem("fslightbox-types", JSON.stringify(t));
														} catch (e) {}
												}
										});
								var r = function (e) {
										o++, (i[e] = !1);
								};
								if (n.disableLocalStorage) (this.getSourceTypeFromLocalStorageByUrl = function () {}), (this.handleReceivedSourceTypeForUrl = function () {});
								else {
										try {
												t = JSON.parse(localStorage.getItem("fslightbox-types"));
										} catch (e) {}
										t || ((t = {}), (this.getSourceTypeFromLocalStorageByUrl = r));
								}
						}
						function A(e, t, n, o) {
								e.data;
								var i = e.elements.sources,
										r = n / o,
										s = 0;
								this.adjustSize = function () {
										if ((s = e.mw / r) < e.mh) return n < e.mw && (s = o), a();
										(s = o > e.mh ? e.mh : o), a();
								};
								var a = function () {
										(i[t].style.width = s * r + "px"), (i[t].style.height = s + "px");
								};
						}
						function C(e, t) {
								var n = this,
										o = e.collections.sourceSizers,
										i = e.elements,
										r = i.sourceAnimationWrappers,
										s = i.sources,
										a = e.isl,
										c = e.resolve;
								function l(e, n) {
										(o[t] = c(A, [t, e, n])), o[t].adjustSize();
								}
								this.runActions = function (e, o) {
										(a[t] = !0), s[t].classList.add(x), r[t].classList.add(g), r[t].removeChild(r[t].firstChild), l(e, o), (n.runActions = l);
								};
						}
						function E(e, t) {
								var n,
										o = this,
										i = e.elements.sources,
										r = e.props,
										s = (0, e.resolve)(C, [t]);
								(this.handleImageLoad = function (e) {
										var t = e.target,
												n = t.naturalWidth,
												o = t.naturalHeight;
										s.runActions(n, o);
								}),
										(this.handleVideoLoad = function (e) {
												var t = e.target,
														o = t.videoWidth,
														i = t.videoHeight;
												(n = !0), s.runActions(o, i);
										}),
										(this.handleNotMetaDatedVideoLoad = function () {
												n || o.handleYoutubeLoad();
										}),
										(this.handleYoutubeLoad = function () {
												var e = 1920,
														t = 1080;
												r.maxYoutubeDimensions && ((e = r.maxYoutubeDimensions.width), (t = r.maxYoutubeDimensions.height)), s.runActions(e, t);
										}),
										(this.handleCustomLoad = function () {
												var e = i[t],
														n = e.offsetWidth,
														r = e.offsetHeight;
												n && r ? s.runActions(n, r) : setTimeout(o.handleCustomLoad);
										});
						}
						function F(e, t, n) {
								var o = e.elements.sources,
										i = e.props.customClasses,
										r = i[t] ? i[t] : "";
								o[t].className = n + " " + r;
						}
						function I(e, t) {
								var n = e.elements.sources,
										o = e.props.customAttributes;
								for (var i in o[t]) n[t].setAttribute(i, o[t][i]);
						}
						function N(e, t) {
								var n = e.collections.sourceLoadHandlers,
										o = e.elements,
										i = o.sources,
										r = o.sourceAnimationWrappers,
										s = e.props.sources;
								(i[t] = document.createElement("img")), F(e, t, y), (i[t].src = s[t]), (i[t].onload = n[t].handleImageLoad), I(e, t), r[t].appendChild(i[t]);
						}
						function z(e, t) {
								var n = e.ap,
										o = e.collections.sourceLoadHandlers,
										i = e.elements,
										r = i.sources,
										s = i.sourceAnimationWrappers,
										a = e.props,
										c = a.sources,
										l = a.videosPosters,
										u = document.createElement("video"),
										d = document.createElement("source");
								(r[t] = u),
										F(e, t, "".concat(y, " fslightboxv")),
										(u.src = c[t]),
										(u.onloadedmetadata = function (e) {
												return o[t].handleVideoLoad(e);
										}),
										(u.controls = !0),
										(u.autoplay = n.i(t)),
										I(e, t),
										l[t] && (r[t].poster = l[t]),
										(d.src = c[t]),
										u.appendChild(d),
										setTimeout(o[t].handleNotMetaDatedVideoLoad, 3e3),
										s[t].appendChild(r[t]);
						}
						function T(e, t) {
								var n = e.ap,
										o = e.collections.sourceLoadHandlers,
										r = e.elements,
										s = r.sources,
										a = r.sourceAnimationWrappers,
										c = e.props.sources[t],
										l = c.split("?")[1],
										u = document.createElement("iframe");
								(s[t] = u),
										F(e, t, "".concat(y, " ").concat(i, "youtube-iframe")),
										(u.src = "https://www.youtube.com/embed/"
												.concat(c.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2], "?")
												.concat(l || "")
												.concat(n.i(t) ? "&mute=1&autoplay=1" : "", "&enablejsapi=1")),
										(u.allowFullscreen = !0),
										I(e, t),
										a[t].appendChild(u),
										o[t].handleYoutubeLoad();
						}
						function P(e, t) {
								var n = e.collections.sourceLoadHandlers,
										o = e.elements,
										i = o.sources,
										r = o.sourceAnimationWrappers,
										s = e.props.sources;
								(i[t] = s[t]), F(e, t, "".concat(i[t].className, " ").concat(y)), r[t].appendChild(i[t]), n[t].handleCustomLoad();
						}
						function k(e, t) {
								var n = e.elements,
										o = n.sources,
										r = n.sourceAnimationWrappers;
								e.props.sources;
								(o[t] = document.createElement("div")),
										(o[t].className = "".concat(i, "invalid-file-wrapper ").concat(c)),
										(o[t].innerHTML = "Invalid source"),
										r[t].classList.add(g),
										r[t].removeChild(r[t].firstChild),
										r[t].appendChild(o[t]);
						}
						function R(e) {
								var t = e.collections,
										n = t.sourceLoadHandlers,
										o = t.sourcesRenderFunctions,
										i = e.core.sourceDisplayFacade,
										r = e.resolve;
								this.runActionsForSourceTypeAndIndex = function (t, s) {
										var a;
										switch (("invalid" !== t && (n[s] = r(E, [s])), t)) {
												case "image":
														a = N;
														break;
												case "video":
														a = z;
														break;
												case "youtube":
														a = T;
														break;
												case "custom":
														a = P;
														break;
												default:
														a = k;
										}
										(o[s] = function () {
												return a(e, s);
										}),
												i.displaySourcesWhichShouldBeDisplayed();
								};
						}
						function M(e, t, n) {
								var o = e.props,
										i = o.types,
										r = o.type,
										s = o.sources;
								(this.getTypeSetByClientForIndex = function (e) {
										var t;
										return i && i[e] ? (t = i[e]) : r && (t = r), t;
								}),
										(this.retrieveTypeWithXhrForIndex = function (e) {
												!(function (e, t) {
														var n = document.createElement("a");
														n.href = e;
														var o = n.hostname;
														if ("www.youtube.com" === o || "youtu.be" === o) return t("youtube");
														var i = new XMLHttpRequest();
														(i.onreadystatechange = function () {
																if (4 !== i.readyState) {
																		if (2 === i.readyState) {
																				var e,
																						n = i.getResponseHeader("content-type");
																				switch (n.slice(0, n.indexOf("/"))) {
																						case "image":
																								e = "image";
																								break;
																						case "video":
																								e = "video";
																								break;
																						default:
																								e = "invalid";
																				}
																				(i.onreadystatechange = null), i.abort(), t(e);
																		}
																} else t("invalid");
														}),
																i.open("GET", e),
																i.send();
												})(s[e], function (o) {
														t.handleReceivedSourceTypeForUrl(o, s[e]), n.runActionsForSourceTypeAndIndex(o, e);
												});
										});
						}
						function W(e, t) {
								var n = e.core.stageManager,
										o = e.elements,
										i = o.smw,
										r = o.sourceWrappersContainer,
										s = e.props,
										l = 0,
										p = document.createElement("div");
								function f(e) {
										(p.style.transform = "translateX(".concat(e + l, "px)")), (l = 0);
								}
								function h() {
										return (1 + s.slideDistance) * innerWidth;
								}
								(p.className = "".concat(d, " ").concat(a, " ").concat(c)),
										(p.s = function () {
												p.style.display = "flex";
										}),
										(p.h = function () {
												p.style.display = "none";
										}),
										(p.a = function () {
												p.classList.add(u);
										}),
										(p.d = function () {
												p.classList.remove(u);
										}),
										(p.n = function () {
												p.style.removeProperty("transform");
										}),
										(p.v = function (e) {
												return (l = e), p;
										}),
										(p.ne = function () {
												f(-h());
										}),
										(p.z = function () {
												f(0);
										}),
										(p.p = function () {
												f(h());
										}),
										n.i(t) || p.h(),
										(i[t] = p),
										r.appendChild(p),
										(function (e, t) {
												var n = e.elements,
														o = n.smw,
														i = n.sourceAnimationWrappers,
														r = document.createElement("div"),
														s = document.createElement("div");
												s.className = "fslightboxl";
												for (var a = 0; a < 3; a++) {
														var c = document.createElement("div");
														s.appendChild(c);
												}
												r.appendChild(s), o[t].appendChild(r), (i[t] = r);
										})(e, t);
						}
						function D(e, t, n, o) {
								var r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
								r.setAttributeNS(null, "width", t), r.setAttributeNS(null, "height", t), r.setAttributeNS(null, "viewBox", n);
								var s = document.createElementNS("http://www.w3.org/2000/svg", "path");
								return s.setAttributeNS(null, "class", "".concat(i, "svg-path")), s.setAttributeNS(null, "d", o), r.appendChild(s), e.appendChild(r), r;
						}
						function H(e, t) {
								var n = document.createElement("div");
								return (n.className = "".concat(i, "toolbar-button ").concat(c)), (n.title = t), e.appendChild(n), n;
						}
						function O(e, t) {
								var n = document.createElement("div");
								(n.className = "".concat(i, "toolbar")),
										t.appendChild(n),
										(function (e, t) {
												var n = e.componentsServices,
														o = e.data,
														i = e.fs,
														r = "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",
														s = H(t);
												s.title = "Enter fullscreen";
												var a = D(s, "20px", "0 0 18 18", r);
												(n.ofs = function () {
														(o.ifs = !0),
																(s.title = "Exit fullscreen"),
																a.setAttributeNS(null, "width", "24px"),
																a.setAttributeNS(null, "height", "24px"),
																a.setAttributeNS(null, "viewBox", "0 0 950 1024"),
																a.firstChild.setAttributeNS(null, "d", "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z");
												}),
														(n.xfs = function () {
																(o.ifs = !1),
																		(s.title = "Enter fullscreen"),
																		a.setAttributeNS(null, "width", "20px"),
																		a.setAttributeNS(null, "height", "20px"),
																		a.setAttributeNS(null, "viewBox", "0 0 18 18"),
																		a.firstChild.setAttributeNS(null, "d", r);
														}),
														(s.onclick = i.t);
										})(e, n),
										(function (e, t) {
												var n = H(t, "Close");
												(n.onclick = e.core.lightboxCloser.closeLightbox),
														D(
																n,
																"20px",
																"0 0 24 24",
																"M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
														);
										})(e, n);
						}
						function j(e) {
								var t = e.props.sources,
										n = e.elements.container,
										o = document.createElement("div");
								(o.className = "".concat(i, "nav")),
										n.appendChild(o),
										O(e, o),
										t.length > 1 &&
												(function (e, t) {
														var n = e.componentsServices,
																o = e.props.sources,
																r = (e.stageIndexes, document.createElement("div"));
														r.className = "".concat(i, "slide-number-container");
														var s = document.createElement("div");
														s.className = c;
														var a = document.createElement("span");
														n.setSlideNumber = function (e) {
																return (a.innerHTML = e);
														};
														var l = document.createElement("span");
														l.className = "".concat(i, "slash");
														var u = document.createElement("div");
														(u.innerHTML = o.length),
																r.appendChild(s),
																s.appendChild(a),
																s.appendChild(l),
																s.appendChild(u),
																t.appendChild(r),
																setTimeout(function () {
																		s.offsetWidth > 55 && (r.style.justifyContent = "flex-start");
																});
												})(e, o);
						}
						function X(e, t, n, o) {
								var i = e.elements.container,
										r = n.charAt(0).toUpperCase() + n.slice(1),
										s = document.createElement("div");
								(s.className = "".concat(f, " ").concat(f, "-").concat(n)),
										(s.title = "".concat(r, " slide")),
										(s.onclick = t),
										(function (e, t) {
												var n = document.createElement("div");
												(n.className = "".concat(p, " ").concat(c)), D(n, "20px", "0 0 20 20", t), e.appendChild(n);
										})(s, o),
										i.appendChild(s);
						}
						function B(e) {
								var t = e.core,
										n = t.lightboxCloser,
										o = t.slideChangeFacade,
										i = e.fs;
								this.listener = function (e) {
										switch (e.key) {
												case "Escape":
														n.closeLightbox();
														break;
												case "ArrowLeft":
														o.changeToPrevious();
														break;
												case "ArrowRight":
														o.changeToNext();
														break;
												case "F11":
														e.preventDefault(), i.t();
										}
								};
						}
						function q(e) {
								var t = e.elements,
										n = e.sourcePointerProps,
										o = e.stageIndexes;
								function i(e, o) {
										t.smw[e].v(n.swipedX)[o]();
								}
								this.runActionsForEvent = function (e) {
										var r, a, c;
										t.container.contains(t.slideSwipingHoverer) || t.container.appendChild(t.slideSwipingHoverer), (r = t.container), (a = s), (c = r.classList).contains(a) || c.add(a), (n.swipedX = e.screenX - n.downScreenX);
										var l = o.previous,
												u = o.next;
										i(o.current, "z"), void 0 !== l && n.swipedX > 0 ? i(l, "ne") : void 0 !== u && n.swipedX < 0 && i(u, "p");
								};
						}
						function V(e) {
								var t = e.props.sources,
										n = e.resolve,
										o = e.sourcePointerProps,
										i = n(q);
								1 === t.length
										? (this.listener = function () {
													o.swipedX = 1;
											})
										: (this.listener = function (e) {
													o.isPointering && i.runActionsForEvent(e);
											});
						}
						function U(e) {
								var t = e.core.slideIndexChanger,
										n = e.elements.smw,
										o = e.stageIndexes,
										i = e.sws;
								function r(e) {
										var t = n[o.current];
										t.a(), t[e]();
								}
								function s(e, t) {
										void 0 !== e && (n[e].s(), n[e][t]());
								}
								(this.runPositiveSwipedXActions = function () {
										var e = o.previous;
										if (void 0 === e) r("z");
										else {
												r("p");
												var n = o.next;
												t.changeTo(e);
												var a = o.previous;
												i.d(a), i.b(n), r("z"), s(a, "ne");
										}
								}),
										(this.runNegativeSwipedXActions = function () {
												var e = o.next;
												if (void 0 === e) r("z");
												else {
														r("ne");
														var n = o.previous;
														t.changeTo(e);
														var a = o.next;
														i.d(a), i.b(n), r("z"), s(a, "p");
												}
										});
						}
						function _(e, t) {
								e.contains(t) && e.removeChild(t);
						}
						function Y(e) {
								var t = e.core.lightboxCloser,
										n = e.elements,
										o = e.resolve,
										i = e.sourcePointerProps,
										r = o(U);
								(this.runNoSwipeActions = function () {
										_(n.container, n.slideSwipingHoverer), i.isSourceDownEventTarget || t.closeLightbox(), (i.isPointering = !1);
								}),
										(this.runActions = function () {
												i.swipedX > 0 ? r.runPositiveSwipedXActions() : r.runNegativeSwipedXActions(), _(n.container, n.slideSwipingHoverer), n.container.classList.remove(s), (i.isPointering = !1);
										});
						}
						function J(e) {
								var t = e.resolve,
										n = e.sourcePointerProps,
										o = t(Y);
								this.listener = function () {
										n.isPointering && (n.swipedX ? o.runActions() : o.runNoSwipeActions());
								};
						}
						function G(e) {
								var t = this,
										n = e.core,
										o = n.eventsDispatcher,
										i = n.globalEventsController,
										r = n.scrollbarRecompensor,
										s = e.data,
										a = e.elements,
										c = e.fs,
										u = e.props,
										d = e.sourcePointerProps;
								(this.isLightboxFadingOut = !1),
										(this.runActions = function () {
												(t.isLightboxFadingOut = !0),
														a.container.classList.add(v),
														i.removeListeners(),
														u.exitFullscreenOnClose && s.ifs && c.x(),
														setTimeout(function () {
																(t.isLightboxFadingOut = !1),
																		(d.isPointering = !1),
																		a.container.classList.remove(v),
																		document.documentElement.classList.remove(l),
																		r.removeRecompense(),
																		document.body.removeChild(a.container),
																		o.dispatch("onClose");
																if (e.onClose) {
																	e.onClose()
																}
														}, 270);
										});
						}
						function $(e, t) {
								var n = e.classList;
								n.contains(t) && n.remove(t);
						}
						function K(e) {
								var t, n, o;
								!(function (e) {
										var t = e.ap,
												n = e.elements.sources,
												o = e.props,
												i = o.autoplay,
												r = o.autoplays;
										function s(e, o) {
												if ("play" != o || t.i(e)) {
														var i = n[e];
														if (i) {
																var r = i.tagName;
																if ("VIDEO" == r) i[o]();
																else if ("IFRAME" == r) {
																		var s = i.contentWindow;
																		s && s.postMessage('{"event":"command","func":"'.concat(o, 'Video","args":""}'), "*");
																}
														}
												}
										}
										(t.i = function (e) {
												return r[e] || (i && 0 != r[e]);
										}),
												(t.p = function (e) {
														s(e, "play");
												}),
												(t.c = function (e, t) {
														s(e, "pause"), s(t, "play");
												});
								})(e),
										(n = (t = e).core.eventsDispatcher),
										(o = t.props),
										(n.dispatch = function (e) {
												o[e] && o[e]();
										}),
										(function (e) {
												var t = e.componentsServices,
														n = e.data,
														o = e.fs,
														i = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
												function r(e) {
														for (var t = 0; t < i.length; t++) document[e](i[t], s);
												}
												function s() {
														document.fullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement ? t.ofs() : t.xfs();
												}
												(o.o = function () {
														t.ofs();
														var e = document.documentElement;
														e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen();
												}),
														(o.x = function () {
																t.xfs(),
																		document.exitFullscreen
																				? document.exitFullscreen()
																				: document.mozCancelFullScreen
																				? document.mozCancelFullScreen()
																				: document.webkitExitFullscreen
																				? document.webkitExitFullscreen()
																				: document.msExitFullscreen && document.msExitFullscreen();
														}),
														(o.t = function () {
																n.ifs ? o.x() : o.o();
														}),
														(o.l = function () {
																r("addEventListener");
														}),
														(o.q = function () {
																r("removeEventListener");
														});
										})(e),
										(function (e) {
												var t = e.core,
														n = t.globalEventsController,
														o = t.windowResizeActioner,
														i = e.fs,
														r = e.resolve,
														s = r(B),
														a = r(V),
														c = r(J);
												(n.attachListeners = function () {
														document.addEventListener("pointermove", a.listener), document.addEventListener("pointerup", c.listener), addEventListener("resize", o.runActions), document.addEventListener("keydown", s.listener), i.l();
												}),
														(n.removeListeners = function () {
																document.removeEventListener("pointermove", a.listener),
																		document.removeEventListener("pointerup", c.listener),
																		removeEventListener("resize", o.runActions),
																		document.removeEventListener("keydown", s.listener),
																		i.q();
														});
										})(e),
										(function (e) {
												var t = e.core.lightboxCloser,
														n = (0, e.resolve)(G);
												t.closeLightbox = function () {
														n.isLightboxFadingOut || n.runActions();
												};
										})(e),
										(function (e) {
												var t = e.data,
														n = e.core.scrollbarRecompensor;
												function o() {
														document.body.offsetHeight > innerHeight && (document.body.style.marginRight = t.scrollbarWidth + "px");
												}
												(n.addRecompense = function () {
														"complete" === document.readyState
																? o()
																: addEventListener("load", function () {
																			o(), (n.addRecompense = o);
																	});
												}),
														(n.removeRecompense = function () {
																document.body.style.removeProperty("margin-right");
														});
										})(e),
										(function (e) {
												var t = e.core,
														n = t.slideChangeFacade,
														o = t.slideIndexChanger,
														i = t.stageManager;
												e.props.sources.length > 1
														? ((n.changeToPrevious = function () {
																	o.jumpTo(i.getPreviousSlideIndex());
															}),
															(n.changeToNext = function () {
																	o.jumpTo(i.getNextSlideIndex());
															}))
														: ((n.changeToPrevious = function () {}), (n.changeToNext = function () {}));
										})(e),
										(function (e) {
												var t = e.ap,
														n = e.componentsServices,
														o = e.core,
														i = o.slideIndexChanger,
														r = o.sourceDisplayFacade,
														s = o.stageManager,
														a = e.elements,
														c = a.smw,
														l = a.sourceAnimationWrappers,
														u = e.isl,
														d = e.stageIndexes,
														p = e.sws;
												(i.changeTo = function (e) {
														t.c(d.current, e), (d.current = e), s.updateStageIndexes(), n.setSlideNumber(e + 1), r.displaySourcesWhichShouldBeDisplayed();
												}),
														(i.jumpTo = function (e) {
																var t = d.previous,
																		n = d.current,
																		o = d.next,
																		r = u[n],
																		a = u[e];
																i.changeTo(e);
																for (var f = 0; f < c.length; f++) c[f].d();
																p.d(n),
																		p.c(),
																		requestAnimationFrame(function () {
																				requestAnimationFrame(function () {
																						var e = d.previous,
																								i = d.next;
																						function f() {
																								s.i(n) ? (n === d.previous ? c[n].ne() : n === d.next && c[n].p()) : (c[n].h(), c[n].n());
																						}
																						r && l[n].classList.add(m),
																								a && l[d.current].classList.add(h),
																								p.a(),
																								void 0 !== e && e !== n && c[e].ne(),
																								c[d.current].n(),
																								void 0 !== i && i !== n && c[i].p(),
																								p.b(t),
																								p.b(o),
																								u[n] ? setTimeout(f, 260) : f();
																				});
																		});
														});
										})(e),
										(function (e) {
												var t = e.core.sourcesPointerDown,
														n = e.elements,
														o = n.smw,
														i = n.sources,
														r = e.sourcePointerProps,
														s = e.stageIndexes;
												t.listener = function (e) {
														"VIDEO" !== e.target.tagName && e.preventDefault(), (r.isPointering = !0), (r.downScreenX = e.screenX), (r.swipedX = 0);
														var t = i[s.current];
														t && t.contains(e.target) ? (r.isSourceDownEventTarget = !0) : (r.isSourceDownEventTarget = !1);
														for (var n = 0; n < o.length; n++) o[n].d();
												};
										})(e),
										(function (e) {
												var t = e.collections.sourcesRenderFunctions,
														n = e.core.sourceDisplayFacade,
														o = e.loc,
														i = e.stageIndexes;
												function r(e) {
														t[e] && (t[e](), delete t[e]);
												}
												n.displaySourcesWhichShouldBeDisplayed = function () {
														if (o) r(i.current);
														else for (var e in i) r(i[e]);
												};
										})(e),
										(function (e) {
												var t = e.core.stageManager,
														n = e.elements,
														o = n.smw,
														i = n.sourceAnimationWrappers,
														r = e.isl,
														s = e.stageIndexes,
														a = e.sws;
												(a.a = function () {
														for (var e in s) o[s[e]].s();
												}),
														(a.b = function (e) {
																void 0 === e || t.i(e) || (o[e].h(), o[e].n());
														}),
														(a.c = function () {
																for (var e in s) a.d(s[e]);
														}),
														(a.d = function (e) {
																if (r[e]) {
																		var t = i[e];
																		$(t, g), $(t, h), $(t, m);
																}
														});
										})(e),
										(function (e) {
												var t = e.collections.sourceSizers,
														n = e.core.windowResizeActioner,
														o = (e.data, e.elements.smw),
														i = e.props.sourceMargin,
														r = e.stageIndexes,
														s = 1 - 2 * i;
												n.runActions = function () {
														innerWidth > 992 ? (e.mw = s * innerWidth) : (e.mw = innerWidth), (e.mh = s * innerHeight);
														for (var n = 0; n < o.length; n++) o[n].d(), t[n] && t[n].adjustSize();
														var i = r.previous,
																a = r.next;
														void 0 !== i && o[i].ne(), void 0 !== a && o[a].p();
												};
										})(e);
						}
						function Q(e) {
								var t = e.ap,
										n = e.componentsServices,
										o = e.core,
										r = o.eventsDispatcher,
										s = o.globalEventsController,
										c = o.scrollbarRecompensor,
										u = o.sourceDisplayFacade,
										p = o.stageManager,
										f = o.windowResizeActioner,
										h = e.data,
										m = e.elements,
										v = (e.props, e.stageIndexes),
										b = e.sws,
										x = 0;
								function y() {
										var t,
												n,
												o = e.props,
												s = o.autoplay,
												c = o.autoplays;
										(x = !0),
												(function (e) {
														var t = e.props,
																n = t.autoplays;
														e.c = t.sources.length;
														for (var o = 0; o < e.c; o++) "false" === n[o] && (n[o] = 0), "" === n[o] && (n[o] = 1);
														e.loc = t.loadOnlyCurrentSource;
												})(e),
												(h.scrollbarWidth = (function () {
														var e = document.createElement("div"),
																t = e.style,
																n = document.createElement("div");
														(t.visibility = "hidden"), (t.width = "100px"), (t.msOverflowStyle = "scrollbar"), (t.overflow = "scroll"), (n.style.width = "100%"), document.body.appendChild(e);
														var o = e.offsetWidth;
														e.appendChild(n);
														var i = n.offsetWidth;
														return document.body.removeChild(e), o - i;
												})()),
												(s || c.length > 0) && (e.loc = 1),
												K(e),
												(m.container = document.createElement("div")),
												(m.container.className = "".concat(i, "container ").concat(a, " ").concat(g)),
												(function (e) {
														var t = e.elements;
														(t.slideSwipingHoverer = document.createElement("div")), (t.slideSwipingHoverer.className = "".concat(i, "slide-swiping-hoverer ").concat(a, " ").concat(d));
												})(e),
												j(e),
												(function (e) {
														var t = e.core.sourcesPointerDown,
																n = e.elements,
																o = e.props.sources,
																i = document.createElement("div");
														(i.className = "".concat(d, " ").concat(a)), n.container.appendChild(i), i.addEventListener("pointerdown", t.listener), (n.sourceWrappersContainer = i);
														for (var r = 0; r < o.length; r++) W(e, r);
												})(e),
												e.props.sources.length > 1 &&
														((n = (t = e).core.slideChangeFacade),
														X(
																t,
																n.changeToPrevious,
																"previous",
																"M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"
														),
														X(
																t,
																n.changeToNext,
																"next",
																"M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z"
														)),
												(function (e) {
														for (var t = e.props.sources, n = e.resolve, o = n(L), i = n(R), r = n(M, [o, i]), s = 0; s < t.length; s++)
																if ("string" == typeof t[s]) {
																		var a = r.getTypeSetByClientForIndex(s);
																		if (a) i.runActionsForSourceTypeAndIndex(a, s);
																		else {
																				var c = o.getSourceTypeFromLocalStorageByUrl(t[s]);
																				c ? i.runActionsForSourceTypeAndIndex(c, s) : r.retrieveTypeWithXhrForIndex(s);
																		}
																} else i.runActionsForSourceTypeAndIndex("custom", s);
												})(e),
												r.dispatch("onInit");
								}
								e.open = function () {
										var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
												i = v.previous,
												a = v.current,
												d = v.next;
										(v.current = o),
												x || S(e),
												p.updateStageIndexes(),
												x ? (b.c(), b.a(), b.b(i), b.b(a), b.b(d), r.dispatch("onShow")) : y(),
												u.displaySourcesWhichShouldBeDisplayed(),
												n.setSlideNumber(o + 1),
												document.body.appendChild(m.container),
												document.documentElement.classList.add(l),
												c.addRecompense(),
												s.attachListeners(),
												f.runActions(),
												m.smw[o].n(),
												t.p(o),
												r.dispatch("onOpen");
								};
						}
						function Z(e, t, n) {
								return (Z = ee()
										? Reflect.construct.bind()
										: function (e, t, n) {
													var o = [null];
													o.push.apply(o, t);
													var i = new (Function.bind.apply(e, o))();
													return n && te(i, n.prototype), i;
											}).apply(null, arguments);
						}
						function ee() {
								if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
								if (Reflect.construct.sham) return !1;
								if ("function" == typeof Proxy) return !0;
								try {
										return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
								} catch (e) {
										return !1;
								}
						}
						function te(e, t) {
								return (te = Object.setPrototypeOf
										? Object.setPrototypeOf.bind()
										: function (e, t) {
													return (e.__proto__ = t), e;
											})(e, t);
						}
						function ne(e) {
								return (
										(function (e) {
												if (Array.isArray(e)) return oe(e);
										})(e) ||
										(function (e) {
												if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
										})(e) ||
										(function (e, t) {
												if (!e) return;
												if ("string" == typeof e) return oe(e, t);
												var n = Object.prototype.toString.call(e).slice(8, -1);
												"Object" === n && e.constructor && (n = e.constructor.name);
												if ("Map" === n || "Set" === n) return Array.from(e);
												if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return oe(e, t);
										})(e) ||
										(function () {
												throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
										})()
								);
						}
						function oe(e, t) {
								(null == t || t > e.length) && (t = e.length);
								for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
								return o;
						}
						function ie() {
								for (
										var e = document.getElementsByTagName("a"),
												t = function (t) {
														if (!e[t].hasAttribute("data-fslightbox")) return "continue";
														var n = e[t].hasAttribute("data-href") ? e[t].getAttribute("data-href") : e[t].getAttribute("href");
														if (!n) return console.warn('The "data-fslightbox" attribute was set without the "href" attribute.'), "continue";
														var o = e[t].getAttribute("data-fslightbox");
														fsLightboxInstances[o] || (fsLightboxInstances[o] = new FsLightbox());
														var i = null;
														"#" === n.charAt(0) ? (i = document.getElementById(n.substring(1)).cloneNode(!0)).removeAttribute("id") : (i = n), fsLightboxInstances[o].props.sources.push(i), fsLightboxInstances[o].elements.a.push(e[t]);
														var r = fsLightboxInstances[o].props.sources.length - 1;
														(e[t].onclick = function (e) {
																e.preventDefault(), fsLightboxInstances[o].open(r);
														}),
																d("types", "data-type"),
																d("videosPosters", "data-video-poster"),
																d("customClasses", "data-class"),
																d("customClasses", "data-custom-class"),
																d("autoplays", "data-autoplay");
														for (
																var s = ["href", "data-fslightbox", "data-href", "data-type", "data-video-poster", "data-class", "data-custom-class", "data-autoplay"],
																		a = e[t].attributes,
																		c = fsLightboxInstances[o].props.customAttributes,
																		l = 0;
																l < a.length;
																l++
														)
																if (-1 === s.indexOf(a[l].name) && "data-" === a[l].name.substr(0, 5)) {
																		c[r] || (c[r] = {});
																		var u = a[l].name.substr(5);
																		c[r][u] = a[l].value;
																}
														function d(n, i) {
																e[t].hasAttribute(i) && (fsLightboxInstances[o].props[n][r] = e[t].getAttribute(i));
														}
												},
												n = 0;
										n < e.length;
										n++
								)
										t(n);
								var o = Object.keys(fsLightboxInstances);
								window.fsLightbox = fsLightboxInstances[o[o.length - 1]];
						}
						(window.FsLightbox = function () {
								var e = this;
								(this.props = { sources: [], customAttributes: [], customClasses: [], autoplays: [], types: [], videosPosters: [], sourceMargin: 0.05, slideDistance: 0.3 }),
										(this.data = { isFullscreenOpen: !1, scrollbarWidth: 0 }),
										(this.isl = []),
										(this.sourcePointerProps = { downScreenX: null, isPointering: !1, isSourceDownEventTarget: !1, swipedX: 0 }),
										(this.stageIndexes = {}),
										(this.elements = { a: [], container: null, slideSwipingHoverer: null, smw: [], sourceWrappersContainer: null, sources: [], sourceAnimationWrappers: [] }),
										(this.componentsServices = { setSlideNumber: function () {} }),
										(this.resolve = function (t) {
												var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
												return n.unshift(e), Z(t, ne(n));
										}),
										(this.collections = { sourceLoadHandlers: [], sourcesRenderFunctions: [], sourceSizers: [] }),
										(this.core = {
												eventsDispatcher: {},
												globalEventsController: {},
												lightboxCloser: {},
												lightboxUpdater: {},
												scrollbarRecompensor: {},
												slideChangeFacade: {},
												slideIndexChanger: {},
												sourcesPointerDown: {},
												sourceDisplayFacade: {},
												stageManager: {},
												windowResizeActioner: {},
										}),
										(this.ap = {}),
										(this.fs = {}),
										(this.sws = {}),
										Q(this),
										(this.close = function () {
												return e.core.lightboxCloser.closeLightbox();
										});
						}),
								(window.fsLightboxInstances = {}),
								ie(),
								(window.refreshFsLightbox = function () {
										for (var e in fsLightboxInstances) {
												var t = fsLightboxInstances[e].props;
												(fsLightboxInstances[e] = new FsLightbox()), (fsLightboxInstances[e].props = t), (fsLightboxInstances[e].props.sources = []), (fsLightboxInstances[e].elements.a = []);
										}
										ie();
								});
				},
		]);
});


document.addEventListener('DOMContentLoaded', function(){
	Array.prototype.forEach.call(document.querySelectorAll("[data-fslightbox]"), function(fslightbox){
		if (!fslightbox) return;
		const lightbox = new FsLightbox();
		lightbox.props.sources = setLightBoxImages();
		lightbox.props.initialAnimation = "lightbox-animation";

		lightbox.onClose = function(e){
			unsetWindowWidth();
		}

		function setLightBoxImages(){
			let scrArray = [];
			let allImages = Array.prototype.forEach.call(fslightbox.querySelectorAll('img'), function(img){
				scrArray.push(img.src);
			});
			return scrArray;
		};

		function setWindowWidth(){
			document.body.style.width = window.getComputedStyle(document.body).width;
			document.getElementById('mainHeader').style.width = window.getComputedStyle(document.getElementById('mainHeader')).width;
			document.body.classList.add('overlayed');
		};

		function unsetWindowWidth(){
			document.body.classList.remove('overlayed');
			document.body.style.width = '';
			document.getElementById('mainHeader').style.width = '';
		}

		let allButtons = Array.prototype.slice.call(fslightbox.querySelectorAll('img'));

		for (let i = 0; i <= allButtons.length-1; i++) {
			let button = allButtons[i];

			button.addEventListener("click", function (e) {
				setWindowWidth();
				lightbox.open(i);
			});
		};
	});
});
document.addEventListener("DOMContentLoaded", function () {

	let notificationJson = JSON.stringify([
		{
			"title": "Повідомлення на розгляді",
			"message": "Дякуємо! Ваше повідомлення прийнято та буде розглянуто найближчим часом",
			"status": "progress",
			"readed": false,
			"object": {
				"id": 1213,
				"title": "ЖК Рідний дім",
				"address": "Вулиця Всеволода Змієнка, будинок 34/21"
			}
		},
		{
			"title": "Повідомлення розглянуто",
			"message": "Вам буде повернуто 1 перегляд протягом 24 годин",
			"status": "success",
			"readed": false,
			"object": {
				"id": 1222,
				"title": "ЖК Республіка",
				"address": "Вулиця Всеволода Змієнка, будинок 34/21"
			}
		},
		{
			"title": "Повідомлення розглянуто",
			"message": "Перегляд повернуто не буде. Об'єкт доступний",
			"status": "declined",
			"readed": false,
			"object": {
				"id": 1233,
				"title": "ЖК Рівер Таун",
				"address": "Вулиця Всеволода Змієнка, будинок 34/21"
			}
		},
		{
			"title": "Замовлення успішно оплачено",
			"message": "Доступно 1 перегляд на 30 днів. Тариф \"Старт\"",
			"status": "success",
			"readed": true,
			"object": null
		}
	]);

	class Notification {
		constructor(data) {
			this.title = data.title;
			this.message = data.message;
			this.status = data.status;
			this.readed = data.readed;
			this.object = data.object;
		}
		markAsRead() {
			this.readed = true;
		}
	}

	class NotificationManager {
		constructor(jsonString) {
			const parsed = JSON.parse(jsonString);
			this.notifications = parsed.map(item => new Notification(item));
		}
		getAll() {
			return this.notifications;
		}
		getUnread() {
			return this.notifications.filter(n => !n.readed);
		}
		markAsRead(notification) {
			notification.markAsRead();
		}
		markAllAsRead() {
			this.notifications.forEach(n => n.markAsRead());
		}
	}

	const manager = new NotificationManager(notificationJson);

	const listEl = document.querySelector(".notifications .inner");
	const counterEl = document.querySelector(".notifications .counter");
	const bellBtn = document.querySelector(".favourites-link.round-link");
	const markAllBtn = document.getElementById("markAllReadBtn");

	let readQueue = [];
	let readTimeout = null;

	function queueNotificationRead(notification) {

		const id = notification.object?.id || notification.title;

		if (!readQueue.includes(id)) {
			readQueue.push(id);
		}

		if (readTimeout) clearTimeout(readTimeout);

		readTimeout = setTimeout(() => {
			flushReadQueue();
		}, 800);
	}

	function flushReadQueue() {

		if (readQueue.length === 0) return;

		const ids = [...readQueue];
		readQueue = [];

		console.log("SEND BATCH TO BACKEND:", ids);

		fetch("/api/notifications/read", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ ids: ids })
		}).catch(err => console.error(err));
	}

	function renderNotifications() {

		if (!listEl) return;

		listEl.innerHTML = "";

		const all = manager.getAll();

		if (all.length === 0) {
			listEl.innerHTML = `<div class="empty-message">Сповіщень немає</div>`;
		} else {

			all.forEach(n => {

				const item = document.createElement("div");
				item.className = `notification-item ${n.status}`;
				if (n.readed) item.classList.add("readed");

				item.innerHTML = `
					<div class="title-cover">
						<div class="title">${n.title}</div>
						<span class="button-icon">
							<i class="icon ${getIcon(n.status)}"></i>
						</span>
					</div>
					${n.object ? renderObject(n.object) : ""}
					<div class="text">${n.message}</div>
				`;

				item.addEventListener("click", function (e) {

					e.stopPropagation();

					if (!n.readed) {
						manager.markAsRead(n);
						queueNotificationRead(n);
						renderNotifications();
					}

				});

				listEl.appendChild(item);
			});
		}

		updateCounter();
	}

	function updateCounter() {

		if (!counterEl || !bellBtn || !markAllBtn) return;

		const unread = manager.getUnread().length;

		if (unread > 0) {
			counterEl.style.display = "inline-block";
			counterEl.textContent = unread;
			bellBtn.classList.add("active");
			markAllBtn.classList.remove("disabled");
		} else {
			counterEl.style.display = "none";
			bellBtn.classList.remove("active");
			markAllBtn.classList.add("disabled");
		}
	}


	function renderObject(object) {
		return `
			<div class="object-preview horizontal smaller filter-item">
				<figure class="object-image">
					<img src="img/temp/obj1.jpg" draggable="false" alt="">
				</figure>
				<div class="caption">
					<h3 class="item-title object-title">${object.title} (id:${object.id})</h3>
					<div class="description">
						<div class="line item-description">${object.address}</div>
					</div>
				</div>
			</div>
		`;
	}

	function getIcon(status) {
		switch (status) {
			case "success": return "icon-check";
			case "progress": return "icon-refresh";
			case "declined": return "icon-cross";
			default: return "icon-bell";
		}
	}

	if (markAllBtn) {

		markAllBtn.addEventListener("click", function (e) {
			e.stopPropagation();
			const unreadNotifications = manager.getUnread();

			if (unreadNotifications.length === 0) return;

			manager.markAllAsRead();

			const ids = unreadNotifications.map(n => n.object?.id || n.title);

			console.log("SEND READ ALL:", ids);

			fetch("/api/notifications/read-all", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ids: ids })
			}).catch(err => console.error(err));

			renderNotifications();

		});
	}

	renderNotifications();

});

class PopupWindow {
	constructor({
		popupSelector = '.popup',
		closeSelector = '.close-popup',
		callSelector = '[data-call]',
		dissmissSelector = '[data-dissmiss]',
		overlayClass = 'overlayed',
		activeClass = 'active',
		showedClass = 'showed',
		delay = 300
	} = {}) {
		this.popupSelector = popupSelector;
		this.closeSelector = closeSelector;
		this.callSelector = callSelector;
		this.dissmissSelector = dissmissSelector;
		this.overlayClass = overlayClass;
		this.activeClass = activeClass;
		this.showedClass = showedClass;
		this.delay = delay;

		this.init();
	}

	init() {
		// Використовуємо делегування подій на рівні документа
		document.addEventListener('click', (e) => {
			// 1. Клік по кнопці виклику (навіть якщо вона була display: none)
			const callBtn = e.target.closest(this.callSelector);
			if (callBtn) {
				e.preventDefault();
				this.show(callBtn.dataset.call);
				return;
			}

			// 2. Клік по кнопці закриття всередині попапу
			const closeBtn = e.target.closest(this.closeSelector);
			if (closeBtn) {
				e.preventDefault();
				const popup = closeBtn.closest(this.popupSelector);
				if (popup) this.hide(popup);
				return;
			}

			// 3. Клік по кнопці "dissmiss"
			const dissmissBtn = e.target.closest(this.dissmissSelector);
			if (dissmissBtn) {
				e.preventDefault();
				const target = document.querySelector(dissmissBtn.dataset.dissmiss);
				if (target) this.hide(target);
				return;
			}

			// 4. Клік по фону попапу (overlay)
			const popup = e.target.closest(this.popupSelector);
			if (popup && !e.target.closest('.inner')) {
				this.hide(popup);
			}
		});
	}

	show(popupId) {
		const popup = document.querySelector(popupId);
		if (!popup) return;

		popup.classList.add(this.showedClass);

		// Фіксація ширини, щоб сторінка не "стрибала" при приховуванні скролу
		const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
		document.body.style.paddingRight = scrollBarWidth + 'px';
		
		const header = document.getElementById('mainHeader');
		if (header) header.style.paddingRight = scrollBarWidth + 'px';

		document.body.classList.add(this.overlayClass);
		document.documentElement.classList.add(this.overlayClass);

		setTimeout(() => {
			popup.classList.add(this.activeClass);
			if (popup.dataset.onopen && typeof window[popup.dataset.onopen] === 'function') {
				window[popup.dataset.onopen](popup);
			}
		}, this.delay);
	}

	hide(popup) {
		popup.classList.remove(this.activeClass);

		setTimeout(() => {
			popup.classList.remove(this.showedClass);
			// Прибираємо overlay тільки якщо немає інших відкритих попапів
			const activePopups = document.querySelectorAll(`${this.popupSelector}.${this.activeClass}`);
			if (activePopups.length === 0) {
				document.body.classList.remove(this.overlayClass);
				document.documentElement.classList.remove(this.overlayClass);
				document.body.style.paddingRight = '';
				const header = document.getElementById('mainHeader');
				if (header) header.style.paddingRight = '';
			}

			if (popup.dataset.onclose && typeof window[popup.dataset.onclose] === 'function') {
				window[popup.dataset.onclose](popup);
			}
		}, this.delay);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	window.popupWindow = new PopupWindow();
	// window.popupWindow.show('#supportPopup');
});
class DualRange {
	constructor(group) {
		this.group = group;

		this.range = group.querySelector('.range');
		this.rMin = group.querySelector('.range-min');
		this.rMax = group.querySelector('.range-max');
		this.iMin = group.querySelector('.input-min');
		this.iMax = group.querySelector('.input-max');
		this.fill = group.querySelector('.range-fill');

		if (!this.range || !this.rMin || !this.rMax) return;

		const ds = this.range.dataset;
		this.min = Number(ds.min);
		this.max = Number(ds.max);
		this.step = Number(ds.step || 1);

		[this.rMin, this.rMax, this.iMin, this.iMax].forEach(el => {
			if (!el) return;
			el.min = this.min;
			el.max = this.max;
			el.step = this.step;
		});

		this.set(this.min, this.max, false);
		this.bind();
	}

	bind() {
		const fromRange = () => {
			this.set(
				Number(this.rMin.value),
				Number(this.rMax.value),
				true
			);
		};

		const fromInput = () => {
			this.set(
				Number(this.iMin?.value),
				Number(this.iMax?.value),
				true
			);
		};

		this.rMin.addEventListener('input', fromRange);
		this.rMax.addEventListener('input', fromRange);

		if (this.iMin) {
			this.iMin.addEventListener('input', fromInput);
			this.iMin.addEventListener('blur', fromInput);
			this.iMin.addEventListener('change', fromInput);
		}

		if (this.iMax) {
			this.iMax.addEventListener('input', fromInput);
			this.iMax.addEventListener('blur', fromInput);
			this.iMax.addEventListener('change', fromInput);
		}
	}

	normalize(value) {
		if (Number.isNaN(value)) return null;
		value = Math.round(value / this.step) * this.step;
		return Math.max(this.min, Math.min(value, this.max));
	}

	set(min, max, emit = true) {
		min = this.normalize(min);
		max = this.normalize(max);

		if (min === null && max === null) return;

		if (min === null) min = Number(this.rMin.value);
		if (max === null) max = Number(this.rMax.value);

		if (min > max) [min, max] = [max, min];

		this.rMin.value = min;
		this.rMax.value = max;

		if (this.iMin) this.iMin.value = min;
		if (this.iMax) this.iMax.value = max;

		requestAnimationFrame(() => this.paint());

		if (emit) {
			this.group.dispatchEvent(
				new CustomEvent('dualrangechange', {
					bubbles: true,
					detail: {
						min,
						max,
						nameMin: this.iMin?.name || null,
						nameMax: this.iMax?.name || null
					}
				})
			);
		}
	}

	paint() {
		if (!this.fill) return;

		const min = Number(this.rMin.value);
		const max = Number(this.rMax.value);

		const left = ((min - this.min) / (this.max - this.min)) * 100;
		const right = 100 - ((max - this.min) / (this.max - this.min)) * 100;

		this.fill.style.left = left + '%';
		this.fill.style.right = right + '%';
	}

	reset() {
		this.set(this.min, this.max, true);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('[data-range]').forEach(block => {
		const group = block.querySelector('.range-group');
		if (!group) return;
		group._dualRange = new DualRange(group);
	});
});

//form animations + search filter
document.addEventListener('DOMContentLoaded', function(){

	let filterSearchInput = document.querySelector('[data-filter]');
	let filterSearchInputValue = '';
	let filterFields = filterSearchInput && filterSearchInput.dataset ? filterSearchInput.dataset.filterFields : '';

	function clearFilter(selector){
		let allFilteredItems = document.querySelectorAll(selector);
		for (let i = 0; i < allFilteredItems.length; i++) {
			allFilteredItems[i].innerHTML = allFilteredItems[i].innerHTML.replace(/(<mark>|<\/mark>)/gim, '');
			allFilteredItems[i].parentNode.classList.remove('hidden');
			setCounter(allFilteredItems[i], 0);
		};
		alertMessageToggle(false);
	};

	function alertMessageToggle(open){
		let alertMessage = document.getElementById('searchEmptyMessage');
		let pagination = document.getElementById('filterPagination');
		let showMore = document.getElementById('showMore');

		if (open) {
			if (alertMessage) alertMessage.classList.remove('hidden');
			if (pagination) pagination.classList.add('hidden');
			if (showMore) showMore.classList.add('hidden');
		} else {
			if (alertMessage) alertMessage.classList.add('hidden');
			if (pagination) pagination.classList.remove('hidden');
			if (showMore) showMore.classList.remove('hidden');
		};
	};

	function highlightText(selector, searchText){
		if (!selector || !selector.innerHTML) return;
		const regex = new RegExp(searchText, 'gi');

		let text = selector.innerHTML;
				text = text.replace(/(<mark>|<\/mark>)/gim, '');

		const newtext = text.replace(regex, '<mark>$&</mark>');

		selector.innerHTML = newtext;
	}

	function setCounter(parent, number){
		if (parent.querySelector('.search-tooltip') && parent.querySelector('.search-tooltip').querySelector('.count')) {
			parent.querySelector('.search-tooltip').querySelector('.count').innerHTML = number;
		}

		if (!number) {
			parent.classList.remove('success');
		} else {
			parent.classList.add('success');
		}
	}

	function checkFilters(item) {
		if (!item.querySelector('mark')) {
			item.parentNode.classList.add('hidden');
		} else {
			item.parentNode.classList.remove('hidden');
			setCounter(item, item.querySelectorAll('mark').length)
		};

		let allListItems = item.closest('.filter-parent').querySelectorAll('.filter-item');
		let hiddenListItems = item.closest('.filter-parent').querySelectorAll('.hidden');

		if (hiddenListItems.length >= allListItems.length) {
			alertMessageToggle(true);
		} else {
			alertMessageToggle(false);
		}
	};

	function applyFilter(selector, searchText){
		if (!selector) return;
		let allFilteredItems = document.querySelectorAll(selector);
		let fieldsArray = filterFields.split(',');

		for (let i = 0; i < allFilteredItems.length; i++) {
			for (let n = 0; n < fieldsArray.length; n++) {
				let fieldElements = allFilteredItems[i].querySelector(fieldsArray[n]);
				highlightText(fieldElements, searchText);
			};
			checkFilters(allFilteredItems[i]);
		};
	};

	function onCaseSearchKeyDown(event) {
		const waitForFinalEvent = (function(){
			var timers = {};
			return function (callback, ms, uniqueId) {
				if (!uniqueId) {
					uniqueId = "Don't call this twice without a uniqueId";
				}
				if (timers[uniqueId]) {
					clearTimeout (timers[uniqueId]);
				}
				timers[uniqueId] = setTimeout(callback, ms);
			};
		})();

		let input = this;
		waitForFinalEvent(function(){
			if (input.value && input.value.length) {
				input.parentElement.classList.add('focused');
				if (filterSearchInput.dataset.filter) {
					applyFilter(filterSearchInput.dataset.filter, input.value.toLowerCase());
				};
			} else {
				input.parentElement.classList.remove('focused');
				if (filterSearchInput.dataset.filter) {
					clearFilter(filterSearchInput.dataset.filter);
				};
			}
			filterSearchInputValue = input.value;
		}, 100)

		if (event.keyCode == 13 && window.searchCaseCallback) {
			window.searchCaseCallback();

			if (filterSearchInput.dataset.filter && filterSearchInputValue.length) {
				applyFilter(filterSearchInput.dataset.filter, filterSearchInputValue);
			};
		};
	}

	if (filterSearchInput) {
		filterSearchInput.addEventListener('keydown', onCaseSearchKeyDown, {passive: true});
	}
})
// search
document.addEventListener('DOMContentLoaded', function(){
	let inputSearch = document.getElementById('inputSearch');
	if (!inputSearch) return;

	function onSearchKeyDown(event) {
		let input = this;
		setTimeout(function(){
			if (input.value.length) {
				input.parentElement.classList.add('success');
			} else {
				input.parentElement.classList.remove('success');
			}
		}, 1)

		if (event.keyCode == 13 && window.searchFormSubmit) {
			window.searchFormSubmit();
		}
	}

	inputSearch.addEventListener('keydown', onSearchKeyDown, {passive: true});
});


// section scroll animation
document.addEventListener('DOMContentLoaded', function(){
	let ANIMATED_CLASS = 'animated'

	let setDetectSectionAnimation = function(section){
		if (window.pageYOffset + window.innerHeight / 1.3 > section.offsetTop) {
			if (!section.classList.contains(ANIMATED_CLASS)) {
				section.classList.add(ANIMATED_CLASS);
			};
		};
	};

	// on scroll
	document.addEventListener("scroll", (event) => {
		Array.prototype.forEach.call(document.querySelectorAll(".section"), function(section){
			setDetectSectionAnimation(section);
		});
	}, {passive: true});

	// on load
	Array.prototype.forEach.call(document.querySelectorAll(".section"), function(section){
		setTimeout(function(){
			setDetectSectionAnimation(section);
		}, 10)
	});
	setTimeout(function(){
		document.getElementById('mainHeader').classList.add(ANIMATED_CLASS);
	}, 10)
});
// input select
class Selecter {
	constructor(select, options = {}) {
		if (!(select instanceof HTMLSelectElement)) {
			throw new Error('Selecter: target must be <select>.');
		}
		this.select = select;
		this.settings = Object.assign(
			{
				onOpen: null,
				onClose: null,
				onChange: null,
				multiple: select.hasAttribute('multiple')
			},
			options
		);

		this._outsideClickHandler = this._outsideClickHandler.bind(this);
		this._onAnchorClick = this._onAnchorClick.bind(this);
		this._onListClick = this._onListClick.bind(this);
		this._onFormReset = this._onFormReset.bind(this);

		this._init();
	}

	open() {
		this.root.classList.add('opened');
		if (typeof this.settings.onOpen === 'function') {
			this.settings.onOpen(this.root, this.settings);
		}
	}

	close() {
		this.root.classList.remove('opened');
		if (typeof this.settings.onClose === 'function') {
			this.settings.onClose(this.root, this.settings);
		}
	}

	refresh() {
		this._teardownDOMOnly();
		this._build();
	}

	destroy() {
		this._teardownAll();
		this.select.style.display = this._originalDisplay || '';
	}

	// ---- private ----
	_init() {
		this._originalDisplay = this.select.style.display;
		this.select.style.display = 'none';
		this._build();

		this.form = this.select.closest('form') || null;
		if (this.form) {
			this.form.addEventListener('reset', this._onFormReset);
		}
	}

	_build() {
		const optionsList = [];
		const selectedInfo = this._collectOptions(optionsList);

		this.root = document.createElement('div');
		this.root.className = 'selecter';

		this.anchor = document.createElement('span');
		this.anchor.className = 'anchor';
		this.anchor.innerHTML = selectedInfo.title || '';

		this.dropdown = document.createElement('div');
		this.dropdown.className = 'dropdown';

		this._id = this.select.getAttribute('id') || this._setRandomId();
		this.ul = this._buildOptionsTree(optionsList, this.settings.multiple, this._id);

		this.dropdown.appendChild(this.ul);
		this.root.appendChild(this.anchor);
		this.root.appendChild(this.dropdown);

		this.select.parentNode.insertBefore(this.root, this.select.nextSibling);

		this.anchor.addEventListener('click', this._onAnchorClick);
		this.root.addEventListener('click', this._onListClick);
		document.addEventListener('click', this._outsideClickHandler);

		this._updateAnchorText(null);
	}

	_teardownDOMOnly() {
		this.anchor.removeEventListener('click', this._onAnchorClick);
		this.root.removeEventListener('click', this._onListClick);
		this.root.remove();
	}

	_teardownAll() {
		try {
			this.anchor && this.anchor.removeEventListener('click', this._onAnchorClick);
			this.root && this.root.removeEventListener('click', this._onListClick);
			document.removeEventListener('click', this._outsideClickHandler);
			this.form && this.form.removeEventListener('reset', this._onFormReset);
		} catch (e) {}
		if (this.root && this.root.parentNode) {
			this.root.parentNode.removeChild(this.root);
		}
		this.root = null;
		this.anchor = null;
		this.dropdown = null;
		this.ul = null;
		this.form = null;
	}

	_setRandomId() {
		return Math.floor(Math.random() * Date.now()).toString();
	}

	_collectOptions(outList) {
		let selected = null;
		const opts = Array.from(this.select.options || []);
		opts.forEach((opt, i) => {
			outList.push({
				label: opt.label,
				value: opt.value,
				disabled: !!opt.disabled,
				selected: !!opt.selected
			});
			if (i === 0 && !selected) selected = { title: opt.label };
			if (opt.selected) selected = { title: opt.label };
		});
		return selected || { title: '' };
	}

	_buildOptionsTree(optionsList, multiple, id) {
		const ul = document.createElement('ul');

		optionsList.forEach((option, i) => {
			const li = document.createElement('li');
			li.dataset.value = option.value;
			li.className =
				(option.disabled ? 'disabled ' : '') +
				(option.selected ? 'active' : '');

			li.appendChild(document.createTextNode(option.label));

			if (multiple && !option.disabled) {
				const cId = `${id}_${i}`;
				const input = document.createElement('input');
				input.type = 'checkbox';
				input.id = cId;
				input.name = cId;
				input.checked = !!option.selected;

				const label = document.createElement('label');
				label.setAttribute('for', cId);

				li.appendChild(document.createTextNode(' '));
				li.appendChild(input);
				li.appendChild(label);
			} else {
				li.appendChild(document.createTextNode(' '));
			}

			ul.appendChild(li);
		});

		return ul;
	}

	_outsideClickHandler(e) {
		if (!this.root) return;
		if (!this.root.contains(e.target)) {
			this.close();
		}
	}

	_onAnchorClick(e) {
		e.preventDefault();
		this._setFocused(true);
		if (this.root.classList.contains('opened')) this.close();
		else this.open();
	}

	_onListClick(e) {
		const li = e.target.closest('li');
		if (!li || !this.root.contains(li)) return;
		e.preventDefault();

		this._setFocused(true);

		if (li.classList.contains('disabled')) {
			this.close();
			return;
		}

		const multiple = !!this.settings.multiple;

		if (multiple) {
			const checkbox = li.querySelector('input[type="checkbox"]');
			li.classList.toggle('active');
			if (checkbox) {
				checkbox.checked = li.classList.contains('active');
			}
		} else {
			li.classList.add('active');
			Array.from(li.parentElement.children).forEach((s) => {
				if (s !== li) s.classList.remove('active');
			});
		}

		this._syncSelectWithValue(li.dataset.value);
		this._updateAnchorText(li.dataset.value);
	}

	_onFormReset() {
		this._setFocused(false);
	}

	_syncSelectWithValue(value) {
		const isMultiple = this.settings.multiple;
		const opts = Array.from(this.select.querySelectorAll('option'));

		opts.forEach((opt) => {
			const same = opt.value.toString() === value.toString();
			if (!isMultiple) {
				opt.selected = same;
			} else {
				opt.selected = same ? !opt.selected : opt.selected;
			}
		});

		if (typeof this.settings.onChange === 'function') {
			this.settings.onChange(this.select, this.settings, value);
		}
	}

	_updateAnchorText() {
		const opt = this.select.selectedOptions[0];
		this.anchor.textContent = opt ? opt.textContent.trim() : '';
		this.close();
	}

	_setFocused(state) {
		const group = this.select.closest('.form-group');
		if (!group) return;
		group.classList.toggle('focused', state);
	}
}

function initSelecter(target, options) {
	let nodes = [];

	if (typeof target === 'string') {
		nodes = Array.from(document.querySelectorAll(target));
	} else if (target instanceof HTMLSelectElement) {
		nodes = [target];
	} else if (NodeList.prototype.isPrototypeOf(target) || Array.isArray(target)) {
		nodes = Array.from(target);
	}

	const instances = nodes.map((el) => new Selecter(el, options));
	return instances;
}

// ВИКЛЮЧАЄМО city / district/ sorting, щоб не було дублювання по data-атрибуту skip
const instances = initSelecter(
	Array.from(document.querySelectorAll('.select')).filter(el => {
		return el.dataset.selecter !== 'skip';
	}),
	{
		onChange: (selectEl, settings, lastValue) => {
			console.log(
				'changed:',
				lastValue,
				'selected:',
				Array.from(selectEl.selectedOptions).map(o => o.value)
			);
		}
	}
);


// sticky block
document.addEventListener('DOMContentLoaded', function(){
	let stickyBlocks = document.querySelectorAll("[data-sticky]");
	let cloneIsAppended = false;

	Math.clamp = function(value, min, max){
		return value < min ? min : value > max ? max : value;
	}

	function setStickPosition(){
		for (i = 0; i < stickyBlocks.length; i++) {
			let headerHeight = document.getElementById('mainHeader').getBoundingClientRect().height;
			let block = stickyBlocks[i];
			let blockParent = block.closest('.sticky-inner');

			if (window.innerWidth <= 1199) {
				block.style.top = 'auto';
				block.classList.remove('to-top');
				block.classList.remove('to-bottom');
				return;
			}

			let stickInside = block.closest(block.dataset.sticky);
			let stickInsideHeight = stickInside.getBoundingClientRect().height;

			blockParent.style.height = blockParent.getBoundingClientRect().height + 'px';

			let startPosition = stickInside.offsetTop - headerHeight;
			let endPositon = startPosition + stickInsideHeight - block.getBoundingClientRect().height;

			if (window.pageYOffset < startPosition) {
				// console.log('top')
				block.style.top = 'auto';
				block.classList.remove('to-top');
				block.classList.remove('to-bottom');
			} else if (window.pageYOffset >= startPosition && window.pageYOffset <= endPositon) {
				// console.log('middle')
				block.classList.add('to-top');
				block.style.top = headerHeight + 'px';
				block.style.left = blockParent.getBoundingClientRect().left + 'px';
				block.classList.remove('to-bottom');
			} else if (window.pageYOffset > endPositon) {
				// console.log('bottom')
				block.style.left = blockParent.offsetLeft + 'px';
				block.classList.remove('to-top');
				block.classList.add('to-bottom');
			};
		};
	};

	setStickPosition();

	window.addEventListener('scroll', function(event){
		setStickPosition();
	});

	window.addEventListener('resize', function(event){
		setStickPosition();
	});
});




class Tabs {
	constructor(navEl, options = {}) {
		this.nav = navEl;
		this.opts = {
			tabBtnSelector: options.tabBtnSelector || '.tab-button',
			faderSelector: options.faderSelector || '.tab-fader',
			activeClassBtn: options.activeClassBtn || 'active',
			activeClassContent: options.activeClassContent || 'active',
		};

		this.containerSelector = this.nav.getAttribute('data-filter-items') || this.nav.getAttribute('data-tabs-container');
		this.buttons = Array.from(this.nav.querySelectorAll(this.opts.tabBtnSelector));
		this.fader = this.nav.querySelector(this.opts.faderSelector);

		this._onResize = this._onResize.bind(this);
		this._handlers = [];

		this.init();
	}

	init() {
		if (this.buttons.length === 0) return;

		this.buttons.forEach((btn, index) => {
			const handler = (e) => {
				this.toggleTo(index, btn);
			};
			btn.addEventListener('click', handler);
			this._handlers.push({ btn, handler });
		});

		const initialIndex = Math.max(
			0,
			this.buttons.findIndex((b) => b.classList.contains(this.opts.activeClassBtn))
		);
		
		setTimeout(() => {
			this.toggleTo(initialIndex, this.buttons[initialIndex]);
		}, 60);

		window.addEventListener('resize', this._onResize, { passive: true });
	}

	toggleTo(index, button) {
		if (!button) return;

		this.buttons.forEach((b) => b.classList.remove(this.opts.activeClassBtn));
		button.classList.add(this.opts.activeClassBtn);

		this._setFaderSize(button);
		this._setActiveTab(index);
	}

	_setFaderSize(button) {
		if (!this.fader || !button) return;

		const width = button.offsetWidth;
		const left = button.offsetLeft - 3;

		this.fader.style.width = `${width}px`;
		this.fader.style.transform = `translateX(${left}px)`;
	}

	_setActiveTab(index) {
		if (!this.containerSelector) return;
		const container = document.getElementById(this.containerSelector) || document.querySelector(this.containerSelector);
		if (!container) return;

		const allTabContent = Array.from(container.querySelectorAll('.tab-content'));
		if (allTabContent.length === 0) return;

		allTabContent.forEach((el) => el.classList.remove(this.opts.activeClassContent));
		if (allTabContent[index]) {
			allTabContent[index].classList.add(this.opts.activeClassContent);
		}
	}

	_onResize() {
		const activeBtn = this.buttons.find((b) => b.classList.contains(this.opts.activeClassBtn));
		if (activeBtn) this._setFaderSize(activeBtn);
	}

	static initAll(options) {
		const selectors = '.simple-tags, [data-tabs-container], .tabs';
		return Array.from(document.querySelectorAll(selectors)).map(nav => new Tabs(nav, options));
	}
}

document.addEventListener('DOMContentLoaded', () => {
	window.TabsInstances = Tabs.initAll();
});
class TagFilter {
	filterAttribute = 'data-tag-link'; 
	filteredItemAttribute = 'data-tag';

	constructor(filterGroup) {
		const targetId = filterGroup.dataset.filterItems;
		this.tagsParent = document.getElementById(targetId);
		if (!this.tagsParent) return;

		this.filterButtons = Array.from(filterGroup.querySelectorAll(`[${this.filterAttribute}]`));
		this.filterButtons.forEach((btn) => {
			btn.addEventListener('click', () => this.applyFilter(btn));
		});
	}

	applyFilter(clickedButton) {
		const filterValue = clickedButton.getAttribute(this.filterAttribute);
		const items = this.tagsParent.querySelectorAll('.tag-item-cover');

		items.forEach((item) => {
			const itemTag = item.getAttribute(this.filteredItemAttribute);

			if (filterValue === 'all' || itemTag === filterValue) {
				item.style.display = '';
				item.classList.add('visible');
			} else {
				item.style.display = 'none';
				item.classList.remove('visible');
			}
		});

		this.toggleButtonClass(clickedButton);
	}

	toggleButtonClass(activeButton) {
		this.filterButtons.forEach((btn) => btn.classList.remove('active'));
		activeButton.classList.add('active');
	}
}

document.querySelectorAll("[data-filter-items]").forEach(group => {
	new TagFilter(group);
});
document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.filters-cover').forEach(cover => {
		const tagList = cover.querySelector('.tag-list');
		if (!tagList) return;

		tagList.addEventListener('click', e => {
			const tag = e.target.closest('.tag');
			if (!tag) return;

			const name = tag.dataset.key;
			const value = tag.dataset.value;

			// radio / checkbox
			cover.querySelectorAll(`[name="${CSS.escape(name)}"]`).forEach(inp => {
				if (inp.type === 'radio') {
					inp.checked = false;
					inp.dispatchEvent(new Event('change', { bubbles: true }));
				}
				if (inp.type === 'checkbox' && inp.value === value) {
					inp.checked = false;
					inp.dispatchEvent(new Event('change', { bubbles: true }));
				}
			});

			// range
			cover.querySelectorAll('[data-range]').forEach(block => {
				const group = block.querySelector('.range-group');
				const dr = group?._dualRange;
				const inputMin = group?.querySelector('.input-min');
				if (dr && inputMin?.name === name) {
					dr.reset();
				}
			});

			// date
			if (name === 'filter[date]') {
				cover.querySelector('[name="filter[startDatetime]"]')?.dispatchEvent(
					new Event('change', { bubbles: true })
				);
				cover.querySelector('[name="filter[endDatetime]"]')?.dispatchEvent(
					new Event('change', { bubbles: true })
				);
				cover.querySelector('[name="filter[startDatetime]"]').value = '';
				cover.querySelector('[name="filter[endDatetime]"]').value = '';
			}

			// city → clear districts
			if (name === 'filter[city]') {
				cover.querySelectorAll('[name="filter[district][]"]').forEach(cb => {
					cb.checked = false;
					cb.dispatchEvent(new Event('change', { bubbles: true }));
				});
				cover.querySelectorAll('.tag[data-key="filter[district][]"]').forEach(t => t.remove());
				cover.querySelector('#district')
					?.closest('.filter-group')
					?.classList.add('disabled');
			}

			tag.remove();
			cover._filtersUI?.rebuild?.();
		});
	});
});

// validation
window.addEventListener("DOMContentLoaded", function() {

	class ValidationForm {

		classes = {
			success: 'success',
			error: 'error',
			focused: 'focused',
			ignored: 'ignored',
			disabled: 'disabled'
		}

		form = null;
		formInputs = null;
		formTextareas = null;
		formSelects = null;
		formCheckboxes = null;
		formFileInputs = null;

		constructor(form) {
			this.form = form;
			this.formInputs = form.querySelectorAll(`.input:not(.${this.classes.ignored})`);
			this.formTextareas = form.querySelectorAll(`.textarea:not(.${this.classes.ignored})`);
			this.formSelects = form.querySelectorAll(`.select:not(.${this.classes.ignored})`);
			this.formCheckboxes = form.querySelectorAll(`.checkbox:not(.${this.classes.ignored})`);
			this.formFileInputs = form.querySelectorAll(`.file:not(.${this.classes.ignored})`);

			this.form.addEventListener('submit', (event) => {
				this.onFormSubmit(event);
			});

			this.form.addEventListener('reset', (event) => {
				this.onFormReset(event);
			});
		};

		onFormSubmit(event){
			let formInputs = this.formInputs;
			let formTextareas = this.formTextareas;
			let formSelects = this.formSelects;
			let formFileInputs = this.formFileInputs;
			let formCheckboxes  = this.formCheckboxes;

			if (formInputs && formInputs.length) {
				for (let i = 0; i < formInputs.length; i++) {
					let input = formInputs[i];
					this.validateByTextLength(input);
				}
			}

			if (formTextareas && formTextareas.length) {
				for (let t = 0; t < formTextareas.length; t++) {
					let textArea = formTextareas[t];
					this.validateByTextLength(textArea);
				}
			}

			if (formSelects && formSelects.length) {
				for (let s = 0; s < formSelects.length; s++) {
					let formSelect = formSelects[s];
					this.validateBySelectOptions(formSelect);
				}
			}

			if (formFileInputs && formFileInputs.length) {
				for (let s = 0; s < formFileInputs.length; s++) {
					let formFileInput = formFileInputs[s];
					this.validateByFileUpload(formFileInput);
				}
			}

			if (formCheckboxes && formCheckboxes.length) {
				for (let s = 0; s < formCheckboxes.length; s++) {
					let formCheckbox = formCheckboxes[s];
					this.validateCheckbox(formCheckbox);
				}
			}

			// --- ПЕРЕВІРКА НА ПОМИЛКИ ---
			const hasErrors = this.form.querySelector(`.${this.classes.error}`);
			const isDisabled = this.form.classList.contains(this.classes.disabled);
			
			if (!hasErrors && !isDisabled) {
				console.log('no errors')
				this.submitFormData();
			} else {
				const firstError = this.form.querySelector(`.${this.classes.error}`);
				if (firstError) {
					firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
				}
				console.log(firstError)
			}
			// --- КІНЕЦЬ ПЕРЕВІРКИ ---

			// callback
			if (window.onContactFormSubmit) {
				window.onContactFormSubmit(this);
			}
		};

		onFormReset(event){
			let allFormGroup = this.form.querySelectorAll('.form-group');
			let allFormUploads = this.form.querySelectorAll('.files-cover');
			let allChartCounters = this.form.querySelectorAll('.chart-counter');
			for (let i = 0; i < allFormGroup.length; i++) {
				allFormGroup[i].classList.remove(this.classes.success, this.classes.error, this.classes.focused)
			}
			if (allFormUploads && allFormUploads.length) {
				for (let i = 0; i < allFormUploads.length; i++) {
					allFormUploads[i].remove();
				}
			}
			if (allChartCounters && allChartCounters.length) {
				for (let i = 0; i < allChartCounters.length; i++) {
					allChartCounters[i].innerHTML = '0';
				}
			};
			this.form.classList.remove(this.classes.disabled);
		};

		setFocusedClass(inputParent, hasValue){
			if (hasValue) {
				inputParent.classList.add(this.classes.focused);
			} else {
				inputParent.classList.remove(this.classes.focused);
			}
		};

		submitFormData() {
			const formData = new FormData(this.form);
			console.log(formData)
			// Викликаємо глобальну функцію, якщо вона існує
			if (typeof window.onFormSubmit === 'function') {
				window.onFormSubmit();
			}
		}

		// FIX: нормальний обробник введення для input/textarea/select
		onFieldInput(e){
			const el = e.target;
			const type =
				el.classList.contains('phone') ? 'phone' :
				el.classList.contains('email') ? 'email' : '';

			this.setFocusedClass(el.parentElement, el.value.length);

			switch (type) {
				case 'phone':
					this.setPhoneMask(e, el);
					break;
				case 'email':
					this.validateEmail(e, el);
					break;
				default:
					this.setChartsCount(el.value.length, el); // лічильник символів
					this.validateByTextLength(el);
			}
		};

		onCheckboxChange(){
			this._this.validateCheckbox(this.checkbox);
		};

		isValidEmail(email){
			let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		};

		setValidationClass(element, validationSuccess){
			if (validationSuccess) {
				element.classList.add(this.classes.success);
				element.classList.remove(this.classes.error);
				this.form.classList.remove(this.classes.disabled);
			} else {
				element.classList.add(this.classes.error);
				element.classList.remove(this.classes.success);
				this.form.classList.add(this.classes.disabled);
			}
		};

		setChartsCount(valLength, element){
			if (!element) return;
			const group = element.closest('.form-group');
			if (!group) return;
			const counterEl = group.querySelector('.chart-counter');
			if (!counterEl) return;
			counterEl.textContent = valLength;
		};

		setPhoneMask(event, input){
			let keyCode = event.keyCode || 0;
			let pos = input.selectionStart || 0;
			if (pos < 3 && event.type === 'keydown') event.preventDefault();
			let matrix = input.getAttribute('placeholder') ? input.getAttribute('placeholder') : '+380 (___) ___ __ _',
					i = 0,
					def = matrix.replace(/\D/g, ""),
					val = input.value.replace(/\D/g, ""),
					new_value = matrix.replace(/[_\d]/g, function(a) {
							return i < val.length ? val.charAt(i++) || def.charAt(i) : a
					});
			i = new_value.indexOf("_");
			if (i != -1) {
				i < 5 && (i = 3);
				new_value = new_value.slice(0, i);
			}
			let reg = matrix.substr(0, input.value.length).replace(/_+/g,
					function(a) {
							return "\\d{1," + a.length + "}"
					}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(input.value) || input.value.trim().length < 5 || (keyCode > 47 && keyCode < 58)) {
				input.value = new_value;
			}
			if (event.type == "blur" && input.value.trim().length < 5) {
				input.value = "";
			}
			this.setValidationClass(input.parentElement, input.value.length == matrix.length);
		};

		validateEmail(event, input){
			this.setValidationClass(input.parentElement, this.isValidEmail(input.value.trim()));
		};

		validateByTextLength(field){
			let minlength = parseInt(field.dataset.minlength) || 2;
			this.setValidationClass(field.parentElement, field.value.length >= minlength);
		};

		validateBySelectOptions(select){
			let defaultOption = select.querySelector('[disabled]');
			this.setValidationClass(select.parentElement, select.value !== (defaultOption ? defaultOption.innerHTML : ''));
		};

		validateByFileUpload(fileInput){
			let inputHasFiles = fileInput.files.length;
			this.setValidationClass(fileInput.parentElement, inputHasFiles);
		};

		validateCheckbox(checkbox) {
			let isChecked = checkbox.checked;
			this.setValidationClass(checkbox.parentElement, isChecked);
		};

		onSelectChange(){
			let select = document.activeElement;
			this.validateBySelectOptions(select);
		};

		init() {
			let formInputs = this.form.querySelectorAll('.input');
			let formTextareas = this.form.querySelectorAll('.textarea');
			let formSelects = this.form.querySelectorAll('.select');
			let formFileInputs = this.form.querySelectorAll('.file');
			let formCheckboxes = this.form.querySelectorAll('.checkbox');

			// INPUTS
			if (formInputs && formInputs.length) {
				for (let i = 0; i < formInputs.length; i++) {
					let input = formInputs[i];
					this.setFocusedClass(input.parentElement, input.value.length);
					this.setChartsCount(input.value.length, input); // FIX: початкове значення
					input.addEventListener('input', this.onFieldInput.bind(this), {passive: true}); // FIX
					input.addEventListener('blur', this.onFieldInput.bind(this), {passive: true});
				}
			}

			// TEXTAREAS
			if (formTextareas && formTextareas.length) {
				for (let t = 0; t < formTextareas.length; t++) {
					let textArea = formTextareas[t];
					this.setFocusedClass(textArea.parentElement, textArea.value.length);
					this.setChartsCount(textArea.value.length, textArea); // FIX: початкове значення для textarea
					textArea.addEventListener('input', this.onFieldInput.bind(this), {passive: true}); // FIX
					textArea.addEventListener('blur', this.onFieldInput.bind(this), {passive: true});
				}
			}

			// SELECTS
			if (formSelects && formSelects.length) {
				for (let s = 0; s < formSelects.length; s++) {
					let formSelect = formSelects[s];
					this.setFocusedClass(formSelect.parentElement, formSelect.value.length);
					formSelect.addEventListener('change', this.onFieldInput.bind(this), {passive: true}); // FIX
				}
			}

			// CHECKBOXES
			if (formCheckboxes && formCheckboxes.length) {
				for (let s = 0; s < formCheckboxes.length; s++) {
					let formCheckbox = formCheckboxes[s];
					this.setFocusedClass(formCheckbox.parentElement, formCheckbox.checked);
					formCheckbox.addEventListener('change', this.onCheckboxChange.bind({_this: this, checkbox: formCheckbox}), {passive: true});
				}
			}

			const inputs = document.querySelectorAll('.number-single-input');

			inputs.forEach((input, index) => {
				input.addEventListener('input', (e) => {
					if (input.value.length > 1) {
						input.value = input.value.slice(0, 1);
					}

					if (input.value.length === 1 && index < inputs.length - 1) {
						inputs[index + 1].focus();
					}
				});

				input.addEventListener('keydown', (e) => {
					if (e.key === 'Backspace' && input.value === '' && index > 0) {
						inputs[index - 1].focus();
					}
				});
			});


		};
	};

	let allValidateForms = document.querySelectorAll('.validate-form');

	for (let i = 0; i < allValidateForms.length; i++) {
		const newForm = new ValidationForm(allValidateForms[i]);
		newForm.init();
	}

	let allSearchReset = document.querySelectorAll('.search-reset');
	if (allSearchReset && allSearchReset.length) {
		for (let i = 0; i < allSearchReset.length; i++) {
			let resetButton = allSearchReset[i];
			resetButton.addEventListener('click', (e) => {
				let input = e.target.closest('.form-group').querySelector('input');
				if (input) input.focus();
			});
		}
	}
});

// для radio-area
document.addEventListener('change', function (e) {
	if (!e.target.matches('input[type="radio"][name="option"]')) return;

	const textareaGroup = document.querySelector('.radio-area .textarea-group');
	const textarea = document.querySelector('.radio-area textarea');

	if (!textareaGroup || !textarea) return;

	const checkedRadio = document.querySelector('input[name="option"]:checked');

	if (checkedRadio && checkedRadio.value === 'option9') {
		textareaGroup.classList.remove('disabled');
		textarea.removeAttribute('disabled');

		setTimeout(() => {
			textarea.focus();
		}, 0);
	} else {
		textareaGroup.classList.add('disabled');
		textarea.setAttribute('disabled', 'disabled');
		textarea.blur();
	}
});

// if no src we need to hide images
document.addEventListener("error", function(e) {
	if (e.target.tagName === "IMG") {
		e.target.style.opacity = "0";
	}
}, true);
