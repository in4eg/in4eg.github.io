$ document
	.on 'change', '[data-softcategory]', ->
		$('#softSkillsTableAdd').find($(@).data('relate')).find('option').remove()
		for skillTitle in softSkills[$(@).find('option:selected').text()]
			$('#softSkillsTableAdd').find($(@).data('relate')).append($('<option>').attr('value', skillTitle).text(skillTitle))
		return

$ '[data-add="#softskill-list"]'
	.click ->
		if $(this).attr('id') != 'generalSoftSkills'
			softSkillsToRemove.list = []
		$('#softSkillsTableAdd').removeClass 'hidden'
		i = randomId(5)

		setTimeout (->
			templateSoftSkillTable = "
				<tr>
					<td data-caption=\"Skill category\">
						<div class=\"select-outer\">
							<select name=\"soft#{i}\" class=\"select\" data-push=\"#soft#{i}\" data-softcategory id=\"softSkillsCat#{i}\" data-relate=\"#softSkillsCTit#{i}\">
							</select>
							<span class=\"arrow\">
								<i class=\"icon icon-angle-down\"></i>
							</span>
						</div>
					</td>
					<td data-caption=\"Skill name\">
						<div class=\"select-outer\">
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

			for skillCategory of softSkills
				$('#softSkillsTableAdd').find('#softSkillsCat' + i).append($('<option>').attr('value', skillCategory).text(skillCategory))

			selectedCategory = $('#softSkillsTableAdd').find('#softSkillsCat' + i).children('option:selected').text()

			selectedTitle = $('#softSkillsTableAdd').find('tbody').find('tr').find('[data-softtitle]').find('option:selected').text().trim()

			for skillTitle in softSkills[selectedCategory]
				$('#softSkillsTableAdd').find($('#softSkillsCat' + i).data('relate')).attr('data-parent', selectedCategory).data('parent', selectedCategory)
				$('#softSkillsTableAdd').find($('#softSkillsCat' + i).data('relate')).append($('<option>').attr('value', skillTitle).text(skillTitle))

			return
		), 10

		# if $('#generalSoftSkills').hasClass 'hidden'
		# 	$('#generalSoftSkills').removeClass 'hidden'
		# 	$('#generalSoftSkills').next('.hidden-helper').removeClass 'active'

		return


# soft skills add new item
$ document
	.on 'input change', '[data-softcategory]', ->
		val = $(@).val()
		$($(@).data('relate')).data('parent', val).attr('data-parent', val)
		return

# soft skills add new item
$ document
	.on 'input change', '#skillType', ->

		if $(@).val().length <= 0
			$(@).parent('.form-group').addClass 'error'
		else
			$(@).parent('.form-group').removeClass 'error'

		return

$ document
	.on 'click', '[data-remove-tag]', ->
		list = $($(@).data('remove-tag')).parents '.skills-list'
		parent = list.parents('.cover').children()
		category = list.prev('[data-soft-category]').text().trim()
		skill = $(@).find('.title').text().trim()
		skillId = $(@).data('remove-tag')

		parentTable = $(@).parents('.skill-tags');
		# url = $('#generalSoftSkills').data('url')
		# type = 'soft_skills'

		# removeSkillRequest(type, category, skill, skillId, url)


		if softSkillsCreated[list.prev('[data-soft-category]').text().trim()]
			index = softSkillsCreated[list.prev('[data-soft-category]').text().trim()].indexOf($(@).find('.title').text().trim())
			softSkillsCreated[list.prev('[data-soft-category]').text().trim()] =  softSkillsCreated[list.prev('[data-soft-category]').text().trim()].splice(index, 1)

		if parentTable.children().length <= 1
			# if softSkillsCreated[list.prev('[data-soft-category]').text().trim()]
			# 	if softSkillsCreated[list.prev('[data-soft-category]').text().trim()].length <= 1
			# 		delete softSkillsCreated[list.prev('[data-soft-category]').text().trim()]

			# if parent.length <= 2
			# 	$('#generalSoftSkills').siblings('.hidden-helper').addClass 'active'
			# 	$('#generalSoftSkills').addClass 'hidden'
			# 	$('#softSkillsTableAdd').find('tbody').find('tr').remove()

			# list.prev('[data-soft-category]').remove()
			# list.remove()

			# $(list.data('title')).remove()
			$(@).parents('tr').remove()

		duplicateIndex = -1
		currentSkill = $($(this).children('.title')[0]).text().trim()
		i = 0
		while i < softSkillsToAdd.list.length
			if softSkillsToAdd.list[i].skillName == currentSkill
				duplicateIndex = i
				break
			i++
		if duplicateIndex != -1
			softSkillsToAdd.list.splice duplicateIndex, 1
		else
			softSkillsToRemove.list.push currentSkill

		# softSkillsToRemove.list.push $($(@).children('.title')[0]).text()
		# $($(@).data('remove-tag')).parent('li').remove()
		$(@).remove()
		

		return


