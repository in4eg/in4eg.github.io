$ document
	.on 'click', '[data-down]', ->
		totalIndex =  $($(@).data('down')).children().length
		nextElemIndex =  $(@).parents('.block-info').next().index()
		topPosition = $(@).parents('.block-info').position().top

		id = $($(@).data('down')).find('.block-info').find('.title-input').data 'push'
		parent = '#' + $($(@).data('down')).find('.block-info').parent().attr 'id'
		url = $(parent).data('url')

		relatedElement = $($(@).parents('.block-info').find('[data-id]').data('push')).parents('li')
		relatedIndex = $(relatedElement).index()

		if $(@).parents('.block-info').next().length > 0
			$(@).parents('.block-info').insertAfter($(@).parents('.block-info').next())
			relatedElement.insertAfter(relatedElement.next())

			$('.mfp-wrap').animate {
				scrollTop: topPosition
			}, 500

		sendElementIndex(nextElemIndex, id, parent, url)
		return

$ document
	.on 'click', '[data-up]', ->

		totalIndex =  $($(@).data('up')).children().length
		nextElemIndex =  $(@).parents('.block-info').prev().index()
		topPosition = $(@).parents('.block-info').position().top - $(@).parents('.block-info').height()

		id = $($(@).data('up')).find('.block-info').find('.title-input').data 'push'
		parent = '#' + $($(@).data('up')).find('.block-info').parent().attr 'id'
		url = $(parent).data('url')

		relatedElement = $(document).find($(@).parents('.block-info').find('[data-id]').data('push')).parents('li')
		relatedIndex = $(relatedElement).index()


		if $(@).parents('.block-info').prev().length > 0
			$(@).parents('.block-info').insertBefore($(@).parents('.block-info').prev())
			relatedElement.insertBefore(relatedElement.prev())

			$('.mfp-wrap').animate {
				scrollTop: topPosition
			}, 500

		sendElementIndex(nextElemIndex, id, parent, url)
		return


