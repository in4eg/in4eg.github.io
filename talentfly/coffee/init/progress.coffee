setWidth = (progress)->
	percent = $(progress).data('complete')
	totalWidth = $(progress).width()
	width = totalWidth * percent / 100
	steps = $(progress).find('ul').children('li')
	oneStep = 100 / (steps.length - 1)

	if percent is 100
		$(progress).addClass 'complete'
	else
		$(progress).removeClass 'complete'

	for step in steps

		if percent == $(step).data('progress')
			$(step).removeClass('small').addClass 'active'
			$(progress).find('.progress').addClass 'point'

		else if percent > $(step).data('progress')
			$(step).addClass 'active small'
			$(progress).find('.progress').removeClass 'point'

		else if percent < $(step).data('progress')
			$(step).removeClass 'active small'

	if percent == 0
		$(progress).find('.progress').css 'width', width + 5 + 'px'
	else if percent is 25
		$(progress).find('.progress').css 'width', width + 'px'
	else if percent is 50
		$(progress).find('.progress').css 'width', width - 6 + 'px'
	else if percent is 75
		$(progress).find('.progress').css 'width', width - 10 + 'px'
	else if percent == 100
		$(progress).find('.progress').addClass 'point-end'
		$(progress).find('.progress').css 'width', width + 'px'
	else
		if $(progress).find('.progress').hasClass 'point-end'
			$(progress).find('.progress').removeClass 'point-end'
		$(progress).find('.progress').css 'width', width + 'px'


	showCaption(percent)
	return

showCaption = (percent, category)->
	info = $('.arrow-card').find('.info')
	info.removeClass 'active'

	if typeof category is 'undefined'
		activeCaption = $('.progress-bar').data('caption')
		if activeCaption isnt 'volunteering'
			$('.arrow-card').find('.' + activeCaption).addClass 'active'
			$('.arrow-card').removeClass 'full'
		else
			$('.arrow-card').find('.full').addClass 'active'
			$('.arrow-card').addClass 'full'
	else

		if category is 'volunteering'
			$('.arrow-card').find('.full').addClass 'active'
			$('.arrow-card').addClass 'full'
		else
			$('.arrow-card').removeClass 'full'
			$('.arrow-card').find('.'+ category).addClass 'active'

	return


$('.progress-bar').each (i, bar)->

	setWidth(bar)

	$(window).resize ->

		waitForFinalEvent ->
			setWidth(bar)
			return
		, 100, bar

		return

	return

Array::max = ->
	Math.max.apply null, this

Array::min = ->
	Math.min.apply null, this