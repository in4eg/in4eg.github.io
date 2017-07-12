$(document).ready(function() {
  var dropDisabledClass;
  dropDisabledClass = function(plus, minus) {
    minus.removeClass('disabled');
    return plus.removeClass('disabled');
  };
  $('body').on('keydown', '.calculator input', function(e) {
    if (!isNumberKey(e)) {
      e.preventDefault();
    }
  });
  $('body').on('blur', '.calculator input', function(e) {
    if ($(this).val().trim() === '') {
      $(this).val(0).trigger('change');
    }
  });
  $('body').on('click', '.calculator .plus', function(e) {
    var calc, count, input, max, min, minus, plus;
    calc = $(this).closest('.calculator')[0];
    input = $('input', calc);
    plus = $('.plus', calc);
    minus = $('.minus', calc);
    max = $(calc).data('max' || 99);
    min = $(calc).data('min' || 1);
    count = parseInt(input.val().trim());
    dropDisabledClass(plus, minus);
    if (count < max) {
      count++;
    }
    if (count === max) {
      plus.addClass('disabled');
    }
    input.val(count).trigger('change');
  });
  $('body').on('click', '.calculator .minus', function(e) {
    var calc, count, input, max, min, minus, plus;
    calc = $(this).closest('.calculator')[0];
    input = $('input', calc);
    plus = $('.plus', calc);
    minus = $('.minus', calc);
    max = $(calc).data('max' || 99);
    min = $(calc).data('min' || 1);
    count = parseInt(input.val().trim());
    dropDisabledClass(plus, minus);
    if (count > min) {
      count--;
    }
    if (count === min) {
      minus.addClass('disabled');
    }
    input.val(count).trigger('change');
  });
});
