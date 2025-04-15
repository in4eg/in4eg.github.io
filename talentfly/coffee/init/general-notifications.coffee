gNotification = $('#gNotification')[0]
if($('#gType')[0])
	gType = $('#gType')[0]
gMessage = $('#gMessage')[0]
gEndMessage = $('#gEndMessage')[0]


showGNotification = (type, message, endMessage, notifID) ->
	hideGNotificationUp()
	if(gType)
		gType.innerText = type

	if(notifID)
		$('#'+notifID).addClass(type)
		$('#'+notifID).removeClass('display-none')
		if($('#'+notifID).find('#gType')[0])
			console.log($('#'+notifID).find('#gType')[0])
			gType = $('#'+notifID).find('#gType')[0]
		gMessage = $('#'+notifID).find('#gMessage')[0]
		gEndMessage = $('#'+notifID).find('#gEndMessage')[0]
	else
		$(gNotification).addClass(type)
		$(gNotification).removeClass('display-none')
	gMessage.innerText = message
	gEndMessage.innerText = endMessage
	
	if(!$($('.timestamp-preloader')[0]).hasClass('display-none'))
		$($('.timestamp-preloader')[0]).addClass('display-none')

	setTimeout (->
		# $(gNotification).hide('slow')
		$(gNotification).addClass('display-none')
		$(gNotification).removeClass(type)
		return
	), 5000
	return

# допилить с передачей ид
unlimitedGNotification = (message, endMessage, notifID) ->
	if(notifID)
		$('#'+notifID).addClass('notice')	
	else
		$(gNotification).addClass('notice')
	$($('#gNotification')[0]).removeClass('display-none')
	$($('.icon-info-round')[0]).addClass('display-none')
	$($('.timestamp-preloader')[0]).removeClass('display-none')
	gMessage.innerText = message
	gEndMessage.innerText = endMessage
	
	
	return


hideGNotification = (notifID) ->
	if(!$($('.timestamp-preloader')[0]).hasClass('display-none'))
		$($('.timestamp-preloader')[0]).addClass('display-none')
	if(notifID)
		$('#'+notifID).removeClass()
		$('#'+notifID).addClass('large-notif')
		$('#'+notifID).addClass('general-notification')
		$('#'+notifID).addClass('display-none')
	else
		$(gNotification).removeClass()
		$(gNotification).addClass('large-notif')
		$(gNotification).addClass('general-notification')
		$(gNotification).addClass('display-none')
	return
  
# signUp / signIn notification
gNotificationL = $('#signUpForm #gNotification')[0]
gTypeL = $('#signUpForm #gType')[0]
gMessageL = $('#signUpForm #gMessage')[0]
gEndMessageL = $('#signUpForm #gEndMessage')[0]
showGNotificationUp = (type, message, endMessage) ->
	#if(gType)
	#	gTypeL.innerText = type
	gMessageL.innerText = message
	gEndMessageL.innerText = endMessage

	$(gNotificationL).removeClass('display-none')
	$(gNotificationL).addClass(type)
	return

hideGNotificationUp = () ->
	if(!$($('.timestamp-preloader')[0]).hasClass('display-none'))
		$($('.timestamp-preloader')[0]).addClass('display-none')
	$(gNotificationL).removeClass()
	$(gNotificationL).addClass('general-notification')
	$(gNotificationL).addClass('display-none')
	return

showGNotificationIn = (type, message, endMessage) ->
	#if(gType)
	#	gType.innerText = type
	gMessage.innerText = message
	gEndMessage.innerText = endMessage

	$(gNotification).removeClass('display-none')
	$(gNotification).addClass(type)
	return

hideGNotificationIn = () ->
	if(!$($('.timestamp-preloader')[0]).hasClass('display-none'))
		$($('.timestamp-preloader')[0]).addClass('display-none')
	$(gNotification).removeClass()
	$(gNotification).addClass('general-notification')
	$(gNotification).addClass('display-none')
	return
#  ======