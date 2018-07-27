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

var renderCard = function(cards, cardWidth, cardPadding, style) {

	var cardImage = new Image();
	cardImage.src = cards[2].image;

	cardImage.onload = function() {
		// image
		var imageRatio = cardImage.naturalHeight / cardImage.naturalWidth;
		// title
		var imageSize = cardWidth * imageRatio;
		var title = new TextElement(cards[2].title, imageSize, style.titleStyle.font, style.titleStyle.textColor, style.titleStyle.lineHeight);
		// caption
		var captionOffset = imageSize + title.height + cardPadding;
		var caption = new TextElement(cards[2].caption, captionOffset, style.captionStyle.font, style.captionStyle.textColor, style.captionStyle.lineHeight);
		// button
		var btnPosition = captionOffset + caption.height + cardPadding;
		var btn = new BtnElement(cards[2].button, btnPosition, style.btnStyle.font, style.btnStyle.background, style.btnStyle.textColor, style.btnStyle.lineHeight);

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
};

renderCard(cards, cardWidth, cardPadding, cardStyle);


window.addEventListener('resize', function() {
	setCanvasSize();
	renderCard(cards, cardWidth, cardPadding, cardStyle);
});
