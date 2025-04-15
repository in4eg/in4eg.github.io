$ document
	.ready ->

		waitForFinalEvent = do ->
			timers = {}
			(callback, ms, uniqueId) ->
				if !uniqueId
					uniqueId = 'Don\'t call this twice without a uniqueId'
				if timers[uniqueId]
					clearTimeout timers[uniqueId]
				timers[uniqueId] = setTimeout(callback, ms)
				return

		
		$ '.btn'
			.click ->
				$(@).addClass 'focused'
				button = $(@)
				clickTimer = setTimeout ->
					button.removeClass 'focused'
					clearTimeout(clickTimer)
				, 550
				return

		$ '.tag-list'
			.on 'click', '.tag', ->
				$(@).remove()
				return

		$ '.form-btn'
			.click ->
				$('html,body').scrollTop $('.basket-form').offset().top
				return

		$ '.clear'
			.click ->
				$(@).parents('.basket-item').remove()
				index = $(@).parents('.basket-item').data('item')
				console.log index
				$('.basket-info').find('.item-info').eq(index).remove()
				return

		$ '.filter-form'
			.on 'click', 'label', ->
				html = $(@).text()
				console.log html
				$("<li class='tag'></li>").html(html).appendTo($('.tag-list'))
				return

		$ '.clear-tag'
			.click ->
				$('.tag-list').find('.tag').remove()
				return

		$ '.block.parent'
			.on 'click', '.title', ->
				$(@).parent().toggleClass 'active'
				return

		$ '.input'
			.each (i, input)->
				$(input).focus ->
					$(input).addClass 'active'
					return
				.blur ->
					if $(input).val().trim().replace(/(\+|\-|_|\(|\)| |\s)/gim, '').length is 0
						$(input).removeClass 'active'
						$(input).val ''
					return
				return

		$ '[data-dropdown]'
			.each (i, elem)->
				$('.anchor', elem).click (e)->
					e.preventDefault()
					$(@).closest('[data-dropdown]').toggleClass 'active'
					if $(@).closest('[data-dropdown]').hasClass 'active'
						$(@).closest('[data-dropdown]').find '.scrollable'
							.perfectScrollbar 'update'
					return
				return

		$ 'body'
			.click (e)->
				if $(e.target).closest('[data-dropdown]').length is 0
					$('[data-dropdown]').removeClass 'active'
				return

		if $.fn.owlCarousel
			$ '.main-carousel'
				.owlCarousel
					loop:on
					margin:10
					nav:off
					responsive:
						0:
							items:1

			$ '.goods-carousel'
				.owlCarousel
					loop:off
					mouseDrag:off
					margin:0
					nav:off
					dots:off
					responsive:
						0:
							items:1
							dots:on
							mouseDrag:on
							loop:on
						480:
							items: 2
							dots:on
							mouseDrag:on
							loop:on
						992:
							items:4

			$ '.news-carousel'
				.owlCarousel
					loop:off
					mouseDrag:off
					margin:0
					nav:off
					dots:off
					responsive:
						0:
							items:1
							dots:on
							mouseDrag:on
							loop:on
						480:
							items: 2
							dots:on
							mouseDrag:on
							loop:on
						992:
							items:3

			$ '.similar-carousel'
				.owlCarousel
					loop:off
					mouseDrag:off
					margin:0
					nav:off
					dots:off
					responsive:
						0:
							items:1
							dots:on
							mouseDrag:on
							loop:on
						480:
							items: 1
							dots:on
							mouseDrag:on
							loop:on
						769:
							items: 2
							dots:on
							mouseDrag:on
							loop:on
						1200:
							items:3

			$ '.preview-carousel'
				.owlCarousel
					loop:off
					mouseDrag:off
					margin:0
					nav:on
					navText: ["<i class='icon icon-arrow-left'></i>", "<i class='icon icon-arrow-right'></i>"]
					dots:off
					responsive:
						0:
							items:3
							dots:on
							mouseDrag:on
							nav:off
						480:
							items:4
							dots:on
							nav:off
						769:
							items:5
							dots:on
							nav:off
						1200:
							items:5


			$ '.recommended-carousel'
				.owlCarousel
					loop:on
					mouseDrag:on
					margin:0
					nav:on
					navText: ["<i class='icon icon-arrow-left'></i>", "<i class='icon icon-arrow-right'></i>"]
					dots:off
					responsive:
						0:
							items:1
							dots:on
							mouseDrag:on
							nav:on
						545:
							items:2


			$ '.compare-carousel'
				.owlCarousel
					loop:off
					mouseDrag:off
					margin:0
					nav:off
					dots:off
					responsive:
						0:
							mouseDrag:on
							items:2
						769:
							items:3
						992:
							items:4
						1200:
							items:5

			$ '.carousel-prev'
				.click ->
					$('.compare-carousel').trigger('prev.owl.carousel');
					return

			$ '.carousel-next'
				.click ->
					$('.compare-carousel').trigger('next.owl.carousel');
					return



		$ '.preview-list'
			.on 'click', '.item', ->
				src = $(@).find('img').attr('src')
				$ '.zoom-image'
					.attr('data-zoom', src)
				$ '#product-image'
					.attr('src', src)
				setZoomImages()
				return

		$('select').each (i, select)->
			$(select).select2
				minimumResultsForSearch: -1
				dropdownParent: $(select).parent()

		$ '.change-position'
			.click ->
				$('.collapsed-right').toggleClass 'close'
				$('.collapsed-left').toggleClass 'open'
				$('.carousel-nav').toggleClass 'centered'
				$(@).toggleClass 'pushed'
				return

		do teleport = ->
			$('[data-tablet]').each (i, elem)->
				if windowWidth() <= 991
					$(elem).appendTo $ $(elem).data 'tablet'
				else
					parent = $ $(elem).data 'desktop'
					$(elem).appendTo parent
				return
			$('[data-mobile]').each (i, elem)->
				if windowWidth() <= 479
					$(elem).appendTo $ $(elem).data 'mobile'
				else if windowWidth() <= 991 and $(elem).data 'tablet'
					$(elem).appendTo $ $(elem).data 'tablet'
				else
					parent = $ $(elem).data 'desktop'
					$(elem).prependTo parent
				return

			return

		$ '.packery'
			.packery
				itemSelector: 'li'

		$ 'body'
			.click (e)->
				if $(e.target).closest('.aside-nav, .aside-nav .anchor').length is 0
					$('.aside-nav').removeClass 'active'
				return

		$ '[data-scrollto]'
			.click (e)->
				e.preventDefault()
				$('html,body').animate
					scrollTop: $($(@).data('scrollto')).offset().top
				, 500
				return

		do setFooter = ->
			height = $('.main-footer').outerHeight()
			$('main').css 'padding-bottom', height+'px'
			$('.main-footer').css 'margin-top', -height+'px'
			return

		$ '.open-catalog'
			.click ->
				$('.main-nav').addClass('active')
				$('body, html').addClass('overlayed')
				return

		$ '.close-nav'
			.click ->
					$('.main-nav').removeClass('active')
					$('body, html').removeClass('overlayed')
					return

		$ '.show-catalog'
			.click ->
				if windowWidth() <= 991
					$('.tablet-nav').addClass('active')
					$(@).siblings('.nav-list').hide()
					$(@).hide()
					$('.hidden-tablet').hide()
					return

		$ '.toggle-search'
			.click ->
				if windowWidth() <= 639
					$(@).siblings('.inner-form').toggleClass('active')
					return

		$ 'body'
			.click (e)->
				if $(e.target).closest('.inner-form, .toggle-search').length is 0
					$('.inner-form').removeClass 'active'
				return

		$ '.close-catalog'
			.click ->
				$('.tablet-nav').removeClass('active')
				$(@).parents().siblings('.nav-list').show()
				$('.show-catalog').show()
				$('.hidden-tablet').show()
				return

		$ '.list li'
			.click ->
				$(@).siblings().removeClass('active')
				$(@).parents().siblings('.mobile-full').find('.list li').removeClass('active')
				$(@).toggleClass('active')
				return

		$ '.open-filter'
			.click ->
				if windowWidth() <= 768
					$('.filter-form').addClass('active')
					$('body, html').addClass('overlayed')
					return

		$ '.close-filter'
			.click ->
				if windowWidth() <= 768
					$('.filter-form').removeClass('active')
					$('body, html').removeClass('overlayed')
					return

		$('.main-footer').find('.title')
			.click ->
				if windowWidth() <= 479
					$(@).toggleClass('active')
					$(@).next('.subnav').toggleClass('active')
					return

		$ '.compare-remove'
			.click ->
				$(@).parents('.owl-item').remove().css('width', '0px')
				$(@).parents('.item').remove()
				return

		do setZoomImages = ->
			if $(document).width() > 992
				$ '.zoom-image'
					.each (i, img)->
						$(img).zoom({url: $(img).attr('zoom')})
						return
			else
				$ '.zoom-image'
					.each (i, img)->
						$(img).trigger('zoom.destroy');
						return
			return

		$ window
			.resize ->
				waitForFinalEvent (->
					do setFooter
					do teleport
					do setZoomImages

					return
				), 200, ''
				return

		return