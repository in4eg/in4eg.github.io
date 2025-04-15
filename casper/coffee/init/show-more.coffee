$ '[data-show-more]'
	.click ->
		$(@).parents('.show-more').toggleClass 'active'
		$('html,body').animate
			scrollTop: $(@).parents('.show-more').offset().top
		, 200
		$(@).removeClass 'active'
		$(@).siblings('.more-link').addClass 'active'

		return