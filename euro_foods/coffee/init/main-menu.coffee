$ '[data-menu]'
	.click (e)->
		$(@).toggleClass 'active'
		$($(@).data('menu')).toggleClass 'active'
		$('.main-header').toggleClass 'opened'
						
		if $(@).hasClass 'active'
			$('body,html')
				.css 'width', $('body').width()+'px'
				.addClass 'overlayed menu-overlayed'
		else
			$('body,html')
				.css 'width', ''
				.removeClass 'overlayed menu-overlayed'
		return

$ 'body'
	.click (e)->
		if $(e.target).closest('.main-menu .menu-inner, [data-menu]').length is 0

			if $('.main-menu').hasClass 'active'
				$('.main-menu').removeClass 'active'
				$('[data-menu]').removeClass 'active'
				$('.main-header').removeClass 'opened'
				$('body,html')
					.css 'width', ''
					.removeClass 'overlayed menu-overlayed'
		return

$ '[data-hide-menu]'
	.click (e)->
		$($(@).data('hide-menu')).removeClass 'active'
		$('.main-header').removeClass 'opened'
		$('body,html')
			.css 'width', ''
			.removeClass 'overlayed menu-overlayed'
		$('[data-menu]').removeClass 'active'
		return