var allData, clearInterviewList, clearTime, clearUserList, dataRequest, gAction, months, popupDate, renderGeneralInfo, renderViewItem, reschedule, reschedulePopup;

months = {
  '12': 'Dec',
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov'
};

allData = {};

$(document).ready(function() {
  dataRequest();
});

$('#filterForm').on('submit', function(e) {
  e.preventDefault();
  dataRequest();
});

$('.btn-search').on('click', function() {
  dataRequest();
});

$('#clearBtn').on('click', function() {
  $('#countrySelect').find('option')[0].selected = true;
  $('#citySelect').find('option')[0].selected = true;
  $('#datepicker-from').val('');
  $('#datepicker-to').val('');
  dataRequest();
});

dataRequest = function(page) {
  var linkBox;
  clearInterviewList();
  linkBox = $('*[data-pages-link]')[0];
  if (!page) {
    page = $('#pagination-box').find('.active .current')[0].innerText;
  }
  $.ajax({
    type: 'post',
    url: $(linkBox).attr('data-pages-link'),
    data: {
      'country': $('#countrySelect').val(),
      'cities': $('#citySelect').val(),
      'search': $('#inputSearch').val(),
      'date-from': $('#datepicker-from').val(),
      'date-to': $('#datepicker-to').val(),
      'past_interviews': $('#pastInterviews')[0].checked,
      'page': page
    },
    cache: false,
    dataType: 'json',
    headers: {
      'X-CSRFToken': csrf_token
    },
    success: function(data) {
      var i;
      allData = data;
      if (allData.data) {
        i = 0;
        while (i < allData.data.length) {
          renderViewItem(allData.data[i]);
          i++;
        }
      }
      renderPagination(allData.page, allData.pages);
    },
    error: function() {
      console.log('Запрос не отработал!');
    }
  });
};

