// text constructor
function TextElement(text, offsetTop, font, color, lineHeight) {
	this.text = text;
	this.offsetTop = offsetTop;
	this.font = font;
	this.color = color;
	this.lineHeight = lineHeight;

	var lineHeight = lineHeight;
	var x = cardPadding;
	var y = offsetTop + cardPadding * 2;

	this.height = getTextHeight(text, font, lineHeight);

	this.wrapText = function (context, text, x, y, maxWidth, lineHeight) {
		var words = text.split(/( |\s|\,\-)/gim);
		var line = '';

		for(var n = 0; n < words.length; n++) {
			var testLine = line + words[n];
			var metrics = context.measureText(testLine);
			var testWidth = metrics.width;
			if (testWidth > maxWidth && n > 0) {
				context.fillText(line, x, y);
				line = words[n] + ' ';
				y += lineHeight;
			}
			else {
				line = testLine;
			}
		}
		context.fillText(line, x, y);
	}
	this.render = function(){
		console.log('text render');
		ctx.font = this.font;
		ctx.fillStyle = this.color;
		ctx.textBaseline = 'top';

		this.wrapText(ctx, text, x, y, cardWidth, lineHeight);
	}
}



