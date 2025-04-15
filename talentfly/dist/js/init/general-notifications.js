var gEndMessage, gEndMessageL, gMessage, gMessageL, gNotification, gNotificationL, gType, gTypeL, hideGNotification, hideGNotificationIn, hideGNotificationUp, showGNotification, showGNotificationIn, showGNotificationUp, unlimitedGNotification;

gNotification = $('#gNotification')[0];

if (($('#gType')[0])) {
  gType = $('#gType')[0];
}

gMessage = $('#gMessage')[0];

gEndMessage = $('#gEndMessage')[0];

showGNotification = function(type, message, endMessage, notifID) {
  hideGNotificationUp();
  if (gType) {
    gType.innerText = type;
  }
  if (notifID) {
    $('#' + notifID).addClass(type);
    $('#' + notifID).removeClass('display-none');
    if (($('#' + notifID).find('#gType')[0])) {
      console.log($('#' + notifID).find('#gType')[0]);
      gType = $('#' + notifID).find('#gType')[0];
    }
    gMessage = $('#' + notifID).find('#gMessage')[0];
    gEndMessage = $('#' + notifID).find('#gEndMessage')[0];
  } else {
    $(gNotification).addClass(type);
    $(gNotification).removeClass('display-none');
  }
  gMessage.innerText = message;
  gEndMessage.innerText = endMessage;
  if (!$($('.timestamp-preloader')[0]).hasClass('display-none')) {
    $($('.timestamp-preloader')[0]).addClass('display-none');
  }
  setTimeout((function() {
    $(gNotification).addClass('display-none');
    $(gNotification).removeClass(type);
  }), 5000);
};

unlimitedGNotification = function(message, endMessage, notifID) {
  if (notifID) {
    $('#' + notifID).addClass('notice');
  } else {
    $(gNotification).addClass('notice');
  }
  $($('#gNotification')[0]).removeClass('display-none');
  $($('.icon-info-round')[0]).addClass('display-none');
  $($('.timestamp-preloader')[0]).removeClass('display-none');
  gMessage.innerText = message;
  gEndMessage.innerText = endMessage;
};

hideGNotification = function(notifID) {
  if (!$($('.timestamp-preloader')[0]).hasClass('display-none')) {
    $($('.timestamp-preloader')[0]).addClass('display-none');
  }
  if (notifID) {
    $('#' + notifID).removeClass();
    $('#' + notifID).addClass('large-notif');
    $('#' + notifID).addClass('general-notification');
    $('#' + notifID).addClass('display-none');
  } else {
    $(gNotification).removeClass();
    $(gNotification).addClass('large-notif');
    $(gNotification).addClass('general-notification');
    $(gNotification).addClass('display-none');
  }
};

gNotificationL = $('#signUpForm #gNotification')[0];

gTypeL = $('#signUpForm #gType')[0];

gMessageL = $('#signUpForm #gMessage')[0];

gEndMessageL = $('#signUpForm #gEndMessage')[0];

showGNotificationUp = function(type, message, endMessage) {
  gMessageL.innerText = message;
  gEndMessageL.innerText = endMessage;
  $(gNotificationL).removeClass('display-none');
  $(gNotificationL).addClass(type);
};

hideGNotificationUp = function() {
  if (!$($('.timestamp-preloader')[0]).hasClass('display-none')) {
    $($('.timestamp-preloader')[0]).addClass('display-none');
  }
  $(gNotificationL).removeClass();
  $(gNotificationL).addClass('general-notification');
  $(gNotificationL).addClass('display-none');
};

showGNotificationIn = function(type, message, endMessage) {
  gMessage.innerText = message;
  gEndMessage.innerText = endMessage;
  $(gNotification).removeClass('display-none');
  $(gNotification).addClass(type);
};

hideGNotificationIn = function() {
  if (!$($('.timestamp-preloader')[0]).hasClass('display-none')) {
    $($('.timestamp-preloader')[0]).addClass('display-none');
  }
  $(gNotification).removeClass();
  $(gNotification).addClass('general-notification');
  $(gNotification).addClass('display-none');
};
