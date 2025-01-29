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
			document.querySelector('.fade', _this).classList.add('active');
		})(button), 1);
		setTimeout((function(_this) {
			document.querySelector('.fade', _this).classList.remove('active');
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
document.addEventListener("DOMContentLoaded", function() {
	function drawRound(id, persent, useDarkTheme) {
		let pixelRatio = window.devicePixelRatio || 1;
		let canvas = document.getElementById(id);
		if (canvas !== null && persent >= 0 && persent <= 1 ) {
			let ctx = canvas.getContext('2d');
			let width = 0;
			let height = 0;
			let lineWidth = 1;
			setCanvasSize(canvas, pixelRatio);
			let i = persent;
			let strokeColor = canvas.dataset.stroke;
			ctx.beginPath()
			ctx.lineWidth = lineWidth*pixelRatio;
			ctx.arc(canvas.width/2, canvas.height/2, canvas.height/2 - (lineWidth * pixelRatio / 2), -Math.PI/2, -Math.PI * (2 * (1 - i))-Math.PI/2);
			ctx.strokeStyle = strokeColor;
			ctx.stroke();
			if (i >= 1) {
				ctx.fillStyle = strokeColor;
				ctx.strokeStyle = strokeColor;
				ctx.stroke();
				canvas.parentElement.classList.add('filled');
			} else {
				canvas.parentElement.classList.remove('filled');
			};
		};
	};
	let setCanvasSize = function(canvas, pixelRatio) {
		width = canvas.parentElement.clientWidth * pixelRatio;
		height = canvas.parentElement.clientHeight * pixelRatio;
		canvas.width = width;
		canvas.height = height;
	};
	function drawRadialIndicator(){
		let totalHeight = document.body.scrollHeight - window.innerHeight ;
		let scrollTop = document.documentElement.scrollTop;
		drawRound('roundCanvas', scrollTop/totalHeight, false);
	};
	drawRadialIndicator();
	window.addEventListener("scroll", drawRadialIndicator);
	window.addEventListener("resize", drawRadialIndicator);
});



document.addEventListener("DOMContentLoaded", function() {
	let lastWindowWidth = 0;
	let tabletBrakepoint = 1440;
	let mobileBrakepoint = 768;
	(teleport = function() {
		if (window.innerWidth === lastWindowWidth){
			return;
		} else {
			lastWindowWidth = window.innerWidth;
		}
		let tabletElemens = document.querySelectorAll('[data-tablet]');
		for (let i = 0, element; element = tabletElemens[i]; i++) {
			let elem = tabletElemens[i];
			let parent = elem.dataset.desktop;
			let destination = elem.dataset.tablet;
			if (window.innerWidth <= tabletBrakepoint) {
				document.getElementById(destination).prepend(elem);
			} else {
				document.getElementById(parent).append(elem);
			}
		};
		let mobileElements = document.querySelectorAll('[data-mobile]');
		for (let i = 0, element; element = mobileElements[i]; i++) {
			let elem = mobileElements[i];
			let parent = elem.dataset.desktop;
			let destination = elem.dataset.mobile;
			if (window.innerWidth <= tabletBrakepoint) {
				document.getElementById(destination).prepend(elem);
			} else {
				document.getElementById(parent).append(elem);
			}
		};
	})();
	window.onresize = teleport;
})
document.addEventListener("DOMContentLoaded", function() {
	let toggleButtons = document.querySelectorAll('[uk-filter-control]');
	for (let i = 0, element; element = toggleButtons[i]; i++) {
		toggleButtons[i].onclick = function(){
			for (let button of toggleButtons[i].parentNode.childNodes) {
				if (button.classList) {
					button.classList.remove('filter-active');
				}
			}
			toggleButtons[i].classList.add("filter-active");
		};
	};
});