renderViewItem = function(data) {
  var btn, dayBox, infoBoxElement, interviewsList, locationBox, monthBox, nameBox, newItem, partOfDayBox, positionBox, rescheduleInterviewBtn, rootItem, startInterviewBtn, time, timeBox, userIdBox, warnBox, yearBox;
  interviewsList = $('.interviews-list')[0];
  rootItem = $('*[data-root-item]')[0];
  newItem = $(rootItem).clone(true, true);
  $(newItem).removeClass('hidden');
  $(newItem).attr('data-id', data.interview);
  if (data.state === 'unapproved') {
    $(newItem).addClass('already-invited-user');
    infoBoxElement = $(newItem).find('.status-already-invited')[0];
    dayBox = $(infoBoxElement).find('.day')[0];
    monthBox = $(infoBoxElement).find('.month')[0];
    yearBox = $(infoBoxElement).find('.year')[0];
    dayBox.innerText = data.invite.day;
    monthBox.innerText = data.invite.month;
    yearBox.innerText = data.invite.year;
    timeBox = $(infoBoxElement).find('.time')[0];
    time = clearTime(data.invite.time);
    timeBox.innerText = time.slice(0, 5);
    timeBox.innerText = timeBox.innerText + ' ' + time.slice(5, 8);
    renderGeneralInfo(newItem, data);
    btn = $(newItem).find('.invite-btn')[0];
    $(btn).addClass('invite-btn-disabled');
    $(btn).removeClass('open-popup-link');
    $(btn).removeClass('btn');
    $(interviewsList).append(newItem);
  } else if (data.state === 'invited') {
    $(newItem).addClass('invited-user');
    dayBox = $(newItem).find('.date .day')[0];
    monthBox = $(newItem).find('.date .month')[0];
    dayBox.innerText = data.invite.day;
    monthBox.innerText = data.invite.month;
    timeBox = $(newItem).find('.time-box .time')[0];
    partOfDayBox = $(newItem).find('.time-box .part-of-day')[0];
    time = clearTime(data.invite.time);
    timeBox.innerText = time.slice(0, 5);
    partOfDayBox.innerText = time.slice(5, 8);
    renderGeneralInfo(newItem, data);
    startInterviewBtn = $(newItem).find('.start-interview-btn')[0];
    if (data.start_url === '') {
      $(startInterviewBtn).addClass('box-disabled');
    } else {
      $(startInterviewBtn).attr('href', data.start_url);
    }
    rescheduleInterviewBtn = $(newItem).find('.reschdule-btn')[0];
    if (typeof data.invite === 'string') {
      $(rescheduleInterviewBtn).attr('data-invite-url', '/interview/invite/');
    } else {
      $(rescheduleInterviewBtn).attr('data-invite-url', '/interview/invite/');
    }
    if (data.missed_interview) {
      $(newItem).css({
        'height': '150px',
        'padding-top': '40px'
      });
      $(newItem).find('.warn-notif').css('display', 'flex');
      $(newItem).find('.warn-notif .info').html("Interview didn't take place on time.");
      $(newItem).find('.warn-notif .notif').text('Please, reschedule it');
      $(newItem).addClass('missed');
    }
    $(interviewsList).append(newItem);
  } else if (data.state === 'uninvited') {
    $(newItem).addClass('uninvited-user');
    renderGeneralInfo(newItem, data);
    if (typeof data.invite === 'string') {
      $($(newItem).find('.invite-btn')[0]).attr('data-invite-url', '/interviewer/candidates-list/invite/' + data.interview + '/');
    } else {
      $($(newItem).find('.invite-btn')[0]).attr('data-invite-url', '/interviewer/candidates-list/invite/' + data.interview + '/');
    }
    $(interviewsList).append(newItem);
  } else if (data.state === 'recorded') {
    $(newItem).addClass('already-recorded');
    renderGeneralInfo(newItem, data);
    btn = $(newItem).find('.invite-btn')[0];
    $(btn).addClass('invite-btn-disabled');
    $(btn).removeClass('open-popup-link');
    $(btn).removeClass('btn');
    $(interviewsList).append(newItem);
  } else if (data.state === 'has_offered') {
    $(newItem).addClass('has-offered-user');
    infoBoxElement = $(newItem).find('.status-already-invited')[0];
    $(infoBoxElement).find('.day')[0].innerText = data.invite.day;
    $(infoBoxElement).find('.month')[0].innerText = data.invite.month;
    $(infoBoxElement).find('.year')[0].innerText = data.invite.year;
    timeBox = $(infoBoxElement).find('.time')[0];
    time = clearTime(data.invite.time);
    timeBox.innerText = time.slice(0, 5);
    timeBox.innerText = timeBox.innerText + ' ' + time.slice(5, 8);
    renderGeneralInfo(newItem, data);
    warnBox = $(newItem).find('.warn-notif')[0];
    if (typeof data.invite !== 'string') {
      $(warnBox).find('.day')[0].innerText = data.invite.day;
      $(warnBox).find('.month')[0].innerText = data.invite.month;
      $(warnBox).find('.year')[0].innerText = data.invite.year;
      time = clearTime(data.invite.time);
      $(warnBox).find('.time')[0].innerText = time.slice(0, 5) + ' ' + time.slice(5, 8);
    }
    $($(newItem).find('*[data-accept-item]')[0]).attr('data-url', '/interview/invite/');
    $($(newItem).find('*[data-reject-item]')[0]).attr('data-url', '/interview/invite/');
    rescheduleInterviewBtn = $(newItem).find('*[data-reschedule-item]')[0];
    $(rescheduleInterviewBtn).attr('data-invite-url', '/interview/invite/');
    $(interviewsList).append(newItem);
  }
  nameBox = $(newItem).find('.name-box .name')[0];
  positionBox = $(newItem).find('.name-box .position')[0];
  locationBox = $(newItem).find('.contact-box .location')[0];
  userIdBox = $(newItem).find('.id-box .user-id')[0];
  nameBox.innerText = data.full_name;
  $(nameBox).attr('href', data.view);
  positionBox.innerText = data.position;
  locationBox.innerText = data.country + ', ' + data.city;
  userIdBox.innerText = data.id;
  $(newItem).find('.id-box .room-id')[0].innerText = data.interview;
  interviewsList = $('.interviews-list')[0];
  $(interviewsList).append(newItem);
};

