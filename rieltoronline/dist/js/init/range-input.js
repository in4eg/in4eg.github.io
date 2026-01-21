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
		const handler = () => {
			this.set(
				Number(this.rMin.value),
				Number(this.rMax.value),
				true
			);
		};

		this.rMin.addEventListener('input', handler);
		this.rMax.addEventListener('input', handler);

		this.iMin && this.iMin.addEventListener('input', handler);
		this.iMax && this.iMax.addEventListener('input', handler);
	}

	set(min, max, emit = true) {
		min = Math.max(this.min, Math.min(min, this.max));
		max = Math.max(this.min, Math.min(max, this.max));
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
