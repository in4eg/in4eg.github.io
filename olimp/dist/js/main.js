// data-accordeon
document.addEventListener('DOMContentLoaded', function(){
	let ACCORDEON_ACTIVE_CLASS = 'active';

	let allAccordeons = document.querySelectorAll("[data-accordeon]");
	let allAccordeonsButtons = document.querySelectorAll(".accordeon-title");

	let closeAllAccordeons = function(){
		for (i = 0; i < allAccordeons.length; i++) {
			let accordeonInner = allAccordeons[i].querySelector('.accordeon-inner');
			allAccordeons[i].classList.remove(ACCORDEON_ACTIVE_CLASS);
		}
	}

	let accordeonToggle = function() {
		if (this.parentElement.classList.contains(ACCORDEON_ACTIVE_CLASS)) {
			closeAllAccordeons();
		} else {
			closeAllAccordeons();
			this.parentElement.classList.add(ACCORDEON_ACTIVE_CLASS);
		};
	}

	document.body.addEventListener('click', function(e){
		let accordeonButton = e.target.closest(".accordeon-title");
		if (accordeonButton){
			accordeonToggle.call(accordeonButton);
		};
	});

});
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

// show video modal
document.addEventListener('DOMContentLoaded', function(){
	let videoTriggerElemens = document.querySelectorAll("[data-video-src]");

	let videoModalToggle = function(){
		let videoSrc = this.src;
		let videoPopup = document.getElementById('videoPopup');

		function showModal(){
			videoPopup.classList.add('showed')

			setTimeout(function(){
				videoPopup.classList.add('active');
			}, 25)
		}

		let promise = new Promise(function(resolve, reject) {
			videoPopup.querySelector('iframe').src = videoSrc;
		});
		promise.then(showModal())
	}

	for (i = 0; i < videoTriggerElemens.length; i++) {
		let videoSrc = videoTriggerElemens[i].dataset.videoSrc;
		if (videoSrc) {
			videoTriggerElemens[i].addEventListener('click', videoModalToggle.bind({src: videoSrc}), true);
		};
	};
})
//dropdown
document.addEventListener('DOMContentLoaded', function(){
	let DROPDOWN_ACTIVE_CLASS = 'opened';
	let allDropdowns = document.querySelectorAll("[data-dropdown]");
	let allDropdownButtons = document.querySelectorAll("[data-dropdown] .dropdown-header");

	let closeAllDropdowns = function(){
		for (i = 0; i < allDropdowns.length; i++) {
			let dropdownInner = allDropdowns[i].querySelector('.dropdown-inner');
			allDropdowns[i].classList.remove(DROPDOWN_ACTIVE_CLASS);
			dropdownInner.style.maxHeight = null;
		}
	}

	let dropdownToggle = function() {
		let button = this;
		let dropdownInner = button.parentElement.querySelector('.dropdown-inner');
		if (button.parentElement.classList.contains(DROPDOWN_ACTIVE_CLASS)) {
			closeAllDropdowns();
		} else {
			closeAllDropdowns();
			button.parentElement.classList.add(DROPDOWN_ACTIVE_CLASS);
		};
	}

	for (i = 0; i < allDropdownButtons.length; i++) {
		allDropdownButtons[i].addEventListener('click', dropdownToggle, false);
	};

	document.addEventListener("click", function (e) {
		if (!e.target.closest('[data-dropdown]')) {
			closeAllDropdowns();
		};
	});
});
// header scroll
document.addEventListener('DOMContentLoaded', function(){
	const CHECK_POINT = 10;
	const DARK_HEADER_CLASS = 'dark';
	const LIGTH_HEADER_CLASS = 'light';

	let addHeaderShadow = function(point){
		if (window.pageYOffset && window.pageYOffset >= CHECK_POINT) {
			document.getElementById('mainHeader').classList.add('scrolled');
		} else {
			document.getElementById('mainHeader').classList.remove('scrolled');
		}
	};

	let addHeaderColor = function(){
		let pageHeader = document.getElementById('mainHeader');
		let sections = pageHeader.dataset.scrollCheck;
		let sectionData = {};
		if (sections && sections.length) {
			Array.prototype.forEach.call(document.querySelectorAll(sections), function(section, i){
				let sectionStart = section.offsetTop;
				let sectionEnd = sectionStart + section.getBoundingClientRect().height;
				let pageOffset = window.pageYOffset + pageHeader.getBoundingClientRect().height/2;
				if (pageOffset >= sectionStart && pageOffset  <= sectionEnd) {
					sectionData[i] = true;
				} else {
					sectionData[i] = false;
				}
			});
		}
		if (Object.values(sectionData).every(el => el == false)) {
			pageHeader.classList.add(DARK_HEADER_CLASS)
			pageHeader.classList.remove(LIGTH_HEADER_CLASS)
		} else {
			pageHeader.classList.remove(DARK_HEADER_CLASS)
			pageHeader.classList.add(LIGTH_HEADER_CLASS)
		}
	};

	addHeaderShadow(CHECK_POINT);
	addHeaderColor();

	document.addEventListener("scroll", (event) => {
		addHeaderShadow(CHECK_POINT);
		addHeaderColor();
	});

	window.addEventListener('resize', function(event){
		addHeaderColor();
	});
});

