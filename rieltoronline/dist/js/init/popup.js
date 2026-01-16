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

		this._onCloseClick = this._onCloseClick.bind(this);
		this._onPopupClick = this._onPopupClick.bind(this);
		this._onCallClick = this._onCallClick.bind(this);
		this._onDissmissClick = this._onDissmissClick.bind(this);

		this.init();
	}

	init() {
		document.querySelectorAll(this.closeSelector).forEach(btn => {
			btn.addEventListener('click', this._onCloseClick);
		});

		document.querySelectorAll(this.popupSelector).forEach(popup => {
			popup.addEventListener('click', (e) => this._onPopupClick(e, popup));
		});

		document.querySelectorAll(this.callSelector).forEach(btn => {
			btn.addEventListener('click', this._onCallClick);
		});

		document.querySelectorAll(this.dissmissSelector).forEach(btn => {
			btn.addEventListener('click', this._onDissmissClick);
		});
	}

	_onCloseClick(e) {
		e.preventDefault();
		const popup = e.currentTarget.closest(this.popupSelector);
		if (popup) this.hide(popup);
	}

	_onPopupClick(e, popup) {
		if (!e.target.closest('.inner')) {
			e.preventDefault();
			this.hide(popup);
		}
	}

	_onCallClick(e) {
		e.preventDefault();
		const target = e.currentTarget.dataset.call;
		if (target) this.show(target);
	}

	_onDissmissClick(e) {
		e.preventDefault();
		const target = e.currentTarget.dataset.dissmiss;
		if (!target) return;

		const popup = document.querySelector(target);
		if (popup) this.hide(popup);
	}

	show(popupId) {
		const popup = document.querySelector(popupId);
		if (!popup) return;

		popup.classList.add(this.showedClass);

		document.body.style.width = window.getComputedStyle(document.body).width;
		const header = document.getElementById('mainHeader');
		if (header) header.style.width = window.getComputedStyle(header).width;

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
		document.body.classList.remove(this.overlayClass);
		document.documentElement.classList.remove(this.overlayClass);
		document.body.style.width = '';

		const header = document.getElementById('mainHeader');
		if (header) header.style.width = '';

		popup.classList.remove(this.activeClass);

		setTimeout(() => {
			popup.classList.remove(this.showedClass);

			if (popup.dataset.onclose && typeof window[popup.dataset.onclose] === 'function') {
				window[popup.dataset.onclose](popup);
			}
		}, this.delay);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	window.popupWindow = new PopupWindow();
});
