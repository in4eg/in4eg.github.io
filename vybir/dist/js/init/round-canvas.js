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
			if (!ctx) return;
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
		if (document.getElementById('roundCanvas').length) {
			drawRound('roundCanvas', scrollTop/totalHeight, false);
		}
	};
	drawRadialIndicator();
	window.addEventListener("scroll", drawRadialIndicator);
	window.addEventListener("resize", drawRadialIndicator);
});


