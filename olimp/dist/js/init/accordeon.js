// data-accordeon
document.addEventListener('DOMContentLoaded', function(){
	let ACCORDEON_ACTIVE_CLASS = 'active';

	let allAccordeons = document.querySelectorAll("[data-accordeon]");
	let allAccordeonsButtons = document.querySelectorAll(".accordeon-title");

	let closeAllAccordeons = function(){
		for (i = 0; i < allAccordeons.length; i++) {
			let accordeonInner = allAccordeons[i].querySelector('.accordeon-inner');
			allAccordeons[i].classList.remove(ACCORDEON_ACTIVE_CLASS);
			accordeonInner.style.maxHeight = null;
		}
	}

	let accordeonToggle = function() {
		let accordeonInner = this.parentElement.querySelector('.accordeon-inner');
		if (this.parentElement.classList.contains(ACCORDEON_ACTIVE_CLASS)) {
			closeAllAccordeons();
		} else {
			closeAllAccordeons();
			this.parentElement.classList.add(ACCORDEON_ACTIVE_CLASS);
			let style = window.getComputedStyle(accordeonInner);
			let paddingBottom = style.getPropertyValue('padding').split(' ')[2].replace('px', '');
			accordeonInner.style.maxHeight = accordeonInner.scrollHeight + parseInt(paddingBottom) + "px";
		};
	}

	for (i = 0; i < allAccordeonsButtons.length; i++) {
		allAccordeonsButtons[i].addEventListener('click', accordeonToggle, false);
	};
});