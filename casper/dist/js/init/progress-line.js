var EasingFunctions;

$('.tooltip-cover').on('click', '.close', function() {
  $(this).parents('[data-dropdown]').removeClass('active');
});

EasingFunctions = {
  linear: function(t) {
    return t;
  },
  easeInQuad: function(t) {
    return t * t;
  },
  easeOutQuad: function(t) {
    return t * (2 - t);
  },
  easeInOutQuad: function(t) {
    if (t < .5) {
      return 2 * t * t;
    } else {
      return -1 + (4 - (2 * t)) * t;
    }
  },
  easeInCubic: function(t) {
    return t * t * t;
  },
  easeOutCubic: function(t) {
    return --t * t * t + 1;
  },
  easeInOutCubic: function(t) {
    if (t < .5) {
      return 4 * t * t * t;
    } else {
      return (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
  },
  easeInQuart: function(t) {
    return t * t * t * t;
  },
  easeOutQuart: function(t) {
    return 1 - (--t * t * t * t);
  },
  easeInOutQuart: function(t) {
    if (t < .5) {
      return 8 * t * t * t * t;
    } else {
      return 1 - (8 * --t * t * t * t);
    }
  },
  easeInQuint: function(t) {
    return t * t * t * t * t;
  },
  easeOutQuint: function(t) {
    return 1 + --t * t * t * t * t;
  },
  easeInOutQuint: function(t) {
    if (t < .5) {
      return 16 * t * t * t * t * t;
    } else {
      return 1 + 16 * --t * t * t * t * t;
    }
  }
};

window.runProgressBar = function(progress) {
  var isRunning;
  isRunning = false;
  return function() {
    var line, persent, progressValue, speed, step, timerId, tokensMax, tokensPercent, tokensSold;
    if (isRunning) {
      return;
    }
    isRunning = true;
    progressValue = progress.find('progress');
    persent = progress.find('.progress-value');
    line = progress.find('.progress-bar');
    speed = progress.data('speed') || 0.001;
    tokensSold = progress.data('tokens-sold');
    tokensMax = progress.data('tokens-max');
    tokensPercent = Math.round(tokensSold / tokensMax * 100);
    step = 0;
    timerId = setInterval((function() {
      var calculatedPrecent;
      step += speed;
      calculatedPrecent = EasingFunctions.easeInOutCubic(step);
      progressValue.val(calculatedPrecent);
      persent.html((calculatedPrecent * tokensPercent).toFixed(0) + '%');
      line.css('width', calculatedPrecent * tokensPercent + '%');
      if (step >= 1) {
        clearInterval(timerId);
        persent.html(tokensPercent + '%');
        line.css('width', tokensPercent + '%');
      }
    }), 16.6);
  };
};
