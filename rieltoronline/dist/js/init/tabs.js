// tabs
class Tabs {
	constructor(navEl, options = {}) {
		this.nav = navEl;
		this.opts = {
			tabBtnSelector: options.tabBtnSelector || '.tab-button',
			faderSelector: options.faderSelector || '.tab-fader',
			activeClassBtn: options.activeClassBtn || 'active',
			activeClassContent: options.activeClassContent || 'active',
		};

		this.containerSelector = this.nav.dataset.tabsContainer || null;
		this.buttons = Array.from(this.nav.querySelectorAll(this.opts.tabBtnSelector));
		this.fader = this.nav.querySelector(this.opts.faderSelector);

		this._onResize = this._onResize.bind(this);
		this._handlers = [];

		this.init();
	}

	init() {
		if (!this.containerSelector) return;

		this.buttons.forEach((btn, index) => {
			const handler = (e) => {
				e.preventDefault();
				this.toggleTo(index, btn);
			};
			btn.addEventListener('click', handler, false);
			this._handlers.push({ btn, handler });
		});

		const initialIndex = Math.max(
			0,
			this.buttons.findIndex((b) => b.classList.contains(this.opts.activeClassBtn))
		);
		this.toggleTo(initialIndex, this.buttons[initialIndex]);

		window.addEventListener('resize', this._onResize, { passive: true });
	}

	destroy() {
		this._handlers.forEach(({ btn, handler }) => btn.removeEventListener('click', handler));
		this._handlers = [];
		window.removeEventListener('resize', this._onResize);
	}

	toggleTo(index, button) {
		if (!button) return;

		this.buttons.forEach((b) => b.classList.remove(this.opts.activeClassBtn));
		button.classList.add(this.opts.activeClassBtn);

		this._setFaderSize(button);
		this._setActiveTab(index);
	}

	_setFaderSize(button) {
		if (!this.fader || !button || !button.parentElement) return;
		const rect = button.getBoundingClientRect();
		const parentRect = button.parentElement.getBoundingClientRect();

		this.fader.style.width = rect.width + 'px';
		this.fader.style.height = rect.height + 'px';
		this.fader.style.left = rect.left - parentRect.left + 'px';
		this.fader.style.top = rect.top - parentRect.top - 1 + 'px';
	}

	_setActiveTab(index) {
		if (!this.containerSelector) return;
		const container = document.querySelector(this.containerSelector);
		if (!container) return;

		const allTabContent = Array.from(container.querySelectorAll('.tab-content'));
		allTabContent.forEach((el) => el.classList.remove(this.opts.activeClassContent));

		const current = allTabContent[index];
		if (current) current.classList.add(this.opts.activeClassContent);
	}

	_onResize() {
		const activeBtn = this.buttons.find((b) => b.classList.contains(this.opts.activeClassBtn));
		if (activeBtn) this._setFaderSize(activeBtn);
	}

	static initAll(options) {
		const instances = [];
		document.querySelectorAll('[data-tabs-container]').forEach((nav) => {
			instances.push(new Tabs(nav, options));
		});
		return instances;
	}
}

document.addEventListener('DOMContentLoaded', () => {
	window.TabsInstances = Tabs.initAll();
});
