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


var v1 = new Vector(10, 5);
console.log(v1);
console.log(v1.x);
console.log(v1.y);
console.log(v1.getAngle())
console.log(v1.getLength())

v1.setAngle(Math.PI / 6);
v1.setLength(100);

console.log(v1.x);
console.log(v1.y);