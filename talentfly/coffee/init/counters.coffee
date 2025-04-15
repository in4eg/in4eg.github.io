do ->
	requestAnimationFrame = window.requestAnimationFrame or window.mozRequestAnimationFrame or window.webkitRequestAnimationFrame or window.msRequestAnimationFrame
	window.requestAnimationFrame = requestAnimationFrame
	return

RadialGrapgh = (id)->
	# lets get the resolution of our device.
	pixelRatio = window.devicePixelRatio or 1
	console.log pixelRatio

	canvas = document.getElementById id
	ctx = canvas.getContext '2d'

	width = 0
	height = 0

	do setCanvasSize = ->

		width = $(canvas).parent().outerWidth() * pixelRatio
		height = $(canvas).parent().outerHeight() * pixelRatio

		canvas.width = width
		canvas.height = height
		return

	drawAll = (percent) ->
		ctx.clearRect 0, 0, canvas.width, canvas.height
		ctx.font = '300 '+height/5+'px Poppins'
		i = 0
		while i < radials.length
			render radials[i], percent
			i++
		return


	quart = Math.PI / 2
	PI2 = Math.PI * 2
	lineWidth = 15 * pixelRatio

	render = (radial, percent) ->
		pixelRatio = window.devicePixelRatio or 1
		
		ctx.clearRect 0, 0, canvas.width, canvas.height
		ctx.beginPath()
		ctx.lineWidth = lineWidth
		ctx.arc canvas.width/2, canvas.height/2, height/3,0,PI2
		ctx.strokeStyle = '#f5f8fa'
		ctx.stroke()

		pct = percent / 100
		extent = parseInt((radial.end - (radial.start)) * pct)
		current = (radial.end - (radial.start)) / 100 * PI2 * pct - quart
		ctx.beginPath()
		ctx.arc radial.x, radial.y, height/3 , -quart, current
		ctx.strokeStyle = radial.color
		ctx.stroke()
		ctx.fillStyle = radial.color
		ctx.textBaseline = 'middle'
		ctx.textAlign = 'center';
		ctx.fillText extent + '%', radial.x, radial.y

		ctx.beginPath()
		ctx.lineWidth = lineWidth - 5
		ctx.arc radial.x, radial.y, height/3 + 10 * pixelRatio, -quart, current
		ctx.strokeStyle = '#ebf4fd'
		ctx.stroke()
		return

	animate = ->

		if $('#counter-section').hasClass 'active'
			percent += 1
			drawAll percent
		else
			drawAll 0

		if percent < 100
			requestAnimationFrame animate

		return

	@animate = -> animate()

	ctx.lineWidth = lineWidth
	percent = 0

	radials = []
	radials.push
		x: canvas.width / 2
		y: canvas.height / 2
		radius: 80 * pixelRatio
		start: 0
		end: canvas.getAttribute 'data-to'
		color: '#76b6f0'

	setRadialSize = ->
		for radial in radials
			radial.x = canvas.width / 2
			radial.y = canvas.height / 2
		drawAll percent

		return

	window.addEventListener 'resize', ->
		setCanvasSize()
		setRadialSize()
		return

	return @


graph1 = new RadialGrapgh 'round'
graph1.animate()

# counter-section add active
if $(document).scrollTop() + $(window).outerHeight()/2 > $('#counter-section').offset().top
	$('#counter-section').addClass 'active'
else $('#counter-section').removeClass 'active'

$(window).scroll ->
	if $(document).scrollTop() + $(window).outerHeight()/2 > $('#counter-section').offset().top
		$('#counter-section').addClass 'active'
	else $('#counter-section').removeClass 'active'
	return