$ ->

	$ '.validate-form input:not(.ignored), .validate-form textarea:not(.ignored)'
		.on 'keyup keydown change', ->
			input = this; i = 0
			errors = [off]
			$(input).siblings('.icon-success').removeClass 'active'
			if ($(input).hasClass('email') and !isValidEmail($(input).val().trim()))
				errors[i] = on
				$(input).siblings('.icon-error').addClass 'active'
				$(input).parents('.form-group').addClass 'error'
			else if $(input).data('mask') and ($(input).val().trim().replace(/_/gim, '').length < $(input).data('mask').length)
				errors[i] = on
				$(input).siblings('.icon-error').addClass 'active'
				$(input).parents('.form-group').addClass 'error'
			else if $(input).data('minlength') and $(input).val().trim().length < $(input).data('minlength')
				errors[i] = on
				$(input).siblings('.icon-error').addClass 'active'
				$(input).parents('.form-group').addClass 'error'
			else if $(input).val().trim() is ""
				errors[i] = on
				$(input).siblings('.icon-error').addClass 'active'
				$(input).parents('.form-group').addClass 'error'
			else
				errors[i] = off
				$(input).siblings('.icon-error').removeClass 'active'
				$(input).siblings('.icon-success').addClass 'active'
				$(input).parents('.form-group').removeClass 'error'
			return

	isValidEmail = (email)->
		re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email)

	$ '.validate-form'
		.on 'submit', (e)->
			errors = [off,off]
			isFormScrolled = off
			scrollTarget = if $(this).parents('.popup').length isnt 0 then $('.popup') else $ 'html, body'
			$('input:not(.ignored), textarea:not(.ignored)', this).each (i, input)->
				$(input).siblings('.icon-success').removeClass 'active'

				if ($(input).hasClass('email') and !isValidEmail($(input).val().trim()))
					errors[i] = on
					$(input).siblings('.icon-error').addClass 'active'
					$(input).parents('.form-group').addClass 'error'
				else if $(input).data('minlength') and $(input).val().trim().length < $(input).data('minlength')
					errors[i] = on
					$(input).siblings('.icon-error').addClass 'active'
					$(input).parents('.form-group').addClass 'error'
				else if $(input).val().trim() is ""
					errors[i] = on
					$(input).siblings('.icon-error').addClass 'active'
					$(input).parents('.form-group').addClass 'error'
				else
					errors[i] = off
					$(input).siblings('.icon-error').removeClass 'active'
					$(input).siblings('.icon-success').addClass 'active'
					$(input).parents('.form-group').removeClass 'error'
				return
			hasErrors = off
			for error in errors
				if error then hasErrors = on; e.preventDefault(); return;
			if !hasErrors
				if $(@).hasClass 'success-form'
					$(@).find('.success-fadeout').addClass 'active'
					$(@).find('.success-fadein').addClass 'active'
					
				called = $ $(this).data 'hide'
				# $('html,body')
				$('body')
					.css 'width', ''
					.removeClass 'overlayed'
				called.removeClass 'active'
				setTimeout ->
					called.hide()
					if called.data('onclose') and window[called.data('onclose')]
						window[called.data('onclose')](called)
				, 300
				window.CallPopup($(@).data('success'))

			return

	$ '.file-input'
		.on 'change', ()->
			$(@).siblings('.file-name').removeClass('empty').html this.files[0].name
			return

	$ '.input'
		.on 'focus keyup blur change', ->
			if $(@).val().trim().length isnt 0
				$(@).addClass 'labeled'
				$(@).parents('.form-group').addClass 'labeled'
			else $(@).removeClass 'labeled'; $(@).parents('.form-group').removeClass 'labeled error'
			return


	return