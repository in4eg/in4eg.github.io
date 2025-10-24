// accordeon
class Accordion {
	constructor(groupEl, options = {}) {
		this.root = groupEl;

		this.opts = {
			activeClass: options.activeClass || 'active',
			titleSelector: options.titleSelector || '.accordeon-title',
			itemSelector: options.itemSelector || '[data-accordeon]',
			closeOthers: options.closeOthers !== false, // за замовчуванням true
		};

		this._onClick = this._onClick.bind(this);
		this._cache();
		this._bind();
	}

	_cache() {
		this.items = Array.from(this.root.querySelectorAll(this.opts.itemSelector));
		this.buttons = Array.from(this.root.querySelectorAll(this.opts.titleSelector));
	}

	_bind() {
		this.buttons.forEach((btn) => btn.addEventListener('click', this._onClick, false));
	}

	destroy() {
		this.buttons.forEach((btn) => btn.removeEventListener('click', this._onClick));
	}

	_onClick(e) {
		e.preventDefault();

		// Шукаємо найближчий елемент акордеону, а не лише прямого батька
		const item = e.currentTarget.closest(this.opts.itemSelector);
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
		this.items.forEach((el) => el.classList.remove(this.opts.activeClass));
	}

	/**
	 * Ініціалізуємо інстанси за “групами”.
	 * Групою вважаємо спільний контейнер (parentElement) для кількох [data-accordeon].
	 */
	static initAll(options) {
		const allItems = Array.from(document.querySelectorAll('[data-accordeon]'));
		const groups = new Set();

		allItems.forEach((item) => {
			if (item.parentElement) groups.add(item.parentElement);
		});

		return Array.from(groups).map((groupEl) => new Accordion(groupEl, options));
	}
}

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.accordeon-list').forEach((group) => {
		new Accordion(group);
	});
});
