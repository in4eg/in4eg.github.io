translateBlock = ->
	if $('#main-page').length > 0
		element = $('.translate-right')
		top = $(document).scrollTop()
		elementOffset = element.offset().top
		elementHeight = $(window).height()
		elementParent = element.parents('.section').height()
		translateValue = elementOffset - top - elementParent

		if top + elementHeight > elementOffset and top < elementOffset + elementHeight and translateValue <= $(document).width() / 3 and window.innerWidth >= 641
			console.log 
			$('.translate-right').css(
				transform: 'translateX(-' + translateValue + 'px)'
				)
		
	return

$(document)
	.scroll ->
		translateBlock()
		return