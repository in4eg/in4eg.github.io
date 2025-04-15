# исходим из того что везде есть одна hidden запись (шаблон)
# после того как отрендерилось уже 4 элемента с классом block-info, остальные помещать в accordeon (для New and Updated Content)
# или к каждому блоку раздела добавить класс, и после вывода первых трех разделов остальное прятать в accordeon
# $('#openGeneralPopup').click()
### Render New Content Functions ###
newContentBox = $('#newContentBox')[0]
# General Info
renderNewGeneralInfo = (general) ->
    generalBox = $(newContentBox).find('#generalInfoBox')[0]
    if(general.name)
        $(generalBox).find('#name').parent().parent().removeClass('hidden')
        $(generalBox).find('#name').innerText = general.name
    else
        $(generalBox).find('#name').parent().parent().addClass('hidden')

    if(general.surname)
        $(generalBox).find('#surname').parent().parent().removeClass('hidden')
        $(generalBox).find('#surname').innerText = general.surname
    else
        $(generalBox).find('#surname').parent().parent().addClass('hidden')
    
    if(general.position)
        $(generalBox).find('#position').parent().parent().removeClass('hidden')
        $(generalBox).find('#position').innerText = general.position
    else
        $(generalBox).find('#position').parent().parent().addClass('hidden')
        
    if(general.country)
        $(generalBox).find('#country').parent().parent().removeClass('hidden')
        $(generalBox).find('#country').innerText = general.country
    else
        $(generalBox).find('#country').parent().parent().addClass('hidden')
    
    if(general.city)
        $(generalBox).find('#city').parent().parent().removeClass('hidden')
        $(generalBox).find('#city').innerText = general.city
    else
        $(generalBox).find('#city').parent().parent().addClass('hidden')
    
    if(general.phone)
        $(generalBox).find('#phone').parent().parent().removeClass('hidden')
        $(generalBox).find('#phone').innerText = general.phone
    else
        $(generalBox).find('#phone').parent().parent().addClass('hidden')
    
    if(general.email)
        $(generalBox).find('#email').parent().parent().removeClass('hidden')
        $(generalBox).find('#email').innerText = general.email
    else
        $(generalBox).find('#email').parent().parent().addClass('hidden')
    
    return

renderNewSummary = (summary) ->
    # если несколько параграфоф, то показываем первый и кнопку MORE, остальные потом раскрываются
    # параграфы разделяются символом *
    $(newContentBox).find('#summaryBox #summary .paragraph')[0].innerText = summary
    return

renderNewExperience = (experience) ->
    experienceBox = $(newContentBox).find('#experienceBox')[0]
    contentItem = $(experienceBox).find('.content-item')[0]
    i = 0
    while i < experience.length
        if(i == 0)
            $(experienceBox).find('*[data-position]')[0].innerText = experience[i].position
            $(experienceBox).find('*[data-company]')[0].innerText = experience[i].company
            $(experienceBox).find('*[data-duration]')[0].innerText = experience[i].duration
            $(experienceBox).find('*[data-place]')[0].innerText = experience[i].place
            # если несколько параграфоф, то показываем первый и кнопку MORE, остальные потом раскрываются
            # параграфы разделяются символом *
            $(experienceBox).find('.paragraph')[0].innerText = experience[i].text
        else
            newItem = $(contentItem).clone(true, true)
            $(newItem).find('*[data-position]')[0].innerText = experience[i].position
            $(newItem).find('*[data-company]')[0].innerText = experience[i].company
            $(newItem).find('*[data-duration]')[0].innerText = experience[i].duration
            $(newItem).find('*[data-place]')[0].innerText = experience[i].place
            # если несколько параграфоф, то показываем первый и кнопку MORE, остальные потом раскрываются
            # параграфы разделяются символом *
            $(newItem).find('.paragraph')[0].innerText = experience[i].text

            $(experienceBox).append(newItem)
        i++
    return

renderNewCertifications = (certificates) ->
    certificationsBox = $(newContentBox).find('#certificates')[0]
    contentItem = $(certificationsBox).find('.content-item')[0]
    i = 0
    while i < certificates.length
        if(i == 0)
            $(certificationsBox).find('*[data-sertificate-title]')[0].innerText = certificates[i].title
            $(certificationsBox).find('*[data-company]')[0].innerText = certificates[i].company
            $(certificationsBox).find('*[data-duration]')[0].innerText = certificates[i].duration
            $(certificationsBox).find('*[data-place]')[0].innerText = certificates[i].place
        else
            newItem = $(contentItem).clone(true, true)
            $(newItem).find('*[data-sertificate-title]')[0].innerText = certificates[i].title
            $(newItem).find('*[data-company]')[0].innerText = certificates[i].company
            $(newItem).find('*[data-duration]')[0].innerText = certificates[i].duration
            $(newItem).find('*[data-place]')[0].innerText = certificates[i].place

            $(certificationsBox).append(newItem)
        i++
    return

