// DualRange

class DualRange {
	constructor(root, opts = {}) {
		this.root = root;
		this.range = root.querySelector('.range');
		this.rMin = root.querySelector('.range-min');
		this.rMax = root.querySelector('.range-max');
		this.iMin = root.querySelector('.input-min');
		this.iMax = root.querySelector('.input-max');
		this.fill = root.querySelector('.range-fill');

		if (!this.range || !this.rMin || !this.rMax) {
			throw new Error('DualRange: .range, .range-min, .range-max are required inside .range-group');
		}

		const ds = this.range.dataset;
		this.min  = Number(opts.min  ?? ds.min  ?? 0);
		this.max  = Number(opts.max  ?? ds.max  ?? 100);
		this.step = Number(opts.step ?? ds.step ?? 1);
		this.minGap = Number(opts.minGap ?? 0);

		// початкові значення: opts → data-value-min/max → краї
		const v0 = Array.isArray(opts.values) ? opts.values[0]
			: (opts.valueMin ?? (ds.valueMin !== undefined ? Number(ds.valueMin) : this.min));
		const v1 = Array.isArray(opts.values) ? opts.values[1]
			: (opts.valueMax ?? (ds.valueMax !== undefined ? Number(ds.valueMax) : this.max));

		this.ticksCount = Number(ds.ticks ?? opts.ticks ?? 5);

		// ініціалізація атрибутів інпутів
		[this.rMin, this.rMax, this.iMin, this.iMax].forEach(el => {
			if (!el) return;
			el.min = this.min;
			el.max = this.max;
			el.step = this.step;
		});

		this._setValues(this._snap(v0), this._snap(v1), false);
		this._bind();
		this._buildTicks();
	}

	_bind() {
		// range -> number
		this.rMin.addEventListener('input', () => {
			const a = this._snap(+this.rMin.value);
			const b = Math.max(a + this.minGap, +this.rMax.value);
			this._setValues(a, this._snap(b), true);
		});
		this.rMax.addEventListener('input', () => {
			const b = this._snap(+this.rMax.value);
			const a = Math.min(b - this.minGap, +this.rMin.value);
			this._setValues(this._snap(a), b, true);
		});

		// number -> range
		if (this.iMin) {
			this.iMin.addEventListener('input', () => {
				const a = this._snap(+this.iMin.value);
				const b = Math.max(a + this.minGap, +this.rMax.value);
				this._setValues(this._clamp(a), this._clamp(this._snap(b)), true);
			});
		}
		if (this.iMax) {
			this.iMax.addEventListener('input', () => {
				const b = this._snap(+this.iMax.value);
				const a = Math.min(b - this.minGap, +this.rMin.value);
				this._setValues(this._clamp(this._snap(a)), this._clamp(b), true);
			});
		}

		// reset форми → повернутись до крайніх значень
		const form = this.root.closest('form');
		if (form) {
			form.addEventListener('reset', () => {
				requestAnimationFrame(() => this._setValues(this.min, this.max, true));
			});
		}
	}

	get values() { return [Number(this.rMin.value), Number(this.rMax.value)]; }
	set values([a, b]) { this._setValues(this._snap(a), this._snap(b), true); }

	_snap(v) { const s = this.step || 1; return Math.round((v - this.min) / s) * s + this.min; }
	_clamp(v) { return Math.min(this.max, Math.max(this.min, v)); }

	_setValues(a, b, emit = false) {
		a = this._clamp(a);
		b = this._clamp(b);
		if (b - a < this.minGap) {
			if (a + this.minGap <= this.max) b = a + this.minGap;
			else a = b - this.minGap;
		}
		if (a > b) [a, b] = [b, a];

		this.rMin.value = a;
		this.rMax.value = b;
		if (this.iMin) this.iMin.value = a;
		if (this.iMax) this.iMax.value = b;

		this._paintFill();

		if (emit) {
			this.root.dispatchEvent(new CustomEvent('dualrangechange', {
				bubbles: true,
				detail: { min: a, max: b }
			}));
		}
	}

	_paintFill() {
		if (!this.fill) return;
		const a = (this.rMin.value - this.min) / (this.max - this.min) * 100;
		const b = (this.rMax.value - this.min) / (this.max - this.min) * 100;
		this.fill.style.left = a + '%';
		this.fill.style.right = (100 - b) + '%';
	}

	_buildTicks() {
		const prev = this.range.querySelector('.range-ticks');
		if (prev) prev.remove();

		const n = Number.isFinite(this.ticksCount) && this.ticksCount >= 2 ? this.ticksCount : 5;
		const wrap = document.createElement('div');
		wrap.className = 'range-ticks';

		const fmt = new Intl.NumberFormat('uk-UA');

		for (let i = 0; i < n; i++) {
			const ratio = i / (n - 1);
			const raw = this.min + ratio * (this.max - this.min);
			const val = this._snap(raw);
			const tick = document.createElement('div');
			tick.className = 'range-tick';
			tick.style.left = (ratio * 100) + '%';
			tick.textContent = fmt.format(val);
			wrap.appendChild(tick);
		}
		this.range.appendChild(wrap);
	}

	updateTicks() { this._buildTicks(); }
}

const fmtUA = new Intl.NumberFormat('uk-UA');
const headerText = (min, max, suffix = ' грн') => `${fmtUA.format(min)} — ${fmtUA.format(max)}${suffix}`;

document.querySelectorAll('[data-range]').forEach((dd) => {
	const parentFG = dd.closest('.form-group');

	const rangeGroup = dd.querySelector('.range-group');
	if (!rangeGroup) return;

	const dr = new DualRange(rangeGroup, {});
	const header = dd.querySelector('.range-header');

	const initialHeaderText = header ? header.textContent : '';

	const updateHeader = () => {
		if (!header) return;
		const [vMin, vMax] = dr.values;
		header.textContent = headerText(vMin, vMax, ' грн');
	};

	rangeGroup.addEventListener('dualrangechange', updateHeader);

	dd.addEventListener('click', () => {
		if (parentFG) parentFG.classList.add('focused');
		updateHeader();
	}, { passive: true });

	const form = dd.closest('form');
	if (form) {
		form.addEventListener('reset', () => {
			requestAnimationFrame(() => {
				if (parentFG) parentFG.classList.remove('focused');
				if (header) header.textContent = initialHeaderText;
			});
		});
	}
});
