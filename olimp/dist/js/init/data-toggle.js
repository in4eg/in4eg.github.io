// toggle class event
document.addEventListener('DOMContentLoaded', function(){
	Array.prototype.forEach.call(document.querySelectorAll("[data-toggle-element]"), function(button){
		let defaultClass = 'active'
		let toggleClass = button.dataset.toggleClass ? button.dataset.toggleClass : defaultClass;
		let elementLink = button.dataset.toggleElement;

		button.addEventListener("click", function (e) {

			Array.prototype.forEach.call(document.querySelectorAll(elementLink), function(element){

				if (!element.classList.contains(toggleClass)) {
					element.classList.add(toggleClass);
					button.classList.add(defaultClass);
					if (element.classList.contains('main-header') && element.querySelector('.search-input')) {
						element.querySelector('.search-input').focus();
					}
				} else {
					element.classList.remove(toggleClass);
					button.classList.remove(defaultClass);
				};
			});
		});
	});

	// search position
	let setSearchPotion = function(){
		let toggleButton = document.getElementById('searchToggle');
		let searchForm = document.getElementById('searchForm');
		let formCover = document.getElementById('headerContainer');

		if (!toggleButton) return;
		let toggleRect = searchToggle.getBoundingClientRect();
		let coverRect = formCover.getBoundingClientRect();

		let elLeft = toggleRect.x - 6;
		let elTop = toggleRect.y - 6;
		let elRight = coverRect.right - coverRect.width;

		searchForm.style.left = elLeft+'px';
		searchForm.style.top = elTop+'px';
		searchForm.style.right = elRight+'px';
	}

	setSearchPotion();

	window.addEventListener('resize', function(event){
		setSearchPotion();
	});
});