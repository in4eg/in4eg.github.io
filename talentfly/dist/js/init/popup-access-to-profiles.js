var accessProfile, arrDeleteID, assignPopup, changeRole, checkCheckers, clearPopupSharing, copyClicks, getSelectedUsers, getUsersRole, renderAssignList, resetSelectedCheckers, roleSelect, selectedUsers, shareProfilesPopup;

roleSelect = $('#roleSelect')[0];

$('.close-modal').on('click', function() {
  $.magnificPopup.close();
});

$('#roleSelect').on('change', function() {
  changeRole(roleSelect);
});

changeRole = function(self) {
  if ($(self).val() === 'Interviewers') {
    $($('.common-actions *[data-dropdown-value="Assign candidate"]')[0]).css('display', 'block');
    $($('.common-actions *[data-dropdown-value="Assign interviewer"]')[0]).css('display', 'none');
  } else if ($(self).val() === 'Candidates') {
    $($('.common-actions *[data-dropdown-value="Assign candidate"]')[0]).css('display', 'none');
    $($('.common-actions *[data-dropdown-value="Assign interviewer"]')[0]).css('display', 'block');
  } else {
    $($('.common-actions *[data-dropdown-value="Assign candidate"]')[0]).css('display', 'block');
    $($('.common-actions *[data-dropdown-value="Assign interviewer"]')[0]).css('display', 'block');
  }
};


/* GENERAL ACTIONS */

selectedUsers = 0;

$('[data-general-actions] *[data-dropdown-value="Assign interviewers"]').on('click', function() {
  var data, i, linkBox, url, users, usersID;
  $('#assignPopup *[data-role]')[0].innerText = 'interviewers';
  $($(assignPopup).find('*[data-assign]')[0]).attr('data-general', 'true');
  users = getSelectedUsers();
  $('*[data-countChecked-users]')[0].innerText = users.length;
  usersID = [];
  i = 0;
  while (i < users.length) {
    usersID.push($(users[i]).attr('data-id'));
    i++;
  }
  $(assignPopup).find('.access-field').not('.hidden').remove();
  data = {};
  data.usersID = JSON.stringify(usersID);
  data.action = 'get_interviewers';
  linkBox = $('*[data-pages-link]')[0];
  url = $(linkBox).attr('data-pages-link');
  $.ajax({
    type: 'post',
    url: url,
    data: data,
    cache: false,
    dataType: 'json',
    headers: {
      'X-CSRFToken': csrf_token
    },
    success: function(data) {
      var key, obj;
      for (key in data) {
        obj = data[key];
        renderAssignList(obj);
      }
      $('#openAssignPopupLink').click();
    },
    error: function() {
      console.log('ERROR!');
    }
  });
});

$('[data-general-actions] *[data-dropdown-value="Assign candidates"]').on('click', function() {
  var data, i, linkBox, url, users, usersID;
  $('#assignPopup *[data-role]')[0].innerText = 'candidates';
  $($(assignPopup).find('*[data-assign]')[0]).attr('data-general', 'true');
  users = getSelectedUsers();
  $('*[data-countChecked-users]')[0].innerText = users.length;
  usersID = [];
  i = 0;
  while (i < users.length) {
    usersID.push($(users[i]).attr('data-id'));
    i++;
  }
  $(assignPopup).find('.access-field').not('.hidden').remove();
  data = {};
  data.usersID = JSON.stringify(usersID);
  data.action = 'get_candidates';
  linkBox = $('*[data-pages-link]')[0];
  url = $(linkBox).attr('data-pages-link');
  $.ajax({
    type: 'post',
    url: url,
    data: data,
    cache: false,
    dataType: 'json',
    headers: {
      'X-CSRFToken': csrf_token
    },
    success: function(data) {
      var key, obj;
      for (key in data) {
        obj = data[key];
        renderAssignList(obj);
      }
      $('#openAssignPopupLink').click();
    },
    error: function() {
      console.log('ERROR!');
    }
  });
});

$('#accessOneProfilePopup .access-name-input').on('input', function() {
  $(this).removeClass('input-error');
  $(this).parent().find('.error-tip').addClass('hidden');
});

