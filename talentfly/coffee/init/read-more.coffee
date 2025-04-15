$ document
	.on 'click', '[data-read]', ->
		$(@).siblings('.description.show-more').addClass 'active'
		$(@).parent('.show-more').addClass 'active'
		$(@).removeClass('active').addClass 'hidden'
		return
