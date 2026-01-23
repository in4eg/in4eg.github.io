class DualRange {
	constructor(group) {
		this.group = group;

		this.range = group.querySelector('.range');
		this.rMin = group.querySelector('.range-min');
		this.rMax = group.querySelector('.range-max');
		this.iMin = group.querySelector('.input-min');
		this.iMax = group.querySelector('.input-max');
		this.fill = group.querySelector('.range-fill');

		if (!this.range || !this.rMin || !this.rMax) return;

		const ds = this.range.dataset;
		this.min = Number(ds.min);
		this.max = Number(ds.max);
		this.step = Number(ds.step || 1);

		[this.rMin, this.rMax, this.iMin, this.iMax].forEach(el => {
			if (!el) return;
			el.min = this.min;
			el.max = this.max;
			el.step = this.step;
		});

		this.set(this.min, this.max, false);
		this.bind();
	}

	bind() {
		const fromRange = () => {
			this.set(
				Number(this.rMin.value),
				Number(this.rMax.value),
				true
			);
		};

		const fromInput = () => {
			this.set(
				Number(this.iMin?.value),
				Number(this.iMax?.value),
				true
			);
		};

		this.rMin.addEventListener('input', fromRange);
		this.rMax.addEventListener('input', fromRange);

		if (this.iMin) {
			this.iMin.addEventListener('input', fromInput);
			this.iMin.addEventListener('blur', fromInput);
			this.iMin.addEventListener('change', fromInput);
		}

		if (this.iMax) {
			this.iMax.addEventListener('input', fromInput);
			this.iMax.addEventListener('blur', fromInput);
			this.iMax.addEventListener('change', fromInput);
		}
	}

	normalize(value) {
		if (Number.isNaN(value)) return null;
		value = Math.round(value / this.step) * this.step;
		return Math.max(this.min, Math.min(value, this.max));
	}

	set(min, max, emit = true) {
		min = this.normalize(min);
		max = this.normalize(max);

		if (min === null && max === null) return;

		if (min === null) min = Number(this.rMin.value);
		if (max === null) max = Number(this.rMax.value);

		if (min > max) [min, max] = [max, min];

		this.rMin.value = min;
		this.rMax.value = max;

		if (this.iMin) this.iMin.value = min;
		if (this.iMax) this.iMax.value = max;

		requestAnimationFrame(() => this.paint());

		if (emit) {
			this.group.dispatchEvent(
				new CustomEvent('dualrangechange', {
					bubbles: true,
					detail: {
						min,
						max,
						nameMin: this.iMin?.name || null,
						nameMax: this.iMax?.name || null
					}
				})
			);
		}
	}

	paint() {
		if (!this.fill) return;

		const min = Number(this.rMin.value);
		const max = Number(this.rMax.value);

		const left = ((min - this.min) / (this.max - this.min)) * 100;
		const right = 100 - ((max - this.min) / (this.max - this.min)) * 100;

		this.fill.style.left = left + '%';
		this.fill.style.right = right + '%';
	}

	reset() {
		this.set(this.min, this.max, true);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('[data-range]').forEach(block => {
		const group = block.querySelector('.range-group');
		if (!group) return;
		group._dualRange = new DualRange(group);
	});
});