$('#accessOneProfilePopup .select').on('input', function() {
  $(this).removeClass('input-error');
  $(this).parent().parent().find('.error-tip').addClass('hidden');
});

$('[data-general-actions] *[data-dropdown-value="Share profiles"]').on('click', function() {
  var i, users, usersID;
  clearPopupSharing();
  users = getSelectedUsers();
  $('*[data-countChecked-users]')[0].innerText = users.length;
  usersID = [];
  i = 0;
  while (i < users.length) {
    usersID.push($(users[i]).attr('data-id'));
    i++;
  }
  $(shareProfilesPopup).attr('data-users-id', usersID);
  $.magnificPopup.open({
    items: {
      src: '#accessFewProfilesPopup'
    }
  });
});

clearPopupSharing = function() {
  $(shareProfilesPopup).find('*[name="name"]')[0].value = '';
  $(shareProfilesPopup).find('*[name="email"]')[0].value = '';
  $(shareProfilesPopup).find('*[name="date"]')[0].value = 'Choose';
  $(shareProfilesPopup).find('.access-name-input')[2].value = '';
};

shareProfilesPopup = $('#accessFewProfilesPopup')[0];

$('*[data-share-profiles]').on('click', function() {
  var data, date, email, linkBox, name, url, usersID;
  usersID = $(shareProfilesPopup).attr('data-users-id');
  usersID = usersID.split(',');
  linkBox = $('*[data-pages-link]')[0];
  url = $(linkBox).attr('data-pages-link');
  name = $(shareProfilesPopup).find('*[name="name"]')[0];
  email = $(shareProfilesPopup).find('*[name="email"]')[0];
  date = $(shareProfilesPopup).find('*[name="date"]')[0];
  if (!isValidEmail(email.value.trim())) {
    $(email).addClass('input-error');
    $(email).parent().find('.error-tip').removeClass('hidden');
  } else {
    $(email).removeClass('input-error');
    $(email).parent().find('.error-tip').addClass('hidden');
  }
  if (name.value.length < 2) {
    $(name).addClass('input-error');
    $(name).parent().find('.error-tip').removeClass('hidden');
  } else {
    $(name).removeClass('input-error');
    $(name).parent().find('.error-tip').addClass('hidden');
  }
  if (date.value === 'Choose') {
    $(date).addClass('input-error');
    $(date).parent().parent().find('.error-tip').removeClass('hidden');
  } else {
    $(date).removeClass('input-error');
    $(date).parent().parent().find('.error-tip').addClass('hidden');
  }
  if (isValidEmail(email.value.trim()) && !(name.value.length < 2) && !(date.value === 'Choose')) {
    data = {};
    data.name = name.value;
    data.email = email.value;
    data.msg = $(shareProfilesPopup).find('*[name="message"]')[0].value;
    data.exp_date = date.value;
    data.to_share_ID = JSON.stringify(usersID);
    data.action = 'generate_links';
    $.ajax({
      type: 'post',
      url: url,
      data: data,
      cache: false,
      headers: {
        'X-CSRFToken': csrf_token
      },
      success: function(data) {
        console.log('users has been SHARED');
        resetSelectedCheckers();
        $.magnificPopup.close();
        clearPopupSharing();
      },
      error: function() {
        console.log('ERROR!');
        $.magnificPopup.close();
      }
    });
  }
});

