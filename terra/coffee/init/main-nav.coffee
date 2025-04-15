$ '[data-open]'
	.click ->
		if $($(@).data('open')).hasClass 'active'
			$(@).removeClass 'active'
			$($(@).data('open')).removeClass 'animated'
			$('html,body').removeClass 'overlayed'
			$('html,body').css 'width', 'auto'
			setTimeout (=>
				$($(@).data('open')).removeClass 'active'
				return
				), 200
		else
			$(@).addClass 'active'
			$($(@).data('open')).addClass 'active'
			$('html,body').css 'width', $('body').width()+'px'
			$('html,body').addClass 'overlayed'
			setTimeout (=>
				$($(@).data('open')).addClass 'animated'
				return
				), 70
		return

$ 'body'
	.click (e)->
		if $(e.target).closest('#navTablet, [data-open], [data-call], .popup').length is 0
			$('#navTablet, [data-open], #headerFade').removeClass 'animated active'
			$('html,body').removeClass 'overlayed'
			$('html,body').css 'width', 'auto'
		return