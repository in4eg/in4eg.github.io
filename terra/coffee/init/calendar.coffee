Calendar = (calendar)->
	mm = undefined
	dd = undefined
	yy = undefined
	hh = undefined
	mm = undefined
	choosenTime = mm + '/' + dd + '/' + yy + ';' + hh + ':' + mm

	currentDate = new Date
	currentMonth = currentDate.getMonth()
	monthArr = ['JAN', 'FEB', 'MÄR', 'APR', 'MAI', 'JUNI', 'JULI', 'AUG', 'SEPT', 'OKT', 'NOV', 'DEZ']


	# month
	daysInMonth = (month, year) ->
		new Date(year, month, 0).getDate()

	renderMonth = (currentMonth, monthArr)->
		daysArr = []
		calendar.find('[data-month]').html monthArr[currentMonth]
		calendar.find('.month-list').find('li').remove()

		for month in monthArr
			calendar.find('.month-list').append('<li>' + month + '</li>')
			calendar.find('.month-list').find('li').eq(currentMonth).addClass 'current'

		i = 1
		while i <= daysInMonth(currentMonth + 1, currentDate.getFullYear())
			daysArr.push i
			i++

		renderDays(currentDate, daysArr)
		return

	renderDays = (currentDate, daysArr)->
		calendar.find('[data-date]').find('.date').remove()

		for date, elem in daysArr
			calendar.find('[data-date]').append('<div class="date">' + date + '</div>')

			# choose current day
			if typeof currentDate is 'object'
				if date is currentDate.getDate()
					calendar.find('[data-date]').find('.date').eq(elem).addClass 'current'
			else
				if date is currentDate
					calendar.find('[data-date]').find('.date').eq(elem).addClass 'current'
		return

	@renderMonth = renderMonth(currentMonth, monthArr)

	# time
	renderTime = (hour, minutes)->
		from = parseInt hour.data('from') or 0
		to = parseInt hour.data('to') or 18
		minutesStep = parseInt minutes.data('step') or 5
		hourArr = []
		minutesArr = []

		calendar.find('.time-select').find('span').remove()

		i = from
		while i <= to
			hourArr.push i
			i++

		for el in hourArr
			if el < 10
				calendar.find('[data-hour]').append('<span>' + '0' + el + '</span>')
			else
				calendar.find('[data-hour]').append('<span>' + el + '</span>')

		n = 0
		while n < 60
			minutesArr.push n
			n += minutesStep

		for min in minutesArr
			if min < 10
				calendar.find('[data-minutes]').append('<span>' + '0' + min + '</span>')
			else
				calendar.find('[data-minutes]').append('<span>' + min + '</span>')

		return

	@renderTime = renderTime(calendar.find('.hour'), calendar.find('.minutes'))

	$(calendar)
		.on 'click', $('.date'), (e)->
			if $(e.target).hasClass 'date'
				$('.date').removeClass 'active'
				$(e.target).addClass 'active'
				dd = $(e.target).text().trim()
			return

	calendar.find('li').click ->
		calendar.find('li').removeClass 'active'
		$(@).addClass 'active'

		monthName = $(@).text().trim()
		calendar.find('[data-month]').html monthName
		index = monthArr.indexOf monthName

		daysArr = []
		for month, el in monthArr
			if el is index
				i = 1
				while i <= daysInMonth(index + 1, currentDate.getFullYear())
					daysArr.push i
					i++

		calendar.find('[data-date]').find('.date').remove()

		for date, elem in daysArr
			calendar.find('[data-date]').append('<div class="date">' + date + '</div>')
		
		if index is currentMonth
			calendar.find('[data-date]').find('.date').eq(currentDate.getDate() - 1).addClass 'current'

		return

	calendar.find('.time-select').find('span').click ->
		$(@).siblings('span').removeClass 'active'
		$(@).addClass 'active'

		value = $(@).text().trim()

		$(@).parents('.dropdown').find('.digit').html value
		return

	calendar.find('.place-select').find('span').click ->
		$(@).siblings('span').removeClass 'active'
		$(@).addClass 'active'

		value = $(@).text().trim()

		$(@).parents('.dropdown').find('.digit').html value
		return


	return


if $('#calendar')
	popupCalendar = new Calendar($('#calendar'))
