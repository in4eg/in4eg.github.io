class FiltersUI {
	constructor(root) {
		this.root = root;
		this.tagCover = root.querySelector('.tag-cover');
		this.tagList = root.querySelector('.tag-list');
		this.clearBtn = root.querySelector('.button-link');

		this.bind();
		this.rebuild();
	}

	qsa = s => [...this.root.querySelectorAll(s)];
	txt = el => el?.textContent.trim() || '';

	bind() {
		this.root.addEventListener('change', e => {
			if (
				e.target.matches(
					'input[type="radio"], input[type="checkbox"], input[type="date"], select'
				)
			) {
				this.rebuild();
			}
		});

		this.qsa('[data-range]').forEach(block => {
			block.addEventListener('dualrangechange', () => this.rebuild());
		});

		this.clearBtn?.addEventListener('click', e => {
			e.preventDefault();
			location.href = location.origin + location.pathname;
		});
	}

	rebuild() {
		this.tagList.innerHTML = '';

		// radio + checkbox
		this.qsa('input[type="radio"]:checked, input[type="checkbox"]:checked')
			.forEach(inp => {
				const label = this.root.querySelector(`label[for="${inp.id}"]`);
				if (label) {
					this.addTag(inp.name, this.txt(label), inp.value);
				}
			});

		// date
		const s = this.root.querySelector('[name="filter[startDatetime]"]')?.value;
		const e = this.root.querySelector('[name="filter[endDatetime]"]')?.value;
		if (s || e) {
			this.addTag('filter[date]', `Дата: ${s || '…'} – ${e || '…'}`);
		}

		// ranges
		this.qsa('[data-range]').forEach(block => {
			const group = block.querySelector('.range-group');
			const dr = group?._dualRange;
			if (!dr) return;

			if (Number(dr.rMin.value) === dr.min &&
				Number(dr.rMax.value) === dr.max) return;

			const label = this.txt(block.querySelector('.label'));
			const key = group.querySelector('.input-min')?.name;
			if (!key) return;

			this.addTag(
				key,
				`${label}: ${dr.rMin.value} – ${dr.rMax.value}`
			);
		});

		this.updateCounter();
	}

	addTag(key, text, value = null) {
		const tag = document.createElement('div');
		tag.className = 'tag';
		tag.dataset.key = key;
		if (value !== null) tag.dataset.value = value;
		tag.textContent = text;
		this.tagList.appendChild(tag);
	}

	updateCounter() {
		const c = this.tagList.children.length;
		this.qsa('.counter').forEach(el => el.textContent = c);
		this.tagCover?.classList.toggle('hidden', c === 0);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.filters-cover').forEach(el => {
		el._filtersUI = new FiltersUI(el);
	});
});