$('[data-general-actions] [data-dropdown-value="Deactivate profiles"]').on('click', function() {
  var arrToDiactivate, arrToDiactivateID, i, items, linkBox, self, url;
  items = getSelectedUsers();
  arrToDiactivate = [];
  arrToDiactivateID = [];
  i = 0;
  while (i < items.length) {
    if ($(items[i]).hasClass('active-user')) {
      arrToDiactivate.push(items[i]);
      arrToDiactivateID.push($(items[i]).attr('data-id'));
    }
    i++;
  }
  linkBox = $('*[data-pages-link]')[0];
  url = $(linkBox).attr('data-pages-link');
  self = this;
  resetSelectedCheckers();
  $.ajax({
    type: 'post',
    url: url,
    data: {
      'arrID': JSON.stringify(arrToDiactivateID),
      'action': 'deactivate_users'
    },
    cache: false,
    dataType: 'json',
    headers: {
      'X-CSRFToken': csrf_token
    },
    success: function(data) {
      var nameBox;
      console.log('users has been DEACTIVATED');
      i = 0;
      while (i < arrToDiactivate.length) {
        $(arrToDiactivate[i]).removeClass('active-user');
        nameBox = $(arrToDiactivate[i]).find('.name')[0];
        nameBox.innerText = nameBox.innerText + ' (DEACTIVATED)';
        i++;
      }
    },
    error: function() {
      console.log('ERROR!');
    }
  });
});

$('[data-general-actions] [data-dropdown-value="Reactivate profiles"]').on('click', function() {
  var arrToReactivate, arrToReactivateID, i, items, linkBox, self, url;
  items = getSelectedUsers();
  arrToReactivate = [];
  arrToReactivateID = [];
  i = 0;
  while (i < items.length) {
    if (!$(items[i]).hasClass('active-user')) {
      arrToReactivate.push(items[i]);
      arrToReactivateID.push($(items[i]).attr('data-id'));
    }
    i++;
  }
  linkBox = $('*[data-pages-link]')[0];
  url = $(linkBox).attr('data-pages-link');
  self = this;
  $.ajax({
    type: 'post',
    url: url,
    data: {
      'arrID': JSON.stringify(arrToReactivateID),
      'action': 'activate_users'
    },
    cache: false,
    dataType: 'json',
    headers: {
      'X-CSRFToken': csrf_token
    },
    success: function(data) {
      var nameBox;
      console.log('REACTIVATED');
      i = 0;
      while (i < arrToReactivate.length) {
        $(arrToReactivate[i]).addClass('active-user');
        nameBox = $(arrToReactivate[i]).find('.name')[0];
        nameBox.innerText = nameBox.innerText.slice(0, -14);
        i++;
      }
    },
    error: function() {
      console.log('ERROR!');
    }
  });
});

$('*[data-dropdown-value="Delete items"]').on('click', function() {
  var i, items;
  items = getSelectedUsers();
  if (arrDeleteID.length) {
    arrDeleteID.length = 0;
  }
  i = 0;
  while (i < items.length) {
    arrDeleteID.push($(items[i]).attr('data-id'));
    i++;
  }
});


/* ACCESS TO A PROFILE */

$('*[data-dropdown-value="Assign interviewer"]').on('click', function() {
  var id, item, linkBox, url;
  $('#assignPopup *[data-role]')[0].innerText = 'an interviewer';
  $($(assignPopup).find('*[data-assign]')[0]).attr('data-general', 'false');
  $(assignPopup).find('.access-field').not('.hidden').remove();
  item = $(this).parents('.intrview-item')[0];
  id = $(item).attr('data-id');
  linkBox = $('*[data-pages-link]')[0];
  url = $(linkBox).attr('data-pages-link');
  $.ajax({
    type: 'post',
    url: url,
    data: {
      'id': id,
      'action': 'get_interviewers'
    },
    cache: false,
    dataType: 'json',
    headers: {
      'X-CSRFToken': csrf_token
    },
    success: function(data) {
      var key, obj;
      for (key in data) {
        obj = data[key];
        renderAssignList(obj);
      }
      $($(assignPopup).find('*[data-assign]')[0]).attr('data-user-id', id);
      $('#openAssignPopupLink').click();
    },
    error: function() {
      console.log('ERROR!');
    }
  });
});

