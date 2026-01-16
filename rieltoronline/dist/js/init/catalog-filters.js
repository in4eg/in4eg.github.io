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
			const el = e.target;
			if (
				el.matches('input[type="radio"], input[type="checkbox"], input[type="date"], select')
			) {
				this.rebuild();
			}
		});

		this.qsa('[data-range]').forEach(block => {
			block.addEventListener('dualrangechange', () => this.rebuild());
		});

		if (this.clearBtn) {
			this.clearBtn.addEventListener('click', e => {
				e.preventDefault();
				location.href = location.origin + location.pathname;
			});
		}
	}


	rebuild() {
		this.tagList.innerHTML = '';

		// radios + checkboxes
		this.qsa('input[type="radio"]:checked, input[type="checkbox"]:checked')
			.forEach(inp => {
				const label = this.root.querySelector(`label[for="${inp.id}"]`);
				if (label) this.addTag(inp.id, this.txt(label));
			});

		// dates
		const s = this.root.querySelector('[name="startDatetime"]')?.value;
		const e = this.root.querySelector('[name="endDatetime"]')?.value;
		if (s || e) {
			this.addTag('date', `Дата: ${s || '…'} – ${e || '…'}`);
		}

		// ranges
		this.qsa('[data-range]').forEach(block => {
			const group = block.querySelector('.range-group');
			const dr = group?._dualRange;
			if (!dr) return;

			if (dr.rMin.value == dr.min && dr.rMax.value == dr.max) return;

			const label = this.txt(block.querySelector('.label'));
			this.addTag(label, `${label}: ${dr.rMin.value} – ${dr.rMax.value}`);
		});

		this.updateCounter();
	}

	addTag(key, text) {
		const t = document.createElement('div');
		t.className = 'tag';
		t.dataset.tag = '';
		t.dataset.key = key;
		t.textContent = text;
		this.tagList.appendChild(t);
	}

	updateCounter() {
		const c = this.tagList.children.length;
		this.qsa('.counter').forEach(el => el.textContent = c);
		this.tagCover.classList.toggle('hidden', c === 0);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.filters-cover').forEach(el => new FiltersUI(el));
});
