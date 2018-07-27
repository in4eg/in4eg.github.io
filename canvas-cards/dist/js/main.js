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

var renderCard = function(cards, cardWidth, cardPadding) {

	var titleStyle = {
		font: '28px Arial',
		textColor: '#000',
		lineHeight: 34
	};

	var captionStyle = {
		font: '16px Arial',
		textColor: '#999',
		lineHeight: 22
	};

	var btnStyle = {
		font: '18px Arial',
		textColor: '#000',
		background: '#d1d5da',
		lineHeight: 28
	};

	var cardImage = new Image();
	cardImage.src = cards[2].image;

	cardImage.onload = function() {
		// image
		var imageRatio = cardImage.naturalHeight / cardImage.naturalWidth;
		// title
		var imageSize = cardWidth * imageRatio;
		var title = new TextElement(cards[2].title, imageSize, titleStyle.font, titleStyle.textColor, titleStyle.lineHeight);
		// caption
		var captionOffset = imageSize + title.height + cardPadding;
		var caption = new TextElement(cards[2].caption, captionOffset, captionStyle.font, captionStyle.textColor, captionStyle.lineHeight);
		// button
		var btnPosition = captionOffset + caption.height + cardPadding;
		var btn = new BtnElement(cards[2].button, btnPosition, btnStyle.font, btnStyle.background, btnStyle.textColor, btnStyle.lineHeight);

		// render wrap
		var totalHeigth = title.height + caption.height + imageSize + btn.height;
		var wrap = new CardOuter(totalHeigth, cardWidth, cardPadding);
		wrap.render();

		// render elements
		ctx.drawImage(cardImage, cardPadding, cardPadding, cardWidth, cardWidth * imageRatio);
		title.render();
		caption.render();
		btn.render();
	};
}

renderCard(cards, cardWidth, cardPadding)


window.addEventListener('resize', function() {
	setCanvasSize();
});
