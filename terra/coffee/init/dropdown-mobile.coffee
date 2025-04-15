
do dropdownOpen = ->
	if window.innerWidth <= 1199
		$(document).find('[data-dropdown]')
			.each (i, elem) ->
				$(elem).on 'click', ->
					$('.dropdown').not $(@)
						.each (i, el)->
							$(el).removeClass 'active'
							return
					$(@).toggleClass 'active'
					return
				return
	else
		$(document).find('[data-dropdown]')
			.each (i, elem) ->
				$(elem).off 'click', ->
					$('.dropdown').not $(@)
						.each (i, el)->
							$(el).removeClass 'active'
							return
					$(@).toggleClass 'active'
					return
			return
	return

$(window).resize ->
	if window.innerWidth <= 1199
		dropdownOpen()
	return

