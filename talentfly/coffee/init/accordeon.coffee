# ACCORDEON
contents = $('.accordeon-content')
titles = $('.accordeon-title')
titles.on 'click', ->

	title = $(this)
	remove(this)

	$(title).toggleClass 'toggle-open'

	contents.filter(':visible').slideUp ->
		$(this).prev('.accordeon-title').removeClass 'is-opened'
		return
	content = title.next('.accordeon-content')
	if !content.is(':visible')
		content.slideDown ->
			title.addClass 'is-opened'
			return
	return


remove = (title) ->
	$('.accordeon-title').each (index, element) ->
		if( element != title )
			$(element).removeClass 'toggle-open'
			$(element).removeClass 'is-opened'
			return
	return

