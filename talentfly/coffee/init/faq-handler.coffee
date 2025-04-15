#SEARCH
inputSearch = $('#inputSearch')[0]
searchBox = $('#searchBox')[0]


$(inputSearch).on 'click', ()->
	$(searchBox).addClass('long-search-box')
	return

$(inputSearch).on 'blur', ()->
	if( !inputSearch.value )
		$(searchBox).removeClass('long-search-box')
		$(searchBox).addClass('usual-search-box')
	else    
		$(searchBox).addClass('long-search-box')

	return


# ACCORDEON
contents = $('.answer')
titles = $('.question')
titles.on 'click', ->

	title = $(this)
	remove(this)

	$(title).toggleClass 'toggle-open'

	contents.filter(':visible').slideUp ->
		$(this).prev('.question').removeClass 'is-opened'
		return
	content = title.next('.answer')
	if !content.is(':visible')
		content.slideDown ->
			title.addClass 'is-opened'
			return
	return



remove = (title) ->
	$('.question').each (index, element) ->
		if( element != title )
			$(element).removeClass 'toggle-open'
			$(element).removeClass 'is-opened'
			return
	return

#----------Search----------

searchQuestions = (key) ->
  	results = undefined
  	results = getSearchResults(key)
  	if results.found.length == 0
    	showMessage()
  	else
    	highlightKeys key, results
    	hideQuestions results
  	return

getSearchResults = (key) ->
  	`var i`
  	unfound = []
  	found = []
  	i = 0
  	while i < bufferedQuestionObjects.length
    	questionObjects[i].innerHTML = bufferedQuestionObjects[i]
    	i++
  	i = 0
  	while i < questionObjects.length
    	if questionObjects[i].innerText.toLowerCase().includes(key.toLowerCase()) == false
      	unfound.push questionObjects[i]
    	else
      	found.push questionObjects[i]
    	i++
  	{
    'unfound': unfound
    'found': found
  }

showMessage = ->
  	$('.search-box-with-message').addClass 'not-found'
  	$('.accordeon-box').css 'display', 'none'
  	return

highlightKeys = (key, results) ->
  	regexp = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')
  	inner = undefined
  	i = 0
  	while i < questionObjects.length
    	inner = questionObjects[i].innerHTML
    	questionObjects[i].innerHTML = inner.replace(regexp, '<span class="highlighted-key">$&</span>')
    	i++
  	return

hideQuestions = (results) ->
  	if $('.search-box-with-message').hasClass('not-found')
    	$('.search-box-with-message').removeClass 'not-found'
    	$('.accordeon-box').css 'display', 'block'
  	i = 0
  	while i < results.unfound.length
    	results.unfound[i].parentNode.parentNode.style.display = 'none'
    	i++
  	j = 0
  	while j < results.found.length
    	results.found[j].parentNode.parentNode.style.display = 'block'
    	j++
  	return

$(document).ready ->
  	$('#inputSearch').on 'keyup', ->
    	searchQuestions $(this).context.value
    	return
  	return
questionObjects = document.getElementsByClassName('question-text')
bufferedQuestionObjects = []
i = 0
while i < questionObjects.length
  	bufferedQuestionObjects[i] = questionObjects[i].innerHTML
  	i++