document.addEventListener("DOMContentLoaded", function() {
	const ACTIVE_TAB_CLASS = 'active';
	const ACTIVE_MENU_CLASS = 'active';

	const TOUCH_ACTIVE_TAB_CLASS = 'touch-active';
	const TOUCH_ACTIVE_MENU_CLASS = 'touch-active';

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
			});
		}

		let tabs = selectAll(`${targetId} .tab-content`);

		let hideAll = function(collection){
			collection.forEach(function(item){
				item.classList.remove(ACTIVE_TAB_CLASS);
			});
		};

		let show = function(collection, index) {
			tabsContainer.classList.add(ACTIVE_MENU_CLASS);
			collection[index].classList.add(ACTIVE_TAB_CLASS);
		};

		for (let i = 0; i < buttons.length; i++) {
			let button = buttons[i];
			button.addEventListener('mouseenter', function(e){
				e.preventDefault();
				hideAll(buttons);
				show(buttons, i);
				hideAll(tabs);
				show(tabs, i);
			});
			button.addEventListener('touchstart', function(e){
				e.preventDefault();
				e.stopPropagation();
				e.stopImmediatePropagation();
				hideAll(buttons);
				show(buttons, i);
				hideAll(tabs);
				show(tabs, i);
				navigation.classList.add(TOUCH_ACTIVE_MENU_CLASS);
				tabsContainer.classList.add(TOUCH_ACTIVE_MENU_CLASS);
			});
		};

		let backButtons = selectAll(`.back-button`);
		for (let i = 0; i < backButtons.length; i++) {
			let backButton = backButtons[i];
			backButton.addEventListener('touchstart', function(e){
				console.log(e)
				e.preventDefault();
				navigation.classList.remove(TOUCH_ACTIVE_MENU_CLASS);
				tabsContainer.classList.remove(TOUCH_ACTIVE_MENU_CLASS);
			});
		}
	}

});
