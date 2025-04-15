if $('[data-slider]')
	$('[data-slider]').each (i, slider) ->
		items = $(slider).data('slider').split(',')
		$(slider).owlCarousel
			nav: off
			loop: off
			dots: off
			mouseDrag: off
			responsive:
				0:
					items: items[4]
					dots: on
				545:
					items: items[3]
					dots: on
				681:
					items: items[2]
					dots: on
				994:
					items: items[1]
					dots: off
					mouseDrag: off
				1199:
					items: items[0]
					dots: off
					mouseDrag: off
		return

if $('.js-equel-slider')
	$('.js-equel-slider').owlCarousel
		nav: off
		loop: off
		dots: off
		mouseDrag: off
		responsive:
			0:
				items: 1
				dots: on
			546:
				items: 2
				dots: on
			681:
				items: 3
				dots: on
			994:
				items: 4
				dots: off
				mouseDrag: off


if $('.js-slider')
	$('.js-slider').owlCarousel
		nav: off
		loop: off
		dots: off
		margin: 20
		mouseDrag: on
		responsive:
			0:
				items: 1
				dots: on
			546:
				items: 2
				dots: on
			994:
				items: 3
				dots: off
				mouseDrag: off