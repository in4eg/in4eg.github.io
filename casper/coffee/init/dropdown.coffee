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