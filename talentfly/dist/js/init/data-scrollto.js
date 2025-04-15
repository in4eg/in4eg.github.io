$('[data-scrollto]').click(function(e) {
  e.preventDefault();
  $('html,body').animate({
    scrollTop: $($(this).data('scrollto')).offset().top - $('.main-header').outerHeight()
  }, 500);
});
