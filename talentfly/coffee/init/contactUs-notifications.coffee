isValidEmail = (email)->
		re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email)


$('#contactUsForm').on 'submit', (e)->
  $($('#gNotification')[0]).css('top', '-23vh')
  $($('#gNotification')[0]).css('left', '25%')
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
    if(error)
      hasErrors = on
      e.preventDefault()
      return
  if(!hasErrors)
    $($('#mainNotification')[0]).css('top', '11%')
    hideGNotification('mainNotification')
    showGNotification('notice', 'Please, wait...', '', 'mainNotification')
    $('html, body').animate({scrollTop: 0},1000)
    $.ajax
      type: 'post'
      url: location.href
      data:
        'name': $('#id_name').val()
        'email': $('#id_email').val()
        'phone': $('#id_phone').val()
        'company_name': $('#id_company_name').val()
        'message': $('#contactUsMessage').val()
      cache: false
      dataType: 'json'
      headers: 'X-CSRFToken': csrf_token
      success: (data) ->
        if data.success
          console.log 'SUCCSESS'
          hideGNotification('mainNotification')
          showGNotification('success', ' Thanks for your message!', '', 'mainNotification')
          $('html, body').animate({scrollTop: 0},1000)
          clearForm()
        else
          console.log 'WARNING'
          hideGNotification('mainNotification')
          showGNotification('warning', data.error, '', 'mainNotification')
          $('html, body').animate({scrollTop: 0},1000)
        return
      error: (data, textStatus, errorThrown) ->
        console.log 'ERROR'
        console.log errorThrown
        hideGNotification('mainNotification')
        showGNotification('error', 'Something went wrong, ', 'sorry!', 'mainNotification')
        $('html, body').animate({scrollTop: 0},1000)
        return

    if $(@).hasClass 'info-form'
      $('.success-fadeout', @).addClass 'active'
      $('.success-fadein', @).addClass 'active'
  return


clearForm = () ->
  $('#id_name').val('')
  $('#id_email').val('')
  $('#id_phone').val('')
  $('#id_company_name').val('')
  $('#contactUsMessage').val('')
  $('#contactUsForm').find('input').removeClass('labeled')
  $('#contactUsForm').find('i').removeClass('active')
  return