clearTime = function(time) {
  var firstDecade;
  firstDecade = time.slice(0, 2);
  if (firstDecade > 12) {
    firstDecade = firstDecade - 12;
    if (firstDecade < 10) {
      firstDecade = '0' + firstDecade;
    }
    time = firstDecade + time.slice(2, 5) + ' PM';
  } else {
    time = time + ' AM';
  }
  return time;
};

renderGeneralInfo = function(newItem, data) {
  var locationBox, nameBox, positionBox, userIdBox;
  nameBox = $(newItem).find('.name-box .name')[0];
  positionBox = $(newItem).find('.name-box .position')[0];
  locationBox = $(newItem).find('.contact-box .location')[0];
  userIdBox = $(newItem).find('.id-box .user-id')[0];
  nameBox.innerText = data.full_name;
  $(nameBox).attr('href', data.view);
  positionBox.innerText = data.position;
  locationBox.innerText = data.country + ', ' + data.city;
  userIdBox.innerText = data.id;
  $(newItem).find('.id-box .room-id')[0].innerText = data.interview;
};

clearInterviewList = function() {
  var i, items;
  items = $('.intrview-item').not('.hidden');
  i = 0;
  while (i < items.length) {
    $(items[i]).remove();
    i++;
  }
};

gAction = '';

$('*[data-invite-candidate]').on('click', function() {
  $(reschedulePopup).attr('data-invite', 'invite');
  gAction = 'accepted';
});

$('*[data-reject]').on('click', function() {
  gAction = 'rejected';
});

reschedule = function(self) {
  var dataId, fullName, inviteBtn, inviteUrl;
  dataId = $(self).parent().parent().attr('data-id');
  inviteUrl = $(self).attr('data-invite-url');
  inviteBtn = $(reschedulePopup).find('.reschedule-popup-btn[type=submit]')[0];
  $(inviteBtn).attr('data-invite-url', inviteUrl);
  $(inviteBtn).attr('data-id', dataId);
  fullName = $(self).parent().parent().find('.name')[0].innerText;
  $(reschedulePopup).find('.full-name')[0].innerText = fullName;
};

reschedulePopup = $('#reschedulePopup')[0];

$('*[data-reschedule-item]').on('click', function() {
  var dataId, fullName, inviteBtn, inviteUrl;
  dataId = $(this).parent().parent().parent().parent().attr('data-id');
  inviteUrl = $(this).attr('data-invite-url');
  inviteBtn = $(reschedulePopup).find('.reschedule-popup-btn[type=submit]')[0];
  $(inviteBtn).attr('data-invite-url', inviteUrl);
  $(inviteBtn).attr('data-id', dataId);
  fullName = $(this).parent().parent().parent().parent().find('.name')[0].innerText;
  $(reschedulePopup).find('.full-name')[0].innerText = fullName;
  gAction = 'change';
  $(reschedulePopup).attr('data-invite', 'reschedule');
});

$('*[data-reschedule]').on('click', function() {
  var date, day, h, item, m, month, time, year;
  reschedule(this);
  $(reschedulePopup).attr('data-invite', 'reschedule');
  item = $(this).parent().parent();
  day = $(item).find('.date-box .day')[0].innerHTML;
  month = $(item).find('.date-box .month')[0].innerHTML;
  month = Object.keys(months).filter(function(el) {
    return months[el] === month;
  })[0];
  time = $(item).find('.time-box .time').text();
  h = time.slice(0, 2);
  m = time.slice(3, 5);
  if ($(item).find('.part-of-day')[0].innerHTML === ' PM') {
    h = +h + 12;
  }
  year = $(reschedulePopup).find('.picker__select--year').val();
  date = [];
  date.push(year);
  date.push(+month - 1);
  date.push(day);
  gAction = "change";
  $(reschedulePopup).find('#hourSelect').val(h);
  $(reschedulePopup).find('#minuteSelect').val(m);
  setTimeout((function() {
    var $input, picker;
    $input = $(reschedulePopup).find('.datepicker').pickadate();
    picker = $input.pickadate('picker');
    return picker.set('select', date);
  }), 300);
});

$('.invite-btn').on('click', function() {
  reschedule(this);
});

