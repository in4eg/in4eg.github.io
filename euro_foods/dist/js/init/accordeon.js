$(document).on('click', '[data-accordeon] .anchor', function() {
  $(this).parents('[data-accordeon]').toggleClass('active');
  $('[data-accordeon]').not($(this).parents('[data-accordeon]')).removeClass('active');
  if (top !== 0 && window.innerWidth <= 768) {
    if ($(this).parents('[data-accordeon]').hasClass('active')) {
      $('html,body').animate({
        scrollTop: $(this).parents('[data-accordeon]').offset().top - 60
      }, 200);
    }
  }
});
