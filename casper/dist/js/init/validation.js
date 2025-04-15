var refreshForm;

$(function() {
  var isNumber, isValidEmail;
  $('.validate-form input:not(.ignored), .validate-form textarea:not(.ignored)').on('keyup keydown change', function() {
    var errors, i, input;
    input = this;
    i = 0;
    errors = [false];
    $(input).siblings('.icon-success').removeClass('active');
    if ($(input).hasClass('email') && !isValidEmail($(input).val().trim())) {
      errors[i] = true;
      $(input).siblings('.icon-error').addClass('active');
      $(input).parents('.form-group').addClass('error');
    } else if ($(input).data('mask') && ($(input).val().trim().replace(/_/gim, '').length < $(input).data('mask').length)) {
      errors[i] = true;
      $(input).siblings('.icon-error').addClass('active');
      $(input).parents('.form-group').addClass('error');
    } else if ($(input).data('minlength') && $(input).val().trim().length < $(input).data('minlength')) {
      errors[i] = true;
      $(input).siblings('.icon-error').addClass('active');
      $(input).parents('.form-group').addClass('error');
    } else if ($(input).data('equals') && $(input).val().trim() !== $($(input).data('equals')).val().trim()) {
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
      $('.form-head').removeClass('error');
    }
  });
  isValidEmail = function(email) {
    var re;
    re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Zа-яА-ЯёЁ\-0-9]+\.)+[a-zA-Zа-яА-ЯёЁ]{2,}))$/;
    return re.test(email);
  };
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
      if ($(input).hasClass('email') && !isValidEmail($(input).val().trim())) {
        errors[i] = true;
        $(input).siblings('.icon-error').addClass('active');
        $(input).parents('.form-group').addClass('error');
      } else if ($(input).hasClass('checkbox') && $(input).prop('checked') === false) {
        errors[i] = true;
        $(input).siblings('.icon-error').addClass('active');
        $(input).parents('.form-group').addClass('error');
      } else if ($(input).data('minlength') && $(input).val().trim().length < $(input).data('minlength')) {
        errors[i] = true;
        $(input).siblings('.icon-error').addClass('active');
        $(input).parents('.form-group').addClass('error');
      } else if ($(input).data('equals') && $(input).val().trim() !== $($(input).data('equals')).val().trim()) {
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
        $('.form-head').addClass('error');
        return;
      }
    }
    if (!hasErrors) {
      e.preventDefault();
      if ($($(this).data('show')).length) {
        $(this).addClass('hidden-form');
        $($(this).data('show')).addClass('active');
        refreshForm($(this), $($(this).data('show')));
      }
      window.CallPopup($(this).data('success'));
      $(this).parents('.success-fadeout').addClass('active');
      $(this).parents('.success-fadeout').children('.success-fadein').fadeIn();
    }
  });
  $('.file-input').on('change', function() {
    $(this).next('.file-label').html(this.files[0].name);
  });
});

refreshForm = function(form, success) {
  if (form.hasClass('hidden-form')) {
    setTimeout(((function(_this) {
      return function() {
        form.removeClass('hidden-form');
        success.removeClass('active');
        form.find('.input').val('');
      };
    })(this)), 5000);
  }
};
