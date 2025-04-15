$('.btn').mousedown (e)->
	left = e.pageX - $(@).offset().left
	top = e.pageY - $(@).offset().top
	$('.fade', @).css({
		left: left + "px"
		top: top + "px"
	})
	setTimeout =>
		$('.fade', @).addClass 'active'
	, 1
	setTimeout =>
		$('.fade', @).removeClass 'active'
	, 610

	return

$('input[type="checkbox"], input[type="radio"]').keydown (e)->
	if e.keyCode is 13
		$(@).trigger('click')
	return

