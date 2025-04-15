roleSelect = $('#roleSelect')[0]

$('.close-modal').on 'click', ->
    $.magnificPopup.close()
    return

# filter form
$('#roleSelect').on 'change', ->
    changeRole(roleSelect)
    return

changeRole = (self) ->
    if($(self).val() == 'Interviewers')
        $($('.common-actions *[data-dropdown-value="Assign candidate"]')[0]).css('display', 'block')
        $($('.common-actions *[data-dropdown-value="Assign interviewer"]')[0]).css('display', 'none')
    else if($(self).val() == 'Candidates')
        $($('.common-actions *[data-dropdown-value="Assign candidate"]')[0]).css('display', 'none')
        $($('.common-actions *[data-dropdown-value="Assign interviewer"]')[0]).css('display', 'block')
    else
        $($('.common-actions *[data-dropdown-value="Assign candidate"]')[0]).css('display', 'block')
        $($('.common-actions *[data-dropdown-value="Assign interviewer"]')[0]).css('display', 'block')
    return

### GENERAL ACTIONS ###
selectedUsers = 0
# Assign interviewers
$('[data-general-actions] *[data-dropdown-value="Assign interviewers"]').on 'click', ->
    $('#assignPopup *[data-role]')[0].innerText = 'interviewers'
    $($(assignPopup).find('*[data-assign]')[0]).attr('data-general', 'true')
    # запрос интервьюеров чтобы назначить на кандидатов
    users = getSelectedUsers()
    $('*[data-countChecked-users]')[0].innerText = users.length
    usersID = []
    i = 0
    while i < users.length
        usersID.push($(users[i]).attr('data-id'))
        i++
    $(assignPopup).find('.access-field').not('.hidden').remove()
    data = {}
    data.usersID = JSON.stringify(usersID)
    data.action = 'get_interviewers'
    linkBox = $('*[data-pages-link]')[0]
    url = $(linkBox).attr('data-pages-link')
    $.ajax
        type: 'post'
        url: url
        data: data
        cache: false
        dataType: 'json'
        headers: 'X-CSRFToken': csrf_token
        success: (data) ->
            # если успешно, показать попап и отрендерить полученные данные
            for key, obj of data
                renderAssignList(obj)
            $('#openAssignPopupLink').click()
            return
        error: () ->
            console.log('ERROR!')
            return
    return

# Assign candidates
$('[data-general-actions] *[data-dropdown-value="Assign candidates"]').on 'click', ->
    $('#assignPopup *[data-role]')[0].innerText = 'candidates'
    $($(assignPopup).find('*[data-assign]')[0]).attr('data-general', 'true')
    # запрос кандидатов чтобы назначить на интервьюеров
    users = getSelectedUsers()
    $('*[data-countChecked-users]')[0].innerText = users.length
    usersID = []
    i = 0
    while i < users.length
        usersID.push($(users[i]).attr('data-id'))
        i++

    $(assignPopup).find('.access-field').not('.hidden').remove()
    data = {}
    data.usersID = JSON.stringify(usersID)
    data.action = 'get_candidates'
    linkBox = $('*[data-pages-link]')[0]
    url = $(linkBox).attr('data-pages-link')
    $.ajax
        type: 'post'
        url: url
        data: data
        cache: false
        dataType: 'json'
        headers: 'X-CSRFToken': csrf_token
        success: (data) ->
            # если успешно, показать попап и отрендерить полученные данные
            for key, obj of data
                renderAssignList(obj)
            #$($(assignPopup).find('*[data-assign]')[0]).attr('data-user-id', id)
            $('#openAssignPopupLink').click()
            return
        error: () ->
            console.log('ERROR!')
            return
    return

# SHARE PROFILES
$('#accessOneProfilePopup .access-name-input').on 'input', ->
    $(@).removeClass('input-error')
    $(@).parent().find('.error-tip').addClass('hidden')
    return

$('#accessOneProfilePopup .select').on 'input', ->
    $(@).removeClass('input-error')
    $(@).parent().parent().find('.error-tip').addClass('hidden')
    return

$('[data-general-actions] *[data-dropdown-value="Share profiles"]').on 'click', ->
    clearPopupSharing()
    users = getSelectedUsers()
    $('*[data-countChecked-users]')[0].innerText = users.length
    usersID = []
    i = 0
    while i < users.length
        usersID.push($(users[i]).attr('data-id'))
        i++
    $(shareProfilesPopup).attr('data-users-id', usersID)
    $.magnificPopup.open items:
        src: '#accessFewProfilesPopup'
    return

