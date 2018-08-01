class Vector {

	x: number;
	y: number;

	constructor(vectorX: number, vectorY: number) {
		this.x = vectorX;
		this.y = vectorY;
	}

	getAngle(): number {
		return Math.atan2(this.y, this.x);
	}
	getLength(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	setAngle(angle: number) {
		var length = this.getLength();
		return {x: Math.cos(angle) * length, y: Math.sin(angle) * length};
	}
	setLength(length: number) {
		var angle = this.getAngle();
		return {x: Math.cos(angle) * length, y: Math.sin(angle) * length};
	}
	add(vector: {x: number, y: number}) {
		return new Vector(this.x + vector.x, this.y + vector.y);
	}
	substr(vector: {x: number, y: number}) {
		return new Vector(this.x - vector.x, this.y - vector.y);
	}
	substrFrom(vector: {x: number, y: number}) {
		return new Vector(vector.x - this.x,  vector.y - this.y);
	}
	multiply(value: number) {
		return new Vector(this.x * value, this.y * value);
	}
	divide(value: number) {
		return new Vector(this.x / value, this.y / value);
	}
	clamp(min: {x: number, y: number}, max: {x: number, y: number}) {
		return {x: (this.x < min.x) ? min.x : (this.x > max.x) ? max.x : this.x, y: (this.y < min.y) ? min.y : (this.y > max.y) ? max.y : this.y};
	}
	lerp(vector: {x: number, y: number}, coef: number){
		return new Vector(
			this.x + (vector.x - this.x) * coef,
			this.y + (vector.y - this.y) * coef
		)
	}
}

var v1 =  new Vector(20, 20);
console.log(v1.lerp(new Vector(5, 30), 0.5));