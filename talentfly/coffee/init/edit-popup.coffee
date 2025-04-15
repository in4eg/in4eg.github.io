softSkillsToRemove = {}
softSkillsToAdd = {}
setTextLength = (text, textBlock)->
	if text < 264
		textBlock.attr('data-length', '264')
	else if text >= 265 && text < 350
		textBlock.attr('data-length', '300')
	else if text >= 350 && text < 400
		textBlock.attr('data-length', '400')
	else if text >= 400 && text < 500
		textBlock.attr('data-length', '500')
	else if text >= 500
		textBlock.attr('data-length', '600')
	return

$ document
	.on 'input change', '[data-push]', ->
		# parentBlock = $(@).attr('data-push')
		# if $(parentBlock).hasClass('years')
		if($(@).attr('id'))
			if $(this).attr('id').indexOf('skillYear') != -1
			
				number = parseInt $(@).val(), 10
				$(@).val(number)
				labelText = 'years'
				labelText = if number is 1 then 'year' else if number < 1 or isNaN(number) then '<1' else 'years'

				if isNaN(number)
					$(@).val(0)
					$(@).next('label').html labelText
				else
					# $(parentBlock).html number + ' ' + labelText
					$(@).next('label').html labelText

# 		else if $(document).find(parentBlock).hasClass 'tech-title'
# 			children = $(parentBlock).children()
# 			$(document).find(parentBlock).html $(@).val()
# 			$(parentBlock).append(children)

# 		else if $(document).find(parentBlock).hasClass('title:not(.tech-title)')
# 			children = $(parentBlock).children()
# 			$(parentBlock).html $(@).find('option:selected').text()
# 			$(parentBlock).append(children)

# 		else if $(@).data('view') is true
# 			$(parentBlock).siblings('.hidden-helper').addClass 'active'
# 			$(parentBlock).addClass 'hidden'

# 			text = $(this).val()
# 			arr = text.split('-')
# 			results = []
# 			i = 0
# 			while i < arr.length
# 				if arr[i]
# 					results.push arr[i]
# 				i++
# 			text = text.replace(/\n/gim, '<br>')
# 			$(parentBlock).siblings('.hidden-helper').removeClass 'active'
# 			$(parentBlock).removeClass 'hidden'
# 			$(parentBlock).html text
		
# 		else if $(@).data('push').length <= 0
# 			$(document).find($(@).attr('data-push')).html $(@).val()

# 		else
# 			$(document).find(parentBlock).html $(@).val()

# 			$(parentBlock).siblings('.hidden-helper').removeClass 'active'
# 			$(parentBlock).removeClass 'hidden'


# 		if $(parentBlock).parent('.place').length > 0
# 			if $(parentBlock).text().trim().length <= 0
# 				$(parentBlock).prev('.comma').remove()
# 			else if $(parentBlock).prev('.comma').length <= 0 and !$(parentBlock).is(':first-child') and !$(parentBlock).prev().is('i')
# 				prevBlock = $(parentBlock).prev()
# 				$('<span class="comma">,</span>' + ' ').insertAfter prevBlock


# 		if $(parentBlock).parents('.contacts-list')
# 			if $(parentBlock).text().trim().length <= 0
# 				$(parentBlock).prev('.icon').addClass 'hidden'
# 			else
# 				$(parentBlock).prev('.icon').removeClass 'hidden'

# 		if $(parentBlock).hasClass 'card-title'
# 			$(parentBlock).attr('data-text-limit', $(parentBlock).text().length).data('text-limit', $(parentBlock).text().length)
# 			setTextLength $(document).find(parentBlock).data('text-limit'), $(document).find(parentBlock)

			
# 		if $(parentBlock).parents('.h4-title').length > 0
# 			totalVal = 0
# 			for name in $('.name-change')
# 				totalVal += $(name).val().trim().length

# 			$(parentBlock).parents('.h4-title').attr('data-text-length', totalVal)

# 			if totalVal < 20
# 				$(parentBlock).parents('.h4-title').css('font-size', '28px')
# 			else if totalVal >= 21 and totalVal < 37
# 				$(parentBlock).parents('.h4-title').css('font-size', '22px')
# 			else if totalVal >= 38 and totalVal < 42
# 				$(parentBlock).parents('.h4-title').css('font-size', '20px')
# 			else if totalVal >= 43
# 				$(parentBlock).parents('.h4-title').css('font-size', '18px')
		return

