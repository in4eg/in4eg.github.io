function getTextHeight(text, font, titleLineHeight) {
	var totalWidth = cardWidth - cardPadding;
	var block = document.createElement('div');

	block.style.cssText = 'position:absolute; top: 0px; left: 0; width:' + totalWidth + 'px; font: ' + font + '; line-height:' + titleLineHeight + 'px; ';
	block.innerHTML = text

	document.body.appendChild(block);

	blockHeight = block.offsetHeight;
	document.body.removeChild(block);
	return blockHeight;
}