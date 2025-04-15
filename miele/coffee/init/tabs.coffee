$ ->

	###tabs###
	setActiveTab = (content, indx)->
		content.find('.content').removeClass 'active'
			.eq indx
			.addClass 'active'
		$('.form-btn').removeClass 'active'
			.eq indx
			.addClass 'active'
		if $(document).width() <= 640
			$('html,body').scrollTop content.find('.content').eq(indx).offset().top
		return
	$ '[data-tabs]'
		.each (i, nav)->
			$(nav).find('li').click (e)->
				e.preventDefault()
				$(@).siblings().removeClass 'active'
				$(@).addClass 'active'
				setActiveTab $($(nav).data('tabs')), $(@).index()
				return
			$($(nav).data('tabs')).find('[data-title]').each (i, title)->
				$(title).click ->
					$(nav).find('li').eq(i).click()
					return
				return
			return

	return

$ '.next-btn'
	.on 'click', ->
		$('.content').removeClass 'active'
		$('.content').eq(1).addClass 'active'
		$('.tabs').find('li').removeClass 'active'
		$('.tabs').find('li').eq(1).addClass 'active'
		$(@).removeClass 'active'
		$('.submit-btn').addClass 'active'
		return