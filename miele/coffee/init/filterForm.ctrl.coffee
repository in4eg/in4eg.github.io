filterForm = new Vue
	el: '#filterForm'
	data: {
		
	}
	methods: {

	}

$ '.checkbox-holder input'
	.click (e)->
		$(@).closest('li').find('ul').find('input').prop 'checked', $(@).prop 'checked'
		return

$ '#filterForm'
	.on 'reset', ->
		$('.range-slider', @).each (i, range)->
			if !$(range).data('options') then return
			data = JSON.parse $(range).data('options').toString().replace /\'/gim, '"'
			min = $(range).siblings('.inputs').find('.input').eq(0)
			max = $(range).siblings('.inputs').find('.input').eq(1)
			if range.slider
				range.slider.set [data.start[0], data.start[1]]
				setTimeout ->
					min.val data.start[0]
					max.val data.start[1]
				, 1
			return
		return
