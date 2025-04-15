$ '#playVideo'
	.click ->
		$(@).parents('.video-hover').addClass 'hidden'
		$(@).parents('.video-hover').next('iframe').find('.ytp-large-play-button').trigger 'click'
		return