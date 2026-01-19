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