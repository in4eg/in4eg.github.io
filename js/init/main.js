$(document).ready(function() {
  var animateHeader, intervals, intervalsSecoundPage, setBtnColor, setFooter, typeLetters, waitForFinalEvent;
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
  (animateHeader = function() {
    setTimeout((function() {
      $('.main-header').addClass('animated');
    }), 350);
    if (window.innerWidth > 640) {
      setTimeout((function() {
        $('.main-screen').addClass('animated');
      }), 450);
    }
  })();
  (typeLetters = function() {
    var div, i, interval, str;
    div = document.getElementById('printed');
    str = document.getElementById('text1').innerHTML;
    if (window.innerWidth >= 480) {
      i = 0;
      interval = setInterval((function() {
        var tempString;
        tempString = str.substr(0, i);
        if (tempString.match(/\[br\]/gim)) {
          tempString = tempString.replace(/\[br\]/gim, '<br>');
        } else if (tempString.match(/(\[br\]|\[br|\[b|\[)/gim)) {
          tempString = tempString.replace(/(\[br\]|\[br|\[b|\[)/gim, '');
        }
        div.innerHTML = tempString;
        if (i < str.length) {
          i++;
        } else {
          clearInterval(interval);
          $('#caption').addClass('in');
        }
      }), 75);
      intervals.push(interval);
    }
  })();
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