clearPopupSharing = () ->
    $(shareProfilesPopup).find('*[name="name"]')[0].value = ''
    $(shareProfilesPopup).find('*[name="email"]')[0].value = ''
    $(shareProfilesPopup).find('*[name="date"]')[0].value = 'Choose'
    $(shareProfilesPopup).find('.access-name-input')[2].value = ''
    return

shareProfilesPopup = $('#accessFewProfilesPopup')[0]
$('*[data-share-profiles]').on 'click', ->
    usersID = $(shareProfilesPopup).attr('data-users-id')
    usersID = usersID.split(',')

    linkBox = $('*[data-pages-link]')[0]
    url = $(linkBox).attr('data-pages-link')
    # validaton
    name = $(shareProfilesPopup).find('*[name="name"]')[0]
    email = $(shareProfilesPopup).find('*[name="email"]')[0]
    date = $(shareProfilesPopup).find('*[name="date"]')[0]
    if(!isValidEmail(email.value.trim()))
        $(email).addClass('input-error')
        $(email).parent().find('.error-tip').removeClass('hidden')
    else
        $(email).removeClass('input-error')
        $(email).parent().find('.error-tip').addClass('hidden')
    if(name.value.length < 2)
        $(name).addClass('input-error')
        $(name).parent().find('.error-tip').removeClass('hidden')
    else
        $(name).removeClass('input-error')
        $(name).parent().find('.error-tip').addClass('hidden')
    if(date.value == 'Choose')
        $(date).addClass('input-error')
        $(date).parent().parent().find('.error-tip').removeClass('hidden')
    else
        $(date).removeClass('input-error')
        $(date).parent().parent().find('.error-tip').addClass('hidden')
    
    if( isValidEmail(email.value.trim()) and !(name.value.length < 2) and !(date.value == 'Choose') )
        data = {}
        data.name = name.value
        data.email = email.value
        data.msg = $(shareProfilesPopup).find('*[name="message"]')[0].value
        data.exp_date = date.value
        data.to_share_ID = JSON.stringify(usersID)
        data.action = 'generate_links'
        $.ajax
            type: 'post'
            url: url
            data: data
            cache: false
            headers: 'X-CSRFToken': csrf_token
            success: (data) ->
                console.log('users has been SHARED')
                # сбросить чеккеры
                resetSelectedCheckers()
                $.magnificPopup.close()
                clearPopupSharing()
                return
            error: () ->
                console.log('ERROR!')
                $.magnificPopup.close()
                return
    return

# Deactivate profile
$('[data-general-actions] [data-dropdown-value="Deactivate profiles"]').on 'click', ->
    items = getSelectedUsers()
    arrToDiactivate = []
    arrToDiactivateID = []
    i = 0
    while i < items.length
        if($(items[i]).hasClass('active-user'))
            arrToDiactivate.push(items[i])
            arrToDiactivateID.push($(items[i]).attr('data-id'))
        i++
    linkBox = $('*[data-pages-link]')[0]
    url = $(linkBox).attr('data-pages-link')
    self = @
    # сбросить чеккеры
    resetSelectedCheckers()
    $.ajax
        type: 'post'
        url: url
        data:
            'arrID': JSON.stringify(arrToDiactivateID)
            'action': 'deactivate_users'
        cache: false
        dataType: 'json'
        headers: 'X-CSRFToken': csrf_token
        success: (data) ->
            console.log('users has been DEACTIVATED')
            i = 0
            while i < arrToDiactivate.length
                $(arrToDiactivate[i]).removeClass('active-user')
                nameBox = $(arrToDiactivate[i]).find('.name')[0]
                nameBox.innerText = nameBox.innerText + ' (DEACTIVATED)'
                i++
            return
        error: () ->
            console.log('ERROR!')
            return
    return

# Reactivate profile
$('[data-general-actions] [data-dropdown-value="Reactivate profiles"]').on 'click', ->
    items = getSelectedUsers()
    arrToReactivate = []
    arrToReactivateID = []
    i = 0
    while i < items.length
        if(!$(items[i]).hasClass('active-user'))
            arrToReactivate.push(items[i])
            arrToReactivateID.push($(items[i]).attr('data-id'))
        i++
    linkBox = $('*[data-pages-link]')[0]
    url = $(linkBox).attr('data-pages-link')
    self = @
    $.ajax
        type: 'post'
        url: url
        data:
            'arrID': JSON.stringify(arrToReactivateID)
            'action': 'activate_users'
        cache: false
        dataType: 'json'
        headers: 'X-CSRFToken': csrf_token
        success: (data) ->
            console.log('REACTIVATED')
            i = 0
            while i < arrToReactivate.length
                $(arrToReactivate[i]).addClass('active-user')                
                nameBox = $(arrToReactivate[i]).find('.name')[0]
                nameBox.innerText = nameBox.innerText.slice(0, -14)
                i++
            return
        error: () ->
            console.log('ERROR!')
            return
    return

