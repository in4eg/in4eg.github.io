//form animations + search filter
document.addEventListener('DOMContentLoaded', function(){

	let caseSearchInput = document.getElementById('caseInput');
	let caseSearchInputValue = '';

	function clearFilterCases(selector){
		let allCases = document.querySelectorAll(selector);
		for (let i = 0; i < allCases.length; i++) {
			allCases[i].innerHTML = allCases[i].innerHTML.replace(/(<mark>|<\/mark>)/gim, '');
			allCases[i].parentNode.classList.remove('hidden');
		}
	}

	function highlightText(selector, searchText){
		if (!selector || !selector.innerHTML) return;
		const regex = new RegExp(searchText, 'gi');

		let text = selector.innerHTML;
				text = text.replace(/(<mark>|<\/mark>)/gim, '');

		const newtext = text.replace(regex, '<mark>$&</mark>');
		selector.innerHTML = newtext;
	}

	function filterCases(selector, searchText){
		if (!selector || !searchText) return;
		let allCases = document.querySelectorAll(selector);

		for (let i = 0; i < allCases.length; i++) {
			let description = allCases[i].querySelector('.caption').querySelector('.description');
			let subtitle = allCases[i].querySelector('.caption').querySelector('.subtitle');
			let title = allCases[i].querySelector('.caption').querySelector('.article-title');

			highlightText(title, searchText);
			highlightText(description, searchText);
			highlightText(subtitle, searchText);

			if (!description.innerHTML.match(searchText) && !subtitle.innerHTML.match(searchText) && !title.innerHTML.match(searchText)) {
				allCases[i].parentNode.classList.add('hidden');
			} else {
				allCases[i].parentNode.classList.remove('hidden');
			};
		};

		let allListItems = document.querySelector(selector).closest('ul').querySelectorAll('li');
		let hiddenListItems = document.querySelector(selector).closest('ul').querySelectorAll('.hidden');

		if (hiddenListItems.length >= allListItems.length) {
			document.getElementById('searchEmptyMessage').classList.remove('hidden');
			document.getElementById('casePagination').classList.add('hidden');
		} else {
			document.getElementById('searchEmptyMessage').classList.add('hidden');
			document.getElementById('casePagination').classList.remove('hidden');
		}
	};

	function onCaseSearchKeyDown(event) {

		const waitForFinalEvent = (function(){
			var timers = {};
			return function (callback, ms, uniqueId) {
				if (!uniqueId) {
					uniqueId = "Don't call this twice without a uniqueId";
				}
				if (timers[uniqueId]) {
					clearTimeout (timers[uniqueId]);
				}
				timers[uniqueId] = setTimeout(callback, ms);
			};
		})();

		let input = this;
		waitForFinalEvent(function(){
			if (input.value && input.value.length) {
				input.parentElement.classList.add('focused');
				if (caseSearchInput.dataset.filter) {
					filterCases(caseSearchInput.dataset.filter, input.value.toLowerCase());
				};
			} else {
				input.parentElement.classList.remove('focused');
				if (caseSearchInput.dataset.filter) {
					clearFilterCases(caseSearchInput.dataset.filter);
				};
			}
			caseSearchInputValue = input.value;
		}, 100)

		if (event.keyCode == 13 && window.searchCaseCallback) {
			window.searchCaseCallback();

			if (caseSearchInput.dataset.filter && caseSearchInputValue.length) {
				filterCases(caseSearchInput.dataset.filter, caseSearchInputValue);
			};
		};
	}


	caseSearchInput.addEventListener('keydown', onCaseSearchKeyDown, {passive: true});
})