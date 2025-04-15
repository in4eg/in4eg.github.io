notifBox = $('#notificationInner')
box = $('#notificationInner')[0]
total = $('.notification-total')
innerBox = $('.inner-items')[0]
itemHasActions = $(box).find('*[data-has-actions]')[0]
itemWithoutActions = $(box).find('*[data-without-actions]')[0]
moreBtn = $('.scrolled-more')[0]
counterForShowMore = $(moreBtn).find('.count')[0]
$(document).ready ->
	### SCROLL ###
	Ps.initialize( notifBox[0], suppressScrollX: true )
	notifBox.css('position', 'relative')
	notificate.getNotification()
	# setup the current date on reschedule popup
	today = new Date()
	y = today.getYear()
	m = today.getMonth()
	d = today.getDate()
	date = []
	date.push(y+1900)
	date.push(m)
	date.push(d)
	if $.fn.pickadate
		$input = $(reschedulePopup).find('.datepicker').pickadate()
		picker = $input.pickadate('picker')
		picker.set('select', date)
	return

notifBtn = $('.notification.btn')[0]
notifBtn.disabled = true
urlEl = $('*[data-url]')[0]
pageURL = $(urlEl).attr('data-url')
allNotifs = []
notificate =
	getNotification: ()->
		$.ajax
			url: pageURL,
			dataType: 'json',
			type: 'get',
			error: (data, textStatus, errorThrown) ->
				notifBtn.disabled = true
				return
			success: (data) ->
				allNotifs = data.notifications
				if( data.notifications.length > 0 )
					# notif counter
					notifCounter = 0
					i = 0
					while i < data.notifications.length
						if(allNotifs[i].new)
							notifCounter++
						i++
					# show notif counter
					notifBtn.disabled = false
					total.html(notifCounter)
					if(notifCounter)
						total.parent('.notification.btn').addClass 'animated'
						$('.notification-total').addClass('counter')
					# counter for scrolled more
					if(data.notifications.length > 3)
						$(moreBtn).addClass('hidden')
						console.log(counterForShowMore.innerText)
						counterForShowMore.innerText = data.notifications.length - 3
						console.log(counterForShowMore.innerText)
					else
						$($('.scrolled-more')[0]).addClass('hidden')
					# render all notifications
					notificate.renderNotifications(data)
				else
					disableBell()
				return
		return
 
	renderNotifications: (data)->
		items = $(box).find('.notification-item')
		# clearing all notifications
		for id in items 
			if(!$(id).hasClass('hidden'))
				$(id).remove()

		moreBtn = $('.scrolled-more')[0]
		$(moreBtn).addClass('hidden')
		# rendering items of interviews array
		i = 0
		while i < data.notifications.length
			# interviews
			if(data.notifications[i].interv_id and data.notifications[i].action != 'reminder')
				console.log('here')
				if(i > 2)
					renderInterviewItems(innerBox, itemHasActions, data.notifications[i], false)
				else
					console.log('here2')
					renderInterviewItems(box, itemHasActions, data.notifications[i], false)
			else
				# rendering items of notifications array
				newItem = $(itemWithoutActions).clone(true, true)
				$(newItem).removeClass('hidden')
				if(innerBox.children.length > 0 or i > 2)
					renderNotificationItems(innerBox, newItem, data.notifications[i], false)
				else
					renderNotificationItems(box, newItem, data.notifications[i], false)
			i++
		# make the right order
		$(innerBox).appendTo(box)
		if(innerBox.children.length > 0)
			$(moreBtn).appendTo(box)
			if($(innerBox).hasClass('hidden'))
				$(moreBtn).removeClass('hidden')
		return


# SHOW MORE NOTIFICATION
$('*[data-show-notifications]').on 'click', (ev) ->
	ev.preventDefault()
	moreBtn = $('.scrolled-more')[0]
	$(moreBtn).addClass('hidden')
	innerBox = $('.inner-items')[0]
	$(innerBox).removeClass('hidden')
	# update scrollbar
	Ps.update(notifBox[0])
	return


