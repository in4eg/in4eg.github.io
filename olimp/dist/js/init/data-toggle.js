// toggle class event
document.addEventListener('DOMContentLoaded', function(){
	Array.prototype.forEach.call(document.querySelectorAll("[data-toggle-element]"), function(button){
		let defaultClass = 'active'
		const ANIMATED_CLASS = 'animated';
		let toggleClass = button.dataset.toggleClass ? button.dataset.toggleClass : defaultClass;
		let elementLink = button.dataset.toggleElement;

		button.addEventListener("click", function (e) {

			Array.prototype.forEach.call(document.querySelectorAll(elementLink), function(element){

				if (!element.classList.contains(toggleClass)) {
					element.classList.add(toggleClass);
					button.classList.add(defaultClass);
					setTimeout(function(){
						element.classList.add(ANIMATED_CLASS);
					}, 250)
					if (element.classList.contains('main-header') && element.querySelector('.search-input')) {
						element.querySelector('.search-input').focus();
					}
				} else {
					element.classList.remove(toggleClass);
					button.classList.remove(defaultClass);

					if (!element.classList.contains('main-header')) {
						element.classList.remove(ANIMATED_CLASS);
					}
				};
			});
		});
	});

	// search position
	let setSearchPotion = function(toggleButton){
		if (!toggleButton) return;
		let searchForm = document.getElementById('searchForm');
		let headerCover = document.getElementById('headerContainer');

		let buttonPadding = 7;

		if (!toggleButton) return;
		let toggleRect = toggleButton.getBoundingClientRect();

		let coverRect = headerCover.getBoundingClientRect();

		let elLeft = toggleRect.x - coverRect.left - buttonPadding;
		let elTop = toggleRect.y - buttonPadding;
		let elRight = 0;

		searchForm.style.left = elLeft+'px';
		searchForm.style.top = elTop+'px';
		searchForm.style.right = elRight+'px';
	}

	document.getElementById('searchToggle').addEventListener("click", function (e) {
		let toggleButton = this;
		setSearchPotion(toggleButton);
	})

});
