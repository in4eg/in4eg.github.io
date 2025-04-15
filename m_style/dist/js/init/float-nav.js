var element, elementPosition, updatePosition;

element = $('.aside-nav');

if (element.length) {
  elementPosition = element.offset().top;
  updatePosition = function() {
    var headerHeight, scrollPosition;
    scrollPosition = $(document).scrollTop();
    headerHeight = $('.inner-header').outerHeight();
    if ($(document).width() <= 999) {
      if (scrollPosition >= headerHeight) {
        element.addClass('fixed');
      } else {
        element.removeClass('fixed');
      }
    }
  };
  updatePosition();
  $(window).scroll(function() {
    updatePosition();
  });
  $(window).resize(function() {
    updatePosition();
  });
}
