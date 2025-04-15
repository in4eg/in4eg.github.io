var ProgressBar;

ProgressBar = function(canvas, time, callback, end, offset) {
  var h, obj, r, w;
  obj = {
    value: 0,
    active: false,
    callback: null,
    end: null,
    time: time || 1000,
    isPlaying: false
  };
  obj.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  w = canvas.width = Math.max(canvas.getBoundingClientRect().width, 50.1);
  h = canvas.height = Math.max(canvas.getBoundingClientRect().height, 50.1);
  r = Math.max(1, (Math.min(w, h) / 2) - 3);
  obj.set = function(val) {
    obj.value = val;
    obj.render();
  };
  (obj.render = function() {
    var ctx;
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.strokeStyle = $(canvas).data('bgcolor') || "#75c3b7";
    ctx.lineWidth = 10;
    ctx.arc(w / 2, h / 2, r - ctx.lineWidth / 2, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = $(canvas).data('color') || "#fff";
    ctx.arc(w / 2, h / 2, r - ctx.lineWidth / 2, -Math.PI / 2, Math.PI * (2 * obj.value * (1 - offset)) - Math.PI / 2);
    ctx.stroke();
  })();
  obj.start = function() {
    var deltaTime, nowTime, precent, step, thenTime;
    precent = 0;
    nowTime = deltaTime = null;
    thenTime = new Date().getTime();
    obj.isPlaying = true;
    step = function(timestamp) {
      nowTime = new Date().getTime();
      deltaTime = nowTime - thenTime;
      thenTime = nowTime;
      if (precent < 1) {
        obj.set(precent);
        precent += deltaTime / obj.time;
        if (callback) {
          callback(precent);
        } else if (obj.callback) {
          obj.callback(precent);
        }
        requestAnimationFrame(step);
      } else {
        obj.set(1);
        precent = 0;
        obj.isPlaying = false;
        if (end || obj.end) {
          setTimeout(function() {
            if (end) {
              return end();
            } else if (obj.end) {
              return obj.end();
            }
          }, 10);
        }
      }
    };
    requestAnimationFrame(step);
  };
  obj.stop = function() {
    obj.active = false;
  };
  canvas.progressBar = obj;
  return obj;
};

$('[data-countto]').each(function(i, canvas) {
  var progress;
  progress = new ProgressBar(canvas, 5000, function(precent) {
    return $(canvas).siblings('.counter').text(Math.floor($(canvas).data('countto') * precent));
  }, function() {
    return $(canvas).siblings('.counter').text($(canvas).data('countto'));
  });
  return $(window).scroll(function() {
    if ($(document).scrollTop() + $(window).outerHeight() / 2 > $(canvas).closest('.section, section').offset().top) {
      if (!progress.isPlaying && progress.value !== 1) {
        progress.start();
      }
    }
  });
});

$('[data-timeto]').each(function(i, canvas) {
  var days, hours, minutes, offset, progress, seconds, time, timeFrom, timeTo;
  timeTo = new Date($(canvas).attr('data-timeto')).getTime();
  time = timeTo - new Date().getTime();
  timeFrom = new Date($(canvas).attr('data-from')).getTime();
  offset = (timeTo - timeFrom) / timeFrom * 100;
  seconds = Math.floor(time / 1000);
  minutes = Math.floor(seconds / 60);
  hours = Math.floor(minutes / 60);
  days = Math.floor(hours / 24);
  seconds = seconds - (minutes * 60);
  progress = new ProgressBar(canvas, 5000, function(precent) {
    var counter, mask;
    counter = $(canvas).siblings('.counter');
    mask = counter.data('mask');
    switch (mask) {
      case '%d':
        counter.text(Math.floor(days * precent));
        break;
      case '%h':
        counter.text(Math.floor(hours * precent));
        break;
      case '%m':
        counter.text(Math.floor(minutes * precent));
        break;
    }
  }, function() {
    var counter, mask;
    counter = $(canvas).siblings('.counter');
    mask = counter.data('mask');
    switch (mask) {
      case '%d':
        counter.text(Math.floor(days));
        break;
      case '%h':
        counter.text(Math.floor(hours));
        break;
      case '%m':
        counter.text(Math.floor(minutes));
        break;
    }
  }, offset || 1);
  return $(window).scroll(function() {
    if ($(document).scrollTop() + $(window).outerHeight() / 2 > $(canvas).closest('.section, section').offset().top) {
      if (!progress.isPlaying && progress.value !== 1) {
        progress.start();
      }
    }
  });
});
