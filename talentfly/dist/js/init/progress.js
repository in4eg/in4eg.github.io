var setWidth, showCaption;

setWidth = function(progress) {
  var j, len, oneStep, percent, step, steps, totalWidth, width;
  percent = $(progress).data('complete');
  totalWidth = $(progress).width();
  width = totalWidth * percent / 100;
  steps = $(progress).find('ul').children('li');
  oneStep = 100 / (steps.length - 1);
  if (percent === 100) {
    $(progress).addClass('complete');
  } else {
    $(progress).removeClass('complete');
  }
  for (j = 0, len = steps.length; j < len; j++) {
    step = steps[j];
    if (percent === $(step).data('progress')) {
      $(step).removeClass('small').addClass('active');
      $(progress).find('.progress').addClass('point');
    } else if (percent > $(step).data('progress')) {
      $(step).addClass('active small');
      $(progress).find('.progress').removeClass('point');
    } else if (percent < $(step).data('progress')) {
      $(step).removeClass('active small');
    }
  }
  if (percent === 0) {
    $(progress).find('.progress').css('width', width + 5 + 'px');
  } else if (percent === 25) {
    $(progress).find('.progress').css('width', width + 'px');
  } else if (percent === 50) {
    $(progress).find('.progress').css('width', width - 6 + 'px');
  } else if (percent === 75) {
    $(progress).find('.progress').css('width', width - 10 + 'px');
  } else if (percent === 100) {
    $(progress).find('.progress').addClass('point-end');
    $(progress).find('.progress').css('width', width + 'px');
  } else {
    if ($(progress).find('.progress').hasClass('point-end')) {
      $(progress).find('.progress').removeClass('point-end');
    }
    $(progress).find('.progress').css('width', width + 'px');
  }
  showCaption(percent);
};

showCaption = function(percent, category) {
  var activeCaption, info;
  info = $('.arrow-card').find('.info');
  info.removeClass('active');
  if (typeof category === 'undefined') {
    activeCaption = $('.progress-bar').data('caption');
    if (activeCaption !== 'volunteering') {
      $('.arrow-card').find('.' + activeCaption).addClass('active');
      $('.arrow-card').removeClass('full');
    } else {
      $('.arrow-card').find('.full').addClass('active');
      $('.arrow-card').addClass('full');
    }
  } else {
    if (category === 'volunteering') {
      $('.arrow-card').find('.full').addClass('active');
      $('.arrow-card').addClass('full');
    } else {
      $('.arrow-card').removeClass('full');
      $('.arrow-card').find('.' + category).addClass('active');
    }
  }
};

$('.progress-bar').each(function(i, bar) {
  setWidth(bar);
  $(window).resize(function() {
    waitForFinalEvent(function() {
      setWidth(bar);
    }, 100, bar);
  });
});

Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};
