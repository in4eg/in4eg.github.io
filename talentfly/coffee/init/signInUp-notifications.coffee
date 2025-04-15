$ ->

	isValidEmail = (email)->
		re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email)

  # #signInForm
	$('.validate-form')
		.on 'submit', (e)->
			e.preventDefault()
			e.stopPropagation()
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
        # SIGN IN (HEADER)
				if(this.id == 'signInForm')
          hideGNotificationIn()
          showGNotificationIn('notice','Please, wait...','')
          $.ajax
            type: 'post'
            url: $(this).attr('action')
            data:
              'username': $('#signInEmail').val()
              'password': $('#signInPassword').val()
              'remember_me': $('#signInMember').prop('checked')
            cache: false
            dataType: 'json'
            headers: 'X-CSRFToken': csrf_token
            success: (data) ->
              if data.success
                console.log 'SUCCSESS'
                hideGNotificationIn()
                window.location.href = '/profile/'
              else
                hideGNotificationIn()
                showGNotificationIn 'warning', data.error, ''
              return
            error: (data, textStatus, errorThrown) ->
              console.log 'ERROR'
              console.log errorThrown
              hideGNotificationIn()
              showGNotificationIn 'error', errorThrown, ''
              return
        # LOG IN (form on PAGE)
        if(@.id == 'signInFormLimitAccess')
          hideGNotification('mainNotification')
          $('#mainNotification').css({
            'width': '80%',
            'top': 'unset',
            'left': 'unset'
          })
          showGNotification('notice','Please, wait...', '', 'mainNotification')
          $.ajax
            type: 'post'
            url: $(@).attr('action')
            data:
              'username': $('#id_username').val()
              'password': $('#id_password').val()
              'remember_me': $('#id_remember_me').prop('checked')
            cache: false
            dataType: 'json'
            headers: 'X-CSRFToken': csrf_token
            success: (data) ->
              if(data.success)
                console.log 'SUCCSESS'
                hideGNotification('mainNotification')
                window.location.href = '/profile/'
              else
                hideGNotification('mainNotification')
                showGNotification('warning', data.error, '', 'mainNotification')
              return
            error: (data, textStatus, errorThrown) ->
              console.log('ERROR', errorThrown)
              hideGNotification('mainNotification')
              showGNotification('error', errorThrown, '', 'mainNotification')
              return
        # SIGN UP (HEADER)hideGNotification()
        if(this.id == 'signUpForm')
          hideGNotificationUp()
          endMessage = $('#signUpForm #gEndMessage')[0]
          $(endMessage).css('display', 'inline')
          showGNotificationUp 'notice', 'Please, wait...', ''
          $.ajax
            type: 'post'
            url: $(this).attr('action')
            data:
              'first_name': $('#signUpFirstName').val()
              'second_name': $('#signUpLastName').val()
              'email': $('#signUpEmail').val()
              'password1': $('#signUpPassword').val()
              'business': $('#signUpMember').prop('checked')
            cache: false
            dataType: 'json'
            headers: 'X-CSRFToken': csrf_token
            success: (data) ->
              if data.success
                  hideGNotificationUp()
                  $(endMessage).css('display', 'block')
                  showGNotificationUp 'success', 'You have successfully signed up', 'Check your mail'
              else
                hideGNotificationUp()
                showGNotificationUp 'warning', data.errors.email, ''
              return
            error: (data, textStatus, errorThrown) ->
              console.log errorThrown
              hideGNotificationUp()
              showGNotificationUp 'error', errorThrown, ''
              return


				if $(@).hasClass 'info-form'
					$('.success-fadeout', @).addClass 'active'
					$('.success-fadein', @).addClass 'active'
			return

	$ '.input'
		.on 'focus keyup blur change', ->
			if $(@).val().trim().length isnt 0
				$(@).addClass 'labeled'
			else $(@).removeClass 'labeled'
			return

	return
