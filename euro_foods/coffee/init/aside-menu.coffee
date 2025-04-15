$ '[data-anchors]'
	.on 'click', '.item', ->
		$('body').css('width', '').removeClass 'overlayed'
		$('.main-menu, [data-menu]').removeClass 'active'

		$(@).addClass 'active'
		$(@).siblings().removeClass 'active'

		return
