var cards = [{
	title: "Lorem ipsum dolor s - - -- it - - amet.",
	caption: "CLorem - ipsum-dolor sit a - m-et, consectetur adipisicing elit. Odit, accusantium.",
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
	var x = 0;
	var y = offsetTop;

	ctx.font = font;
	ctx.fillStyle = color;
	ctx.textBaseline = 'top';

	wrapText(ctx, text, x, y, cardWidth, lineHeight);
}

var titleHeight = undefined;
var captionHeight = undefined;

var getTextHeight = function(text, font, titleLineHeight) {
	var block = document.createElement('div');
	block.style.cssText = 'position:absolute; top: 0px; left: 0; width:' + cardWidth + 'px; font: ' + font + '; line-height:' + titleLineHeight + 'px; ';
	block.innerHTML = text

	document.body.appendChild(block);

	blockHeight = block.offsetHeight;
	document.body.removeChild(block);
	return blockHeight;
}

var drawBtn = function(text, offset, font, background, color, btnLHeight) {
	console.log(text);
	var lineHeight = lineHeight;
	var x = 0;
	var y = offset;

	ctx.font = font;
	ctx.fillStyle = color;
	ctx.textBaseline = 'top';
	ctx.fillText(text, x, y);
	// ctx.textAlign = 'center';

	btnTextHeigth = getTextHeight(text, font, lineHeight);
	console.log(btnTextHeigth);

	console.log(ctx.measureText(text).width)

}

var renderCard = function(cards, cardWidth) {
	// console.log(cards);

	for (var i = 0; i < cards.length; i++) {
		// console.log([
		// 	cards[0].title,
		// 	cards[0].caption,
		// 	cards[0].image,
		// 	cards[0].button
		// 	]);

		var cardImage = new Image();
		cardImage.src = cards[0].image;

		cardImage.onload = function() {
			var imageRatio = cardImage.naturalHeight / cardImage.naturalWidth;

			imageRatio = cardImage.naturalHeight / cardImage.naturalWidth;
			ctx.drawImage(cardImage, 0, 0, cardWidth, cardWidth * imageRatio);

			// title
			var imageHeight = cardWidth * imageRatio;
			var titleFont = '32px Arial';
			var titleColor = '#305496';
			var titleLineHeight = 34;

			drawtext(cards[0].title, imageHeight, titleFont, titleColor, titleLineHeight);

			getTextHeight(cards[0].title, titleFont, titleLineHeight);
			titleHeight = getTextHeight(cards[0].title, titleFont, titleLineHeight);

			// caption
			var captionFont = '18px Arial';
			var captionColor = '#006699';
			var captionLineHeight = 28;
			var captionOffset = imageHeight + titleHeight + 20;

			drawtext(cards[0].caption, captionOffset, captionFont, captionColor, captionLineHeight);

			captionHeight = getTextHeight(cards[0].caption, captionFont, captionLineHeight);
			// console.log(captionHeight);

			// button
			var btnFont = '18px Arial';
			var btnTextColor = '#fff';
			var btnColor = '#006699';
			var btnLineHeight = 28;
			var btnOffset = captionOffset + captionHeight + 20;

			drawBtn(cards[0].button, btnOffset, btnFont, btnColor, btnTextColor, btnLineHeight);
		};
	}
}
renderCard(cards, cardWidth)



window.addEventListener('resize', function() {
	setCanvasSize();
});

