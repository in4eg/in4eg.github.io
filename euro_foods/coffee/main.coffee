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
			$('[data-header]').each (i, elem)->
				if window.innerWidth <= 1231
					$(elem).appendTo $ $(elem).data 'header'
				else
					parent = $ $(elem).data 'desktop'
					$(elem).appendTo parent
				return
			$('[data-tablet]').each (i, elem)->
				if window.innerWidth <= 993
					$(elem).appendTo $ $(elem).data 'tablet'
				else
					parent = $ $(elem).data 'desktop'
					$(elem).appendTo parent
				return
			$('[data-mobile]').each (i, elem)->
				if window.innerWidth <= 767
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
				headerOffset = if $('.main-header').hasClass('fixed') then $('.main-header').outerHeight() else 25
				$('html,body').animate
					scrollTop: $($(@).data('scrollto')).offset().top - headerOffset
				, 500
				return

		# footer
		# setFooterHeight = ->
		# 	footerHeight = $('.main-footer').outerHeight()
		# 	$('main').css
		# 		paddingBottom: footerHeight + 'px'
		# 	$('.main-footer').css
		# 		marginTop: - footerHeight + 'px'
		# 	return
		# setFooterHeight()


		# resize
		$(window).resize ->
			waitForFinalEvent (->

				# setFooterHeight()
				teleport()

				return
			), 200, ''
			return

		return