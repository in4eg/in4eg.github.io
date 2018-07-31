var canvas = document.getElementById('canvas');

var width = 0;
var height = 0;

var setCanvasSize = function() {
	width = window.innerWidth;
	height = window.innerHeight;
	canvas.width = width;
	canvas.height = height;
};
setCanvasSize();

ctx = canvas.getContext('2d');

window.addEventListener('resize', function() {
	setCanvasSize();
});
