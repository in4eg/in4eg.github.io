/*tabs */
document.addEventListener('DOMContentLoaded', function(){
	const TAB_ACTIVE_CLASS = 'active';
	const TAB_CONTENT_ACTIVE_CLASS = 'active';

	let setFaderSize = function(button){
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