$('*[data-dropdown-value="Assign candidate"]').on('click', function() {
  var id, item, linkBox, url;
  $('#assignPopup *[data-role]')[0].innerText = 'a candidate';
  $($(assignPopup).find('*[data-assign]')[0]).attr('data-general', 'false');
  $(assignPopup).find('.access-field').not('.hidden').remove();
  item = $(this).parents('.intrview-item')[0];
  id = $(item).attr('data-id');
  linkBox = $('*[data-pages-link]')[0];
  url = $(linkBox).attr('data-pages-link');
  $.ajax({
    type: 'post',
    url: url,
    data: {
      'id': id,
      'action': 'get_candidates'
    },
    cache: false,
    dataType: 'json',
    headers: {
      'X-CSRFToken': csrf_token
    },
    success: function(data) {
      var key, obj;
      for (key in data) {
        obj = data[key];
        renderAssignList(obj);
      }
      $($(assignPopup).find('*[data-assign]')[0]).attr('data-user-id', id);
      $('#openAssignPopupLink').click();
    },
    error: function() {
      console.log('ERROR!');
    }
  });
});

assignPopup = $('#assignPopup')[0];

renderAssignList = function(data) {
  var newItem;
  newItem = $($(assignPopup).find('*[data-root-item]')[0]).clone(true, true);
  $(newItem).removeClass('hidden');
  $(newItem).attr('data-root-id', data.id);
  $(newItem).find('*[data-checker]')[0].id = 'chooseUserPopup-' + data.id;
  $($(newItem).find('*[data-label]')[0]).attr('for', 'chooseUserPopup-' + data.id);
  $(newItem).find('*[data-full-name]')[0].innerText = data.full_name;
  $(newItem).find('*[data-position]')[0].innerText = data.position;
  $(newItem).find('*[data-id]')[0].innerText = data.id;
  $($('*[data-list]')[0]).prepend(newItem);
};

$('*[data-assign]').on('click', function() {
  var checkers, data, i, linkBox, url, userCheckers;
  linkBox = $('*[data-pages-link]')[0];
  data = {};
  data.selected = [];
  data.arrID = [];
  data.action = 'assign';
  userCheckers = $('.intrview-item .choose-user:checked');
  if ($(this).attr('data-general') === 'true') {
    console.log('general');
    i = 0;
    while (i < userCheckers.length) {
      if (userCheckers[i].checked) {
        data.arrID.push($(userCheckers[i]).attr('data-id'));
      }
      i++;
    }
  } else {
    data.arrID.push($(this).attr('data-user-id'));
  }
  checkers = $(assignPopup).find('.choose-user:checked');
  i = 0;
  while (i < checkers.length) {
    if (checkers[i].checked) {
      data.selected.push($($(checkers[i]).parents('*[data-root-id]')[0]).attr('data-root-id'));
    }
    i++;
  }
  data.arrID = JSON.stringify(data.arrID);
  data.selected = JSON.stringify(data.selected);
  $(assignPopup).find('.access-field').not('.hidden').remove();
  linkBox = $('*[data-pages-link]')[0];
  url = $(linkBox).attr('data-pages-link');
  $.ajax({
    type: 'post',
    url: url,
    data: data,
    cache: false,
    headers: {
      'X-CSRFToken': csrf_token
    },
    success: function(data) {
      console.log('SUCCESS!');
    },
    error: function() {
      $.magnificPopup.close();
      console.log('ERROR!');
    }
  });
  $.magnificPopup.close();
});

$('#assignPopup .choose-user').on('change', function() {
  var checkers, i;
  checkers = $('#assignPopup .choose-user');
  i = 0;
  while (i < checkers.length) {
    if (checkers[i].checked) {
      $('*[data-assign]').removeClass('box-disabled');
      break;
    } else {
      $('*[data-assign]').addClass('box-disabled');
    }
    i++;
  }
});

$('*[data-cancel-assign]').on('click', function() {
  $(assignPopup).find('.access-field').not('.hidden').remove();
});

accessProfile = $('#accessOneProfilePopup')[0];

