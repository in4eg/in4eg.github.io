class FiltersUI {
	constructor(root = document.querySelector('.filters-cover'), storageKey = 'filtersState.v1') {
		if (!root) {
			console.warn('FiltersUI: .filters-cover не знайдено');
			return;
		}
		this.root = root;
		this.storageKey = storageKey;

		// refs
		this.tagCover = this.root.querySelector('.tag-cover');
		this.tagList = this.root.querySelector('.tag-list');
		this.clearAllBtn = this.root.querySelector('.tag-cover .button-link');
		this.counterEl = this.root.querySelector('.counter');

		this.tagCover?.classList.add('hidden');
		this.updateCounter(0);

		// підписки
		this.bindInputs();
		this.tagList?.addEventListener('click', this.onTagClick);
		this.clearAllBtn?.addEventListener('click', this.onClearAll);
		this.bindSearchBlocks();

		// стан
		this.loadState();
		this.rebuildAllTags();
		this.updateDistrictAvailability();
	}

	/* ===== utils ===== */
	qs = (sel, ctx = this.root) => (ctx || this.root).querySelector(sel);
	qsa = (sel, ctx = this.root) => Array.from((ctx || this.root).querySelectorAll(sel));
	txt = (el) => (el ? el.textContent.trim() : '');
	updateCounter = (n) => { if (this.counterEl) this.counterEl.textContent = n; };
	refreshTagCover = () => {
		const count = this.tagList?.querySelectorAll('[data-tag]').length || 0;
		this.root.querySelectorAll('[data-toggle] .counter').forEach(span => { span.textContent = count; });
		if (this.tagCover) this.tagCover.classList.toggle('hidden', count === 0);
	};
	numOrNull = (v) => (v === undefined || v === null || v === '' ? null : Number(v));

	/* ===== search filter ===== */
	bindSearchBlocks = () => {
		this.qsa('[data-filter]').forEach(block => {
			const input = block.querySelector('input[type="text"], .input');
			if (!input) return;
			input.addEventListener('input', this.onSearchInput, { passive: true });
			block._itemsSel = (block.dataset.filter || '.filtered-list .item').trim();
			if (!block._itemsSel.endsWith('.item')) block._itemsSel += ' .item';
			block._fieldsSel = (block.dataset.filterFields || 'label').trim();
		});
	};
	onSearchInput = (e) => {
		const block = e.target.closest('[data-filter]');
		if (!block) return;
		const q = (e.target.value || '').trim().toLowerCase();

		const items = this.qsa(block._itemsSel, block);
		items.forEach(item => {
			this.qsa(block._fieldsSel, item).forEach(field => this.stripMarks(field));
			if (!q) { item.classList.remove('hidden'); return; }
			const match = this.qsa(block._fieldsSel, item).some(field => {
				const t = this.txt(field);
				if (!t) return false;
				if (t.toLowerCase().includes(q)) { this.highlight(field, q); return true; }
				return false;
			});
			item.classList.toggle('hidden', !match);
		});
	};
	clearFilterBlock = (container) => {
		const input = container.querySelector('input[type="text"], .input');
		if (input) { input.value = ''; input.parentElement?.classList.remove('focused'); }
		const itemsSel = container._itemsSel || (container.dataset.filter || '.filtered-list .item') + (container.dataset.filter?.endsWith('.item') ? '' : ' .item');
		const fieldsSel = container._fieldsSel || (container.dataset.filterFields || 'label');
		this.qsa(itemsSel, container).forEach(item => {
			this.qsa(fieldsSel, item).forEach(field => this.stripMarks(field));
			item.classList.remove('hidden');
		});
	};
	highlight = (field, query) => {
		const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		const re = new RegExp(esc(query), 'gi');
		const html = field.innerHTML.replace(/<\/?mark>/g, '');
		field.innerHTML = html.replace(re, m => `<mark>${m}</mark>`);
	};
	stripMarks = (field) => {
		this.qsa('mark', field).forEach(mark => mark.replaceWith(document.createTextNode(mark.textContent)));
	};

	// ---- city → district dependency
	updateDistrictAvailability() {
		const anyCityChecked = !!this.root.querySelector('input[type="radio"][name="cityFilter"]:checked');
		const districtGroup = this.root.querySelector('#district')?.closest('.labeled-group.filter-group.form-group');
		if (!districtGroup) return;
		districtGroup.classList.toggle('disabled', !anyCityChecked);
		this.qsa('input, select, textarea, button', districtGroup).forEach(el => {
			if (el.type === 'checkbox' || el.type === 'radio') el.disabled = !anyCityChecked;
		});
	}

	/* ===== inputs ===== */
	bindInputs = () => {
		this.qsa('input[type="checkbox"], input[type="radio"]').forEach(inp => {
			inp.addEventListener('change', this.onInputChange);
		});
		this.qsa('[data-calendar] input[type="date"]').forEach(inp => {
			inp.addEventListener('change', this.onInputChange);
		});
		this.qsa('[data-range]').forEach(wrap => {
			this.initRange(wrap); // ВАЖЛИВО: не виставляємо значення, якщо data-value-* порожні
			this.updateRangeFill(wrap);
			this.updateRangeHeader(wrap);
			this.qsa('.input-min, .input-max, .range-min, .range-max', wrap).forEach(el => {
				el.addEventListener('input', this.onInputChange);
			});
		});
	};
	// ініціалізація range без насильного підстановлення
	initRange = (wrap) => {
		const r = this.qs('.range', wrap);
		if (!r) return;

		const hasMin = r.dataset.valueMin !== undefined && r.dataset.valueMin !== '';
		const hasMax = r.dataset.valueMax !== undefined && r.dataset.valueMax !== '';

		const inMin = this.qs('.input-min', wrap);
		const inMax = this.qs('.input-max', wrap);
		const rMin  = this.qs('.range-min', r);
		const rMax  = this.qs('.range-max', r);

		// якщо обидва порожні — залишаємо все порожнім
		if (!hasMin && !hasMax) {
			if (inMin) inMin.value = '';
			if (inMax) inMax.value = '';
			// range-елементам НЕ задаємо value (щоб не провокувати відображення "обрано")
			return;
		}
		// якщо хоч одне заповнене — синхронізуємо лише заповнені
		if (hasMin) {
			const v = Number(r.dataset.valueMin);
			if (inMin) inMin.value = String(v);
			if (rMin) rMin.value = v;
		}
		if (hasMax) {
			const v = Number(r.dataset.valueMax);
			if (inMax) inMax.value = String(v);
			if (rMax) rMax.value = v;
		}
	};

	onInputChange = (e) => {
		const el = e.currentTarget;

		if (el.closest('[data-range]')) {
			const wrap = el.closest('[data-range]');
			this.updateRangeFill(wrap);
			this.updateRangeHeader(wrap);
		}
		if (el.closest('[data-calendar]')) {
			this.updateCalendarHeader(el.closest('[data-calendar]'));
		}

		this.afterSelect(el);

		const filterBlock = el.closest('[data-filter]');
		if (filterBlock) this.clearFilterBlock(filterBlock);

		if (el.matches('input[type="radio"][name="cityFilter"]')) {
			this.updateDistrictAvailability();
		}
		this.saveState();
	};

	/* ===== tags ===== */
	upsertTag = (key, labelText) => {
		if (!key || !this.tagList) return;
		let tag = this.tagList.querySelector(`[data-tag][data-key="${CSS.escape(key)}"]`);
		if (!tag) {
			tag = document.createElement('div');
			tag.className = 'tag';
			tag.setAttribute('data-tag', '');
			tag.dataset.key = key;
			this.tagList.appendChild(tag);
		}
		tag.textContent = labelText;
		this.refreshTagCover();
	};
	removeTag = (key) => {
		const tag = this.tagList?.querySelector(`[data-tag][data-key="${CSS.escape(key)}"]`);
		tag?.remove();
		this.refreshTagCover();
	};
	tagKeyFor = (el) => {
		if (el.matches('input[type="checkbox"], input[type="radio"]')) return el.id || '';
		const rg = el.closest('[data-range]');
		if (rg) {
			if (!rg.dataset.tagKey) rg.dataset.tagKey = 'range-' + this.qsa('[data-range]').indexOf(rg);
			return rg.dataset.tagKey;
		}
		const cg = el.closest('[data-calendar]');
		if (cg) {
			if (!cg.dataset.tagKey) cg.dataset.tagKey = 'calendar-' + this.qsa('[data-calendar]').indexOf(cg);
			return cg.dataset.tagKey;
		}
		return '';
	};
	tagTextFor = (el) => {
		if (el.matches('input[type="checkbox"], input[type="radio"]')) {
			const lab = this.root.querySelector(`label[for="${CSS.escape(el.id)}"]`);
			return this.txt(lab);
		}
		const rg = el.closest('[data-range]');
		if (rg) return this.updateRangeHeader(rg);
		const cg = el.closest('[data-calendar]');
		if (cg) return this.updateCalendarHeader(cg);
		return '';
	};
	afterSelect = (el) => {
		const key = this.tagKeyFor(el);
		const txt = this.tagTextFor(el);

		if (el.matches('input[type="checkbox"]')) {
			el.checked ? this.upsertTag(key, txt) : this.removeTag(key);
			return;
		}
		if (el.matches('input[type="radio"]')) {
			const name = el.name;
			this.qsa(`input[type="radio"][name="${CSS.escape(name)}"]`).forEach(r => this.removeTag(r.id));
			if (el.checked) this.upsertTag(key, txt);
			return;
		}
		// date / range
		if (txt && txt !== 'Не вибрано') this.upsertTag(key, txt);
		else this.removeTag(key);
	};
	onTagClick = (e) => {
		const tag = e.target.closest('[data-tag]');
		if (!tag) return;
		const key = tag.dataset.key;
		const byId = key && this.root.querySelector(`#${CSS.escape(key)}`);
		if (byId) {
			if (byId.type === 'checkbox' || byId.type === 'radio') byId.checked = false;
		} else if (key?.startsWith('range-')) {
			const idx = Number(key.split('-')[1] || 0);
			const wrap = this.qsa('[data-range]')[idx];
			if (wrap) this.resetRange(wrap);
		} else if (key?.startsWith('calendar-')) {
			const idx = Number(key.split('-')[1] || 0);
			const wrap = this.qsa('[data-calendar]')[idx];
			if (wrap) this.resetCalendar(wrap);
		}
		tag.remove();
		this.refreshTagCover();
		this.saveState();

		if (byId && byId.name === 'cityFilter') {
			this.updateDistrictAvailability();
		}
	};
	onClearAll = (e) => {
		e.preventDefault();
		this.qsa('[data-tag]', this.tagList).forEach(t => t.remove());
		this.refreshTagCover();

		this.qsa('input[type="checkbox"], input[type="radio"]').forEach(i => i.checked = false);
		this.qsa('[data-calendar]').forEach(w => this.resetCalendar(w));
		this.qsa('[data-range]').forEach(w => this.resetRange(w));
		this.qsa('.range-header').forEach(h => h.textContent = 'Не вибрано');
		this.qsa('[data-filter]').forEach(b => this.clearFilterBlock(b));

		localStorage.removeItem(this.storageKey);
		this.updateDistrictAvailability();
	};

	/* ===== range/calendar helpers ===== */
	updateRangeHeader = (wrap) => {
		const hdr = this.qs('.range-header', wrap);
		const minI = this.qs('.input-min', wrap);
		const maxI = this.qs('.input-max', wrap);
		let t = 'Не вибрано';
		if (minI?.value !== '' && maxI?.value !== '') t = `Від ${minI.value} до ${maxI.value}`;
		if (hdr) hdr.textContent = t;
		return t;
	};
	updateRangeFill = (wrap) => {
		const r = this.qs('.range', wrap);
		if (!r) return;

		const min = Number(r.dataset.min ?? 0);
		const max = Number(r.dataset.max ?? 100);

		const rMinEl = this.qs('.range-min', r);
		const rMaxEl = this.qs('.range-max', r);

		let curMin = this.numOrNull(rMinEl?.value);
		let curMax = this.numOrNull(rMaxEl?.value);

		if (curMin == null) curMin = this.numOrNull(r.dataset.valueMin);
		if (curMax == null) curMax = this.numOrNull(r.dataset.valueMax);

		const leftVal  = curMin == null ? min : curMin;
		const rightVal = curMax == null ? max : curMax;

		const fill = this.qs('.range-fill', r);
		if (fill) {
			const l  = ((Math.min(leftVal, rightVal) - min) * 100) / (max - min);
			const rw = ((Math.max(leftVal, rightVal) - min) * 100) / (max - min);
			fill.style.left  = l + '%';
			fill.style.width = (rw - l) + '%';
		}
	};
	resetRange = (wrap) => {
		const r = this.qs('.range', wrap);
		if (!r) return;

		const vMin = (r.dataset.valueMin !== '' && r.dataset.valueMin != null) ? Number(r.dataset.valueMin) : null;
		const vMax = (r.dataset.valueMax !== '' && r.dataset.valueMax != null) ? Number(r.dataset.valueMax) : null;

		const inMin = this.qs('.input-min', wrap);
		const inMax = this.qs('.input-max', wrap);
		const rMin  = this.qs('.range-min', r);
		const rMax  = this.qs('.range-max', r);

		// якщо null — залишаємо порожнім
		if (inMin) inMin.value = vMin != null ? String(vMin) : '';
		if (inMax) inMax.value = vMax != null ? String(vMax) : '';
		if (rMin && vMin != null) rMin.value = vMin;
		if (rMax && vMax != null) rMax.value = vMax;

		this.updateRangeFill(wrap);
		this.updateRangeHeader(wrap);
	};
	updateCalendarHeader = (wrap) => {
		const hdr = this.qs('.range-header', wrap);
		const sInp = this.qs('input[type="date"][data-start]', wrap);
		const eInp = this.qs('input[type="date"][data-end]', wrap);
		const s = sInp?.value || '';
		const e = eInp?.value || '';
		let t = 'Не вибрано';
		if (s && e) t = `${s} — ${e}`;
		else if (s) t = `З ${s}`;
		else if (e) t = `До ${e}`;
		if (hdr) hdr.textContent = t;
		return t;
	};
	resetCalendar = (wrap) => {
		const s = this.qs('input[type="date"][data-start]', wrap);
		const e = this.qs('input[type="date"][data-end]', wrap);
		if (s) s.value = '';
		if (e) e.value = '';
		this.updateCalendarHeader(wrap);
	};

	/* ===== persistence ===== */
	saveState = () => {
		const state = {
			checkboxes: this.qsa('input[type="checkbox"]').filter(i => i.checked).map(i => i.id),
			radios: Object.fromEntries(this.qsa('input[type="radio"]:checked').map(i => [i.name, i.id])),
			dates: this.qsa('[data-calendar]').map(cal => {
				const s = this.qs('input[type="date"][data-start]', cal)?.value || '';
				const e = this.qs('input[type="date"][data-end]', cal)?.value || '';
				return { start: s, end: e };
			}),
			ranges: this.qsa('[data-range]').map(rw => ({
				min: this.qs('.input-min', rw)?.value ?? '',
				max: this.qs('.input-max', rw)?.value ?? ''
			}))
		};
		localStorage.setItem(this.storageKey, JSON.stringify(state));
	};
	loadState = () => {
		const raw = localStorage.getItem(this.storageKey);
		if (!raw) return;
		let state; try { state = JSON.parse(raw); } catch { return; }

		this.qsa('input[type="checkbox"]').forEach(i => { i.checked = (state.checkboxes || []).includes(i.id); });

		if (state.radios) {
			Object.entries(state.radios).forEach(([name, id]) => {
				const r = this.root.querySelector(`input[type="radio"][name="${CSS.escape(name)}"][id="${CSS.escape(id)}"]`);
				if (r) r.checked = true;
			});
		}
		this.qsa('[data-calendar]').forEach((cal, idx) => {
			const rec = state.dates?.[idx];
			if (!rec) return;
			const s = this.qs('input[type="date"][data-start]', cal);
			const e = this.qs('input[type="date"][data-end]', cal);
			if (s) s.value = rec.start || '';
			if (e) e.value = rec.end || '';
			this.updateCalendarHeader(cal);
		});
		this.qsa('[data-range]').forEach((rw, idx) => {
			const rec = state.ranges?.[idx];
			if (!rec) return;
			const inMin = this.qs('.input-min', rw);
			const inMax = this.qs('.input-max', rw);
			const rMin = this.qs('.range-min', rw);
			const rMax = this.qs('.range-max', rw);
			if (inMin) inMin.value = rec.min ?? '';
			if (inMax) inMax.value = rec.max ?? '';
			if (rMin && rec.min !== '') rMin.value = rec.min;
			if (rMax && rec.max !== '') rMax.value = rec.max;
			this.updateRangeFill(rw);
			this.updateRangeHeader(rw);
		});
	};
	rebuildAllTags = () => {
		this.qsa('[data-tag]', this.tagList).forEach(t => t.remove());
		this.qsa('input[type="checkbox"]:checked').forEach(inp => {
			const lab = this.root.querySelector(`label[for="${CSS.escape(inp.id)}"]`);
			this.upsertTag(inp.id, this.txt(lab));
		});
		this.qsa('input[type="radio"]:checked').forEach(inp => {
			const lab = this.root.querySelector(`label[for="${CSS.escape(inp.id)}"]`);
			this.upsertTag(inp.id, this.txt(lab));
		});
		this.qsa('[data-calendar]').forEach((cal, idx) => {
			const t = this.updateCalendarHeader(cal);
			if (t && t !== 'Не вибрано') this.upsertTag('calendar-' + idx, t);
		});
		this.qsa('[data-range]').forEach((rw, idx) => {
			const t = this.updateRangeHeader(rw);
			if (t && t !== 'Не вибрано') this.upsertTag('range-' + idx, t);
		});
		this.refreshTagCover();
	};
}

// init
document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.filters-cover').forEach(node => new FiltersUI(node));
});
