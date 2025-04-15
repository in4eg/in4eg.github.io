# hobbies, interest and links popup
# formDataBeforeNewElementInterests = undefined
newInterestsTemplate = undefined
$ '[data-add="#interests-list"]'
	.click ->
		# Если Интересы открыты в режиме добавления, то мы делаем снимок данных на странице до того как туда добавилось новое пустое поле
		# formDataBeforeNewElementInterests = $(this).parent().parent().next('#interests-list').html()
		# $('#interests-list').addClass 'empty'
		
		# $($(@).data('add')).removeClass 'hidden'
		i = randomId(5)

		templateInterest = "
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
						<button type=\"button\" class=\"btn btn-default simple-btn trash-btn\" data-remove-link=\"#interests-list\">
							<i class=\"icon icon-delete\"></i>
						</button>
					</div>
					<div class=\"input-title\">Title</div>
					<input type=\"text\" class=\"input-simple title-input in-focus\" id=\"hobbyTitle#{i}\" data-push=\"#interTitle#{i}\" data-minlength=\"2\" data-id=\"interTitle#{i}\">
					<div class=\"alert\">Minimum 2 characters</div>
				</div>
				<div class=\"form-group last\">
					<div class=\"input-title\">Link<span class=\"optional\">(optional)</span></div>
					<input type=\"text\" class=\"input-simple ignored link\" id=\"hobbyLink#{i}\" data-push-href=\"#interestLink#{i}\">
					<div class=\"alert\">URL is not correct</div>
				</div>
				<div class=\"form-group last\">
					<div class=\"input-title\">Description<span class=\"optional\">(optional)</span></div>
					<textarea name=\"hobbyDescription#{i}\" id=\"hobbyCaption#{i}\" class=\"textarea small ignored\" data-push=\"#intLead#{i}\" data-characters=\"500\" maxlength=\"500\"></textarea>
					<div class=\"help\">E.g. Personal blog about be keeping Personal blog about be keeping</div>
					<div class=\"count-help\"><span class=\"count\">500</span>characters left</div>
				</div>
			</div>
		"

		# templateList = "
		# 	<li>
		# 		<div data-call-popup=\"#edit-interests-popup\" class=\"skill-link\" data-edit=\"#interests-list\">
		# 			<div class=\"title\" id=\"interTitle#{i}\"></div>
		# 			<div class=\"lead\" id=\"intLead#{i}\"></div>
		# 			<span class=\"edit-link\">
		# 				<i class=\"icon icon-pencil-edit\"></i>
		# 			</span>
		# 			<a href=\"\" class=\"tag-link hidden\" id=\"interestLink#{i}\"><i class=\"icon icon-link\"></i></a>
		# 		</div>
		# 	</li>
		# 	"
		# data-proficiency
		$('#interestsBody').append templateInterest
		# $($(@).data('add')).siblings('.hidden-helper').removeClass 'active'
		# $($(@).data('add')).append templateList
		newInterestsTemplate = templateInterest

		setTimeout (->
			$('#interestsBody').find('.in-focus').focus()
			return
		), 500
		return


$ document
	.on 'click', '#cancelInterests', ->
		if $('#interests-list').hasClass 'empty'
			$('#interests-list').children().remove()
			$('#interests-list').parents('a').addClass 'hidden'
			$('#interests-list').parents('a').siblings('.hidden-helper').addClass 'active'

		return

$ document
	.on 'click', '#saveInterests', ->
		if $('#interests-list').hasClass 'empty'
			$('#interests-list').removeClass 'empty'

		items = $('#interests-list').children('li')
		
		for item in items
			title = $(item).find('.title').text().trim()
			if title.length is 0
				$(item).remove()
		# formData = $('#interests-list').html()
		return