# Delete profiles
# для удаления передать в попап ИД удаляемого юзера
$('*[data-dropdown-value="Delete items"]').on 'click', ->
    items = getSelectedUsers()
    if(arrDeleteID.length)
        arrDeleteID.length = 0
    i = 0
    while i < items.length
        arrDeleteID.push($(items[i]).attr('data-id'))
        i++
    return

### ACCESS TO A PROFILE ###
# Assign interviewer
$('*[data-dropdown-value="Assign interviewer"]').on 'click', ->
    $('#assignPopup *[data-role]')[0].innerText = 'an interviewer'
    $($(assignPopup).find('*[data-assign]')[0]).attr('data-general', 'false')
    # запрос интервьюеров чтобы назначить на кандидатов
    $(assignPopup).find('.access-field').not('.hidden').remove()

    item = $(@).parents('.intrview-item')[0]
    id = $(item).attr('data-id')
    linkBox = $('*[data-pages-link]')[0]
    url = $(linkBox).attr('data-pages-link')
    $.ajax
        type: 'post'
        url: url
        data:
            'id': id
            'action': 'get_interviewers'
        cache: false
        dataType: 'json'
        headers: 'X-CSRFToken': csrf_token
        success: (data) ->
            for key, obj of data
                renderAssignList(obj)
            $($(assignPopup).find('*[data-assign]')[0]).attr('data-user-id', id)
            $('#openAssignPopupLink').click()
            return
        error: () ->
            console.log('ERROR!')
            return
    # если успешно, показать попап и отрендерить полученные данные
    return

# Assign candidate
$('*[data-dropdown-value="Assign candidate"]').on 'click', ->
    $('#assignPopup *[data-role]')[0].innerText = 'a candidate'
    $($(assignPopup).find('*[data-assign]')[0]).attr('data-general', 'false')
    # запрос кандидатов чтобы назначить на интервьюеров
    $(assignPopup).find('.access-field').not('.hidden').remove()

    item = $(@).parents('.intrview-item')[0]
    id = $(item).attr('data-id')
    linkBox = $('*[data-pages-link]')[0]
    url = $(linkBox).attr('data-pages-link')
    $.ajax
        type: 'post'
        url: url
        data:
            'id': id
            'action': 'get_candidates'
        cache: false
        dataType: 'json'
        headers: 'X-CSRFToken': csrf_token
        success: (data) ->
            for key, obj of data
                renderAssignList(obj)
            $($(assignPopup).find('*[data-assign]')[0]).attr('data-user-id', id)
            $('#openAssignPopupLink').click()
            return
        error: () ->
            console.log('ERROR!')
            return
    # если успешно, показать попап и отрендерить полученные данные
    return

assignPopup = $('#assignPopup')[0]
renderAssignList = (data) ->
    newItem = $($(assignPopup).find('*[data-root-item]')[0]).clone(true, true)
    $(newItem).removeClass('hidden')
    $(newItem).attr('data-root-id', data.id)
    $(newItem).find('*[data-checker]')[0].id = 'chooseUserPopup-' + data.id
    $($(newItem).find('*[data-label]')[0]).attr('for', 'chooseUserPopup-' + data.id)
    $(newItem).find('*[data-full-name]')[0].innerText = data.full_name
    $(newItem).find('*[data-position]')[0].innerText = data.position
    $(newItem).find('*[data-id]')[0].innerText = data.id
    $($('*[data-list]')[0]).prepend(newItem)
    return

