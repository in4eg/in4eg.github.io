$(document).ready(function() {
  var rockets, teleport, waitForFinalEvent;
  waitForFinalEvent = (function() {
    var timers;
    timers = {};
    return function(callback, ms, uniqueId) {
      if (!uniqueId) {
        uniqueId = 'Don\'t call this twice without a uniqueId';
      }
      if (timers[uniqueId]) {
        clearTimeout(timers[uniqueId]);
      }
      timers[uniqueId] = setTimeout(callback, ms);
    };
  })();

  /*teleport */
  (teleport = function() {
    $('[data-tablet]').each(function(i, elem) {
      var parent;
      if ($(document).width() <= 992) {
        $(elem).appendTo($($(elem).data('tablet')));
      } else {
        parent = $($(elem).data('desktop'));
        $(elem).appendTo(parent);
      }
    });
    $('[data-mobile]').each(function(i, elem) {
      var parent;
      if ($(document).width() <= 768) {
        $(elem).appendTo($($(elem).data('mobile')));
      } else {
        parent = $($(elem).data('desktop'));
        $(elem).appendTo(parent);
      }
    });
  })();

  /*scrollto */
  $('[data-scrollto]').click(function(e) {
    e.preventDefault();
    if ($(this).attr('data-scroll-mobile') && window.innerWidth <= 640) {
      $('html,body').animate({
        scrollTop: $($(this).data('scroll-mobile')).offset().top
      }, 500);
      return false;
    }
    $('html,body').animate({
      scrollTop: $($(this).data('scrollto')).offset().top
    }, 500);
  });
  if (window.innerWidth <= 1199) {
    $('.timeline').perfectScrollbar();
  } else {
    $('.timeline').perfectScrollbar('destroy');
  }
  rockets = [];
  $('.section').each(function(i, section) {
    if (!rockets[i]) {
      rockets[i] = runProgressBar($('.progress', section));
    }
    if ($(document).scrollTop() + $(window).outerHeight() / 2 > $(section).offset().top) {
      $(section).addClass('active');
      rockets[i]();
    } else {
      $(section).removeClass('active');
    }
  });
  $(window).scroll(function() {
    $('.section').each(function(i, section) {
      if (!rockets[i]) {
        rockets[i] = runProgressBar($('.progress', section));
      }
      if ($(document).scrollTop() + $(window).outerHeight() / 2 > $(section).offset().top) {
        $(section).addClass('active');
        rockets[i]();
        setTimeout((function() {
          $('.casper.translate-left').addClass('animation-move');
        }), 1000);
      } else {
        $(section).removeClass('active');
      }
    });
  });
  $(window).resize(function() {
    waitForFinalEvent((function() {
      teleport();
      if (window.innerWidth <= 1199) {
        $('.timeline').perfectScrollbar();
      } else {
        $('.timeline').perfectScrollbar('destroy');
      }
    }), 200, '');
  });
});
