var offsetTop;

$('[data-open]').click(function() {
  $($(this).data('open')).addClass('active');
  setTimeout(function() {
    $('body, html').addClass('overlayed');
  }, 200);
});

$('[data-close]').click(function() {
  $($(this).data('close')).removeClass('active');
  $('body, html').removeClass('overlayed');
});

$(window).scroll(function() {
  offsetTop($('.idea-section'));
  offsetTop($('.first-card'));
  offsetTop($('.secound-card'));
  offsetTop($('.third-card'));
  offsetTop($('.pre-ito-section'));
  offsetTop($('.spaced-section'));
  offsetTop($('.ico-section'));
  offsetTop($('.advantages-section'));
  offsetTop($('.video-section'));
  offsetTop($('.command-section'));
  offsetTop($('.disclaimer-section'));
});

offsetTop = function(element) {
  var top;
  if ($('#main-page').length > 0 && element.length) {
    top = $(document).scrollTop();
    if (top >= element.offset().top) {
      $('.open-menu').removeClass().addClass('open-menu');
      if (element.hasClass('scroll-purple')) {
        $('.open-menu').addClass('purple');
      } else if (element.hasClass('scroll-yellow')) {
        $('.open-menu').addClass('yellow');
      }
    } else if (top <= $('.hero-section').height()) {
      $('.open-menu').removeClass().addClass('open-menu');
    }
  }
};

if (window.innerWidth <= 768) {
  $('.main-menu ul a').click(function() {
    $('.main-header').removeClass('active');
    $('body, html').removeClass('overlayed');
  });
}

$(window).resize(function() {
  $('.main-menu ul a').click(function() {
    $('.main-header').removeClass('active');
    $('body, html').removeClass('overlayed');
  });
});