popupDate = '';

$('#dateSelect').on('change', function() {
  popupDate = $(this).val();
});

$('.reschedule-popup-btn[type=submit]').on('click', function() {
  var dataId, date, hours, id, minutes, url;
  if (!$(reschedulePopup).attr('data-invite')) {
    return;
  }
  $(reschedulePopup).attr('data-invite', '');
  dataId = $(this).attr('data-id');
  url = $(this).attr('data-invite-url');
  date = popupDate;
  hours = $($(reschedulePopup).find('#hourSelect')[0]).val();
  minutes = $($(reschedulePopup).find('#minuteSelect')[0]).val();
  if (date === '') {
    $($(reschedulePopup).find('#dateSelect')[0]).addClass('input-error');
    $($(reschedulePopup).find('.error-hint.hidden')[0]).removeClass('hidden');
  } else {
    id = $(this).attr('data-id');
    hours = $(reschedulePopup).find('#hourSelect')[0].value;
    minutes = $(reschedulePopup).find('#minuteSelect')[0].value;
    $.ajax({
      type: 'post',
      url: url,
      data: {
        'date': date,
        'hours': hours,
        'minutes': minutes,
        'interv_id': id,
        'action': gAction
      },
      cache: false,
      dataType: 'json',
      headers: {
        'X-CSRFToken': csrf_token
      },
      success: function(data) {
        var currentEl, i, interviewEls, notif, numberOfMonth, time;
        interviewEls = $('.intrview-item');
        i = 0;
        while (i < interviewEls.length) {
          currentEl = interviewEls[i];
          if ($(currentEl).attr('data-id') === dataId) {
            if ($(currentEl).hasClass('missed')) {
              $(currentEl).find('.warn-notif').addClass('hidden');
              $(currentEl).removeClass('invited-user');
              $(currentEl).addClass('already-invited-user');
              $(currentEl).css({
                'height': '110px',
                'padding-top': '0px'
              });
            } else if ($(currentEl).hasClass('invited-user')) {
              $(currentEl).removeClass('invited-user');
            } else if ($(currentEl).hasClass('uninvited-user')) {
              $(currentEl).removeClass('uninvited-user');
            }
            $(currentEl).addClass('already-invited-user');
            $(currentEl).removeClass('has-offered-user');
            $(currentEl).find('.invite-btn').addClass('invite-btn-disabled');
            $(currentEl).find('.invite-btn').removeClass('btn');
            $(currentEl).find('.invite-btn').removeClass('open-popup-link');
            $(currentEl).find('.invite-btn').attr('href', '');
            numberOfMonth = date.slice(0, 2);
            $(currentEl).find('.status-already-invited .day')[0].innerText = date.slice(3, 5);
            $(currentEl).find('.status-already-invited .month')[0].innerText = months[numberOfMonth];
            $(currentEl).find('.status-already-invited .year')[0].innerText = date.slice(6, data.length);
            time = hours + ':' + minutes + ' ';
            $(currentEl).find('.status-already-invited .time')[0].innerText = clearTime(time);
            break;
          }
          i++;
        }
        notif = $('*[data-interv-id="' + id + '"]');
        if (notif) {
          notif.remove();
          total.html(+total.html() - 1);
        }
      },
      error: function() {
        console.log('Запрос не отработал!');
      }
    }, $.magnificPopup.close());
  }
});

