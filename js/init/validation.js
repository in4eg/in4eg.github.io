$(function() {
  var isNumber;
  $('.validate-form input:not(.ignored), .validate-form textarea:not(.ignored)').on('keyup keydown change', function() {
    var errors, i, input;
    input = this;
    i = 0;
    errors = [false];
    $(input).siblings('.icon-success').removeClass('active');
    if ($(input).data('minlength') && $(input).val().trim().length < $(input).data('minlength')) {
      errors[i] = true;
      $(input).siblings('.icon-error').addClass('active');
      $(input).parents('.form-group').addClass('error');
    } else if ($(input).val().trim() === "") {
      errors[i] = true;
      $(input).siblings('.icon-error').addClass('active');
      $(input).parents('.form-group').addClass('error');
    } else if ($(input).hasClass('number') && !isNumber($(input).val().trim())) {
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
  isNumber = function(number) {
    var re;
    re = /([0-9])\w+/;
    return re.test(number);
  };
  $('.validate-form').on('submit', function(e) {
    var error, errors, hasErrors, isFormScrolled, j, len, scrollTarget;
    errors = [false, false];
    isFormScrolled = false;
    scrollTarget = $(this).parents('.popup').length !== 0 ? $('.popup') : $('html, body');
    $('input:not(.ignored), textarea:not(.ignored)', this).each(function(i, input) {
      $(input).siblings('.icon-success').removeClass('active');
      if ($(input).data('minlength') && $(input).val().trim().length < $(input).data('minlength')) {
        errors[i] = true;
        $(input).siblings('.icon-error').addClass('active');
        $(input).parents('.form-group').addClass('error');
      } else if ($(input).val().trim() === "") {
        errors[i] = true;
        $(input).siblings('.icon-error').addClass('active');
        $(input).parents('.form-group').addClass('error');
      } else if ($(input).hasClass('number') && !isNumber($(input).val().trim())) {
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
      $(this).parents('.success-fadeout').addClass('active');
      $(this).parents('.success-fadeout').children('.success-fadein').fadeIn();
    }
  });
});
