processMainMenu = ->

	dropdown = $('#toggleMenuDropdown')
	dropdownMenu = dropdown.find '.dropdown'
	menu = $('.main-menu .menu')

	dropdown.find('li').each (i, li)->
		$(li).insertAfter $('.main-menu .menu > li').not(dropdown).eq(-1)

	list = $('.main-menu .menu > li').not dropdown

	totalWidth = 0
	menuWidth = $('.main-menu').outerWidth()

	list.each (i, li)->
		totalWidth += $(li).outerWidth()
		if totalWidth > (menuWidth - 120)
			$(li).appendTo dropdownMenu

	if dropdownMenu.find('> li').length is 0
		dropdown.addClass 'hidden'
	else dropdown.removeClass 'hidden'

	return

processMainMenu()


$('#toggleMenuDropdown > a').click (e)->
	e.preventDefault()
	$('#toggleMenuDropdown').toggleClass 'active'
	return

$(document).click (e)->
	if $(e.target).closest('#toggleMenuDropdown').length is 0
		$('#toggleMenuDropdown').removeClass 'active'
	return

$(window).resize ->

	waitForFinalEvent ->
		processMainMenu()
		return
	, 150, 'menu'

	return