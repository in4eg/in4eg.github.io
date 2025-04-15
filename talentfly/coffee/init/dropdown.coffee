$ '.anchor'
	.click (e)->
		e.preventDefault()
		# for an accordeon
		# $('[data-dropdown]').not $(@).parent()
		# 	.each (i, acc)->
		# 		$(@).removeClass 'active'
		# 		return
		if $(@).parent('[data-dropdown]').hasClass 'active'
			$(@).parent('[data-dropdown]').removeClass 'active'
		else
			$(@).parent('[data-dropdown]').addClass 'active'
			# if window.innerWidth <= 767
			# 	$('html,body').animate
			# 		scrollTop: $(@).offset().top
			# 	, 200


		$(@).closest('[data-dropdown]').find('[data-catch-focus]').focus()
		if $(@).hasClass 'hidden-anchor'
			$(@).addClass 'hidden'
			
		return


$ '.dropdown-list'
	.on 'click', 'li', ->
		html = $(@).text()
		$(@).parents().siblings('.anchor').find('.text').html html
		$(@).parents('.dropdown').removeClass 'active'
		return



$ '.anchor-xs'
	.click (e)->
		e.preventDefault()

		if window.innerWidth <= 640
			if $(@).parent('.dropdown-xs').hasClass 'active'
				$(@).parent('.dropdown-xs').removeClass 'active'
			else
				$(@).parent('.dropdown-xs').addClass 'active'
				$('html,body').animate
					scrollTop: $(@).offset().top - 10
				, 200
		return
