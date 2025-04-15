$ '[data-show]'
	.click ->
		$($(@).data('show')).addClass 'active'
		if window.innerWidth > 768
			$($(@).data('show')).find('input').focus()
		if $($(@).data('show')).hasClass 'search-form'
			$('#searchForm').animate {
				width: 530
				opacity: 1
			}, 250
		return

$ '[data-hide]'
	.click ->
		$($(@).data('hide')).removeClass 'active animate'
		$('#searchForm').css {
			width: 0,
			opacity: 0
			}
		return

$ '[data-toggle]'
	.click (e)->
		$(@).toggleClass 'active'
		$($(@).data('toggle')).toggleClass 'active'
		return

$ 'body'
	.click (e)->
		if $(e.target).closest('.toggle-outer, [data-toggle], [data-show]').length is 0
			$('.toggle-outer').removeClass 'active'
			$('#searchForm').css {
				width: 0,
				opacity: 0
				}
		return