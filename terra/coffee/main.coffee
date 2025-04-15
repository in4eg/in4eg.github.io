waitForFinalEvent = do ->
	timers = {}
	(callback, ms, uniqueId) ->
		if !uniqueId
			uniqueId = 'Don\'t call this twice without a uniqueId'
		if timers[uniqueId]
			clearTimeout timers[uniqueId]
		timers[uniqueId] = setTimeout(callback, ms)
		return

$ document
	.ready ->


		###teleport###
		(teleport = ->
			$('[data-middle]').each (i, elem)->
				if window.innerWidth <= 1199
					$(elem).appendTo $ $(elem).data 'middle'
				else
					parent = $ $(elem).data 'desktop'
					$(elem).appendTo parent
				return
			$('[data-tablet]').each (i, elem)->
				if window.innerWidth <= 950
					$(elem).appendTo $ $(elem).data 'tablet'
				else
					parent = $ $(elem).data 'desktop'
					$(elem).appendTo parent
				return
			$('[data-mobile]').each (i, elem)->
				if window.innerWidth <= 768
					$(elem).appendTo $ $(elem).data 'mobile'
				else
					parent = $ $(elem).data 'desktop'
					$(elem).appendTo parent
				return
			$('[data-mobile-xs]').each (i, elem)->
				if window.innerWidth <= 485
					$(elem).appendTo $ $(elem).data 'mobile-xs'
				else
					parent = $ $(elem).data 'desktop'
					$(elem).appendTo parent
				return
			if window.innerWidth <= 480
				$('#formArticle').appendTo $('#formDesktop')
			return
		)()

		###scrollto###
		$ '[data-scrollto]'
			.click (e)->
				e.preventDefault()
				headerOffset = if $('.main-header').hasClass('fixed') then $('.main-header').outerHeight() else 0
				$('html,body').animate
					scrollTop: $($(@).data('scrollto')).offset().top - headerOffset
				, 500
				return

		# footer
		setFooterHeight = ->
			footerHeight = $('.main-footer').outerHeight()
			$('main').css
				paddingBottom: footerHeight + 'px'
			$('.main-footer').css
				marginTop: - footerHeight + 'px'
			return
		setFooterHeight()


		# resize
		$(window).resize ->
			waitForFinalEvent (->

				setFooterHeight()
				teleport()

				return
			), 100, ''
			return

		return