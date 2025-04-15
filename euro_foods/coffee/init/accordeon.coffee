$(document).on 'click', '[data-accordeon] .anchor', ->
	$(@).parents('[data-accordeon]').toggleClass 'active'
	$('[data-accordeon]').not($(@).parents('[data-accordeon]')).removeClass 'active'

	if top != 0 and window.innerWidth <= 768
		if $(@).parents('[data-accordeon]').hasClass 'active'
			$('html,body').animate
				scrollTop: $(@).parents('[data-accordeon]').offset().top - 60
			, 200
	return