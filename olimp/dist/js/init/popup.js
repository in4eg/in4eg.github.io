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

