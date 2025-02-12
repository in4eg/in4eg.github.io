// smoth scroll
document.addEventListener('DOMContentLoaded', function(){
	Array.prototype.forEach.call(document.querySelectorAll("[data-scrollto]"), function(button){
		button.addEventListener("click", function (e) {
			e.preventDefault();
			let scrollTarget = button.dataset.scrollto;
			document.querySelector(scrollTarget).scrollIntoView({
				behavior: 'smooth' 
			});
		});
	});
});
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
// header scroll
document.addEventListener('DOMContentLoaded', function(){
	let getSectionHeight = function(){
		let sections = document.getElementById('mainHeader').dataset.scrollCheck;
		let height = 0;

		if (sections && sections.length) {
			Array.prototype.forEach.call(document.querySelectorAll(sections), function(section){
				height = section.clientHeight;
			});
		}

		return height;
	};

	let checkTopPoint = 10;

	let addHeaderShadow = function(point){
		if (window.pageYOffset && window.pageYOffset >= checkTopPoint) {
			document.getElementById('mainHeader').classList.add('scrolled');
		} else {
			document.getElementById('mainHeader').classList.remove('scrolled');
		}
	};

	let addHeaderColor = function(bannerHeight){
		if (!bannerHeight) return;
		if (window.pageYOffset && window.pageYOffset >= bannerHeight) {
			document.getElementById('mainHeader').classList.remove('light');
			document.getElementById('mainHeader').classList.add('dark');
		} else {
			document.getElementById('mainHeader').classList.add('light');
			document.getElementById('mainHeader').classList.remove('dark');
		}
	};

	addHeaderShadow(checkTopPoint);
	addHeaderColor(getSectionHeight());

	document.addEventListener("scroll", (event) => {
		addHeaderShadow(checkTopPoint);
		addHeaderColor(getSectionHeight());
	});

	window.addEventListener('resize', function(event){
		addHeaderColor(getSectionHeight());
	});
});

// menu hover navigation
document.addEventListener("DOMContentLoaded", function() {
	const ACTIVE_HEADER_CLASS = 'menu-active';

	const ACTIVE_TAB_CLASS = 'active';
	const ACTIVE_MENU_CLASS = 'active';

	const TOUCH_ACTIVE_TAB_CLASS = 'touch-active';
	const TOUCH_ACTIVE_MENU_CLASS = 'touch-active';
	const TOUCH_SELECTED_MENU_CLASS = 'touch-offset';

	const headerContainer = document.getElementById('mainHeader');

	let select = function(selector, parent){
		return (parent || document).querySelector(selector);
	};
	let selectAll = function(selector, parent){
		return [].slice.call((parent || document).querySelectorAll(selector));
	};
	let navigations = selectAll('[data-hover-show]');

	for (let i = 0; i < navigations.length; i++) {
		let navigation = navigations[i];
		let escapeContainer = select(navigation.dataset.escapeContainer);
		let buttons = selectAll('li', navigation);
		let targetId = navigation.dataset.hoverShow;

		let tabsContainer = select(targetId);

		if (escapeContainer) {
			escapeContainer.addEventListener('mouseleave', function(){
				tabsContainer.classList.remove(ACTIVE_MENU_CLASS);
				headerContainer.classList.remove(ACTIVE_HEADER_CLASS);
			});
		};

		let tabs = selectAll(`${targetId} .menu-tab`);

		let hideAll = function(collection){
			headerContainer.classList.remove(ACTIVE_HEADER_CLASS);
			collection.forEach(function(item){
				item.classList.remove(ACTIVE_TAB_CLASS);
			});
		};

		let show = function(collection, targetIndex) {
			for (let i = 0; i < collection.length; i++) {
				let tabItem = collection[i];
				let tabHoverIndex = tabItem.dataset.tabIndex;
				if (!targetIndex || !tabHoverIndex) return;
				if (targetIndex == tabHoverIndex) {
					headerContainer.classList.add(ACTIVE_HEADER_CLASS);
					tabsContainer.classList.add(ACTIVE_MENU_CLASS);
					tabItem.classList.add(ACTIVE_TAB_CLASS);
					break;
				}
			}
		};

		for (let i = 0; i < buttons.length; i++) {
			let button = buttons[i];
			button.addEventListener('mouseenter', function(e){
				e.preventDefault();
				let targetIndex = button.dataset.tabHover;
				hideAll(tabs);
				show(tabs, targetIndex);
			});
			button.addEventListener('touchstart', function(e){
				e.preventDefault();
				e.stopPropagation();
				e.stopImmediatePropagation();
				let targetIndex = button.dataset.tabHover;
				hideAll(tabs);
				show(tabs, targetIndex);
				navigation.classList.add(TOUCH_ACTIVE_MENU_CLASS);
				tabsContainer.classList.add(TOUCH_ACTIVE_MENU_CLASS);
				catalog.classList.add(TOUCH_SELECTED_MENU_CLASS);
			});
		};



	}

});

// search
document.addEventListener('DOMContentLoaded', function(){
	let inputSearch = document.getElementById('inputSearch');

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

	inputSearch.addEventListener('keydown', onSearchKeyDown);
});


// section scroll animation
document.addEventListener('DOMContentLoaded', function(){
	let ANIMATED_CLASS = 'animated'

	let setDetectSectionAnimation = function(section){
		if (window.pageYOffset + window.innerHeight / 1.7 > section.offsetTop) {
			if (!section.classList.contains(ANIMATED_CLASS)) {
				section.classList.add(ANIMATED_CLASS);
			};
		};
	};

	// on scroll
	document.addEventListener("scroll", (event) => {
		Array.prototype.forEach.call(document.querySelectorAll(".section"), function(section){
			setDetectSectionAnimation(section);
		});
	});

	// on load
	Array.prototype.forEach.call(document.querySelectorAll(".section"), function(section){
		setTimeout(function(){
			setDetectSectionAnimation(section);
		}, 10)
	});
	setTimeout(function(){
		document.getElementById('mainHeader').classList.add(ANIMATED_CLASS);
	}, 10)
});
