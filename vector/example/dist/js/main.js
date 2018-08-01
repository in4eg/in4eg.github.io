var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;


var vector1 = new Vector(Math.random() * width, Math.random() * height);
var vector2 = new Vector(Math.random() * width, Math.random() * height);
var lerpCoef = 0.5;
// vector1.setLength(10);
// vector1.setAngle(Math.PI);

// console.log(vector1.clamp(
// 	new Vector(-5, -10),
// 	new Vector(5, 10)
// ));

var i = 0;
function render(){
	requestAnimationFrame(render);

	lerpCoef = (1 + Math.sin(i / 30)) / 2;

	ctx.clearRect(0, 0, width, height);

	ctx.fillStyle = "red";
	ctx.beginPath();
	ctx.arc(vector1.x, vector1.y, 4, 0, Math.PI*2);
	ctx.fill();

	ctx.fillStyle = "blue";
	ctx.beginPath();
	ctx.arc(vector2.x, vector2.y, 4, 0, Math.PI*2);
	ctx.fill();

	var lerped = vector1.lerp(vector2, lerpCoef);
	ctx.fillStyle = "green";
	ctx.beginPath();
	ctx.arc(lerped.x, lerped.y, 4, 0, Math.PI*2);
	ctx.fill();

	ctx.fillStyle = "black";
	ctx.beginPath();
	ctx.moveTo(vector1.x, vector1.y);
	ctx.lineTo(vector2.x, vector2.y);
	ctx.stroke();


	i++;
}
render();


document.getElementById('range').addEventListener('input', function(e){
	lerpCoef = parseFloat(this.value);
	document.getElementById('range-data').innerHTML = lerpCoef;
});