if ($('#videoHandler')[0])
	videoHandler = $('#videoHandler')[0]
micHandler = $('#micHandler')[0]
speakerHandler = $('#speakerHandler')[0]
stopBtn = $('#recordingStop')[0]
recordingStatus = $('#recordingStartStatus')[0]
videoStatus = $('#videoStatus')[0]
micStatus = $('#micStatus')[0]
speakerStatus = $('#speakerStatus')[0]

recordingStart = $('#recordingStart')[0]
recordingPause = $('#recordingPause')[0]
recordingContinue = $('#recordingContinue')[0]
recordPlay = $('#recordPlay')[0]
recordPause = $('#recordPause')[0]

recordSave = $('#recordSave')[0]
recordDelete = $('#recordDelete')[0]

recordStatus = $('#recordStatus')[0]
textStatus = $('#textStatus')[0]
recordTime = $('#recordTime')[0]


if(stopBtn)
	stopBtn.disabled = true
	recordSave.disabled = true
	recordDelete.disabled = true


### STATE TRIGGERS ###
statusFinished = () ->
	$(recordStatus).removeClass('record-status-on')
	textStatus.innerText = 'Finished'
	$(recordTime).removeClass('record-time-on')
	$(recordStatus).addClass('record-status-finished')
	return


statusRecording = () ->
	$(recordStatus).addClass('record-status-on')
	textStatus.innerText = 'Recording...'
	$(recordTime).addClass('record-time-on')
	return


statusNotStarted = () ->
	$(recordStatus).removeClass()
	$(recordStatus).addClass('record-status')
	textStatus.innerText = 'Not Started'
	return



### FOR PRACTICE ###
slider = $('.interview-slider-wrapper')[0]
if( slider )
	$(recordingStart).addClass('btn-control')
	recordingStart.disabled = true

### GEAR BUTTONS VIEW ###
$('.btn-control').each (i, btn)->
	btn.addEventListener('click', ->
		if($(this).hasClass('btn-control-on'))
			$(this).removeClass('btn-control-on')
		else
			$(this).addClass('btn-control-on')
	, false)
	return

### BUTTON VIDEO ###
$(videoHandler).on 'click', ()->
	if(videoStatus)
		if(videoStatus.innerText == 'VIDEO OFF')
			videoStatus.innerText = 'Video on'
		else
			videoStatus.innerText = 'Video off'
		return

### BUTTON MIC ###
$(micHandler).on 'click', ()->
	if(micStatus)
		if(micStatus.innerText == 'MIC OFF')
			micStatus.innerText = 'MIC ON'
		else
			micStatus.innerText = 'MIC OFF'
		return

### BUTTON SPEAKER ###
$(speakerHandler).on 'click', ()->
	if(speakerStatus)
		if(speakerStatus.innerText == 'SPEAKER OFF')
			speakerStatus.innerText = 'SPEAKER ON'
		else
			speakerStatus.innerText = 'SPEAKER OFF'
		return


### BUTTON STOP ###
$(stopBtn).on 'click', ()->
	triggerStop()
	# Give a message to user
	hideGNotification()
	showGNotification('notice', 'Your video are sucsessfuly recordered.', 'Save it now!')
	return


### BUTTONS PLAY ###
$(recordingStart).on 'click', () ->	
	triggerStart('start_recording')

$(recordingPause).on 'click', () ->	
	triggerStart('pause_recording')

$(recordingContinue).on 'click', () ->	
	triggerStart('continue_recording')

$(recordPlay).on 'click', () ->	
	triggerStart('play_record')

$(recordPause).on 'click', () ->	
	triggerStart('pause_record')


### BUTTON SAVE ###
$(recordSave).on 'click', ()->
	saveRecord()

	# Give a message to user
	hideGNotification()
	showGNotification('success', 'Your video are sucsessfuly saved.', 'Watch it!')
	return


### BUTTON DELETE ###
$(recordDelete).on 'click', ()->
	this.disabled = true
	hideGNotification()
	showGNotification('notice', 'Your video are sucsessfuly deleted.', 'Let`s recording a new!')

	$(recordPlay).css('display', 'none')
	$(recordPause).css('display', 'none')
	recordSave.disabled = true
	$(recordingStart).css('display', 'block')
	recordingStatus.innerText = 'start'

	$(recordStatus).removeClass()
	$(recordStatus).addClass('record-status')
	textStatus.innerText = 'Not Started'

	if(slider)
		$(slider).removeClass('disabled-slider')
	
	# обнуляем блок с таймером
	timeBox = $('#recordTime')[0]
	hoursBox = $(timeBox).find('#hours')[0]
	if( hoursBox )
		hoursBox.innerText = '00'
		$(timeBox).find('#minutes')[0].innerText = '00'
		$(timeBox).find('#seconds')[0].innerText = '00'

	return


