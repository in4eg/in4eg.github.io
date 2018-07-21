do ->
	requestAnimationFrame = window.requestAnimationFrame or window.mozRequestAnimationFrame or window.webkitRequestAnimationFrame or window.msRequestAnimationFrame
	window.requestAnimationFrame = requestAnimationFrame
	return

canvas = document.getElementById 'canvas'

width = 0
height = 0

do setCanvasSize = ->
	width = window.innerWidth
	height = window.innerHeight

	canvas.width = width
	canvas.height = height
	return

ctx = canvas.getContext '2d'

centerY = height * .5
centerX = width * .5
baseRadius = 100
baseAlpha = 0.5
radOffset = 50
alphaOffset = 0.5
offset = height * .4
speed = 0.055
angle = 0


render = ->
	y = centerY + Math.sin(angle) * offset
	radius = baseRadius + Math.sin(angle) * radOffset
	alpha = baseAlpha + Math.sin(angle) * alphaOffset

	ctx.fillStyle = 'rgba(255, 255, 255,' + alpha + ')'
	ctx.clearRect 0, 0, width, height
	ctx.beginPath()
	ctx.arc centerX, y, radius, 0, Math.PI * 2, false
	ctx.fill()

	angle += speed

	requestAnimationFrame(render)
	return

render()


window.addEventListener 'resize', ->
	setCanvasSize()
	return
