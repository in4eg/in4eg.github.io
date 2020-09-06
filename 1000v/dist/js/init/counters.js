(function() {
	var requestAnimationFrame;
	requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	window.requestAnimationFrame = requestAnimationFrame;
})();

var RadialGrapgh = function(canvas, time, textNode) {
	var pixelRatio = window.devicePixelRatio || 1;
	var ctx = canvas.getContext('2d');
	var width = 0;
	var height = 0;
	(setCanvasSize = function() {
		width = $(canvas).parent().outerWidth() * pixelRatio;
		height = $(canvas).parent().outerHeight() * pixelRatio;
		canvas.width = width*1.1;
		canvas.height = height*1.1;
	})();
	var drawAll = function(percent) {
		var i;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		i = 0;
		while (i < radials.length) {
			render(radials[i], percent);
			i++;
		}
	};
	var quart = Math.PI / 2;
	var PI2 = Math.PI * 2;
	var lineWidth = 3 * pixelRatio;
	var render = function(radial, percent) {
		var pixelRatio = window.devicePixelRatio || 1;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.beginPath();
		ctx.lineWidth = lineWidth;
		var pct = percent / 100;
		var extent = parseInt((radial.end - radial.start) * pct);
		// var current = (radial.end - radial.start) / 100 * PI2 * pct - quart;
		var current = PI2 * pct - quart;

		ctx.beginPath();
		ctx.arc(radial.x, radial.y, height/2, -quart, current);
		ctx.strokeStyle = radial.color;
		ctx.stroke();
		ctx.fillStyle = radial.color;
		if (textNode) {
			textNode.text(extent)
		}
	};
	var animate = function() {
		if ($('#counter-section').hasClass('active')) {
			percent += 1/time*100;
			drawAll(percent);
		} else {
			drawAll(0);
		}
		if (percent < 100) {
			requestAnimationFrame(animate);
		}
	};
	this.animate = function() {
		return animate();
	};
	ctx.lineWidth = lineWidth;
	var percent = 0;
	var radials = [];
	radials.push({
		x: canvas.width / 2,
		y: canvas.height / 2,
		radius: 2 * pixelRatio,
		start: 0,
		end: canvas.getAttribute('data-countto'),
		color: canvas.getAttribute('data-bgcolor')
	});
	var setRadialSize = function() {
		var j, len, radial;
		for (j = 0, len = radials.length; j < len; j++) {
			radial = radials[j];
			radial.x = canvas.width / 2;
			radial.y = canvas.height / 2;
		}
		drawAll(percent);
	};
	window.addEventListener('resize', function() {
		setCanvasSize();
		setRadialSize();
	});
	return this;
};


$('[data-countto]').each(function(i, canvas) {
	var textNode = $(canvas).parent().find('.counter') || null;
	var progress = new RadialGrapgh(canvas, 500, textNode);
	progress.animate();

	$(window).scroll(function() {
		if ($(document).scrollTop() + $(window).outerHeight() / 2 > $('#counter-section').offset().top) {
			$('#counter-section').addClass('active');
		} else {
			$('#counter-section').removeClass('active');
		}
	});
});