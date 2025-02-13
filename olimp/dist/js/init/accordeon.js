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
