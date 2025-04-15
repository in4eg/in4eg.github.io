(($) ->

	$.fn.swipeDetector = (options) ->
		# States: 0 - no swipe, 1 - swipe started, 2 - swipe released
		swipeState = 0
		# Coordinates when swipe started
		startX = 0
		startY = 0
		# Distance of swipe
		pixelOffsetX = 0
		pixelOffsetY = 0
		# Target element which should detect swipes.
		swipeTarget = this
		defaultSettings = 
			swipeThreshold: 70
			useOnlyTouch: false
		# Initializer

		swipeStart = (event) ->
			if options.useOnlyTouch and !event.originalEvent.touches
				return
			if event.originalEvent.touches
				event = event.originalEvent.touches[0]
			if swipeState == 0
				swipeState = 1
				startX = event.clientX
				startY = event.clientY
			return

		swipeEnd = (event) ->
			if swipeState == 2
				swipeState = 0
				if Math.abs(pixelOffsetX) > Math.abs(pixelOffsetY) and Math.abs(pixelOffsetX) > options.swipeThreshold
					# Horizontal Swipe
					if pixelOffsetX < 0
						swipeTarget.trigger $.Event('swipeLeft.sd')
						# console.log 'Left'
					else
						swipeTarget.trigger $.Event('swipeRight.sd')
						# console.log 'Right'
				else if Math.abs(pixelOffsetY) > options.swipeThreshold
					# Vertical swipe
					if pixelOffsetY < 0
						swipeTarget.trigger $.Event('swipeUp.sd')
						# console.log 'Up'
					else
						swipeTarget.trigger $.Event('swipeDown.sd')
						# console.log 'Down'
			return

		swiping = (event) ->
			# If swipe don't occuring, do nothing.
			if swipeState != 1
				return
			if event.originalEvent.touches
				event = event.originalEvent.touches[0]
			swipeOffsetX = event.clientX - startX
			swipeOffsetY = event.clientY - startY
			if Math.abs(swipeOffsetX) > options.swipeThreshold or Math.abs(swipeOffsetY) > options.swipeThreshold
				swipeState = 2
				pixelOffsetX = swipeOffsetX
				pixelOffsetY = swipeOffsetY
				# console.log pixelOffsetX
			return

		(->
			options = $.extend(defaultSettings, options)
			# Support touch and mouse as well.
			swipeTarget.on 'mousedown touchstart', swipeStart
			$('html').on 'mouseup touchend', swipeEnd
			$('html').on 'mousemove touchmove', swiping
			return
		)()
		swipeTarget
		# Return element available for chaining.

	return
) jQuery


$('[data-dots-slider]').each (i, slider)->
	sliderId = $(slider).attr('id')
	dots = $('[data-dots="#' + sliderId + '"]')
	activeDot = dots.find('.dot.active').index()
	total = $('#' + sliderId).find('[data-slide]').length
	showActive = $('#' + sliderId).find('[data-slide].active').length

	if showActive > 1
		total = total / showActive - 1
	else
		total -= 1
	
	$(slider).swipeDetector().on 'swipeLeft.sd swipeRight.sd swipeUp.sd swipeDown.sd', (event) ->

		if event.type == 'swipeLeft'
			if activeDot >= total
				activeDot = total
			else
				activeDot++
				dots.find('.dot').removeClass 'active'
				dots.find('.dot').eq(activeDot).addClass 'active'
				$('#' + sliderId).find('[data-slide]').removeClass 'active'
				$('#' + sliderId).find('[data-slide="' + activeDot + '"]').addClass 'active'

		else if event.type == 'swipeRight'
			if activeDot <= 0
				activeDot = 0
			else
				activeDot -= 1
				dots.find('.dot').removeClass 'active'
				dots.find('.dot').eq(activeDot).addClass 'active'
				$('#' + sliderId).find('[data-slide]').removeClass 'active'
				$('#' + sliderId).find('[data-slide="' + activeDot + '"]').addClass 'active'

		return

	dots.on 'click', '.dot', ->
		index = $(@).index()
		activeDot = index
		
		$(@).addClass 'active'
		$(@).siblings().removeClass 'active'

		$($(dots).data('dots')).find('[data-slide]').removeClass 'active'
		$($(dots).data('dots')).find('[data-slide="' + activeDot + '"]').addClass 'active'

		return
	return


$('[data-slider]').swipeDetector().on 'swipeLeft.sd swipeRight.sd swipeUp.sd swipeDown.sd', (event) ->
	if event.type == 'swipeLeft'
		$('[data-slider] .nav-item').css
			'transform': 'translateX(0)'
	else if event.type == 'swipeRight'
		$('[data-slider] .nav-item').css
			'transform': 'translateX(0)'
	return


$('#mainMenu').swipeDetector().on 'swipeLeft.sd swipeRight.sd swipeUp.sd swipeDown.sd', (event) ->

	if event.type == 'swipeLeft'
		if $('.main-menu').hasClass 'active'
			$('.main-menu').removeClass 'active'
			$('[data-menu]').removeClass 'active'
			$('.main-header').removeClass 'opened'
			$('body')
				.css 'width', ''
				.removeClass 'overlayed'

	return