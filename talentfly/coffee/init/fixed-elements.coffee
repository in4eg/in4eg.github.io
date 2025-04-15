setFixedBlock = (block)->
	top = block.offset().top
	width = block.parent().outerWidth() - 20
	documentHeight = $(document).height() - $('.main-footer').height() - 20
	if block.parents('.tabs-content').length 
		if block.parents('.content').hasClass 'active'
			$(window).scroll ->
				scrollToBottom = $(document).scrollTop() + $(window).height()

				if window.innerWidth >= 993

					if $(window).scrollTop() + 15 >= block.parent().offset().top
						block.addClass 'fixed'
						block.css(
							top: 15 + 'px'
							bottom: 'auto'
							width: width + 'px'
							)
					else
						block.removeClass 'fixed'
						block.css(
							width: 'auto'
							bottom: 'auto'
							top: 'auto'
							)

				else
						block.removeClass 'fixed'
						block.css(
							width: 'auto'
							bottom: 'auto'
							top: 'auto'
							)
				return
		else
			block.removeClass 'fixed'
			block.css(
				width: 'auto'
				bottom: 'auto'
				top: 'auto'
				)
			
	else
		$(window).scroll ->
			scrollToBottom = $(document).scrollTop() + $(window).height()

			if window.innerWidth >= 993

				if $(window).scrollTop() + 15 >= block.parent().offset().top
					block.addClass 'fixed'
					block.css(
						top: 15 + 'px'
						bottom: 'auto'
						width: width + 'px'
						)
				else
					block.removeClass 'fixed'
					block.css(
						width: 'auto'
						bottom: 'auto'
						top: 'auto'
						)

			else
					block.removeClass 'fixed'
					block.css(
						width: 'auto'
						bottom: 'auto'
						top: 'auto'
						)
			return
	return

setFixedBlock($('.fixed-block'))


# resize
$(window).resize ->
	setFixedBlock($('.fixed-block'))
	return
