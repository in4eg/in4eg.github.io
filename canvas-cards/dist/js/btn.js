// btn constructor
function BtnElement(text, offset, font, background, color, btnLHeight){

	this.text = text;
	this.offset = offset;
	this.font = font;
	this.background = background;
	this.color = color;
	this.btnLHeight = btnLHeight;

	this.btnTextHeigth = getTextHeight(text, font, btnLHeight);
	this.height = 0;

	this.render = function(){
		console.log('btn render');
		var x = cardPadding;
		var y = offset + cardPadding * 2;

		this.height = this.btnTextHeigth + cardPadding;
		btnWidth = ctx.measureText(text).width + cardPadding * 2;

		ctx.beginPath();
		ctx.fillStyle = background;
		ctx.fillRect(cardPadding, offset + cardPadding * 2, btnWidth + cardPadding / 2, this.height);
		ctx.fill();

		ctx.font = font;
		ctx.fillStyle = color;
		ctx.fillText(text, cardPadding * 2, y + this.height / 4);


	}
}