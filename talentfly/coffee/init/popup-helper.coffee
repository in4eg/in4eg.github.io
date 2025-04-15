$ document
	.on 'click', '.close-helper', ->
		$(@).parents('.helper').removeClass('active').addClass 'closed'
		return

$ '.open-popup-link'
	.click ->
		if window.innerWidth >= 768
			setTimeout (=>
				$($(@).attr('href')).find '.helper:not(.closed)'
					.addClass 'active'
				return
			), 500
		return

$ '[data-toggle-helper]'
	.click ->
		if $($(@).data('toggle-helper')).find('.helper').hasClass 'active'
			$($(@).data('toggle-helper')).find('.helper').removeClass 'active'
		else
			$($(@).data('toggle-helper')).find('.helper').addClass 'active'
		return

$ document
	.on 'click', '.mfp-close', ->
		clearPopupInfo()
		return

$ '.close-modal'
	.click (e)->
		e.preventDefault()
		clearPopupInfo()
		$.magnificPopup.close()

		# form data can find in edit-popup.js
		# if(formData != undefined)
		# 	self = this
		# 	setTimeout ((self) ->
		# 		saveFormData $(self).parents('.white-popup').attr('id'), formData
		# 		if $('#summaryMess').text().length <= 0
		# 			$('#summaryMess').next('.hidden-helper').addClass 'active'
		# 		if $('#technicalskills-list').children().length <= 0
		# 			$('#technicalskills-list').parent('a').addClass 'hidden'
		# 			$('#technicalskills-list').parent('a').next('.hidden-helper').addClass 'active'
		# 		if $('#generalSoftSkills').children().length <= 0
		# 			$('#generalSoftSkills').addClass 'hidden'
		# 			$('#generalSoftSkills').next('.hidden-helper').addClass 'active'
		# 		return
		# 	), 50, self
		
		formDataBeforeNewElementInterests = undefined

		# data-call-popup="#edit-gereral-popup"
		return
		
$ '.close-window'
	.click (e)->
		e.preventDefault()
		$.magnificPopup.close()
		return
		

clearPopupInfo = ->
	$('.clear-table').find('tbody').find('tr').remove()
	# formData = undefined
	
	$('[data-clear]').find('[data-push]').attr('data-push', '').val('')
	counters =  $('[data-clear]').find('[data-characters]')

	for count in counters
		$(count).parent('.form-group').find('.count-help').find('.count').html $(count).attr('data-characters')

	$('.file-name').addClass 'empty'
	$('#sertifPhoto').val('');
	$('#edit-certification-popup').find('.file-name').text 'Your document'
	$('[data-clear]').find('[data-id]').attr('data-id', '').val('')
	$('[data-clear]').find('[data-push-href]').attr('data-push-href', '').val('')
	$('[data-clear]').find('[data-removeon]').attr('data-on-edit', '')
	$('.form-group').removeClass 'error'
	$('[data-year-select]').removeClass 'error'
	$('[data-month-select]').removeClass 'error'
	$('.year-alert').removeClass 'active'
	$('.month-alert').removeClass 'active'
	$('#emailRequest').val('')
	
	for option in $('[data-clear]').find('[data-push]').children('option')
		option.remove()

	$('[data-not-current]').removeClass 'hidden'
	$('[data-clear]').find('[data-current-input]').prop 'checked', false
	$('[data-current-work]').attr 'data-current-work', 'false'

	$('.success-fadeout').removeClass 'active'
	$('.success-fadein').removeClass 'active'

	$('#interestsBody').find('.block-info').remove()

	visibleInterviews = []
	if $('#changeVideo') and typeof $('#changeVideo').attr('data-visibility-id') isnt 'undefined'
		tempArray = $('#changeVideo').attr('data-visibility-id').split(',')
		tempArray.forEach (el) ->
			id = el.trim()
			if id != ''
				visibleInterviews.push id
			return
	# document.querySelectorAll('#changeVideo li').forEach (el) ->
	# 	visibleInterviews.push $(el).attr('data-video-id')
	# 	return
	if($('#interview-popup input[type=checkbox]').length > 0)
		document.querySelectorAll('#interview-popup input[type=checkbox]').forEach (el) ->
			id = $(el).attr('data-id')
			if visibleInterviews.indexOf(id) != -1
				el.checked = true
			else
				el.checked = false
			return

	return

do ->
	if typeof NodeList::forEach == 'function'
		return false
	NodeList::forEach = Array::forEach
	return


# saveFormData = (popupId, data)->
# 	if popupId is 'edit-summary-popup'
# 		editedBlock = $ '#summaryMess'
# 	else if popupId is 'edit-technicalskills-popup'
# 		editedBlock = $ '#technicalskills-list'
# 	# else if popupId is 'edit-softskills-popup'
# 	# 	editedBlock = $ '#generalSoftSkills'
# 	else if popupId is 'edit-experience-popup'
# 		editedBlock = $ '#experienceMore'
# 		# formData = $('#experienceMore').html()
# 	else if popupId is 'edit-education-popup'
# 		editedBlock = $ '#educationMore'
# 	else if popupId is 'edit-certification-popup'
# 		editedBlock = $ '#certificationMore'
# 	else if popupId is 'edit-languages-popup'
# 		editedBlock = $ '#languages-list'
# 	else if popupId is 'edit-interests-popup'
# 		editedBlock = $ '#interests-list'
# 	else if popupId is 'edit-volunteering-popup'
# 		editedBlock = $ '#volunteeringMore'
# 	else if popupId is 'edit-gereral-popup'
# 		editedBlock = $ '#userMainInfo'
# 	else if popupId is 'edit-softskills-popup'
# 		editedBlock = $ '#generalSoftSkills'

# 	if(editedBlock)

# 		if editedBlock.text().trim().length is 0
# 			editedBlock.addClass 'hidden'
# 			editedBlock.next('.hidden-helper').addClass 'active'
# 		else if data.length is 0
# 			editedBlock.addClass 'hidden'
# 			editedBlock.next('.hidden-helper').addClass 'active'
# 			editedBlock. html ''
# 		else
# 			editedBlock.html data
# 			editedBlock.removeClass 'hidden'
# 			editedBlock.parent().removeClass('hidden');
# 			editedBlock.next('.hidden-helper').removeClass 'active'
# 			editedBlock.parent().next('.hidden-helper').removeClass 'active'

# 	return

$ 'body'
	.click (e)->
		if $(e.target).closest('.white-popup, .popup').length is 0
			clearPopupInfo()
		return

