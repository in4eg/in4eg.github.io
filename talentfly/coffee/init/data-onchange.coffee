$(document).find('[data-onchange]')
	.each (i, input)->

		$(input).on 'change', (e)->

			url = $(input).data 'url'

			data = {
				status: $(input).prop 'checked'
				videoId: $(input).data 'id'
			}

			if window[$(input).attr('data-onchange')]
				window[$(input).attr('data-onchange')](url, data)

			return

		return


window.sendVideoStatus = (url, data)->
	console.log data

	$.ajax
		data: data,
		url: url,
		type: 'get',
		cache: false,
		error: (data, textStatus, errorThrown) ->
			console.log errorThrown
			return
		success: (data) ->
			console.log 'video status send'

			return
	return