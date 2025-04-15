# languges popup
# formDataBeforeNewElement = undefined
newLanguageEmptyInput = {}
$ '[data-add="#languages-list"]'
	.click ->
		# formDataBeforeNewElement = $(this).parent().parent().next(".skill-link").children('#languages-list').html();

		# $($(@).data('add')).removeClass 'hidden'
		# $($(@).data('add')).parents('a').removeClass 'hidden'
		# $($(@).data('add')).parents('a').siblings('.hidden-helper').removeClass 'active'

		i = randomId(5)

		templateLanguage = "
			<tr>
				<td class=\"large\" data-caption=\"Language\">
					<div class=\"form-group spaced\">
						<input type=\"text\" data-push=\"#langEd#{i}\" id=\"lan#{i}\" class=\"input input-simple in-focus\" >
					</div>
				</td>
				<td class=\"large\" data-caption=\"Proficiency\">
					<div class=\"select-outer\">
						<select class=\"select\" data-proficiency name=\"used#{i}\" data-push=\"#langLead#{i}\" id=\"profL#{i}\">
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

		# templateList = "
		# 	<li>
		# 		<div class=\"title\" id=\"langEd#{i}\"></div>
		# 		<div class=\"lead\" id=\"langLead#{i}\">#{proficiencies[0]}</div>
		# 	</li>
		# 	"

		$('#langBody').append templateLanguage

		# $($(@).data('add')).siblings('.hidden-helper').removeClass 'active'
		# $($(@).data('add')).append templateList
			
		for proficiency in proficiencies
			$('#profL' + i).append($('<option>').attr('value', proficiency).text(proficiency))
		
		newLanguageEmptyInput.template = templateLanguage
		newLanguageEmptyInput.i = i
			
		setTimeout (->
			$(document).find('#languagesTable').find('.in-focus').focus()
			return
		), 50
		return

$ document
	.on 'click', '[data-remove-skill-lang]', ->
		index = $(@).parents('tr').index()
		listToRemove = $ $(@).data 'remove-skill-lang'

		$(@).parents('tr').remove()

		listToRemove.find('li').eq(index).remove()

		if listToRemove.find('li').length == 0
			listToRemove.addClass 'hidden'
			listToRemove.siblings('.hidden-helper').addClass 'active'

		return