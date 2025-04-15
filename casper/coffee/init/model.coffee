$ document
	.ready ->

		$ '.model-wrapper .point'
			.click (e)->
				if $(e.target).closest('.tooltip').length is 0
					$('.model-wrapper .point').not(@).removeClass 'opened'
					$(@).toggleClass 'opened'
				return

		# $ 'body'
		# 	.click (e)->
		# 		if $(e.target).closest('.model-wrapper .point').length is 0
		# 			$('.model-wrapper .point').removeClass 'opened'
		# 		return

		$ '.model-wrapper .point .close'
			.click (e)->
				$(@).closest('.point').removeClass 'opened'
				return

		return