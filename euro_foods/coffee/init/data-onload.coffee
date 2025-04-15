$ '[data-onload]'
	.click (e)->
		e.preventDefault()
		url = $(@).data 'url'
		parent = $(@).data 'onload'

		$.ajax
			url: url
			type: 'get'
			success: (data) ->
				$('.preloader').removeClass 'active'
				$(parent).append data

				return

		return