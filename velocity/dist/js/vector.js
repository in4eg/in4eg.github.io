function Vector(x,y){
	this.x = x || 0;
	this.y = y || 0;

	this.setX = function(value) {
		this.x = value;
	};
	this.setY = function(value) {
		this.y = value;
	};
	this.getAngle = function(){
		return Math.atan2(this.y, this.x);
	};
	this.getLength = function(){
		return Math.sqrt(this.x * this.x + this.y * this.y);
	};
	this.setAngle = function(angle) {
		var length = this.getLength();
		this.x = Math.cos(angle) * length;
		this.y = Math.sin(angle) * length;
	};
	this.setLength = function(length) {
		var angle = this.getAngle();
		this.x = Math.cos(angle) * length;
		this.y = Math.sin(angle) * length;
	};
	this.add = function(vector) {
		return new Vector(this.x + vector.x, this.y + vector.y);
	}
	this.substr = function(vector) {
		return new Vector(this.x - vector.x, this.y - vector.y);
	}
	this.multiply = function(value) {
		return new Vector(this.x * value, this.y * value);
	}
	this.divide = function(value) {
		return new Vector(this.x / value, this.y / value);
	}
	this.clamp = function(min, max) {
		// min.x max.x for x
		// min.y max.y for x

		// условие ? выражение1 : выражение2
		this.x = (this.x < min.x) ? min.x : (this.x > max.x) ? max.x : this.x;
		this.y = (this.y < min.y) ? min.y : (this.y > max.y) ? max.y : this.y;
		// console.log(this.x, this.y);
	}
	this.lerp = function(value) {
		console.log(value);
	}
}


var v1 = new Vector(90, 60)
// console.log(v1.clamp(new Vector(20, 55), new Vector(80, 70)));

console.log(v1.lerp(2));

// var firstCheck = false,
//     secondCheck = false,
//     access = firstCheck ? "Доступ запрещен" : secondCheck ? "Доступ запрещен" : "Доступ разрешен";
  
// console.log( access ); // выводит в консоль "Доступ разрешен"