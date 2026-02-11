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