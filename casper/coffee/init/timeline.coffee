$ document
	.ready ->

		$('.timeline .point').hover (e)-> $('.timeline .point').removeClass 'active'

		$('.timeline').mouseleave (e)->
			$('.timeline .point').eq(0).addClass 'active'
			return


		return