async function initMap() {
	let mapElement = document.getElementById('map');
	let mapLocation = mapElement.getAttribute('data-position').split(',');
	let position = { lat: parseFloat(mapLocation[0].trim()), lng: parseFloat(mapLocation[1].trim()) };
	let mapZoom = parseInt(mapElement.getAttribute('data-zoom')) || 10;
	let markerTitle = mapElement.getAttribute('data-title');

	// Request needed libraries.
	const { Map } = await google.maps.importLibrary("maps");
	const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
	const map = new Map(document.getElementById("map"), {
		center: position,
		zoom: mapZoom,
		styles: [{"stylers": [{"saturation": "0"}]}, {"stylers": [{"color": "#6e3a35"},{"saturation": "0"}]}, {"stylers": [{"color": "#5a524f"},{"saturation": "0"}]}, {"stylers": [{"visibility": "off"}] }, {"stylers": [{"color": "#6e3a35"},{"saturation": "0"},{"visibility": "on"}]}, {"stylers": [{"color": "#efebea"},{"saturation": "0"}]},{"stylers": [{"color": "#af9d94"},{"saturation": "0"},{"visibility": "off"}]},{"stylers": [{"color": "#5a524f"},{"saturation": "0"}]},{"stylers": [{"visibility": "off"}]},{"stylers": [{"saturation": "0"}]},{"stylers": [{"hue": "#ff0000"},{"saturation": "34"},{"visibility": "off"}]},{"stylers": [{"color": "#5a524f"},{"saturation": "0"}]},{"stylers": [{"visibility": "off"}]},{"stylers": [{"visibility": "off"}]},{"stylers": [{"visibility": "off"}]},{"stylers": [{"color": "#5a524f"}]},{"stylers": [{"visibility": "off"}]},{"stylers": [{"visibility": "off"},{"lightness": "60"},{"gamma": "1.00"},{"hue": "#ff0000"},{"saturation": "-90"}]},{"stylers": [{"color": "#ffffff"},{"saturation": "0"}]},{"stylers": [{"visibility": "simplified"},{"hue": "#ff0000"},{"weight": "0.01"}]},{"stylers": [{"color": "#bfb1a9"},{"saturation": "0"}]},{"stylers": [{"color": "#bfb1a9"},{"saturation": "0"}]},{"stylers": [{"color": "#5a524f"},{"saturation": "0"}]},{"stylers": [{"visibility": "off"}]},{"stylers": [{"visibility": "on"},{"hue": "#ff0000"},{"saturation": "-90"},{"lightness": "0"},{"gamma": "1.00"},{"weight": "1"}]},{"stylers": [{"color": "#d2cac7"},{"saturation": "0"}]},{"stylers": [{"saturation": "0"}]},{"stylers": [{"color": "#5a524f"},{"saturation": "0"}]},{"stylers": [{"visibility": "off"}]},{"stylers": [{"visibility": "off"}]}],
		zoomControl: false,
		scaleControl: false,
		scrollwheel: false,
		disableDefaultUI: true,
		mapId: mapId,
		mapTypeControl: false,
		keyboardShortcuts: window.innerWidth <= 768 ? false : true,
		gestureHandling: window.innerWidth <= 768 ? 'cooperative' : 'auto'
	});
	const marker = new AdvancedMarkerElement({
		map,
		position: position,
		title: markerTitle
	});
}

