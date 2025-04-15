$('[data-show-more]').click(function() {
  $(this).parents('.show-more').toggleClass('active');
  $('html,body').animate({
    scrollTop: $(this).parents('.show-more').offset().top
  }, 200);
  $(this).removeClass('active');
  $(this).siblings('.more-link').addClass('active');
});
