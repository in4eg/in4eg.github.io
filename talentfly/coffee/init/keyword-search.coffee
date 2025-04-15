getRandomColor = ->
	letters = '0123456789ABCDEF'
	color = '#'
	i = 0
	while i < 6
		color += letters[Math.floor(Math.random() * 16)]
		i++
	color

timeFormat = (time) ->
	hrs = ~ ~(time / 3600)
	mins = ~ ~(time % 3600 / 60)
	secs = time % 60


	ret = ''
	if hrs > 0
		ret += '' + hrs + ':' + (if mins < 10 then '0' else '')
	ret += '' + mins + ':' + (if secs < 10 then '0' else '')
	ret += '' + secs
	ret

markersStyle = ['blue', 'orange', 'green', 'yellow', 'red', 'darkslategray', 'violet', 'aquamarine', 'purple', 'pink', 'steelblue', 'darkslateblue', 'blueviolet']
player = videojs 'demo'


$ '#tagInput'
	.on 'change, input', ->
		text = $(@).val()
		if text
			$(@).next('label').addClass 'hidden'
		else
			$(@).next('label').removeClass 'hidden'
		return

videoMarkers = []

player.markers
	markerStyle:
		'width': '10px'
		'border-radius': '50%'
	markerTip:
		display: true
		text: (marker) ->
			marker.text
	breakOverlay:
		display: true
		displayTime: 4
		style:
			'width': '100%'
			'height': '30%'
			'background-color': 'rgba(10,10,10,0.6)'
			'color': 'white'
			'font-size': '16px'
		text: (marker) ->
			'This is a break overlay: ' + marker.overlayText
	markers: []

# remove tag and markers

$ 'body'
	.on 'click', '[data-oninput]', (e)->
		e.stopPropagation()

		if $(e.target).closest('.search-tag').length <= 0
			$($(@).data('oninput')).focus()
		return


$ 'body'
	.on 'click', '[data-remove]', ->
		# index = $(@).closest('.search-tag').index()
		index = $(@).index()
		removeMarkers(index)

		$($(@).data('remove')).remove()
		$(@).remove()

		tagWrapSize()

		# $('#tagInput').focus()
		if $('#tagCover').children('.search-tag').length is 0
			$('#tagCover').find('label').removeClass 'hidden'
			$('#tagCover').parents('.tags-group').removeClass 'with-tag'
			$('.vjs-control-bar').removeClass 'active'

		return

markersArr = []
dataArr = undefined

getUniqTags = (tags) ->
# Проверям уникальность тега по сравнению со всеми уже существующими и всеми добавляемыми в данный момент
	existTags = []
	videoMarkers.forEach (marker) ->
		existTags.push(marker.name)
	results = []
	tags.forEach (value) ->
		value = value.trim()
		if results.indexOf(value) == -1 and existTags.indexOf(value) == -1
			results.push value
		return
	results

