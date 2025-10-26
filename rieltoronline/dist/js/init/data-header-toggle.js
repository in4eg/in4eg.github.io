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
