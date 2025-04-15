setActiveTab = (content, indx)->
	content.each (i, cont)->
		$('> .content', cont).removeClass 'active'
			.eq indx
			.addClass 'active'
		return
	return


$('body').on 'click', '[data-tabs] > li', (e)->
	nav = $(@).closest('[data-tabs]')[0]
	if $(@).hasClass 'disabled' then return
	$(@).siblings().removeClass 'active'
	$(@).addClass 'active'
	setActiveTab $($(nav).data('tabs')), $(@).index()
	return

