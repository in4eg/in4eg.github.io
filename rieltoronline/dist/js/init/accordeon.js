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