renderNewEducation = (education) ->
    educationBox = $(newContentBox).find('#education')[0]
    contentItem = $(educationBox).find('.content-item')[0]
    i = 0
    while i < education.length
        if(i == 0)
            $(educationBox).find('*[data-university]')[0].innerText = education[i].title
            $(educationBox).find('*[data-subject]')[0].innerText = education[i].subject
            $(educationBox).find('*[data-duration]')[0].innerText = education[i].duration
            $(educationBox).find('*[data-place]')[0].innerText = education[i].place
        else
            newItem = $(contentItem).clone(true, true)
            $(newItem).find('*[data-sertificate-title]')[0].innerText = education[i].title
            $(newItem).find('*[data-subject]')[0].innerText = education[i].subject
            $(newItem).find('*[data-duration]')[0].innerText = education[i].duration
            $(newItem).find('*[data-place]')[0].innerText = education[i].place

            $(educationBox).append(newItem)
        i++
    return

renderNewVol = (volounteering) ->
    volounteeringBox = $(newContentBox).find('#volounteering')[0]
    contentItem = $(volounteeringBox).find('.content-item')[0]
    i = 0
    while i < volounteering.length
        if(i == 0)
            $(volounteeringBox).find('*[data-title]')[0].innerText = volounteering[i].title
            $(volounteeringBox).find('*[data-subject]')[0].innerText = volounteering[i].subject
            $(volounteeringBox).find('*[data-duration]')[0].innerText = volounteering[i].duration
            $(volounteeringBox).find('*[data-place]')[0].innerText = volounteering[i].place
        else
            newItem = $(contentItem).clone(true, true)
            $(newItem).find('*[data-title]')[0].innerText = volounteering[i].title
            $(newItem).find('*[data-subject]')[0].innerText = volounteering[i].subject
            $(newItem).find('*[data-duration]')[0].innerText = volounteering[i].duration
            $(newItem).find('*[data-place]')[0].innerText = volounteering[i].place

            $(volounteeringBox).append(newItem)
        i++
    return

renderNewTech = (tSkills) ->
    tSkillsBox = $(newContentBox).find('#tSkills')[0]
    contentItem = $(tSkillsBox).find('.content-item')[0]
    i = 0
    while i < tSkills.length
        if(i == 0)
            $(tSkillsBox).find('*[data-title]')[0].innerText = tSkills[i].title
            $(tSkillsBox).find('*[data-years]')[0].innerText = tSkills[i].years
            $(tSkillsBox).find('*[data-used]')[0].innerText = tSkills[i].used
        else
            newItem = $(contentItem).clone(true, true)
            $(newItem).find('*[data-title]')[0].innerText = tSkills[i].title
            $(newItem).find('*[data-years]')[0].innerText = tSkills[i].years
            $(newItem).find('*[data-used]')[0].innerText = tSkills[i].used

            $(tSkillsBox).append(newItem)
        i++
    return

renderNewSoft = (sSkills) ->
    sSkillsBox = $(newContentBox).find('#sSkills')[0]
    contentItem = $(sSkillsBox).find('.content-item')[0]
    i = 0
    while i < sSkills.length
        if(i == 0)
            $(sSkillsBox).find('*[data-group]')[0].innerText = sSkills[i].title
        else
            newItem = $(contentItem).clone(true, true)
            $(newItem).find('*[data-group]')[0].innerText = sSkills[i].title
            
            $(sSkillsBox).append(newItem)
        i++
    return

renderNewLanguages = (languages) ->
    languagesBox = $(newContentBox).find('#languages')[0]
    contentItem = $(languagesBox).find('.content-item')[0]
    i = 0
    while i < languages.length
        if(i == 0)
            $(languagesBox).find('*[data-language]')[0].innerText = languages[i].title
        else
            newItem = $(contentItem).clone(true, true)
            $(newItem).find('*[data-language]')[0].innerText = languages[i].title

            $(languagesBox).append(newItem)
        i++
    return

renderNewInterests = (interests) ->
    interestsBox = $(newContentBox).find('#interestsBox .interests-content')[0]
    contentItem = $(interestsBox).find('.interests-item')[0]
    i = 0
    while i < interests.length
        if(i == 0)
            $(interestsBox).find('*[data-title]')[0].innerText = interests[i].title
            $(interestsBox).find('*[data-subject]')[0].innerText = interests[i].subject
        else
            newItem = $(contentItem).clone(true, true)
            $(newItem).find('*[data-title]')[0].innerText = interests[i].title
            $(newItem).find('*[data-subject]')[0].innerText = interests[i].subject

            $(interestsBox).append(newItem)
        i++
    return


