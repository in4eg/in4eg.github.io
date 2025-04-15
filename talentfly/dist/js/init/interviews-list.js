var allData, clearInterviewList, linkBox, renderViewItem, url;

allData = {};

url = '';

linkBox = $('*[data-pages-link]')[0];

$(document).ready(function() {
  url = $(linkBox).attr('data-pages-link');
  if (($('*[data-page-select]')[0])) {
    $('*[data-page-select]').val($('.current')[0].innerText);
  }
});

$('body').on('submit', '#filterForm', function(e) {
  var candidate, date_from, date_to, interviewer;
  e.preventDefault();
  e.stopPropagation();
  url = $(linkBox).attr('data-pages-link');
  interviewer = $('#interviewer').val();
  candidate = $('#candidate').val();
  date_from = $('#datepicker-from').val();
  date_to = $('#datepicker-to').val();
  $.ajax({
    type: 'get',
    url: url,
    data: {
      'interviewer': interviewer,
      'candidate': candidate,
      'date-from': date_from,
      'date-to': date_to
    },
    cache: false,
    headers: {
      'X-CSRFToken': csrf_token
    },
    success: function(data) {
      var box;
      console.log('success');
      box = $('#filterForm').parent().parent();
      if (($(box).find('.pagination')[0])) {
        $(box).find('.pagination').remove();
      }
      $(box).find('.col-xs-12.col-md-9').remove();
      $(box).append(data);
      if (($('*[data-page-select]')[0])) {
        $('*[data-page-select]').val($('.current')[0].innerText);
      }
    },
    error: function() {
      console.log('Запрос не отработал!');
    }
  });
});

$('body').on('click', '#clearBtn', function() {
  url = $(linkBox).attr('data-pages-link');
  $('#interviewer')[0].value = '';
  $('#candidate')[0].value = '';
  $('#datepicker-from')[0].value = '';
  $('#datepicker-to')[0].value = '';
  $.ajax({
    type: 'get',
    url: url,
    data: {
      'interviewer': '',
      'candidate': '',
      'date-from': '',
      'date-to': ''
    },
    cache: false,
    headers: {
      'X-CSRFToken': csrf_token
    },
    success: function(data) {
      var box;
      console.log('success');
      box = $('#filterForm').parent().parent();
      if (($(box).find('.pagination')[0])) {
        $(box).find('.pagination').remove();
      }
      $(box).find('.col-xs-12.col-md-9').remove();
      $(box).append(data);
      if (($('*[data-page-select]')[0])) {
        $('*[data-page-select]').val($('.current')[0].innerText);
      }
    },
    error: function() {
      console.log('Запрос не отработал!');
    }
  });
});

$('body').on('click', '.checkbox-label', function() {
  var id, visibility;
  id = $($(this).parents('.intrview-item')[0]).attr('data-id');
  visibility = $(this).prev()[0].checked;
  $.ajax({
    type: 'post',
    url: url,
    data: {
      'id': id,
      'visibility': !visibility
    },
    cache: false,
    headers: {
      'X-CSRFToken': csrf_token
    },
    success: function(data) {
      console.log('success');
    },
    error: function() {
      console.log('Запрос не отработал!');
    }
  });
});

$('body').on('change', '*[data-page-select]', function() {
  console.log('work');
  $.ajax({
    type: 'get',
    url: url,
    data: {
      'page': $(this).val()
    },
    cache: false,
    headers: {
      'X-CSRFToken': csrf_token
    },
    success: function(data) {
      var box;
      console.log('success');
      box = $('#filterForm').parent().parent();
      if (($(box).find('.pagination')[0])) {
        $(box).find('.pagination').remove();
      }
      $(box).find('.col-xs-12.col-md-9').remove();
      $(box).append(data);
      if (($('*[data-page-select]')[0])) {
        $('*[data-page-select]').val($('.current')[0].innerText);
      }
    },
    error: function() {
      console.log('error');
    }
  });
});

$('body').on('click', '.page-link', function(e) {
  e.preventDefault();
  $.ajax({
    type: 'get',
    url: url,
    data: {
      'page': this.innerText
    },
    cache: false,
    headers: {
      'X-CSRFToken': csrf_token
    },
    success: function(data) {
      var box;
      console.log('success');
      box = $('#filterForm').parent().parent();
      if (($(box).find('.pagination')[0])) {
        $(box).find('.pagination').remove();
      }
      $(box).find('.col-xs-12.col-md-9').remove();
      $(box).append(data);
      if (($('*[data-page-select]')[0])) {
        $('*[data-page-select]').val($('.current')[0].innerText);
      }
    },
    error: function() {
      console.log('error');
    }
  });
});

renderViewItem = function(data) {
  var checkbox, interviewsList, newItem, rootItem;
  interviewsList = $('.interviews-list')[0];
  rootItem = $('*[data-root-item]')[0];
  newItem = $(rootItem).clone(true, true);
  $(newItem).removeClass('hidden');
  $(newItem).attr('data-id', data.id);
  $(newItem).find('.interviewer .name')[0].innerText = data.interviewer.full_name;
  $(newItem).find('.interviewer .position')[0].innerText = data.interviewer.position;
  $(newItem).find('.interviewer .location')[0].innerText = data.interviewer.location;
  $(newItem).find('.candidate .name')[0].innerText = data.candidate.full_name;
  $(newItem).find('.candidate .position')[0].innerText = data.candidate.position;
  $(newItem).find('.candidate .location')[0].innerText = data.candidate.location;
  $(newItem).find('.date .inner')[0].innerText = data.intrview.month + ' ' + data.intrview.day + ', ' + data.intrview.year;
  checkbox = $(newItem).find('.checkbox-btn')[0];
  checkbox.checked = data.visible_on_profile;
  $(checkbox).attr('id', data.id);
  $($(newItem).find('.checkbox-label')[0]).attr('for', data.id);
  $($(newItem).find('*[data-edit-interview]')[0]).attr('href', data.url_to_interview);
  return $(interviewsList).append(newItem);
};

clearInterviewList = function() {
  var i, items;
  items = $('.intrview-item').not('*[data-root-item]');
  i = 0;
  console.log(items.length);
  while (i < items.length) {
    if (i !== 0) {
      $(items[i]).remove();
    }
    i++;
  }
};
