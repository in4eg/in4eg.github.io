loaded = false

onScroll = ->
	$ '[data-onload]'
		.each (i, parent) ->
			$(window).scroll ->

				if $(window).scrollTop() + window.innerHeight >= document.body.scrollHeight and loaded is false
					console.log loaded
					if $(parent).parents('.content').hasClass 'active'
						url = $(parent).data 'url'

						preloaderTemplate = '
							<div class=\"holder\">
								<div class=\"preloader\">
									<div></div>
									<div></div>
									<div></div>
									<div></div>
									<div></div>
									<div></div>
									<div></div>
									<div></div>
									<div></div>
									<div></div>
								</div>
							</div>
						'

						if $(parent).find('.holder').length < 1
							$(parent).append preloaderTemplate

							setTimeout (=>
								$.ajax
									url: url
									type: 'get'
									success: (data) ->
										$(parent).find('.holder').remove()
										$(parent).append data
										loaded = true
										return
								return
								), 1500
				else if $(document).scrollTop() < $(parent).offset().top
					loaded = false
				return
			return
	return

$(document.body).on 'touchmove', onScroll
# for mobile
$(window).on 'scroll', onScroll