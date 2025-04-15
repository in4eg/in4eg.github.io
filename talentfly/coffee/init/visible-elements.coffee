do setVisibleItem = ->
	visibleItem = 3
	if $('#experienceMore').children().length - visibleItem <= 0
		$('#blockCounter').parents('[data-read]').addClass 'hidden'
	else
		$ '#blockCounter'
			.html $('#experienceMore').children().length - visibleItem
	return