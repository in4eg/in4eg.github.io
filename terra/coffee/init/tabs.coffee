setActiveTab = (content, indx)->
	content.each (i, cont)->
		$('> .content', cont).removeClass 'active'
			.eq indx
			.addClass 'active'
		return
	return

$('body').on 'click', '[data-tabs] li', (e)->
	e.preventDefault()
	nav = $(@).closest('[data-tabs]')[0]
	if $(@).hasClass 'disabled' then return
	$(@).siblings().removeClass 'active'
	$(@).addClass 'active'
	setActiveTab $($(nav).data('tabs')), $(@).index()
	return

$('[data-set-tab]').click (e)->
	data = $(@).attr('data-set-tab')
	if !data then return
	index = data.split('|')[0]
	selector = data.split('|')[1]
	setActiveTab $(selector), index
	return