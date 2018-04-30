$(document).ready(function() {
  var animateHeader, intervals, intervalsSecoundPage, setBtnColor, setFooter, waitForFinalEvent;
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
  intervals = [];
  intervalsSecoundPage = [];
  animateHeader = function() {
    setTimeout((function() {
      $('.main-header').addClass('animated');
    }), 400);
    setTimeout((function() {
      $('.main-screen').addClass('animated');
    }), 550);
  };
  $(window).on('load', function() {
    animateHeader();
  });
  (setFooter = function() {
    var height;
    height = $('.main-footer').outerHeight();
    $('main').css('padding-bottom', height + 'px');
    $('.main-footer').css('margin-top', -height + 'px');
  })();
  $('[data-scrollto]').click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $($(this).data('scrollto')).offset().top
    }, 500);
  });
  (setBtnColor = function() {
    $(document).scroll(function() {
      var height;
      height = $('.main-screen').outerHeight() + $('.skew-nav').outerHeight();
      if ($(document).scrollTop() > height / 2) {
        $('.toggle-btn').addClass('colored');
      } else {
        $('.toggle-btn').removeClass('colored');
      }
    });
  })();
  $(window).resize(function() {
    waitForFinalEvent((function() {
      setFooter();
      if (window.innerWidth <= 768) {
        setBtnColor();
      }
    }), 200, '');
  });
});