$('*[data-dropdown-value="Share profile"]').on('click', function() {
  var date, i, id, item, j, name, newItem, newOption, oldItems;
  item = $(this).parents('.intrview-item')[0];
  id = $(item).attr('data-id');
  $(accessProfile).attr('data-id', id);
  name = $(item).find('.name')[0].innerText;
  $(accessProfile).find('.full-name')[0].innerText = name;
  oldItems = $(accessProfile).find('.access-field').not('.hidden');
  j = 0;
  while (j < oldItems.length) {
    $(oldItems[j]).remove();
    j++;
  }
  $.magnificPopup.open({
    items: {
      src: '#accessOneProfilePopup'
    }
  });
  i = 0;
  while (i < privateLinks[id].length) {
    newItem = $($('#placeForAccesses .access-field')[0]).clone(true, true);
    $(newItem).removeClass('hidden');
    $(newItem).find('.access-name-input')[0].value = privateLinks[id][i].name;
    date = privateLinks[id][i].date;
    if (date !== 364 && date !== 91 && date !== 30 && date !== 20 && date !== 7) {
      newOption = document.createElement('option');
      $(newOption).attr('value', date);
      newOption.innerText = date + ' days';
      $($(newItem).find('*[data-date-select]')[0]).append(newOption);
      $(newItem).find('*[data-date-select]')[0].value = date;
    } else {
      $(newItem).find('*[data-date-select]')[0].value = privateLinks[id][i].date;
    }
    $(newItem).find('.already-generated-link')[0].innerText = privateLinks[id][i].link;
    $($(newItem).find('.already-generated-link')[0]).attr('href', privateLinks[id][i].link);
    $($(newItem).find('.already-generated')[0]).removeClass('already-generated');
    $($(newItem).find('.remove-access-btn')[0]).attr('data-id', privateLinks[id][i].id);
    $($('#placeForAccesses')[0]).append(newItem);
    i++;
  }
  $('.add-access-btn').click();
});

$('.access-generate-link').on('click', function() {
  var dateBox, errorHints, id, linkBox, nameBox, self, url;
  id = $(accessProfile).attr('data-id');
  dateBox = $(this).parent().prev().find('*[data-date-select]')[0];
  nameBox = $(this).parent().prev().prev().find('.access-name-input')[0];
  errorHints = $(this).parent().parent().find('.error-tip');
  if (nameBox.value.length < 2) {
    $(errorHints[0]).removeClass('hidden');
    $(nameBox).addClass('input-error');
    if (dateBox.value === 'Choose') {
      $(errorHints[1]).removeClass('hidden');
      $(dateBox).addClass('input-error');
    } else {
      $(errorHints[1]).addClass('hidden');
      $(dateBox).removeClass('input-error');
    }
  } else if (dateBox.value === 'Choose') {
    $(errorHints[1]).removeClass('hidden');
    $(dateBox).addClass('input-error');
    $(errorHints[0]).addClass('hidden');
    $(nameBox).removeClass('input-error');
  } else {
    $(errorHints[0]).addClass('hidden');
    $(nameBox).removeClass('input-error');
    $(errorHints[1]).addClass('hidden');
    $(dateBox).removeClass('input-error');
    self = this;
    linkBox = $('*[data-pages-link]')[0];
    url = $(linkBox).attr('data-pages-link');
    $.ajax({
      type: 'post',
      url: url,
      data: {
        'id': id,
        'name': nameBox.value,
        'expiration_date': dateBox.value,
        'action': 'generate_link'
      },
      cache: false,
      headers: {
        'X-CSRFToken': csrf_token
      },
      success: function(data) {
        var newLink, newLinkContainer;
        console.log('SUCCESS!');
        $(self).parent().removeClass('already-generated');
        newLinkContainer = $(self).parent().find('.already-generated-link')[0];
        console.log(data.url);
        newLinkContainer.innerText = data.url;
        $(newLinkContainer).attr('href', data.url);
        $($(self).parent().parent().parent().parent().find('.remove-access-btn')[0]).attr('data-id', data.id);
        newLink = {};
        newLink.id = +data.id;
        newLink.name = nameBox.value;
        newLink.date = dateBox.value;
        newLink.link = data.url;
        privateLinks[id].push(newLink);
      },
      error: function() {
        console.log('ERROR!');
        self.innerText = 'ERROR';
      }
    });
  }
});

