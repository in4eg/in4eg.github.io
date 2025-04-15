(function($) {
  $.fn.swipeDetector = function(options) {
    var defaultSettings, pixelOffsetX, pixelOffsetY, startX, startY, swipeEnd, swipeStart, swipeState, swipeTarget, swiping;
    swipeState = 0;
    startX = 0;
    startY = 0;
    pixelOffsetX = 0;
    pixelOffsetY = 0;
    swipeTarget = this;
    defaultSettings = {
      swipeThreshold: 70,
      useOnlyTouch: false
    };
    swipeStart = function(event) {
      if (options.useOnlyTouch && !event.originalEvent.touches) {
        return;
      }
      if (event.originalEvent.touches) {
        event = event.originalEvent.touches[0];
      }
      if (swipeState === 0) {
        swipeState = 1;
        startX = event.clientX;
        startY = event.clientY;
      }
    };
    swipeEnd = function(event) {
      if (swipeState === 2) {
        swipeState = 0;
        if (Math.abs(pixelOffsetX) > Math.abs(pixelOffsetY) && Math.abs(pixelOffsetX) > options.swipeThreshold) {
          if (pixelOffsetX < 0) {
            swipeTarget.trigger($.Event('swipeLeft.sd'));
          } else {
            swipeTarget.trigger($.Event('swipeRight.sd'));
          }
        } else if (Math.abs(pixelOffsetY) > options.swipeThreshold) {
          if (pixelOffsetY < 0) {
            swipeTarget.trigger($.Event('swipeUp.sd'));
          } else {
            swipeTarget.trigger($.Event('swipeDown.sd'));
          }
        }
      }
    };
    swiping = function(event) {
      var swipeOffsetX, swipeOffsetY;
      if (swipeState !== 1) {
        return;
      }
      if (event.originalEvent.touches) {
        event = event.originalEvent.touches[0];
      }
      swipeOffsetX = event.clientX - startX;
      swipeOffsetY = event.clientY - startY;
      if (Math.abs(swipeOffsetX) > options.swipeThreshold || Math.abs(swipeOffsetY) > options.swipeThreshold) {
        swipeState = 2;
        pixelOffsetX = swipeOffsetX;
        pixelOffsetY = swipeOffsetY;
      }
    };
    (function() {
      options = $.extend(defaultSettings, options);
      swipeTarget.on('mousedown touchstart', swipeStart);
      $('html').on('mouseup touchend', swipeEnd);
      $('html').on('mousemove touchmove', swiping);
    })();
    return swipeTarget;
  };
})(jQuery);

$('[data-dots-slider]').each(function(i, slider) {
  var activeDot, dots, showActive, sliderId, total;
  sliderId = $(slider).attr('id');
  dots = $('[data-dots="#' + sliderId + '"]');
  activeDot = dots.find('.dot.active').index();
  total = $('#' + sliderId).find('[data-slide]').length;
  showActive = $('#' + sliderId).find('[data-slide].active').length;
  if (showActive > 1) {
    total = total / showActive - 1;
  } else {
    total -= 1;
  }
  $(slider).swipeDetector().on('swipeLeft.sd swipeRight.sd swipeUp.sd swipeDown.sd', function(event) {
    if (event.type === 'swipeLeft') {
      if (activeDot >= total) {
        activeDot = total;
      } else {
        activeDot++;
        dots.find('.dot').removeClass('active');
        dots.find('.dot').eq(activeDot).addClass('active');
        $('#' + sliderId).find('[data-slide]').removeClass('active');
        $('#' + sliderId).find('[data-slide="' + activeDot + '"]').addClass('active');
      }
    } else if (event.type === 'swipeRight') {
      if (activeDot <= 0) {
        activeDot = 0;
      } else {
        activeDot -= 1;
        dots.find('.dot').removeClass('active');
        dots.find('.dot').eq(activeDot).addClass('active');
        $('#' + sliderId).find('[data-slide]').removeClass('active');
        $('#' + sliderId).find('[data-slide="' + activeDot + '"]').addClass('active');
      }
    }
  });
  dots.on('click', '.dot', function() {
    var index;
    index = $(this).index();
    activeDot = index;
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $($(dots).data('dots')).find('[data-slide]').removeClass('active');
    $($(dots).data('dots')).find('[data-slide="' + activeDot + '"]').addClass('active');
  });
});

$('[data-slider]').swipeDetector().on('swipeLeft.sd swipeRight.sd swipeUp.sd swipeDown.sd', function(event) {
  if (event.type === 'swipeLeft') {
    $('[data-slider] .nav-item').css({
      'transform': 'translateX(0)'
    });
  } else if (event.type === 'swipeRight') {
    $('[data-slider] .nav-item').css({
      'transform': 'translateX(0)'
    });
  }
});

$('#mainMenu').swipeDetector().on('swipeLeft.sd swipeRight.sd swipeUp.sd swipeDown.sd', function(event) {
  if (event.type === 'swipeLeft') {
    if ($('.main-menu').hasClass('active')) {
      $('.main-menu').removeClass('active');
      $('[data-menu]').removeClass('active');
      $('.main-header').removeClass('opened');
      $('body').css('width', '').removeClass('overlayed');
    }
  }
});
