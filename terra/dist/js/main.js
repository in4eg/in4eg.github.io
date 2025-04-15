var waitForFinalEvent;

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

$(document).ready(function() {

  /*teleport */
  var setFooterHeight, teleport;
  (teleport = function() {
    $('[data-middle]').each(function(i, elem) {
      var parent;
      if (window.innerWidth <= 1199) {
        $(elem).appendTo($($(elem).data('middle')));
      } else {
        parent = $($(elem).data('desktop'));
        $(elem).appendTo(parent);
      }
    });
    $('[data-tablet]').each(function(i, elem) {
      var parent;
      if (window.innerWidth <= 950) {
        $(elem).appendTo($($(elem).data('tablet')));
      } else {
        parent = $($(elem).data('desktop'));
        $(elem).appendTo(parent);
      }
    });
    $('[data-mobile]').each(function(i, elem) {
      var parent;
      if (window.innerWidth <= 768) {
        $(elem).appendTo($($(elem).data('mobile')));
      } else {
        parent = $($(elem).data('desktop'));
        $(elem).appendTo(parent);
      }
    });
    $('[data-mobile-xs]').each(function(i, elem) {
      var parent;
      if (window.innerWidth <= 485) {
        $(elem).appendTo($($(elem).data('mobile-xs')));
      } else {
        parent = $($(elem).data('desktop'));
        $(elem).appendTo(parent);
      }
    });
    if (window.innerWidth <= 480) {
      $('#formArticle').appendTo($('#formDesktop'));
    }
  })();

  /*scrollto */
  $('[data-scrollto]').click(function(e) {
    var headerOffset;
    e.preventDefault();
    headerOffset = $('.main-header').hasClass('fixed') ? $('.main-header').outerHeight() : 0;
    $('html,body').animate({
      scrollTop: $($(this).data('scrollto')).offset().top - headerOffset
    }, 500);
  });
  setFooterHeight = function() {
    var footerHeight;
    footerHeight = $('.main-footer').outerHeight();
    $('main').css({
      paddingBottom: footerHeight + 'px'
    });
    $('.main-footer').css({
      marginTop: -footerHeight + 'px'
    });
  };
  setFooterHeight();
  $(window).resize(function() {
    waitForFinalEvent((function() {
      setFooterHeight();
      teleport();
    }), 100, '');
  });
});
