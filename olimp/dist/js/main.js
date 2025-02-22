// data-accordeon
document.addEventListener('DOMContentLoaded', function(){
	let ACCORDEON_ACTIVE_CLASS = 'active';

	Array.prototype.forEach.call(document.querySelectorAll("[data-accordeon]"), function(accordeon){
		let button = accordeon.querySelector('.accordeon-title');
		if (!button) return;

		button.addEventListener("click", function (e) {
			e.preventDefault();
			if (!accordeon.classList.contains(ACCORDEON_ACTIVE_CLASS)) {
				accordeon.classList.add(ACCORDEON_ACTIVE_CLASS);
			} else {
				accordeon.classList.remove(ACCORDEON_ACTIVE_CLASS);
			};
		});
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

	const mainNavigationContainer = document.getElementById('mainNavigation');

	document.body.addEventListener(`click`, function(e){
		if (e.target.closest('[data-toggle-element="#mainNavigation"]')) return;
		if (e.target.closest('#mainNavigation')) return;
		if (e.target.closest('#menuResult')) return;
		if (mainNavigationContainer.classList.contains('active')) {
			document.querySelector('[data-toggle-element="#mainNavigation"]').classList.remove('active');
			mainNavigationContainer.classList.remove('active');
		}
	}, {passive: true});

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
			}, {passive: true});

			button.addEventListener('click', function(e){
				if (window.innerWidth >= 1200) return;
				e.preventDefault();
				e.stopPropagation();
				e.stopImmediatePropagation();
				let targetIndex = button.dataset.tabHover;
				hideAll(tabs);
				show(tabs, targetIndex);
			});


			button.addEventListener('touchstart', function(e){
				if (window.innerWidth >= 1200) return;
				e.preventDefault();
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
	if (document.querySelector('.glider') && window.Glider) {
		new Glider(document.querySelector('.glider'), {
			draggable: true,
			arrows: {
				prev: '.glider-prev',
				next: '.glider-next'
			},
			responsive: [
				{
					// screens greater than >= 0px
					breakpoint: 0,
					settings: {
						// Set to `auto` and provide item width to adjust to viewport
						slidesToShow: 1.3,
						slidesToScroll: 1.3,
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
	}
})

if (document.querySelector('.glider')) {
	document.querySelector('.glider').addEventListener('glider-slide-visible', function(event){
		var glider = Glider(this);

		let countCover = glider.ele.parentElement.querySelector('.slider-navigation .slider-counter');
		if (!countCover) return;

		let totalSlides = glider.slides.length;
		let currentSlides = event.detail.slide+1;

		countCover.querySelector('.current').innerHTML = currentSlides;
		countCover.querySelector('.total').innerHTML = totalSlides;


		let fadeWidth = glider.opt.slidesToScroll*10;

		glider.ele.parentElement.querySelector('.slider-navigation .fade').style.width = fadeWidth + '%';

		let leftPosition = (100 - (totalSlides - currentSlides)/totalSlides*100) - fadeWidth;
		if (leftPosition < 0) {
			leftPosition = 0
		}

		glider.ele.parentElement.querySelector('.slider-navigation .fade').style.left = leftPosition + '%';
	});
};