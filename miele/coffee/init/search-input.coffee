$ '.search-form'
	.find '.input'
	.keyup ->
		if $(@).val().trim().length > 1
			$(@).closest('.search').addClass 'active'
			$ '.search-results .scrollable'
				.perfectScrollbar('update')
		else $(@).closest('.search').removeClass 'active'
		return