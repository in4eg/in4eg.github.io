$ document
	.ready ->

		$ '.sign-form .call-btn'
			.click (e)->
				e.preventDefault()
				$(@).closest('form').addClass 'expanded'
				$(@).closest('form').find('input').focus()
				return


		$ '.sign-form input'
			.keyup (e)->
				if e.keyCode is 27
					$(@).blur()
					$('.sign-form').removeClass 'expanded'
				return

		$ 'body'
			.click (e)->
				if $(e.target).closest('.sign-form').length is 0
					$('.sign-form').removeClass 'expanded'
				return

		return