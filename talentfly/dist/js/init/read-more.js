$(document).on('click', '[data-read]', function() {
  $(this).siblings('.description.show-more').addClass('active');
  $(this).parent('.show-more').addClass('active');
  $(this).removeClass('active').addClass('hidden');
});