$('*[data-assign]').on 'click', ->
    linkBox = $('*[data-pages-link]')[0]
    data = {}
    data.selected = []
    data.arrID = []
    data.action = 'assign'
    userCheckers = $('.intrview-item .choose-user:checked')
    if($(@).attr('data-general') == 'true')
        console.log('general')
        i = 0
        while i < userCheckers.length
            if(userCheckers[i].checked)
                data.arrID.push( $(userCheckers[i]).attr('data-id') )
            i++
    else
        data.arrID.push($(@).attr('data-user-id'))
    
    checkers = $(assignPopup).find('.choose-user:checked')
    i = 0
    while i < checkers.length
        if(checkers[i].checked)
            data.selected.push($($(checkers[i]).parents('*[data-root-id]')[0]).attr('data-root-id'))
        i++
    data.arrID = JSON.stringify(data.arrID)
    data.selected = JSON.stringify(data.selected)
    # очистка попапа
    $(assignPopup).find('.access-field').not('.hidden').remove()
    linkBox = $('*[data-pages-link]')[0]
    url = $(linkBox).attr('data-pages-link')
    $.ajax
        type: 'post'
        url: url
        data: data
        cache: false
        headers: 'X-CSRFToken': csrf_token
        success: (data) ->
            console.log('SUCCESS!')
            
            return
        error: () ->
            $.magnificPopup.close()
            console.log('ERROR!')
            return
    $.magnificPopup.close()
    return

$('#assignPopup .choose-user').on 'change', ->
    checkers = $('#assignPopup .choose-user')
    i = 0
    while i < checkers.length
        if(checkers[i].checked)
            $('*[data-assign]').removeClass('box-disabled')
            break
        else
            $('*[data-assign]').addClass('box-disabled')
        i++
    return
    
# Cancel Assign Popup
$('*[data-cancel-assign]').on 'click', ->
    $(assignPopup).find('.access-field').not('.hidden').remove()
    return


# SHARE PROFILE ( OLD Edit Access )
accessProfile = $('#accessOneProfilePopup')[0]

$('*[data-dropdown-value="Share profile"]').on 'click', ->
    item = $(@).parents('.intrview-item')[0]
    id = $(item).attr('data-id')
    $(accessProfile).attr('data-id', id)

    name = $(item).find('.name')[0].innerText
    $(accessProfile).find('.full-name')[0].innerText = name
    # удалить предыдущие ссылки
    oldItems = $(accessProfile).find('.access-field').not('.hidden')
    j = 0
    while j < oldItems.length
        $(oldItems[j]).remove()
        j++
    $.magnificPopup.open items:
        src: '#accessOneProfilePopup'

    i = 0
    while i < privateLinks[id].length
        newItem = $($('#placeForAccesses .access-field')[0]).clone(true, true)
        $(newItem).removeClass('hidden')
        $(newItem).find('.access-name-input')[0].value = privateLinks[id][i].name
        date = privateLinks[id][i].date
        if(date != 364 and date != 91 and date != 30 and date != 20 and date != 7)
            newOption = document.createElement('option')
            $(newOption).attr('value', date)
            newOption.innerText = date + ' days'
            $($(newItem).find('*[data-date-select]')[0]).append(newOption)
            $(newItem).find('*[data-date-select]')[0].value = date
        else
            $(newItem).find('*[data-date-select]')[0].value = privateLinks[id][i].date
        $(newItem).find('.already-generated-link')[0].innerText = privateLinks[id][i].link
        $($(newItem).find('.already-generated-link')[0]).attr('href', privateLinks[id][i].link)
        $($(newItem).find('.already-generated')[0]).removeClass('already-generated')
        # delete link
        $($(newItem).find('.remove-access-btn')[0]).attr('data-id', privateLinks[id][i].id)
        $($('#placeForAccesses')[0]).append(newItem)
        i++
    # одна строка для нового доступа
    $('.add-access-btn').click()
    return