$('*[data-accept-notification]').on 'mousedown', ->
	if( $(@).find('.text').text() == 'START' or $(@).find('.text').text() == 'JOIN')
		window.location.href = $(@).attr('data-accept-notification')
	else
		itemNotif = $(@).parent().parent().parent()
		data = {}
		data.action = 'accepted'
		data.notif_id = $(itemNotif).attr('id')
		data.interv_id = $(itemNotif).attr('data-interv-id')
		$(@).parent().parent().parent().remove()
		$.ajax
			type: 'post'
			url: $(@).attr('data-accept-notification')
			data: data
			cache: false
			headers: 'X-CSRFToken': csrf_token
			success: (data) ->
				console.log(data)
				return
		disableBell()
	return

reschedulePopup = $('#reschedulePopup')[0]
dataTemp = {}
itemsChange = null
$('*[data-change-time]').on 'mouseup', ->
	# находим ИД объекта для которого меняем время
	itemNotif = $(@).parent().parent().parent()
	$('#reschedulePopup').attr('data-id', $(itemNotif).attr('id'))
	$('#reschedulePopup').attr('data-interv-id', $(itemNotif).attr('data-interv-id'))
	# устанавливаем имя в попапе
	name = $($(@).parents('.notification-item')[0]).find('.name')[1].innerText
	$(reschedulePopup).find('.full-name')[0].innerText = name
	# устанавливаем предыдущее время в попапе
	notif = $(@).parent().parent().parent()
	date = $(notif).find('*[data-date]').text()
	time = $(notif).find('*[data-time]').text()
	console.log(data, time)
	$(reschedulePopup).find('#dateSelect').val(date)
	$(reschedulePopup).find('#hourSelect').val(time.slice(0,2))
	$(reschedulePopup).find('#minuteSelect').val(time.slice(3,5))
	# находим ввесь объект для которого изменяем время
	# dataInterviews
	data = {}
	data.url = $(@).attr('data-change-time')
	dataTemp = data
	itemsChange = @
	return


# Change Time
$('#reschedulePopup [data-invite]').on 'click', ->
	if($(reschedulePopup).attr('data-invite'))
		console.log('candidate-list')
		return
	console.log('notifications')
	# validation
	dataTemp.date = $(reschedulePopup).find('#dateSelect')[0].value
	if dataTemp.date == ''
		$($(reschedulePopup).find('#dateSelect')[0]).addClass('input-error')
		$($(reschedulePopup).find('.error-hint.hidden')[0]).removeClass('hidden')
	else
		dataTemp.notif_id = $(reschedulePopup).attr('data-id')
		dataTemp.action = 'change'
		dataTemp.interv_id = $(reschedulePopup).attr('data-interv-id')
		dataTemp.hours = $(reschedulePopup).find('#hourSelect')[0].value
		dataTemp.minutes = $(reschedulePopup).find('#minuteSelect')[0].value
		$.ajax
			type: 'post'
			url: dataTemp.url
			data: dataTemp
			cache: false
			headers: 'X-CSRFToken': csrf_token
			success: (data) ->
				console.log('RESCHEDULED')
				return
			error: () ->
				console.log('ERROR!')
				return
		$.magnificPopup.close()
		$(itemsChange).parent().parent().parent().remove()
		total.html(+total.html() - 1)
		disableBell()
	return


$('*[data-reject-notification]').on 'click', ->
	itemNotif = $(@).parent().parent().parent()	
	data = {}
	data.action = 'rejected'
	data.notif_id = $(itemNotif).attr('id')
	data.interv_id = $(itemNotif).attr('data-interv-id')
	$.ajax
		type: 'post'
		url: $(@).attr('data-reject-notification')
		data: data
		cache: false
		headers: 'X-CSRFToken': csrf_token
		success: (data) ->
			console.log(data)
			return
	$(@).parent().parent().parent().remove()
	total = $($('.notification-total')[0])
	total.html(+total.html() - 1)
	disableBell()
	return


$('*[data-remove-item]').on 'mouseup', ->
	$.ajax
		type: 'post'
		url: $(@).attr('data-link')
		data:
			id: $(@).parent().attr('id')
			action: 'watched'
		cache: false
		headers: 'X-CSRFToken': csrf_token
		success: (data) ->
			console.log(data)
			return
	$(@).parent().remove()
	disableBell()
	return


