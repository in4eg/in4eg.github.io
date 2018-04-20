$(document).ready(function() {
  var animateHeader, intervals, intervalsSecoundPage, setFooter, typeLetters, waitForFinalEvent;
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
  })();
  (typeLetters = function() {
    var div, i, interval, str;
    div = document.getElementById('printed');
    str = document.getElementById('text1').innerHTML;
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
  $(window).resize(function() {
    waitForFinalEvent((function() {
      setFooter();
    }), 200, '');
  });
});