window.initMap = initMap;
// menu hover navigation
document.addEventListener("DOMContentLoaded", function() {
	const ACTIVE_HEADER_CLASS = 'menu-active';

	const ACTIVE_TAB_CLASS = 'active';
	const ACTIVE_MENU_CLASS = 'active';

	const TOUCH_ACTIVE_TAB_CLASS = 'touch-active';
	const TOUCH_ACTIVE_MENU_CLASS = 'touch-active';
	const TOUCH_SELECTED_MENU_CLASS = 'touch-offset';

	const headerContainer = document.getElementById('mainHeader');
	const mainNavigationContainer = document.getElementById('mainNavigation');

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

		if (escapeContainer && window.innerWidth >= 1200) {
			escapeContainer.addEventListener('mouseleave', function(){
				tabsContainer.classList.remove(ACTIVE_MENU_CLASS);
				headerContainer.classList.remove(ACTIVE_HEADER_CLASS);
			}, {passive: true});
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
				if (window.innerWidth < 1200) return;
				e.preventDefault();
				let targetIndex = button.dataset.tabHover;
				hideAll(tabs);
				show(tabs, targetIndex);
			});

			button.addEventListener('click', function(e){
				if (window.innerWidth >= 1200) return;
				hideAll(tabs);
				if (button.dataset.tabHover) {
					e.preventDefault();
					e.stopPropagation();
					e.stopImmediatePropagation();
					let targetIndex = button.dataset.tabHover;
					show(tabs, targetIndex);
				}
			});


			button.addEventListener('touchstart', function(e){
				if (window.innerWidth >= 1200 || !button.dataset.tabHover) return;
				e.stopPropagation();
				e.stopImmediatePropagation();
				let targetIndex = button.dataset.tabHover;
				hideAll(tabs);
				show(tabs, targetIndex);
				navigation.classList.add(TOUCH_ACTIVE_MENU_CLASS);
				tabsContainer.classList.add(TOUCH_ACTIVE_MENU_CLASS);
			}, {passive: true});
		};

		let removeActiveClasses = function(){
			tabsContainer.classList.remove(ACTIVE_MENU_CLASS);
			headerContainer.classList.remove(ACTIVE_HEADER_CLASS);
			navigation.classList.remove(TOUCH_ACTIVE_MENU_CLASS);
			tabsContainer.classList.remove(TOUCH_ACTIVE_MENU_CLASS);
		}

		let backButtons = selectAll(`.back-button`);
		for (let i = 0; i < backButtons.length; i++) {
			let backButton = backButtons[i];
			backButton.addEventListener('touchstart', function(e){
				if (window.innerWidth >= 1200) return;
				e.preventDefault();
				e.stopPropagation();
				e.stopImmediatePropagation();
				removeActiveClasses();
			}, {passive: true});

			backButton.addEventListener('click', function(e){
				if (window.innerWidth >= 1200) return;
				removeActiveClasses();
			}, {passive: true});
		}

		document.body.addEventListener(`click`, function(e){
			if (e.target.closest('[data-toggle-element="#mainNavigation"]')) return;
			if (e.target.closest('#mainNavigation')) return;
			if (e.target.closest('#menuResult')) return;

			if (tabsContainer.classList.contains(ACTIVE_MENU_CLASS)) {
				removeActiveClasses();
			}
		}, {passive: true});
	}

});