$ document
	.on 'input change', '[data-push-href]', ->
		parentBlock = $(@).data('push-href')
		$(document).find(parentBlock).attr('href', $(@).val())
		if $(@).val().length > 0
			$(@).removeClass 'ignored'
			$(@).parents('.form-group').removeClass 'error'
			$(document).find(parentBlock).removeClass 'hidden'
		else if $(@).val().length <= 0
			$(document).find(parentBlock).addClass 'hidden'
			$(@).addClass 'ignored'
		return

formData = undefined
editorData = ->
	for i of CKEDITOR.instances
		CKEDITOR.instances[i].on 'change', ->
			data = @.getData()
			# connectElement = @.element.data('push')
			# $(connectElement).attr('data-text-limit', data.length)
			# setTextLength $(connectElement).attr('data-text-limit'), $(connectElement)

			# if data.length > 0
			# 	$(connectElement).html data
			# 	$(connectElement).removeClass 'hidden'
			# 	$(connectElement).siblings('.hidden-helper').removeClass 'active'
			# else
			# 	$(connectElement).addClass 'hidden'
			# 	$(connectElement).siblings('.hidden-helper').addClass 'active'
			return
	return

editorData()
$(document).on 'click', '[data-edit]', (e) ->
	infoBlock = $(document).find($(@).data('edit'))
	if typeof $(@).attr('href') is 'undefined'
		
		if typeof $(@).attr('data-call-popup') is 'undefined'
			editBlock = $($(@).attr('data-call'))
		else
			editBlock = $($(@).attr('data-call-popup'))
	else
		editBlock = $($(@).attr('href'))

	editBlock.find('.for-add').addClass 'hidden'
	editBlock.find('.for-edit').removeClass 'hidden'

	#for summary
	if infoBlock.attr('data-text') is 'textarea'
		$(infoBlock.data('input')).val $($(@).data('edit')).text().trim()
		formData = $('#summaryMess').html().trim()
		for instance of CKEDITOR.instances
			# console.log instance
			`instance = instance`
			CKEDITOR.instances.summaryEdit.updateElement()
			# CKEDITOR.instances.summaryEdit.setData formData
			window.setTimeout (->
				CKEDITOR.instances.summaryEdit.setData formData
				return
			), 10


	#for technical skills
	else if infoBlock.attr('data-text') is 'list'

		techItems = infoBlock.children('li')

		for techItem in techItems
			title = $(techItem).find('.title').clone().children().remove().end().text().trim();

			# if title.length <= 0
			# 	formData = formDataBeforeNewElementTech
			# else
			# 	formData = infoBlock.html()

		items = infoBlock.children 'li:not(.read-more)'
		for item, i in items

			title = $(item).find('.title').clone().children().remove().end().text().trim()
			years = $(item).find('.title').clone().children().remove().text().trim()
			lastUse = $(item).find('.title').clone().find('.value').remove().text().trim()

			number = parseInt years, 10

			if isNaN(number)
				number = ""

			if isNaN(lastUse)
				lastUse = ''
			# if years == '' then (number = years) else (number = +years)

			titleId = $($(item).find('.title')).attr('id')
			yearId = $($(item).find('.years')).attr('id')
			lastYearId = $($(item).find('.value')).attr('id')

			labelText = 'years'
			if number is 1
				labelText = 'year'

			template = "
				<tr>
					<td class=\"large\" data-caption=\"Skill\">
						<div class=\"form-group spaced\">
							<input type=\"text\" data-push=\"##{titleId}\" data-id=\"#{titleId}\" id=\"skillTechTitle#{i}\" value=\"#{title}\" class=\"input input-simple title-input in-focus\" data-minlength=\"2\">
						</div>
					</td>
					<td class=\"small\" data-caption=\"Experience\">
						<div class=\"form-group spaced\">
							<input type=\"text\" data-year class=\"input-simple with-label align-center ignored\" id=\"skillYear#{i}\" maxlength=\"2\" placeholder=\"-\" value=\"#{number}\" data-push=\"##{yearId}\">
							<label for=\"skillYear#{i}\" class=\"simple-label\">#{labelText}</label>
						</div>
					</td>
					<td class=\"small\" data-caption=\"Last used\">
						<div class=\"select-outer\">
							<select class=\"select\" data-used name=\"used#{i}\" data-push=\"##{lastYearId}\" id=\"selTechY#{i}\">
							
							</select>
							<span class=\"arrow\">
								<i class=\"icon icon-angle-down\"></i>
							</span>
						</div>
					</td>
					<td class=\"smaller remove-cell\" data-caption=\"Remove\">
						<button type=\"button\" class=\"btn btn-default remove-skill\" data-remove-skill=\"#{$(@).data('edit')}\">
							<span class=\"text\"><i class=\"icon icon-close\"></i></span>
							<span class=\"fade\"></span>
						</button>
					</td>
				</tr>
				"

			$(infoBlock.data('addto')).find('tbody').append template
			# yearUsed = used.slice(1, used.length)
			fromList = false
			for use in used	
				if use == +lastUse
					$('#selTechY' + i).append $('<option>').attr('value', use).attr('selected', 'selected').text(use)
					fromList = true
				else
					$('#selTechY' + i).append $('<option>').attr('value', use).text(use)
			if !fromList
				$('#selTechY' + i).prepend '<option value="" style="color : lightgrey" selected>Year</option>'
				$('#selTechY' + i).on 'change', ->
					$(@).children('[value = ""]').remove()
					return
				# $('#selTechY' + i).append $('<option>').attr('value', lastUse).attr('selected', 'selected').text(lastUse)

		for skill in techSkills
			$('[data-skill]').append($('<option>').attr('value', skill).text(skill))

		lastBlock = infoBlock.children().last().text().trim()
		# If we click not edit but ad a new tech skill	
		if $(@).attr('data-add') == '#technicalskills-list'
			$(infoBlock.data('addto')).find('tbody').append newTechEmptyInput.template
			for year in used
				$('#techY' + i).append($('<option>').attr('value', year).text(year))
			$('#technicalSkillsTable').find('.in-focus').focus()

		existElements = infoBlock.find('li')
		if existElements.length <= 1 and existElements.find('.title').clone().children().remove().end().text().trim().length is 0
			infoBlock.addClass 'empty'

	# for languages
	else if infoBlock.attr('data-text') is 'list-extend'
		langItems = infoBlock.children('li')
		for langItem in langItems
			title = $(langItem).find('.title').text().trim()

			# if title.length <= 0
			# 	formData = formDataBeforeNewElement
			# else
			# 	formData = infoBlock.html()

		items = infoBlock.children 'li:not(.read-more)'
		self = this
		# setTimeout (->
		for item, i in items
			title = $(item).find('.title').text().trim().split("\n")[0]
			titleId = $($(item).find('.title')).attr('id')
			leadId = $($(item).find('.lead')).attr('id')
			leadText = $(item).find('.lead').text().trim()

			if infoBlock.attr('data-input') is 'select'
				# template for languages
				template = "
					<tr>
						<td class=\"large\" data-caption=\"Language\">
							<div class=\"form-group spaced\">
								<input type=\"text\" data-push=\"##{titleId}\" data-id=\"#{titleId}\" id=\"lan#{i}\" value=\"#{title}\" class=\"input input-simple in-focus\">
							</div>
						</td>
						<td class=\"large\" data-caption=\"Proficiency\">
							<div class=\"select-outer\">
								<select class=\"select\" data-proficiency name=\"used#{i}\" data-push=\"##{leadId}\" id=\"profL#{i}\">
									<option selected value=\"#{leadText}\">#{leadText}</option>
								</select>
								<span class=\"arrow\">
									<i class=\"icon icon-angle-down\"></i>
								</span>
							</div>
						</td>
						<td class=\"smaller remove-cell\" data-caption=\"Remove\">
							<button type=\"button\" class=\"btn btn-default remove-skill\" data-remove-skill=\"#{$(self).data('edit')}\">
								<span class=\"text\"><i class=\"icon icon-close\"></i></span>
								<span class=\"fade\"></span>
							</button>
						</td>
					</tr>
				"

			$(infoBlock.data('addto')).find('tbody').append template

			profArr = []

			for proficiency in proficiencies
				if proficiency isnt leadText
					profArr.push proficiency
			
			for prof in profArr
				$(infoBlock.data('addto')).find('#profL' + i).append($('<option>').attr('value', prof).text(prof))

		# If we click not edit but ad a new language	
		if $(self).attr('data-add') == '#languages-list'
			$(infoBlock.data('addto')).find('tbody').append newLanguageEmptyInput.template
		for proficiency in proficiencies
			$('#profL' + newLanguageEmptyInput.i).append($('<option>').attr('value', proficiency).text(proficiency))
		$(document).find('#languagesTable').find('.in-focus').focus()

		# ), 50, self

	# for hobbies and interests
	else if infoBlock.attr('data-text') is 'block-extend'
		# Если открыто в режиме добавления данных, то в качестве formData
		# используем снимок экрана до добавления туда новых полей
		# formDataBeforeNewElementInterests берется из файла popup-add-interests.js
		# if formDataBeforeNewElementInterests
		# 	formData = formDataBeforeNewElementInterests
		# else
		# 	formData = infoBlock.html()

		items = infoBlock.children 'li:not(.read-more)'

		for item, i in items
			title = $(item).find('.title').text().trim().split("\n")[0]
			titleId = $($(item).find('.title')).attr('id')
			leadId = $($(item).find('.lead')).attr('id')
			leadText = $(item).find('.lead').text().trim()
			linkHref = $($(item).find('.tag-link')).attr('href')

			if typeof linkId is undefined or linkId is 'undefined'
				linkId = ''
			else
				linkId = $($(item).find('.tag-link')).attr('id')

			# template for interests
			template = "
				<div class=\"block-info full-line\">
					<div class=\"form-group last\">
						<div class=\"element-option\">
							<button type=\"button\" class=\"btn btn-default move-btn drag-handle\" data-down=\"#interestsBody\">
								Down
								<span class=\"btn btn-grey btn-xs btn-round\"><i class=\"icon icon-down-arrow-key\"></i></span>
							</button>
							<button type=\"button\" class=\"btn btn-default move-btn drag-handle\" data-up=\"#interestsBody\">
								Up
								<span class=\"btn btn-grey btn-xs btn-round\"><i class=\"icon icon-up-arrow-key\"></i></span>
							</button>
							<button type=\"button\" class=\"btn btn-default simple-btn trash-btn\" data-remove-link=\"#{$(@).data('edit')}\">
								<i class=\"icon icon-delete\"></i>
							</button>
						</div>
						<div class=\"input-title\">Title</div>
						<input type=\"text\" class=\"input-simple title-input in-focus\" data-id=\"#{titleId}\" data-push=\"##{titleId}\" id=\"hobbyTitle#{i}\" value=\"#{title}\" data-minlength=\"2\">
							<div class=\"alert\">Minimum 2 characters</div>
					</div>
					<div class=\"form-group last\">
						<div class=\"input-title\">Link<span class=\"optional\">(optional)</span></div>
						<input type=\"text\" class=\"input-simple ignored link\" id=\"hobbyLink#{i}\" data-push-href=\"##{linkId}\" value=\"#{linkHref}\">
							<div class=\"alert\">URL is not correct</div>
					</div>
					<div class=\"form-group last\">
						<div class=\"input-title\">Description<span class=\"optional\">(optional)</span></div>
						<textarea id=\"linkCaption#{i}\" name=\"used#{i}\" data-push=\"##{leadId}\" class=\"textarea small ignored\" data-characters=\"150\" maxlength=\"150\">#{leadText}</textarea>
						<div class=\"help\">E.g. Personal blog about be keeping Personal blog about be keeping</div>
						<div class=\"count-help\"><span class=\"count\">150</span>characters left</div>
					</div>
				</div>
			"

			$(infoBlock.data('addto')).append template

			description = $($(item).find('.lead'))
			relatedEl = $(document).find('[data-push="#' + description.attr('id') + '"]')

			if relatedEl
				$(relatedEl).parent('.form-group').find('.count-help').find('.count').html $(relatedEl).data('characters') - description.text().trim().length
		
		# If we click not edit but ad a new tech skill	
		if $(@).attr('data-add') == '#interests-list'
			$(infoBlock.data('addto')).append newInterestsTemplate
			$('#interestsBody').find('.in-focus').focus()


	#for education and the same
	else if infoBlock.attr('data-text') is 'edit'
		editBlock.find('[data-removeon]').show()

		# if infoBlock.attr('id') == 'userMainInfo'
		# 	formData = infoBlock.html()
		# else
		# 	if $(infoBlock[0]).attr('href') == '#edit-volunteering-popup'
		# 		formData = infoBlock.parents('#volunteeringMore').html()
		# 	else
		# 		formData = infoBlock.parent().html()


		if infoBlock.parents().attr('id') == 'experienceMore'
			for instance of CKEDITOR.instances
				`instance = instance`
				CKEDITOR.instances.descriptionEdit.updateElement()
				exptData = $(@).find('[data-change="#descriptionEdit"]').html().trim()
				window.setTimeout (->
					CKEDITOR.instances.descriptionEdit.setData exptData
					return
				), 15

		editBlock.find('[data-on-edit]').data('on-edit', '#' + $(infoBlock).attr('id')).attr('data-on-edit', '#' + $(infoBlock).attr('id'))

		currentStatus = $(infoBlock).find('[data-current]').attr 'data-current'
		editBlock.find('[data-current-show]').attr('data-current-show', currentStatus)

		items = infoBlock.find('[data-change]')

		if currentStatus is 'true'
			editBlock.find('[data-not-current]').addClass 'hidden'
			editBlock.find('[data-current-input]').prop 'checked', true
			editBlock.find('[data-current-work]').attr 'data-current-work', 'true'

		editBlock.find('[data-year-select]').append $('<option>').attr('value', '').text('Year')
		for year in used
			editBlock.find('[data-year-select]').append($('<option>').attr('value', year).text(year))
		editBlock.find('[data-year-select]').on 'change', ->
			$(this).children('[value = ""]').remove()
			return

		editBlock.find('[data-month-select]').append $('<option>').attr('value', '').attr('data-number', i).text('Month')
		for month, i in months
			editBlock.find('[data-month-select]').append($('<option>').attr('value', month).attr('data-number', i).text(month))
		editBlock.find('[data-month-select]').on 'change', ->
			$(this).children('[value = ""]').remove()
			return

		for degree in degrees
			editBlock.find('[data-degree-select]').append($('<option>').attr('value', degree).text(degree))

		str = undefined
		l = 0
		len9 = countries.length
		editBlock.find('[data-country-select]').append $('<option>').attr('value', '').text('Choose your country')
		while l < len9
			country = countries[l]
			# add 'selected' attribute to USA
			# if country == 'USA'
			# 	str = $('<option>').attr('value', country).attr('selected', '').text(country)
			# else
			str = $('<option>').attr('value', country).text(country)
			editBlock.find('[data-country-select]').append str
			l++
		editBlock.find('[data-country-select]').on 'change', ->
			$(this).children('[value = ""]').remove()
			return

		for item in items
			id = $(item).attr('id')

			relatedElement = $($(item).data('change'))

			relatedElement.attr('data-push', '#' + id)
			relatedElement.val($(item).text().trim())

			if $(item).text().trim() != ''
				if id.indexOf('ear') != -1 or id.indexOf('onth') != -1 or id.indexOf('ountry') != -1
					$(relatedElement).children('[value = ""]').remove()

			if $(relatedElement).parent('.form-group').find('.count-help').find('.count')
				$(relatedElement).parent('.form-group').find('.count-help').find('.count').html $(relatedElement).data('characters') - $(item).text().trim().length

		blockId = editBlock.find('[data-id]')
		blockId.data('id', $(infoBlock).attr('id')).attr('data-id', $(infoBlock).attr('id'))


	# for soft skills
	else if infoBlock.attr('data-text') is 'select-list'
		# formData = infoBlock.html()
		softSkillsToRemove.list = []
		softSkillsToAdd.list = []

		$('#softSkillsTableAdd').removeClass 'hidden'
		i = randomId(5)

		setTimeout (->
			templateSoftSkillTable = "
				<tr>
					<td data-caption=\"Skill category\">
						<div class=\"select-outer form-group\">
							<select name=\"soft#{i}\" class=\"select\" data-push=\"#soft#{i}\" data-softcategory id=\"softSkillsCat#{i}\" data-relate=\"#softSkillsCTit#{i}\">
							</select>
							<span class=\"arrow\">
								<i class=\"icon icon-angle-down\"></i>
							</span>
							<div class=\"alert\">Choose category</div>
						</div>
					</td>
					<td data-caption=\"Skill name\">
						<div class=\"select-outer form-group\">
							<select name=\"softtitle#{i}\" class=\"select\" data-push=\"#softtitle#{i}\" data-id=\"softtitle#{i}\" data-softtitle id=\"softSkillsCTit#{i}\" data-parent>
							</select>
							<span class=\"arrow\">
								<i class=\"icon icon-angle-down\"></i>
							</span>
						</div>
					</td>
				</tr>
				"
			
			$(document).find('#softSkillsTableAdd').find('tbody').append templateSoftSkillTable
			$('#softSkillsTableAdd').find('#softSkillsCat' + i).append '<option value="" disabled selected>Select Category</option>'

			for skillCategory of softSkills
				$('#softSkillsTableAdd').find('#softSkillsCat' + i).append($('<option>').attr('value', skillCategory).text(skillCategory))

			selectedCategory = $('#softSkillsTableAdd').find('#softSkillsCat' + i).children('option:selected').text()

			selectedTitle = $('#softSkillsTableAdd').find('tbody').find('tr').find('[data-softtitle]').find('option:selected').text().trim()
			$('#softSkillsTableAdd').find($('#softSkillsCat' + i).data('relate')).append '<option value="" disabled selected>Select Skill</option>'

			if softSkills[selectedCategory]
				for skillTitle in softSkills[selectedCategory]
					$('#softSkillsTableAdd').find($('#softSkillsCat' + i).data('relate')).attr('data-parent', selectedCategory).data('parent', selectedCategory)
					$('#softSkillsTableAdd').find($('#softSkillsCat' + i).data('relate')).append($('<option>').attr('value', skillTitle).text(skillTitle))

			return
		), 10

		blocksCount = infoBlock.find('[data-soft-category]')

		for block in blocksCount
			titleText = $(block).text().trim()

			# template for soft skills
			i = randomId(5)

			template = "
					<tr>
						<td class=\"middle\" data-caption=\"Skill category\">
							<div class=\"simple-title\">#{titleText}</div>
						</td>
						<td data-caption=\"Skill name\">
							<div class=\"skill-tags\" id=\"tagSkill#{i}\"></div>
						</td>
					</tr>
				"
			editBlock.find('[data-appendto]').find('tbody').append(template)

			tags =  $(block).next('.skills-list').find('li')

			for tag in tags
				tagText = $(tag).find('.title').text().trim()
				tagId = $(tag).find('.title').attr('id')
				$('#tagSkill' + i).append('<div class="simple tag remove" data-remove-tag="#' + tagId + '"><i class="icon icon-close"></i><div class="title">' + tagText + '</div></div>')

	focusedID = '#'+$(@).find('.title').not('.tech-title').attr 'id'
	
	setTimeout (->

		for input in editBlock.find('input')
			if $(input).attr('data-push') is focusedID
				$(input).focus()
		return
	), 500

	return