$('.access-generate-link').on 'click', ->
    id = $(accessProfile).attr('data-id')
    dateBox = $(@).parent().prev().find('*[data-date-select]')[0]
    nameBox = $(@).parent().prev().prev().find('.access-name-input')[0]
    errorHints = $(@).parent().parent().find('.error-tip')
    # validation
    if(nameBox.value.length < 2)
        $(errorHints[0]).removeClass('hidden')
        $(nameBox).addClass('input-error')
        if(dateBox.value == 'Choose')
            $(errorHints[1]).removeClass('hidden')
            $(dateBox).addClass('input-error')
        else
            $(errorHints[1]).addClass('hidden')
            $(dateBox).removeClass('input-error')
    else if(dateBox.value == 'Choose')
        $(errorHints[1]).removeClass('hidden')
        $(dateBox).addClass('input-error')
        $(errorHints[0]).addClass('hidden')
        $(nameBox).removeClass('input-error')
    else
        $(errorHints[0]).addClass('hidden')
        $(nameBox).removeClass('input-error')
        $(errorHints[1]).addClass('hidden')
        $(dateBox).removeClass('input-error')
    # the request
        self = @
        linkBox = $('*[data-pages-link]')[0]
        url = $(linkBox).attr('data-pages-link')
        $.ajax
            type: 'post'
            url: url
            data: 
                'id': id
                'name': nameBox.value
                'expiration_date': dateBox.value
                'action': 'generate_link'
            cache: false
            headers: 'X-CSRFToken': csrf_token
            success: (data) ->
                console.log('SUCCESS!')
                $(self).parent().removeClass('already-generated')
                newLinkContainer = $(self).parent().find('.already-generated-link')[0]
                console.log(data.url)
                newLinkContainer.innerText = data.url
                $(newLinkContainer).attr('href', data.url)
                #remove btn add id-link
                $($(self).parent().parent().parent().parent().find('.remove-access-btn')[0]).attr('data-id', data.id)
                # add link to array
                newLink = {}
                newLink.id = +data.id
                newLink.name = nameBox.value
                newLink.date = dateBox.value
                newLink.link = data.url
                privateLinks[id].push(newLink)
                return
            error: () ->
                console.log('ERROR!')
                self.innerText = 'ERROR'
                return
    return

$('.remove-access-btn').on 'click', ->
    # отправить запрос на удаление в базе и удалить 
    self = @
    linkBox = $('*[data-pages-link]')[0]
    url = $(linkBox).attr('data-pages-link')
    link_id = $(@).attr('data-id')
    console.log(link_id)
    $.ajax
        type: 'post'
        url: url
        data: 
            'id': $(accessProfile).attr('data-id')
            'link_id': link_id
            'action': 'delete_link'
        cache: false
        headers: 'X-CSRFToken': csrf_token
        success: (data) ->
            console.log('SUCCESS!')
            $(self).parent().parent().remove()
            return
        error: () ->
            console.log('ERROR!')
            return
    return

$('.add-access-btn').on 'click', ->
    accessBox = $('#placeForAccesses')[0]
    newAccessRow = $($(accessBox).find('.access-field.row')[0]).clone(true, true)
    $(newAccessRow).removeClass('hidden')
    $(accessBox).append(newAccessRow)
    return

# View Interviews
$('*[data-dropdown-value="View Interviews"]').on 'click', ->
    window.location.href = $(@).attr('data-link')
    return

# Deactivate profile
$('*[data-dropdown-value="Deactivate profile"]').on 'click', ->
    # если уже деактивирован, то показывать реактивейт
    item = $(@).parents('.intrview-item')[0]
    id = $(item).attr('data-id')
    linkBox = $('*[data-pages-link]')[0]
    url = $(linkBox).attr('data-pages-link')
    self = @
    $.ajax
        type: 'post'
        url: url
        data:
            'id': id
            'action': 'deactivate_user'
        cache: false
        dataType: 'json'
        headers: 'X-CSRFToken': csrf_token
        success: (data) ->
            console.log('DEACTIVATED')
            $(self).addClass('hidden')
            $($(self).parent().find('*[data-dropdown-value="Reactivate profile"]')[0]).removeClass('hidden')
            nameBox = $(item).find('.name')[0]
            nameBox.innerText = nameBox.innerText + ' (DEACTIVATED)'
            return
        error: () ->
            console.log('ERROR!')
            return
    return

# Reactivate profile
$('*[data-dropdown-value="Reactivate profile"]').on 'click', ->
    # если активирован, то показывать деактивейт
    item = $(@).parents('.intrview-item')[0]
    id = $(item).attr('data-id')
    linkBox = $('*[data-pages-link]')[0]
    url = $(linkBox).attr('data-pages-link')
    self = @
    $.ajax
        type: 'post'
        url: url
        data:
            'id': id
            'action': 'activate_user'
        cache: false
        dataType: 'json'
        headers: 'X-CSRFToken': csrf_token
        success: (data) ->
            $(item).addClass('active-user')
            console.log('REACTIVATED')
            $(self).addClass('hidden')
            $($(self).parent().find('*[data-dropdown-value="Deactivate profile"]')[0]).removeClass('hidden')
            nameBox = $(item).find('.name')[0]
            nameBox.innerText = nameBox.innerText.slice(0, -14)
            return
        error: () ->
            console.log('ERROR!')
            return
    return

# Delete profile
arrDeleteID = []
$('*[data-dropdown-value="Delete"]').on 'click', ->
    item = $(@).parents('.intrview-item')[0]
    id = $(item).attr('data-id')
    if(arrDeleteID.length)
        arrDeleteID.length = 0
    arrDeleteID.push(id)
    return