renderInterviewItems = (container, itemHasActions, data, asFirst) ->
	newitemHasActions = $(itemHasActions).clone(true, true)
	$(newitemHasActions).removeClass('hidden')
	$(newitemHasActions).attr('id', data.id)
	$(newitemHasActions).find('.name')[0].innerText = data.interviewer
	$(newitemHasActions).find('.name')[1].innerText = data.candidate
	# date, time
	inv_date = data.inv_date
	inv_month = inv_date.slice(0,2)
	inv_day = inv_date.slice(3,5)
	$(newitemHasActions).find('*[data-date]')[0].innerText = inv_date
	$(newitemHasActions).find('*[data-time]')[0].innerText = data.inv_time
	# message
	now = new Date()
	month = now.getMonth()
	day = now.getDate()
	$(newitemHasActions).find('.lead')[0].innerHTML = data.message
	# if we have three buttons
	if(data.action == 'actions')
		acceptBtn = $(newitemHasActions).find('*[data-accept-notification]')[0]
		rejectBtn = $(newitemHasActions).find('*[data-reject-notification]')[0]
		changeBtn = $(newitemHasActions).find('*[data-change-time]')[0]
		$(acceptBtn).attr('data-accept-notification', '/interview/invite/')
		$(rejectBtn).attr('data-reject-notification', '/interview/invite/')
		$(changeBtn).attr('data-change-time', '/interview/invite/')
		$(newitemHasActions).attr('data-interv-id', data.interv_id)
	# if we have one buttons
	else if(data.action == 'join' or data.action == 'start')
		acceptBtn = $(newitemHasActions).find('*[data-accept-notification]')[0]
		if(data.action == 'join')
			textBtn = $(acceptBtn).find('.text')[0]
			textBtn.innerText = 'JOIN'
			$(acceptBtn).attr('data-accept-notification', join_url)
		else
			textBtn = $(acceptBtn).find('.text')[0]
			textBtn.innerText = 'START'
			$(acceptBtn).attr('data-accept-notification', start_url)
		$(newitemHasActions).find('*[data-reject-notification]').remove()
		$(newitemHasActions).find('*[data-change-time]').remove()
	# if we have not any buttons
	else
		$(newitemHasActions).find('.buttons-list').remove()
	$(newitemHasActions).find('*[data-remove]').remove()
	if(!asFirst)
		$(newitemHasActions).appendTo( container )
	else
		$(newitemHasActions).prependTo( container )
	return


renderNotificationItems = (container, newItem, data, asFirst) ->
	removeNotif = $(newItem).find('*[data-remove-item]')[0]
	id = data.id
	$(removeNotif).attr('data-remove-item', '#' + id)
	$(newItem).attr('id', id)
	$(newItem).find('.lead')[0].innerHTML = data.message
	$(newItem).find('.full-blue')[0].remove()
	$(newItem).find('.buttons-list').remove()
	if(data.action == 'watch' or data.action == 'reminder')
		$(removeNotif).attr('data-link', '/notifications/watch/' + id + '/')
	# if it is reminder
	if(data.action == 'reminder')
		# date, time
		$(newItem).find('*[data-date]')[0].innerText = data.inv_date
		$(newItem).find('*[data-time]')[0].innerText = data.inv_time
		$(newItem).find('.details').removeClass('hidden')
	if(!asFirst)
		$(newItem).appendTo( container )
	else
		$(newItem).prependTo( container )
	return


$('.notification').on 'click', ->
	counters = $('.counter.notification-total')
	if(counters.length > 0)
		counters[0].innerText = '0'
		$(counters[0]).parent().removeClass('animated')
	readNotifs = []
	i = 0
	while i < allNotifs.length
		if(allNotifs[i].new)
			readNotifs.push(allNotifs[i].id)
			allNotifs[i].new = false
		i++
	if(readNotifs.length)
		$.ajax
			type: 'post'
			url: '/notifications/read/'
			data:
				read_notifications: JSON.stringify(readNotifs)
			cache: false
			headers: 'X-CSRFToken': csrf_token
			success: (data) ->
				console.log('success')
			error: (data) ->
				console.log('error')
				return
	return

disableBell = () ->
	if($('.notification-item').not('.hidden').length == 0)
		$('body').click()
		notifBtn.disabled = true
	return