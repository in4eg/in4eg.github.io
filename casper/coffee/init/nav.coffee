$('[data-open]')
	.click ->
		$($(@).data('open')).addClass 'active'
		setTimeout ->
			$('body, html').addClass 'overlayed'
			return
		, 200
		return

$('[data-close]')
	.click ->
		$($(@).data('close')).removeClass 'active'
		$('body, html').removeClass 'overlayed'
		return

$(window).scroll ->
	offsetTop($('.idea-section'))
	offsetTop($('.first-card'))
	offsetTop($('.secound-card'))
	offsetTop($('.third-card'))
	offsetTop($('.pre-ito-section'))
	offsetTop($('.spaced-section'))
	offsetTop($('.ico-section'))
	offsetTop($('.advantages-section'))
	offsetTop($('.video-section'))
	offsetTop($('.command-section'))
	offsetTop($('.disclaimer-section'))

	return

offsetTop = (element)->

	if $('#main-page').length > 0 && element.length
		top = $(document).scrollTop()

		if top >= element.offset().top
			$('.open-menu').removeClass().addClass 'open-menu'

			if element.hasClass 'scroll-purple'
				$('.open-menu').addClass 'purple'
			else if element.hasClass 'scroll-yellow'
				$('.open-menu').addClass 'yellow'

		else if top <= $('.hero-section').height()
				$('.open-menu').removeClass().addClass 'open-menu'

	return

if window.innerWidth <= 768
	$('.main-menu ul a').click ->
		$('.main-header').removeClass 'active'
		$('body, html').removeClass 'overlayed'
		return

$(window).resize ->
	$('.main-menu ul a').click ->
		$('.main-header').removeClass 'active'
		$('body, html').removeClass 'overlayed'
		return
	return