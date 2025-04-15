setOverviewSize = ->
	body = $('.overview-body')
	frame = body.find('.frame')
	content = $('.overview-content')
	footer = $('.overview-footer')
	search = $('.overview-search')
	title = $('.overview-title')
	content.css 'height', (
		frame.outerHeight() + search.outerHeight() - footer.outerHeight() - title.outerHeight() - 20
	)+'px'
	return

setOverviewSize()

if $(window).width() > 992
	Ps.initialize $('.overview-body .scrolled')[0], suppressScrollX: true

	if $('.scrolled-block').length > 0
		Ps.initialize $('.scrolled-block')[0], suppressScrollX: true
		if $('.scrolled-block').parents('.rounded').length >= 1
			Ps.destroy $('.scrolled-block')[0]

$(window).resize ->
	do setOverviewSize
	waitForFinalEvent ->
		if $(window).width() > 992
			Ps.initialize $('.overview-body .scrolled')[0], suppressScrollX: true

			if $('.scrolled-block').length > 0
				Ps.initialize $('.scrolled-block')[0], suppressScrollX: true
		else
			Ps.destroy $('.overview-body .scrolled')[0]

			if $('.scrolled-block').length > 0
				Ps.destroy $('.scrolled-block')[0]
	, 150, 'overview-content'
	return