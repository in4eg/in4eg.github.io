$(document).ready ->
    # запрос на новые записи
    checkCheckers() # выбрана ли какая-нибудь запись
    changeRole(roleSelect) # выбрана ли категирия интервьюер/кандидат
    dataRequest()
    return

$('#filterForm').on 'submit', (e) ->
    e.preventDefault()
    dataRequest(1)
    return



dataRequest = (page) ->
    # очищаем список от предыдущих данных
    clearUsersList() # включить на стейдже
    linkBox = $('*[data-pages-link]')[0]
    url = $(linkBox).attr('data-pages-link') 
    country = $('#countrySelect').val()
    city = $('#citySelect').val()
    role = $('#roleSelect').val()
    interviewer = $('#interviewer').val()
    candidate = $('#candidate').val()
    email = $('#email').val()
    withInterview = $('#withInterviewChecker')[0].checked
    withoutInterview = $('#withoutInterviewChecker')[0].checked

    # определяем нужную страницу
    currentPageEl = $('#pagination-box').find('.active .current')[0]
    if(!page)
        page = currentPageEl.innerText
        page = page
    $.ajax
        type: 'post'
        url: url
        data:
            'country': country
            'cities': city
            'role': role
            'interviewer': interviewer
            'candidate': candidate
            'email': email
            'withInterview': withInterview
            'withoutInterview': withoutInterview
            'page': page
        cache: false
        dataType: 'json'
        headers: 'X-CSRFToken': csrf_token
        success: (data) ->
            allData = data
            if(allData.data)
                i = 0
                while i < allData.data.length
                    renderViewItem(allData.data[i])
                    i++
            renderPagination(allData.page, allData.pages)
            return
        error: () ->
            console.log('ERROR!')
            return
    
    return


usersList = $('.interviews-list.users')[0]
privateLinks = {}
months = {
        '12': 'Dec'
        '01': 'Jan'
        '02': 'Feb'
        '03': 'Mar'
        '04': 'Apr'
        '05': 'May'
        '06': 'Jun'
        '07': 'Jul'
        '08': 'Aug'
        '09': 'Sep'
        '10': 'Oct'
        '11': 'Nov'
    }

renderViewItem = (data) ->
    # create item
    newItem = $($('*[data-root-user]')[0]).clone(true, true)
    $(newItem).removeClass('hidden')
    $(newItem).removeAttr('data-root-user')
    $(newItem).attr('data-id', data.id)
    $($(newItem).find('.choose-user')[0]).attr('id', 'chooseUser-' + data.id)
    $($(newItem).find('.choose-user + label')[0]).attr('for', 'chooseUser-' + data.id)
    $($(newItem).find('.choose-user')[0]).attr('data-id', data.id)
    if data.photo
        $($(newItem).find('.photo')[0]).attr('src', data.photo)
    $($(newItem).find('.name')[0]).attr('href', data.profile_link)
    # main info in info-box
    $(newItem).find('.name')[0].innerText = data.full_name
    $(newItem).find('.user-id')[0].innerText = 'ID' + data.id
    $(newItem).find('.group')[0].innerText = data.role
    $(newItem).find('.position')[0].innerText = data.position
    if(data.country != '' or data.city != '')
        $(newItem).find('.location')[0].innerText = data.country + ', ' + data.city
    else
        $(newItem).find('.phone').prev().remove()
    if(data.email != '')
        $(newItem).find('.email')[0].innerText = data.email
    else
        $(newItem).find('.phone').prev().remove()
    if(data.phone != '')
        $(newItem).find('.phone')[0].innerText = data.phone
    else
        $(newItem).find('.phone').prev().remove()
    # additional-box
    $('*[data-dropdown-value="Share profile"]').attr('data-link', data.share_profile_link)
    $($(newItem).find('*[data-dropdown-value="View Interviews"]')[0]).attr('data-link', data.interviews_link)
    if(data.role == 'candidate' and !isEmpty(data.invite) and data.invite)
        $(newItem).find('.upper')[0].innerText = months[data.invite.month] + ' ' + data.invite.day + ', ' + data.invite.year
        if(data.invite.time)
            time = clearTime(data.invite.time)
            $(newItem).find('*[data-time]')[0].innerText = time.slice(0, 5) + ' ' + time.slice(5, 7)
            $(newItem).find('*[data-interlocutor]')[0].innerText = data.invite.interviewer
        else
            $(newItem).find('*[data-time]').remove()
    else
        $(newItem).find('.date').text('No interviews schedules')

    if(data.role == 'candidate')
        $($(newItem).find('*[data-dropdown-value="Assign interviewer"]')[0]).removeClass('hidden')
    if(data.role == 'interviewer')
        $($(newItem).find('*[data-dropdown-value="Assign candidate"]')[0]).removeClass('hidden')

    if(data.is_active)
        $($(newItem).find('*[data-dropdown-value="Deactivate profile"]')[0]).removeClass('hidden')
        $(newItem).addClass('active-user')
    else
        $($(newItem).find('*[data-dropdown-value="Reactivate profile"]')[0]).removeClass('hidden')

    privateLinks[data.id] = data.private_links
    # list of interviews
    if(data.role == 'interviewer' and data.interviews.length > 0)
        interviewsListBox = $($('*[data-root-interviewsList-box]')[0]).clone(true, true)
        $(interviewsListBox).find('.interviewsCount')[0].innerText = data.interviews.length
        interviewsList = $($(interviewsListBox).find('*[data-root-interviewsList]')[0])
        i = 0
        while i < data.interviews.length    
            interviewItem = $($('*[data-root-interview-item]')[0]).clone(true, true)
            $(interviewItem).removeClass('hidden')
            $(interviewItem).attr('id', data.interviews[i].id)
            # date-box
            # дата
            months = {
                '12': 'Dec'
                '01': 'Jan'
                '02': 'Feb'
                '03': 'Mar'
                '04': 'Apr'
                '05': 'May'
                '06': 'Jun'
                '07': 'Jul'
                '08': 'Aug'
                '09': 'Sep'
                '10': 'Oct'
                '11': 'Nov'
            }
            $(interviewItem).find('.upper')[0].innerText = months[data.interviews[i].month] + ' ' + data.interviews[i].day + ', ' + data.interviews[i].year
            # for taking PM/AM of time property
            time = clearTime(data.interviews[i].time)
            $(interviewItem).find('.time')[0].innerText = time.slice(0, 5) + ' ' + time.slice(5, 7)
            # user-info-box
            $(interviewItem).find('.name')[0].innerText = data.interviews[i].candidate
            $(interviewItem).find('.user-id')[0].innerText = data.interviews[i].candidate_id
            $(interviewItem).find('.position')[0].innerText = data.interviews[i].position
            # info
            $(interviewItem).find('.location')[0].innerText = data.interviews[i].country + ', ' + data.interviews[i].city
            $(interviewItem).find('.email')[0].innerText = data.interviews[i].email
            $(interviewItem).find('.phone')[0].innerText = data.interviews[i]. phone
            $(interviewsList).append(interviewItem)     
            i++
    # insert item into list
    $(usersList).append(newItem)
    $(usersList).append(interviewsListBox)
    $(interviewsListBox).removeClass('hidden')
    return


