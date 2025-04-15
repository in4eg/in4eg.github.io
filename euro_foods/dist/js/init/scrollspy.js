$('.scroll-section').each(function(i, section) {
  var sectionHeidht, sectionTop, windowHeight;
  sectionHeidht = $(section).outerHeight();
  windowHeight = $(window).height();
  sectionTop = $(section).offset().top;
  $(document).scroll(function() {
    var anchor, sectionId, top;
    top = $(document).scrollTop();
    if ($(document).scrollTop() > sectionTop - sectionHeidht / 2) {
      sectionId = $(section).attr('id');
      anchor = $('[data-anchors]').find('[data-scrollto="#' + sectionId + '"]');
      $(anchor).parent('.item').addClass('active');
      $(anchor).parent('.item').siblings().removeClass('active');
    }
  });
});