$('*[data-confirm-delete]').on 'click', ->
    linkBox = $('*[data-pages-link]')[0]
    url = $(linkBox).attr('data-pages-link')
    $.ajax
        type: 'post'
        url: url
        data:
            'id': JSON.stringify(arrDeleteID)
            'action': 'delete_users'
        cache: false
        dataType: 'json'
        headers: 'X-CSRFToken': csrf_token
        success: (data) ->
            console.log('DELETED')
            page = $('*[data-page-select]').val()
            dataRequest(page)
            return
        error: () ->
            console.log('ERROR!')
            return
    return

### CHECKERS ###
$('.intrview-item .choose-user').on 'change', ->
    checkCheckers()
    users = getSelectedUsers()
    i = 0
    active = 0
    unactive = 0
    while i < users.length
        if($(users[i]).hasClass('active-user'))
            active = 1
        else if(!$(users[i]).hasClass('active-user'))
            unactive = 1
        i++
    if(active and unactive)
        $('.common-actions [data-dropdown-value="Reactivate profiles"]').addClass('hidden')
        $('.common-actions [data-dropdown-value="Deactivate profiles"]').addClass('hidden')
    else if(active)
        $('.common-actions [data-dropdown-value="Reactivate profiles"]').addClass('hidden')
        $('.common-actions [data-dropdown-value="Deactivate profiles"]').removeClass('hidden')
    else
        $('.common-actions [data-dropdown-value="Deactivate profiles"]').addClass('hidden')
        $('.common-actions [data-dropdown-value="Reactivate profiles"]').removeClass('hidden')
    # general dropdown
    roleCounter = getUsersRole()
    if( !roleCounter.candidates and roleCounter.interviewers )
        $($('[data-general-actions] [data-dropdown-value="Assign interviewers"]')[0]).addClass('hidden')
        $($('[data-general-actions] [data-dropdown-value="Assign candidates"]')[0]).removeClass('hidden')
    else if( roleCounter.candidates and !roleCounter.interviewers )
        $($('[data-general-actions] [data-dropdown-value="Assign candidates"]')[0]).addClass('hidden')
        $($('[data-general-actions] [data-dropdown-value="Assign interviewers"]')[0]).removeClass('hidden')
    else
        $($('[data-general-actions] [data-dropdown-value="Assign interviewers"]')[0]).addClass('hidden')
        $($('[data-general-actions] [data-dropdown-value="Assign candidates"]')[0]).addClass('hidden')
    return

checkCheckers = () ->
    userCheckers = $('.intrview-item .choose-user:checked')
    if(userCheckers.length > 0)
        $('.common-actions.box-disabled').removeClass('box-disabled')
    else
        $('.common-actions').addClass('box-disabled')
    return

getSelectedUsers = () ->
    users = $('.intrview-item .choose-user:checked').parents('.intrview-item')
    return users

getUsersRole = () ->
    selectedUsers = getSelectedUsers()
    hasCandidate = 0
    hasInterviewer = 0
    i = 0
    while i < selectedUsers.length
        if( $(selectedUsers[i]).find('.info .group')[0].innerText == 'candidate' )
            hasCandidate++
        if( $(selectedUsers[i]).find('.info .group')[0].innerText == 'interviewer' )
            hasInterviewer++
        i++
    return { 'candidates': hasCandidate, 'interviewers': hasInterviewer }

resetSelectedCheckers = () ->
    checkers = $('.intrview-item .choose-user:checked')
    i = 0
    while i < checkers.length
        checkers[i].checked = false
        i++
    $('.common-actions').addClass('box-disabled')
    return

# Share profiles COPY
copyClicks = 0
$('.copy-btn').on 'click', ->
    content = $(@).parent().prev().find('.already-generated-link')
    if(content[0].innerText)
        content[0].innerText = window.location.protocol + '//' + window.location.host + content[0].innerText
        range = document.createRange()
        range.selectNode(content[0])
        window.getSelection().addRange(range)
        successful = document.execCommand('copy')
        window.getSelection().removeAllRanges()
    # it's a spike for firefox
    if(copyClicks == 0)
        copyClicks++
        content[0].innerText = content[0].innerText.replace(window.location.protocol + '//' + window.location.host, '')
        $(@).click()
    else
        copyClicks = 0
    content[0].innerText = content[0].innerText.replace(window.location.protocol + '//' + window.location.host, '')
    return