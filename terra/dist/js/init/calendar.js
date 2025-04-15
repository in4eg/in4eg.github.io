var Calendar, popupCalendar;

Calendar = function(calendar) {
  var choosenTime, currentDate, currentMonth, daysInMonth, dd, hh, mm, monthArr, renderDays, renderMonth, renderTime, yy;
  mm = void 0;
  dd = void 0;
  yy = void 0;
  hh = void 0;
  mm = void 0;
  choosenTime = mm + '/' + dd + '/' + yy + ';' + hh + ':' + mm;
  currentDate = new Date;
  currentMonth = currentDate.getMonth();
  monthArr = ['JAN', 'FEB', 'MÄR', 'APR', 'MAI', 'JUNI', 'JULI', 'AUG', 'SEPT', 'OKT', 'NOV', 'DEZ'];
  daysInMonth = function(month, year) {
    return new Date(year, month, 0).getDate();
  };
  renderMonth = function(currentMonth, monthArr) {
    var daysArr, i, j, len, month;
    daysArr = [];
    calendar.find('[data-month]').html(monthArr[currentMonth]);
    calendar.find('.month-list').find('li').remove();
    for (j = 0, len = monthArr.length; j < len; j++) {
      month = monthArr[j];
      calendar.find('.month-list').append('<li>' + month + '</li>');
      calendar.find('.month-list').find('li').eq(currentMonth).addClass('current');
    }
    i = 1;
    while (i <= daysInMonth(currentMonth + 1, currentDate.getFullYear())) {
      daysArr.push(i);
      i++;
    }
    renderDays(currentDate, daysArr);
  };
  renderDays = function(currentDate, daysArr) {
    var date, elem, j, len;
    calendar.find('[data-date]').find('.date').remove();
    for (elem = j = 0, len = daysArr.length; j < len; elem = ++j) {
      date = daysArr[elem];
      calendar.find('[data-date]').append('<div class="date">' + date + '</div>');
      if (typeof currentDate === 'object') {
        if (date === currentDate.getDate()) {
          calendar.find('[data-date]').find('.date').eq(elem).addClass('current');
        }
      } else {
        if (date === currentDate) {
          calendar.find('[data-date]').find('.date').eq(elem).addClass('current');
        }
      }
    }
  };
  this.renderMonth = renderMonth(currentMonth, monthArr);
  renderTime = function(hour, minutes) {
    var el, from, hourArr, i, j, k, len, len1, min, minutesArr, minutesStep, n, to;
    from = parseInt(hour.data('from') || 0);
    to = parseInt(hour.data('to') || 18);
    minutesStep = parseInt(minutes.data('step') || 5);
    hourArr = [];
    minutesArr = [];
    calendar.find('.time-select').find('span').remove();
    i = from;
    while (i <= to) {
      hourArr.push(i);
      i++;
    }
    for (j = 0, len = hourArr.length; j < len; j++) {
      el = hourArr[j];
      if (el < 10) {
        calendar.find('[data-hour]').append('<span>' + '0' + el + '</span>');
      } else {
        calendar.find('[data-hour]').append('<span>' + el + '</span>');
      }
    }
    n = 0;
    while (n < 60) {
      minutesArr.push(n);
      n += minutesStep;
    }
    for (k = 0, len1 = minutesArr.length; k < len1; k++) {
      min = minutesArr[k];
      if (min < 10) {
        calendar.find('[data-minutes]').append('<span>' + '0' + min + '</span>');
      } else {
        calendar.find('[data-minutes]').append('<span>' + min + '</span>');
      }
    }
  };
  this.renderTime = renderTime(calendar.find('.hour'), calendar.find('.minutes'));
  $(calendar).on('click', $('.date'), function(e) {
    if ($(e.target).hasClass('date')) {
      $('.date').removeClass('active');
      $(e.target).addClass('active');
      dd = $(e.target).text().trim();
    }
  });
  calendar.find('li').click(function() {
    var date, daysArr, el, elem, i, index, j, k, len, len1, month, monthName;
    calendar.find('li').removeClass('active');
    $(this).addClass('active');
    monthName = $(this).text().trim();
    calendar.find('[data-month]').html(monthName);
    index = monthArr.indexOf(monthName);
    daysArr = [];
    for (el = j = 0, len = monthArr.length; j < len; el = ++j) {
      month = monthArr[el];
      if (el === index) {
        i = 1;
        while (i <= daysInMonth(index + 1, currentDate.getFullYear())) {
          daysArr.push(i);
          i++;
        }
      }
    }
    calendar.find('[data-date]').find('.date').remove();
    for (elem = k = 0, len1 = daysArr.length; k < len1; elem = ++k) {
      date = daysArr[elem];
      calendar.find('[data-date]').append('<div class="date">' + date + '</div>');
    }
    if (index === currentMonth) {
      calendar.find('[data-date]').find('.date').eq(currentDate.getDate() - 1).addClass('current');
    }
  });
  calendar.find('.time-select').find('span').click(function() {
    var value;
    $(this).siblings('span').removeClass('active');
    $(this).addClass('active');
    value = $(this).text().trim();
    $(this).parents('.dropdown').find('.digit').html(value);
  });
  calendar.find('.place-select').find('span').click(function() {
    var value;
    $(this).siblings('span').removeClass('active');
    $(this).addClass('active');
    value = $(this).text().trim();
    $(this).parents('.dropdown').find('.digit').html(value);
  });
};

if ($('#calendar')) {
  popupCalendar = new Calendar($('#calendar'));
}
