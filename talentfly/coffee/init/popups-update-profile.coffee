$('#uploadFromCV').on 'mousedown', () ->
	title = $('#generalUpdateProfile .header > .title')[0]
	title.innerText = 'Update profile from CV'	
	return


$('#uploadFromLinkedIn').on 'mousedown', () ->
	title = $('#generalUpdateProfile .header > .title')[0]
	title.innerText = 'Update profile from LinkedIn'
	return

### ACCORDEON TITLE ###
$('*[data-show-new]').on 'click', () ->
    if($($('*[data-hidden-new]')[0]).css('display') == 'none')
        $(@).find('.state').text('SHOW LESS')
        $(@).removeClass('hidden')
        $($('*[data-hidden-new]')[0]).css('display', 'block')
        $(@).find('*[data-new-content-counter]').addClass('hidden')
    else
        $(@).find('.state').text('SHOW MORE')
        $(@).removeClass('hidden')
        $($('*[data-hidden-new]')[0]).css('display', 'none')
        $(@).find('*[data-new-content-counter]').removeClass('hidden')
    return

$('*[data-show-update]').on 'click', () ->
    if($($('*[data-hidden-update]')[0]).css('display') == 'none')
        $(@).find('.state').text('SHOW LESS')
        $(@).removeClass('hidden')
        $($('*[data-hidden-update]')[0]).css('display', 'block')
        $(@).find('*[data-updated-content-counter]').addClass('hidden')
    else
        $(@).find('.state').text('SHOW MORE')
        $(@).removeClass('hidden')
        $($('*[data-hidden-update]')[0]).css('display', 'none')
        $(@).find('*[data-updated-content-counter]').removeClass('hidden')
    return


$('.visible-to-hidden').on 'mouseup', () ->
	$(this).addClass('hidden')


### POPUPS HANDLER NEW CONTENT ###
$('#experienceBox').ready ->
	items = $('#experienceBox').find('.content-item')
	itemsCounter = $('#experienceBox').find('.input-title').find('.new-label')
	return


$('.read-more-update-popup').on 'click', () ->
    text = $(@).prev()[0]
    $(@).removeClass('hidden')
    if(!$(@).hasClass('opened'))
        $(@).addClass('opened')
        $(text).removeClass('show-more')
        $(text).css('max-height', 'inherit')
        $(@).find('.link').text('LESS')
    else
        $(@).removeClass('opened')
        $(text).addClass('show-more')
        $(text).css('max-height', '65px')
        $(@).find('.link').text('MORE')
    return


### ADD ###
structureWithSelect = (self) ->
    if( $(self).text() != 'UNDO' )
        $(self).find(">:first-child").removeClass("hidden")
        $(self).text('UNDO')
        $(self).blur()
        $(self).addClass('added')
        $(self).parent().prev().addClass('box-disabled')
        $(self).next().addClass('box-disabled')
        $(self).prev().addClass('box-disabled')
    else
        $(self).text('ADD TO PROFILE')
        $(self).blur()
        $(self).removeClass('added')
        $(self).parent().find('.dismiss').removeClass('box-disabled')
        $(self).next().removeClass('box-disabled')
        $(self).prev().removeClass('box-disabled')
        $(self).parent().prev().removeClass('box-disabled')
    return


$('.content-btn-add').on 'click', () ->
    structureWithSelect(@)
    return


### DISMISS ###
$('#generalInfoBox .dismiss').on 'click', () ->
    $('#generalInfoBox')[0].remove()
    return


$('#summaryBox .dismiss').on 'click', () ->
    $('#summaryBox')[0].remove()
    return


$('#interestsBox .dismiss').on 'click', () ->
    $(this).parent().parent().remove()
    counter = $('#interestsBox').find('.counter')[0]
    counter.innerText = counter.innerText - 1 

    items = $('#interestsBox').find('.interests-item')
    if(items.length == 0)
        $('#interestsBox')[0].remove()

    return

$('#updatedGeneral .dismiss').on 'click', () ->
    $('#updatedGeneral')[0].remove()
    return


$('.dismiss').on 'click', () ->
    $(this).find("> .text")[0].innerText = 'DISMISS'
    items = $(this).parent().parent().parent().find('.content-item')
    
    currentCountEl = $(this).parent().parent().parent().find('.counter')
    if(currentCountEl[0])
        console.log(currentCountEl[0].innerText)
        currentCountEl[0].innerText = currentCountEl[0].innerText - 1    
    
    if(items.length < 2)
        $(this).parent().parent().parent().remove()
    
    $(this).parent().parent().remove()


# UPDATE AGAIN
$('#generalUpdateProfile [data-update-popup]').on 'click', ->
    $($('#uploadFromCV')[0]).click()
    return

#DISMISS ALL
$('*[data-dismiss-all]').on 'click', () ->
    clearPopup()
    return

###$('#openGeneralPopup').magnificPopup
    callbacks:
        close: ->
            $($('*[data-dissmised-done]')[0]).click()
###
clearPopup = () ->
    $($('#newContentBox')[0]).remove()
    $($('#updatedContentBox')[0]).remove()
    $($('#generalUpdateProfile .separator')[0]).remove()
    
    $($('#dismissed')[0]).removeClass('hidden')

    $($('*[data-update-popup]')[0]).addClass('hidden')
    $($('*[data-dismiss-all]')[0]).addClass('hidden')
    $($('*[date-review-later]')[0]).addClass('hidden')
    $($('*[data-profile-submit]')[0]).addClass('hidden')
        
    $($('*[data-dissmised-done]')[0]).removeClass('hidden')
    $($('.btns-bottom')[0]).removeClass('space-between')
    return


$('*[data-dissmised-done]').on 'click', ->
    $.magnificPopup.close()
    $($('#dismissed')[0]).addClass('hidden')
    $($('#generalUpdateProfile .btns-bottom')[0]).remove()
    $($('#generalUpdateProfile .inner')[1]).remove()
    return    