### CHAT BUTTON ###
chatBtn = $('#chatHandler')[0]
$(chatBtn).on 'click', ()->
	chat = $('#draggableChat')[0]
	$(chat).fadeToggle('slow')
	if(!$(chat).hasClass('showed'))
		$(chat).addClass('showed')
	else
		$(chat).removeClass('showed')
	$(chatBtn).addClass('btn-control-on')
	$('#chatCounter').hide()
	$('#chatCounter')[0].innerText = 0
	return


### CUSTOM FUNCTIONS ###
triggerStop = () ->
	$(stopBtn).removeClass('btn-control-on')
	stopBtn.disabled = true
	$(recordingPause).css('display', 'none')
	$(recordingStart).css('display', 'none')
	$(recordingContinue).css('display', 'none')
	$(recordPlay).css('display', 'block')
	recordingStatus.innerText = 'play'

	$(recordDelete).addClass('btn-control-on')
	$(recordSave).addClass('btn-control-on')

	$(recordStatus).removeClass('record-status-on')
	textStatus.innerText = 'Finished'
	$(recordTime).removeClass('record-time-on')
	$(recordStatus).addClass('record-status-finished')

	videoHandler.disabled = false
	micHandler.disabled = false
	speakerHandler.disabled = false

	recordSave.disabled = false
	recordDelete.disabled = false

	return


triggerStart = (state) ->
	if(state == 'start_recording')
		stopBtn.disabled = false
		$(recordingStart).css('display', 'none')
		$(recordingPause).css('display', 'block')
		recordingStatus.innerText = 'pause'

		$(stopBtn).addClass('btn-control-on')
		$(recordStatus).addClass('record-status-on')
		textStatus.innerText = 'Recording...'
		$(recordTime).addClass('record-time-on')

		$(videoHandler).removeClass('btn-control-on')
		$(micHandler).removeClass('btn-control-on')
		$(speakerHandler).removeClass('btn-control-on')
		videoHandler.disabled = true
		micHandler.disabled = true
		speakerHandler.disabled = true

		if(slider)
			$(slider).addClass('disabled-slider')
			
	
	else if(state == 'pause_recording')
		$(recordingPause).css('display', 'none')
		$(recordingContinue).css('display', 'block')
		recordingStatus.innerText = 'CONTINUE'
		textStatus.innerText = 'Pause'

	else if(state == 'continue_recording')
		$(recordingContinue).css('display', 'none')
		$(recordingPause).css('display', 'block')
		recordingStatus.innerText = 'PAUSE'
		$(stopBtn).addClass('btn-control-on')
		textStatus.innerText = 'Recording...'
	
	else if(state == 'play_record')
		stopBtn.disabled = true
		$(recordPause).css('display', 'block')
		$(recordPlay).css('display', 'none')
		recordingStatus.innerText = 'pause'

	else if(state == 'pause_record')
		stopBtn.disabled = true
		$(recordPlay).css('display', 'block')
		$(recordPause).css('display', 'none')
		recordingStatus.innerText = 'play'

saveRecord = () ->
	recordSave.disabled = true
	if(slider)
		$(slider).removeClass('disabled-slider')


### FUNCTIONS FOR WAITING CONNECT ###
makeConnect = () ->
	$(recordStatus).addClass('hidden')
	$(recordTime).addClass('hidden')
	timestampBox = $('.record-timestamp-box')[0]
	$(timestampBox).addClass('connecting')
	connectingBox = $('#connectingBox')[0]
	$(connectingBox).removeClass('hidden')

	timeBoxStatus = $('#timeBoxStatus')[0]
	timeBoxStatus.innerText = 'Connecting'

	poster = $('.vjs-poster')[0]
	$(poster).css('background-image', 'none')
	$(poster).css('background-color', '#333333')

	$(poster).addClass('poster')
	return

### interaction with slider ###
$('.slider-item').on 'click', () ->
	if($(this).hasClass('slider-item-done'))
		$(stopBtn).removeClass('btn-control-on')
		stopBtn.disabled = true
		$(recordingPause).css('display', 'none')
		$(recordingStart).css('display', 'none')
		$(recordingContinue).css('display', 'none')
		$(recordPause).css('display', 'none')
		$(recordPlay).css('display', 'block')
		recordingStatus.innerText = 'play'

		$(recordDelete).addClass('btn-control-on')
		recordDelete.disabled = false

		$(recordStatus).removeClass('record-status-on')
		textStatus.innerText = 'Finished'
		$(recordTime).removeClass('record-time-on')
		$(recordStatus).addClass('record-status-finished')
	else
		beforeStart()		

