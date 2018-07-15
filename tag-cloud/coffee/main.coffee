do ->
	requestAnimationFrame = window.requestAnimationFrame or window.mozRequestAnimationFrame or window.webkitRequestAnimationFrame or window.msRequestAnimationFrame
	window.requestAnimationFrame = requestAnimationFrame
	return

math =
	random: (min, max)->
		return Math.round Math.random() * (max - min) + min

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

tags = {
	'ruby': '#'
	'html': '#'
	'javascript': '#'
	'angular': '#'
	'requestAnimationFrame': '#'
	'framework': '#'
	'summary': '#'
	'figcaption': '#'
	'time': '#'
	'dialog': '#'
	'tag': '#'
	'other': '#'
	'canvas': '#'
	'getContext': '#'
	'radius': '#'
	'false': '#'
	'floor': '#'
	'random': '#'
	'height': '#'
	'getRandomColor': '#'
	'getElementById': '#'
	'div': '#'
	'math': '#'
	'true': '#'
	'typescript': '#'
	'coffeescript': '#'
	'vue': '#'
}

radius = canvas.width / 15
centerX = canvas.width / 2
centerY = canvas.height / 2

drawCircle = ->
	ctx.beginPath()
	# context.arc(x,y,r,sAngle,eAngle,counterclockwise);
	ctx.arc centerX, centerY, radius, 0, 2 * Math.PI, false
	ctx.fillStyle = '#fff'
	ctx.fill()

	return

drawCircle()


getRandomColor = ->
	letters = '0123456789ABCDEF'
	color = '#'
	i = 0
	while i < 6
		color += letters[Math.floor(Math.random() * 16)]
		i++
	color

writeText = ->
	startX = centerX - centerX/4
	startY = centerY - centerY/2
	finalX = startX + radius*2
	finalY = startY + radius*2

	totalWidth = startX
	totalHeight = startY

	i = 0
	for tag, link of tags
		i += 20
		n = 0

		ctx.font = math.random(10, 30) + 'px Arial'
		ctx.fillStyle = getRandomColor()
		word = ctx.measureText(tag)
		tagWidth = word.width
		ctx.fillText(tag, totalWidth + i, totalHeight)

		totalWidth += tagWidth

		if totalWidth + tagWidth >= finalX
			n += 30
			totalHeight += n
			totalWidth = startX - i

			console.log totalHeight
			console.log finalY
			if totalHeight >= finalY
				console.log tag

	return

writeText()

window.addEventListener 'resize', ->
	setCanvasSize()
	drawCircle()
	return
