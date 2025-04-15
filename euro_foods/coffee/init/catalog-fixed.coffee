waitForFinalEvent = do ->
	timers = {}
	(callback, ms, uniqueId) ->
		if !uniqueId
			uniqueId = 'Don\'t call this twice without a uniqueId'
		if timers[uniqueId]
			clearTimeout timers[uniqueId]
		timers[uniqueId] = setTimeout(callback, ms)
		return


hideBlock = ->
	$(window).scroll ->

		if window.innerWidth <= 767
			$('[data-scroll-hide]').addClass 'hidden'

			waitForFinalEvent (->
				$('[data-scroll-hide]').removeClass 'hidden'
				return
			), 500, ''
		else
			$('[data-scroll-hide]').removeClass 'hidden'
		return
	return

if window.innerWidth <= 767
	hideBlock()
else
	$('[data-scroll-hide]').removeClass 'hidden'

# resize
$(window).resize ->
	if window.innerWidth <= 767
		hideBlock()
	else
		$('[data-scroll-hide]').removeClass 'hidden'
	return