### POPUPS HANDLER UPDATED CONTENT ###
$('.btn-update').on 'click', () ->
    if( $(@).text() != 'UNDO' )
        $(@).find(">:first-child").removeClass("hidden")
        $(@).text('UNDO')
        $(@).blur()
        $(@).addClass('btn-updated')
        $(@).addClass('added')

        #$(self).parent().find('.dismiss').addClass('box-disabled')
        $(@).parent().prev().addClass('box-disabled')
        $(@).next().addClass('box-disabled')
        $(@).next().next().addClass('box-disabled')
    else
        $(@).text('UPDATE')
        $(@).blur()
        $(@).removeClass('btn-updated')
        $(@).removeClass('added')
        $(@).next().removeClass('box-disabled')
        $(@).next().next().removeClass('box-disabled')
        $(@).parent().prev().removeClass('box-disabled')
    return


$('*[data-as-new]').on 'click', () ->
    structureWithSelect(this)


# COUNTER FOR SHOW MORE
countNewContentItems = () ->
    newContentBox = $('#newContentBox')[0]
    newContentItems = $(newContentBox).find('.accordeon-default.no-shadow .block-info.detail')
    newInterestsItems = $(newContentBox).find('.accordeon-default.no-shadow .interests-item')
    numberOfItems = newContentItems.length + newInterestsItems.length
    if(numberOfItems)
        $('*[data-new-content-counter]')[0].innerText = '(+ ' + numberOfItems + ' )'
    else
        $($('*[data-new-content-counter]')[0]).parents('.accordeon-default').remove()
    return

countUpdatedContentItems = () ->
    updatedContentBox = $('#updatedContentBox')[0]
    updatedContentItems = $(updatedContentBox).find('.accordeon-default.no-shadow .block-info.detail')
    updateInterestsItems = $(newContentBox).find('.accordeon-default.no-shadow .interests-item')
    numberOfItems = updatedContentItems.length + updateInterestsItems.length
    if(numberOfItems)
        $('*[data-updated-content-counter]')[0].innerText = '(+ ' + numberOfItems + ' )'
    else
        $($('*[data-updated-content-counter]')[0]).parents('.accordeon-default').remove()
    return


### DATA HANDLERS ###

clearHTMLSymbols = (text) ->
    text = text.replace('&lt;', '<')
    text = text.replace('&gt;', '>')
    text = text.replace('&amp;', '&')
    text = text.replace('&apos;', "'")
    return text

# NEW DATA
newData = {}

newGeneral = {}
newExperience = []
newCertificates = []
newEducation = []
newVolunteering = []
newTSkills = []
newSSkills = []
newLanguages = []
newInterests = []

elementID = 0
$('#addGeneral').on 'click', () ->
    if($(@).hasClass('added'))
        box = $('#generalInfoBox')[0]
        ###
        if($(box).find('#name')[0])
            newGeneral.name = $(box).find('#name')[0].innerText
        if($(box).find('#surname')[0])
            newGeneral.surname = $(box).find('#surname')[0].innerText
        ###
        if($(box).find('#position')[0])
            newGeneral.position = $(box).find('#position')[0].innerText
        if($(box).find('#country')[0])
            newGeneral.country = $(box).find('#country')[0].innerText
        if($(box).find('#city')[0])
            newGeneral.city = $(box).find('#city')[0].innerText
        if($(box).find('#phone')[0])
            newGeneral.cellphone = $(box).find('#phone')[0].innerText
        #if($(box).find('#email')[0])
        #    newGeneral.email = $(box).find('#email')[0].innerText
    else
        newGeneral = {}
    return


$('#addSummary').on 'click', () ->
    if($(@).hasClass('added'))
        box = $('#summaryBox')[0]
        summary = {}
        text = $(box).find('#summary')[0].innerHTML
        summary.text = text.replace(new RegExp("\n",'g'), " ")
        summary.text = summary.text.trim()
        summary.text = summary.text.slice(23, summary.text.length-6)
        summary.text = clearHTMLSymbols(summary.text)
        newData.summary = summary
    else
        newData.summary = {}
    return


$('*[data-add-expirience]').on 'click', () ->
    self = @
    if($(self).hasClass('added'))
        elementID++
        box = $(self).parent().parent()
        experience = {}
        experience.elementDomId = elementID
        $(self).attr('data-element-id', elementID)
        if($(box).find('*[data-position]')[0])
            experience.title = $(box).find('*[data-position]')[0].innerText
        if($(box).find('*[data-company]')[0])
            experience.company = $(box).find('*[data-company]')[0].innerText
        if($(box).find('*[data-city]')[0])
            experience.city = $(box).find('*[data-city]')[0].innerText
        if($(box).find('*[data-country]')[0])
            experience.country = $(box).find('*[data-country]')[0].innerText
        if($(box).find('*[data-description]')[0])
            desc = $(box).find('*[data-description]')[0].innerHTML
            experience.description = desc.replace(new RegExp("\n",'g'), " ")
            experience.description = experience.description.trim()
            experience.description = experience.description.slice(30, experience.description.length-6).trim()
            experience.description = clearHTMLSymbols(experience.description)
        if $(box).find('*[data-start-month]')[0]
            experience.start_month = $(box).find('*[data-start-month]')[0].innerText
        if $(box).find('*[data-start-year]')[0]
            experience.start_year = $(box).find('*[data-start-year]')[0].innerText
        if $(box).find('*[data-end-month]')[0]
            experience.end_month = $(box).find('*[data-end-month]')[0].innerText
        if $(box).find('*[data-end-year]')[0]
            experience.end_year = $(box).find('*[data-end-year]')[0].innerText
        if $(box).find('*[data-current]')[0]
            experience.current_work = $(box).find('*[data-current]')[0].getAttribute('data-current')

        newExperience.push(experience)
    else
        i = 0
        while i < newExperience.length
            if(newExperience[i].elementDomId == +$(self).attr('data-element-id'))
                newExperience.splice(i, 1) 
            i++
    return


