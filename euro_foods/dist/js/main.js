$(document).ready(function() {
  var teleport, waitForFinalEvent;
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
    $('[data-header]').each(function(i, elem) {
      var parent;
      if (window.innerWidth <= 1231) {
        $(elem).appendTo($($(elem).data('header')));
      } else {
        parent = $($(elem).data('desktop'));
        $(elem).appendTo(parent);
      }
    });
    $('[data-tablet]').each(function(i, elem) {
      var parent;
      if (window.innerWidth <= 993) {
        $(elem).appendTo($($(elem).data('tablet')));
      } else {
        parent = $($(elem).data('desktop'));
        $(elem).appendTo(parent);
      }
    });
    $('[data-mobile]').each(function(i, elem) {
      var parent;
      if (window.innerWidth <= 767) {
        $(elem).appendTo($($(elem).data('mobile')));
      } else {
        parent = $($(elem).data('desktop'));
        $(elem).appendTo(parent);
      }
    });
  })();

  /*scrollto */
  $('[data-scrollto]').click(function(e) {
    var headerOffset;
    e.preventDefault();
    headerOffset = $('.main-header').hasClass('fixed') ? $('.main-header').outerHeight() : 25;
    $('html,body').animate({
      scrollTop: $($(this).data('scrollto')).offset().top - headerOffset
    }, 500);
  });
  $(window).resize(function() {
    waitForFinalEvent((function() {
      teleport();
    }), 200, '');
  });
});