// popup
document.addEventListener('DOMContentLoaded', function(){

	hidePopup = function(popup) {
		let called = popup;
		let popupVideo = called.querySelector('iframe');

		document.body.classList.remove('overlayed');
		document.body.style.width = '';
		document.getElementById('mainHeader').style.width = '';

		called.classList.remove('active');
		if(popupVideo){ popupVideo.src = ''; }
		// on close call back
		setTimeout(function() {
			called.classList.remove('showed');
			if (called.dataset.onclose && window[called.dataset.onclose]) {
				return window[called.dataset.onclose](called);
			}
		}, 300);
	};

	showPopup = function(popupId) {
		if (!popupId) return;
		let called = document.querySelector(popupId);
				called.classList.add('showed');

		document.body.style.width = window.getComputedStyle(document.body).width;
		document.getElementById('mainHeader').style.width = window.getComputedStyle(document.getElementById('mainHeader')).width;
		document.body.classList.add('overlayed');

		setTimeout(function() {
			called.classList.add('active');
			if (called.dataset.onopen && window[called.dataset.onopen]) {
				return window[called.dataset.onopen](called);
			}
			// if(called.querySelector('.form')) {
			// 	window.initValidation(called.querySelector('.form'));
			// }
		}, 300);
	};

	Array.prototype.forEach.call(document.querySelectorAll(".close-popup"), function(button){
		button.addEventListener("click", function (e) {
			e.preventDefault();
			hidePopup(button.closest(".popup"));
		});
	});

	Array.prototype.forEach.call(document.querySelectorAll(".popup"), function(popup){
		popup.addEventListener("click", function (e) {
			e.preventDefault();
			if (!e.target.closest('.inner')) {
				hidePopup(popup);
			};
		});
	});

	Array.prototype.forEach.call(document.querySelectorAll("[data-popup-call]"), function(button){
		button.addEventListener("click", function (e) {
			showPopup(button.dataset.popupCall)
		});
	});

});


//form animations + search filter
document.addEventListener('DOMContentLoaded', function(){

	let filterSearchInput = document.querySelector('[data-filter]');
	let filterSearchInputValue = '';
	let filterFields = filterSearchInput && filterSearchInput.dataset ? filterSearchInput.dataset.filterFields : '';

	function clearFilter(selector){
		let allFilteredItems = document.querySelectorAll(selector);
		for (let i = 0; i < allFilteredItems.length; i++) {
			allFilteredItems[i].innerHTML = allFilteredItems[i].innerHTML.replace(/(<mark>|<\/mark>)/gim, '');
			allFilteredItems[i].parentNode.classList.remove('hidden');
			setCounter(allFilteredItems[i], 0);
		};
		alertMessageToggle(false);
	};

	function alertMessageToggle(open){
		let alertMessage = document.getElementById('searchEmptyMessage');
		let pagination = document.getElementById('filterPagination');

		if (open) {
			if (alertMessage) alertMessage.classList.remove('hidden');
			if (pagination) pagination.classList.add('hidden');
		} else {
			if (alertMessage) alertMessage.classList.add('hidden');
			if (pagination) pagination.classList.remove('hidden');
		};
	};

	function highlightText(selector, searchText){
		if (!selector || !selector.innerHTML) return;
		const regex = new RegExp(searchText, 'gi');

		let text = selector.innerHTML;
				text = text.replace(/(<mark>|<\/mark>)/gim, '');

		const newtext = text.replace(regex, '<mark>$&</mark>');

		selector.innerHTML = newtext;
	}

	function setCounter(parent, number){
		if (parent.querySelector('.search-tooltip') && parent.querySelector('.search-tooltip').querySelector('.count')) {
			parent.querySelector('.search-tooltip').querySelector('.count').innerHTML = number;
		}

		if (!number) {
			parent.classList.remove('success');
		} else {
			parent.classList.add('success');
		}
	}

	function checkFilters(item) {
		if (!item.querySelector('mark')) {
			item.parentNode.classList.add('hidden');
		} else {
			item.parentNode.classList.remove('hidden');
			setCounter(item, item.querySelectorAll('mark').length)
		};

		let allListItems = item.closest('ul').querySelectorAll('li');
		let hiddenListItems = item.closest('ul').querySelectorAll('.hidden');

		if (hiddenListItems.length >= allListItems.length) {
			alertMessageToggle(true);
		} else {
			alertMessageToggle(false);
		}
	};

	function applyFilter(selector, searchText){
		if (!selector) return;
		let allFilteredItems = document.querySelectorAll(selector);
		let fieldsArray = filterFields.split(',');

		for (let i = 0; i < allFilteredItems.length; i++) {
			for (let n = 0; n < fieldsArray.length; n++) {
				let fieldElements = allFilteredItems[i].querySelector(fieldsArray[n]);
				highlightText(fieldElements, searchText);
			};
			checkFilters(allFilteredItems[i]);
		};
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
				if (filterSearchInput.dataset.filter) {
					applyFilter(filterSearchInput.dataset.filter, input.value.toLowerCase());
				};
			} else {
				input.parentElement.classList.remove('focused');
				if (filterSearchInput.dataset.filter) {
					clearFilter(filterSearchInput.dataset.filter);
				};
			}
			filterSearchInputValue = input.value;
		}, 100)

		if (event.keyCode == 13 && window.searchCaseCallback) {
			window.searchCaseCallback();

			if (filterSearchInput.dataset.filter && filterSearchInputValue.length) {
				applyFilter(filterSearchInput.dataset.filter, filterSearchInputValue);
			};
		};
	}

	if (filterSearchInput) {
		filterSearchInput.addEventListener('keydown', onCaseSearchKeyDown, {passive: true});
	}
})
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

	inputSearch.addEventListener('keydown', onSearchKeyDown, {passive: true});
});


