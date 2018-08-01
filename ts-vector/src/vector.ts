export class Vector {

	x: number = 0;
	y: number = 0;

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
	setAngle(angle: number): Vector {
		var length = this.getLength();
		this.x = Math.cos(angle) * length;
		this.y = Math.sin(angle) * length;
		return this;
	}
	setLength(length: number): Vector {
		var angle = this.getAngle();
		this.x = Math.cos(angle) * length;
		this.y = Math.sin(angle) * length;
		return this;
	}
	add(vector: Vector): Vector {
		return new Vector(this.x + vector.x, this.y + vector.y);
	}
	substract(vector: Vector): Vector {
		return new Vector(this.x - vector.x, this.y - vector.y);
	}
	substractFrom(vector: Vector): Vector {
		return new Vector(vector.x - this.x,  vector.y - this.y);
	}
	multiply(value: number): Vector {
		return new Vector(this.x * value, this.y * value);
	}
	divide(value: number): Vector {
		return new Vector(this.x / value, this.y / value);
	}
	clamp(min: Vector, max: Vector): Vector {
		return new Vector(
			this.x = (this.x < min.x) ? min.x : (this.x > max.x) ? max.x : this.x,
			this.y = (this.y < min.y) ? min.y : (this.y > max.y) ? max.y : this.y
			);
	}
	lerp(vector: Vector, coef: number = 0): Vector {
		return new Vector(
			this.x + (vector.x - this.x) * coef,
			this.y + (vector.y - this.y) * coef
			);
	}
};

