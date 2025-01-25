document.addEventListener("DOMContentLoaded", function() {
	function drawRound(id, persent, useDarkTheme) {
		var pixelRatio = window.devicePixelRatio || 1;
		var canvas = document.getElementById(id);

		if (canvas !== null && persent >= 0 && persent <= 1 ) {
			var ctx = canvas.getContext('2d');

			var width = 0;
			var height = 0;

			var lineWidth = 3;

			setCanvasSize(canvas, pixelRatio);

			var i = persent;

			var strokeColor = document.querySelector(canvas).data('stroke');

			ctx.beginPath()
			ctx.lineWidth = lineWidth*pixelRatio;
			ctx.arc(canvas.width/2, canvas.height/2, canvas.height/2 - (lineWidth * pixelRatio / 2), -Math.PI/2, -Math.PI * (2 * (1 - i))-Math.PI/2);

			ctx.strokeStyle = strokeColor;
			ctx.stroke()

			if (i >= 1) {
				ctx.fillStyle = strokeColor;
				ctx.strokeStyle = strokeColor;
				ctx.stroke();
				document.querySelector(canvas).parent().addClass('filled');
			} else {
				document.querySelector(canvas).parent().removeClass('filled');
			}
		}
	}

	var setCanvasSize = function(canvas, pixelRatio) {
		width = document.querySelector(canvas).parent().outerWidth() * pixelRatio;
		height = document.querySelector(canvas).parent().outerHeight() * pixelRatio;
		canvas.width = width;
		canvas.height = height;
	}

	function drawRadialIndicator(){
		var totalHeight = document.getElementsByTagName('body')[0].scrollHeight - window.height;
		var scrollTop = window.scrollTop;
		drawRound('roundCanvas', scrollTop / totalHeight, false);
	}
	drawRadialIndicator();


	window.addEventListener("scroll", drawRadialIndicator)
	window.addEventListener("resize", drawRadialIndicator)

});


