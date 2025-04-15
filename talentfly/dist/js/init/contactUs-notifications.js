var clearForm, isValidEmail;

isValidEmail = function(email) {
  var re;
  re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

$('#contactUsForm').on('submit', function(e) {
  var error, errors, hasErrors, isFormScrolled, j, len, scrollTarget;
  $($('#gNotification')[0]).css('top', '-23vh');
  $($('#gNotification')[0]).css('left', '25%');
  errors = [false, false];
  isFormScrolled = false;
  scrollTarget = $(this).parents('.popup').length !== 0 ? $('.popup') : $('html, body');
  $('input:not(.ignored), textarea:not(.ignored)', this).each(function(i, input) {
    $(input).siblings('.icon-success').removeClass('active');
    if ($(input).hasClass('email') && !isValidEmail($(input).val().trim())) {
      errors[i] = true;
      $(input).siblings('.icon-error').addClass('active');
      $(input).parents('.form-group').addClass('error');
    } else if ($(input).data('minlength') && $(input).val().trim().length < $(input).data('minlength')) {
      errors[i] = true;
      $(input).siblings('.icon-error').addClass('active');
      $(input).parents('.form-group').addClass('error');
    } else if ($(input).val().trim() === "") {
      errors[i] = true;
      $(input).siblings('.icon-error').addClass('active');
      $(input).parents('.form-group').addClass('error');
    } else {
      errors[i] = false;
      $(input).siblings('.icon-error').removeClass('active');
      $(input).siblings('.icon-success').addClass('active');
      $(input).parents('.form-group').removeClass('error');
    }
  });
  hasErrors = false;
  for (j = 0, len = errors.length; j < len; j++) {
    error = errors[j];
    if (error) {
      hasErrors = true;
      e.preventDefault();
      return;
    }
  }
  if (!hasErrors) {
    $($('#mainNotification')[0]).css('top', '11%');
    hideGNotification('mainNotification');
    showGNotification('notice', 'Please, wait...', '', 'mainNotification');
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
    $.ajax({
      type: 'post',
      url: location.href,
      data: {
        'name': $('#id_name').val(),
        'email': $('#id_email').val(),
        'phone': $('#id_phone').val(),
        'company_name': $('#id_company_name').val(),
        'message': $('#contactUsMessage').val()
      },
      cache: false,
      dataType: 'json',
      headers: {
        'X-CSRFToken': csrf_token
      },
      success: function(data) {
        if (data.success) {
          console.log('SUCCSESS');
          hideGNotification('mainNotification');
          showGNotification('success', ' Thanks for your message!', '', 'mainNotification');
          $('html, body').animate({
            scrollTop: 0
          }, 1000);
          clearForm();
        } else {
          console.log('WARNING');
          hideGNotification('mainNotification');
          showGNotification('warning', data.error, '', 'mainNotification');
          $('html, body').animate({
            scrollTop: 0
          }, 1000);
        }
      },
      error: function(data, textStatus, errorThrown) {
        console.log('ERROR');
        console.log(errorThrown);
        hideGNotification('mainNotification');
        showGNotification('error', 'Something went wrong, ', 'sorry!', 'mainNotification');
        $('html, body').animate({
          scrollTop: 0
        }, 1000);
      }
    });
    if ($(this).hasClass('info-form')) {
      $('.success-fadeout', this).addClass('active');
      $('.success-fadein', this).addClass('active');
    }
  }
});

clearForm = function() {
  $('#id_name').val('');
  $('#id_email').val('');
  $('#id_phone').val('');
  $('#id_company_name').val('');
  $('#contactUsMessage').val('');
  $('#contactUsForm').find('input').removeClass('labeled');
  $('#contactUsForm').find('i').removeClass('active');
};
