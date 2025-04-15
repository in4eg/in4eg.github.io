currentTime = new Date
currentYear = currentTime.getFullYear()
newTechEmptyInput = {}

# tech skills option
# formDataBeforeNewElementTech = undefined
$ '[data-add="#technicalskills-list"]'
	.click ->
		# formDataBeforeNewElementTech = $(this).parent().parent().next(".skill-link").children('#technicalskills-list').html();
		# $($(@).data('add')).removeClass 'hidden'
		# $($(@).data('add')).parents('a').removeClass 'hidden'
		# $($(@).data('add')).parents('a').siblings('.hidden-helper').removeClass 'active'

		i = randomId(5)

		templateTableTechSkill = "
			<tr>
				<td class=\"large\" data-caption=\"Skill\">
					<div class=\"form-group spaced\">
						<input type=\"text\" name=\"name#{i}\" data-push=\"#titleChange#{i}\" id=\"skillTechTitle#{i}\" class=\"input input-simple title-input in-focus\" data-minlength=\"2\">
					</div>
				</td>
				<td class=\"small\" data-caption=\"Experience\">
					<div class=\"form-group spaced\">
						<input type=\"text\" data-year class=\"input-simple with-label align-center ignored\" id=\"skillYear#{i}\" maxlength=\"2\" data-push=\"#year#{i}\" value=\"1\">
						<label for=\"skillYear#{i}\" class=\"simple-label\">year</label>
					</div>
				</td>
				<td class=\"small\" data-caption=\"Last used\">
					<div class=\"select-outer\">
						<select class=\"select\" data-used name=\"used#{i}\" data-push=\"#lastYear#{i}\" data-year-select id=\"techY#{i}\">
						</select>
						<span class=\"arrow\">
							<i class=\"icon icon-angle-down\"></i>
						</span>
					</div>
				</td>
				<td class=\"smaller remove-cell\" data-caption=\"Remove\">
					<button type=\"button\" class=\"btn btn-default remove-skill\" data-remove-skill=\"#technicalskills-list\">
						<span class=\"text\"><i class=\"icon icon-close\"></i></span>
						<span class=\"fade\"></span>
					</button>
				</td>
			</tr>
			"

		# templateList = "
		# 	<li>
		# 		<div class=\"title tech-title\" id=\"titleChange#{i}\">
		# 			<span class=\"years\" id=\"year#{i}\">1 year</span>
		# 			<span class=\"last-year\">Last used: <span class=\"value\" id=\"lastYear#{i}\">#{currentYear}</span></span>
		# 		</div>
		# 	</li>
		# 	"

		$(document).find('#technicalSkillsTable').find('tbody').append templateTableTechSkill
		# $($(@).data('add')).siblings('.hidden-helper').removeClass 'active'
		# $($(@).data('add')).append templateList
		
		for year in used
			$('#techY' + i).append($('<option>').attr('value', year).text(year))

		$('#techY' + i).prepend '<option value="" style="color : lightgrey" selected>Year</option>'
		$('#techY' + i).on 'change', ->
			$(@).children('[value = ""]').remove()
			return

		newTechEmptyInput.template = templateTableTechSkill
		newTechEmptyInput.i = i

		setTimeout (->
			$('#technicalSkillsTable').find('.in-focus').focus()
			return
		), 500
		return


$ document
	.on 'click', '#cancelSave', ->
		if $('#technicalskills-list').hasClass 'empty'
			$('#technicalskills-list').children().remove()
			$('#technicalskills-list').parents('a').addClass 'hidden'
			$('#technicalskills-list').parents('a').siblings('.hidden-helper').addClass 'active'

		return

$ document
	.on 'click', '#saveSkills', ->
		if $('#technicalskills-list').hasClass 'empty'
			$('#technicalskills-list').removeClass 'empty'

		items = $('#technicalskills-list').children('li')
		
		for item in items
			title = $(item).find('.title').clone().children().remove().end().text().trim()
			if title.length is 0
				$(item).remove()
		# formData = $('#technicalskills-list').html()
		return

$ document
	.on 'click', '[data-remove-skill]', ->
		index = $(@).parents('tr').index()
		listToRemove = $ $(@).data 'remove-skill'

		#you can find it in soft skills popup
		# removeSkillRequest(type, category, skill, id, url)
		# type = 'tech_skills'
		# category = 'technical skills'
		# skill = $(@).parents('tr').find('[data-id]').val()
		# url = $('#technicalskills-list').data('url')
		# skillId = $(@).parents('tr').find('[data-id]').data('id')

		# removeSkillRequest(type, category, skill, skillId, url)

		$(@).parents('tr').remove()

		# listToRemove.find('li').eq(index).remove()

		# if listToRemove.find('li').length == 0
		# 	listToRemove.addClass 'hidden'
		# 	listToRemove.siblings('.hidden-helper').addClass 'active'
		# 	formData = undefined

		# 	if listToRemove.attr('id') is 'technicalskills-list' or listToRemove.attr('id') is 'languages-list'
		# 		listToRemove.parents('a').addClass 'hidden'
		# 		listToRemove.parents('a').siblings('.hidden-helper').addClass 'active'


		return
