closeDropdowns = (dropdown) ->
	$('.js-dropdown').each (index, element) ->
		if( dropdown != element )
			$(element).removeClass 'is-open'
		return
	return

(($, window, document) ->
	$html = $('html')
	$html.on 'click.ui.dropdown', '.js-dropdown', (e) ->
		e.preventDefault()
		closeDropdowns(this)
		$(this).toggleClass 'is-open'
		return
	$html.on 'click.ui.dropdown', '.js-dropdown [data-dropdown-value]', (e) ->
		e.preventDefault()
		$item = $(this)
		$dropdown = $item.parents('.js-dropdown')
		$dropdown.find('.js-dropdown__input').val $item.data('dropdown-value')
		#$dropdown.find('.js-dropdown__current').text $item.text() # set the text of options' value
		return
	$html.on 'click.ui.dropdown', (e) ->
		$target = $(e.target)
		if !$target.parents().hasClass('js-dropdown')
			$('.js-dropdown').removeClass 'is-open'
		return
	return
) jQuery, window, document

lastDropdown = $('.c-dropdown__list').last()
footer = $('.main-footer.admin-footer')[0]

### if elements are exist ###
if(lastDropdownTop and footer)
	lastDropdownTop = $(lastDropdown).offset().top
	footerTop = $(footer).offset().top

	if(footerTop < lastDropdownTop + 330)
		lastDropdown.addClass('dropdown-up')
		# spike
		prevLastDropDown = $('.c-dropdown__list')[$('.c-dropdown__list').length - 2]
		$(prevLastDropDown).addClass('dropdown-up')
		beforePrevLastDropDown = $('.c-dropdown__list')[$('.c-dropdown__list').length - 3]
		$(beforePrevLastDropDown).addClass('dropdown-up')