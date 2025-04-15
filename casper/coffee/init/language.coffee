$ document
	.ready ->

		$ '.language-select li'
			.click (e)->
				val = $(@).data 'value'
				text = $(@).text()
				$(@).siblings().removeClass 'active'
				$(@).addClass 'active'
				$('.language-select input').val(val).trigger 'change'
				$('.language-select .anchor .text').text text
				return

		return