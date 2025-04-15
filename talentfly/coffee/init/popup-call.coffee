$ document
	.on 'click', '[data-call]', (e)->
		e.preventDefault()
		console.log 'call popup'
		called = $ $(this).data 'call'
		console.log called

		if !called.hasClass 'active'
			called.show().addClass 'showed'
			setTimeout ->
				console.log 'setTimeout'
				called.addClass 'active'
				if called.data('onopen') and window[called.data('onopen')]
					window[called.data('onopen')](called)
			, 100

		if called.attr('id') is 'edit-experience-popup'
			# formData = $('#experienceMore').html()
			for instance of CKEDITOR.instances
				`instance = instance`
				# CKEDITOR.instances.descriptionEdit.setData('')
				window.setTimeout (->
					CKEDITOR.instances.descriptionEdit.setData ''
					return
				), 10

		return

window.CallPopup = (selector)->
	called = $ selector
	if !called.hasClass 'active'
		$('body, html')
			.addClass 'overlayed'
		called.show().addClass 'showed'
		setTimeout ->
			called.addClass 'active'
			if called.data('onopen') and window[called.data('onopen')]
				window[called.data('onopen')](called)
		, 100
	return
	
# CallPopup $('#callBackPopup')
$ document
	.on 'click', '[data-dismiss]', (e)->
		e.preventDefault()
		called = $ $(this).data 'dismiss'
		called.removeClass 'active'
		setTimeout ->
			called.hide().removeClass 'showed'
			if called.data('onclose') and window[called.data('onclose')]
				window[called.data('onclose')](called)
		, 300
		# saveFormData($(@).parents('.popup').attr('id'), formData)
		# do clearPopupInfo
		return

window.hidePopups = ->
	$ '.popup'
		.each (i, popup)->
			called = $ popup
			called.removeClass 'active'

			setTimeout ->
				$('.success-fadeout').removeClass 'active'
				$('.success-fadeout').children('.success-fadein').fadeOut()
				called.hide().removeClass 'showed'
				if called.data('onclose') and window[called.data('onclose')]
					window[called.data('onclose')](called)
			, 300
			return
		# saveFormData($(@).parents('.popup').attr('id'), formData)
		# do clearPopupInfo
	return

$ '.close-popup'
	.click (e)->
		e.preventDefault()
		# saveFormData($(@).parents('.popup').attr('id'), formData)
		do hidePopups
		# do clearPopupInfo
		return

$ '.popup'
	.click (e)->
		if $(e.target).closest('.inner').length is 0
			e.preventDefault()
			# saveFormData($(e.target).closest('.popup').attr('id'), formData)
			do hidePopups
			# do clearPopupInfo
		return
