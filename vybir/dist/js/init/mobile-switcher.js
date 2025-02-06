document.addEventListener("DOMContentLoaded", function() {
	let ACTIVE_TOGGLE_CLASS = 'opened'
	let toggleButtons = document.querySelectorAll('.collapsed-mobile');
	for (let i = 0; i < toggleButtons.length; i++) {
		let buttons = [].slice.call(toggleButtons[i].querySelectorAll('.tab-button'));
			for (let button of buttons) {
				button.addEventListener('click', function(){
					button.parentNode.classList.toggle(ACTIVE_TOGGLE_CLASS)
				});
			};
	};
});

