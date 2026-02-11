class TagFilter {
	filterAttribute = 'data-tag-link'; 
	filteredItemAttribute = 'data-tag';

	constructor(filterGroup) {
		const targetId = filterGroup.dataset.filterItems;
		this.tagsParent = document.getElementById(targetId);
		if (!this.tagsParent) return;

		this.filterButtons = Array.from(filterGroup.querySelectorAll(`[${this.filterAttribute}]`));
		this.filterButtons.forEach((btn) => {
			btn.addEventListener('click', () => this.applyFilter(btn));
		});
	}

	applyFilter(clickedButton) {
		const filterValue = clickedButton.getAttribute(this.filterAttribute);
		const items = this.tagsParent.querySelectorAll('.tag-item-cover');

		items.forEach((item) => {
			const itemTag = item.getAttribute(this.filteredItemAttribute);

			if (filterValue === 'all' || itemTag === filterValue) {
				item.style.display = '';
				item.classList.add('visible');
			} else {
				item.style.display = 'none';
				item.classList.remove('visible');
			}
		});

		this.toggleButtonClass(clickedButton);
	}

	toggleButtonClass(activeButton) {
		this.filterButtons.forEach((btn) => btn.classList.remove('active'));
		activeButton.classList.add('active');
	}
}

document.querySelectorAll("[data-filter-items]").forEach(group => {
	new TagFilter(group);
});