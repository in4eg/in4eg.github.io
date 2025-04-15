var setScrollColor;

$('.scroll-top-btn').click(function(e) {
  e.preventDefault();
  $(this).addClass('flying');
  $('html,body').animate({
    scrollTop: 0
  }, 1000);
  setTimeout(function() {
    $('.scroll-top-btn').removeClass('flying');
  }, 1010);
});

setScrollColor = function(elements) {
  var element, elementHeight, elementOffset, i, len, top, topFooter;
  if ($('#main-page').length > 0) {
    if (elements.length > 0) {
      for (i = 0, len = elements.length; i < len; i++) {
        element = elements[i];
        top = $(document).scrollTop();
        elementOffset = $(element).offset().top;
        elementHeight = $(window).height();
        topFooter = $(document).height() - $(window).height() - $('.main-footer').outerHeight() + 150;
        if (top + elementHeight > elementOffset && top < elementOffset + elementHeight / 17 - 50) {
          $(element).addClass('scrolled-set');
        } else {
          $(element).removeClass('scrolled-set');
        }
        if ($('.scrolled-set').length > 0) {
          $('.scroll-top-btn').addClass('colored');
        } else if (top > topFooter) {
          $('.scroll-top-btn').addClass('colored');
        } else {
          $('.scroll-top-btn').removeClass('colored');
        }
      }
    }
  }
};

$(document).scroll(function() {
  var top;
  setScrollColor($('.rocket-to-green'));
  top = $(document).scrollTop();
  if (top > $(document).height() / 5) {
    $('.scroll-top-btn').addClass('visible');
  } else {
    $('.scroll-top-btn').removeClass('visible');
  }
});
