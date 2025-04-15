$ '[data-add]'
	.click ->
		parent = $(@).data('add')
		type = $(@).data('type')

		switch type
			when 'phone'
				inputTemplate = "
						<li class=\"item\">
							<div class=\"form-group remove-group\">
								<input type=\"text\" class=\"input small bordered\" placeholder=\"Номер телефона\" data-mask=\"+7 999 999-99-99\">
								<button type=\"button\" class=\"remove-btn\" data-remove>
									<i class=\"icon icon-close\"></i>
								</button>
							</div>
						</li>
						"
			when 'email'
				inputTemplate = "
						<li class=\"item\">
							<div class=\"form-group remove-group\">
								<input type=\"text\" class=\"input small bordered email\" placeholder=\"E-mail\">
								<button type=\"button\" class=\"remove-btn\" data-remove>
									<i class=\"icon icon-close\"></i>
								</button>
							</div>
						</li>
						"
			else
				inputTemplate = "
						<li class=\"item\">
							<div class=\"form-group remove-group\">
								<input type=\"text\" class=\"input small bordered\" placeholder=\"Адрес доставки\">
								<button type=\"button\" class=\"remove-btn\" data-remove>
									<i class=\"icon icon-close\"></i>
								</button>
							</div>
						</li>
						"
		$(parent).append inputTemplate

		$ '[data-mask]'
			.each (i, input)->
				mask = $(input).attr 'data-mask'
				$(input).mask mask, {
					# placeholder: mask
				}
		return
		return

$ document
	.on 'click', '[data-remove]', ->
		$(@).parent('.remove-group').remove()
		return