getKeywords = (text, videoId, url, demo)->
	textArr = text.split(', ')

	filterText = getUniqTags textArr

	# Если в запросе нет ни одного уникального слова, то выходим из функции и не отправляем ajax
	if filterText.length == 0
		$('#tagInput').val('')
		return

	filterText.reverse()
	dataArr = filterText.join(', ')

	#clear keywords in player
	markersArr.splice(0, markersArr.length)
	videojs('demo').markers.reset markersArr
	videojs('demo').markers.removeAll()

	# videoMarkers = []
	
	$.ajax
		data: {'keywords': dataArr, 'videoNumber': videoId, 'demo': demo},
		url: url,
		# dataType: 'json',
		type: 'get',
		cache: false,
		error: (data, textStatus, errorThrown) ->
			console.log errorThrown
			return
		success: (data) ->
			# console.log data
			console.log  'текст запроса: ' + dataArr, 'id видео: ' + videoId

			if data
				repeats = {}
				# Заносим в объект имена всех уже существующих поисковых тегов
				videoMarkers.forEach (marker) ->
					repeats[marker.name] = true

				$('#tagInput').val('')
				$('.tags-group').find('label').removeClass 'hidden'
				# videojs('demo').play()

				$('.vjs-control-bar').addClass 'active'

				totalCount = 0

				for resultObj in data
					for key of resultObj
						videoMarkers.push {
							name: key.replace(/(\s| )/gim, '_')
							title: key
							time: resultObj[key]
							#time: resultObj[key].map((el) ->
										#	el['word_start']
										#	)
							#phrase_time: resultObj[key].map((el) ->
										#	el['phrase start']
										#	)
							className: markersStyle[0]
						}
						markersStyle.push(markersStyle[0])
						markersStyle.splice(0, 1)
						
						if resultObj[key].length > 0
							totalCount += resultObj[key].length

				
				for marker, i in videoMarkers
					for time in marker.time

						player.markers.add [{
							time: time['phrase start']
							word_time: time['word_start']
							text: marker.title + ' ' + timeFormat(time['word_start'])
							class: marker.className
							keyName: marker.name
						}]

						if !repeats[marker.name]
							$('#tagCover').parents('.tags-group').addClass 'with-tag'
			

							$("
								<div class=\"search-tag #{marker.className}\" data-remove>
									<span class=\"text\">#{marker.title}</span>
									<i class=\"icon icon-close2\"></i>
								</div>
							").insertBefore '#tagInput' 
							tagWrapSize()
							repeats[marker.name] = true

				for el in player.markers.getMarkers()
					markersArr.push el

				# setTimeout (->
				# 	$('.vjs-marker').mouseenter ->
				# 		$('.vjs-time-tooltip').css 'visibility', 'hidden'
				# 		return
				# 	$('.vjs-marker').mouseleave ->
				# 		$('.vjs-time-tooltip').css 'visibility', 'visible'
				# 		return
				# 	return
				# ), 300

				totalCount = markersArr.length
				console.log(totalCount)
				if videoMarkers.length and totalCount > 0
					$('#totalOverviewKey').removeClass 'hidden'
					if totalCount is 1 then $('#totalKeyCount').html totalCount + ' ' + 'result' else $('#totalKeyCount').html totalCount + ' ' + 'results'

			return

	return

$('#overviewSearchForm').on 'submit', (e) ->

	text = $('#tagInput').val().trim()
	videoId = $(@).data('video-id')
	url = $(@).data('url')
	demo = $('#isDemo').val()

	if text
		getKeywords(text, videoId, url, demo)
	e.preventDefault()
	return

removeMarkers = (index)->
	currentMarker = videoMarkers[index]
	currentMarkers = player.markers.getMarkers()

	dataArr = dataArr.replace(currentMarker.name + ', ','')

	console.log dataArr

	removals = []
	for m, i in currentMarkers
		if m.keyName is currentMarker.name
			removals.push i

	markersArr = []

	player.markers.remove(removals)
	videoMarkers.splice(index, 1)

	totalCount = currentMarkers.length

	if $('#totalKeyCount') and totalCount >= 1
		if totalCount is 1 then $('#totalKeyCount').html totalCount + ' ' + 'result' else $('#totalKeyCount').html totalCount + ' ' + 'results'
	else
		$('#totalOverviewKey').addClass 'hidden'

	for el in currentMarkers
		markersArr.push el

	return

tagWrapSize = ->
	if $('.tag-wrap').outerHeight() <= 48
		$('.tags-group').addClass 'rounded'
		if $('.scrolled-block').length > 0
			Ps.destroy $('.scrolled-block')[0]

		if $('[data-remove]').length is 0
			$('.tags-group').removeClass 'with-tag'
	else
		$('.tags-group').removeClass 'rounded'

	if $('.scrolled-block').length > 0
		Ps.initialize $('.scrolled-block')[0], suppressScrollX: true
	return


$ '#changeBtn'
	.click (e, video)->
		e.preventDefault()

		if $(@).data('active') is 'candidate'
			mp4 = $(@).data 'interviewer-mp4'
			ogg = $(@).data 'interviewer-ogg'
			$(@).data('active', 'interviewer').attr('data-active', 'interviewer')
		else if $(@).data('active') is 'interviewer'
			mp4 = $(@).data 'candidate-mp4'
			ogg = $(@).data 'candidate-ogg'
			$(@).data('active', 'candidate').attr('data-active', 'candidate')

		src = [{type: "video/mp4", src: mp4}, {type: "video/ogg", src: ogg}]
		$(@).find('.caption').toggleClass 'active'
		videoChange('demo', src)

		setTimeout (->
			player.markers.reset markersArr
			return
		), 500
		return