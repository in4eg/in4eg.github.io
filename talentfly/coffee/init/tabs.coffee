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
	if $('.soft-scroll-container')[0]
		Ps.update $('.soft-scroll-container')[0]
	if $('.education-scroll-container')[0]
		Ps.update $('.education-scroll-container')[0]
	if $('.certification-scroll-container')[0]
		Ps.update $('.certification-scroll-container')[0]
	if $('.language-scroll-container')[0]
		Ps.update $('.language-scroll-container')[0]
	if $('.interests-scroll-container')[0]
		Ps.update $('.interests-scroll-container')[0]
	if $('.volunteering-scroll-container')[0]
		Ps.update $('.volunteering-scroll-container')[0]
	# if $('.fixed-block')
	# 	setFixedBlock $('.fixed-block')
	# 	$('.fixed-block').removeClass 'fixed'
	return

$('[data-set-tab]').click (e)->
	data = $(@).attr('data-set-tab')
	if !data then return

	if $('.tech-scroll-container')[0]
		setTimeout (->
			Ps.update $('.tech-scroll-container')[0]
			return
			), 100
	if $('.experience-scroll-container')[0]
		setTimeout (->
			Ps.update $('.experience-scroll-container')[0]
			return
			), 100
	index = data.split('|')[0]
	selector = data.split('|')[1]
	setActiveTab $(selector), index
	return