beforeStart = () ->
	$(recordingStart).css('display', 'block')
	$(recordingStart).addClass('btn-control')
	$(recordingStart).addClass('btn-process-on')
	$(recordingStart).addClass('recording-start')
	
	$(recordPlay).css('display', 'none')
	$(recordPause).css('display', 'none')
	recordingStatus.innerText = 'start'
	recordDelete.disabled = true
	
	$(recordStatus).removeClass('record-status-finished')
	textStatus.innerText = 'Not Started'

	videoHandler.disabled = false
	$(videoHandler).removeClass('btn-control-on')
	micHandler.disabled = false
	$(micHandler).removeClass('btn-control-on')
	speakerHandler.disabled = false
	$(speakerHandler).removeClass('btn-control-on')


### BAR STATES ###
# Put the 'practice' string if you use it for practice-interview, and put nothing if it is video-bio page
defaultState = (typeBar) ->
	$(recordingStart).removeClass()	
	$(recordingStart).addClass('btn-process-on')
	$(recordingStart).addClass('recording-start')
	recordingStatus.innerText = 'start'
	$(recordingStart).css('display', 'block')

	if(typeBar == 'practice')
		recordingStart.disabled = true
		$(recordingStart).addClass('btn-control')
	else
		recordingStart.disabled = false
		$(recordingStart).addClass('btn-control')
	
	if( slider )
		$(slider).removeClass('disabled-slider')
		itemSelected = $('.slider-item.selected')[0]
		$(itemSelected).removeClass('selected')

	videoHandler.disabled = false
	$(videoHandler).removeClass('btn-control-on')
	micHandler.disabled = false
	$(micHandler).removeClass('btn-control-on')
	speakerHandler.disabled = false
	$(speakerHandler).removeClass('btn-control-on')

	stopBtn.disabled = true
	
	$(recordTime).removeClass('record-time-on')
	textStatus.innerText = 'Not Started'
	$(recordStatus).removeClass('record-status-finished')
	$(recordStatus).removeClass('record-status-on')

	$(recordingPause).css('display', 'none')
	$(recordingContinue).css('display', 'none')
	$(recordPlay).css('display', 'none')
	$(recordPause).css('display', 'none')

	recordSave.disabled = true
	recordDelete.disabled = true
	return


### VOLUME ###
simpleVolLine = document.getElementById('simpleVolumeLine')
tempPercentage = (simpleVolLine.value - simpleVolLine.getAttribute('min')) / (simpleVolLine.getAttribute('max') - simpleVolLine.getAttribute('min'))
simpleVolLine.style.background = '-webkit-gradient(linear, left top, right top, color-stop(' + tempPercentage + ', #4fe1c7), color-stop(' + tempPercentage + ', #ecf5fd))'

simpleVolLine.oninput = ->
	percentage = (simpleVolLine.value - simpleVolLine.getAttribute('min')) / (simpleVolLine.getAttribute('max') - simpleVolLine.getAttribute('min'))
	@style.background = '-webkit-gradient(linear, left top, right top, color-stop(' + percentage + ', #4fe1c7), color-stop(' + percentage + ', #ecf5fd))'
	return

if(document.getElementById('volumeMicSlider'))
	mic = document.getElementById('volumeMicSlider')
	dynamicLine = document.getElementById('volumeMicSubline')

	mic.onchange = ->
  		percentage = (mic.value - mic.getAttribute('min')) / (mic.getAttribute('max') - mic.getAttribute('min'))
  		dynamicLine.style.width = percentage * 100 + '%'
  		return

if(document.getElementById('volumeMicSliderView'))
	mic = document.getElementById('volumeMicSliderView')
	dynamicLine = document.getElementById('volumeMicSubline')
	mic.onchange = ->
  		percentage = (mic.value - mic.getAttribute('min')) / (mic.getAttribute('max') - mic.getAttribute('min'))
  		dynamicLine.style.width = percentage * 100 + '%'
  		return


### Slider Toggling: ###

$(document).ready ->
	$('#openQuestionsSlider').click ->
		$('#tabletQuestions').addClass 'questions-opened'
		return
	$('#closeQuestionsSlider').click ->
		$('#tabletQuestions').removeClass 'questions-opened'
		return
	return

### Scroll: ###
if($('.tablet-slider')[0])
	Ps.initialize $('.tablet-slider')[0], suppressScrollX: true

