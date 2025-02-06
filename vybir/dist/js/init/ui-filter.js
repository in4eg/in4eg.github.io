document.addEventListener("DOMContentLoaded", function() {
	let toggleButtons = document.querySelectorAll('[uk-filter-control]');
	for (let i = 0, element; element = toggleButtons[i]; i++) {
		toggleButtons[i].onclick = function(){
			for (let button of toggleButtons[i].parentNode.childNodes) {
				if (button.classList) {
					button.classList.remove('filter-active');
				}
			}
			toggleButtons[i].classList.add("filter-active");
		};
	};
});


