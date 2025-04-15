if ($('[data-carousel]').length > 0) {
  $('[data-carousel]').each(function(i, slider) {
    var dotsCustom, items, margin, sliderId, speed, timeout;
    if ($.fn.owlCarousel) {
      items = $(slider).data('carousel').split(',');
      speed = $(slider).data('speed') || 3500;
      timeout = $(slider).data('timeout') || 8000;
      sliderId = $(slider).attr('id');
      if (typeof $(slider).data('margin') !== 'undefined') {
        margin = $(slider).data('margin');
      } else {
        margin = 20;
      }
      if (typeof $(slider).data('nav') !== 'undefined') {
        dotsCustom = '[data-slider="' + sliderId + '"]';
      } else {
        dotsCustom = '';
      }
      $(slider).owlCarousel({
        loop: false,
        margin: margin,
        autoplay: false,
        autoplayTimeout: timeout,
        autoplaySpeed: speed,
        nav: true,
        navText: ['<i class="icon icon-left-arrow"></i>', '<i class="icon icon-right-arrow"></i>'],
        dots: true,
        dotsContainer: dotsCustom,
        responsive: {
          0: {
            items: items[5] || 1
          },
          481: {
            items: items[4] || 1,
            dots: true
          },
          641: {
            items: items[3] || 1
          },
          767: {
            items: items[2] || 1
          },
          994: {
            items: items[1] || 1
          },
          1200: {
            items: items[0] || 1
          }
        },
        onTranslate: function(event) {
          var activeItem, elemWidth, index, offset, sliderWrap, width;
          index = event.item.index;
          sliderWrap = event.delegateTarget;
          if (typeof $(sliderWrap).data('nav') === 'string') {
            activeItem = $($(sliderWrap).data('nav')).find('[data-item]').eq(index);
            activeItem.addClass('active');
            activeItem.siblings().removeClass('active');
            width = $($(sliderWrap).data('nav')).outerWidth();
            offset = 0;
            $('[data-slider] .nav-item').each(function(i, li) {
              if ($(li).nextAll('.active').length > 0 || $(li).hasClass('active')) {
                offset += $(li).prev().outerWidth();
              }
            });
            elemWidth = $('[data-slider] .active').outerWidth();
            $('[data-slider] .nav-item').css({
              'transform': window.innerWidth <= 767 ? 'translateX(-' + (offset - elemWidth - 21) + 'px)' : 'translateX(0)'
            });
            $($(sliderWrap).data('dots')).find('.dot').removeClass('active');
            $($(sliderWrap).data('dots')).find('.dot').eq(index).addClass('active');
          }
        }
      });
      $('[data-item]').click(function() {
        $(slider).trigger('to.owl.carousel', [$(this).index(), 300]);
      });
      $(document).on('click', $(slider).data('dots') + ' > .dot', function() {
        $(slider).trigger('to.owl.carousel', [$(this).index(), 300]);
        if ($(this).index() === 0) {
          $('[data-slider] .nav-item').css({
            'transform': 'translateX(0)'
          });
        }
      });
    }
  });
}
