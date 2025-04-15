$(document).on('input change', '[data-characters]', function() {
  var current, total;
  current = $(this).val().length;
  total = parseInt($(this).parents('.form-group').find('.count-help').children('.count').text().trim());
  console.log(current);
  console.log(total);
  console.log(total - current);
  $(this).parents('.form-group').find('.count-help').children('.count').html(total - current);
});
