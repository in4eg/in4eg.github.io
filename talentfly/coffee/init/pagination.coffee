### PAGINATION ###
paginationBox = $('#pagination-box')[0]
pageSelect = $('*[data-page-select]')[0]
pagesNumber = 1

renderPagination = (page, countPages) ->
    allPageEls = $('.page-list li')
    nextElementBtn = $($(paginationBox).find('.page-list')[0]).find('.next-li')[0]
    firstPage = $('*[data-prototype-pageItem]')[0]
    pagesNumber = countPages
    # pages reset
    i = 0
    while i < allPageEls.length
        if(i != 0 and i != 1 and i != allPageEls.length-1)
            $(allPageEls[i]).remove()
        i++
    # select reset
    $(pageSelect).empty()
    option = document.createElement('option')
    option.innerText = 1
    $(option).val(1)
    $(pageSelect).append(option)
    
    # pager
    i = 0
    if(countPages < 6)
        while i < countPages
            newPage = $(firstPage).clone(true, true)
            $(newPage).removeAttr('data-prototype-pageItem')
            $(newPage).removeClass('hidden')
            $(newPage).removeClass('active')
            pageLink = $(newPage).find('a')[0]
            pageLink.innerText = i + 1
            span = $(newPage).find('span')[0]
            span.innerText = i + 1
            $(span).removeClass('current')
            $(span).addClass('hidden')
            if(i + 1 == page)
                $(newPage).addClass('active')
                $(span).addClass('current')
                $(span).removeClass('hidden')
            $(newPage).insertBefore(nextElementBtn)
            i++
    else if(page == countPages and countPages != 5)
        i = 4
        while i > -1
            newPage = $(firstPage).clone(true, true)
            $(newPage).removeAttr('data-prototype-pageItem')
            $(newPage).removeClass('hidden')
            $(newPage).removeClass('active')
            pageLink = $(newPage).find('a')[0]
            pageLink.innerText = page - i
            span = $(newPage).find('span')[0]
            span.innerText = page - i
            $(span).removeClass('current')
            $(span).addClass('hidden')
            if(i == 0)
                $(newPage).addClass('active')
                $(span).addClass('current')
                $(span).removeClass('hidden')
            if(i == 3)
                $(pageLink).addClass('hidden')
                $(span).removeClass('hidden')
                span.innerText = '...'
            if(i == 4)
                pageLink.innerText = 1
                span.innerText = 1

            $(newPage).insertBefore(nextElementBtn)
            i--
    else if(page == countPages-1 and countPages != 5)
        i = 4
        while i > -1
            newPage = $(firstPage).clone(true, true)
            $(newPage).removeAttr('data-prototype-pageItem')
            $(newPage).removeClass('hidden')
            $(newPage).removeClass('active')
            pageLink = $(newPage).find('a')[0]
            pageLink.innerText = page + 1 - i
            span = $(newPage).find('span')[0]
            span.innerText = page + 1 - i
            $(span).removeClass('current')
            $(span).addClass('hidden')
            if(i == 1)
                $(newPage).addClass('active')
                $(span).addClass('current')
                $(span).removeClass('hidden')
            if(i == 3)
                $(pageLink).addClass('hidden')
                $(span).removeClass('hidden')
                span.innerText = '...'
            if(i == 4)
                pageLink.innerText = 1
                span.innerText = 1

            $(newPage).insertBefore(nextElementBtn)
            i--
    else if(page == countPages-2 and countPages != 5)
        i = 4
        while i > -1
            newPage = $(firstPage).clone(true, true)
            $(newPage).removeAttr('data-prototype-pageItem')
            $(newPage).removeClass('hidden')
            $(newPage).removeClass('active')
            pageLink = $(newPage).find('a')[0]
            pageLink.innerText = page + 2 - i
            span = $(newPage).find('span')[0]
            span.innerText = page + 2 - i
            $(span).removeClass('current')
            $(span).addClass('hidden')
            if(i == 2)
                $(newPage).addClass('active')
                $(span).addClass('current')
                $(span).removeClass('hidden')
            if(i == 3)
                $(pageLink).addClass('hidden')
                $(span).removeClass('hidden')
                span.innerText = '...'
            if(i == 4)
                pageLink.innerText = 1
                span.innerText = 1

            $(newPage).insertBefore(nextElementBtn)
            i--
    else
        while i < 5
            newPage = $(firstPage).clone(true, true)
            $(newPage).removeAttr('data-prototype-pageItem')
            $(newPage).removeClass('hidden')
            $(newPage).removeClass('active')
            pageLink = $(newPage).find('a')[0]
            pageLink.innerText = page + i
            span = $(newPage).find('span')[0]
            span.innerText = page + i
            $(span).removeClass('current')
            $(span).addClass('hidden')
            if(i == 0)
                $(newPage).addClass('active')
                $(span).addClass('current')
                $(span).removeClass('hidden')
            if(i == 3)
                $(pageLink).addClass('hidden')
                $(span).removeClass('hidden')
                span.innerText = '...'
            if(i == 4)
                pageLink.innerText = countPages
                span.innerText = countPages

            $(newPage).insertBefore(nextElementBtn)
            i++

    # select
    i = 0
    while i < countPages - 1
        option = document.createElement('option')
        option.innerText = i + 2
        $(option).val(i + 2)
        $(pageSelect).append(option)
        i++
        
    $('*[data-count-page]')[0].innerText = countPages
    $(pageSelect).val(page)
    return


$('.prev').on 'click', ->
    current = $(paginationBox).find('.current')[0] #1
    if( current.innerText != '1' )
        dataRequest(current.innerText - 1)

    return

$('.page').on 'click', ->    
    current = $(paginationBox).find('.current')[0]
    $(current).addClass('hidden')
    $(current).removeClass('current')
    $(current).parent().removeClass('active')
    $(this).parent().addClass('active')
    $(this).next().removeClass('hidden')
    $(this).next().addClass('current')

    page = this.innerText
    $(pageSelect).val(page)
    # ajax
    dataRequest(page)
    return

$('.next').on 'click', ->
    current = $(paginationBox).find('.current')[0] #1
    if( +current.innerText != pagesNumber )
        dataRequest(+current.innerText + 1)
    return

$(pageSelect).on 'change', ->
    page = $(this).val()
    searchClass = '.page-' + page
    element = $(searchClass)[0]

    current = $(paginationBox).find('.current')[0]
    $(current).addClass('hidden')
    $(current).removeClass('current')
    $(current).parent().removeClass('active')

    $(element).addClass('active')
    span = $(element).find('.hidden')[0]
    $(span).addClass('current')
    $(span).removeClass('hidden')
    # ajax
    dataRequest(page)

    return