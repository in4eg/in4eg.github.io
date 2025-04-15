chatContent = $('.chat-content')[0]
inputEditMessage = $('#editMessage')[0]
userNameEl = $('*[data-current-user-name]')[0]
userName = $(userNameEl).attr('data-current-user-name')
interNameEl = $('*[data-interlocutor-name]')[0]
interName= $(interNameEl).attr('data-interlocutor-name')
### MESSAGING ###
sendMessage = (currentUser, name, msg)->
	sentMessageBox = document.createElement('div')
	nameBox = document.createElement('span')
	timeBox = document.createElement('span')
	messageBox = document.createElement('p')
	# Styling
	$(nameBox).addClass('name')
	$(timeBox).addClass('time')
	$(messageBox).addClass('textMessage')
	if(currentUser)
		$(sentMessageBox).addClass('sent-message')
	else
		$(sentMessageBox).addClass('received-message')
	# Setup name
	if(currentUser)
		nameBox.innerText = userName
	else
		nameBox.innerText = interName
	sentMessageBox.appendChild(nameBox)
	# Setup time
	date = new Date()
	h = date.getHours()
	m = date.getMinutes()
	if(h/10 < 1)
		h = '0' + h
	if(m/10 < 1)
		m = '0' + m
	time = h + ':' + m
	timeBox.innerText = time
	sentMessageBox.appendChild(timeBox)
	# Setup a message
	if(msg)
		messageBox.innerHTML = detectURL(msg)
	else
		message = inputEditMessage.value
		messageBox.innerHTML = detectURL(message)
		inputEditMessage.value = ''

	sentMessageBox.appendChild(messageBox)
	# Add message block to content box
	chatContent.appendChild(sentMessageBox)
	chatContent.scrollTop = chatContent.scrollHeight
	return message

$('#sendMessage').on 'click', ()->
	msg = sendMessage(true, userName)
	outgoingMessage(msg)

$(inputEditMessage).on 'keypress', (ev)->
	if(ev.keyCode == 13)
		msg = sendMessage(true, userName)
		outgoingMessage(msg)

detectURL = (text) ->
	urlRegex = /(https?:\/\/[^\s]+)/g
	text.replace urlRegex, (url) -> '<a href="' + url + '">' + url + '</a>'

### DRAGGING ###
body = $(document.body)
$('#chatHead').on 'mousedown', (chatEv) ->
	# fix selecting when user drag the chat
	$('body').attr('style', '-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;')
	$('#draggableChat').css('cursor','move')
	chatHeader = $(chatEv.currentTarget)
	chatHeaderOffset = chatHeader.offset()
	offset = {
		top: chatEv.pageY - chatHeaderOffset.top,
		left: chatEv.pageX - chatHeaderOffset.left
	}
	body.on 'mousemove.dragChat', (bodyEv) ->
		$('#draggableChat').css
			top: bodyEv.pageY - offset.top,
			left: bodyEv.pageX - offset.left
		return

	body.on 'mouseup.dragChat', ()->
		body.off('mousemove.dragChat')
		body.off('mouseup.dragChat')
		$('#draggableChat').css('cursor', 'default')
		$('body').attr('style', '')
		return

	return

### DRAGGING for TOUCH devices, need fix ###
body = $(document.body)
$('#chatHead').on 'touchstart', (chatEv) ->
	$('#draggableChat').css
		cursor: 'move'

	chatHeader = $(chatEv.currentTarget)
	chatHeaderOffset = chatHeader.offset()
	offset = {
		top: chatEv.originalEvent.touches[0].pageY - chatHeaderOffset.top,
		left: chatEv.originalEvent.touches[0].pageX - chatHeaderOffset.left
	}
	body.on 'touchmove.dragChat', (bodyEv) ->
		$('#draggableChat').css
			top: bodyEv.originalEvent.touches[0].pageY - offset.top,
			left: bodyEv.originalEvent.touches[0].pageX - offset.left
		return

	body.on 'touchend.dragChat', ()->
		body.off('touchmove.dragChat')
		body.off('touchend.dragChat')
		$('#draggableChat').css('cursor', 'default')
		$('body').attr('style', '')
		return

	return

### CLOSE ###
chatCloseBtn = $('#chatClose')[0]
$(chatCloseBtn).on 'click', ()->
	chat = $('#draggableChat')[0]
	$(chat).removeClass('showed')
	$(chat).fadeToggle 100, () -> return 'visible'
	chatBtn = $('#chatHandler')[0]
	$(chatBtn).addClass('btn-control-on')
	return

### SCROLL ###
Ps.initialize $('#chatContent')[0], suppressScrollX: true