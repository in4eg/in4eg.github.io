$ ->
	$ document
		.on 'click', '[data-call]', (e)->
			e.preventDefault()
			called = $ $(this).data 'call'

			$('.main-header').removeClass 'opened'

			if $(@).hasClass 'btn-icon'
				if $(@).hasClass 'active'
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
			else
				if !called.hasClass 'active'

					if $('.main-menu .menu-inner, [data-menu]').hasClass 'active'
						$('.main-menu').removeClass 'active'
						$('[data-menu]').removeClass 'active'
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

	CallPopup = (selector)->
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

	# CallPopup('#productSearchPopup')

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