clearTime = (time) ->
    firstDecade = time.slice(0, 2)
    if firstDecade > 12
        firstDecade = firstDecade - 12
        if firstDecade < 10
            firstDecade = '0' + firstDecade
        time = firstDecade + time.slice(2, 5) + 'PM'
    else
        time = time + 'AM'
    return time


# REMOVE ITEMS EXCEPT ROOT
clearUsersList = () ->
    items = $('.intrview-item')
    interviews = $('.accordeon-default')
    i = 0
    while i < items.length
        if(i != 0)
            $(items[i]).remove()
        i++

    i = 0
    while i < interviews.length
        if(i != 0)
            $(interviews[i]).remove()
        i++   
    return



$('#clearBtn').on 'click', ->
    $('#countrySelect').find('option')[0].selected = true
    $('#citySelect').find('option')[0].selected = true
    $('#roleSelect').find('option')[0].selected = true
    $('#interviewer')[0].value = ''
    $('#candidate')[0].value = ''
    $('#email')[0].value = ''
    $('#withInterviewChecker')[0].checked = false
    $('#withoutInterviewChecker')[0].checked = false
    dataRequest()
    return

# ACCORDEON
# нужен ли closeList(this)
$('.interviews-list.users').on 'click', '.accordeon-title', ->
    contents = $('.accordeon-content')
    closeList(this)
    title = $(this)
    $(title).toggleClass 'toggle-open'

    state = $(title).find('.state')
    $(state).text('SHOW')

    contents.filter(':visible').slideUp ->
        $(this).prev('.accordeon-title').removeClass 'is-opened'
        $(this).parent().find('.state')[0].innerText = 'SHOW'
        return
    content = title.next('.accordeon-content')
    if !content.is(':visible')
        $(state).text('HIDE')
        content.slideDown ->
            title.addClass 'is-opened'
            return
    
    return
    

closeList = (title) ->
    $('.question').each (index, element) ->
        if( title != element )  
            $(element).removeClass 'toggle-open'
            $(element).removeClass 'is-opened'
        return
    return

isEmpty = (obj) ->
    for prop of obj
        if obj.hasOwnProperty(prop)
            return false
    return JSON.stringify(obj) == JSON.stringify({})

###{
    'id': '12312',
    'candidate': 'Test Candidate', предложим переименовать в full_name
    'role': 'candidate'/'interviewer'
    'photo': 'photo_url',
    'position': 'position',
    'phone': '+124314234234',
    'email': 'asd@mail.com',
    'country': 'country',
    'city': 'Some City',
    'state': 'New York',
    'invite': { # empty if it's interviewer page
        'day': '12',
        'month': 'JUL',
        'year': '2018',
        'time': '05:30',
        'interviewer': 'Some Interviewer'
    },
    'interviews': [  # empty if it's candidate page
        {
            'id': '12314',
            'status': 'status',
            'day': '12',
            'month': 'JUL',
            'year': '2018',
            'time': '05:30',
            'candidate_id': '123456',
            'candidate': 'Some Candidate',
            'position': 'Worker',
            'phone': '+124314234234',
            'email': 'asd@mail.com',
            'country': 'country',
            'city': 'Some City',
            'state': 'New York'
        }, {...}
    ],
   'private_links':[ {
          'id': id
         'name': 'Some Name',
         'date': 'some date',
         'link': 'Some link' зачем тут линк? Я посылаю ИД, имя и дату, ты возвращаешь один линк и всё.
     }
    ],
     'profile_link': 'https://link_to_profile/',
     'interviews_link': 'https://link_to_interviews_page/',
###