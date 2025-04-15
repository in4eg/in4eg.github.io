$('.anchor').click(function(e) {
  e.preventDefault();
  if ($(this).parent('[data-dropdown]').hasClass('active')) {
    $(this).parent('[data-dropdown]').removeClass('active');
  } else {
    $(this).parent('[data-dropdown]').addClass('active');
  }
  $(this).closest('[data-dropdown]').find('[data-catch-focus]').focus();
  if ($(this).hasClass('hidden-anchor')) {
    $(this).addClass('hidden');
  }
});
