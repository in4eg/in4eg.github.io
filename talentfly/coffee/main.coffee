waitForFinalEvent = do ->
	timers = {}
	(callback, ms, uniqueId) ->
		if !uniqueId
			uniqueId = 'Don\'t call this twice without a uniqueId'
		if timers[uniqueId]
			clearTimeout timers[uniqueId]
		timers[uniqueId] = setTimeout(callback, ms)
		return

removeHash = ->
	history.pushState '', document.title, window.location.pathname + window.location.search
	return

$ document
	.ready ->
		# if at least one input have some value
		removeHash()

		inputs = $('.input')
		i = 0
		while i < inputs.length
			if $(inputs[i]).val().trim().length isnt 0
					$(inputs[i]).addClass 'labeled'
				else $(inputs[i]).removeClass 'labeled'
			i++

		###teleport###
		(teleport = ->
			$('[data-tablet]').each (i, elem)->
				if window.innerWidth <= 1007
					$(elem).appendTo $ $(elem).data 'tablet'
				else
					parent = $ $(elem).data 'desktop'
					$(elem).appendTo parent
				return
			$('[data-mobile]').each (i, elem)->
				if window.innerWidth <= 768
					$(elem).appendTo $ $(elem).data 'mobile'
				else
					parent = $ $(elem).data 'desktop'
					$(elem).appendTo parent
				return
			$('[data-mobile-xs]').each (i, elem)->
				if window.innerWidth <= 480
					$(elem).appendTo $ $(elem).data 'mobile-xs'
				else
					parent = $ $(elem).data 'desktop'
					$(elem).appendTo parent
				return
			return
		)()

		###scrollto###
		$ '[data-scrollto]'
			.click (e)->
				e.preventDefault()
				headerOffset = if $('.main-header').hasClass('fixed') then $('.main-header').outerHeight() else 0
				$('html,body').animate
					scrollTop: $($(@).data('scrollto')).offset().top - headerOffset
				, 500
				return

		# footer
		setFooterHeight = ->
			footerHeight = $('.main-footer').outerHeight()
			$('main').css
				paddingBottom: footerHeight + 'px'
			$('.main-footer').css
				marginTop: - footerHeight + 'px'
			return
		setFooterHeight()


		###
			owl carousel
		###
		if $.fn.owlCarousel
			# main slider
			mainSlider = $ '.main-slider'
				.owlCarousel {
					items: 1
					loop: on
					animateOut: 'fadeOut'
					animateIn: 'fadeIn'
					nav: off
					dots: off
					mouseDrag: off
					touchDrag: off
					smartSpeed: 1000
					fluidSpeed: 1000
					autoplaySpeed: 1000
					navSpeed: 1000
					autoplay: on
					autoplayTimeout: $('.main-slider').data('timeout') or 5000
					# autoplayHoverPause: on
					onTranslate: (event)->
						$('.main-slider-wrapper .slider-nav > li')
							.removeClass 'active'
							.eq event.item.index
							.addClass 'active'
				}
			$('.main-slider-wrapper .slider-nav > li').click (e)->
				e.preventDefault()
				mainSlider.trigger 'to.owl.carousel', $(@).index()
				return

			reviewSlider = $ '.review-slider'
				.owlCarousel {
					items: 1
					loop: on
					nav: off
					dots: off
					autoplaySpeed: 500
					navSpeed: 500
					autoplay: on
					onTranslate: (event)->

						$('.dots-slider > li')
							.removeClass 'active'
							.eq event.item.index - 2
							.addClass 'active'

						if event.item.index - 1 > $('.dots-slider > li').length
							$('.dots-slider > li')
								.removeClass 'active'
								.eq(0).addClass 'active'
						return

				}
			$('.dots-slider > li').click (e)->
				e.preventDefault()
				reviewSlider.trigger 'to.owl.carousel', $(@).index()
				return

			recommendSlider = $ '.recommendation-slider'
				.owlCarousel {
					items: 3
					loop: off
					nav: off
					dots: off
					responsive:
						0:
							items:1
						640:
							items:2
						769:
							items:4
						992:
							items:2
						1200:
							items:3
					onTranslate: (event)->
						$('.slider-prev').removeClass 'disabled'

						if event.item.index + event.page.size >= event.item.count
							$('.slider-next').addClass 'disabled'
						else
							$('.slider-next').removeClass 'disabled'

						if event.item.index is 0
							$('.slider-prev').addClass 'disabled'
						return
					onInitialize: (event)->
						if @$element.context.children.length <= event.page.size
							$('.slider-prev').addClass 'disabled'
							$('.slider-next').addClass 'disabled'
							$('.nav-overflow').addClass 'collapsed'

						$('.slider-prev').addClass 'disabled'
						return

					onResize: (event)->
						if event.item.index + event.page.size >= event.item.count
							$('.slider-next').addClass 'disabled'
						else
							$('.slider-next').removeClass 'disabled'
						return
				}
			$('.slider-next').click ->
				recommendSlider.trigger 'next.owl.carousel'
				return
			$('.slider-prev').click ->
				recommendSlider.trigger 'prev.owl.carousel', [ 300 ]
				return

			# four-item
			fourItemSlider = $ '.four-item-slider'
				.owlCarousel {
					items: 4
					loop: off
					nav: off
					dots: off
					mouseDrag: off
					responsive:
						0:
							items:1
						480:
							items:2
						769:
							items:4
						992:
							items:2
						1200:
							items:4
					onTranslate: (event)->
						$('#sliderNav').find('.slider-prev').removeClass 'disabled'

						if event.item.index + event.page.size >= event.item.count
							$('#sliderNav').find('.slider-next').addClass 'disabled'
						else
							$('#sliderNav').find('.slider-next').removeClass 'disabled'

						if event.item.index is 0
							$('#sliderNav').find('.slider-prev').addClass 'disabled'
						return
					onInitialize: (event)->
						if @$element.context.children.length <= event.page.size
							$('#sliderNav').find('.slider-prev').addClass 'disabled'
							$('#sliderNav').find('.slider-next').addClass 'disabled'
							$('#sliderNav').parents('.nav-overflow').addClass 'collapsed'

						$('#sliderNav').find('.slider-prev').addClass 'disabled'
						return

					onResize: (event)->
						if event.item.index + event.page.size >= event.item.count
							$('#sliderNav').find('.slider-next').addClass 'disabled'
						else
							$('#sliderNav').find('.slider-next').removeClass 'disabled'
						return
				}
			$('#sliderNav .slider-next').click ->
				fourItemSlider.trigger 'next.owl.carousel'
				return
			$('#sliderNav .slider-prev').click ->
				fourItemSlider.trigger 'prev.owl.carousel', [ 300 ]
				return


			countersSlider = $ '.counters-slider'
				.owlCarousel {
					items: 3
					loop: off
					mouseDrag: off
					nav: off
					dots: off
					responsive:
						0:
							items:1
							dots: on
						641:
							items:2
							dots: on
						769:
							items:3

					onTranslate: ->
						$(window).trigger 'resize'
						return
				}

		###
			main menu
		###
		toggleMainAside = ->
			isActive = $('.main-menu-toggle').hasClass 'active'
			if isActive
				$('.mobile-nav').show()
				$('html,body').addClass 'overlayed'
				setTimeout((-> $('.mobile-nav').addClass 'active'), 10);
			else
				$('.mobile-nav').removeClass 'active'
				setTimeout ->
					$('html,body').removeClass 'overlayed'
					$('.mobile-nav').hide()
				, 300
			return

		$ '.main-menu-toggle'
			.click (e)->
				e.preventDefault()
				$(@).toggleClass 'active'
				do toggleMainAside
				return

		$ '#hideMainMenu'
			.click (e)->
				e.preventDefault()
				$('.main-menu-toggle').removeClass 'active'
				do toggleMainAside
				return

			
		if $.fn.magnificPopup
			$(document).find('.video-popup').magnificPopup({
				type: 'iframe',
				mainClass: 'mfp-fade',
				closeMarkup: '<button class="mfp-close btn btn-grey btn-round" title="Close (Esc)"><i class="icon icon-close"></i></button>',
				removalDelay: 0,
				preloader: off,
				fixedContentPos: off
			})

			$(document).find('.video-open')
				.click (e)->
					src = $(@).attr('href')
					e.preventDefault()
					$.magnificPopup.close()
					
					setTimeout (->
						$.magnificPopup.open
							items:
								src: src,
							closeMarkup: '<button class="mfp-close btn btn-grey btn-round" title="Close (Esc)"><i class="icon icon-close"></i></button>',
							type: 'iframe'
						return
					), 500


					return

			# gallery init
			$('.gallery-link').magnificPopup({
				gallery: {
							enabled: on
					},
				type: 'image'
			})

			# call popup for a block not link
			$ document
				.on 'click', '[data-call-popup]', ->
					window.$.magnificPopup.open 
						items:
							src: $(@).attr('data-call-popup'),
						closeMarkup: '<button class="mfp-close btn btn-grey btn-round" title="Close (Esc)"><i class="icon icon-close"></i></button>',
						type: 'inline',
						callbacks:
							close: ->
								$('#profileImage').find('img').removeClass 'hidden'
								$('#removeUserPhoto').removeClass 'hidden'
								checkFormData($.magnificPopup.instance.ev.context.hash)
								removeHash()
								return
					return

			#popup init
			$(document).on 'click', '.open-popup-link:not(.disabled)', (e) ->
				$(@).magnificPopup(
					type: 'inline',
					midClick: on,
					focus: '.call-focus',
					closeMarkup: '<button class="mfp-close btn btn-grey btn-round"><i class="icon icon-close"></i></button>',
					zoom: enabled: off
					callbacks:
						close: ->
							checkFormData($.magnificPopup.instance.ev.context.hash)
							removeHash()
							return
				).magnificPopup 'open'
				return

		# resize
		$(window).resize ->
			waitForFinalEvent (->
				# console.log window.innerWidth
				setFooterHeight()
				teleport()

				return
			), 100, ''
			return
			
		$('.disabled').click (e)->
			e.preventDefault()
			return

		return


