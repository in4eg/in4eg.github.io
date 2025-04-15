var clearReschedulePopupInfo;

$(document).ready(function() {
  $('.interviews-list .control-box .button').magnificPopup({
    items: {
      src: '#reschedulePopup',
      type: 'inline'
    }
  });
});

$('.close-modal.reschedule-popup-btn').click(function(e) {
  clearReschedulePopupInfo();
  $.magnificPopup.close();
});

$('.reschedule-popup .mfp-close').click(function(e) {
  clearReschedulePopupInfo();
});

clearReschedulePopupInfo = function() {
  $('.reschedule-popup').find('#dateSelect').val('');
  $('.reschedule-popup').find('#hourSelect').val('01');
  $('.reschedule-popup').find('#minuteSelect').val('01');
};
