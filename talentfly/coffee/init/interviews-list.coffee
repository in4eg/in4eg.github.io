allData = {}
url = ''
linkBox = $('*[data-pages-link]')[0]
$(document).ready ->
    url = $(linkBox).attr('data-pages-link')
    #dataRequest()
    if($('*[data-page-select]')[0])
        $('*[data-page-select]').val($('.current')[0].innerText)
    return

$('body').on 'submit', '#filterForm', (e) ->
    #clearInterviewList()
    #dataRequest()
    e.preventDefault()
    e.stopPropagation()
    #clearInterviewList()
    url = $(linkBox).attr('data-pages-link')
    interviewer = $('#interviewer').val()
    candidate = $('#candidate').val()
    date_from = $('#datepicker-from').val()
    date_to = $('#datepicker-to').val()
    #currentPageEl = $('#pagination-box').find('.active .current')[0]
    # if(!page)
    #     page = currentPageEl.innerText
    #     page = page
    $.ajax
        type: 'get'
        url: url
        data:
            'interviewer': interviewer
            'candidate': candidate
            'date-from': date_from
            'date-to': date_to
            #'page': page
        cache: false
        headers: 'X-CSRFToken': csrf_token
        success: (data) ->
            console.log('success')
            box = $('#filterForm').parent().parent()
            if($(box).find('.pagination')[0])
                $(box).find('.pagination').remove()
            $(box).find('.col-xs-12.col-md-9').remove()
            $(box).append(data)
            if($('*[data-page-select]')[0])
                $('*[data-page-select]').val($('.current')[0].innerText)
            return
        error: () ->
            console.log('Запрос не отработал!')
            return
    return

$('body').on 'click', '#clearBtn', ->
    url = $(linkBox).attr('data-pages-link')
    $('#interviewer')[0].value = ''
    $('#candidate')[0].value = ''
    $('#datepicker-from')[0].value = ''
    $('#datepicker-to')[0].value = ''
    $.ajax
        type: 'get'
        url: url
        data:
            'interviewer': ''
            'candidate': ''
            'date-from': ''
            'date-to': ''
        cache: false
        headers: 'X-CSRFToken': csrf_token
        success: (data) ->
            console.log('success')
            box = $('#filterForm').parent().parent()
            if($(box).find('.pagination')[0])
                $(box).find('.pagination').remove()
            $(box).find('.col-xs-12.col-md-9').remove()
            $(box).append(data)
            if($('*[data-page-select]')[0])
                $('*[data-page-select]').val($('.current')[0].innerText)
            return
        error: () ->
            console.log('Запрос не отработал!')
            return
    return

$('body').on 'click', '.checkbox-label', ->
    id = $($(@).parents('.intrview-item')[0]).attr('data-id')
    visibility = $(@).prev()[0].checked
    $.ajax
        type: 'post'
        url: url
        data:
            'id': id
            'visibility': !visibility
        cache: false
        headers: 'X-CSRFToken': csrf_token
        success: (data) ->
            console.log('success')
            return
        error: () ->
            console.log('Запрос не отработал!')
            return
    return


$('body').on 'change', '*[data-page-select]', ->
    console.log('work')
    $.ajax
        type: 'get'
        url: url
        data:
            'page': $(@).val()
        cache: false
        headers: 'X-CSRFToken': csrf_token
        success: (data) ->
            console.log('success')
            #$('#filterForm').parent()   
            box = $('#filterForm').parent().parent()
            if($(box).find('.pagination')[0])
                $(box).find('.pagination').remove()
            $(box).find('.col-xs-12.col-md-9').remove()
            $(box).append(data)
            if($('*[data-page-select]')[0])
                $('*[data-page-select]').val($('.current')[0].innerText)
            return
        error: () ->
            console.log('error')
            return
    return

$('body').on 'click', '.page-link', (e) ->
    e.preventDefault()
    $.ajax
        type: 'get'
        url: url
        data:
            'page': @.innerText
        cache: false
        headers: 'X-CSRFToken': csrf_token
        success: (data) ->
            console.log('success')
            #$('#filterForm').parent()   
            box = $('#filterForm').parent().parent()
            if($(box).find('.pagination')[0])
                $(box).find('.pagination').remove()
            $(box).find('.col-xs-12.col-md-9').remove()
            $(box).append(data)
            if($('*[data-page-select]')[0])
                $('*[data-page-select]').val($('.current')[0].innerText)
            return
        error: () ->
            console.log('error')
            return
    return


# dataRequest = (page) ->
#     # очищаем список от предыдущих данных
#     #clearInterviewList() # включить для стейджа
#     linkBox = $('*[data-pages-link]')[0]
#     url = $(linkBox).attr('data-pages-link') 
#     interviewer = $('#interviewer').val()
#     candidate = $('#candidate').val()
#     date_from = $('#datepicker-from').val()
#     date_to = $('#datepicker-to').val()
#     currentPageEl = $('#pagination-box').find('.active .current')[0]
#     if(!page)
#         page = currentPageEl.innerText
#         page = page
#     $.ajax
#         type: 'post'
#         url: url
#         data:
#             'interviewer': interviewer
#             'candidate': candidate
#             'date-from': date_from
#             'date-to': date_to
#             'page': page
#         cache: false
#         dataType: 'json'
#         headers: 'X-CSRFToken': csrf_token
#         success: (data) ->
#             allData = data
#             if(allData.data)
#                 i = 0
#                 while i < allData.data.length
#                     renderViewItem(allData.data[i])
#                     i++
#                 renderPagination(allData.page, allData.pages)
#             return
#         error: () ->
#             console.log('Запрос не отработал!')
#             return
#     return

renderViewItem = (data) ->
    interviewsList = $('.interviews-list')[0]
    # Create new clone
    rootItem = $('*[data-root-item]')[0]
    newItem = $(rootItem).clone(true, true)
    $(newItem).removeClass('hidden')
    $(newItem).attr('data-id', data.id)
    # interviewer
    $(newItem).find('.interviewer .name')[0].innerText = data.interviewer.full_name
    $(newItem).find('.interviewer .position')[0].innerText = data.interviewer.position
    $(newItem).find('.interviewer .location')[0].innerText = data.interviewer.location
    # candidate
    $(newItem).find('.candidate .name')[0].innerText = data.candidate.full_name
    $(newItem).find('.candidate .position')[0].innerText = data.candidate.position
    $(newItem).find('.candidate .location')[0].innerText = data.candidate.location
    # interview date
    $(newItem).find('.date .inner')[0].innerText = data.intrview.month + ' ' + data.intrview.day + ', ' + data.intrview.year
    # visible on profile
    checkbox = $(newItem).find('.checkbox-btn')[0]
    checkbox.checked = data.visible_on_profile
    $(checkbox).attr('id', data.id)
    $($(newItem).find('.checkbox-label')[0]).attr('for', data.id)
    # buttons
    $($(newItem).find('*[data-edit-interview]')[0]).attr('href', data.url_to_interview)
    
    $(interviewsList).append(newItem)

# REMOVE ITEMS EXCEPT ROOT
clearInterviewList = () ->
    items = $('.intrview-item').not('*[data-root-item]')
    i = 0
    console.log(items.length)
    while i < items.length
        if(i != 0)
            $(items[i]).remove()
        i++
    return
