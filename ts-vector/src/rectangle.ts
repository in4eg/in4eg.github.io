export class Rectangle {

		x: number = 0;
		y: number = 0;
		width: number = 0;
		height: number = 0;

	constructor(cord: number) {
		this.x = cord;
		this.y = cord;
	}
	setPosition(point: Point): Point {
		console.log(point.x);
		this.x = point.x;
		this.y = point.y;
		return this;
	}
}
