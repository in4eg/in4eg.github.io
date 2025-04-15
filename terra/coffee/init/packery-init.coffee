do packeryInit = ->
	if $.fn.packery
		packeryOptions = 
			itemSelector: '.item'

		packeryGrid = $('[data-packery]')

	isActive = undefined

	do packeryToggle = ->
		if window.innerWidth > 681
			isActive = on
			if isActive is on
				packeryGrid.packery packeryOptions
		else
			if isActive is on
				packeryGrid.packery 'destroy'
				isActive = off
		return

	$ window
		.resize ->
			packeryToggle()
			return
	return