scrollSpy = (nav)->
	links = nav.find('[data-scrollto]')

	$(window).scroll ->
		for link in links
			block = $(link).data('scrollto')

			$(block).each (i, section)->

				if $(window).scrollTop() + 35 >= $(section).offset().top
					$($(link).data('scrollto', $(link).data('scrollto'))).parent().siblings().removeClass 'active'
					$($(link).data('scrollto', $(link).data('scrollto'))).parent().addClass 'active'

				else
					$($(link).data('scrollto', $(link).data('scrollto'))).removeClass 'active'
				return
		return
	return

scrollSpy($('.spy-nav'))