$('*[data-add-certificate]').on 'click', () ->
    self = @
    if($(self).hasClass('added'))
        elementID++
        box = $(self).parent().parent()
        certificate = {}
        certificate.elementDomId = elementID
        $(self).attr('data-element-id', elementID)
        if($(box).find('*[data-sertificate-title]')[0])
            certificate.name = $(box).find('*[data-sertificate-title]')[0].innerText
        if($(box).find('*[data-company]')[0])
            certificate.authority = $(box).find('*[data-company]')[0].innerText
        if($(box).find('*[data-start-month]')[0])
            certificate.issue_month = $(box).find('*[data-start-month]')[0].innerText
        if($(box).find('*[data-start-year]')[0])
            certificate.issue_year = $(box).find('*[data-start-year]')[0].innerText

        if $(box).find('*[data-end-month]')[0]
            certificate.completion_month = $(box).find('*[data-end-month]')[0].innerText
        if $(box).find('*[data-end-year]')[0]
            certificate.completion_year = $(box).find('*[data-end-year]')[0].innerText
        if $(box).find('*[data-current]')[0]
            certificate.current_cert = $(box).find('*[data-current]')[0].getAttribute('data-current')

        newCertificates.push(certificate)
    else
        i = 0
        while i < newCertificates.length
            if(newCertificates[i].elementDomId == +$(self).attr('data-element-id'))
                newCertificates.splice(i, 1) 
            i++
    return


$('*[data-add-education]').on 'click', () ->
    self = @
    if($(self).hasClass('added'))
        elementID++
        box = $(self).parent().parent()
        education = {}
        education.elementDomId = elementID
        $(self).attr('data-element-id', elementID)
    
        if($(box).find('*[data-university]')[0])
            education.institution = $(box).find('*[data-university]')[0].innerText
        if($(box).find('*[data-subject]')[0])
            education.field_study = $(box).find('*[data-subject]')[0].innerText
        if($(box).find('*[data-degree]')[0])
            education.degree = $(box).find('*[data-degree]')[0].innerText
        if($(box).find('*[data-city]')[0])
            education.city = $(box).find('*[data-city]')[0].innerText

        if $(box).find('*[data-country]')[0]
            education.country = $(box).find('*[data-country]')[0].innerText
        if $(box).find('*[data-start-month]')[0]
            education.start_month = $(box).find('*[data-start-month]')[0].innerText
        if $(box).find('*[data-start-year]')[0]
            education.start_year = $(box).find('*[data-start-year]')[0].innerText
        if $(box).find('*[data-end-month]')[0]
            education.end_month = $(box).find('*[data-end-month]')[0].innerText
        if $(box).find('*[data-end-year]')[0]
            education.end_year = $(box).find('*[data-end-year]')[0].innerText
        if $(box).find('*[data-current]')[0]
            education.current_educate = $(box).find('*[data-current]')[0].getAttribute('data-current')

        newEducation.push(education)
    else
        i = 0
        while i < newEducation.length
            if(newEducation[i].elementDomId == +$(self).attr('data-element-id'))
                newEducation.splice(i, 1) 
            i++
    return


$('*[data-add-volunteering]').on 'click', () ->
    self = @
    if($(self).hasClass('added'))
        elementID++
        box = $(self).parent().parent()
        volunteering = {}
        volunteering.elementDomId = elementID
        $(self).attr('data-element-id', elementID)
        if($(box).find('*[data-title]')[0])
            volunteering.organization = $(box).find('*[data-title]')[0].innerText
        if($(box).find('*[data-subject]')[0])
            volunteering.role = $(box).find('*[data-subject]')[0].innerText
        if($(box).find('*[data-start-month]')[0])
            volunteering.start_month = $(box).find('*[data-start-month]')[0].innerText
        if($(box).find('*[data-start-year]')[0])
            volunteering.start_year = $(box).find('*[data-start-year]')[0].innerText

        if $(box).find('*[data-end-month]')[0]
            volunteering.end_month = $(box).find('*[data-end-month]')[0].innerText
        if $(box).find('*[data-end-year]')[0]
            volunteering.end_year = $(box).find('*[data-end-year]')[0].innerText

        newVolunteering.push(volunteering)
    else
        i = 0
        while i < newVolunteering.length
            if(newVolunteering[i].elementDomId == +$(self).attr('data-element-id'))
                newVolunteering.splice(i, 1) 
            i++
    return


$('*[data-add-tech-skill]').on 'click', () ->
    self = @
    if($(self).hasClass('added'))
        elementID++
        box = $(self).parent().parent()
        tSkill = {}
        tSkill.elementDomId = elementID
        $(self).attr('data-element-id', elementID)
    
        if($(box).find('*[data-title]')[0])
            tSkill.title = $(box).find('*[data-title]')[0].innerText
        if($(box).find('*[data-years]')[0])
            tSkill.years = $(box).find('*[data-years]')[0].innerText
        if($(box).find('*[data-used]')[0])
            tSkill.used = $(box).find('*[data-used]')[0].innerText
        newTSkills.push(tSkill)
    else
        i = 0
        while i < newTSkills.length
            if(newTSkills[i].elementDomId == +$(self).attr('data-element-id'))
                newTSkills.splice(i, 1) 
            i++
    return


$('*[data-add-soft-skill]').on 'click', () ->
    self = @
    if($(self).hasClass('added'))
        elementID++
        box = $(self).parent().parent()
        sSkill = {}
        sSkill.elementDomId = elementID
        $(self).attr('data-element-id', elementID)
    
        if($(box).find('*[data-title]')[0])
            sSkill.title = $(box).find('*[data-title]')[0].innerText
        if($(box).find('*[data-group]')[0])
            sSkill.category = $(box).find('*[data-group]')[0].innerText
        newSSkills.push(sSkill)
    else
        i = 0
        while i < newSSkills.length
            if(newSSkills[i].elementDomId == +$(self).attr('data-element-id'))
                newSSkills.splice(i, 1) 
            i++
    return

    
