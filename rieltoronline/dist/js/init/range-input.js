class DualRange {
	constructor(root) {
		this.root = root;
		this.range = root.querySelector('.range');
		this.rMin = root.querySelector('.range-min');
		this.rMax = root.querySelector('.range-max');
		this.iMin = root.querySelector('.input-min');
		this.iMax = root.querySelector('.input-max');
		this.fill = root.querySelector('.range-fill');

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
			this.set(+this.rMin.value, +this.rMax.value, true);
		};

		this.rMin.addEventListener('input', handler);
		this.rMax.addEventListener('input', handler);

		if (this.iMin) this.iMin.addEventListener('input', handler);
		if (this.iMax) this.iMax.addEventListener('input', handler);
	}

	set(min, max, emit = true) {
		min = Math.max(this.min, Math.min(min, this.max));
		max = Math.max(this.min, Math.min(max, this.max));
		if (min > max) [min, max] = [max, min];

		// ВАЖЛИВО: повний reset value
		this.rMin.value = min;
		this.rMax.value = max;

		if (this.iMin) this.iMin.value = min;
		if (this.iMax) this.iMax.value = max;

		// ПРИМУСОВИЙ repaint
		requestAnimationFrame(() => {
			this.paintFill();
		});

		if (emit) {
			this.root.dispatchEvent(new CustomEvent('dualrangechange', {
				bubbles: true,
				detail: { min, max }
			}));
		}
	}

	paintFill() {
		if (!this.fill) return;

		const min = Number(this.rMin.value);
		const max = Number(this.rMax.value);

		const left = ((min - this.min) / (this.max - this.min)) * 100;
		const right = 100 - ((max - this.min) / (this.max - this.min)) * 100;

		this.fill.style.left = left + '%';
		this.fill.style.right = right + '%';
	}
}

// INIT
document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('[data-range]').forEach(block => {
		const group = block.querySelector('.range-group');
		if (!group) return;

		group._dualRange = new DualRange(group);
	});
});
