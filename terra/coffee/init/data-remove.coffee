$ document
	.on 'click', '[data-remove]', (event)->
		$(document).find('[data-id="' + blockToRemove + '"]').remove()
		if $(@).parents '[data-packery]'
			packeryInit()

		$ '.popup'
			.each (i, popup)->
				called = $ popup
				$('html,body')
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
