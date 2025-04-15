Graph = (selector, data)->

	if $(selector).parents('.tabs-content > .content:not(.active)').length > 0
		$(selector).parents('.tabs-content > .content:not(.active)').attr('data-temp-class', 'true').addClass 'active'

	svg = d3.select(selector).append('svg')
		# .attr("preserveAspectRatio", "xMinYMin meet")
		.attr("viewBox", "0 0 #{$(selector).outerWidth()} #{$(selector).outerHeight() + 12}")
		.classed("svg-content", true)
		.append('g');

	$(selector).append $("
		<div class=\"graph-tooltip\">
			<span class=\"label\"></span>
			<span class=\"sub-text\"></span>
			<span class=\"text\"></span>
			<span class=\"caption\"></span>	
		<div>
	")
	tooltip = $(selector).find '.graph-tooltip'

	getData = ->
		names = color.domain()
		names.map (name, index) ->
			return {
				index: name
				label: data.labels[index] || ''
				value: data.values[index] or 1
				caption: data.captions[index] or ''
				text: data.text[index] or ''
				subText: data.subText[index] or ''
				suffix: data.suffix[index] or ''
			}

	slice = null

	setData = (data) ->

		coef = if $(window).width() > 480 then 1.3 else 1

		### ------- PIE SLICES -------###
		slice = svg.select('.slices').selectAll('path.slice').data(pie(data), key)
		midAngle = (d) -> d.startAngle + (d.endAngle - (d.startAngle)) / 2
		slice.enter().insert('path').style('fill', (d) ->
			color d.data.index
		).attr 'class', 'slice activateTooltip'
			# .attr 'data-label', (d)-> d.label
		slice.transition().duration(1000).attrTween 'd', (d) ->
			@_current = @_current or d
			interpolate = d3.interpolate(@_current, d)
			@_current = interpolate(0)
			(t) ->
				arc interpolate(t)
		slice.exit().remove()

		### ------- TEXT LABELS -------###
		text = svg.select('.labels').selectAll('text').data(pie(data), key)
		text.enter().append('text').attr('dy', '.35em')
		.attr('class', (d, index) ->
			if $(text).parents('.graph').attr('id') == 'chart1'
				'activateTooltip label' + index + 'tech'
			else
				'activateTooltip popupLabel label' + index + 'exp')
		.text((d) ->
			if $(document).width() < 1600 and $(document).width() > 1270
				if d.data.label.length > 12
					return (d.data.label).slice(0, 12) + '. . .'
			if $(document).width() <= 1270 and $(document).width() > 995
				if d.data.label.length > 10
					return (d.data.label).slice(0, 10) + '. . .'
			if (d.data.label).length > 16
				return (d.data.label).slice(0, 16) + '. . .'
			d.data.label
		).append('tspan').attr("fill", "#8A98AD").text (d)-> " "+d.data.subText
		text.transition().duration(1000).attrTween('transform', (d) ->
			@_current = @_current or d
			interpolate = d3.interpolate(@_current, d)
			@_current = interpolate(0)
			(t) ->
				d2 = interpolate(t)
				pos = outerArc.centroid(d2)
				pos[0] = radius * (if midAngle(d2) < Math.PI then coef else -coef)
				'translate(' + pos + ')'
		).styleTween 'text-anchor', (d) ->
			@_current = @_current or d
			interpolate = d3.interpolate(@_current, d)
			@_current = interpolate(0)
			(t) ->
				d2 = interpolate(t)
				if midAngle(d2) < Math.PI then 'start' else 'end'
		text.exit().remove()

		### ------- SLICE TO TEXT POLYLINES -------###
		polyline = svg.select('.lines').selectAll('polyline').data(pie(data), key)
		polyline.enter().append 'polyline'
		polyline.transition().duration(1000).attrTween 'points', (d) ->
			@_current = @_current or d
			interpolate = d3.interpolate(@_current, d)
			@_current = interpolate(0)
			(t) ->
				d2 = interpolate(t)
				a = arc.centroid(d2)
				pos = outerArc.centroid(d2)

				pos[0] = radius * 0.95 * (if midAngle(d2) < Math.PI then coef else -coef)

				a[0] *= 1.1
				a[1] *= 1.1

				[
					a
					outerArc.centroid(d2)
					pos
				]
		polyline.exit().remove()
		return

	svg.append('g').attr 'class', 'slices'
	svg.append('g').attr 'class', 'labels'
	svg.append('g').attr 'class', 'lines'
	width = $(selector).outerWidth()
	height = $(selector).outerHeight()
	radius = Math.min(width, height) / 2
	pie = d3.layout.pie().sort(null).value((d) ->
		d.value
	)
	arc = d3.svg.arc()
		.outerRadius(radius * (data.outerRadius or 0.9))
		.innerRadius(radius * (data.innerRadius or 0.75))
	outerArc = d3.svg.arc().innerRadius(radius * 0.95).outerRadius(radius * 1)
	svg.attr 'transform', 'translate(' + width / 2 + ',' + height / 2 + ')'

	key = (d) ->
		d.data.index

	getBoundingBoxCenter = (element) ->
		bbox = element.getBBox()
		{
			x: bbox.x + bbox.width / 2
			y: bbox.y + bbox.height / 2
		}

	color = d3.scale.ordinal()
		.domain(data.names)
		.range(data.colors)
	setData getData()

	$(selector).parents('[data-temp-class]').removeClass 'active'

	svg.selectAll('.activateTooltip')
		.on "mouseover", (d, index)->
			svgCenter = {
				x: $(selector)[0].getBoundingClientRect().width/2
				y: $(selector)[0].getBoundingClientRect().height/2
			}
			centroid = getBoundingBoxCenter @
			centroid.x += svgCenter.x
			centroid.y += svgCenter.y

			relatedBlock = $(this).parents('.graph').attr('id')
			currentTransform = d3.select(this).attr('transform')
			if currentTransform == null
				labelToFind = undefined
				if relatedBlock == 'chart1'
					labelToFind = '.label' + index + 'tech'
				else if relatedBlock == 'chart3'
					labelToFind = '.label' + index + 'exp'

				myLabel = d3.selectAll('svg').select('g').select('.labels').select(labelToFind)
				currentTransform = myLabel.attr('transform')

			parsedArray = currentTransform.replace(/(transform|translate|scale|rotate|\(|\))/gim, '').split /(\s| |,)/gim

			positionX = parseInt(parsedArray[0])
			positionX = Math.floor(positionX)

			positionY = parseInt(parsedArray[2])
			positionY = Math.floor(positionY)


			if positionX > 0
				if $(document).width() <= 1500 and $(document).width() > 1400
					transX = positionX - 50 + 'px'
				if $(document).width() <= 1400 and $(document).width() > 1300
					transX = positionX - 80 + 'px'
				if $(document).width() <= 1300 and $(document).width() > 1000
					transX = positionX - 90 + 'px'
				if $(document).width() <= 1000 or $(document).width() > 1500
					transX = positionX - 40 + 'px'
			else
				# if $(document).width() <= 1700 and $(document).width() > 1600
				# 	transX = positionX - 160 + 'px'
				# if $(document).width() <= 1600 and $(document).width() > 1500
				# 	transX = positionX - 150 + 'px'
				# if $(document).width() <= 1500 and $(document).width() > 1400
				# 	transX = positionX - 180 + 'px'
				if $(document).width() <= 1400 and $(document).width() > 1300
					transX = positionX - 130 + 'px'
				if $(document).width() <= 1300 and $(document).width() > 1000
					transX = positionX - 120 + 'px'
				if $(document).width() <= 1000 or $(document).width() > 1400
					transX = positionX - 180 + 'px'

			transY = positionY - 20 + 'px'
		
			tooltip.find('.label').html d.data.label
			tooltip.find('.caption').html d.data.caption
			tooltip.find('.text').html d.data.text
			tooltip.find('.sub-text').html d.data.subText
			tooltip.attr 'style', "
				left: #{svgCenter.x}px;
				top: #{svgCenter.y}px;
				transform: translate(#{transX},#{transY});
				-webkit-transform: translate(#{transX},#{transY});
				-moz-transform: translate(#{transX},#{transY});
				-ms-transform: translate(#{transX},#{transY});
				-o-transform: translate(#{transX},#{transY});
			"
			tooltip.addClass 'active'

			return
		.on "mouseout", (d)->
			tooltip.removeClass 'active'


###
	color
###

LightenDarkenColor = (col, amt) ->
	usePound = false
	
	if col
		if col[0] == '#'
			col = col.slice(1)
			usePound = true
		num = parseInt(col, 16)
		r = (num >> 16) + amt
		if r > 255
			r = 255
		else if r < 0
			r = 0
		b = (num >> 8 & 0x00FF) + amt
		if b > 255
			b = 255
		else if b < 0
			b = 0
		g = (num & 0x0000FF) + amt
		if g > 255
			g = 255
		else if g < 0
			g = 0
		(if usePound then '#' else '') + (g | b << 8 | r << 16).toString(16)


###
	init
###

graphInit = (block)->
	$(block).each (i, elem)->


		chartLabels = if $(@).data('labels') then $(@).data('labels') else 'Other Skill'

		labelsArr = chartLabels.split('Fo9NBddG54DwuTrcvSah')

		indexArr = []
		labelsArr.forEach (el, i) ->
			indexArr.push i
			return


		if $(@).data('values') is ''
			chartValues = '1'
		else
			chartValues = $(@).data('values')

		if $(@).data('captions') is undefined or $(@).data('captions') is ''
			# chartCaptions = 'Month'
			chartCaptions = ''
		else
			chartCaptions = $(@).data('captions')

		captionsArr = chartCaptions.split(',')

		valuesArr = chartValues.toString().split(',').map(Number)

		if $(@).data('text') is undefined or $(@).data('text') is ''
			# chartText = 'Other'
			chartText = ''
		else
			chartText = $(@).data('text')

		textArr = chartText.toString().split('Fo9NBddG54DwuTrcvSah')

		if $(@).data('suffix') is undefined or $(@).data('suffix') is ''
			chartSuffix = '1 year'
		else
			chartSuffix = $(@).data('suffix')

		chartSuffix = chartSuffix.toString().split(',')

		if $(@).data('subtext') is undefined or $(@).data('subtext') is ''
			# chartSubText = 'Other'
			chartSubText = 'Other'
		else
			chartSubText = $(@).data('subtext')

		subTextArr = chartSubText.toString().split(',')

		if $(elem).data('color') is undefined or $(elem).data('color') is ''
			startColor = LightenDarkenColor('#1c4e9b', 0)
		else
			startColor = LightenDarkenColor($(elem).data('color'), 0)

		colorGen = []
		colorGen.push startColor

		for item of valuesArr
			coefficient = 15
			if colorGen[parseInt(item)] == '#ffffff'
				colorGen[parseInt(item)] = startColor

			colorGen.push LightenDarkenColor(colorGen[parseInt(item)], coefficient)
		
		# colorGen.reverse()

		new Graph @, {
			labels: labelsArr
			names: indexArr
			captions: captionsArr
			text: textArr
			subText: subTextArr
			suffix: chartSuffix
			colors: colorGen
			values: valuesArr
			innerRadius: .67
			outerRadius: .8
		}
	return

graphInit('.graph')

