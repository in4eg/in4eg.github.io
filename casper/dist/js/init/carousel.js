$('.command-carousel').owlCarousel({
  loop: false,
  margin: 0,
  nav: true,
  mouseDrag: false,
  navText: ['<i class="icon icon-angle-left"></i>', '<i class="icon icon-angle-right"></i>'],
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    640: {
      items: 2,
      slideBy: 2,
      nav: false
    },
    993: {
      items: 3,
      slideBy: 3
    }
  }
});

$('[data-hover]').click(function() {
  $(this).parents('.owl-item').siblings().removeClass('index');
  $(this).parents('.owl-item').addClass('index');
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
  } else {
    $('[data-hover]').removeClass('active');
    $(this).addClass('active');
  }
});

$('[data-close]').click(function(e) {
  e.stopPropagation();
  $($(this).data('close')).removeClass('active');
});
