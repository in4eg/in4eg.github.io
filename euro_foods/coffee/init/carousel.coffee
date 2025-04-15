if $('[data-carousel]').length > 0
	$('[data-carousel]').each (i, slider) ->
		if $.fn.owlCarousel
			items = $(slider).data('carousel').split(',')
			speed = $(slider).data('speed') or 3500
			timeout = $(slider).data('timeout') or 8000

			sliderId = $(slider).attr('id')

			if typeof $(slider).data('margin') isnt 'undefined'
				margin = $(slider).data('margin') 
			else
				margin = 20
			if typeof $(slider).data('nav') isnt 'undefined'
				dotsCustom = '[data-slider="' + sliderId + '"]'
			else
				dotsCustom = ''

			$(slider).owlCarousel
				loop: off
				margin: margin
				autoplay: off
				autoplayTimeout: timeout
				autoplaySpeed: speed
				nav: on
				navText: ['<i class="icon icon-left-arrow"></i>', '<i class="icon icon-right-arrow"></i>']
				dots: on
				dotsContainer: dotsCustom
				responsive:
					0: items: items[5] or 1
					481:
						items: items[4] or 1
						dots: on
					641:
						items: items[3] or 1
					767:
						items: items[2] or 1
					994:
						items: items[1] or 1
					1200:
						items: items[0] or 1

				onTranslate: (event)->
					index = event.item.index
					sliderWrap = event.delegateTarget

					if typeof $(sliderWrap).data('nav') is 'string'
						activeItem = $($(sliderWrap).data('nav')).find('[data-item]').eq(index)
						activeItem.addClass 'active'
						activeItem.siblings().removeClass 'active'

						width = $($(sliderWrap).data('nav')).outerWidth()
						offset = 0

						$('[data-slider] .nav-item').each (i, li)->
							if $(li).nextAll('.active').length > 0 or $(li).hasClass 'active'
								offset += $(li).prev().outerWidth()
							return
						elemWidth = $('[data-slider] .active').outerWidth()
						$('[data-slider] .nav-item').css
							'transform': if window.innerWidth <= 767 then 'translateX(-'+(offset-elemWidth - 21)+'px)' else 'translateX(0)'

						$($(sliderWrap).data('dots')).find('.dot').removeClass 'active'
						$($(sliderWrap).data('dots')).find('.dot').eq(index).addClass 'active'
					return

			$('[data-item]').click ->
				$(slider).trigger 'to.owl.carousel', [
					$(@).index()
					300
				]
				return

			$(document).on 'click', $(slider).data('dots') + ' > .dot', ->
				$(slider).trigger 'to.owl.carousel', [
					$(@).index()
					300
				]
				if $(@).index() is 0
					$('[data-slider] .nav-item').css
						'transform': 'translateX(0)'
				
				return
		return
