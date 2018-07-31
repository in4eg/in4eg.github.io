function Vector(xOrVector, y){

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