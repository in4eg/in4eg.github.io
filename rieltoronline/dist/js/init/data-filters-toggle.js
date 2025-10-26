class ToggleHandler {
	constructor({ 
		btnSelector = '[data-toggle]', 
		activeClass = 'active', 
		animatedClass = 'animated', 
		openedClass = 'opened',
		delay = 250 
	} = {}) {
		this.btnSelector = btnSelector;
		this.activeClass = activeClass;
		this.animatedClass = animatedClass;
		this.openedClass = openedClass;
		this.delay = delay;

		this.buttons = Array.from(document.querySelectorAll(this.btnSelector));
		this._onClick = this._onClick.bind(this);

		this.init();
	}

	init() {
		this.buttons.forEach(btn => {
			btn.addEventListener('click', this._onClick, false);
		});
	}

	_onClick(e) {
		const button = e.currentTarget;
		const targetSelector = button.getAttribute('data-toggle');
		const target = document.querySelector(targetSelector);

		if (!target) return;

		const isActive = target.classList.contains(this.activeClass);

		if (!isActive) {
			target.classList.add(this.activeClass);
			button.classList.add(this.openedClass);

			setTimeout(() => {
				target.classList.add(this.animatedClass);
			}, this.delay);
		} else {
			target.classList.remove(this.activeClass, this.animatedClass);
			button.classList.remove(this.openedClass);
		}
	}
}

document.addEventListener('DOMContentLoaded', () => {
	new ToggleHandler();
});
