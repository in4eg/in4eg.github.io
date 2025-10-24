// search
document.addEventListener('DOMContentLoaded', function(){
	let inputSearch = document.getElementById('inputSearch');
	if (!inputSearch) return;

	function onSearchKeyDown(event) {
		let input = this;
		setTimeout(function(){
			if (input.value.length) {
				input.parentElement.classList.add('success');
			} else {
				input.parentElement.classList.remove('success');
			}
		}, 1)

		if (event.keyCode == 13 && window.searchFormSubmit) {
			window.searchFormSubmit();
		}
	}

	inputSearch.addEventListener('keydown', onSearchKeyDown, {passive: true});
});