$('*[data-accept-item]').on('click', function() {
  var action, date, id, item, startBtn, time, url;
  item = $(this).parent().parent().parent().parent();
  id = $(item).attr('data-id');
  url = $(this).attr('data-url');
  date = {};
  date.day = $(item).find('.warn-notif .day')[0].innerText;
  date.month = $(item).find('.warn-notif .month')[0].innerText;
  time = $(item).find('.warn-notif .time')[0].innerText;
  if ($(item).hasClass('has-offered-user')) {
    action = 'accepted';
    url = window.location.protocol + '//' + window.location.host + '/interview/invite/';
    startBtn = $(item).find('.start-interview-btn')[0];
    $(startBtn).addClass('box-disabled');
  } else {
    action = 'accept';
  }
  $.ajax({
    type: 'post',
    url: url,
    data: {
      'action': action,
      'interv_id': id
    },
    cache: false,
    dataType: 'json',
    headers: {
      'X-CSRFToken': csrf_token
    },
    success: function(data) {
      var notif, rescheduleBtn;
      $(item).removeClass('has-offered-user');
      $(item).addClass('invited-user');
      $(item).find('.date-box .day')[0].innerText = date.day;
      $(item).find('.date-box .month')[0].innerText = date.month;
      $(item).find('.time-box .time')[0].innerText = time;
      rescheduleBtn = $(item).find('*[data-reschedule]')[0];
      if (typeof data.invite === 'string') {
        $(rescheduleBtn).attr('data-invite-url', '/interview/invite/');
      } else {
        $(rescheduleBtn).attr('data-invite-url', '/interview/invite/');
      }
      startBtn = $(item).find('.start-interview-btn')[0];
      if (data.start_url === '') {
        $(startBtn).addClass('box-disabled');
      } else {
        $(startBtn).attr('href', data.start_url);
      }
      notif = $('*[data-interv-id="' + id + '"]');
      notif.remove();
      total.html(+total.html() - 1);
    },
    error: function() {
      console.log('Запрос не отработал!');
    }
  });
});

$('*[data-reject-item]').on('click', function() {
  var date, item, time;
  item = $(this).parent().parent().parent().parent();
  date = {};
  date.day = $(item).find('.warn-notif .day')[0].innerText;
  date.month = $(item).find('.warn-notif .month')[0].innerText;
  time = $(item).find('.warn-notif .time')[0].innerText;
  $.ajax({
    type: 'post',
    url: '/interview/invite/',
    data: {
      'action': 'rejected',
      'interv_id': $(item).attr('data-id')
    },
    cache: false,
    dataType: 'json',
    headers: {
      'X-CSRFToken': csrf_token
    },
    success: function(data) {
      var inviteBtn, notif;
      $(item).removeClass('has-offered-user');
      $(item).addClass('uninvited-user');
      inviteBtn = $(item).find('.invite-btn')[0];
      if (data.invite === 'string') {
        $(inviteBtn).attr('data-invite-url', '/interview/invite/');
      } else {
        console.log('catch after reject: ', data.invite);
        $(inviteBtn).attr('data-invite-url', '/interview/invite/');
      }
      notif = $('*[data-interv-id="' + id + '"]');
      notif.remove();
      total.html(+total.html() - 1);
    },
    error: function() {
      console.log('Запрос не отработал!');
    }
  });
});

$('*[data-reject]').on('click', function() {
  var id, item;
  item = $(this).parent().parent();
  id = $(item).attr('data-id');
  $.ajax({
    type: 'post',
    url: '/interview/invite/',
    data: {
      'action': 'rejected',
      'interv_id': id
    },
    cache: false,
    dataType: 'json',
    headers: {
      'X-CSRFToken': csrf_token
    },
    success: function(data) {
      var inviteBtn;
      if ($(item).hasClass('invited-user')) {
        $(item).removeClass('invited-user');
        $(item).addClass('uninvited-user');
        if (item.hasClass('missed')) {
          $(item).css({
            'height': '110px',
            'padding-top': '0px'
          });
          $(item).find('.warn-notif').css('display', 'none');
        }
      } else {
        $(item).removeClass('already-invited-user');
        $(item).addClass('uninvited-user');
        $(item).find('.invite-btn-disabled').removeClass('invite-btn-disabled');
      }
      inviteBtn = $(item).find('.invite-btn')[0];
      $(inviteBtn).attr('data-invite-url', '/interviewer/candidates-list/invite/' + id + '/');
      $(inviteBtn).attr('href', '#reschedulePopup');
      $(inviteBtn).addClass('open-popup-link');
    },
    error: function() {
      console.log('Запрос не отработал!');
    }
  });
});

clearUserList = function() {
  var i, items;
  items = $('.intrview-item').not('.hidden');
  i = 0;
  while (i < items.length) {
    if (i !== 0) {
      $(items[i]).remove();
    }
    i++;
  }
};
