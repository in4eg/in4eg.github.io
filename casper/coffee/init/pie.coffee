i = 0

$ document
	.scroll ->

		if $('.ico-section').hasClass 'active'
			i++
			if i == 1
				new Chart(document.getElementById('myChart'),
				type: 'pie'
				options:
					maintainAspectRatio: false
					legend: display: false
					title: display: false
					tooltips: enabled: false
					onHover: (d, dd, ddd) ->
						$('.pie-holder [class*="helper"], .pie-holder [class*="text"]').removeClass 'animated'
						if dd[0]
							$('.pie-holder [class*="helper-' + dd[0]._index + 1 + '"]').addClass 'animated'
							$('.pie-holder [class*="text-' + dd[0]._index + 1 + '"]').addClass 'animated'
						return
				data:
					labels: [
						'Pre-ico цена токена - $0,8'
						'ICO цена токена - $1,6'
						'РЕЗЕРВ вознаграждения крупных инвесторов'
						'Команда'
						'РЕЗЕРВ СИСТЕМЫ'
					]
					datasets: [ {
						label: 'CASPER TOKEN (CST)'
						data: [2.2,44.4,13.4,15,25]
						backgroundColor: '#d9e021'
						hoverBackgroundColor: 'rgba(217,224,33,.9)'
						borderColor: '#732379'
						borderWidth: 3
						hoverBorderWidth: 0
					}]
			)


		return



watchPie = ->
	if $('#main-page').length > 0
		top = $(document).scrollTop()
		elementOffset = $('.ico-section').offset().top
		elementHeight = $(window).height()

		if top + elementHeight - 150 > elementOffset and top < elementOffset + elementHeight - 150
			i = 2
			new Chart(document.getElementById('myChart'),
				type: 'pie'
				options:
					maintainAspectRatio: false
					legend: display: false
					title: display: false
					tooltips: enabled: false
					onHover: (d, dd, ddd) ->
						$('.pie-holder [class*="helper"], .pie-holder [class*="text"]').removeClass 'animated'
						if dd[0]
							$('.pie-holder [class*="helper-' + dd[0]._index + 1 + '"]').addClass 'animated'
							$('.pie-holder [class*="text-' + dd[0]._index + 1 + '"]').addClass 'animated'
						return
				data:
					labels: [
						'Pre-ico цена токена - $0,8'
						'ICO цена токена - $1,6'
						'РЕЗЕРВ вознаграждения крупных инвесторов'
						'Команда'
						'РЕЗЕРВ СИСТЕМЫ'
					]
					datasets: [ {
						label: 'CASPER TOKEN (CST)'
						data: [2.2,44.4,13.4,15,25]
						backgroundColor: '#d9e021'
						hoverBackgroundColor: 'rgba(217,224,33,.9)'
						borderColor: '#732379'
						borderWidth: 3
						hoverBorderWidth: 0
					}]
			)

		
	return

watchPie()
