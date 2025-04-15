$(document).ready ->
  	$('.interviews-list .control-box .button').magnificPopup items:
    	src: '#reschedulePopup'
    	type: 'inline'
  	return

$ '.close-modal.reschedule-popup-btn'
	.click (e)->
		clearReschedulePopupInfo()
		$.magnificPopup.close()
		return

$ '.reschedule-popup .mfp-close'
	.click (e)->
		clearReschedulePopupInfo()
		return

clearReschedulePopupInfo = ->
  $('.reschedule-popup').find('#dateSelect').val ''
  $('.reschedule-popup').find('#hourSelect').val '01'
  $('.reschedule-popup').find('#minuteSelect').val '01'
  return