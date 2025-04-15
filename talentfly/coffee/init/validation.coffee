isValidEmail = (email)->
	re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email)

$ ->
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
				clearPopupInfo()

				if $(@).hasClass 'info-form'
					$('.success-fadeout', @).addClass 'active'
					$('.success-fadein', @).addClass 'active'
				else
					if $.magnificPopup
						$.magnificPopup.close()


			return

	$ '.file-input'
		.on 'change', ()->
			$(@).siblings('.file-name').removeClass('empty').html this.files[0].name
			return

	$ '.input'
		.on 'focus keyup blur change', ->
			if $(@).val().trim().length isnt 0
				$(@).addClass 'labeled'
			else $(@).removeClass 'labeled'
			return

	return
