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
			else if $(input).data('equals') and $(input).val().trim() isnt $($(input).data('equals')).val().trim()
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
				else if $(input).data('equals') and $(input).val().trim() isnt $($(input).data('equals')).val().trim()
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
				if error then hasErrors = on; e.preventDefault(); $('.form-head').addClass 'error' ; return
			if !hasErrors
				$('.success-fadeout', @).addClass 'active'
				$('.success-fadein', @).fadeIn()
				$(input).parents('.form-group').removeClass 'error'
			return

	$ '.file-input'
		.each (i, input)->
			$('input', input).on 'change', ()->
				$('label', input).html this.files[0].name
			return

	return