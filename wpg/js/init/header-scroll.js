$(document).on('scroll', function() {
  if ($(window).scrollTop() > 0) {
    $('.main-header').addClass('scrolled');
  } else {
    $('.main-header').removeClass('scrolled');
  }
});
