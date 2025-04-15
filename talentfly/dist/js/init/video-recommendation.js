jQuery(function($) {
  var openDisclaimer;
  openDisclaimer = $('#showDisclaimer')[0];
  $(openDisclaimer).click();
});

$('*[data-save-recommendation]').on('click', function() {
  $.magnificPopup.open({
    items: {
      src: '#popupAfterRecommendation'
    },
    closeMarkup: '<button class="mfp-close btn btn-grey btn-round" title="Close (Esc)"><i class="icon icon-close"></i></button>'
  });
});

$('*[data-recommendation-sent]').on('submit', function(e) {
  var error, errors, hasErrors, isFormScrolled, j, len, scrollTarget;
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
    $.magnificPopup.open({
      items: {
        src: '#successPopup'
      }
    });
    $.ajax({
      type: 'post',
      url: location.href,
      data: {
        'name': $('#name').val(),
        'position': $('#position').val(),
        'recommendationText': $('#recommendationText').val()
      },
      cache: false,
      dataType: 'json',
      headers: {
        'X-CSRFToken': csrf_token
      },
      success: function(data) {
        if (data.success) {
          $.magnificPopup.open({
            items: {
              src: '#successPopup'
            }
          });
        } else {
          hideGNotification();
          showGNotification('warning', data.error, '');
        }
      },
      error: function(data, textStatus, errorThrown) {
        console.log(errorThrown);
        hideGNotification();
        showGNotification('error', errorThrown, '');
      }
    });
  }
});
