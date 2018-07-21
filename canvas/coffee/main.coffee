getRandomColor = ->
	letters = '0123456789ABCDEF'
	color = '#'
	i = 0
	while i < 6
		color += letters[Math.floor(Math.random() * 16)]
		i++
	color


math =
	random: (min, max)->
		return Math.round Math.random() * (max - min) + min

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


i = 0
while i <= 100
	ctx.beginPath()
	ctx.moveTo Math.random() * width, Math.random() * height
	ctx.lineTo Math.random() * width, Math.random() * height
	ctx.stroke()
	i++


window.addEventListener 'resize', ->
	setCanvasSize()
	return
