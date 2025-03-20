// toggle class event
document.addEventListener('DOMContentLoaded', function(){
	const headerContainer = document.getElementById('mainHeader');

	Array.prototype.forEach.call(document.querySelectorAll("[data-toggle-element]"), function(button){
		let defaultClass = 'active'
		const ANIMATED_CLASS = 'animated';
		let toggleClass = button.dataset.toggleClass ? button.dataset.toggleClass : defaultClass;
		let elementLink = button.dataset.toggleElement;

		button.addEventListener("click", function (e) {
			headerContainer.classList.remove('menu-active');

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
					if (element.classList.contains('header-navigation')) {
						document.body.style.width = window.getComputedStyle(document.body).width;
						document.body.classList.add('overlayed');
						document.getElementById('mainHeader').style.width = window.getComputedStyle(document.getElementById('mainHeader')).width;
					}
				} else {
					element.classList.remove(toggleClass);
					button.classList.remove(defaultClass);
					if (document.body.classList.contains('overlayed')){
						document.body.classList.remove('overlayed');
						document.getElementById('mainHeader').style.width = '';
						document.body.style.width = '';
					};
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
	});

	const mainNavigationContainer = document.getElementById('mainNavigation');

	function hideMobileNav(){
		if (mainNavigationContainer.classList.contains('active')) {
			document.querySelector('[data-toggle-element="#mainNavigation"]').classList.remove('active');
			mainNavigationContainer.classList.remove('active', 'animated');
			document.body.classList.remove('overlayed');
			document.body.style.width = '';
			document.getElementById('mainHeader').style.width = '';
		}
	}

	document.body.addEventListener(`click`, function(e){
		if (e.target.closest('[data-toggle-element="#mainNavigation"]')) return;
		if (e.target.closest('#mainNavigation')) return;
		if (e.target.closest('#menuResult')) return;
		if (e.target.closest('#searchResult')) return;
		hideMobileNav();
		if (headerContainer.classList.contains('form-search-active') && !e.target.closest('#mainHeader')) {
			headerContainer.classList.remove('form-search-active');
			document.body.classList.remove('overlayed');
			document.getElementById('mainHeader').style.width = '';
		}
	}, {passive: true});


	Array.prototype.forEach.call(document.querySelectorAll("[data-header-close]"), function(button){
		button.addEventListener("click", function (e) {
			hideMobileNav();
		});
	});
});