# Базовая функция которая будет содержать ф-и рендеринга контента каждого из разделов
renderNewContent = (newData) ->
    # есть ли новые данные
    if( $.isEmptyObject(newData) )
        $($('#newContentBox')[0]).addClass('hidden')
        $($('#generalUpdateProfile .header')[0]).css('border', 'none !important')
    else
        $($('#newContentBox')[0]).removeClass('hidden')
        $($('#generalUpdateProfile .header')[0]).css('border-bottom', '1px solid #f0f4ff')
    
    # наличие данных по разделам
    if( !$.isEmptyObject(newData.general) )
        $($('#generalInfoBox')[0]).removeClass('hidden')
        renderNewGeneralInfo(newData.general)
    else
        $($('#generalInfoBox')[0]).addClass('hidden')

    if( !$.isEmptyObject(newData.summary) )
        $($('#summaryBox')[0]).removeClass('hidden')
        renderNewSummary(newData.summary)
    else
        $($('#summaryBox')[0]).addClass('hidden')

    if( !$.isEmptyObject(newData.newExperience) )
        $($('#experienceBox')[0]).removeClass('hidden')
        renderNewExperience(newData.newExperience)
    else
        $($('#experienceBox')[0]).addClass('hidden')

    if( !$.isEmptyObject(newData.newCertificates) )
        $($('#certificates')[0]).removeClass('hidden')
        renderNewCertifications(newData.newCertificates)
    else
        $($('#certificates')[0]).addClass('hidden')

    if( !$.isEmptyObject(newData.newEducation) )
        $($('#education')[0]).removeClass('hidden')
        renderNewEducation(newData.newEducation)
    else
        $($('#education')[0]).addClass('hidden')
        
    if( !$.isEmptyObject(newData.newVolunteering) )
        $($('#volounteering')[0]).removeClass('hidden')
        renderNewVol(newData.newVolunteering)
    else
        $($('#volounteering')[0]).addClass('hidden')

    if( !$.isEmptyObject(newData.newTSkills) )
        $($('#tSkills')[0]).removeClass('hidden')
        renderNewTech(newData.newTSkills)
    else
        $($('#tSkills')[0]).addClass('hidden')

    if( !$.isEmptyObject(newData.newSSkills) )
        $($('#sSkills')[0]).removeClass('hidden')
        renderNewSoft(newData.newSSkills)
    else
        $($('#sSkills')[0]).addClass('hidden')

    if( !$.isEmptyObject(newData.newLanguages) )
        $($('#languages')[0]).removeClass('hidden')
        renderNewLanguages(newData.newLanguages)
    else
        $($('#languages')[0]).addClass('hidden')

    if( !$.isEmptyObject(newData.newInterests) )
        $($('#interestsBox')[0]).removeClass('hidden')
        renderNewInterests(newData.newInterests)
    else
        $($('#interestsBox')[0]).addClass('hidden')

    return