$ document
	.on 'click', '[data-remove-link]', ->
		index = $(@).parents('.block-info').index()
		$(@).parents('.block-info').remove()

		# listToRemove = $ $(@).data 'remove-link'

		# listToRemove.children('li').eq(index).remove()

		# if listToRemove.children('li').length == 0
		# 	listToRemove.siblings('.hidden-helper').addClass 'active'
		return


$ document
	.on 'click', '[data-removeon]', ->
		$.magnificPopup.close()
		# formData = undefined

		parentBlock = $($(@).data('on-edit')).parents('[data-text]')
		
		if parentBlock.children().length - 1 is 0 then parentBlock.siblings('.hidden-helper').addClass 'active'

		$($(@).data('on-edit')).parent('li').remove()
		$($(@).data('on-edit')).remove()
		
		if parentBlock.children().length <= 0
			parentBlock.addClass 'hidden'

		do hidePopups
		return


# check if current position
$ document
	.on 'click', '[data-current-work]', ->
		notCurrentTime = $(@).siblings().find('[data-not-current]')
		chooseStatus = $(@).find('[data-current-input]')

		if chooseStatus.prop('checked') == true
			notCurrentTime.addClass 'hidden'
			# $($(@).parents().data('on-edit')).find('[data-current]').attr 'data-current', 'true'
			chooseStatus.prop 'checked', true
			$(@).attr 'data-current-work', 'true'
		else
			notCurrentTime.removeClass 'hidden'
			# $($(@).parents().data('on-edit')).find('[data-current]').attr 'data-current', 'false'
			chooseStatus.prop 'checked', false
			$(@).attr 'data-current-work', 'false'
		return
