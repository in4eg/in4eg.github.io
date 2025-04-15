### SCROLL ###
Ps.initialize $('#questionsBox')[0], suppressScrollX: true
Ps.initialize $('#textBox')[0], suppressScrollX: true

### VISIBLE ON PROFILE CHECKER ###
$('.checkbox-label').on 'click', () ->
	$.ajax
		type: 'post'
		url: $(@).attr('data-url')
		data:
			'visibility_on_profile': !$(@).prev()[0].checked
		cache: false
		dataType: 'json'
		headers: 'X-CSRFToken': csrf_token
		success: (data) ->
			$(item).removeClass('has-offered-user')
			$(item).addClass('uninvited-user')
			inviteBtn = $(item).find('.invite-btn')[0]
			if(typeof data.invite == 'string')
				$(inviteBtn).attr('data-invite-url', data.invite)
			else
				$(inviteBtn).attr('data-invite-url', data.invite.url)
			return
		error: () ->
			console.log('Запрос не отработал!')
			return
	return

### CLOSE RECOGNIZED QUESTIONS ###
btnsClose = $('.button-close')
btnsClose.on 'click', (ev) ->
	ev.stopPropagation()
	url = $('#questionsBox').attr('data-url')
	id = $(@).parent().attr('id')
	self = @
	$.ajax
		type: 'post'
		url: url
		data:
			'remove_question_id': id
		cache: false
		headers: 'X-CSRFToken': csrf_token
		success: (data) ->
			$(self).parent().parent().remove()
			selector = "*[data-time='" + id + "']"
			$(selector).remove()
			return
		error: () ->
			console.log('Запрос не отработал!')
			return
	return

### TOGGLE BETWEEN VIEW AND FORM ###
views = $('.item-view')
views.on 'click', ->
	$(this).toggleClass('hide')
	$(this).next().toggleClass('hide')
	#if( $(this).parent().hasClass('edit-box') )
	#	$(this).parent().css('width', '77%')
	autosize.update($(this).next().find('.question-edit')[0]);
	return

### CANCEL FORM EDIT ###
btnsCancel = $('.form-edit-cancel')
btnsCancel.on 'click', ->
	cancel(this)
	editBox = $(this).parent().parent()
	if( $(editBox).hasClass('edit-box') )
		$(editBox).css('width', 'auto')
	return

### SAVE QUESTION ###
btnsSave = $('.btn-question-save')
btnsSave.on 'click', (ev) ->
	ev.preventDefault()
	newText = $(@).prev().prev().val()
	# System Recognized Questions 
	if($(this).parent().prev().children().length > 1)
		id = $(@).parent().prev().attr('id')
		question = $(@).prev().prev().val()
		$.ajax
			type: 'post'
			url: window.location.href
			data:
				'edit_question': id
				'new_question': question
			cache: false
			headers: 'X-CSRFToken': csrf_token
			success: (data) ->
				console.log('success')
				return
			error: () ->
				console.log('Запрос не отработал!')
				return
		$(this).parent().prev().children()[0].lastElementChild.innerText = newText
		cancel(this)
	# Interview text 
	else
		line = $(@).parent().parent().parent().attr('data-line')
		role = ''
		if($(@).parent().parent().parent().hasClass('interviewer-item'))
			role = 'interviewer'
		else
			role = 'candidate'
		$.ajax
			type: 'post'
			url: window.location.href
			data:
				'line': line
				'change_phrase': newText
				'person': role
			cache: false
			headers: 'X-CSRFToken': csrf_token
			success: (data) ->
				console.log('success')
				return
			error: () ->
				console.log('Запрос не отработал!')
				return
		$(this).parent().prev().children()[0].innerText = newText
		cancel(this)
	
	editBox = $(this).parent().parent()
	if( $(editBox).hasClass('edit-box') )
		$(editBox).css('width', 'auto')

	return

$('#textBox .play').on 'click', ->
	timeStart = $(@).prev().find('.time').text().slice(0, 8)
	timeStart = timeStart.split(':')
	# minutes are worth 60 seconds. Hours are worth 60 minutes.
	seconds = (+timeStart[0]) * 60 * 60 + (+timeStart[1]) * 60 + (+timeStart[2])
	playVideo('demo', seconds)
	return


### FILTER (NOT COMPLETED, just DOM-handle) ###
btnsCategory = $('.btn-category')
interviewersBtn = $('#interviewerCategoryBtn')
candidatesBtn = $('#candidateCategoryBtn')
allCategoriesBtn = $('#allCategoryBtn')


interviewersBtn.on 'click', ->
	$(interviewersBtn).attr('disabled','disabled');
	$(candidatesBtn).removeAttr('disabled');
	$(allCategoriesBtn).removeAttr('disabled');
	$(this).toggleClass('btn-active')

	$(allCategoriesBtn).removeClass('btn-active')
	$(candidatesBtn).removeClass('btn-active')
	allCategoriesBtn.disabled = false
	
	toggleSelectedEls('INTERVIEWER')
	return


candidatesBtn.on 'click', ->
	$(candidatesBtn).attr('disabled','disabled');
	$(interviewersBtn).removeAttr('disabled');
	$(allCategoriesBtn).removeAttr('disabled');
	$(this).toggleClass('btn-active')
	
	$(allCategoriesBtn).removeClass('btn-active')
	$(interviewersBtn).removeClass('btn-active')
	allCategoriesBtn.disabled = false
	interviewersBtn.disabled = false
	
	toggleSelectedEls('CANDIDATE')
	return

allCategoriesBtn.on 'click', ->
	$(allCategoriesBtn).attr('disabled','disabled');
	$(interviewersBtn).removeAttr('disabled');
	$(candidatesBtn).removeAttr('disabled');
	
	$(this).toggleClass('btn-active')
	$(interviewersBtn).removeClass('btn-active')
	$(candidatesBtn).removeClass('btn-active')
	
	showAllEls()
	return


cancel = (self) ->
	$(self).parent().toggleClass('hide')
	$(self).parent().prev().toggleClass('hide')
	return


toggleSelectedEls = (category) ->
	owners = $('.text-item .owner')
	ownersBox = $('#textBox')
	hiddenEls = $('#textBox .text-item:hidden')
	visibleEls = $('#textBox .text-item:visible')

	if(hiddenEls.length > 0)
		i = 0
		while i < hiddenEls.length
			$(hiddenEls[i]).css('display', 'block')
			i++

		j = 0
		while j < visibleEls.length
			$(visibleEls[j]).css('display', 'none')
			j++
	else
		i = 0
		while i < visibleEls.length
			if(visibleEls[i].firstElementChild.firstElementChild.firstElementChild.innerText != category)
				$(visibleEls[i]).css('display', 'none')
			i++
	return


showAllEls = () ->
	hiddenEls = $('#textBox .text-item')
	i = 0
	while i < hiddenEls.length
		$(hiddenEls[i]).css('display', 'block')
		i++
	
	return


### AUTOSIZE TEXTARIA OF QUESTIONS ###
$(document).on 'ready', ->
	questions = $('.question-edit')
	i = 0
	while i < questions.length
		qDescription = $(questions[i]).parent().parent().find('.description')
		questions[i].value = qDescription[0].innerText
		autosize($(questions[i]))
		$(questions[i]).css('height', '32px')
		i++