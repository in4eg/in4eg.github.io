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