$('*[data-add-language]').on 'click', () ->
    self = @
    if($(self).hasClass('added'))
        elementID++
        box = $(self).parent().parent()
        language = {}
        language.elementDomId = elementID
        $(self).attr('data-element-id', elementID)
        if($(box).find('*[data-language]')[0])
            language.name = $(box).find('*[data-language]')[0].innerText
        if($(box).find('*[data-level]')[0])
            language.proficiency = $(box).find('*[data-level]')[0].value
        newLanguages.push(language)
    else
        i = 0
        while i < newLanguages.length
            if(newLanguages[i].elementDomId == +$(self).attr('data-element-id'))
                newLanguages.splice(i, 1) 
            i++
    return
    

$('*[data-add-interest]').on 'click', () ->
    self = @
    if($(self).hasClass('added'))
        elementID++
        box = $(self).parent().parent()
        interest = {}
        interest.elementDomId = elementID
        $(self).attr('data-element-id', elementID)
        if($(box).find('*[data-title]')[0])
            interest.title = $(box).find('*[data-title]')[0].innerText
        if($(box).find('*[data-subject]')[0])
            interest.subject = $(box).find('*[data-subject]')[0].innerText
        newInterests.push(interest)
    else
        i = 0
        while i < newInterests.length
            if(newInterests[i].elementDomId == +$(self).attr('data-element-id'))
                newInterests.splice(i, 1) 
            i++
    return


# UPDATED DATA 
updatedData = {}

updatedGeneral = {}
updatedExperience = []
updatedCertificates = []
updatedEducation = []
updatedVolunteering = []
updatedTSkills = []
updatedLanguages = []
updatedInterests = []


$('*[data-update-general]').on 'click', () ->
    if($(@).hasClass('added'))
        box = $('#updatedGeneral [data-values]')[1]
        if($(box).find('*[data-name]')[0])
            updatedGeneral.first_name = $(box).find('*[data-name]')[0].innerText
        if($(box).find('[data-last-name]')[0])
            updatedGeneral.second_name = $(box).find('*[data-last-name]')[0].innerText
        if($(box).find('*[data-position]')[0])
            updatedGeneral.position = $(box).find('*[data-position]')[0].innerText
        if($(box).find('*[data-country]')[0])
            updatedGeneral.country = $(box).find('*[data-country]')[0].innerText
        if($(box).find('*[data-city]')[0])
            updatedGeneral.city = $(box).find('*[data-city]')[0].innerText
        if($(box).find('*[data-phone]')[0])
            updatedGeneral.cellphone = $(box).find('*[data-phone]')[0].innerText
        #if($(box).find('*[data-email]')[0])        
        #    updatedGeneral.email = $(box).find('*[data-email]')[0].innerText
    else
        updatedGeneral = {}
    return

$('#updateSummaryBtn').on 'click', () ->
    if($(@).hasClass('added'))
        box = $('#updateSummary')[0]
        summary = {}
        text = $(box).find('*[data-summary]')[0].innerHTML
        summary.text = text.replace(new RegExp("\n",'g'), " ")
        summary.text = summary.text.trim()
        summary.text = summary.text.slice(30, summary.text.length-6)
        summary.text = clearHTMLSymbols(summary.text)
        updatedData.summary = summary
    else
        updatedData.summary = {}
    return


#EXPIRIENCE
$('*[data-update-expirience]').on 'click', () ->
    self = @
    if($(self).hasClass('added'))
        elementID++
        box = $(self).parent().parent()
        experience = {}
        experience.id = $(self).attr('data-update-expirience')
        experience.elementDomId = elementID
        $(self).attr('data-element-id', elementID)
    
        if($(box).find('*[data-position]')[0])
            experience.title = $(box).find('*[data-position]')[0].innerText
        if($(box).find('*[data-company]')[0])
            experience.company = $(box).find('*[data-company]')[0].innerText
        #if($(box).find('*[data-duration]')[0])
        #    experience.duration = $(box).find('*[data-duration]')[0].innerText
        if($(box).find('*[data-city]')[0])
            experience.city = $(box).find('*[data-city]')[0].innerText
        if($(box).find('*[data-country]')[0])
            experience.country = $(box).find('*[data-country]')[0].innerText
        if($(box).find('*[data-description]')[0])
            desc = $(box).find('*[data-description]')[0].innerHTML.trim()
            experience.description = desc.replace(new RegExp("\n",'g'), " ")
            experience.description = experience.description.trim()
            experience.description = experience.description.slice(30, experience.description.length-6).trim()
            experience.description = clearHTMLSymbols(experience.description)
        if $(box).find('*[data-start-month]')[0]
            experience.start_month = $(box).find('*[data-start-month]')[0].innerText
        if $(box).find('*[data-start-year]')[0]
            experience.start_year = $(box).find('*[data-start-year]')[0].innerText
        if $(box).find('*[data-end-month]')[0]
            experience.end_month = $(box).find('*[data-end-month]')[0].innerText
        if $(box).find('*[data-end-year]')[0]
            experience.end_year = $(box).find('*[data-end-year]')[0].innerText
        if $(box).find('*[data-current]')[1]
            experience.current_work = $(box).find('*[data-current]')[1].getAttribute('data-current')

        updatedExperience.push(experience)
    else
        i = 0
        while i < updatedExperience.length
            if(updatedExperience[i].elementDomId == +$(self).attr('data-element-id'))
                updatedExperience.splice(i, 1) 
            i++
    return

