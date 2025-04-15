$ '.dropdown-list'
	.on 'click', 'li', ->
		html = $(@).text()
		$(@).parents().siblings('.anchor').find('.text').html html
		$(@).parents('.dropdown').removeClass 'active'
		return