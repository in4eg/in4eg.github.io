$(document).on('input change', '[data-to]', function() {
  var parentBlock;
  parentBlock = $(this).attr('data-to');
  $(parentBlock).html($(this).val());
});
