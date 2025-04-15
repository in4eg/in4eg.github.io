# $ '#copyButton'
# 	.on 'click touch', ->
# 		Clipboard.copy(document.querySelector('#copiedLink').innerText)
# 		return

# window.Clipboard = do (window, document, navigator) ->
# 	textArea = undefined
# 	copy = undefined

# 	isOS = ->
# 		navigator.userAgent.match /ipad|iphone/i

# 	createTextArea = (text) ->
# 		textArea = document.createElement('textArea')
# 		textArea.value = text
# 		document.body.appendChild textArea
# 		return

# 	selectText = ->
# 		range = undefined
# 		selection = undefined
# 		if isOS()
# 			try
# 				range = document.createRange()
# 				range.selectNodeContents textArea
# 				selection = window.getSelection()
# 				selection.removeAllRanges()
# 				selection.addRange range
# 				textArea.setSelectionRange 0, textArea.value.length

# 			catch e
# 				console.log e
			
# 		else
# 			textArea.select()
# 		return

# 	copyToClipboard = ->
# 		$(document).off 'copy contextmenu'
# 		document.execCommand 'copy'
# 		document.body.removeChild textArea
# 		return

# 	copy = (text) ->
# 		createTextArea text
# 		selectText()
# 		copyToClipboard()
# 		return

# 	{ copy: copy }


buttons = document.querySelectorAll('#copyButton')
i = 0
while i < buttons.length
	console.log new Clipboard(buttons[i])
	new Clipboard(buttons[i])
	i++

