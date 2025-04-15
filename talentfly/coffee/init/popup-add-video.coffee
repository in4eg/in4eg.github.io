$ document
	.on 'click', '[data-add-video]', (e)->
		e.preventDefault()
		data = $(@).data('add-video')
		dataArr = data.split(';')
		# console.log dataArr[0].trim()
		# console.log dataArr[1].trim()
		# console.log dataArr[2].trim()
		title = $($(@).attr('href')).find('[data-title]')
		caption = $($(@).attr('href')).find('[data-caption]')
		video = $($(@).attr('href')).find('[data-link-src]')

		title.html dataArr[0].trim()
		caption.html dataArr[1].trim()
		video.attr 'href', dataArr[2].trim()

		# console.log [
		# 	title
		# 	caption
		# 	video
		# ]
		# console.log [
		# 	dataArr[0].trim()
		# 	dataArr[1].trim()
		# 	dataArr[2].trim()
		# ]

		return
