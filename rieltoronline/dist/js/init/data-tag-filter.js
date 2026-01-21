// data-accordeon
document.addEventListener('DOMContentLoaded', function(){
	let allTabFilters = document.querySelectorAll("[data-tag-filter]");

	function alertAndNavigationToggle(open){
		let alertMessage = document.getElementById('searchEmptyMessage');
		let pagination = document.getElementById('filterPagination');
		let filterForm = document.getElementById('searchCaseForm');

		if (open) {
			if (filterForm) filterForm.classList.add('disabled');
			if (alertMessage) alertMessage.classList.remove('hidden');
			if (pagination) pagination.classList.add('hidden');
		} else {
			if (filterForm) filterForm.classList.remove('disabled');
			if (alertMessage) alertMessage.classList.add('hidden');
			if (pagination) pagination.classList.remove('hidden');
		};
	};

	let applyTagFilter = function(data){
		if (!data) return;

		let parentCover = document.querySelector(data.parent);
		let selectedTags = parentCover.querySelectorAll(data.tag);

		let alertMessage = document.getElementById('searchEmptyMessage');
		let pagination = document.getElementById('filterPagination');

		document.getElementById('searchCaseForm').classList.remove('disabled');

		[].forEach.call(parentCover.children, function(tag) {
			tag.classList.add('hidden-tag');
		});

		if (selectedTags.length) {
			[].forEach.call(selectedTags, function(tag) {
				tag.classList.remove('hidden-tag');
			});
			// we need to combine tag filter and form filter
			let allListItems = parentCover.querySelectorAll('li');
			let hiddenListItems = parentCover.querySelectorAll('.hidden');
			let hiddenByFilterListItems = parentCover.querySelectorAll('.hidden-tag');

			if (parentCover.querySelectorAll('li:not(.hidden):not(.hidden-tag)').length) {
				alertAndNavigationToggle(false);
			} else {
				if (hiddenByFilterListItems.length >= hiddenListItems.length || hiddenListItems.length >= hiddenByFilterListItems.length) {
					alertAndNavigationToggle(true);
				}
			}
		} else {
			alertAndNavigationToggle(true);
		}
		// callback
		window.onTagFilter(data);
	};

	function applyDropdownFilter(button, dropdown){
		let buttonText = button.innerHTML;
		let dropdownTitle = dropdown.querySelector('.dropdown-header').querySelector('.item');
		dropdownTitle.innerHTML = buttonText;
		dropdown.classList.remove('opened');
	};

	for (i = 0; i < allTabFilters.length; i++) {
		let allTabButtons = allTabFilters[i].querySelectorAll("[data-tag]");
		let tagParent = allTabFilters[i].dataset.tagFilter;
		for (n = 0; n < allTabButtons.length; n++) {
			let button = allTabButtons[n];
			button.addEventListener('click', function(e){
				let tag = button.dataset.tag;
				if (tag) {
					if (button.closest('[data-dropdown]')) {
						applyDropdownFilter(button, button.closest('[data-dropdown]'));
					}
					applyTagFilter({tag: tag, parent: tagParent});
				};
			}, true);
		}
	}
});