removeSkillRequest = (type, category, skill, id, url)->

	# console.log [
	# 	type
	# 	category
	# 	skill
	# 	id
	# ]

	$.ajax
		data: {'type': type, 'category': category, 'skill': skill, 'id': id, 'action': 'delete'},
		url: url,
		type: 'post',
		cache: false,
		headers: 'X-CSRFToken': csrf_token
		error: (data, textStatus, errorThrown) ->
			console.log errorThrown
			return
		success: (data) ->
			console.log 'skill removed'
			return
	return




softSkillsCreated = {}

# $ '#appendSkills'
# 	.click (e)->
# 		titles = $('#softSkillsTableAdd').find('[data-parent]')
# 		# console.log formData
# 		titleArr = []

# 		for title in titles
# 			titleArr.push $(title).data('parent')

# 		sortedArr = unique titleArr

# 		i = 0
# 		while i < sortedArr.length
# 			key = sortedArr[i]
# 			# для каждого элемента создаём свойство
# 			softSkillsCreated[key] = []
# 			i++

# 		for el, i in sortedArr
# 			aar = []
# 			for tag in $(document).find('[data-parent="' + el + '"]')
# 				aar.push $(tag).val()

# 			softSkillsCreated[el] = unique aar

# 		# console.log softSkillsCreated

# 		#append skills
# 		for softSkill of softSkillsCreated
# 			rand = randomId(5)

# 			issetTitles = $('#generalSoftSkills').find('.cover').find('.skill-list-title')

# 			inBlock = false
# 			# check if category title already exist
# 			for elTitle in issetTitles

# 				if $(elTitle).text().trim() is softSkill
# 					inBlock = true

# 			# if we find title
# 			if inBlock is true
				
# 				for skill in softSkillsCreated[softSkill]

# 					titleIn = false
# 					existTitles = $('#generalSoftSkills').find('.cover').find('.skill-list-title').next('ul').children('li')
					
# 					for exTitle in existTitles
# 						if skill is $(exTitle).text().trim()
# 							titleIn = true

# 					if titleIn is false
# 						i = randomId(5)
# 						# appent to all titles

# 						allTitles =  $('#generalSoftSkills').find('.cover').find('.skill-list-title')
# 						for elTitle in allTitles
# 							if $(elTitle).text().trim() is softSkill
# 								$(elTitle).next('ul').append ('<li><div class="title" id="softtitle' + i + '">' + skill + '</div></li>')
# 							else
# 								titleIn = true

# 				inBlock = false
# 			else
# 				#template when there are no title
# 				$('#generalSoftSkills').find('.cover').append '<div class="skill-list-title" id="soft' + rand + '" data-soft-category>' + softSkill + '</div>'
# 				$('<ul class="clear skills-list auto-width full-list" data-title="#id' + rand + '" id="listId' + rand + '"></ul>').insertAfter $('#generalSoftSkills').find('#soft' + rand)

