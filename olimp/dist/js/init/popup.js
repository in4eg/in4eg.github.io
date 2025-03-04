// popup
document.addEventListener('DOMContentLoaded', function(){

	hidePopup = function(popup) {
		let called = popup;
		let popupVideo = called.querySelector('iframe');

		document.body.classList.remove('overlayed');
		document.body.style.width = '';

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

	showPopup = function(popup) {

	};

	Array.prototype.forEach.call(document.querySelectorAll(".close-popup"), function(button){
		button.addEventListener("click", function (e) {
			hidePopup(button.closest(".popup"));
		});
	});

	Array.prototype.forEach.call(document.querySelectorAll(".popup"), function(popup){
		popup.addEventListener("click", function (e) {
			if (!popup.closest('.inner')) {
				hidePopup(popup);
			};
		});
	});

});

