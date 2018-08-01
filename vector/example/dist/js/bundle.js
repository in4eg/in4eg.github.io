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
});;function Vector(xOrVector, y){

	if (typeof xOrVector === 'object'){
		this.x = xOrVector.x || 0;
		this.y = xOrVector.y || 0;

	} else {
		this.x = xOrVector || 0;
		this.y = y || 0;
	}

	this.contructor = "Vector";

	this.getAngle = function(){
		return Math.atan2(this.y, this.x);
	};

	this.setAngle = function(angle){
		var length = this.getLength();
		this.x = Math.cos(angle) * length;
		this.y = Math.sin(angle) * length;
	};

	this.setLength = function(length){
		var angle = this.getAngle();
		this.x = Math.cos(angle) * length;
		this.y = Math.sin(angle) * length;
	};

	this.getLength = function(){
		return Math.sqrt(this.x * this.x + this.y * this.y);
	};

	// methods

	this.add = function(vector){
		return new Vector(this.x + vector.x, this.y + vector.y);
	};
	this.substract = function(vector){
		return new Vector(this.x - vector.x, this.y - vector.y);
	};
	this.substractFrom = function(vector){
		return new Vector(vector.x - this.x, vector.y - this.y);
	};

	this.multiply = function(value){
		return new Vector(this.x * value, this.y * value);
	};
	this.divide = function(value){
		return new Vector(this.x / value, this.y / value);
	};

	this.multiplyByVector = function(vector){
		return new Vector(this.x * vector.x, this.y * vector.y);
	};
	this.divideByVector = function(vector){
		return new Vector(this.x / vector.x, this.y / vector.y);
	};

	this.clamp = function(min, max){
		return new Vector(
			this.x < min.x ? min.x : this.x > max.x ? max.x : this.x,
			this.y < min.y ? min.y : this.y > max.y ? max.y : this.y
		);
	}

	this.lerp = function(vector, lerp){
		lerp = lerp || 0;
		return new Vector(
			this.x + (vector.x - this.x) * lerp,
			this.y + (vector.y - this.y) * lerp
		);
	}
}