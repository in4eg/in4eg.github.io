var cards = [{
	title: "Lorem ipsum dolor sit amet.",
	caption: "CLorem ipsum-dolor sit a met, consectetur adipisicing elit. Odit, accusantium.",
	image: "https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?resize=640%2C426",
	button: "Cat"
},{
	title: "Lorem ipsum dolor.",
	caption: "CLorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quam.",
	image: "https://www.w3schools.com/w3images/fjords.jpg",
	button: "Mountain"
},{
	title: "Lorem ipsum dolor sit.",
	caption: "CLorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium iste, ex sunt!",
	image: "https://demo.phpgang.com/crop-images/demo_files/pool.jpg",
	button: "Leopard"
},{
	title: "Lorem ipsum dolor sit amet, consectetur.",
	caption: "CLorem ipsum dolor sit amet, consectetur.",
	image: "http://www.imagedepaques.com/image/image-de-paques-lapin-poussin.jpg",
	button: "Some twits"
},{
	title: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
	caption: "CLorem ipsum dolor sit amet, consectetur adipisicing elit.",
	image: "http://kb4images.com/images/image/37185176-image.jpg",
	button: "Elephant"
}];


var canvas = document.getElementById('canvas');

var width = 0;
var height = 0;

var setCanvasSize = function() {
	width = window.innerWidth;
	height = window.innerHeight;
	canvas.width = width;
	canvas.height = height;
};
setCanvasSize();

ctx = canvas.getContext('2d');

var cardWidth = 300;
var cardPadding = 20;


function wrapText(context, text, x, y, maxWidth, lineHeight) {
	var words = text.split(/( |\s|\,\-)/gim);
	var line = '';

	for(var n = 0; n < words.length; n++) {
		var testLine = line + words[n];
		// console.log(testLine);
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


var drawtext = function(text, offsetTop, font, color, lineHeight) {
	var lineHeight = lineHeight;
	var x = cardPadding;
	var y = offsetTop + cardPadding * 2;

	ctx.font = font;
	ctx.fillStyle = color;
	ctx.textBaseline = 'top';

	wrapText(ctx, text, x, y, cardWidth, lineHeight);
}

var titleHeight = undefined;
var captionHeight = undefined;
var btnHeight = undefined;
var imageHeight = undefined;


var getTextHeight = function(text, font, titleLineHeight) {
	var totalWidth = cardWidth - cardPadding;
	var block = document.createElement('div');

	block.style.cssText = 'position:absolute; top: 0px; left: 0; width:' + totalWidth + 'px; font: ' + font + '; line-height:' + titleLineHeight + 'px; ';
	block.innerHTML = text

	document.body.appendChild(block);

	blockHeight = block.offsetHeight;
	document.body.removeChild(block);
	return blockHeight;
}

var drawBtn = function(text, offset, font, background, color, btnLHeight) {
	var lineHeight = lineHeight;
	var x = cardPadding;
	var y = offset + cardPadding * 2;

	btnTextHeigth = getTextHeight(text, font, lineHeight);

	btnHeight = btnTextHeigth + cardPadding * 2;
	btnWidth = ctx.measureText(text).width + cardPadding * 2;

	ctx.beginPath();
	ctx.fillStyle = background;
	ctx.fillRect(cardPadding, offset + cardPadding * 2, btnWidth, btnHeight);
	ctx.fill();

	ctx.font = font;
	ctx.fillStyle = color;
	ctx.fillText(text, x + cardPadding, y + cardPadding);
}


var drawCard = function(height, padding) {
	ctx.beginPath();
	ctx.fillStyle = '#fff';
	ctx.rect(0, 0, cardWidth + padding * 2, height + padding * 5);
	ctx.fill();
	ctx.lineWidth = 1;
	ctx.strokeStyle = '#e3effb';
	ctx.stroke();
}

var renderCard = function(cards, cardWidth) {

	for (var i = 0; i < cards.length; i++) {
		var cardImage = new Image();
		cardImage.src = cards[2].image;

		cardImage.onload = function() {

			var imageRatio = cardImage.naturalHeight / cardImage.naturalWidth;
			imageRatio = cardImage.naturalHeight / cardImage.naturalWidth;

			// title
			var imageHeight = cardWidth * imageRatio;
			var titleFont = '32px Arial';
			var titleColor = '#305496';
			var titleLineHeight = 34;

			// gereral wrap
			var totalHeight = imageHeight + titleHeight + captionHeight + btnHeight;
			drawCard(totalHeight, cardPadding);

			// image
			ctx.drawImage(cardImage, cardPadding, cardPadding, cardWidth, cardWidth * imageRatio);


			drawtext(cards[2].title, imageHeight, titleFont, titleColor, titleLineHeight);

			getTextHeight(cards[2].title, titleFont, titleLineHeight);
			titleHeight = getTextHeight(cards[2].title, titleFont, titleLineHeight);

			// caption
			var captionFont = '18px Arial';
			var captionColor = '#006699';
			var captionLineHeight = 28;
			var captionOffset = imageHeight + titleHeight + cardPadding;

			drawtext(cards[2].caption, captionOffset, captionFont, captionColor, captionLineHeight);

			captionHeight = getTextHeight(cards[2].caption, captionFont, captionLineHeight);

			// button
			var btnFont = '18px Arial';
			var btnTextColor = '#000';
			var btnColor = '#770b71';
			var btnLineHeight = 28;
			var btnOffset = captionOffset + captionHeight + cardPadding;

			drawBtn(cards[2].button, btnOffset, btnFont, btnColor, btnTextColor, btnLineHeight);

		};
	}
}

renderCard(cards, cardWidth)



window.addEventListener('resize', function() {
	setCanvasSize();
});

