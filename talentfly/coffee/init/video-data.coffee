toHHMMSS = (time)->
	secoundsData = parseInt(time, 10)
	hours = Math.floor(secoundsData / 3600)
	minutes = Math.floor((secoundsData - (hours * 3600)) / 60)
	seconds = secoundsData - (hours * 3600) - (minutes * 60)

	if hours < 10
		hours = '0' + hours
	if minutes < 10
		minutes = '0' + minutes
	if seconds < 10
		seconds = '0' + seconds
	hours + ':' + minutes + ':' + seconds


$ '#changeVideo'
	.on 'click', 'li',  ->
		videoId = $(@).data 'video-id'
		videojs('demo').currentTime(0)
		url = $(@).parent('ul').data('url')
		console.log 'Id видео: ' + videoId

		#clear keywords in form
		$('#tagCover').children('.search-tag').remove()
		$('.tags-group').removeClass('with-tag').addClass 'rounded'
		$('.tags-group').find('label').removeClass 'hidden'
		Ps.destroy $('.scrolled-block')[0]

		#clear keywords in player
		markersArr.splice(0, markersArr.length)
		videojs('demo').markers.reset markersArr
		videojs('demo').markers.removeAll()

		#open navigate interview block
		$('#overviewBody').removeClass 'active'
		$('#overviewBody').find('.collapsed-btn').removeClass 'active'

		$.ajax
			data: {'getVideoData': videoId},
			url: url,
			dataType: 'json',
			type: 'get',
			error: (data, textStatus, errorThrown) ->
				console.log errorThrown
				return
			success: (data) ->
				console.log 'video.json loaded'
				console.log data
				if data
					console.log 'video result founded'
					# change video id in keywords form
					$('#overviewSearchForm').data('video-id', data.id).attr('data-video-id', data.id)

					if $('#videoDate').length
						$('#videoDate').html data.date
					
					$('#changeVideo').attr 'data-video-id', data.id + ''
					visibleInterviews = $('#changeVideo').attr('data-visibility-id').split(',')
					if $('#video-sticker').length > 0
						if visibleInterviews.indexOf('' + data.id) == -1
							$('#video-sticker').removeClass 'hidden'
						else
							$('#video-sticker').addClass 'hidden'

					$('#changeBtn').data('interviewer-mp4', data.interviewer_src_mp4).attr('data-interviewer-mp4', data.interviewer_src_mp4)
					$('#changeBtn').data('interviewer-ogg', data.interviewer_src_ogg).attr('data-interviewer-ogg', data.interviewer_src_ogg)

					$('#changeBtn').data('candidate-mp4', data.candidate_src_mp4).attr('data-candidate-mp4', data.candidate_src_mp4)
					$('#changeBtn').data('candidate-ogg', data.candidate_src_ogg).attr('data-candidate-ogg', data.candidate_src_ogg)

					$('#videoLinks').children('li').remove()

					if $('#changeBtn').data('active') is 'candidate'
						candidate_src = [{type: "video/mp4", src: data.candidate_src_mp4}, {type: "video/ogg", src: data.candidate_src_ogg}]
						videoChange('demo', candidate_src)
						$('#changeBtn').data('active', 'interviewer').attr('data-active', 'interviewer')
					else if $('#changeBtn').data('active') is 'interviewer'
						interviewer_src = [{type: "video/mp4", src: data.interviewer_src_mp4}, {type: "video/ogg", src: data.interviewer_src_ogg}]
						videoChange('demo', interviewer_src)
						$(@).data('active', 'candidate').attr('data-active', 'candidate')

					for question in data.questions
						$('#videoLinks').append('<li data-time="' + question.time + '"><span class="link">' + question.text + '<span class="time">' + toHHMMSS(question.time) + '</span></span></li>')

					if $(window).width() > 992
						Ps.initialize $('.overview-body .scrolled')[0], suppressScrollX: true
				else
					console.log 'no-result in video'

		return


videoChange = (video, src, time)->
	time = videojs(video).currentTime()
	videojs(video).load()
	videojs(video).src src
	videojs(video).currentTime(time)
	
	videojs(video).play()
	# if videojs(video).hasStarted() is true
	# 	videojs(video).play()
	# else
	# 	videojs(video).pause()
	return

$ '#videoLinks'
	.on 'click', 'li', ->
		time = $(@).data('time')
		playVideo('demo', time)
		return

playVideo = (videoId, time)->
	videojs(videoId).currentTime(time)
	videojs(videoId).play()
	return