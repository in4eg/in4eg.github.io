
Point = function(position, radius){
	this.x = position.x || 0;
	this.y = position.y || 0;
	this.radius = radius || 10;

	this.create = function(){
		ctx.beginPath();
		// контекст.arc(x, y, радиус, начальный угол, конечный угол, [направление = false])
		ctx.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
		ctx.lineWidth = 15;

		// line color
		ctx.fillStyle = 'black';
		ctx.fill();
	}
}

var point = new Point(new Vector(50, 50), 10);
var point2 = new Point(new Vector(250, 50), 10);

// console.log(point)
point.create()
point2.create()


