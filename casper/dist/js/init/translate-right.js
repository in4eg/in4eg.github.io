var translateBlock;

translateBlock = function() {
  var element, elementHeight, elementOffset, elementParent, top, translateValue;
  if ($('#main-page').length > 0) {
    element = $('.translate-right');
    top = $(document).scrollTop();
    elementOffset = element.offset().top;
    elementHeight = $(window).height();
    elementParent = element.parents('.section').height();
    translateValue = elementOffset - top - elementParent;
    if (top + elementHeight > elementOffset && top < elementOffset + elementHeight && translateValue <= $(document).width() / 3 && window.innerWidth >= 641) {
      console.log;
      $('.translate-right').css({
        transform: 'translateX(-' + translateValue + 'px)'
      });
    }
  }
};

$(document).scroll(function() {
  translateBlock();
});
