var body, chatCloseBtn, chatContent, detectURL, inputEditMessage, interName, interNameEl, sendMessage, userName, userNameEl;

chatContent = $('.chat-content')[0];

inputEditMessage = $('#editMessage')[0];

userNameEl = $('*[data-current-user-name]')[0];

userName = $(userNameEl).attr('data-current-user-name');

interNameEl = $('*[data-interlocutor-name]')[0];

interName = $(interNameEl).attr('data-interlocutor-name');


/* MESSAGING */

sendMessage = function(currentUser, name, msg) {
  var date, h, m, message, messageBox, nameBox, sentMessageBox, time, timeBox;
  sentMessageBox = document.createElement('div');
  nameBox = document.createElement('span');
  timeBox = document.createElement('span');
  messageBox = document.createElement('p');
  $(nameBox).addClass('name');
  $(timeBox).addClass('time');
  $(messageBox).addClass('textMessage');
  if (currentUser) {
    $(sentMessageBox).addClass('sent-message');
  } else {
    $(sentMessageBox).addClass('received-message');
  }
  if (currentUser) {
    nameBox.innerText = userName;
  } else {
    nameBox.innerText = interName;
  }
  sentMessageBox.appendChild(nameBox);
  date = new Date();
  h = date.getHours();
  m = date.getMinutes();
  if (h / 10 < 1) {
    h = '0' + h;
  }
  if (m / 10 < 1) {
    m = '0' + m;
  }
  time = h + ':' + m;
  timeBox.innerText = time;
  sentMessageBox.appendChild(timeBox);
  if (msg) {
    messageBox.innerHTML = detectURL(msg);
  } else {
    message = inputEditMessage.value;
    messageBox.innerHTML = detectURL(message);
    inputEditMessage.value = '';
  }
  sentMessageBox.appendChild(messageBox);
  chatContent.appendChild(sentMessageBox);
  chatContent.scrollTop = chatContent.scrollHeight;
  return message;
};

$('#sendMessage').on('click', function() {
  var msg;
  msg = sendMessage(true, userName);
  return outgoingMessage(msg);
});

$(inputEditMessage).on('keypress', function(ev) {
  var msg;
  if (ev.keyCode === 13) {
    msg = sendMessage(true, userName);
    return outgoingMessage(msg);
  }
});

detectURL = function(text) {
  var urlRegex;
  urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function(url) {
    return '<a href="' + url + '">' + url + '</a>';
  });
};


/* DRAGGING */

body = $(document.body);

$('#chatHead').on('mousedown', function(chatEv) {
  var chatHeader, chatHeaderOffset, offset;
  $('body').attr('style', '-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;');
  $('#draggableChat').css('cursor', 'move');
  chatHeader = $(chatEv.currentTarget);
  chatHeaderOffset = chatHeader.offset();
  offset = {
    top: chatEv.pageY - chatHeaderOffset.top,
    left: chatEv.pageX - chatHeaderOffset.left
  };
  body.on('mousemove.dragChat', function(bodyEv) {
    $('#draggableChat').css({
      top: bodyEv.pageY - offset.top,
      left: bodyEv.pageX - offset.left
    });
  });
  body.on('mouseup.dragChat', function() {
    body.off('mousemove.dragChat');
    body.off('mouseup.dragChat');
    $('#draggableChat').css('cursor', 'default');
    $('body').attr('style', '');
  });
});


/* DRAGGING for TOUCH devices, need fix */

body = $(document.body);

$('#chatHead').on('touchstart', function(chatEv) {
  var chatHeader, chatHeaderOffset, offset;
  $('#draggableChat').css({
    cursor: 'move'
  });
  chatHeader = $(chatEv.currentTarget);
  chatHeaderOffset = chatHeader.offset();
  offset = {
    top: chatEv.originalEvent.touches[0].pageY - chatHeaderOffset.top,
    left: chatEv.originalEvent.touches[0].pageX - chatHeaderOffset.left
  };
  body.on('touchmove.dragChat', function(bodyEv) {
    $('#draggableChat').css({
      top: bodyEv.originalEvent.touches[0].pageY - offset.top,
      left: bodyEv.originalEvent.touches[0].pageX - offset.left
    });
  });
  body.on('touchend.dragChat', function() {
    body.off('touchmove.dragChat');
    body.off('touchend.dragChat');
    $('#draggableChat').css('cursor', 'default');
    $('body').attr('style', '');
  });
});


/* CLOSE */

chatCloseBtn = $('#chatClose')[0];

$(chatCloseBtn).on('click', function() {
  var chat, chatBtn;
  chat = $('#draggableChat')[0];
  $(chat).removeClass('showed');
  $(chat).fadeToggle(100, function() {
    return 'visible';
  });
  chatBtn = $('#chatHandler')[0];
  $(chatBtn).addClass('btn-control-on');
});


/* SCROLL */

Ps.initialize($('#chatContent')[0], {
  suppressScrollX: true
});