$('*[data-expirience]').on 'click', () ->
    self = @
    if($(self).hasClass('added'))
        elementID++
        box = $(self).parent().parent()
        experience = {}
        experience.elementDomId = elementID
        $(self).attr('data-element-id', elementID)
        
        if($(box).find('*[data-position]')[0])
            experience.title = $(box).find('*[data-position]')[0].innerText
        if($(box).find('*[data-company]')[0])
            experience.company = $(box).find('*[data-company]')[0].innerText
        #if($(box).find('*[data-duration]')[0])
        #    experience.duration = $(box).find('*[data-duration]')[0].innerText
        if($(box).find('*[data-city]')[0])
            experience.city = $(box).find('*[data-city]')[0].innerText
        if($(box).find('*[data-country]')[0])
            experience.country = $(box).find('*[data-country]')[0].innerText
        if($(box).find('*[data-description]')[0])
            desc = $(box).find('*[data-description]')[0].innerHTML.trim()
            experience.description = desc.replace(new RegExp("\n",'g'), " ")
            experience.description = experience.description.trim()
            experience.description = experience.description.slice(30, experience.description.length-6).trim()
            experience.description = clearHTMLSymbols(experience.description)
        if $(box).find('*[data-start-month]')[0]
            experience.start_month = $(box).find('*[data-start-month]')[0].innerText
        if $(box).find('*[data-start-year]')[0]
            experience.start_year = $(box).find('*[data-start-year]')[0].innerText
        if $(box).find('*[data-end-month]')[0]
            experience.end_month = $(box).find('*[data-end-month]')[0].innerText
        if $(box).find('*[data-end-year]')[0]
            experience.end_year = $(box).find('*[data-end-year]')[0].innerText
        if $(box).find('*[data-current]')[1]
            experience.current_work = $(box).find('*[data-current]')[1].getAttribute('data-current')

        experience.asNew = true
        newExperience.push(experience)
    else
        i = 0
        while i < newExperience.length
            if(newExperience[i].elementDomId == +$(self).attr('data-element-id'))
                newExperience.splice(i, 1) 
            i++
    return


#EDUCATION
$('*[data-update-education]').on 'click', () ->
    self = @
    if($(self).hasClass('added'))
        elementID++
        box = $(self).parent().parent()
        education = {}
        education.id = $(self).attr('data-update-education')
        education.elementDomId = elementID
        $(self).attr('data-element-id', elementID)    
        
        education.id = $(self).attr('data-update-education')
        #if($(box).find('*[data-title]')[0])
        #    education.title = $(box).find('*[data-title]')[0].innerText
        if($(box).find('*[data-university]')[0])
            education.institution = $(box).find('*[data-university]')[0].innerText
        if($(box).find('*[data-subject]')[0])
            education.field_study = $(box).find('*[data-subject]')[0].innerText
        if($(box).find('*[data-degree]')[0])
            education.degree = $(box).find('*[data-degree]')[0].innerText

        if $(box).find('*[data-city]')[0]
            education.city = $(box).find('*[data-city]')[0].innerText
        if $(box).find('*[data-country]')[0]
            education.country = $(box).find('*[data-country]')[0].innerText
        if $(box).find('*[data-start-month]')[0]
            education.start_month = $(box).find('*[data-start-month]')[0].innerText
        if $(box).find('*[data-start-year]')[0]
            education.start_year = $(box).find('*[data-start-year]')[0].innerText
        if $(box).find('*[data-end-month]')[0]
            education.end_month = $(box).find('*[data-end-month]')[0].innerText
        if $(box).find('*[data-end-year]')[0]
            education.end_year = $(box).find('*[data-end-year]')[0].innerText
        if $(box).find('*[data-current]')[1]
            education.current_educate = $(box).find('*[data-current]')[1].getAttribute('data-current')

        updatedEducation.push(education)
    else
        i = 0
        while i < updatedEducation.length
            if(updatedEducation[i].elementDomId == +$(self).attr('data-element-id'))
                updatedEducation.splice(i, 1) 
            i++
    return

$('*[data-education]').on 'click', () ->
    self = @
    if($(self).hasClass('added'))
        elementID++
        box = $(self).parent().parent()
        education = {}
        education.elementDomId = elementID
        $(self).attr('data-element-id', elementID)
        
        #if($(box).find('*[data-title]')[0])
        #    education.title = $(box).find('*[data-title]')[0].innerText
        if($(box).find('*[data-university]')[0])
            education.institution = $(box).find('*[data-university]')[0].innerText
        if($(box).find('*[data-subject]')[0])
            education.field_study = $(box).find('*[data-subject]')[0].innerText
        if($(box).find('*[data-degree]')[0])
            education.degree = $(box).find('*[data-degree]')[0].innerText

        if $(box).find('*[data-city]')[0]
            education.city = $(box).find('*[data-city]')[0].innerText
        if $(box).find('*[data-country]')[0]
            education.country = $(box).find('*[data-country]')[0].innerText
        if $(box).find('*[data-start-month]')[0]
            education.start_month = $(box).find('*[data-start-month]')[0].innerText
        if $(box).find('*[data-start-year]')[0]
            education.start_year = $(box).find('*[data-start-year]')[0].innerText
        if $(box).find('*[data-end-month]')[0]
            education.end_month = $(box).find('*[data-end-month]')[0].innerText
        if $(box).find('*[data-end-year]')[0]
            education.end_year = $(box).find('*[data-end-year]')[0].innerText
        if $(box).find('*[data-current]')[1]
            education.current_educate = $(box).find('*[data-current]')[1].getAttribute('data-current')

        education.asNew = true
        newEducation.push(education)
    else
        i = 0
        while i < newEducation.length
            if(newEducation[i].elementDomId == +$(self).attr('data-element-id'))
                newEducation.splice(i, 1) 
            i++
    return


#CERTIFICATION
$('*[data-update-cert]').on 'click', () ->
    self = @
    if($(self).hasClass('added'))
        elementID++
        box = $(self).parent().parent()
        certificate = {}
        certificate.id = $(self).attr('data-update-cert')
        certificate.elementDomId = elementID
        $(self).attr('data-element-id', elementID)

        certificate.id = $(self).attr('data-update-cert')
        if($(box).find('*[data-sertificate-title]')[0])
            certificate.name = $(box).find('*[data-sertificate-title]')[0].innerText
        if($(box).find('*[data-company]')[0])
            certificate.authority = $(box).find('*[data-company]')[0].innerText
        if($(box).find('*[data-start-month]')[0])
            certificate.issue_month = $(box).find('*[data-start-month]')[0].innerText
        if($(box).find('*[data-start-year]')[0])
            certificate.issue_year = $(box).find('*[data-start-year]')[0].innerText

        if $(box).find('*[data-end-month]')[0]
            certificate.completion_month = $(box).find('*[data-end-month]')[0].innerText
        if $(box).find('*[data-end-year]')[0]
            certificate.completion_year = $(box).find('*[data-end-year]')[0].innerText
        if $(box).find('*[data-current]')[1]
            certificate.current_cert = $(box).find('*[data-current]')[1].getAttribute('data-current')

        updatedCertificates.push(certificate)
    else
        i = 0
        while i < updatedCertificates.length
            if(updatedCertificates[i].elementDomId == +$(self).attr('data-element-id'))
                updatedCertificates.splice(i, 1) 
            i++
    return

