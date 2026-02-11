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
