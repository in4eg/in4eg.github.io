var ValidURL, fileValidation, isValidEmail;

ValidURL = function(link) {
  var pattern;
  pattern = /(http(s)?:\/\/.)/g;
  return pattern.test(link);
};

isValidEmail = function(email) {
  var re;
  re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

fileValidation = function(fileInput) {
  var allowedExtensions, filePath;
  filePath = fileInput.value;
  allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
  if (!allowedExtensions.exec(filePath)) {
    console.log('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
    fileInput.value = '';
    return false;
  } else {
    return true;
  }
};

$('[data-onsubmit]').each(function(i, form) {
  $(form).on('submit', function(e) {
    var choosenYear, currentDate, currentMonth, currentYear, data, dataId, elemId, error, errors, hasErrors, idCurrent, input, inputs, instance, isFormScrolled, j, k, l, len, len1, len2, len3, m, popupFormId, relatedBlock, scrollTarget;
    e.preventDefault();
    errors = [false, false];
    isFormScrolled = false;
    scrollTarget = $(this).parents('.popup').length !== 0 ? $('.popup') : $('html, body');
    currentDate = new Date();
    currentMonth = currentDate.getMonth();
    choosenYear = parseInt($(form).find('[data-end]').val());
    currentYear = currentDate.getFullYear();
    $('input:not(.ignored), textarea:not(.ignored)', this).each(function(i, input) {
      $(input).siblings('.icon-success').removeClass('active');
      if ($(input).attr('id') === 'cropOutput') {
        $($(image).attr('data-output')).val(cropImage(image, cropperCoords)).trigger('change').attr('data-coord', JSON.stringify(cropperCoords));
      }
      if ($(input).hasClass('email') && !isValidEmail($(input).val().trim())) {
        errors[i] = true;
        $(input).siblings('.icon-error').addClass('active');
        $(input).parents('.form-group').addClass('error');
      } else if ($(input).hasClass('link') && !ValidURL($(input).val().trim())) {
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
      } else if ($(form).find('[data-start]').val() > $(form).find('[data-end]').val() && !$(form).find('[data-current-input]')[0].checked) {
        errors[i] = true;
        $('[data-month-select]').removeClass('error');
        $(form).find('.year-alert').removeClass('active');
        $(form).find('.month-alert').removeClass('active');
        $(form).find('[data-start]').addClass('error');
        $(form).find('[data-end]').addClass('error');
        $(form).find('.year-alert').addClass('active');
      } else if ($(form).find('[data-start]').val() === $(form).find('[data-end]').val()) {
        $('[data-year-select]').removeClass('error');
        $(form).find('.year-alert').removeClass('active');
        if ($(form).find('[data-month-start]').find('option:selected').data('number') > $(form).find('[data-month-end]').find('option:selected').data('number') && !$(form).find('[data-current-input]')[0].checked) {
          errors[i] = true;
          $(form).find('[data-month-start]').addClass('error');
          $(form).find('[data-month-end]').addClass('error');
          $(form).find('.year-alert').addClass('active');
        } else if (currentYear === choosenYear) {
          if ($(form).find('[data-month-end]').find('option:selected').data('number') > currentMonth) {
            errors[i] = true;
            $(form).find('[data-month-start]').removeClass('error');
            $(form).find('[data-month-end]').addClass('error');
            $(form).find('.year-alert').addClass('active');
            $(form).find('.month-alert').addClass('active');
          } else {
            errors[i] = false;
            $(form).find('[data-month-end]').removeClass('error');
            $(form).find('.month-alert').removeClass('active');
          }
        } else {
          errors[i] = false;
          $(form).find('[data-month-start]').removeClass('error');
          $(form).find('[data-month-end]').removeClass('error');
          $(form).find('[data-start]').removeClass('error');
          $(form).find('[data-end]').removeClass('error');
          $(form).find('.year-alert').removeClass('active');
          $(form).find('.month-alert').removeClass('active');
        }
      } else if (currentYear === choosenYear) {
        errors[i] = true;
        if ($(form).find('[data-month-end]').find('option:selected').data('number') > currentMonth) {
          $(form).find('[data-month-start]').removeClass('error');
          $(form).find('[data-month-end]').addClass('error');
          $(form).find('[data-start]').removeClass('error');
          $(form).find('.year-alert').removeClass('active');
          $(form).find('.month-alert').addClass('active');
        } else {
          errors[i] = false;
          $(form).find('[data-month-end]').removeClass('error');
          $(form).find('.month-alert').removeClass('active');
        }
      } else {
        errors[i] = false;
        $(input).siblings('.icon-error').removeClass('active');
        $(input).siblings('.icon-success').addClass('active');
        $(input).parents('.form-group').removeClass('error');
        $(form).find('[data-start]').removeClass('error');
        $(form).find('[data-end]').removeClass('error');
        $(form).find('[data-month-start]').removeClass('error');
        $(form).find('[data-month-end]').removeClass('error');
        $(form).find('.year-alert').removeClass('active');
        $(form).find('.month-alert').removeClass('active');
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
      for (instance in CKEDITOR.instances) {
        instance = instance;
        CKEDITOR.instances[instance].updateElement();
      }
      inputs = $(form).find('input, select, textarea');
      data = {};
      for (k = 0, len1 = inputs.length; k < len1; k++) {
        input = inputs[k];
        data[$(input).attr('id')] = input.type.match(/(radio|checkbox)/gim) ? $(input).prop('checked') : $(input).val();
      }
      if ($(form).hasClass('sortable-form')) {
        for (i = l = 0, len2 = inputs.length; l < len2; i = ++l) {
          input = inputs[i];
          if ($(input).attr('id').indexOf('lan') !== -1) {
            idCurrent = $(input).attr('id').replace('lan', '');
            data['sortIndex' + idCurrent] = $(input).parents('tr').index();
          }
          if ($(input).attr('id').indexOf('skillTechTitle') !== -1) {
            idCurrent = $(input).attr('id').replace('skillTechTitle', '');
            data['sortIndex' + idCurrent] = $(input).parents('tr').index();
          }
          if ($(input).attr('id').indexOf('hobbyTitle') !== -1) {
            idCurrent = $(input).attr('id').replace('hobbyTitle', '');
            data['sortIndex' + idCurrent] = $(input).parents('.block-info').index();
          }
        }
        dataId = $(form).find('[data-id]');
        popupFormId = $(form).parents('.white-popup').attr('id');
        for (i = m = 0, len3 = dataId.length; m < len3; i = ++m) {
          elemId = dataId[i];
          if (popupFormId === 'edit-technicalskills-popup') {
            idCurrent = $(elemId).attr('id').replace('skillTechTitle', '');
          } else if (popupFormId === 'edit-languages-popup') {
            idCurrent = $(elemId).attr('id').replace('lan', '');
          } else if (popupFormId === 'edit-interests-popup') {
            idCurrent = $(elemId).attr('id').replace('hobbyTitle', '');
          }
          data['blockId' + idCurrent] = $(elemId).attr('data-id');
        }
      }
      hidePopups();
      if (window[$(form).attr('data-onsubmit')]) {
        window[$(form).attr('data-onsubmit')].call(form, e, data);
        console.log(data);
      }
      if ($(form).find('[data-id]').data('id')) {
        relatedBlock = '#' + $(form).find('[data-id]').data('id');
      }
      if ($(this).hasClass('info-form')) {
        $('.success-fadeout', this).addClass('active');
        $('.success-fadein', this).addClass('active');
      } else {
        if ($.magnificPopup) {
          clearPopupInfo();
          $.magnificPopup.close();
        }
      }
    }
  });
});
