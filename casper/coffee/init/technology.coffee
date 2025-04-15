$ document
	.ready ->

		$ '.technology-list li'
			.click (e)->
				if $(e.target).closest('.tooltip').length is 0
					$('.technology-wrapper .point').not(@).removeClass 'opened'
					$(@).find('.point').toggleClass 'opened'
					$(@).siblings().removeClass 'opened'
					$(@).addClass 'opened'
					$('.servers-list > li').removeClass 'opened'


				return


		$ '.technology-wrapper .point .close'
			.click (e)->
				$(@).closest('.point').removeClass 'opened'
				$(@).parents('li').removeClass 'opened'
				return


		$ '.servers-list > li'
			.click (e)->
				$('.technology-list li').removeClass 'opened'
				$('.technology-list li').find('.point').removeClass 'opened'
				$($ '.servers-list > li').not(@).removeClass 'opened'
				$(@).toggleClass 'opened'
				return


		return