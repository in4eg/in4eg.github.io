$ ->

	$ '[data-call]:not(#applyOrder)'
		.click (e)->
			e.preventDefault()
			called = $ $(this).data 'call'
			if !called.hasClass 'active'
				$('body, .main-header, html')
					.css 'width', $('body').width()+'px'
					.addClass 'overlayed'
				called.show().addClass 'showed'
				setTimeout ->
					called.addClass 'active'
					if called.data('onopen') and window[called.data('onopen')]
						window[called.data('onopen')](called)
				, 100
			return

	window.CallPopup = (selector)->
		called = $ selector
		if !called.hasClass 'active'
			$('body, .main-header, html')
				.css 'width', $('body').width()+'px'
				.addClass 'overlayed'
			called.show().addClass 'showed'
			setTimeout ->
				called.addClass 'active'
				if called.data('onopen') and window[called.data('onopen')]
					window[called.data('onopen')](called)
			, 100
		return


	$ '[data-dismiss]'
		.click (e)->
			e.preventDefault()
			called = $ $(this).data 'dismiss'
			$('body, .main-header, html')
				.css 'width', ''
				.removeClass 'overlayed'
			called.removeClass 'active'
			setTimeout ->
				called.hide().removeClass 'showed'
				if called.data('onclose') and window[called.data('onclose')]
					window[called.data('onclose')](called)
			, 300
			return

	window.hidePopups = ->
		$ '.popup'
			.each (i, popup)->
				called = $ popup
				$('body, .main-header, html')
					.css 'width', ''
					.removeClass 'overlayed'
				called.removeClass 'active'

				setTimeout ->
					$('.success-fadeout').removeClass 'active'
					$('.success-fadeout').children('.success-fadein').fadeOut()
					called.hide().removeClass 'showed'
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