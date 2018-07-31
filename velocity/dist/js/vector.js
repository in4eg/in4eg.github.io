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
}