var clearPopupInfo;

$(document).on('click', '.close-helper', function() {
  $(this).parents('.helper').removeClass('active').addClass('closed');
});

$('.open-popup-link').click(function() {
  if (window.innerWidth >= 768) {
    setTimeout(((function(_this) {
      return function() {
        $($(_this).attr('href')).find('.helper:not(.closed)').addClass('active');
      };
    })(this)), 500);
  }
});

$('[data-toggle-helper]').click(function() {
  if ($($(this).data('toggle-helper')).find('.helper').hasClass('active')) {
    $($(this).data('toggle-helper')).find('.helper').removeClass('active');
  } else {
    $($(this).data('toggle-helper')).find('.helper').addClass('active');
  }
});

$(document).on('click', '.mfp-close', function() {
  clearPopupInfo();
});

$('.close-modal').click(function(e) {
  var formDataBeforeNewElementInterests;
  e.preventDefault();
  clearPopupInfo();
  $.magnificPopup.close();
  formDataBeforeNewElementInterests = void 0;
});

$('.close-window').click(function(e) {
  e.preventDefault();
  $.magnificPopup.close();
});

clearPopupInfo = function() {
  var count, counters, i, j, len, len1, option, ref, tempArray, visibleInterviews;
  $('.clear-table').find('tbody').find('tr').remove();
  $('[data-clear]').find('[data-push]').attr('data-push', '').val('');
  counters = $('[data-clear]').find('[data-characters]');
  for (i = 0, len = counters.length; i < len; i++) {
    count = counters[i];
    $(count).parent('.form-group').find('.count-help').find('.count').html($(count).attr('data-characters'));
  }
  $('.file-name').addClass('empty');
  $('#sertifPhoto').val('');
  $('#edit-certification-popup').find('.file-name').text('Your document');
  $('[data-clear]').find('[data-id]').attr('data-id', '').val('');
  $('[data-clear]').find('[data-push-href]').attr('data-push-href', '').val('');
  $('[data-clear]').find('[data-removeon]').attr('data-on-edit', '');
  $('.form-group').removeClass('error');
  $('[data-year-select]').removeClass('error');
  $('[data-month-select]').removeClass('error');
  $('.year-alert').removeClass('active');
  $('.month-alert').removeClass('active');
  $('#emailRequest').val('');
  ref = $('[data-clear]').find('[data-push]').children('option');
  for (j = 0, len1 = ref.length; j < len1; j++) {
    option = ref[j];
    option.remove();
  }
  $('[data-not-current]').removeClass('hidden');
  $('[data-clear]').find('[data-current-input]').prop('checked', false);
  $('[data-current-work]').attr('data-current-work', 'false');
  $('.success-fadeout').removeClass('active');
  $('.success-fadein').removeClass('active');
  $('#interestsBody').find('.block-info').remove();
  visibleInterviews = [];
  if ($('#changeVideo') && typeof $('#changeVideo').attr('data-visibility-id') !== 'undefined') {
    tempArray = $('#changeVideo').attr('data-visibility-id').split(',');
    tempArray.forEach(function(el) {
      var id;
      id = el.trim();
      if (id !== '') {
        visibleInterviews.push(id);
      }
    });
  }
  if ($('#interview-popup input[type=checkbox]').length > 0) {
    document.querySelectorAll('#interview-popup input[type=checkbox]').forEach(function(el) {
      var id;
      id = $(el).attr('data-id');
      if (visibleInterviews.indexOf(id) !== -1) {
        el.checked = true;
      } else {
        el.checked = false;
      }
    });
  }
};

(function() {
  if (typeof NodeList.prototype.forEach === 'function') {
    return false;
  }
  NodeList.prototype.forEach = Array.prototype.forEach;
})();

$('body').click(function(e) {
  if ($(e.target).closest('.white-popup, .popup').length === 0) {
    clearPopupInfo();
  }
});
