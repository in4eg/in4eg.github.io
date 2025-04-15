$('.command-carousel').owlCarousel
	loop: off
	margin: 0
	nav: on
	mouseDrag: off
	navText: ['<i class="icon icon-angle-left"></i>', '<i class="icon icon-angle-right"></i>']
	responsive:
		0:
			items: 1
			nav: off
		640:
			items: 2
			slideBy: 2
			nav: off
		993:
			items: 3
			slideBy: 3


$('[data-hover]').click ->
	$(@).parents('.owl-item').siblings().removeClass 'index'
	$(@).parents('.owl-item').addClass 'index'

	if $(@).hasClass('active')
		$(@).removeClass 'active'
	else
		$('[data-hover]').removeClass 'active'
		$(@).addClass 'active'
	return

$('[data-close]').click (e)->
	e.stopPropagation()
	$($(@).data('close')).removeClass 'active'
	return