// section scroll animation
document.addEventListener('DOMContentLoaded', function(){
	let ANIMATED_CLASS = 'animated'

	let setDetectSectionAnimation = function(section){
		if (window.pageYOffset + window.innerHeight / 1.3 > section.offsetTop) {
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
	}, {passive: true});

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
window.addEventListener('load', function(){
	window.gliderInstances = {};

	if (document.querySelectorAll('.glider').length && window.Glider) {
		Array.prototype.forEach.call(document.querySelectorAll('.glider'), function(slider){
			gliderInstances[slider.id] = new Glider(slider, {
				draggable: true,
				arrows: {
					prev: slider.parentElement.querySelector('.glider-prev'),
					next: slider.parentElement.querySelector('.glider-next')
				},
				responsive: [
					{
						// screens greater than >= 0px
						breakpoint: 0,
						settings: {
							// Set to `auto` and provide item width to adjust to viewport
							slidesToShow: 1.2,
							slidesToScroll: 1.2,
							duration: 0.25
						}
					}, {
						// screens greater than >= 640px
						breakpoint: 640,
						settings: {
							// Set to `auto` and provide item width to adjust to viewport
							slidesToShow: 2,
							slidesToScroll: 2,
							duration: 0.25
						}
					}, {
						// screens greater than >= 768px
						breakpoint: 768,
						settings: {
							// Set to `auto` and provide item width to adjust to viewport
							slidesToShow: 2,
							slidesToScroll: 2,
							duration: 0.25
						}
					},{
						// screens greater than >= 775px
						breakpoint: 993,
						settings: {
							// Set to `auto` and provide item width to adjust to viewport
							slidesToShow: 3,
							slidesToScroll: 3,
							duration: 0.25
						}
					},{
						// screens greater than >= 1200px
						breakpoint: 1200,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4,
							duration: 0.25
						}
					}
				]
			})
		})
	}

	if (window.gliderInstances) {
		for (let key in window.gliderInstances) {
			let glider = window.gliderInstances[key];

			let totalSlides = glider.slides.length;
			let slidesToScroll = glider.opt.slidesToScroll;
			let currentSlides = slidesToScroll;

			function setSlideCount(){
				let countCover = glider.ele.parentElement.querySelector('.slider-navigation .slider-counter');
				if (!countCover) return;

				countCover.querySelector('.current').innerHTML = Math.floor(currentSlides);
				countCover.querySelector('.total').innerHTML = totalSlides;
			};

			function checkNavigation(){
				if (!glider || !totalSlides) return;
				let gliderParent = glider.ele.parentElement;
				if (totalSlides <= glider.opt.slidesToShow) {
					gliderParent.classList.add('hide-arrow');
				} else {
					gliderParent.classList.remove('hide-arrow');
				}
			};

			function setFaderPosition(){
				let fader = glider.ele.parentElement.querySelector('.slider-navigation .fade');
				let fadeWidth = Math.floor(100/Math.ceil(totalSlides/slidesToScroll));
				let leftPosition = Math.floor(currentSlides/totalSlides*100 - fadeWidth);

				if (leftPosition < fadeWidth) {
					leftPosition = 0;
				};

				fader.style.width = fadeWidth + '%';
				fader.style.left = leftPosition + '%';
			};

			function onGliderScrollEnd(scrollElement){
				let itemWidth = glider.itemWidth;
				let leftScrollPosition = scrollElement.scrollLeft;
				currentSlides = Math.floor(leftScrollPosition/itemWidth + slidesToScroll);
				setSlideCount();
				setFaderPosition();
			}

			setSlideCount();
			checkNavigation();
			setFaderPosition();

			// glider.arrows.prev.addEventListener(`click`, function(e){
			// 	if ((totalSlides - slidesToScroll) < slidesToScroll) {
			// 		currentSlides = Math.floor(totalSlides - (totalSlides - slidesToScroll));
			// 	} else {
			// 		currentSlides -= Math.floor(slidesToScroll);
			// 	};
			// 	setSlideCount();
			// 	setFaderPosition();
			// }, {passive: true});

			// glider.arrows.next.addEventListener(`click`, function(e){
			// 	currentSlides += slidesToScroll;
			// 	if (currentSlides >= totalSlides) {
			// 		currentSlides = totalSlides;
			// 	}
			// 	setSlideCount();
			// 	setFaderPosition();
			// }, {passive: true});


			glider.ele.addEventListener('scroll', function(event){
				onGliderScrollEnd(event.srcElement);
			})


			window.addEventListener('resize', function(event){
				setSlideCount();
				checkNavigation();
				setFaderPosition();
			})
		}
	}
})

// sticky block
document.addEventListener('DOMContentLoaded', function(){
	let stickyBlocks = document.querySelectorAll("[data-sticky]");
	let cloneIsAppended = false;

	Math.clamp = function(value, min, max){
		return value < min ? min : value > max ? max : value;
	}

	function setStickPosition(){
		for (i = 0; i < stickyBlocks.length; i++) {
			let headerHeight = document.getElementById('mainHeader').getBoundingClientRect().height;
			let block = stickyBlocks[i];
			let blockParent = block.closest('.sticky-inner');

			if (window.innerWidth <= 1199) {
				block.style.top = 'auto';
				block.classList.remove('to-top');
				block.classList.remove('to-bottom');
				return;
			}

			let stickInside = block.closest(block.dataset.sticky);
			let stickInsideHeight = stickInside.getBoundingClientRect().height;

			blockParent.style.height = blockParent.getBoundingClientRect().height + 'px';

			let startPosition = stickInside.offsetTop - headerHeight;
			let endPositon = startPosition + stickInsideHeight - block.getBoundingClientRect().height;

			if (window.pageYOffset < startPosition) {
				// console.log('top')
				block.style.top = 'auto';
				block.classList.remove('to-top');
				block.classList.remove('to-bottom');
			} else if (window.pageYOffset >= startPosition && window.pageYOffset <= endPositon) {
				// console.log('middle')
				block.classList.add('to-top');
				block.style.top = headerHeight + 'px';
				block.style.left = blockParent.getBoundingClientRect().left + 'px';
				block.classList.remove('to-bottom');
			} else if (window.pageYOffset > endPositon) {
				// console.log('bottom')
				block.style.left = blockParent.offsetLeft + 'px';
				block.classList.remove('to-top');
				block.classList.add('to-bottom');
			};
		};
	};

	setStickPosition();

	window.addEventListener('scroll', function(event){
		setStickPosition();
	});

	window.addEventListener('resize', function(event){
		setStickPosition();
	});
});




/*tabs */
document.addEventListener('DOMContentLoaded', function(){
	const TAB_ACTIVE_CLASS = 'active';
	const TAB_CONTENT_ACTIVE_CLASS = 'active';

	let setFaderSize = function(button){
		if (!button || !button.parentElement) return;
		let fader = button.parentElement.querySelector('.tab-fader');
		fader.style.width = button.offsetWidth + 'px';
		fader.style.top = button.offsetTop + 'px';
		fader.style.left = button.offsetLeft + 'px';
		fader.style.height = button.offsetHeight + 'px';
	}

	let setActiveTab = function(containerId, index){
		if (!containerId) return;
		let allTabContent = document.querySelector(containerId).querySelectorAll('.tab-content');
		let gliderInsideTab = allTabContent[index].querySelector('.glider');

		for (i = 0; i < allTabContent.length; i++) {
			allTabContent[i].classList.remove(TAB_CONTENT_ACTIVE_CLASS);
			allTabContent[index].classList.add(TAB_CONTENT_ACTIVE_CLASS);
		};

		if (gliderInsideTab && gliderInsideTab.id) {
			if (window.gliderInstances[gliderInsideTab.id]) {
				window.gliderInstances[gliderInsideTab.id].resize();
			}
		}
	}

	let toggleTabs = function(){
		let button = this.button;
		let buttonIndex = this.index;
		let allTabButtons = button.parentElement.querySelectorAll('.tab-button');

		for (i = 0; i < allTabButtons.length; i++) {
			allTabButtons[i].classList.remove(TAB_ACTIVE_CLASS);
		};

		button.classList.add(TAB_ACTIVE_CLASS);

		setFaderSize(button);
		setActiveTab(button.parentElement.dataset.tabsContainer, buttonIndex);
	}

	Array.prototype.forEach.call(document.querySelectorAll("[data-tabs-container]"), function(nav){
		let buttons = nav.querySelectorAll('.tab-button');
		for (i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', toggleTabs.bind({button: buttons[i], index: i}), false);
		};
	});

	setFaderSize(document.querySelector(".tab-button.active"));

	window.addEventListener('resize', function(event){
		setFaderSize(document.querySelector(".tab-button.active"));
	});
});
// validation
window.addEventListener("DOMContentLoaded", function() {

	class ValidationForm {

		constructor(form) {
			this.input_success_class = 'success';
			this.input_error_class = 'error';
			this.input_focus_class = 'focused';
			this.form = form;

			this.setFocusedClass = function(inputParent, hasValue){
				if (hasValue) {
					inputParent.classList.add(this.input_focus_class);
				} else {
					inputParent.classList.remove(this.input_focus_class);
				}
			};

			this.onInputKeyDown = function(){
				if (!this.event || !this.form) return;
				let event = this.event;
				let form = this.form;
				let input = event.srcElement.activeElement;
				let inputType = input.classList.contains('phone') ? 'phone' : input.classList.contains('email') ? 'email' : '';

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

				waitForFinalEvent(function(){
					form.setFocusedClass(input.parentElement, input.value.length);

					switch (inputType) {
						case 'phone':
							form.setPhoneMask(event, input);
							break;
						case 'email':
							form.validateEmail(event, input);
							break;
						default:
							// for textarea and inputs text
							form.validateByTextLength(input);
					}
				}, 5);
			};

			this.onFormSubmit = function(data){
				let event = data.event;
				let form = data.form;
				let formNode = data.element;

				let formInputs = formNode.querySelectorAll('.input');
				let formTextareas = formNode.querySelectorAll('.textarea');
				let formSelects = formNode.querySelectorAll('.select');

				if (formInputs && formInputs.length) {
					for (let i = 0; i < formInputs.length; i++) {
						let input = formInputs[i];
						form.validateByTextLength(input);
					};
				};

				if (formTextareas && formTextareas.length) {
					for (let t = 0; t < formTextareas.length; t++) {
						let textArea = formTextareas[t];
						form.validateByTextLength(textArea);
					};
				};

				if (formSelects && formSelects.length) {
					for (let s = 0; s < formSelects.length; s++) {
						let formSelect = formSelects[s];
						form.validateBySelectOptions(formSelect);
					};
				};

				// callback
				if (window.onContactFormSubmit) {
					window.onContactFormSubmit(this);
				};
			};
		}

		isValidEmail(email){
			let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		};

		setValidationClass(element, validationSuccess){
			if (validationSuccess) {
				element.classList.add(this.input_success_class);
				element.classList.remove(this.input_error_class);
			} else {
				element.classList.add(this.input_error_class);
				element.classList.remove(this.input_success_class);
			}
		};

		setPhoneMask(event, input){
			let keyCode = event.keyCode;
			let pos = input.selectionStart;
			if (pos < 3) event.preventDefault();
			let matrix = input.getAttribute('placeholder') ? input.getAttribute('placeholder') : '+380 (___) ___ __ _',
					i = 0,
					def = matrix.replace(/\D/g, ""),
					val = input.value.replace(/\D/g, ""),
					new_value = matrix.replace(/[_\d]/g, function(a) {
							return i < val.length ? val.charAt(i++) || def.charAt(i) : a
					});
			i = new_value.indexOf("_");
			if (i != -1) {
				i < 5 && (i = 3);
				new_value = new_value.slice(0, i);
			}
			let reg = matrix.substr(0, input.value.length).replace(/_+/g,
					function(a) {
							return "\\d{1," + a.length + "}"
					}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(input.value) || input.value.trim().length < 5 || keyCode > 47 && keyCode < 58) {
				input.value = new_value;
			}
			if (event.type == "blur" && input.value.trim().length < 5) {
				input.value = "";
			}
			this.setValidationClass(input.parentElement, input.value.length == matrix.length);
		};

		validateEmail(event, input){
			this.setValidationClass(input.parentElement, this.isValidEmail(input.value.trim()));
		};

		validateByTextLength(field){
			let minlength = parseInt(field.dataset.minlength) || 2;
			this.setValidationClass(field.parentElement,field.value.length >= minlength);
		};

		validateBySelectOptions(select){
			let defaultOption = select.querySelector('[disabled]');
			this.setValidationClass(select.parentElement,select.value !== defaultOption.innerHTML);
		};

		onSelectChange(){
			let event = this;
			let select = event.srcElement.activeElement;
			validateBySelectOptions(select);
		};

		init() {
			let formInputs = this.form.querySelectorAll('.input');
			let formTextareas = this.form.querySelectorAll('.textarea');
			let formSelects = this.form.querySelectorAll('.select');

			if (formInputs && formInputs.length) {
				for (let i = 0; i < formInputs.length; i++) {
					let input = formInputs[i];
					this.setFocusedClass(input.parentElement, input.value.length);
					input.addEventListener('keydown', this.onInputKeyDown.bind({event: event, form: this}), {passive: true});
				};
			};

			if (formTextareas && formTextareas.length) {
				for (let t = 0; t < formTextareas.length; t++) {
					let textArea = formTextareas[t];
					this.setFocusedClass(textArea.parentElement, textArea.value.length);
					textArea.addEventListener('keydown', this.onInputKeyDown.bind({event: event, form: this}), {passive: true});
				};
			};

			if (formSelects && formSelects.length) {
				for (let s = 0; s < formSelects.length; s++) {
					let formSelect = formSelects[s];
					this.setFocusedClass(formSelect.parentElement, formSelect.value.length);
					formSelect.addEventListener('keydown', this.onInputKeyDown.bind({event: event, form: this}), {passive: true});
				};
			};

			let form = this;

			this.form.addEventListener('click', function(event){
				let submit = event.target.closest("[type='submit']");
				if (submit) {
					form.onFormSubmit({event: event, form: form, element: this});
				}
			}, {passive: true});

		};
	};

	let allValidateForms = document.querySelectorAll('.contact-form');

	for (i = 0; i < allValidateForms.length; i++) {
		const newForm = new ValidationForm(allValidateForms[i]);
		newForm.init();
	}

	window.initValidation = function(form) {
		const newForm = new ValidationForm(form);
		newForm.init();
	}
});
