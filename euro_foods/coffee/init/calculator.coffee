waitForFinalEvent = do ->
	timers = {}
	(callback, ms, uniqueId) ->
		if !uniqueId
			uniqueId = 'Don\'t call this twice without a uniqueId'
		if timers[uniqueId]
			clearTimeout timers[uniqueId]
		timers[uniqueId] = setTimeout(callback, ms)
		return

dropDisabledClass = (plus, minus)->
	minus.removeClass 'disabled'
	plus.removeClass 'disabled'

$('body').on 'click', '.calculator .plus', (e)->
	calc = $(@).closest('.calculator')[0]
	input = $('input', calc)
	plus = $('.plus', calc)
	minus = $('.minus', calc)
	max = $(calc).data 'max' || 99
	min = $(calc).data 'min' || 1
	counter = $(calc).siblings('[data-calculator]').find('.count')

	count = parseInt input.val().trim()
	dropDisabledClass plus, minus
	count++ if count < max
	if count is max then plus.addClass 'disabled'
	input.val(count).trigger 'change'
	if input.val() > 0 then input.parents('[data-item]').addClass 'selected'; input.parents('[data-general]').addClass 'choosen'

	return

$('body').on 'click', '.calculator .minus', (e)->
	calc = $(@).closest('.calculator')[0]
	input = $('input', calc)
	plus = $('.plus', calc)
	minus = $('.minus', calc)
	max = $(calc).data 'max' || 99
	min = $(calc).data 'min' || 0
	counter = $(calc).siblings('[data-calculator]').find('.count')

	count = parseInt input.val().trim()
	dropDisabledClass plus, minus
	count-- if count > min
	if count is min then minus.addClass 'disabled'
	input.val(count).trigger 'change'

	if input.val() < 1 then input.parents('[data-item]').removeClass 'selected';

	return

$(document).on 'change input', '.calculator input', ->
	calc = $(@).parents('.calculator')
	counter = $(calc).siblings('[data-calculator]').find('.count')
	counter.html  $(@).val()

	waitForFinalEvent (=>
		$(calc).removeClass 'active';
		if $(@).val() > 0 
			$(calc).siblings('[data-calculator].first').addClass 'hidden'
			$(calc).siblings('[data-calculator].second').removeClass 'hidden'
		else
			$(calc).siblings('[data-calculator].second').addClass 'hidden'
			$(calc).siblings('[data-calculator].first').removeClass 'hidden'
		return
	), 900, ''
	return


$ document
	.on 'click', '[data-calculator]', ->
		$(@).siblings('.calculator').addClass 'active'
		counter = $(@).siblings('[data-calculator]').find('.count')
		input = $(@).siblings('.calculator').find('input')
		count = parseInt input.val().trim()

		if $(@).hasClass 'first'
			count++
			input.val(count).trigger 'change'
			input.parents('[data-item]').addClass 'selected';

		return