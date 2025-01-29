document.addEventListener("DOMContentLoaded", function() {
	const ACTIVE_TAB_CLASS = 'active';

	let select = function(selector, parent){
		return (parent || document).querySelector(selector);
	};
	let selectAll = function(selector, parent){
		return [].slice.call((parent || document).querySelectorAll(selector));
	};
	let navigation = select('[data-hover-show]');
	let buttons = selectAll('li', navigation);

	let targetId = navigation.dataset.hoverShow;
	let tabs = selectAll(`#${targetId} .tab-content`);

	let hideAll = function(collection){
		collection.forEach(function(item){
			item.classList.remove(ACTIVE_TAB_CLASS);
		});
	};

	let show = function(collection, index) {
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
	};
});