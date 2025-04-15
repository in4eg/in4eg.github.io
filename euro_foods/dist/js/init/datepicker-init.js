var timeConverter;

addEventListener('DOMContentLoaded', function() {
  var calendar, calendarTemplate, lastDate, rangeCalendar;
  calendar = $('[data-calendar]')[0];
  if (typeof calendar !== 'undefined') {
    pickmeup('[data-calendar]', {
      hide_on_select: true,
      mode: 'single',
      format: 'd.m.Y',
      calendars: 1,
      position: 'left',
      date: [new Date]
    });
    calendar.addEventListener('pickmeup-change', function(e) {
      var getDate;
      getDate = timeConverter(e.detail.formatted_date);
      $($('[data-calendar]').data('calendar')).val(getDate);
    });
    calendar.addEventListener('pickmeup-hide', function(e) {
      $('.calendar-btn').removeClass('active');
      $('.pickmeup').find('.btn-list').remove();
    });
    calendarTemplate = "<ul class=\"btn-list clear\"> <li class=\"item\"> <button class=\"btn success-btn choose-date\" type=\"button\">Применить</button> </li> <li class=\"item\"> <button type=\"button\" class=\"btn btn-simple calendar-close\">Отмена</button> </li> </ul>";
    calendar.addEventListener('pickmeup-show', function(e) {
      $('.pickmeup').append(calendarTemplate);
    });
    $('.calendar-btn').on('click', function() {
      pickmeup('[data-calendar]').show();
      $(this).addClass('active');
    });
    $(document).on('click', '.calendar-close', function() {
      pickmeup('[data-calendar]').hide();
      $(this).removeClass('active');
      $('.pickmeup').find('.btn-list').remove();
    });
    $(document).on('click', '.choose-date', function() {
      pickmeup('[data-calendar]').hide();
      $(this).removeClass('active');
    });
  }
  rangeCalendar = $('.js-range')[0];
  if (typeof rangeCalendar !== 'undefined') {
    lastDate = null;
    pickmeup('.js-range', {
      flat: true,
      format: 'd.m.Y',
      hide_on_select: true,
      mode: 'range',
      calendars: 1,
      date: [new Date]
    });
    rangeCalendar.addEventListener('pickmeup-change', function(e) {
      $('#dateFrom').val(e.detail.formatted_date[0]);
      $('#dateTo').val(e.detail.formatted_date[1]);
      lastDate = e.detail.formatted_date[1];
    });
    rangeCalendar.addEventListener('pickmeup-fill', function(e) {
      $(rangeCalendar).find('.pmu-selected').last().addClass('last-selected');
    });
  }
});

timeConverter = function(formatted) {
  var dateArr, month, monthIndex, months, time;
  dateArr = formatted.split('.');
  months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
  monthIndex = parseInt(dateArr[1] - 1);
  month = months[monthIndex];
  time = dateArr[0] + ' ' + month + ' ' + dateArr[2];
  return time;
};

$(window).resize(function() {
  $('.pickmeup').find('.btn-list').remove();
});
