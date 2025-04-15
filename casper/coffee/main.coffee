$ document
	.ready ->

		waitForFinalEvent = do ->
			timers = {}
			(callback, ms, uniqueId) ->
				if !uniqueId
					uniqueId = 'Don\'t call this twice without a uniqueId'
				if timers[uniqueId]
					clearTimeout timers[uniqueId]
				timers[uniqueId] = setTimeout(callback, ms)
				return

		###teleport###
		(teleport = ->
			$('[data-tablet]').each (i, elem)->
				if $(document).width() <= 992
					$(elem).appendTo $ $(elem).data 'tablet'
				else
					parent = $ $(elem).data 'desktop'
					$(elem).appendTo parent
				return
			$('[data-mobile]').each (i, elem)->
				if $(document).width() <= 768
					$(elem).appendTo $ $(elem).data 'mobile'
				else
					parent = $ $(elem).data 'desktop'
					$(elem).appendTo parent
				return
			return
		)()

		###scrollto###
		$ '[data-scrollto]'
			.click (e)->
				e.preventDefault()
				if $(@).attr('data-scroll-mobile') and window.innerWidth <= 640
					$('html,body').animate
						scrollTop: $($(@).data('scroll-mobile')).offset().top
					, 500
					return off
				
				$('html,body').animate
					scrollTop: $($(@).data('scrollto')).offset().top
				, 500
				return

		if window.innerWidth <= 1199
			$('.timeline').perfectScrollbar()
		else
			$('.timeline').perfectScrollbar('destroy');


		# footer
		# setFooterHeight = ->
		# 	footerHeight = $('.main-footer').outerHeight()
		# 	$('main').css
		# 		paddingBottom: footerHeight + 'px'
		# 	$('.main-footer').css
		# 		marginTop: - footerHeight + 'px'
		# 	return
		# setFooterHeight()

		rockets = []

		$('.section').each (i, section)->
			if !rockets[i]
				rockets[i] = runProgressBar($('.progress', section))

			if $(document).scrollTop() + $(window).outerHeight()/2 > $(section).offset().top
				$(section).addClass 'active'
				rockets[i]()
			else $(section).removeClass 'active'
			return


		$(window).scroll ->
			$('.section').each (i, section)->

				if !rockets[i]
					rockets[i] = runProgressBar($('.progress', section))

				if $(document).scrollTop() + $(window).outerHeight()/2 > $(section).offset().top
					$(section).addClass 'active'
					rockets[i]()
					setTimeout (->
						$('.casper.translate-left').addClass 'animation-move'
						return
					), 1000
				else 
					$(section).removeClass 'active'
				return
			return

		# resize
		$(window).resize ->
			# console.log window.innerWidth
			waitForFinalEvent (->

				# setFooterHeight()
				teleport()
				
				if window.innerWidth <= 1199
					$('.timeline').perfectScrollbar()
				else
					$('.timeline').perfectScrollbar('destroy');


				return
			), 200, ''
			return

		return