isValidEmail = undefined

isValidEmail = (email) ->
  re = undefined
  re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  re.test email

$(document).ready ->
  $($('#mainNotification')[0]).css 'top', '6%'
  $($('#mainNotification')[0]).css 'left', '7%'
  $($('#mainNotification')[0]).css 'width', '86%'
  $('#signInFormLimitAccess').on 'submit', (e) ->
    endMessage = undefined
    error = undefined
    errors = undefined
    hasErrors = undefined
    isFormScrolled = undefined
    j = undefined
    len = undefined
    scrollTarget = undefined
    e.preventDefault()
    e.stopPropagation()
    errors = [
      false
      false
    ]
    isFormScrolled = false
    scrollTarget = if $(this).parents('.popup').length != 0 then $('.popup') else $('html, body')
    $('input:not(.ignored), textarea:not(.ignored)', this).each (i, input) ->
      $(input).siblings('.icon-success').removeClass 'active'
      if $(input).hasClass('email') and !isValidEmail($(input).val().trim())
        errors[i] = true
        $(input).siblings('.icon-error').addClass 'active'
        $(input).parents('.form-group').addClass 'error'
      else if $(input).data('minlength') and $(input).val().trim().length < $(input).data('minlength')
        errors[i] = true
        $(input).siblings('.icon-error').addClass 'active'
        $(input).parents('.form-group').addClass 'error'
      else if $(input).val().trim() == ''
        errors[i] = true
        $(input).siblings('.icon-error').addClass 'active'
        $(input).parents('.form-group').addClass 'error'
      else
        errors[i] = false
        $(input).siblings('.icon-error').removeClass 'active'
        $(input).siblings('.icon-success').addClass 'active'
        $(input).parents('.form-group').removeClass 'error'
      return
    hasErrors = false
    j = 0
    len = errors.length
    while j < len
      error = errors[j]
      if error
        hasErrors = true
        e.preventDefault()
        return
      j++
    if !hasErrors
      hideGNotification 'mainNotification'
      endMessage = $($('#mainNotification')[0]).find('.end-message')[0]
      $(endMessage).css 'display', 'inline'
      showGNotification 'notice', 'Please, wait...', '', 'mainNotification'
      $.ajax
        type: 'post'
        url: $(this).attr('action')
        data:
          'username': $('#id_username').val()
          'password': $('#id_password').val()
          'remember_me': $('#id_remember_me').prop('checked')
        cache: false
        dataType: 'json'
        headers: 'X-CSRFToken': csrf_token
        success: (data) ->
          if data.success
            console.log 'SUCCSESS'
            hideGNotification 'mainNotification'
            # $(endMessage).css('display', 'block');
            window.location.href = '/profile/'
          else
            console.log 'WARNING'
            hideGNotification 'mainNotification'
            showGNotification 'warning', data.error, '', 'mainNotification'
          return
        error: (data, textStatus, errorThrown) ->
          console.log 'ERROR'
          console.log errorThrown
          hideGNotification 'mainNotification'
          showGNotification 'error', errorThrown, '', 'mainNotification'
          return
    return
  return
