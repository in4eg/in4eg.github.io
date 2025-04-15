$ '.tooltip-cover'
	.on 'click', '.close', ->
		$(@).parents('[data-dropdown]').removeClass 'active'
		return

EasingFunctions =
	linear: (t) ->
		t
	easeInQuad: (t) ->
		t * t
	easeOutQuad: (t) ->
		t * (2 - t)
	easeInOutQuad: (t) ->
		if t < .5 then 2 * t * t else -1 + (4 - (2 * t)) * t
	easeInCubic: (t) ->
		t * t * t
	easeOutCubic: (t) ->
		--t * t * t + 1
	easeInOutCubic: (t) ->
		if t < .5 then 4 * t * t * t else (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
	easeInQuart: (t) ->
		t * t * t * t
	easeOutQuart: (t) ->
		1 - (--t * t * t * t)
	easeInOutQuart: (t) ->
		if t < .5 then 8 * t * t * t * t else 1 - (8 * --t * t * t * t)
	easeInQuint: (t) ->
		t * t * t * t * t
	easeOutQuint: (t) ->
		1 + --t * t * t * t * t
	easeInOutQuint: (t) ->
		if t < .5 then 16 * t * t * t * t * t else 1 + 16 * --t * t * t * t * t

window.runProgressBar = (progress)->

	isRunning = false

	return ->

		if isRunning then return
		isRunning = true

		progressValue = progress.find 'progress'
		persent = progress.find '.progress-value'
		line = progress.find '.progress-bar'
		speed = progress.data('speed') or 0.001

		tokensSold = progress.data 'tokens-sold'
		tokensMax = progress.data 'tokens-max'
		tokensPercent = Math.round(tokensSold/tokensMax * 100)

		step = 0

		timerId = setInterval((->
			step += speed
			calculatedPrecent = EasingFunctions.easeInOutCubic step
			progressValue.val calculatedPrecent
			persent.html (calculatedPrecent*tokensPercent).toFixed(0) + '%'
			line.css 'width', calculatedPrecent*tokensPercent + '%'

			if step >= 1
				clearInterval timerId
				persent.html tokensPercent + '%'
				line.css 'width', tokensPercent + '%'
			return
		), 16.6)
		return