# check full profile modal
checkFormData = (popupId)->
	$('#emailRequest').val('')
	$(popupId).find('[data-removeon]').show()
	form = $(popupId).find('[data-multiply]')
	$('#softSkillsTableAdd').addClass 'hidden'

	formData = undefined

	if form.length
		#tech skills
		techItems = $(document).find('#technicalskills-list').children('li')

		for techItem in techItems
			title = $(techItem).find('.title').clone().children().remove().end().text().trim()

			if title.length <= 0
				techItem.remove()

		if $(document).find('#technicalskills-list').children('li').length <= 0
			$(document).find('#technicalskills-list').parents('.parent-cover').addClass 'hidden'
			$(document).find('#technicalskills-list').parents('.parent-cover').siblings('.hidden-helper').addClass 'active'

		#lang skills
		langItems = $(document).find('#languages-list').children('li')

		for langItem in langItems
			title = $(langItem).find('.title').text().trim()

			if title.length <= 0
				langItem.remove()

		if $(document).find('#languages-list').children('li').length <= 0
			$(document).find('#languages-list').addClass 'hidden'
			$(document).find('#languages-list').siblings('.hidden-helper').addClass 'active'

		#lang skills
		intItems = $(document).find('#interests-list').children('li')

		for intItem in intItems
			title = $(intItem).find('.title').text().trim()
			
			if title.length <= 0
				intItem.remove()

		if $(document).find('#interests-list').children('li').length <= 0
			$(document).find('#interests-list').addClass 'hidden'
			$(document).find('#interests-list').siblings('.hidden-helper').addClass 'active'

		#soft skills
		softItems = $(document).find('#generalSoftSkills').find('.cover').children('[data-soft-category]')

		if softItems.length <= 0
			$(document).find('#generalSoftSkills').addClass 'hidden'
			$(document).find('#generalSoftSkills').siblings('.hidden-helper').addClass 'active'

	# form.trigger('submit')
	if $('#summaryMess').text().length <= 0
		$('#summaryMess').addClass 'hidden'
		$('#summaryMess').next('.hidden-helper').addClass 'active'


	return

# for inouts labels
$ '.input'
	.on 'focus keyup blur change', ->
		if $(@).val().trim().length isnt 0
			$(@).addClass 'labeled'
		else $(@).removeClass 'labeled'
		return

# for redirects
$('*[data-redirect]').on 'click', ->
	window.location.href = $(this).attr('data-redirect')
	return

# fix a bug with closing popups
$('.close-modal').on 'click', ->
	$.magnificPopup.close()
	return