class DateRange {
	constructor(root, opts = {}) {
		this.root   = root;
		this.header = root.querySelector('.range-header');
		this.iStart = root.querySelector('[data-start]');
		this.iEnd   = root.querySelector('[data-end]');

		if (!this.header || !this.iStart || !this.iEnd) {
			throw new Error('DateRange: потрібні .range-header, [data-start], [data-end]');
		}

		this.placeholder = this.header.textContent?.trim() || 'Не вибрано';
		this.formatter = opts.formatter || new Intl.DateTimeFormat('uk-UA', { 
			day: '2-digit', month: '2-digit', year: 'numeric' 
		});

		this._onStartChange = this._onStartChange.bind(this);
		this._onEndChange   = this._onEndChange.bind(this);
		this._onClickWrap   = this._onClickWrap.bind(this);

		this._bind();
		this._render();
	}

	_bind() {
		this.iStart.addEventListener('change', this._onStartChange, false);
		this.iEnd.addEventListener('change', this._onEndChange, false);

		this.root.addEventListener('click', this._onClickWrap, { passive: true });

		this.header.addEventListener('click', () => {
			if (typeof this.iStart.showPicker === 'function') {
				this.iStart.showPicker();
			} else {
				this.iStart.focus();
			}
		});

		const form = this.root.closest('form');
		if (form) {
			form.addEventListener('reset', () => {
				requestAnimationFrame(() => {
					this.iStart.value = '';
					this.iEnd.value   = '';
					this.root.classList.remove('focused');
					this._render(true);
				});
			});
		}
	}

	_onClickWrap() {
		this.root.classList.add('focused');
	}

	_onStartChange() {
		if (this.iStart.value) {
			this.iEnd.min = this.iStart.value;
			if (this.iEnd.value && this.iEnd.value < this.iStart.value) {
				this.iEnd.value = this.iStart.value;
			}
		} else {
			this.iEnd.removeAttribute('min');
		}
		this._render(true);
	}

	_onEndChange() {
		if (this.iEnd.value) {
			this.iStart.max = this.iEnd.value;
			if (this.iStart.value && this.iStart.value > this.iEnd.value) {
				this.iStart.value = this.iEnd.value;
			}
		} else {
			this.iStart.removeAttribute('max');
		}
		this._render(true);
	}

	get values() {
		return { start: this.iStart.value || null, end: this.iEnd.value || null };
	}

	set values({ start = null, end = null } = {}) {
		this.iStart.value = start || '';
		this.iEnd.value   = end || '';
		this._onStartChange();
		this._onEndChange();
		this._render(true);
	}

	_formatISO(iso) {
		if (!iso) return '';
		const [y, m, d] = iso.split('-').map(Number);
		const date = new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
		return this.formatter.format(date);
	}

	_render(emit = false) {
		const { start, end } = this.values;
		let text = this.placeholder;

		if (start && end) {
			text = `${this._formatISO(start)} — ${this._formatISO(end)}`;
		} else if (start && !end) {
			text = `з ${this._formatISO(start)}`;
		} else if (!start && end) {
			text = `до ${this._formatISO(end)}`;
		}

		this.header.textContent = text;

		if (emit) {
			this.root.dispatchEvent(new CustomEvent('daterangechange', {
				bubbles: true,
				detail: { start, end, label: text }
			}));
		}
	}
}

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('[data-calendar]').forEach((wrap) => {
		new DateRange(wrap);
	});
});

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('input[type="date"]').forEach((el) => {
		el.addEventListener('click', () => {
			if (typeof el.showPicker === 'function') el.showPicker();
		});
		el.addEventListener('keydown', (e) => {
			if ((e.key === 'Enter' || e.key === ' ') && typeof el.showPicker === 'function') {
				e.preventDefault();
				el.showPicker();
			}
		});
	});
});
