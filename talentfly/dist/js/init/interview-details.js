
/* SCROLL */
var allCategoriesBtn, btnsCancel, btnsCategory, btnsClose, btnsSave, cancel, candidatesBtn, interviewersBtn, showAllEls, toggleSelectedEls, views;

Ps.initialize($('#questionsBox')[0], {
  suppressScrollX: true
});

Ps.initialize($('#textBox')[0], {
  suppressScrollX: true

  /* VISIBLE ON PROFILE CHECKER */
});

$('.checkbox-label').on('click', function() {
  $.ajax({
    type: 'post',
    url: $(this).attr('data-url'),
    data: {
      'visibility_on_profile': !$(this).prev()[0].checked
    },
    cache: false,
    dataType: 'json',
    headers: {
      'X-CSRFToken': csrf_token
    },
    success: function(data) {
      var inviteBtn;
      $(item).removeClass('has-offered-user');
      $(item).addClass('uninvited-user');
      inviteBtn = $(item).find('.invite-btn')[0];
      if (typeof data.invite === 'string') {
        $(inviteBtn).attr('data-invite-url', data.invite);
      } else {
        $(inviteBtn).attr('data-invite-url', data.invite.url);
      }
    },
    error: function() {
      console.log('Запрос не отработал!');
    }
  });
});


/* CLOSE RECOGNIZED QUESTIONS */

btnsClose = $('.button-close');

btnsClose.on('click', function(ev) {
  var id, self, url;
  ev.stopPropagation();
  url = $('#questionsBox').attr('data-url');
  id = $(this).parent().attr('id');
  self = this;
  $.ajax({
    type: 'post',
    url: url,
    data: {
      'remove_question_id': id
    },
    cache: false,
    headers: {
      'X-CSRFToken': csrf_token
    },
    success: function(data) {
      var selector;
      $(self).parent().parent().remove();
      selector = "*[data-time='" + id + "']";
      $(selector).remove();
    },
    error: function() {
      console.log('Запрос не отработал!');
    }
  });
});


/* TOGGLE BETWEEN VIEW AND FORM */

views = $('.item-view');

views.on('click', function() {
  $(this).toggleClass('hide');
  $(this).next().toggleClass('hide');
  autosize.update($(this).next().find('.question-edit')[0]);
});


/* CANCEL FORM EDIT */

btnsCancel = $('.form-edit-cancel');

btnsCancel.on('click', function() {
  var editBox;
  cancel(this);
  editBox = $(this).parent().parent();
  if ($(editBox).hasClass('edit-box')) {
    $(editBox).css('width', 'auto');
  }
});


/* SAVE QUESTION */

btnsSave = $('.btn-question-save');

btnsSave.on('click', function(ev) {
  var editBox, id, line, newText, question, role;
  ev.preventDefault();
  newText = $(this).prev().prev().val();
  if ($(this).parent().prev().children().length > 1) {
    id = $(this).parent().prev().attr('id');
    question = $(this).prev().prev().val();
    $.ajax({
      type: 'post',
      url: window.location.href,
      data: {
        'edit_question': id,
        'new_question': question
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
    $(this).parent().prev().children()[0].lastElementChild.innerText = newText;
    cancel(this);
  } else {
    line = $(this).parent().parent().parent().attr('data-line');
    role = '';
    if ($(this).parent().parent().parent().hasClass('interviewer-item')) {
      role = 'interviewer';
    } else {
      role = 'candidate';
    }
    $.ajax({
      type: 'post',
      url: window.location.href,
      data: {
        'line': line,
        'change_phrase': newText,
        'person': role
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
    $(this).parent().prev().children()[0].innerText = newText;
    cancel(this);
  }
  editBox = $(this).parent().parent();
  if ($(editBox).hasClass('edit-box')) {
    $(editBox).css('width', 'auto');
  }
});

$('#textBox .play').on('click', function() {
  var seconds, timeStart;
  timeStart = $(this).prev().find('.time').text().slice(0, 8);
  timeStart = timeStart.split(':');
  seconds = (+timeStart[0]) * 60 * 60 + (+timeStart[1]) * 60 + (+timeStart[2]);
  playVideo('demo', seconds);
});


/* FILTER (NOT COMPLETED, just DOM-handle) */

btnsCategory = $('.btn-category');

interviewersBtn = $('#interviewerCategoryBtn');

candidatesBtn = $('#candidateCategoryBtn');

allCategoriesBtn = $('#allCategoryBtn');

interviewersBtn.on('click', function() {
  $(interviewersBtn).attr('disabled', 'disabled');
  $(candidatesBtn).removeAttr('disabled');
  $(allCategoriesBtn).removeAttr('disabled');
  $(this).toggleClass('btn-active');
  $(allCategoriesBtn).removeClass('btn-active');
  $(candidatesBtn).removeClass('btn-active');
  allCategoriesBtn.disabled = false;
  toggleSelectedEls('INTERVIEWER');
});

candidatesBtn.on('click', function() {
  $(candidatesBtn).attr('disabled', 'disabled');
  $(interviewersBtn).removeAttr('disabled');
  $(allCategoriesBtn).removeAttr('disabled');
  $(this).toggleClass('btn-active');
  $(allCategoriesBtn).removeClass('btn-active');
  $(interviewersBtn).removeClass('btn-active');
  allCategoriesBtn.disabled = false;
  interviewersBtn.disabled = false;
  toggleSelectedEls('CANDIDATE');
});

allCategoriesBtn.on('click', function() {
  $(allCategoriesBtn).attr('disabled', 'disabled');
  $(interviewersBtn).removeAttr('disabled');
  $(candidatesBtn).removeAttr('disabled');
  $(this).toggleClass('btn-active');
  $(interviewersBtn).removeClass('btn-active');
  $(candidatesBtn).removeClass('btn-active');
  showAllEls();
});

cancel = function(self) {
  $(self).parent().toggleClass('hide');
  $(self).parent().prev().toggleClass('hide');
};

toggleSelectedEls = function(category) {
  var hiddenEls, i, j, owners, ownersBox, visibleEls;
  owners = $('.text-item .owner');
  ownersBox = $('#textBox');
  hiddenEls = $('#textBox .text-item:hidden');
  visibleEls = $('#textBox .text-item:visible');
  if (hiddenEls.length > 0) {
    i = 0;
    while (i < hiddenEls.length) {
      $(hiddenEls[i]).css('display', 'block');
      i++;
    }
    j = 0;
    while (j < visibleEls.length) {
      $(visibleEls[j]).css('display', 'none');
      j++;
    }
  } else {
    i = 0;
    while (i < visibleEls.length) {
      if (visibleEls[i].firstElementChild.firstElementChild.firstElementChild.innerText !== category) {
        $(visibleEls[i]).css('display', 'none');
      }
      i++;
    }
  }
};

showAllEls = function() {
  var hiddenEls, i;
  hiddenEls = $('#textBox .text-item');
  i = 0;
  while (i < hiddenEls.length) {
    $(hiddenEls[i]).css('display', 'block');
    i++;
  }
};


/* AUTOSIZE TEXTARIA OF QUESTIONS */

$(document).on('ready', function() {
  var i, qDescription, questions, results;
  questions = $('.question-edit');
  i = 0;
  results = [];
  while (i < questions.length) {
    qDescription = $(questions[i]).parent().parent().find('.description');
    questions[i].value = qDescription[0].innerText;
    autosize($(questions[i]));
    $(questions[i]).css('height', '32px');
    results.push(i++);
  }
  return results;
});
