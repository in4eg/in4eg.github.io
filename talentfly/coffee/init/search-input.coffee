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