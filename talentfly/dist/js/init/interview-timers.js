
/* TIMER */
var continueSeconds, countDown, countDownPause, countDownPaused, countDownStoped, hoursElement, minutesElement, ms, pauseTimer, resetTimer, secondsElement, showTime, startTimer, state, stopCountDown, than, timerPaused, timerSeconds, timerStoped;

ms = 0;

state = 0;

than = 0;

hoursElement = $('#hours')[0];

minutesElement = $('#minutes')[0];

secondsElement = $('#seconds')[0];

startTimer = function() {
  than = new Date();
  than.setTime(than.getTime() - ms);
  showTime();
  return state = 1;
};

pauseTimer = function() {
  var now;
  state = 0;
  now = new Date();
  return ms = now.getTime() - than.getTime();
};

resetTimer = function() {
  state = 0;
  ms = 0;
  hoursElement.innerText = '00';
  minutesElement.innerText = '00';
  return secondsElement.innerText = '00';
};

showTime = function() {
  var hours, minutes, now, outputTime, seconds;
  setTimeout("showTime();", 900);
  if (state === 1) {
    now = new Date();
    outputTime = new Date(now - than);
    seconds = outputTime.getSeconds();
    minutes = outputTime.getMinutes();
    hours = outputTime.getUTCHours();
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (hours < 10) {
      hours = '0' + hours;
    }
    hoursElement.innerText = hours;
    minutesElement.innerText = minutes;
    return secondsElement.innerText = seconds;
  }
};

timerStoped = false;

continueSeconds = 0;

countDownPaused = false;

timerPaused = false;

timerSeconds = 0;

countDownStoped = false;

stopCountDown = function() {
  timerStoped = true;
  countDownStoped = true;
};

countDownPause = function() {
  countDownPaused = true;
  timerPaused = true;
};

countDown = function(seconds, isntView) {
  var connectingBox, count, hEl, hours, min, minEl, newSpan, secEl, timeBox, timeout, timerId, timestampBox;
  if (countDownPaused) {
    countDownPaused = false;
  }
  if (timerPaused) {
    timerPaused = false;
  }
  if (timerStoped) {
    timerStoped = false;
  }
  if (countDownStoped) {
    countDownStoped = false;
  }
  if (isntView !== void 0) {
    hours = 0;
    min = 0;
    timeout = seconds * 1000 + 2000;
    while (seconds > 59) {
      seconds = seconds - 60;
      min++;
      if (min > 59) {
        min = min - 60;
        hours++;
      }
    }
    timeBox = $('#recordTime')[0];
    hEl = $(timeBox).find('#hours')[0];
    minEl = $(timeBox).find('#minutes')[0];
    secEl = $(timeBox).find('#seconds')[0];
    count = seconds;
    timerId = setInterval((function() {
      var sec;
      if (!timerStoped && !countDownPaused) {
        if (hours < 10) {
          hEl.innerText = '0' + hours;
        } else {
          hEl.innerText = hours;
        }
        if (min < 10) {
          minEl.innerText = '0' + min;
        } else {
          minEl.innerText = min;
        }
        if (count < 10) {
          secEl.innerText = '0' + count;
        } else {
          secEl.innerText = count;
        }
        if (count === 0 && min === 0 && hours !== 0) {
          count = 59;
          min = 59;
          hours--;
        }
        if (count === 0) {
          count = 59;
          if (min !== 0) {
            min--;
          }
        } else {
          count--;
        }
      } else if (countDownPaused) {
        timeout = timeout + 1000;
        min = minEl.innerText;
        sec = secEl.innerText;
        continueSeconds = +sec + min * 60;
        clearInterval(timerId);
      } else {
        clearInterval(timerId);
      }
    }), 1000);
    setTimeout((function() {
      clearInterval(timerId);
      console.log('Done.');
    }), timeout);
  } else {
    $(recordStatus).addClass('hidden');
    $(recordTime).addClass('hidden');
    timestampBox = $('.record-timestamp-box')[0];
    $(timestampBox).addClass('connecting');
    connectingBox = $('#connectingBox')[0];
    $(connectingBox).removeClass('hidden');
    connectingBox.innerText = 'Recording will start in ';
    newSpan = document.createElement('span');
    $(newSpan).css('font-weight', 'bold');
    $(newSpan).css('margin-left', '3px');
    connectingBox.appendChild(newSpan);
    count = seconds;
    timeout = seconds * 1000 + 2000;
    timerId = setInterval((function() {
      var timeBoxStatus, timeStampPreloader;
      if (countDownStoped) {
        clearInterval(timerId);
        $(recordStatus).removeClass('hidden');
        $(recordTime).removeClass('hidden');
        $(connectingBox).addClass('hidden');
        connectingBox.innerText = '';
        $(timestampBox).removeClass('connecting');
        $(newSpan).remove();
        timeStampPreloader = document.createElement('div');
        $(timeStampPreloader).attr('class', 'timestamp-preloader');
        timeBoxStatus = document.createElement('span');
        $(timeBoxStatus).attr('id', 'timeBoxStatus');
        connectingBox.appendChild(timeStampPreloader);
        connectingBox.appendChild(timeBoxStatus);
        return;
      } else if (timerPaused) {
        timerSeconds = count;
        clearInterval(timerId);
      } else {
        newSpan.innerText = count + ' sec';
        count--;
      }
    }), 1000);
    return setTimeout((function() {
      var timeBoxStatus, timeStampPreloader;
      clearInterval(timerId);
      $(recordStatus).removeClass('hidden');
      $(recordTime).removeClass('hidden');
      $(connectingBox).addClass('hidden');
      connectingBox.innerText = '';
      $(timestampBox).removeClass('connecting');
      $(newSpan).remove();
      timeStampPreloader = document.createElement('div');
      $(timeStampPreloader).attr('class', 'timestamp-preloader');
      timeBoxStatus = document.createElement('span');
      $(timeBoxStatus).attr('id', 'timeBoxStatus');
      connectingBox.appendChild(timeStampPreloader);
      connectingBox.appendChild(timeBoxStatus);
    }), timeout);
  }
};
