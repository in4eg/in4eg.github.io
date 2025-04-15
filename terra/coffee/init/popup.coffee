# custom variable
blockToRemove = undefined

$ ->

	$ '[data-call]'
		.click (e)->
			e.preventDefault()
			called = $ $(this).data 'call'
			if !called.hasClass 'active'
				# $('html,body')
				$('body')
					.css 'width', $('body').width()+'px'
					.addClass 'overlayed'
				called.show()
				setTimeout ->
					called.addClass 'active'
					if called.data('onopen') and window[called.data('onopen')]
						window[called.data('onopen')](called)
				, 100
				# custom
				if $(@).data('id', '#removePopup')
					blockToRemove = $(@).parents('.item').data('id')
			return

	window.CallPopup = (selector)->
		called = $ selector
		if !called.hasClass 'active'
			# $('html,body')
			$('body')
				.css 'width', $('body').width()+'px'
				.addClass 'overlayed'
			called.show()
			setTimeout ->
				called.addClass 'active'
				if called.data('onopen') and window[called.data('onopen')]
					window[called.data('onopen')](called)
			, 100
		return

	# CallPopup('#successPopup')

	$ '[data-dismiss]'
		.click (e)->
			e.preventDefault()
			called = $ $(this).data 'dismiss'
			# $('html,body')
			$('body')
				.css 'width', ''
				.removeClass 'overlayed'
			called.removeClass 'active'
			setTimeout ->
				called.hide()
				if called.data('onclose') and window[called.data('onclose')]
					window[called.data('onclose')](called)
			, 300
			return

	hidePopups = ->
		$ '.popup'
			.each (i, popup)->
				called = $ popup
				# $('html,body')
				$('body')
					.css 'width', ''
					.removeClass 'overlayed'
				called.removeClass 'active'
				setTimeout ->
					called.hide()
					if called.data('onclose') and window[called.data('onclose')]
						window[called.data('onclose')](called)
				, 300
				return
		return

	$ '.close-popup'
		.click (e)->
			e.preventDefault()
			do hidePopups
			return

	$ '.popup'
		.click (e)->
			if $(e.target).closest('.inner').length is 0
				e.preventDefault()
				do hidePopups
			return

	return