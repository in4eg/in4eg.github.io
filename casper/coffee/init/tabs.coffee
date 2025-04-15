setActiveTab = (content, indx)->
	content.find('.content').removeClass 'active'
		.eq indx
		.addClass 'active'
	# if $(document).width() <= 640
	# 	$('html,body').animate
	# 		scrollTop: content.find('.content').eq(indx).offset().top
	# 	, 200
	return

$ '[data-tabs]'
	.each (i, nav)->
		$(nav).find('li').click (e)->
			e.preventDefault()
			$(@).siblings().removeClass 'active'
			$(@).addClass 'active'
			setActiveTab $($(nav).data('tabs')), $(@).index()
			return
		return

mobileTabs = ->
	if window.innerWidth <= 640
		$('[data-tabs-anchor]'). click ->
			$(@).toggleClass 'active'
			$(@).next('.tabs-nav').toggleClass 'active'
			return
		$('.tabs-nav').on 'click', 'li', ->
			html = $(@).text()
			$(@).parent('.tabs-nav').siblings('.tabs-anchor-mobile').html html
			$(@).parent('.tabs-nav').siblings('.tabs-anchor-mobile').removeClass 'active'
			$(@).parent('.tabs-nav').removeClass 'active'
			return
	
	return

mobileTabs()