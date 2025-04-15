$ '.scroll-top-btn'
	.click (e)->
		e.preventDefault()
		$(@).addClass 'flying'
		$('html,body').animate
			scrollTop: 0
		, 1000
		setTimeout ->
			$('.scroll-top-btn').removeClass 'flying'
			return
		, 1010
		return


setScrollColor = (elements) ->
	
	if $('#main-page').length > 0

		if elements.length > 0
		
			for element in elements

				top = $(document).scrollTop()
				elementOffset = $(element).offset().top
				elementHeight = $(window).height()

				topFooter = $(document).height() - $(window).height() - $('.main-footer').outerHeight() + 150

				if top + elementHeight > elementOffset and top < elementOffset + elementHeight / 17 - 50
					$(element).addClass 'scrolled-set'
				else
					$(element).removeClass 'scrolled-set'

				if $('.scrolled-set').length > 0
					$('.scroll-top-btn').addClass 'colored'
				else if top > topFooter
					$('.scroll-top-btn').addClass 'colored'
				else
					$('.scroll-top-btn').removeClass 'colored'

	return


$ document
	.scroll ->
		setScrollColor($('.rocket-to-green'))

		top = $(document).scrollTop()
		if top > $(document).height() / 5
			$('.scroll-top-btn').addClass 'visible'
		else
			$('.scroll-top-btn').removeClass 'visible'

		return

