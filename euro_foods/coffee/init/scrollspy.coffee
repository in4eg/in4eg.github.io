$('.scroll-section').each (i, section) ->
	sectionHeidht = $(section).outerHeight()
	windowHeight = $(window).height()
	sectionTop = $(section).offset().top

	$(document).scroll ->
		top = $(document).scrollTop()

		if $(document).scrollTop() > sectionTop - sectionHeidht / 2
			sectionId = $(section).attr('id')
			anchor = $('[data-anchors]').find('[data-scrollto="#' + sectionId + '"]')
			$(anchor).parent('.item').addClass 'active'
			$(anchor).parent('.item').siblings().removeClass 'active'
		return
	return