$ document
	.ready ->

do getUrlVar = ->
	url = location.protocol + '//' + location.host + location.pathname
	
	links = $('nav').find('.menu').find('a')

	for link in links
		# console.log $(link).attr('href')

		if url.endsWith $(link).attr('href')
			$(link).parent('li').addClass 'active'

	return
	return



if !String::endsWith
	Object.defineProperty String.prototype, 'endsWith', value: (searchString, position) ->
		subjectString = @toString()
		if position == undefined or position > subjectString.length
			position = subjectString.length
		position -= searchString.length
		lastIndex = subjectString.indexOf(searchString, position)
		lastIndex != -1 and lastIndex == position