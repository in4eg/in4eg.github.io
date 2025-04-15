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
			else if $(input).hasClass('number') and !isNumber($(input).val().trim())
				errors[i] = on
				$(input).siblings('.icon-error').addClass 'active'
				$(input).parents('.form-group').addClass 'error'
			else
				errors[i] = off
				$(input).siblings('.icon-error').removeClass 'active'
				$(input).siblings('.icon-success').addClass 'active'
				$(input).parents('.form-group').removeClass 'error'
				$('.form-head').removeClass 'error'
			return

	isValidEmail = (email)->
		re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Zа-яА-ЯёЁ\-0-9]+\.)+[a-zA-Zа-яА-ЯёЁ]{2,}))$/;
		return re.test(email)

	isNumber = (number)->
		re = /([0-9])\w+/;
		return re.test(number)

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
				else if $(input).hasClass('checkbox') and $(input).prop('checked') == false
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
				else if $(input).hasClass('number') and !isNumber($(input).val().trim())
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
				(e).preventDefault()

				if $($(@).data('show')).length
					$(@).addClass 'hidden-form'
					$($(@).data('show')).addClass 'active'

					refreshForm($(@), $($(@).data('show')))


				window.CallPopup($(@).data('success'))
				$(@).parents('.success-fadeout').addClass 'active'
				$(@).parents('.success-fadeout').children('.success-fadein').fadeIn()
				
			return

	$ '.file-input'
		.on 'change', ()->
			$(@).next('.file-label').html @.files[0].name
			return

	return


refreshForm = (form, success)->
	if form.hasClass 'hidden-form'

		setTimeout (=>
			form.removeClass 'hidden-form'
			success.removeClass 'active'
			form.find('.input').val('')
			return
		), 5000

	return
