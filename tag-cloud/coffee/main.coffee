do ->
	requestAnimationFrame = undefined
	requestAnimationFrame = window.requestAnimationFrame or window.mozRequestAnimationFrame or window.webkitRequestAnimationFrame or window.msRequestAnimationFrame
	window.requestAnimationFrame = requestAnimationFrame
	return

canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')

do setCanvasSize = ->
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
	return











window.addEventListener 'resize', ->
	do setCanvasSize
	return