### Render Updated Content Functions ###
updateContentBox = $('#updatedContentBox')[0]
renderUpdateGeneralInfo = (general) ->
    onTalentFlyBox = $(updateContentBox).find('#updatedGeneral .content-item .half-box *[data-values]')[0]
    onTalentFlyTitles = $(updateContentBox).find('#updatedGeneral .content-item .half-box *[data-titles]')[0]
    onUpdateBox = $(updateContentBox).find('#updatedGeneral .content-item .half-box *[data-values]')[1]
    onUpdateTitles = $(updateContentBox).find('#updatedGeneral .content-item .half-box *[data-titles]')[1]
    if( general.before and general.now )
        # добавить проверки на наличие старых значений и если нету, то скрыть элементы для их отображения
        # в on update box тоже скрывать, так как если в before свойства нету, то в now тоже не может быть
        # (потому что это была бы новая инфа, которая должна попадать в newData.general)
        if(general.before.name)
            $(onTalentFlyBox).find('*[data-name]')[0].innerText = general.before.name
        else
            $($(onTalentFlyBox).find('*[data-name]')[0]).addClass('hidden')
            $($(onTalentFlyTitles).find('*[data-name]')[0]).addClass('hidden')
            $($(onUpdateBox).find('*[data-name]')[0]).addClass('hidden')
            $($(onUpdateTitles).find('*[data-name]')[0]).addClass('hidden')

        if(general.before.surname)
            $(onTalentFlyBox).find('*[data-lastName]')[0].innerText = general.before.surname
        else
            $($(onTalentFlyBox).find('*[data-lastName]')[0]).addClass('hidden')
            $($(onTalentFlyTitles).find('*[data-lastName]')[0]).addClass('hidden')
            $($(onUpdateBox).find('*[data-lastName]')[0]).addClass('hidden')
            $($(onUpdateTitles).find('*[data-lastName]')[0]).addClass('hidden')

        if(general.before.position)
            $(onTalentFlyBox).find('*[data-position]')[0].innerText = general.before.position
        else
            $($(onTalentFlyBox).find('*[data-position]')[0]).addClass('hidden')
            $($(onTalentFlyTitles).find('*[data-position]')[0]).addClass('hidden')
            $($(onUpdateBox).find('*[data-position]')[0]).addClass('hidden')
            $($(onUpdateTitles).find('*[data-position]')[0]).addClass('hidden')

        if(general.before.country)
            $(onTalentFlyBox).find('*[data-country]')[0].innerText = general.before.country
        else
            $($(onTalentFlyBox).find('*[data-country]')[0]).addClass('hidden')
            $($(onTalentFlyTitles).find('*[data-country]')[0]).addClass('hidden')
            $($(onUpdateBox).find('*[data-country]')[0]).addClass('hidden')
            $($(onUpdateTitles).find('*[data-country]')[0]).addClass('hidden')

        if(general.before.city)
            $(onTalentFlyBox).find('*[data-city]')[0].innerText = general.before.city
        else
            $($(onTalentFlyBox).find('*[data-city]')[0]).addClass('hidden')
            $($(onTalentFlyTitles).find('*[data-city]')[0]).addClass('hidden')
            $($(onUpdateBox).find('*[data-city]')[0]).addClass('hidden')
            $($(onUpdateTitles).find('*[data-city]')[0]).addClass('hidden')
        
        if(general.before.phone)
            $(onTalentFlyBox).find('*[data-phone]')[0].innerText = general.before.phone
        else
            $($(onTalentFlyBox).find('*[data-phone]')[0]).addClass('hidden')
            $($(onTalentFlyTitles).find('*[data-phone]')[0]).addClass('hidden')
            $($(onUpdateBox).find('*[data-phone]')[0]).addClass('hidden')
            $($(onUpdateTitles).find('*[data-phone]')[0]).addClass('hidden')
        
        if(general.before.email)
            $(onTalentFlyBox).find('*[data-email]')[0].innerText = general.before.email
        else
            $($(onTalentFlyBox).find('*[data-email]')[0]).addClass('hidden')
            $($(onTalentFlyTitles).find('*[data-email]')[0]).addClass('hidden')
            $($(onUpdateBox).find('*[data-email]')[0]).addClass('hidden')
            $($(onUpdateTitles).find('*[data-email]')[0]).addClass('hidden')


        # on update box
        # добавить проверки на наличие старых значений и если есть а обновлённых нету, то вывести их
        # если и старых нету, скрыть элемент для отображения (если старых нету, то поля скрываются в предыдущем блоке)
        if(general.now.name)
            $(onUpdateBox).find('*[data-name]')[0].innerText = general.now.name
            $($(onUpdateBox).find('*[data-name]')[0]).addClass('update')
        else
            $(onUpdateBox).find('*[data-name]')[0].innerText = general.before.name

        if(general.now.surname)    
            $(onUpdateBox).find('*[data-lastName]')[0].innerText = general.now.surname
            $($(onUpdateBox).find('*[data-lastName]')[0]).addClass('update')
        else
            $(onUpdateBox).find('*[data-lastName]')[0].innerText = general.before.surname

        if(general.now.position)
            $(onUpdateBox).find('*[data-position]')[0].innerText = general.now.position
            $($(onUpdateBox).find('*[data-position]')[0]).addClass('update')
        else
            $(onUpdateBox).find('*[data-position]')[0].innerText = general.before.position

        if(general.now.country)
            $(onUpdateBox).find('*[data-country]')[0].innerText = general.now.country
            $($(onUpdateBox).find('*[data-country]')[0]).addClass('update')
        else
            $(onUpdateBox).find('*[data-country]')[0].innerText = general.before.country

        if(general.now.city)
            $(onUpdateBox).find('*[data-city]')[0].innerText = general.now.city
            $($(onUpdateBox).find('*[data-city]')[0]).addClass('update')
        else
            $(onUpdateBox).find('*[data-city]')[0].innerText = general.before.city

        if(general.now.phone)
            $(onUpdateBox).find('*[data-phone]')[0].innerText = general.now.phone
            $($(onUpdateBox).find('*[data-phone]')[0]).addClass('update')
        else
            $(onUpdateBox).find('*[data-phone]')[0].innerText = general.now.phone

        if(general.now.email)
            $(onUpdateBox).find('*[data-email]')[0].innerText = general.now.email
            $($(onUpdateBox).find('*[data-email]')[0]).addClass('update')
        else
            $(onUpdateBox).find('*[data-email]')[0].innerText = general.now.email
    return

