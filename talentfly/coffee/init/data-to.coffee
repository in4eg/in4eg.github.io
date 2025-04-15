$ document
	.on 'input change', '[data-to]', ->
		parentBlock = $(@).attr 'data-to'
		$(parentBlock).html $(@).val()
		return