$('.remove-access-btn').on('click', function() {
  var linkBox, link_id, self, url;
  self = this;
  linkBox = $('*[data-pages-link]')[0];
  url = $(linkBox).attr('data-pages-link');
  link_id = $(this).attr('data-id');
  console.log(link_id);
  $.ajax({
    type: 'post',
    url: url,
    data: {
      'id': $(accessProfile).attr('data-id'),
      'link_id': link_id,
      'action': 'delete_link'
    },
    cache: false,
    headers: {
      'X-CSRFToken': csrf_token
    },
    success: function(data) {
      console.log('SUCCESS!');
      $(self).parent().parent().remove();
    },
    error: function() {
      console.log('ERROR!');
    }
  });
});

$('.add-access-btn').on('click', function() {
  var accessBox, newAccessRow;
  accessBox = $('#placeForAccesses')[0];
  newAccessRow = $($(accessBox).find('.access-field.row')[0]).clone(true, true);
  $(newAccessRow).removeClass('hidden');
  $(accessBox).append(newAccessRow);
});

$('*[data-dropdown-value="View Interviews"]').on('click', function() {
  window.location.href = $(this).attr('data-link');
});

$('*[data-dropdown-value="Deactivate profile"]').on('click', function() {
  var id, item, linkBox, self, url;
  item = $(this).parents('.intrview-item')[0];
  id = $(item).attr('data-id');
  linkBox = $('*[data-pages-link]')[0];
  url = $(linkBox).attr('data-pages-link');
  self = this;
  $.ajax({
    type: 'post',
    url: url,
    data: {
      'id': id,
      'action': 'deactivate_user'
    },
    cache: false,
    dataType: 'json',
    headers: {
      'X-CSRFToken': csrf_token
    },
    success: function(data) {
      var nameBox;
      console.log('DEACTIVATED');
      $(self).addClass('hidden');
      $($(self).parent().find('*[data-dropdown-value="Reactivate profile"]')[0]).removeClass('hidden');
      nameBox = $(item).find('.name')[0];
      nameBox.innerText = nameBox.innerText + ' (DEACTIVATED)';
    },
    error: function() {
      console.log('ERROR!');
    }
  });
});

$('*[data-dropdown-value="Reactivate profile"]').on('click', function() {
  var id, item, linkBox, self, url;
  item = $(this).parents('.intrview-item')[0];
  id = $(item).attr('data-id');
  linkBox = $('*[data-pages-link]')[0];
  url = $(linkBox).attr('data-pages-link');
  self = this;
  $.ajax({
    type: 'post',
    url: url,
    data: {
      'id': id,
      'action': 'activate_user'
    },
    cache: false,
    dataType: 'json',
    headers: {
      'X-CSRFToken': csrf_token
    },
    success: function(data) {
      var nameBox;
      $(item).addClass('active-user');
      console.log('REACTIVATED');
      $(self).addClass('hidden');
      $($(self).parent().find('*[data-dropdown-value="Deactivate profile"]')[0]).removeClass('hidden');
      nameBox = $(item).find('.name')[0];
      nameBox.innerText = nameBox.innerText.slice(0, -14);
    },
    error: function() {
      console.log('ERROR!');
    }
  });
});

arrDeleteID = [];

$('*[data-dropdown-value="Delete"]').on('click', function() {
  var id, item;
  item = $(this).parents('.intrview-item')[0];
  id = $(item).attr('data-id');
  if (arrDeleteID.length) {
    arrDeleteID.length = 0;
  }
  arrDeleteID.push(id);
});

$('*[data-confirm-delete]').on('click', function() {
  var linkBox, url;
  linkBox = $('*[data-pages-link]')[0];
  url = $(linkBox).attr('data-pages-link');
  $.ajax({
    type: 'post',
    url: url,
    data: {
      'id': JSON.stringify(arrDeleteID),
      'action': 'delete_users'
    },
    cache: false,
    dataType: 'json',
    headers: {
      'X-CSRFToken': csrf_token
    },
    success: function(data) {
      var page;
      console.log('DELETED');
      page = $('*[data-page-select]').val();
      dataRequest(page);
    },
    error: function() {
      console.log('ERROR!');
    }
  });
});


