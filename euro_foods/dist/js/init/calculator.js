var dropDisabledClass, waitForFinalEvent;

waitForFinalEvent = (function() {
  var timers;
  timers = {};
  return function(callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = 'Don\'t call this twice without a uniqueId';
    }
    if (timers[uniqueId]) {
      clearTimeout(timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

dropDisabledClass = function(plus, minus) {
  minus.removeClass('disabled');
  return plus.removeClass('disabled');
};

$('body').on('click', '.calculator .plus', function(e) {
  var calc, count, counter, input, max, min, minus, plus;
  calc = $(this).closest('.calculator')[0];
  input = $('input', calc);
  plus = $('.plus', calc);
  minus = $('.minus', calc);
  max = $(calc).data('max' || 99);
  min = $(calc).data('min' || 1);
  counter = $(calc).siblings('[data-calculator]').find('.count');
  count = parseInt(input.val().trim());
  dropDisabledClass(plus, minus);
  if (count < max) {
    count++;
  }
  if (count === max) {
    plus.addClass('disabled');
  }
  input.val(count).trigger('change');
  if (input.val() > 0) {
    input.parents('[data-item]').addClass('selected');
    input.parents('[data-general]').addClass('choosen');
  }
});

$('body').on('click', '.calculator .minus', function(e) {
  var calc, count, counter, input, max, min, minus, plus;
  calc = $(this).closest('.calculator')[0];
  input = $('input', calc);
  plus = $('.plus', calc);
  minus = $('.minus', calc);
  max = $(calc).data('max' || 99);
  min = $(calc).data('min' || 0);
  counter = $(calc).siblings('[data-calculator]').find('.count');
  count = parseInt(input.val().trim());
  dropDisabledClass(plus, minus);
  if (count > min) {
    count--;
  }
  if (count === min) {
    minus.addClass('disabled');
  }
  input.val(count).trigger('change');
  if (input.val() < 1) {
    input.parents('[data-item]').removeClass('selected');
  }
});

$(document).on('change input', '.calculator input', function() {
  var calc, counter;
  calc = $(this).parents('.calculator');
  counter = $(calc).siblings('[data-calculator]').find('.count');
  counter.html($(this).val());
  waitForFinalEvent(((function(_this) {
    return function() {
      $(calc).removeClass('active');
      if ($(_this).val() > 0) {
        $(calc).siblings('[data-calculator].first').addClass('hidden');
        $(calc).siblings('[data-calculator].second').removeClass('hidden');
      } else {
        $(calc).siblings('[data-calculator].second').addClass('hidden');
        $(calc).siblings('[data-calculator].first').removeClass('hidden');
      }
    };
  })(this)), 900, '');
});

$(document).on('click', '[data-calculator]', function() {
  var count, counter, input;
  $(this).siblings('.calculator').addClass('active');
  counter = $(this).siblings('[data-calculator]').find('.count');
  input = $(this).siblings('.calculator').find('input');
  count = parseInt(input.val().trim());
  if ($(this).hasClass('first')) {
    count++;
    input.val(count).trigger('change');
    input.parents('[data-item]').addClass('selected');
  }
});
