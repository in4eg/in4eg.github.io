addEventListener 'DOMContentLoaded', ->
	calendar = $('[data-calendar]')[0]

	if typeof calendar isnt 'undefined'

		pickmeup '[data-calendar]',
			hide_on_select: true
			mode: 'single'
			format: 'd.m.Y'
			calendars: 1
			position: 'left'
			date: [
				new Date
			]

		calendar.addEventListener 'pickmeup-change', (e) ->
			getDate = timeConverter(e.detail.formatted_date)
			$($('[data-calendar]').data('calendar')).val getDate
			return

		calendar.addEventListener 'pickmeup-hide', (e) ->
			$('.calendar-btn').removeClass 'active'
			$('.pickmeup').find('.btn-list').remove()
			return

		calendarTemplate = "
			<ul class=\"btn-list clear\">
				<li class=\"item\">
					<button class=\"btn success-btn choose-date\" type=\"button\">Применить</button>
				</li>
				<li class=\"item\">
					<button type=\"button\" class=\"btn btn-simple calendar-close\">Отмена</button>
				</li>
			</ul>
			"
		calendar.addEventListener 'pickmeup-show', (e) ->
			$('.pickmeup').append calendarTemplate
			return

		$('.calendar-btn').on 'click', ->
			pickmeup('[data-calendar]').show();
			$(@).addClass 'active'
			return

		$(document).on 'click', '.calendar-close', ->
			pickmeup('[data-calendar]').hide();
			$(@).removeClass 'active'
			$('.pickmeup').find('.btn-list').remove()
			return

		$(document).on 'click', '.choose-date', ->
			pickmeup('[data-calendar]').hide();
			$(@).removeClass 'active'
			return

	rangeCalendar = $('.js-range')[0]

	if typeof rangeCalendar isnt 'undefined'

		lastDate = null

		pickmeup '.js-range', 
			flat: true
			format: 'd.m.Y'
			hide_on_select: true
			mode: 'range'
			calendars: 1
			date: [
				new Date
			]

		rangeCalendar.addEventListener 'pickmeup-change', (e) ->
			$('#dateFrom').val e.detail.formatted_date[0]
			$('#dateTo').val e.detail.formatted_date[1]

			lastDate = e.detail.formatted_date[1]

			return

		rangeCalendar.addEventListener 'pickmeup-fill', (e) ->
			$(rangeCalendar).find('.pmu-selected').last().addClass 'last-selected'
			return
	return


timeConverter = (formatted) ->
	dateArr = formatted.split('.')
	months = [
		'январь'
		'февраль'
		'март'
		'апрель'
		'май'
		'июнь'
		'июль'
		'август'
		'сентябрь'
		'октябрь'
		'ноябрь'
		'декабрь'
	]
	monthIndex = parseInt dateArr[1] - 1
	month = months[monthIndex]
	time = dateArr[0] + ' ' + month + ' ' + dateArr[2]
	time

$(window).resize ->
	$('.pickmeup').find('.btn-list').remove()
	return

