// wrap constructor
function CardOuter(height, width, padding){
	this.height = height;
	this.padding = padding;
	this.width = width;

	this.render = function(){
		ctx.beginPath();
		ctx.fillStyle = '#fff';
		ctx.rect(0, 0, width + padding * 2, height + padding * 8);
		ctx.fill();
		ctx.lineWidth = 1;
		ctx.strokeStyle = '#e3effb';
		ctx.stroke();
	}
}