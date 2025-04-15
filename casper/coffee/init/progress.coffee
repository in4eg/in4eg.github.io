ProgressBar = (canvas, time, callback, end, offset)->

	obj = {
		value: 0
		active: off
		callback: null
		end: null
		time: time || 1000
		isPlaying: off
	}

	obj.requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame;

	w = canvas.width = Math.max(canvas.getBoundingClientRect().width, 50.1)
	h = canvas.height = Math.max(canvas.getBoundingClientRect().height, 50.1)
	r = Math.max(1, (Math.min(w,h)/2) - 3)

	obj.set = (val)->
		obj.value = val
		obj.render()
		return

	do obj.render = ->
		ctx = canvas.getContext '2d'
		ctx.clearRect 0, 0, w, h

		ctx.beginPath()
		ctx.strokeStyle = $(canvas).data('bgcolor') or "#75c3b7"
		ctx.lineWidth = 10;
		ctx.arc w/2, h/2, (r - ctx.lineWidth/2), 0, Math.PI*2
		ctx.stroke()


		ctx.beginPath()
		ctx.strokeStyle = $(canvas).data('color') or "#fff"
		ctx.arc w/2, h/2, (r - ctx.lineWidth/2), -Math.PI/2, Math.PI * (2 * obj.value * (1 - offset))-Math.PI/2
		ctx.stroke()

		return

	obj.start = ->

		precent = 0
		nowTime = deltaTime = null
		thenTime = new Date().getTime()
		obj.isPlaying = on

		step = (timestamp)->
			nowTime = new Date().getTime()
			deltaTime = nowTime - thenTime;
			thenTime = nowTime

			if precent < 1
				obj.set(precent)
				precent += deltaTime / obj.time
				if callback
					callback precent
				else if obj.callback
					obj.callback precent
				requestAnimationFrame step
			else
				obj.set(1)
				precent = 0;
				obj.isPlaying = off
				if end or obj.end
					setTimeout ->
						if end
							end()
						else if obj.end
							obj.end()
					, 10

			return

		requestAnimationFrame step
		return

	obj.stop = ->
		obj.active = off
		return

	canvas.progressBar = obj;

	return obj



$('[data-countto]').each (i, canvas)->
	progress = new ProgressBar canvas, 5000, (precent)->
		$(canvas).siblings('.counter').text Math.floor $(canvas).data('countto') * precent
	, ->
		$(canvas).siblings('.counter').text $(canvas).data('countto')

	$(window).scroll ->
		if $(document).scrollTop() + $(window).outerHeight()/2 > $(canvas).closest('.section, section').offset().top
			progress.start() if !progress.isPlaying and progress.value isnt 1
		return


$('[data-timeto]').each (i, canvas)->


	timeTo = new Date($(canvas).attr('data-timeto')).getTime()

	time = timeTo - new Date().getTime()
	timeFrom = new Date($(canvas).attr('data-from')).getTime()

	offset = (timeTo - timeFrom) / timeFrom * 100

	seconds = Math.floor(time / 1000)
	minutes = Math.floor(seconds / 60)
	hours = Math.floor(minutes / 60)
	days = Math.floor(hours / 24)
	seconds = seconds - (minutes * 60)

	progress = new ProgressBar canvas, 5000, (precent)->
		counter = $(canvas).siblings('.counter')
		mask = counter.data 'mask'
		switch mask
			when '%d' then counter.text Math.floor days * precent; break
			when '%h' then counter.text Math.floor hours * precent; break
			when '%m' then counter.text Math.floor minutes * precent; break
	, ->
		counter = $(canvas).siblings('.counter')
		mask = counter.data 'mask'
		switch mask
			when '%d' then counter.text Math.floor days; break
			when '%h' then counter.text Math.floor hours; break
			when '%m' then counter.text Math.floor minutes; break
	, offset or 1

	$(window).scroll ->
		if $(document).scrollTop() + $(window).outerHeight()/2 > $(canvas).closest('.section, section').offset().top
			progress.start() if !progress.isPlaying and progress.value isnt 1
		return