# 				for skill in softSkillsCreated[softSkill]
# 					i = randomId(5)
# 					$('<li><div class="title" id="softtitle' + i + '">' + skill + '</div></li>').appendTo $('#generalSoftSkills').find('#listId' + rand)

# 		return

# Оставить уникальные элементы массива
unique = (arr) ->
	obj = {}
	i = 0
	while i < arr.length
		str = arr[i]
		obj[str] = true
		# запомнить строку в виде свойства объекта
		i++
	Object.keys obj


$('#addSoftSkillButton').on 'click', ->

	addNewCategory = ->
		template = '<tr> <td class="middle" data-caption="Skill category"> <div class="simple-title">' + newCategory + '</div> </td> <td data-caption="Skill name"> <div class="skill-tags" id="tagSkillWbLzM"><div class="simple tag remove" data-remove-tag><i class="icon icon-close"></i><div class="title">' + newSkill + '</div></div></div> </td></tr>'
		if $('#softSkillsTable').find('tbody tr').length > 0
			$('#softSkillsTable').find('tbody tr:last').after template
		else
			$('#softSkillsTable').find('tbody').append template
		return

	addNewSkill = (categoryElement) ->
		template = '<div class="simple tag remove" data-remove-tag><i class="icon icon-close"></i><div class="title">' + newSkill + '</div></div>'
		$(categoryElement).parent().next('td').find('.skill-tags').children('div:last').after template
		return
	# Если в селектах стоят плейсхолдеры, выводим предупреждение
	if !$('[data-softtitle]').val()
		$('#softSkillsTableAdd').find('[data-caption=\'Skill category\']').find('.form-group').addClass 'error'
		$('#softSkillsTableAdd').find('[data-caption=\'Skill category\']').find('.select').addClass 'error'
		return
	else
		$('#softSkillsTableAdd').find('[data-caption=\'Skill category\']').find('.form-group').removeClass 'error'
		$('#softSkillsTableAdd').find('[data-caption=\'Skill category\']').find('.select').removeClass 'error'
	# console.log $('[data-softcategory]').val()
	# console.log $('[data-softtitle]').val()
	newSkill = $('[data-softtitle]').val().trim()
	newCategory = $('[data-softcategory]').val().trim()
	existCategory = $('#softSkillsTable').find('.simple-title:contains("' + newCategory + '")')
	isUniqeCategory = true
	# Если уже существующие у юзера категории полностью включают в себя название выбранной категории
	if existCategory.length > 0
		# console.log 'Find'
		existCategory.each (index, el) ->
			# Если выбрана уже существующая у юзера категория
			if $(el).text().trim() == newCategory
				# console.log 'Exactly'
				isUniqeCategory = false
				existElement = $(el).parent().next('td').find('.title:contains("' + newSkill + '")')
				isUniqeSkill = true
				if existElement.length > 0
					existElement.each (index, skillEl) ->
						if $(skillEl).text().trim() == newSkill
							isUniqeSkill = false
						return
				if isUniqeSkill
					addNewSkill el
					if softSkillsToRemove.list.indexOf(newSkill) == -1
						softSkillsToAdd.list.push
							skillName: newSkill
							skillCategory: newCategory
					else
						softSkillsToRemove.list.splice softSkillsToRemove.list.indexOf(newSkill), 1
			return
		if isUniqeCategory
			# console.log 'Not Exactly'
			addNewCategory()
			if softSkillsToRemove.list.indexOf(newSkill) == -1
				softSkillsToAdd.list.push
					skillName: newSkill
					skillCategory: newCategory
			else
				softSkillsToRemove.list.splice softSkillsToRemove.list.indexOf(newSkill), 1
	else
		# console.log 'Don\'t find'
		addNewCategory()
		if softSkillsToRemove.list.indexOf(newSkill) == -1
			softSkillsToAdd.list.push
				skillName: newSkill
				skillCategory: newCategory
		else
			softSkillsToRemove.list.splice softSkillsToRemove.list.indexOf(newSkill), 1
	return