/* CHECKERS */

$('.intrview-item .choose-user').on('change', function() {
  var active, i, roleCounter, unactive, users;
  checkCheckers();
  users = getSelectedUsers();
  i = 0;
  active = 0;
  unactive = 0;
  while (i < users.length) {
    if ($(users[i]).hasClass('active-user')) {
      active = 1;
    } else if (!$(users[i]).hasClass('active-user')) {
      unactive = 1;
    }
    i++;
  }
  if (active && unactive) {
    $('.common-actions [data-dropdown-value="Reactivate profiles"]').addClass('hidden');
    $('.common-actions [data-dropdown-value="Deactivate profiles"]').addClass('hidden');
  } else if (active) {
    $('.common-actions [data-dropdown-value="Reactivate profiles"]').addClass('hidden');
    $('.common-actions [data-dropdown-value="Deactivate profiles"]').removeClass('hidden');
  } else {
    $('.common-actions [data-dropdown-value="Deactivate profiles"]').addClass('hidden');
    $('.common-actions [data-dropdown-value="Reactivate profiles"]').removeClass('hidden');
  }
  roleCounter = getUsersRole();
  if (!roleCounter.candidates && roleCounter.interviewers) {
    $($('[data-general-actions] [data-dropdown-value="Assign interviewers"]')[0]).addClass('hidden');
    $($('[data-general-actions] [data-dropdown-value="Assign candidates"]')[0]).removeClass('hidden');
  } else if (roleCounter.candidates && !roleCounter.interviewers) {
    $($('[data-general-actions] [data-dropdown-value="Assign candidates"]')[0]).addClass('hidden');
    $($('[data-general-actions] [data-dropdown-value="Assign interviewers"]')[0]).removeClass('hidden');
  } else {
    $($('[data-general-actions] [data-dropdown-value="Assign interviewers"]')[0]).addClass('hidden');
    $($('[data-general-actions] [data-dropdown-value="Assign candidates"]')[0]).addClass('hidden');
  }
});

checkCheckers = function() {
  var userCheckers;
  userCheckers = $('.intrview-item .choose-user:checked');
  if (userCheckers.length > 0) {
    $('.common-actions.box-disabled').removeClass('box-disabled');
  } else {
    $('.common-actions').addClass('box-disabled');
  }
};

getSelectedUsers = function() {
  var users;
  users = $('.intrview-item .choose-user:checked').parents('.intrview-item');
  return users;
};

getUsersRole = function() {
  var hasCandidate, hasInterviewer, i;
  selectedUsers = getSelectedUsers();
  hasCandidate = 0;
  hasInterviewer = 0;
  i = 0;
  while (i < selectedUsers.length) {
    if ($(selectedUsers[i]).find('.info .group')[0].innerText === 'candidate') {
      hasCandidate++;
    }
    if ($(selectedUsers[i]).find('.info .group')[0].innerText === 'interviewer') {
      hasInterviewer++;
    }
    i++;
  }
  return {
    'candidates': hasCandidate,
    'interviewers': hasInterviewer
  };
};

resetSelectedCheckers = function() {
  var checkers, i;
  checkers = $('.intrview-item .choose-user:checked');
  i = 0;
  while (i < checkers.length) {
    checkers[i].checked = false;
    i++;
  }
  $('.common-actions').addClass('box-disabled');
};

copyClicks = 0;

$('.copy-btn').on('click', function() {
  var content, range, successful;
  content = $(this).parent().prev().find('.already-generated-link');
  if (content[0].innerText) {
    content[0].innerText = window.location.protocol + '//' + window.location.host + content[0].innerText;
    range = document.createRange();
    range.selectNode(content[0]);
    window.getSelection().addRange(range);
    successful = document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }
  if (copyClicks === 0) {
    copyClicks++;
    content[0].innerText = content[0].innerText.replace(window.location.protocol + '//' + window.location.host, '');
    $(this).click();
  } else {
    copyClicks = 0;
  }
  content[0].innerText = content[0].innerText.replace(window.location.protocol + '//' + window.location.host, '');
});