renderNewSummary = (summary) ->
    # пока предполагается что ввесь текст новый поэтому ввесь выделяем синим
    onTalentFlyBox = $(updateContentBox).find('#updateSummary .content-item .half-box .paragraph')[0]
    onUpdateBox = $(updateContentBox).find('#updateSummary .content-item .half-box .paragraph')[1]
    if( summary.before and summary.now )
        onTalentFlyBox.innerText = summary.before
        onUpdateBox.innerText = summary.now
        $(onUpdateBox).addClass('update')
    return

renderUpdateExperience = (experience) ->
    contentItem = $(updateContentBox).find('#updateExperience .content-item')[0]
    i = 0
    while i < experience.length
        if(experience[i].before and experience[i].now)
            newItem = $(contentItem).clone(true, true)
            $(newItem).removeClass('hidden')
            $(newItem).attr('data-id', experience[i].id)
            onTalentFlyBox = $(newItem).find('.half-box')[0]
            onUpdateBox = $(newItem).find('.half-box')[1]
            
            $(onTalentFlyBox).find('*[data-position]')[0].innerText = experience[i].before.position
            $(onTalentFlyBox).find('*[data-company]')[0].innerText = experience[i].before.company
            $(onTalentFlyBox).find('*[data-duration]')[0].innerText = experience[i].before.duration
            $(onTalentFlyBox).find('*[data-place]')[0].innerText = experience[i].before.place
            $(onTalentFlyBox).find('*[data-description]')[0].innerText = experience[i].before.text
            
            if(experience[i].now.position)
                $(onUpdateBox).find('*[data-position]')[0].innerText = experience[i].now.position
                $($(onUpdateBox).find('*[data-position]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-position]')[0].innerText = experience[i].before.position

            if(experience[i].now.company)
                $(onUpdateBox).find('*[data-company]')[0].innerText = experience[i].now.company
                $($(onUpdateBox).find('*[data-company]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-company]')[0].innerText = experience[i].before.company

            if(experience[i].now.duration)
                $(onUpdateBox).find('*[data-duration]')[0].innerText = experience[i].now.duration
                $($(onUpdateBox).find('*[data-duration]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-duration]')[0].innerText = experience[i].before.duration

            if(experience[i].now.place)
                $(onUpdateBox).find('*[data-place]')[0].innerText = experience[i].now.place
                $($(onUpdateBox).find('*[data-place]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-place]')[0].innerText = experience[i].before.place

            if(experience[i].now.text)
                $(onUpdateBox).find('*[data-description]')[0].innerText = experience[i].now.text
                # пока предполагается что ввесь текст новый поэтому ввесь выделяем синим
                $($(onUpdateBox).find('*[data-description]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-description]')[0].innerText = experience[i].before.text

            $($('#updateExperience')[0]).append(newItem)
        i++
    
    return

renderUpdateEducation = (education) ->
    contentItem = $(updateContentBox).find('#updateEducation .content-item')[0]
    i = 0
    while i < education.length
        if(education[i].before and education[i].now)
            newItem = $(contentItem).clone(true, true)
            $(newItem).removeClass('hidden')
            $(newItem).attr('data-id', education[i].id)
            onTalentFlyBox = $(newItem).find('.half-box')[0]
            onUpdateBox = $(newItem).find('.half-box')[1]
            
            $(onTalentFlyBox).find('*[data-title]')[0].innerText = education[i].before.title
            $(onTalentFlyBox).find('*[data-university]')[0].innerText = education[i].before.university
            $(onTalentFlyBox).find('*[data-duration]')[0].innerText = education[i].before.duration
            $(onTalentFlyBox).find('*[data-place]')[0].innerText = education[i].before.place
            
            if(education[i].now.title)
                $(onUpdateBox).find('*[data-title]')[0].innerText = education[i].now.title
                $($(onUpdateBox).find('*[data-title]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-title]')[0].innerText = education[i].before.title

            if(education[i].now.university)
                $(onUpdateBox).find('*[data-university]')[0].innerText = education[i].now.university
                $($(onUpdateBox).find('*[data-university]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-university]')[0].innerText = education[i].before.university

            if(education[i].now.duration)
                $(onUpdateBox).find('*[data-duration]')[0].innerText = education[i].now.duration
                $($(onUpdateBox).find('*[data-duration]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-duration]')[0].innerText = education[i].before.duration

            if(education[i].now.place)
                $(onUpdateBox).find('*[data-place]')[0].innerText = education[i].now.place
                $($(onUpdateBox).find('*[data-place]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-place]')[0].innerText = education[i].before.place

            $($('#updateEducation')[0]).append(newItem)
        i++
    
    return

renderUpdateCertifications = (certificates) ->
    contentItem = $(updateContentBox).find('#updateSertificates .content-item')[0]
    i = 0
    while i < certificates.length
        if(certificates[i].before and certificates[i].now)
            newItem = $(contentItem).clone(true, true)
            $(newItem).removeClass('hidden')
            $(newItem).attr('data-id', certificates[i].id)
            onTalentFlyBox = $(newItem).find('.half-box')[0]
            onUpdateBox = $(newItem).find('.half-box')[1]
            
            $(onTalentFlyBox).find('*[data-title]')[0].innerText = certificates[i].before.title
            $(onTalentFlyBox).find('*[data-university]')[0].innerText = certificates[i].before.university
            $(onTalentFlyBox).find('*[data-duration]')[0].innerText = certificates[i].before.duration
            $(onTalentFlyBox).find('*[data-place]')[0].innerText = certificates[i].before.place
            
            if(certificates[i].now.title)
                $(onUpdateBox).find('*[data-title]')[0].innerText = certificates[i].now.title
                $($(onUpdateBox).find('*[data-title]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-title]')[0].innerText = certificates[i].before.title

            if(certificates[i].now.university)
                $(onUpdateBox).find('*[data-university]')[0].innerText = certificates[i].now.university
                $($(onUpdateBox).find('*[data-university]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-university]')[0].innerText = certificates[i].before.university

            if(certificates[i].now.duration)
                $(onUpdateBox).find('*[data-duration]')[0].innerText = certificates[i].now.duration
                $($(onUpdateBox).find('*[data-duration]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-duration]')[0].innerText = certificates[i].before.duration

            if(certificates[i].now.place)
                $(onUpdateBox).find('*[data-place]')[0].innerText = certificates[i].now.place
                $($(onUpdateBox).find('*[data-place]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-place]')[0].innerText = certificates[i].before.place

            $($('#updateSertificates')[0]).append(newItem)
        i++
    
    return

renderUpdateVol = (volounteering) ->
    contentItem = $(updateContentBox).find('#updateVolounteering .content-item')[0]
    i = 0
    while i < volounteering.length
        if(volounteering[i].before and volounteering[i].now)
            newItem = $(contentItem).clone(true, true)
            $(newItem).removeClass('hidden')
            $(newItem).attr('data-id', volounteering[i].id)
            onTalentFlyBox = $(newItem).find('.half-box')[0]
            onUpdateBox = $(newItem).find('.half-box')[1]
            
            $(onTalentFlyBox).find('*[data-title]')[0].innerText = volounteering[i].before.title
            $(onTalentFlyBox).find('*[data-place]')[0].innerText = volounteering[i].before.place
            $(onTalentFlyBox).find('*[data-duration]')[0].innerText = volounteering[i].before.duration
            $(onTalentFlyBox).find('*[data-location]')[0].innerText = volounteering[i].before.place
            
            if(volounteering[i].now.title)
                $(onUpdateBox).find('*[data-title]')[0].innerText = volounteering[i].now.title
                $($(onUpdateBox).find('*[data-title]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-title]')[0].innerText = volounteering[i].before.title

            if(volounteering[i].now.place)
                $(onUpdateBox).find('*[data-place]')[0].innerText = volounteering[i].now.place
                $($(onUpdateBox).find('*[data-place]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-place]')[0].innerText = volounteering[i].before.place

            if(volounteering[i].now.duration)
                $(onUpdateBox).find('*[data-duration]')[0].innerText = volounteering[i].now.duration
                $($(onUpdateBox).find('*[data-duration]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-duration]')[0].innerText = volounteering[i].before.duration

            if(volounteering[i].now.location)
                $(onUpdateBox).find('*[data-location]')[0].innerText = volounteering[i].now.location
                $($(onUpdateBox).find('*[data-location]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-location]')[0].innerText = volounteering[i].before.location

            $($('#updateVolounteering')[0]).append(newItem)
        i++
    
    return


renderUpdateTech = (tSkills) ->
    contentItem = $(updateContentBox).find('#updateTSkills .content-item')[0]
    i = 0
    while i < tSkills.length
        if(tSkills[i].before and tSkills[i].now)
            newItem = $(contentItem).clone(true, true)
            $(newItem).removeClass('hidden')
            $(newItem).attr('data-id', tSkills[i].id)
            onTalentFlyBox = $(newItem).find('.half-box')[0]
            onUpdateBox = $(newItem).find('.half-box')[1]
            
            $(onTalentFlyBox).find('*[data-title]')[0].innerText = tSkills[i].before.title
            $(onTalentFlyBox).find('*[data-place]')[0].innerText = tSkills[i].before.place
            $(onTalentFlyBox).find('*[data-duration]')[0].innerText = tSkills[i].before.duration
            $(onTalentFlyBox).find('*[data-location]')[0].innerText = tSkills[i].before.place
            
            if(tSkills[i].now.title)
                $(onUpdateBox).find('*[data-title]')[0].innerText = tSkills[i].now.title
                $($(onUpdateBox).find('*[data-title]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-title]')[0].innerText = tSkills[i].before.title

            if(tSkills[i].now.place)
                $(onUpdateBox).find('*[data-place]')[0].innerText = tSkills[i].now.place
                $($(onUpdateBox).find('*[data-place]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-place]')[0].innerText = tSkills[i].before.place

            if(tSkills[i].now.duration)
                $(onUpdateBox).find('*[data-duration]')[0].innerText = tSkills[i].now.duration
                $($(onUpdateBox).find('*[data-duration]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-duration]')[0].innerText = tSkills[i].before.duration

            if(tSkills[i].now.location)
                $(onUpdateBox).find('*[data-location]')[0].innerText = tSkills[i].now.location
                $($(onUpdateBox).find('*[data-location]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-location]')[0].innerText = tSkills[i].before.location

            $($('#updateTSkills')[0]).append(newItem)
        i++
    return

renderNewSoft = (sSkills) ->
    contentItem = $(updateContentBox).find('#updateSSkills .content-item')[0]
    if(sSkills.before.length and sSkills.now.length)
        $(contentItem).attr('data-id', tSkills[i].id)
        onTalentFlyBox = $(contentItem).find('.half-box .title')[0]
        onUpdateBox = $(contentItem).find('.half-box .title')[1]
        i = 0
        while i < sSkills.before.length
            categoryBox = $($(onTalentFlyBox).find('*[data-category]')[0]).clone(true, true)
            $(categoryBox).removeClass('hidden')
            categoryBox.innerText = sSkills.before[i].category
            $(onTalentFlyBox).append(categoryBox)
            j = 0
            while j < sSkills.before[i].skills.length
                skillBox = $($(onTalentFlyBox).find('*[data-skill]')[0]).clone(true, true)
                $(skillBox).removeClass('hidden')
                skillBox.innerText = sSkills.before[i].skills[j]
                $(onTalentFlyBox).append(skillBox)
                j++
            i++
        # to update
        i = 0
        while i < sSkills.now.length
            categoryBox = $($(onUpdateBox).find('.category-box')[0]).clone(true, true)
            categoryTitle = $($(categoryBox).find('*[data-category]')[0]).clone(true, true)
            $(categoryBox).removeClass('hidden')
            $(categoryTitle).removeClass('hidden')
            categoryTitle.innerText = sSkills.now[i].category
            $(categoryBox).append(categoryTitle)
            j = 0
            while j < sSkills.now[i].skills.length
                skillBox = $($(categoryBox).find('*[data-skill]')[0]).clone(true, true)
                $(skillBox).removeClass('hidden')
                skillBox.innerText = sSkills.now[i].skills[j]
                $(categoryBox).append(skillBox)
                j++
            $(onUpdateBox).append(categoryBox)
            i++
    return


renderUpdateLanguages = (languages) ->
    contentItem = $(updateContentBox).find('#updateLanguages .content-item')[0]
    i = 0
    while i < languages.length
        if(languages[i].before and languages[i].now)
            newItem = $(contentItem).clone(true, true)
            $(newItem).removeClass('hidden')
            $(newItem).attr('data-id', languages[i].id)
            onTalentFlyBox = $(newItem).find('.half-box')[0]
            onUpdateBox = $(newItem).find('.half-box')[1]
            
            $(onTalentFlyBox).find('*[data-language]')[0].innerText = languages[i].before.title
            $(onTalentFlyBox).find('*[data-level]')[0].innerText = languages[i].before.level
            
            if(languages[i].now.title)
                $(onUpdateBox).find('*[data-title]')[0].innerText = languages[i].now.title
                $($(onUpdateBox).find('*[data-title]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-title]')[0].innerText = languages[i].before.title

            if(languages[i].now.level)
                $(onUpdateBox).find('*[data-level]')[0].innerText = languages[i].now.level
                $($(onUpdateBox).find('*[data-level]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-level]')[0].innerText = languages[i].before.level

            $($('#updateLanguages')[0]).append(newItem)
        i++
    return

renderUpdateInterests = (interests) ->
    contentItem = $(updateContentBox).find('#updateInterests .content-item')[0]
    i = 0
    while i < interests.length
        if(interests[i].before and interests[i].now)
            newItem = $(contentItem).clone(true, true)
            $(newItem).removeClass('hidden')
            $(newItem).attr('data-id', interests[i].id)
            onTalentFlyBox = $(newItem).find('.half-box')[0]
            onUpdateBox = $(newItem).find('.half-box')[1]
            
            $(onTalentFlyBox).find('*[data-language]')[0].innerText = interests[i].before.title
            $(onTalentFlyBox).find('*[data-place]')[0].innerText = interests[i].before.place
            
            if(interests[i].now.title)
                $(onUpdateBox).find('*[data-title]')[0].innerText = interests[i].now.title
                $($(onUpdateBox).find('*[data-title]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-title]')[0].innerText = interests[i].before.title

            if(interests[i].now.place)
                $(onUpdateBox).find('*[data-place]')[0].innerText = interests[i].now.place
                $($(onUpdateBox).find('*[data-place]')[0]).addClass('update')
            else
                $(onUpdateBox).find('*[data-place]')[0].innerText = interests[i].before.place

            $($('#updateInterests')[0]).append(newItem)
        i++
    return


# Базовая функция которая будет содержать ф-и рендеринга контента каждого из разделов
renderUpdateContent = (updateData) ->
    # есть ли данные
    if( $.isEmptyObject(updateData) )
        $($('#updatedContentBox')[0]).addClass('hidden')
        console.log('length is zero')
    else
        $($('#updatedContentBox')[0]).removeClass('hidden')
        console.log('length is not zero')

    # наличие данных по разделам
    if( !$.isEmptyObject(updateData.general) )
        $($('#updatedGeneral')[0]).removeClass('hidden')
        renderUpdateGeneralInfo(updateData.general)
    else
        $($('#updatedGeneral')[0]).addClass('hidden')

    if( !$.isEmptyObject(updateData.summary) )
        $($('#updateSummary')[0]).removeClass('hidden')
        renderUpdateSummary(updateData.summary)
    else
        $($('#updateSummary')[0]).addClass('hidden')
    
    if( updateData.updatedExperience.length > 0 )
        console.log('length is not zero')
        $($('#updateExperience')[0]).removeClass('hidden')
        renderUpdateExperience(updateData.updatedExperience)
    else
        console.log('length is equal to zero')
        $($('#updateExperience')[0]).addClass('hidden')
    
    if( !$.isEmptyObject(updateData.updatedEducation) )
        $($('#updateEducation')[0]).removeClass('hidden')
        renderUpdateEducation(updateData.updatedEducation)
    else
        $($('#updateEducation')[0]).addClass('hidden')

    if( !$.isEmptyObject(updateData.updatedCertificates) )
        $($('#updateSertificates')[0]).removeClass('hidden')
        renderUpdateCertifications(updateData.updatedCertificates)
    else
        $($('#updateSertificates')[0]).addClass('hidden')
    
    if( !$.isEmptyObject(updateData.updatedVolunteering) )
        $($('#updateVolounteering')[0]).removeClass('hidden')
        renderUpdateVol(updateData.updatedVolunteering)
    else
        $($('#updateVolounteering')[0]).addClass('hidden')
    
    if( !$.isEmptyObject(updateData.updatedTSkills) )
        $($('#updateTSkills')[0]).removeClass('hidden')
        renderUpdateTech(updateData.updatedTSkills)
    else
        $($('#updateTSkills')[0]).addClass('hidden')
    
    if( !$.isEmptyObject(updateData.updatedSSkills) )
        $($('#updateSSkills')[0]).removeClass('hidden')
        renderUpdateSoft(updateData.updatedSSkills)
    else
        $($('#updateSSkills')[0]).addClass('hidden')

    # сменил ИД на демке с languages на updateLanguages
    if( !$.isEmptyObject(updateData.updatedLanguages) )
        $($('#updateLanguages')[0]).removeClass('hidden')
        renderUpdateLanguages(updateData.updatedLanguages)
    else
        $($('#updateLanguages')[0]).addClass('hidden')
    
    if( !$.isEmptyObject(updateData.updatedInterests) )
        $($('#updateInterests')[0]).removeClass('hidden')
        renderUpdateInterests(updateData.updatedInterests)
    else
        $($('#updateInterests')[0]).addClass('hidden')
    
    return


### CUSTOM FUNCTIONS ###