$ '.checkbox-group'
	.click ->
		if $(@).find('#agreetment').prop('checked') is true
			$(@).parents('form').find('.btn').removeClass 'blocked'
		else
			$(@).parents('form').find('.btn').addClass 'blocked'
			# $('#copied').next('.alert').removeClass 'active'

		return


$ '#copybtn'
	.on 'click touch', ->
		Clipboard.copy(document.querySelector('#copied').innerText)
		return


window.Clipboard = do (window, document, navigator) ->
	textArea = undefined
	copy = undefined

	isOS = ->
		navigator.userAgent.match /ipad|iphone/i

	createTextArea = (text) ->
		textArea = document.createElement('textArea')
		textArea.value = text
		document.body.appendChild textArea
		return

	selectText = ->
		range = undefined
		selection = undefined
		if isOS()
			try
				range = document.createRange()
				range.selectNodeContents textArea
				selection = window.getSelection()
				selection.removeAllRanges()
				selection.addRange range
				textArea.setSelectionRange 0, textArea.value.length

			catch e
				console.log e
			
		else
			textArea.select()
		return

	copyToClipboard = ->
		$(document).off 'copy contextmenu'
		document.execCommand 'copy'
		document.body.removeChild textArea
		return

	copy = (text) ->
		createTextArea text
		selectText()
		copyToClipboard()
		return

	{ copy: copy }


disableSelection = (target) ->

	if $(target).length > 0

		$ ->
			$(this).on 'contextmenu copy', (e) ->
				e.preventDefault()
				return
			return
		if typeof target.onselectstart != 'undefined'

			target.onselectstart = ->
				false

		else if typeof target.style.MozUserSelect != 'undefined'
			target.style.MozUserSelect = 'none'
		else

			target.onmousedown = ->
				false

		target.style.cursor = 'default'
	return

disableSelection(document.getElementById('copied'))