$('*[data-cert]').on 'click', () ->
    self = @
    if($(self).hasClass('added'))
        elementID++
        box = $(self).parent().parent()
        certificate = {}
        certificate.elementDomId = elementID
        $(self).attr('data-element-id', elementID)

        if($(box).find('*[data-sertificate-title]')[0])
            certificate.name = $(box).find('*[data-sertificate-title]')[0].innerText
        if($(box).find('*[data-company]')[0])
            certificate.authority = $(box).find('*[data-company]')[0].innerText
        if($(box).find('*[data-start-month]')[0])
            certificate.issue_month = $(box).find('*[data-start-month]')[0].innerText
        if($(box).find('*[data-start-year]')[0])
            certificate.issue_year = $(box).find('*[data-start-year]')[0].innerText
        
        if $(box).find('*[data-end-month]')[0]
            certificate.completion_month = $(box).find('*[data-end-month]')[0].innerText
        if $(box).find('*[data-end-year]')[0]
            certificate.completion_year = $(box).find('*[data-end-year]')[0].innerText
        if $(box).find('*[data-current]')[1]
            certificate.current_cert = $(box).find('*[data-current]')[1].getAttribute('data-current')

        certificate.asNew = true
        newCertificates.push(certificate)
    else
        i = 0
        while i < newCertificates.length
            if(newCertificates[i].elementDomId == +$(self).attr('data-element-id'))
                newCertificates.splice(i, 1) 
            i++
    return


#VOLUNTEERING
$('*[data-update-volunt]').on 'click', () ->
    self = @
    if($(self).hasClass('added'))
        elementID++
        box = $(self).parent().parent()
        volunteering = {}
        volunteering.id = $(self).attr('data-update-volunt')
        volunteering.elementDomId = elementID
        $(self).attr('data-element-id', elementID)
        
        volunteering.id = $(self).attr('data-update-volunt')
        if($(box).find('*[data-title]')[0])
            volunteering.organization = $(box).find('*[data-title]')[0].innerText
        if($(box).find('*[data-role]')[0])
            volunteering.role = $(box).find('*[data-role]')[0].innerText
        if($(box).find('*[data-start-month]')[0])
            volunteering.start_month = $(box).find('*[data-start-month]')[0].innerText
        if($(box).find('*[data-start-year]')[0])
            volunteering.start_year = $(box).find('*[data-start-year]')[0].innerText
        if $(box).find('*[data-end-month]')[0]
            volunteering.end_month = $(box).find('*[data-end-month]')[0].innerText
        if $(box).find('*[data-end-year]')[0]
            volunteering.end_year = $(box).find('*[data-end-year]')[0].innerText
        if $(box).find('*[data-current]')[1]
            volunteering.current_volunt = $(box).find('*[data-current]')[1].getAttribute('data-current')

        updatedVolunteering.push(volunteering)
    else
        i = 0
        while i < updatedVolunteering.length
            if(updatedVolunteering[i].elementDomId == +$(self).attr('data-element-id'))
                updatedVolunteering.splice(i, 1) 
            i++
    return

$('*[data-volunt]').on 'click', () ->
    self = @
    if($(self).hasClass('added'))
        elementID++
        box = $(self).parent().parent()
        volunteering = {}
        volunteering.elementDomId = elementID
        $(self).attr('data-element-id', elementID)
        
        if($(box).find('*[data-title]')[0])
            volunteering.organization = $(box).find('*[data-title]')[0].innerText
        if($(box).find('*[data-role]')[0])
            volunteering.role = $(box).find('*[data-role]')[0].innerText
        if($(box).find('*[data-start-month]')[0])
            volunteering.start_month = $(box).find('*[data-start-month]')[0].innerText
        if($(box).find('*[data-start-year]')[0])
            volunteering.start_year = $(box).find('*[data-start-year]')[0].innerText
        if $(box).find('*[data-end-month]')[0]
            volunteering.end_month = $(box).find('*[data-end-month]')[0].innerText
        if $(box).find('*[data-end-year]')[0]
            volunteering.end_year = $(box).find('*[data-end-year]')[0].innerText
        if $(box).find('*[data-current]')[1]
            volunteering.current_volunt = $(box).find('*[data-current]')[1].getAttribute('data-current')

        volunteering.asNew = true
        newVolunteering.push(volunteering)
    else
        i = 0
        while i < newVolunteering.length
            if(newVolunteering[i].elementDomId == +$(self).attr('data-element-id'))
                newVolunteering.splice(i, 1) 
            i++
    return


#TECHNICAL SKILLS
$('*[data-update-tech-skills]').on 'click', () ->
    self = @
    if($(self).hasClass('added'))
        elementID++
        box = $(self).parent().parent()
        tSkill = {}
        tSkill.id = $(self).attr('data-update-tech-skills')
        tSkill.elementDomId = elementID
        $(self).attr('data-element-id', elementID)
        box = $(self).parent().parent()
        
        if($(box).find('*[data-title]')[0])
            tSkill.title = $(box).find('*[data-title]')[0].innerText
        if($(box).find('*[data-location]')[0])
            tSkill.location = $(box).find('*[data-location]')[0].innerText
        if($(box).find('*[data-duration]')[0])
            tSkill.duration = $(box).find('*[data-duration]')[0].innerText
        if($(box).find('*[data-place]')[0])
            tSkill.place = $(box).find('*[data-place]')[0].innerText
        updatedTSkills.push(tSkill)
    else
        i = 0
        while i < updatedTSkills.length
            if(updatedTSkills[i].elementDomId == +$(self).attr('data-element-id'))
                updatedTSkills.splice(i, 1) 
            i++
    return


