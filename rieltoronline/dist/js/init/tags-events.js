document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.filters-cover').forEach(cover => {
		const tagList = cover.querySelector('.tag-list');
		if (!tagList) return;

		tagList.addEventListener('click', e => {
			const tag = e.target.closest('.tag');
			if (!tag) return;

			const name = tag.dataset.key;
			const value = tag.dataset.value;

			// radio / checkbox
			cover.querySelectorAll(`[name="${CSS.escape(name)}"]`).forEach(inp => {
				if (inp.type === 'radio') {
					inp.checked = false;
					inp.dispatchEvent(new Event('change', { bubbles: true }));
				}
				if (inp.type === 'checkbox' && inp.value === value) {
					inp.checked = false;
					inp.dispatchEvent(new Event('change', { bubbles: true }));
				}
			});

			// range
			cover.querySelectorAll('[data-range]').forEach(block => {
				const group = block.querySelector('.range-group');
				const dr = group?._dualRange;
				const inputMin = group?.querySelector('.input-min');
				if (dr && inputMin?.name === name) {
					dr.reset();
				}
			});

			// date
			if (name === 'filter[date]') {
				cover.querySelector('[name="filter[startDatetime]"]')?.dispatchEvent(
					new Event('change', { bubbles: true })
				);
				cover.querySelector('[name="filter[endDatetime]"]')?.dispatchEvent(
					new Event('change', { bubbles: true })
				);
				cover.querySelector('[name="filter[startDatetime]"]').value = '';
				cover.querySelector('[name="filter[endDatetime]"]').value = '';
			}

			// city → clear districts
			if (name === 'filter[city]') {
				cover.querySelectorAll('[name="filter[district][]"]').forEach(cb => {
					cb.checked = false;
					cb.dispatchEvent(new Event('change', { bubbles: true }));
				});
				cover.querySelectorAll('.tag[data-key="filter[district][]"]').forEach(t => t.remove());
				cover.querySelector('#district')
					?.closest('.filter-group')
					?.classList.add('disabled');
			}

			tag.remove();
			cover._filtersUI?.rebuild?.();
		});
	});
});
