var baseClasses, callEnd, callHandler, interviewVideoBox, interviewerVideoFrame, introForUser, myVideoFrame, toChangeView;

baseClasses = 'col-xs-6 col-md-6 col-lg-6';

interviewVideoBox = $('#interviewVideoBox');

myVideoFrame = $('#myVideoFrame');

interviewerVideoFrame = $('#interviewerVideoFrame');

$('#myVideoToLarge').click(function() {
  return toChangeView(interviewerVideoFrame, myVideoFrame);
});

$('#interviewerVideoToLarge').click(function() {
  return toChangeView(myVideoFrame, interviewerVideoFrame);
});

$('#interviewerVideoToSmall').click(function() {
  return toChangeView(interviewerVideoFrame, myVideoFrame);
});

$('#myVideoToSmall').click(function() {
  return toChangeView(myVideoFrame, interviewerVideoFrame);
});

toChangeView = function(small, large) {
  if (!interviewVideoBox.hasClass('flexible-mode-box')) {
    interviewVideoBox.addClass('flexible-mode-box');
  }
  if (myVideoFrame.parent().hasClass('main-video-frame') || myVideoFrame.parent().hasClass('second-video-frame')) {
    interviewVideoBox.removeClass('flexible-mode-box');
    myVideoFrame.parent().removeClass();
    myVideoFrame.parent().addClass(baseClasses);
    interviewerVideoFrame.parent().removeClass();
    return interviewerVideoFrame.parent().addClass(baseClasses);
  } else {
    large.parent().removeClass();
    large.parent().addClass('main-video-frame');
    small.parent().removeClass();
    return small.parent().addClass('second-video-frame');
  }
};

jQuery(function($) {
  var openDisclaimer;
  openDisclaimer = $('#showDisclaimer')[0];
  $(openDisclaimer).magnificPopup({
    modal: true
  });
  $(openDisclaimer).click();
});


/* FOR INTERVIEW */

if (($('#callHandler')[0])) {
  callHandler = $('#callHandler')[0];
}

if (($(callHandler)[0])) {
  $(callHandler).on('click', function() {
    var callHandlerOff, callStatus;
    callStatus = $('#callStatus')[0];
    callStatus.innerText = 'END INTERVIEW';
    callHandlerOff = $('#callHandlerOff')[0];
    $(this).addClass('hidden');
    $(callHandlerOff).removeClass('hidden');
  });
  $(callHandlerOff).on('click', function() {
    var showPopupLink;
    showPopupLink = $('#showVideoEnded')[0];
    $(showPopupLink).magnificPopup({
      modal: true
    });
    $(showPopupLink).click();
  });
}

$('#beforeStopCall').on('mousedown', function() {
  callEnd();
});

introForUser = function(show) {
  var stub;
  stub = $('.video-stub')[0];
  if (show) {
    $(stub).removeClass('hidden');
  } else {
    $(stub).addClass('hidden');
    return;
  }
};

callEnd = function() {
  var callStatus;
  callStatus = $('#callStatus')[0];
  callStatus.innerText = 'START INTERVIEW';
  $(callHandlerOff).addClass('hidden');
  $(callHandler).removeClass('hidden');
};