$('*[data-tech-skills]').on 'click', () ->
    self = @
    if($(self).hasClass('added'))
        elementID++
        box = $(self).parent().parent()
        tSkill = {}
        tSkill.elementDomId = elementID
        $(self).attr('data-element-id', elementID)
        box = $(self).parent().parent()
        
        if($(box).find('*[data-title]')[0])
            tSkill.title = $(box).find('*[data-title]')[0].innerText
        if($(box).find('*[data-location]')[0])
            tSkill.location = $(box).find('*[data-location]')[0].innerText
        if($(box).find('*[data-duration]')[0])
            tSkill.duration = $(box).find('*[data-duration]')[0].innerText
        if($(box).find('*[data-place]')[0])
            tSkill.place = $(box).find('*[data-place]')[0].innerText
        tSkill.asNew = true
        newTSkills.push(tSkill)
    else
        i = 0
        while i < newTSkills.length
            if(newTSkills[i].elementDomId == +$(self).attr('data-element-id'))
                newTSkills.splice(i, 1) 
            i++
    return


#SOFT SKILLS
$('*[data-update-soft-skills]').on 'click', () ->
    boxes = $(@).parent().parent().find('.category-box')
    if($(@).hasClass('added'))
        sSkill = {}
        i = 0
        while i < boxes.length
            categoryName = $(boxes[i]).find('*[data-category]')[0].innerText
            sSkill[categoryName] = []
            skillsList = $(boxes[i]).find('*[data-skill]')
            i++
            j = 0
            while j < skillsList.length
                sSkill[categoryName].push( skillsList[j].innerText )
                j++
            
        updatedData.softSkills = sSkill
    else
        updatedData.softSkills = {}
    return


#LANGUAGE
$('*[data-update-language]').on 'click', () ->
    self = @
    if($(self).hasClass('added'))
        elementID++
        box = $(self).parent().parent()
        language = {}
        language.id = $(self).attr('data-update-language')
        tSkill.elementDomId = elementID
        $(self).attr('data-element-id', elementID)
        if($(box).find('*[data-level]').length > 0)
            language.proficiency = $(box).find('*[data-level]')[1].innerText
        else
            language.proficiency = ''

        updatedLanguages.push(language)
    else
        i = 0
        while i < updatedLanguages.length
            if(updatedLanguages[i].elementDomId == +$(self).attr('data-element-id'))
                updatedLanguages.splice(i, 1) 
            i++
    return


$('*[data-as-new-language]').on 'click', () ->
    self = @
    if($(self).hasClass('added'))
        elementID++
        box = $(self).parent().parent()
        language = {}
        tSkill.elementDomId = elementID
        $(self).attr('data-element-id', elementID)

        language.name = $(box).find('*[data-language]')[1].innerText
        if($(box).find('*[data-level]').length > 0)
            language.proficiency = $(box).find('*[data-level]')[1].innerText
        else
            language.proficiency = ''
        language.asNew = true
        newLanguages.push(language)
    else
        i = 0
        while i < newLanguages.length
            if(newLanguages[i].elementDomId == +$(self).attr('data-element-id'))
                newLanguages.splice(i, 1) 
            i++
    return


#INTERESTS
$('*[data-update-interest]').on 'click', () ->
    self = @
    if($(self).hasClass('added'))
        elementID++
        box = $(self).parent().parent()
        interest = {}
        interest.id = $(self).attr('data-update-interest')
        interest.elementDomId = elementID
        $(self).attr('data-element-id', elementID)
    
        if($(box).find('*[data-title]')[0])
            interest.title = $(box).find('*[data-title]')[0].innerText
        if($(box).find('*[data-place]')[0])
            interest.place = $(box).find('*[data-place]')[0].innerText
        else
            interest.place = ''

        updatedInterests.push(interest)
    else
        i = 0
        while i < updatedInterests.length
            if(updatedInterests[i].elementDomId == +$(self).attr('data-element-id'))
                updatedInterests.splice(i, 1) 
            i++
    return


$('*[data-as-new-interest]').on 'click', () ->
    self = @
    if($(self).hasClass('added'))
        elementID++
        box = $(self).parent().parent()
        interest = {}
        interest.elementDomId = elementID
        $(self).attr('data-element-id', elementID)
        if($(box).find('*[data-title]')[0])
            interest.title = $(box).find('*[data-title]')[0].innerText
        if($(box).find('*[data-place]').length > 0)
            interest.place = $(box).find('*[data-place]')[0].innerText
        else
            interest.place = ''
        interest.asNew = true
        newInterests.push(interest)
    else
        i = 0
        while i < newInterests.length
            if(newInterests[i].elementDomId == +$(self).attr('data-element-id'))
                newInterests.splice(i, 1) 
            i++
    return


$('#linkedinLink').on 'change', () ->
    $('#uploadFromLinkedIn').removeClass('box-disabled')    
    return


### AJAX ###
$('#cvFile').on 'change', () ->
    $(@).removeClass('no-file')
    file = document.getElementById('cvFile').files[0]
    type = file.type.split('/').pop()
    if(file.size > 5000000 or (type != 'msword' and type != 'pdf' and type != 'vnd.openxmlformats-officedocument.wordprocessingml.document') )
        setTimeout (->
            $('.file-name').html('<span class="error-hint">Wrong size or file type. Please, choose pdf or doc/docx file.</span>')
            $('#uploadFromCV').addClass('box-disabled')
            return
        ), 500
    else
        $($('.error-hint')[0]).addClass 'hidden'
        $('#uploadFromCV').removeClass('box-disabled')
    return


