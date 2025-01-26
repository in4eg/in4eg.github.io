document.addEventListener("DOMContentLoaded", function() {
	function showButtonFader(e) {
		let button = this;
		let left = e.pageX - button.offsetLeft;
		let top = e.pageY - button.offsetTop;
		let fader = button.getElementsByClassName('fade')[0];
		if (!fader) return;
		fader.style.left = left + "px";
		fader.style.top = top + "px";
		setTimeout((function(_this) {
			return function() {
				return document.querySelector('.fade', _this).classList.add('active');
			};
		})(button), 1);
		setTimeout((function(_this) {
			return function() {
				return document.querySelector('.fade', _this).classList.remove('active');
			};
		})(button), 610);
	}
	// find all buttons
	let buttons = document.querySelectorAll('.button');
	for (let i = 0, element; element = buttons[i]; i++) {
		buttons[i].addEventListener("click", showButtonFader)
	};
	//find all toggle buttons
	let toggleButtons = document.querySelectorAll('.toggle-button');
	for (let i = 0, element; element = toggleButtons[i]; i++) {
			toggleButtons[i].onclick = function(){
			toggleButtons[i].classList.toggle("active");
		}
	};
});