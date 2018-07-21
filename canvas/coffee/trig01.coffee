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


ctx.translate 0, height / 2
ctx.scale 1, -1

angle = 0
while angle < Math.PI *2
	# console.log angle
	# console.log Math.sin angle
	x = angle * 200
	y = Math.sin(angle) * 200

	ctx.fillRect x, y, 5, 5
	angle += .01



window.addEventListener 'resize', ->
	setCanvasSize()
	return
