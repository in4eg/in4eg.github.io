$('[data-toggle]').mousedown (e)->
	e.preventDefault()
	if !$(@).data('toggle') then return
	if $(@).data('toggle').match /\,/gim
		array = $(@).data('toggle').split ','
		active = $(array[0])
		passive = $(array[1])
		$(@).toggleClass 'opened'
		active.toggleClass 'active'
		passive.removeClass 'active'
		$('[data-toggle]').not($(@)).removeClass 'opened'
		if active[0].nodeName.toLowerCase() is 'form' and active.hasClass 'active'
			setTimeout ->
				active.find('.input').eq(0).focus()
			, 600
	else 
		$($(@).data('toggle')).toggleClass 'active'
		$(@).toggleClass 'active'

		if $(@).children '.text'
			$(@).children('.text').toggleClass 'hidden'

	if $('.scrolled').length > 0
		setOverviewSize()
		Ps.initialize $('.overview-body .scrolled')[0], suppressScrollX: true
	
	return


$('.user-form .form-close').click (e)->
	$(@).closest('.user-form').removeClass 'active'
	$('.btn').removeClass 'opened'
	return

$ 'body'
	.click (e)->
		if $(e.target).closest('.notification-link', '.notification-details').length is 0
			$('.notification-details', '.notification-link').removeClass 'active'
			$('.notification-link').find('.notification').removeClass 'active'
		return

# Checks onfocusout if there is any text in the form inputs:
$(document).ready ->
	$('#signInEmail, #signInPassword').focusout ->
		if $(this).val() != ''
			$(this).addClass 'labeled'
		else
			$(this).removeClass 'labeled'
		return
	$('#signUpFirstName, #signUpLastName, #signUpEmail, #signUpPassword').focusout ->
		if $(this).val() != ''
			$(this).addClass 'labeled'
		else
			$(this).removeClass 'labeled'
		return
	return

$('[data-form]').mousedown (e)->
	e.preventDefault()
	if !$(@).data('form') then return
	$($(@).data('form')).addClass 'active'
	$('#signButtonsDesktop').find('.gradient-border').addClass 'opened'
	return
	# $(@).toggleClass 'active'

