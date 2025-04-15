$ '[data-hide]'
	.click ->
		$($(@).data('hide')).find('img').addClass 'hidden'
		$(@).addClass 'hidden'
		return