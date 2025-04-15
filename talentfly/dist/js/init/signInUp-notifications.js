$(function() {
  var isValidEmail;
  isValidEmail = function(email) {
    var re;
    re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  $('.validate-form').on('submit', function(e) {
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
      clearPopupInfo();
      if (this.id === 'signInForm') {
        hideGNotificationIn();
        showGNotificationIn('notice', 'Please, wait...', '');
        $.ajax({
          type: 'post',
          url: $(this).attr('action'),
          data: {
            'username': $('#signInEmail').val(),
            'password': $('#signInPassword').val(),
            'remember_me': $('#signInMember').prop('checked')
          },
          cache: false,
          dataType: 'json',
          headers: {
            'X-CSRFToken': csrf_token
          },
          success: function(data) {
            if (data.success) {
              console.log('SUCCSESS');
              hideGNotificationIn();
              window.location.href = '/profile/';
            } else {
              hideGNotificationIn();
              showGNotificationIn('warning', data.error, '');
            }
          },
          error: function(data, textStatus, errorThrown) {
            console.log('ERROR');
            console.log(errorThrown);
            hideGNotificationIn();
            showGNotificationIn('error', errorThrown, '');
          }
        });
      }
      if (this.id === 'signInFormLimitAccess') {
        hideGNotification('mainNotification');
        $('#mainNotification').css({
          'width': '80%',
          'top': 'unset',
          'left': 'unset'
        });
        showGNotification('notice', 'Please, wait...', '', 'mainNotification');
        $.ajax({
          type: 'post',
          url: $(this).attr('action'),
          data: {
            'username': $('#id_username').val(),
            'password': $('#id_password').val(),
            'remember_me': $('#id_remember_me').prop('checked')
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
              window.location.href = '/profile/';
            } else {
              hideGNotification('mainNotification');
              showGNotification('warning', data.error, '', 'mainNotification');
            }
          },
          error: function(data, textStatus, errorThrown) {
            console.log('ERROR', errorThrown);
            hideGNotification('mainNotification');
            showGNotification('error', errorThrown, '', 'mainNotification');
          }
        });
      }
      if (this.id === 'signUpForm') {
        hideGNotificationUp();
        endMessage = $('#signUpForm #gEndMessage')[0];
        $(endMessage).css('display', 'inline');
        showGNotificationUp('notice', 'Please, wait...', '');
        $.ajax({
          type: 'post',
          url: $(this).attr('action'),
          data: {
            'first_name': $('#signUpFirstName').val(),
            'second_name': $('#signUpLastName').val(),
            'email': $('#signUpEmail').val(),
            'password1': $('#signUpPassword').val(),
            'business': $('#signUpMember').prop('checked')
          },
          cache: false,
          dataType: 'json',
          headers: {
            'X-CSRFToken': csrf_token
          },
          success: function(data) {
            if (data.success) {
              hideGNotificationUp();
              $(endMessage).css('display', 'block');
              showGNotificationUp('success', 'You have successfully signed up', 'Check your mail');
            } else {
              hideGNotificationUp();
              showGNotificationUp('warning', data.errors.email, '');
            }
          },
          error: function(data, textStatus, errorThrown) {
            console.log(errorThrown);
            hideGNotificationUp();
            showGNotificationUp('error', errorThrown, '');
          }
        });
      }
      if ($(this).hasClass('info-form')) {
        $('.success-fadeout', this).addClass('active');
        $('.success-fadein', this).addClass('active');
      }
    }
  });
  $('.input').on('focus keyup blur change', function() {
    if ($(this).val().trim().length !== 0) {
      $(this).addClass('labeled');
    } else {
      $(this).removeClass('labeled');
    }
  });
});
