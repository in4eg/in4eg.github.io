var isValidEmail;

isValidEmail = function(email) {
  var re;
  re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

$(document).ready(function() {
  $($('#mainNotification')[0]).css('top', '4%');
  $($('#mainNotification')[0]).css('left', '7%');
  $($('#mainNotification')[0]).css('width', '86%');
  $('#signUpFormToContinue').on('submit', function(e) {
    var endMessage, error, errors, hasErrors, isFormScrolled, j, len, scrollTarget;
    e.preventDefault();
    e.stopPropagation();
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
      hideGNotification('mainNotification');
      endMessage = $($('#mainNotification')[0]).find('.end-message')[0];
      $(endMessage).css('display', 'inline');
      showGNotification('notice', 'Please, wait...', '', 'mainNotification');
      $.ajax({
        type: 'post',
        url: $(this).attr('action'),
        data: {
          'first_name': $('#id_first_name').val(),
          'second_name': $('#id_second_name').val(),
          'email': $('#id_email').val(),
          'password1': $('#id_password1').val(),
          'business': $('#id_business').prop('checked')
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
            $(endMessage).css('display', 'block');
            showGNotification('success', 'You have successfully signed up', 'Check your mail', 'mainNotification');
          } else {
            console.log('WARNING');
            hideGNotification('mainNotification');
            showGNotification('warning', data.errors.email, '', 'mainNotification');
          }
        },
        error: function(data, textStatus, errorThrown) {
          console.log('ERROR');
          console.log(errorThrown);
          hideGNotification('mainNotification');
          showGNotification('error', errorThrown, '', 'mainNotification');
        }
      });
    }
  });
});