$('#uploadFromCV').on 'click', (e) ->
    data = undefined
    e.preventDefault()

    if $($('#cvFile')[0]).hasClass('no-file')
        $($('.error-hint')[0]).removeClass 'hidden'
    else
        $($('.error-hint')[0]).addClass 'hidden'
        $('#uploadFromCV').removeClass('box-disabled')

        data = new FormData()
        data.append 'cvFile', $('#cvFile')[0].files[0]
        $.magnificPopup.close()
        $(@).off()
        clearPopup()
        $($('*[data-dissmised-done]')[0]).click()
        if data
            $("#preloader").removeClass('hidden')
            $.ajax
                type: 'post'
                url: '/profile/parse_cv/'
                data: data
                cache: false
                contentType: false
                processData: false
                dataType: 'html'
                headers: 'X-CSRFToken': csrf_token
                success: (data) ->
                    console.log 'success', data
                    $('#generalUpdateProfile').append data
                    setTimeout ((_this) ->
                        ->
                            # insert show more
                            hideContent()
                            # counters
                            countNewContentItems()
                            countUpdatedContentItems()
                            $.magnificPopup.open items:
                                src: '#generalUpdateProfile'
                            return
                    )(this), 1000
                    return
                error: (data, textStatus, errorThrown) ->
                    console.log 'error'
                    return
                complete: () ->
                    $("#preloader").addClass('hidden')
                    return
    return


generalUpdateProfile = $('#generalUpdateProfile')
hideContent = () ->
    # new content
    newContentBox = $('#newContentBox')[0]
    contentItems = $(newContentBox).find('.content-item')
    hiddenContent = $('*[data-hidden-new]')[0]
    if(contentItems.length > 2)
        $('*[data-show-new]').removeClass('hidden')
        cuts = $($(contentItems[1]).parent()[0]).nextUntil()
        cuts[cuts.length - 1] = {}
        cuts[cuts.length - 2] = {}
        cuts = cuts.detach()
        i = 0
        while i < cuts.length
            $(hiddenContent).append(cuts[i])
            i++
    else
        $('*[data-show-new]').addClass('hidden')
        
    # updated content (needs testing)
    updatedContentBox = $('#updatedContentBox')[0]
    contentItems = $(updatedContentBox).find('.content-item')
    hiddenContent = $('*[data-hidden-update]')[0]
    if(contentItems.length > 3)
        $('*[data-show-update]').removeClass('hidden')
        cuts = $($(contentItems[2]).parent()[0]).nextUntil()
        cuts[cuts.length - 1] = {}
        cuts[cuts.length - 2] = {}
        cuts = cuts.detach()
        i = 0
        while i < cuts.length
            $(hiddenContent).append(cuts[i])
            i++
    else
        $('*[data-show-update]').addClass('hidden')
    return


$('#uploadFromLinkedIn').on 'click', () ->
    linkedInURL = $('#linkedinLink').val()
    $.magnificPopup.close()
    $(@).off()
    clearPopup()
    $($('*[data-dissmised-done]')[0]).click()
    if(linkedInURL != '')
        $("#preloader").removeClass('hidden')
        $.ajax
            type: 'post'
            url: '/profile/parse_linkedin/'
            data: 'linkedin_url': linkedInURL
            cache: false
            dataType: 'html'
            headers: 'X-CSRFToken': csrf_token
            success: (data) ->
                console.log 'success'
                $('#generalUpdateProfile').append data
                setTimeout ((_this) ->
                    ->
                        # insert show more
                            hideContent()
                        #counters
                        countNewContentItems()
                        countUpdatedContentItems()  
                        $.magnificPopup.open items:
                            src: '#generalUpdateProfile'
                        return
                )(this), 500
                return
            error: (data, textStatus, errorThrown) ->
                console.log 'error'
                return
            complete: () ->
                $("#preloader").addClass('hidden')
                return
    return




# отправка результата
$('*[data-profile-submit]').on 'click', () ->
    if !$.isEmptyObject(newGeneral)
        newData.newGeneral = newGeneral
    if !$.isEmptyObject(newExperience)
        newData.newExperience = newExperience
    if !$.isEmptyObject(newCertificates)
        newData.newCertificates = newCertificates
    if !$.isEmptyObject(newEducation)
        newData.newEducation = newEducation
    if !$.isEmptyObject(newVolunteering)
        newData.newVolunteering = newVolunteering
    if !$.isEmptyObject(newTSkills)
        newData.newTSkills = newTSkills
    if !$.isEmptyObject(newSSkills)
        newData.newSSkills = newSSkills
    if !$.isEmptyObject(newLanguages)
        newData.newLanguages = newLanguages
    if !$.isEmptyObject(newInterests)
        newData.newInterests = newInterests

    if !$.isEmptyObject(updatedGeneral)
        updatedData.updatedGeneral = updatedGeneral
    if !$.isEmptyObject(updatedExperience)
        updatedData.updatedExperience = updatedExperience
    if !$.isEmptyObject(updatedCertificates)
        updatedData.updatedCertificates = updatedCertificates
    if !$.isEmptyObject(updatedEducation)
        updatedData.updatedEducation = updatedEducation
    if !$.isEmptyObject(updatedVolunteering)
        updatedData.updatedVolunteering = updatedVolunteering
    if !$.isEmptyObject(updatedTSkills)
        updatedData.updatedTSkills = updatedTSkills
    if !$.isEmptyObject(updatedLanguages)
        updatedData.updatedLanguages = updatedLanguages
    if !$.isEmptyObject(updatedInterests)
        updatedData.updatedInterests = updatedInterests

    dataUpdtedPopup = {}
    dataUpdtedPopup.newData = newData
    dataUpdtedPopup.updatedData = updatedData
    $.ajax
        type: 'post'
        url: '/profile/form/update-resume/'
        data: {data: JSON.stringify(dataUpdtedPopup)}
        cache: false
        headers: 'X-CSRFToken': csrf_token
        success: (data) ->
            console.log('SUCCESS!')
            document.location.reload(true)
            return
        error: () ->
            console.log('ERROR!')
            document.location.reload(true)
            return
    return


if(typeof(String.prototype.trim) == "undefined")
    String.prototype.trim = () -> return String(@).replace(/^\s+|\s+$/g, '')
