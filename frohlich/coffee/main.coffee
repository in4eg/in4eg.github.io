$ document
	.ready ->

		if $.fn.owlCarousel
			items = $('[data-slider]').data('slider').split(',')
			$('[data-slider]').owlCarousel
				rtl: on
				loop: on
				margin: 0
				nav: off
				loop: true,
				autoplay: true,
				slideTransition: 'linear',
				autoplayTimeout: 0,
				autoplaySpeed: 5700,
				autoplayHoverPause: false
				responsive:
					0: items: items[3]
					481: items: items[2]
					769: items: items[1]
					994: items: items[0]

		return


#*******************************************
#***CODE BELOW===> This is a custom owl carousel js, you can add it by pasting the code below into a js file and use it in your website.

###*
# Owl carousel
# @version 2.0.0
# @author Bartosz Wojciechowski
# @license The MIT License (MIT)
# @todo Lazy Load Icon
# @todo prevent animationend bubling
# @todo itemsScaleUp
# @todo Test Zepto
# @todo stagePadding calculate wrong active classes
###

(($, window, document) ->
	drag = undefined
	state = undefined
	e = undefined

	###*
	# Template for status information about drag and touch events.
	# @private
	###

	###*
	# Creates a carousel.
	# @class The Owl Carousel.
	# @public
	# @param {HTMLElement|jQuery} element - The element to create the carousel for.
	# @param {Object} [options] - The options
	###

	Owl = (element, options) ->

		###*
		# Current settings for the carousel.
		# @public
		###

		@settings = null

		###*
		# Current options set by the caller including defaults.
		# @public
		###

		@options = $.extend({}, Owl.Defaults, options)

		###*
		# Plugin element.
		# @public
		###

		@$element = $(element)

		###*
		# Caches informations about drag and touch events.
		###

		@drag = $.extend({}, drag)

		###*
		# Caches some status informations.
		# @protected
		###

		@state = $.extend({}, state)

		###*
		# @protected
		# @todo Must be documented
		###

		@e = $.extend({}, e)

		###*
		# References to the running plugins of this carousel.
		# @protected
		###

		@_plugins = {}

		###*
		# Currently suppressed events to prevent them from beeing retriggered.
		# @protected
		###

		@_supress = {}

		###*
		# Absolute current position.
		# @protected
		###

		@_current = null

		###*
		# Animation speed in milliseconds.
		# @protected
		###

		@_speed = null

		###*
		# Coordinates of all items in pixel.
		# @todo The name of this member is missleading.
		# @protected
		###

		@_coordinates = []

		###*
		# Current breakpoint.
		# @todo Real media queries would be nice.
		# @protected
		###

		@_breakpoint = null

		###*
		# Current width of the plugin element.
		###

		@_width = null

		###*
		# All real items.
		# @protected
		###

		@_items = []

		###*
		# All cloned items.
		# @protected
		###

		@_clones = []

		###*
		# Merge values of all items.
		# @todo Maybe this could be part of a plugin.
		# @protected
		###

		@_mergers = []

		###*
		# Invalidated parts within the update process.
		# @protected
		###

		@_invalidated = {}

		###*
		# Ordered list of workers for the update process.
		# @protected
		###

		@_pipe = []
		$.each Owl.Plugins, $.proxy(((key, plugin) ->
			@_plugins[key[0].toLowerCase() + key.slice(1)] = new plugin(this)
			return
		), this)
		$.each Owl.Pipe, $.proxy(((priority, worker) ->
			@_pipe.push
				'filter': worker.filter
				'run': $.proxy(worker.run, this)
			return
		), this)
		@setup()
		@initialize()
		return

	###*
	# Get touch/drag coordinats.
	# @private
	# @param {event} - mousedown/touchstart event
	# @returns {object} - Contains X and Y of current mouse/touch position
	###

	getTouches = (event) ->
		if event.touches != undefined
			return {
				x: event.touches[0].pageX
				y: event.touches[0].pageY
			}
		if event.touches == undefined
			if event.pageX != undefined
				return {
					x: event.pageX
					y: event.pageY
				}
			if event.pageX == undefined
				return {
					x: event.clientX
					y: event.clientY
				}
		return

	###*
	# Checks for CSS support.
	# @private
	# @param {Array} array - The CSS properties to check for.
	# @returns {Array} - Contains the supported CSS property name and its index or `false`.
	###

	isStyleSupported = (array) ->
		p = undefined
		s = undefined
		fake = document.createElement('div')
		list = array
		for p of list
			`p = p`
			s = list[p]
			if typeof fake.style[s] != 'undefined'
				fake = null
				return [
					s
					p
				]
		[ false ]

	###*
	# Checks for CSS transition support.
	# @private
	# @todo Realy bad design
	# @returns {Number}
	###

	isTransition = ->
		isStyleSupported([
			'transition'
			'WebkitTransition'
			'MozTransition'
			'OTransition'
		])[1]

	###*
	# Checks for CSS transform support.
	# @private
	# @returns {String} The supported property name or false.
	###

	isTransform = ->
		isStyleSupported([
			'transform'
			'WebkitTransform'
			'MozTransform'
			'OTransform'
			'msTransform'
		])[0]

	###*
	# Checks for CSS perspective support.
	# @private
	# @returns {String} The supported property name or false.
	###

	isPerspective = ->
		isStyleSupported([
			'perspective'
			'webkitPerspective'
			'MozPerspective'
			'OPerspective'
			'MsPerspective'
		])[0]

	###*
	# Checks wether touch is supported or not.
	# @private
	# @returns {Boolean}
	###

	isTouchSupport = ->
		'ontouchstart' of window or ! !navigator.msMaxTouchPoints

	###*
	# Checks wether touch is supported or not for IE.
	# @private
	# @returns {Boolean}
	###

	isTouchSupportIE = ->
		window.navigator.msPointerEnabled

	drag =
		start: 0
		startX: 0
		startY: 0
		current: 0
		currentX: 0
		currentY: 0
		offsetX: 0
		offsetY: 0
		distance: null
		startTime: 0
		endTime: 0
		updatedX: 0
		targetEl: null

	###*
	# Template for some status informations.
	# @private
	###

	state =
		isTouch: false
		isScrolling: false
		isSwiping: false
		direction: false
		inMotion: false

	###*
	# Event functions references.
	# @private
	###

	e =
		_onDragStart: null
		_onDragMove: null
		_onDragEnd: null
		_transitionEnd: null
		_resizer: null
		_responsiveCall: null
		_goToLoop: null
		_checkVisibile: null

	###*
	# Default options for the carousel.
	# @public
	###

	Owl.Defaults =
		items: 3
		loop: false
		center: false
		slideTransition: ''
		mouseDrag: true
		touchDrag: true
		pullDrag: true
		freeDrag: false
		margin: 0
		stagePadding: 0
		merge: false
		mergeFit: true
		autoWidth: false
		startPosition: 0
		rtl: false
		smartSpeed: 250
		fluidSpeed: false
		dragEndSpeed: false
		responsive: {}
		responsiveRefreshRate: 200
		responsiveBaseElement: window
		responsiveClass: false
		fallbackEasing: 'swing'
		info: false
		nestedItemSelector: false
		itemElement: 'div'
		stageElement: 'div'
		themeClass: 'owl-theme'
		baseClass: 'owl-carousel'
		itemClass: 'owl-item'
		centerClass: 'center'
		activeClass: 'active'

	###*
	# Enumeration for width.
	# @public
	# @readonly
	# @enum {String}
	###

	Owl.Width =
		Default: 'default'
		Inner: 'inner'
		Outer: 'outer'

	###*
	# Contains all registered plugins.
	# @public
	###

	Owl.Plugins = {}

	###*
	# Update pipe.
	###

	Owl.Pipe = [
		{
			filter: [
				'width'
				'items'
				'settings'
			]
			run: (cache) ->
				cache.current = @_items and @_items[@relative(@_current)]
				return

		}
		{
			filter: [
				'items'
				'settings'
			]
			run: ->
				cached = @_clones
				clones = @$stage.children('.cloned')
				if clones.length != cached.length or !@settings.loop and cached.length > 0
					@$stage.children('.cloned').remove()
					@_clones = []
				return

		}
		{
			filter: [
				'items'
				'settings'
			]
			run: ->
				i = undefined
				n = undefined
				clones = @_clones
				items = @_items
				delta = if @settings.loop then clones.length - Math.max(@settings.items * 2, 4) else 0
				i = 0
				n = Math.abs(delta / 2)
				while i < n
					if delta > 0
						@$stage.children().eq(items.length + clones.length - 1).remove()
						clones.pop()
						@$stage.children().eq(0).remove()
						clones.pop()
					else
						clones.push clones.length / 2
						@$stage.append items[clones[clones.length - 1]].clone().addClass('cloned')
						clones.push items.length - 1 - ((clones.length - 1) / 2)
						@$stage.prepend items[clones[clones.length - 1]].clone().addClass('cloned')
					i++
				return

		}
		{
			filter: [
				'width'
				'items'
				'settings'
			]
			run: ->
				rtl = if @settings.rtl then 1 else -1
				width = (@width() / @settings.items).toFixed(3)
				coordinate = 0
				merge = undefined
				i = undefined
				n = undefined
				@_coordinates = []
				i = 0
				n = @_clones.length + @_items.length
				while i < n
					merge = @_mergers[@relative(i)]
					merge = @settings.mergeFit and Math.min(merge, @settings.items) or merge
					coordinate += (if @settings.autoWidth then @_items[@relative(i)].width() + @settings.margin else width * merge) * rtl
					@_coordinates.push coordinate
					i++
				return

		}
		{
			filter: [
				'width'
				'items'
				'settings'
			]
			run: ->
				i = undefined
				n = undefined
				width = (@width() / @settings.items).toFixed(3)
				css = 
					'width': Math.abs(@_coordinates[@_coordinates.length - 1]) + @settings.stagePadding * 2
					'padding-left': @settings.stagePadding or ''
					'padding-right': @settings.stagePadding or ''
				@$stage.css css
				css = 'width': if @settings.autoWidth then 'auto' else width - (@settings.margin)
				css[if @settings.rtl then 'margin-left' else 'margin-right'] = @settings.margin
				if !@settings.autoWidth and $.grep(@_mergers, ((v) ->
						v > 1
					)).length > 0
					i = 0
					n = @_coordinates.length
					while i < n
						css.width = Math.abs(@_coordinates[i]) - Math.abs(@_coordinates[i - 1] or 0) - (@settings.margin)
						@$stage.children().eq(i).css css
						i++
				else
					@$stage.children().css css
				return

		}
		{
			filter: [
				'width'
				'items'
				'settings'
			]
			run: (cache) ->
				cache.current and @reset(@$stage.children().index(cache.current))
				return

		}
		{
			filter: [ 'position' ]
			run: ->
				@animate @coordinates(@_current)
				return

		}
		{
			filter: [
				'width'
				'position'
				'items'
				'settings'
			]
			run: ->
				rtl = if @settings.rtl then 1 else -1
				padding = @settings.stagePadding * 2
				begin = @coordinates(@current()) + padding
				end = begin + @width() * rtl
				inner = undefined
				outer = undefined
				matches = []
				i = undefined
				n = undefined
				i = 0
				n = @_coordinates.length
				while i < n
					inner = @_coordinates[i - 1] or 0
					outer = Math.abs(@_coordinates[i]) + padding * rtl
					if @op(inner, '<=', begin) and @op(inner, '>', end) or @op(outer, '<', begin) and @op(outer, '>', end)
						matches.push i
					i++
				@$stage.children('.' + @settings.activeClass).removeClass @settings.activeClass
				@$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass @settings.activeClass
				if @settings.center
					@$stage.children('.' + @settings.centerClass).removeClass @settings.centerClass
					@$stage.children().eq(@current()).addClass @settings.centerClass
				return

		}
	]

	###*
	# Initializes the carousel.
	# @protected
	###

	Owl::initialize = ->
		@trigger 'initialize'
		@$element.addClass(@settings.baseClass).addClass(@settings.themeClass).toggleClass 'owl-rtl', @settings.rtl
		# check support
		@browserSupport()
		if @settings.autoWidth and @state.imagesLoaded != true
			imgs = undefined
			nestedSelector = undefined
			width = undefined
			imgs = @$element.find('img')
			nestedSelector = if @settings.nestedItemSelector then '.' + @settings.nestedItemSelector else undefined
			width = @$element.children(nestedSelector).width()
			if imgs.length and width <= 0
				@preloadAutoWidthImages imgs
				return false
		@$element.addClass 'owl-loading'
		# create stage
		@$stage = $('<' + @settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">')
		# append stage
		@$element.append @$stage.parent()
		# append content
		@replace @$element.children().not(@$stage.parent())
		# set view width
		@_width = @$element.width()
		# update view
		@refresh()
		@$element.removeClass('owl-loading').addClass 'owl-loaded'
		# attach generic events
		@eventsCall()
		# attach generic events
		@internalEvents()
		# attach custom control events
		@addTriggerableEvents()
		@trigger 'initialized'
		return

	###*
	# Setups the current settings.
	# @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	# @todo Support for media queries by using `matchMedia` would be nice.
	# @public
	###

	Owl::setup = ->
		viewport = @viewport()
		overwrites = @options.responsive
		match = -1
		settings = null
		if !overwrites
			settings = $.extend({}, @options)
		else
			$.each overwrites, (breakpoint) ->
				if breakpoint <= viewport and breakpoint > match
					match = Number(breakpoint)
				return
			settings = $.extend({}, @options, overwrites[match])
			delete settings.responsive
			# responsive class
			if settings.responsiveClass
				@$element.attr('class', (i, c) ->
					c.replace /\b owl-responsive-\S+/g, ''
				).addClass 'owl-responsive-' + match
		if @settings == null or @_breakpoint != match
			@trigger 'change', property:
				name: 'settings'
				value: settings
			@_breakpoint = match
			@settings = settings
			@invalidate 'settings'
			@trigger 'changed', property:
				name: 'settings'
				value: @settings
		return

	###*
	# Updates option logic if necessery.
	# @protected
	###

	Owl::optionsLogic = ->
		# Toggle Center class
		@$element.toggleClass 'owl-center', @settings.center
		# if items number is less than in body
		if @settings.loop and @_items.length < @settings.items
			@settings.loop = false
		if @settings.autoWidth
			@settings.stagePadding = false
			@settings.merge = false
		return

	###*
	# Prepares an item before add.
	# @todo Rename event parameter `content` to `item`.
	# @protected
	# @returns {jQuery|HTMLElement} - The item container.
	###

	Owl::prepare = (item) ->
		event = @trigger('prepare', content: item)
		if !event.data
			event.data = $('<' + @settings.itemElement + '/>').addClass(@settings.itemClass).append(item)
		@trigger 'prepared', content: event.data
		event.data

	###*
	# Updates the view.
	# @public
	###

	Owl::update = ->
		i = 0
		n = @_pipe.length
		filter = $.proxy(((p) ->
			@[p]
		), @_invalidated)
		cache = {}
		while i < n
			if @_invalidated.all or $.grep(@_pipe[i].filter, filter).length > 0
				@_pipe[i].run cache
			i++
		@_invalidated = {}
		return

	###*
	# Gets the width of the view.
	# @public
	# @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	# @returns {Number} - The width of the view in pixel.
	###

	Owl::width = (dimension) ->
		dimension = dimension or Owl.Width.Default
		switch dimension
			when Owl.Width.Inner, Owl.Width.Outer
				return @_width
			else
				return @_width - (@settings.stagePadding * 2) + @settings.margin
		return

	###*
	# Refreshes the carousel primarily for adaptive purposes.
	# @public
	###

	Owl::refresh = ->
		if @_items.length == 0
			return false
		start = (new Date).getTime()
		@trigger 'refresh'
		@setup()
		@optionsLogic()
		# hide and show methods helps here to set a proper widths,
		# this prevents scrollbar to be calculated in stage width
		@$stage.addClass 'owl-refresh'
		@update()
		@$stage.removeClass 'owl-refresh'
		@state.orientation = window.orientation
		@watchVisibility()
		@trigger 'refreshed'
		return

	###*
	# Save internal event references and add event based functions.
	# @protected
	###

	Owl::eventsCall = ->
		# Save events references
		@e._onDragStart = $.proxy(((e) ->
			@onDragStart e
			return
		), this)
		@e._onDragMove = $.proxy(((e) ->
			@onDragMove e
			return
		), this)
		@e._onDragEnd = $.proxy(((e) ->
			@onDragEnd e
			return
		), this)
		@e._onResize = $.proxy(((e) ->
			@onResize e
			return
		), this)
		@e._transitionEnd = $.proxy(((e) ->
			@transitionEnd e
			return
		), this)
		@e._preventClick = $.proxy(((e) ->
			@preventClick e
			return
		), this)
		return

	###*
	# Checks window `resize` event.
	# @protected
	###

	Owl::onThrottledResize = ->
		window.clearTimeout @resizeTimer
		@resizeTimer = window.setTimeout(@e._onResize, @settings.responsiveRefreshRate)
		return

	###*
	# Checks window `resize` event.
	# @protected
	###

	Owl::onResize = ->
		if !@_items.length
			return false
		if @_width == @$element.width()
			return false
		if @trigger('resize').isDefaultPrevented()
			return false
		@_width = @$element.width()
		@invalidate 'width'
		@refresh()
		@trigger 'resized'
		return

	###*
	# Checks for touch/mouse drag event type and add run event handlers.
	# @protected
	###

	Owl::eventsRouter = (event) ->
		type = event.type
		if type == 'mousedown' or type == 'touchstart'
			@onDragStart event
		else if type == 'mousemove' or type == 'touchmove'
			@onDragMove event
		else if type == 'mouseup' or type == 'touchend'
			@onDragEnd event
		else if type == 'touchcancel'
			@onDragEnd event
		return

	###*
	# Checks for touch/mouse drag options and add necessery event handlers.
	# @protected
	###

	Owl::internalEvents = ->
		isTouch = isTouchSupport()
		isTouchIE = isTouchSupportIE()
		if @settings.mouseDrag
			@$stage.on 'mousedown', $.proxy(((event) ->
				@eventsRouter event
				return
			), this)
			@$stage.on 'dragstart', ->
				false

			@$stage.get(0).onselectstart = ->
				false

		else
			@$element.addClass 'owl-text-select-on'
		if @settings.touchDrag and !isTouchIE
			@$stage.on 'touchstart touchcancel', $.proxy(((event) ->
				@eventsRouter event
				return
			), this)
		# catch transitionEnd event
		if @transitionEndVendor
			@on @$stage.get(0), @transitionEndVendor, @e._transitionEnd, false
		# responsive
		if @settings.responsive != false
			@on window, 'resize', $.proxy(@onThrottledResize, this)
		return

	###*
	# Handles touchstart/mousedown event.
	# @protected
	# @param {Event} event - The event arguments.
	###

	Owl::onDragStart = (event) ->
		ev = undefined
		isTouchEvent = undefined
		pageX = undefined
		pageY = undefined
		animatedPos = undefined
		ev = event.originalEvent or event or window.event
		# prevent right click
		if ev.which == 3 or @state.isTouch
			return false
		if ev.type == 'mousedown'
			@$stage.addClass 'owl-grab'
		@trigger 'drag'
		@drag.startTime = (new Date).getTime()
		@speed 0
		@state.isTouch = true
		@state.isScrolling = false
		@state.isSwiping = false
		@drag.distance = 0
		pageX = getTouches(ev).x
		pageY = getTouches(ev).y
		# get stage position left
		@drag.offsetX = @$stage.position().left
		@drag.offsetY = @$stage.position().top
		if @settings.rtl
			@drag.offsetX = @$stage.position().left + @$stage.width() - @width() + @settings.margin
		# catch position // ie to fix
		if @state.inMotion and @support3d
			animatedPos = @getTransformProperty()
			@drag.offsetX = animatedPos
			@animate animatedPos
			@state.inMotion = true
		else if @state.inMotion and !@support3d
			@state.inMotion = false
			return false
		@drag.startX = pageX - (@drag.offsetX)
		@drag.startY = pageY - (@drag.offsetY)
		@drag.start = pageX - (@drag.startX)
		@drag.targetEl = ev.target or ev.srcElement
		@drag.updatedX = @drag.start
		# to do/check
		# prevent links and images dragging;
		if @drag.targetEl.tagName == 'IMG' or @drag.targetEl.tagName == 'A'
			@drag.targetEl.draggable = false
		$(document).on 'mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents', $.proxy(((event) ->
			@eventsRouter event
			return
		), this)
		return

	###*
	# Handles the touchmove/mousemove events.
	# @todo Simplify
	# @protected
	# @param {Event} event - The event arguments.
	###

	Owl::onDragMove = (event) ->
		ev = undefined
		isTouchEvent = undefined
		pageX = undefined
		pageY = undefined
		minValue = undefined
		maxValue = undefined
		pull = undefined
		if !@state.isTouch
			return
		if @state.isScrolling
			return
		ev = event.originalEvent or event or window.event
		pageX = getTouches(ev).x
		pageY = getTouches(ev).y
		# Drag Direction
		@drag.currentX = pageX - (@drag.startX)
		@drag.currentY = pageY - (@drag.startY)
		@drag.distance = @drag.currentX - (@drag.offsetX)
		# Check move direction
		if @drag.distance < 0
			@state.direction = if @settings.rtl then 'right' else 'left'
		else if @drag.distance > 0
			@state.direction = if @settings.rtl then 'left' else 'right'
		# Loop
		if @settings.loop
			if @op(@drag.currentX, '>', @coordinates(@minimum())) and @state.direction == 'right'
				@drag.currentX -= (@settings.center and @coordinates(0)) - @coordinates(@_items.length)
			else if @op(@drag.currentX, '<', @coordinates(@maximum())) and @state.direction == 'left'
				@drag.currentX += (@settings.center and @coordinates(0)) - @coordinates(@_items.length)
		else
			# pull
			minValue = if @settings.rtl then @coordinates(@maximum()) else @coordinates(@minimum())
			maxValue = if @settings.rtl then @coordinates(@minimum()) else @coordinates(@maximum())
			pull = if @settings.pullDrag then @drag.distance / 5 else 0
			@drag.currentX = Math.max(Math.min(@drag.currentX, minValue + pull), maxValue + pull)
		# Lock browser if swiping horizontal
		if @drag.distance > 8 or @drag.distance < -8
			if ev.preventDefault != undefined
				ev.preventDefault()
			else
				ev.returnValue = false
			@state.isSwiping = true
		@drag.updatedX = @drag.currentX
		# Lock Owl if scrolling
		if (@drag.currentY > 16 or @drag.currentY < -16) and @state.isSwiping == false
			@state.isScrolling = true
			@drag.updatedX = @drag.start
		@animate @drag.updatedX
		return

	###*
	# Handles the touchend/mouseup events.
	# @protected
	###

	Owl::onDragEnd = (event) ->
		compareTimes = undefined
		distanceAbs = undefined
		closest = undefined
		if !@state.isTouch
			return
		if event.type == 'mouseup'
			@$stage.removeClass 'owl-grab'
		@trigger 'dragged'
		# prevent links and images dragging;
		@drag.targetEl.removeAttribute 'draggable'
		# remove drag event listeners
		@state.isTouch = false
		@state.isScrolling = false
		@state.isSwiping = false
		# to check
		if @drag.distance == 0 and @state.inMotion != true
			@state.inMotion = false
			return false
		# prevent clicks while scrolling
		@drag.endTime = (new Date).getTime()
		compareTimes = @drag.endTime - (@drag.startTime)
		distanceAbs = Math.abs(@drag.distance)
		# to test
		if distanceAbs > 3 or compareTimes > 300
			@removeClick @drag.targetEl
		closest = @closest(@drag.updatedX)
		@speed @settings.dragEndSpeed or @settings.smartSpeed
		@current closest
		@invalidate 'position'
		@update()
		# if pullDrag is off then fire transitionEnd event manually when stick
		# to border
		if !@settings.pullDrag and @drag.updatedX == @coordinates(closest)
			@transitionEnd()
		@drag.distance = 0
		$(document).off '.owl.dragEvents'
		return

	###*
	# Attaches `preventClick` to disable link while swipping.
	# @protected
	# @param {HTMLElement} [target] - The target of the `click` event.
	###

	Owl::removeClick = (target) ->
		@drag.targetEl = target
		$(target).on 'click.preventClick', @e._preventClick
		# to make sure click is removed:
		window.setTimeout (->
			$(target).off 'click.preventClick'
			return
		), 300
		return

	###*
	# Suppresses click event.
	# @protected
	# @param {Event} ev - The event arguments.
	###

	Owl::preventClick = (ev) ->
		if ev.preventDefault
			ev.preventDefault()
		else
			ev.returnValue = false
		if ev.stopPropagation
			ev.stopPropagation()
		$(ev.target).off 'click.preventClick'
		return

	###*
	# Catches stage position while animate (only CSS3).
	# @protected
	# @returns
	###

	Owl::getTransformProperty = ->
		transform = undefined
		matrix3d = undefined
		transform = window.getComputedStyle(@$stage.get(0), null).getPropertyValue(@vendorName + 'transform')
		# var transform = this.$stage.css(this.vendorName + 'transform')
		transform = transform.replace(/matrix(3d)?\(|\)/g, '').split(',')
		matrix3d = transform.length == 16
		if matrix3d != true then transform[4] else transform[12]

	###*
	# Gets absolute position of the closest item for a coordinate.
	# @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	# @protected
	# @param {Number} coordinate - The coordinate in pixel.
	# @return {Number} - The absolute position of the closest item.
	###

	Owl::closest = (coordinate) ->
		position = -1
		pull = 30
		width = @width()
		coordinates = @coordinates()
		if !@settings.freeDrag
			# check closest item
			$.each coordinates, $.proxy(((index, value) ->
				if coordinate > value - pull and coordinate < value + pull
					position = index
				else if @op(coordinate, '<', value) and @op(coordinate, '>', coordinates[index + 1] or value - width)
					position = if @state.direction == 'left' then index + 1 else index
				position == -1
			), this)
		if !@settings.loop
			# non loop boundries
			if @op(coordinate, '>', coordinates[@minimum()])
				position = coordinate = @minimum()
			else if @op(coordinate, '<', coordinates[@maximum()])
				position = coordinate = @maximum()
		position

	###*
	# Animates the stage.
	# @public
	# @param {Number} coordinate - The coordinate in pixels.
	###

	Owl::animate = (coordinate) ->
		@trigger 'translate'
		@state.inMotion = @speed() > 0
		if @support3d
			@$stage.css
				transform: 'translate3d(' + coordinate + 'px' + ',0px, 0px)'
				transition: @speed() / 1000 + 's ' + @settings.slideTransition
		else if @state.isTouch
			@$stage.css left: coordinate + 'px'
		else
			@$stage.animate { left: coordinate }, @speed() / 1000, @settings.fallbackEasing, $.proxy((->
				if @state.inMotion
					@transitionEnd()
				return
			), this)
		return

	###*
	# Sets the absolute position of the current item.
	# @public
	# @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	# @returns {Number} - The absolute position of the current item.
	###

	Owl::current = (position) ->
		if position == undefined
			return @_current
		if @_items.length == 0
			return undefined
		position = @normalize(position)
		if @_current != position
			event = @trigger('change', property:
				name: 'position'
				value: position)
			if event.data != undefined
				position = @normalize(event.data)
			@_current = position
			@invalidate 'position'
			@trigger 'changed', property:
				name: 'position'
				value: @_current
		@_current

	###*
	# Invalidates the given part of the update routine.
	# @param {String} part - The part to invalidate.
	###

	Owl::invalidate = (part) ->
		@_invalidated[part] = true
		return

	###*
	# Resets the absolute position of the current item.
	# @public
	# @param {Number} position - The absolute position of the new item.
	###

	Owl::reset = (position) ->
		position = @normalize(position)
		if position == undefined
			return
		@_speed = 0
		@_current = position
		@suppress [
			'translate'
			'translated'
		]
		@animate @coordinates(position)
		@release [
			'translate'
			'translated'
		]
		return

	###*
	# Normalizes an absolute or a relative position for an item.
	# @public
	# @param {Number} position - The absolute or relative position to normalize.
	# @param {Boolean} [relative=false] - Whether the given position is relative or not.
	# @returns {Number} - The normalized position.
	###

	Owl::normalize = (position, relative) ->
		n = if relative then @_items.length else @_items.length + @_clones.length
		if !$.isNumeric(position) or n < 1
			return undefined
		if @_clones.length
			position = (position % n + n) % n
		else
			position = Math.max(@minimum(relative), Math.min(@maximum(relative), position))
		position

	###*
	# Converts an absolute position for an item into a relative position.
	# @public
	# @param {Number} position - The absolute position to convert.
	# @returns {Number} - The converted position.
	###

	Owl::relative = (position) ->
		position = @normalize(position)
		position = position - (@_clones.length / 2)
		@normalize position, true

	###*
	# Gets the maximum position for an item.
	# @public
	# @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	# @returns {Number}
	###

	Owl::maximum = (relative) ->
		maximum = undefined
		width = undefined
		i = 0
		coordinate = undefined
		settings = @settings
		if relative
			return @_items.length - 1
		if !settings.loop and settings.center
			maximum = @_items.length - 1
		else if !settings.loop and !settings.center
			maximum = @_items.length - (settings.items)
		else if settings.loop or settings.center
			maximum = @_items.length + settings.items
		else if settings.autoWidth or settings.merge
			revert = if settings.rtl then 1 else -1
			width = @$stage.width() - @$element.width()
			while coordinate = @coordinates(i)
				if coordinate * revert >= width
					break
				maximum = ++i
		else
			throw 'Can not detect maximum absolute position.'
		maximum

	###*
	# Gets the minimum position for an item.
	# @public
	# @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	# @returns {Number}
	###

	Owl::minimum = (relative) ->
		if relative
			return 0
		@_clones.length / 2

	###*
	# Gets an item at the specified relative position.
	# @public
	# @param {Number} [position] - The relative position of the item.
	# @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	###

	Owl::items = (position) ->
		if position == undefined
			return @_items.slice()
		position = @normalize(position, true)
		@_items[position]

	###*
	# Gets an item at the specified relative position.
	# @public
	# @param {Number} [position] - The relative position of the item.
	# @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	###

	Owl::mergers = (position) ->
		if position == undefined
			return @_mergers.slice()
		position = @normalize(position, true)
		@_mergers[position]

	###*
	# Gets the absolute positions of clones for an item.
	# @public
	# @param {Number} [position] - The relative position of the item.
	# @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	###

	Owl::clones = (position) ->
		odd = @_clones.length / 2
		even = odd + @_items.length

		map = (index) ->
			if index % 2 == 0 then even + index / 2 else odd - ((index + 1) / 2)

		if position == undefined
			return $.map(@_clones, (v, i) ->
				map i
			)
		$.map @_clones, (v, i) ->
			if v == position then map(i) else null

	###*
	# Sets the current animation speed.
	# @public
	# @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	# @returns {Number} - The current animation speed in milliseconds.
	###

	Owl::speed = (speed) ->
		if speed != undefined
			@_speed = speed
		@_speed

	###*
	# Gets the coordinate of an item.
	# @todo The name of this method is missleanding.
	# @public
	# @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	# @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	###

	Owl::coordinates = (position) ->
		coordinate = null
		if position == undefined
			return $.map(@_coordinates, $.proxy(((coordinate, index) ->
				@coordinates index
			), this))
		if @settings.center
			coordinate = @_coordinates[position]
			coordinate += (@width() - coordinate + (@_coordinates[position - 1] or 0)) / 2 * (if @settings.rtl then -1 else 1)
		else
			coordinate = @_coordinates[position - 1] or 0
		coordinate

	###*
	# Calculates the speed for a translation.
	# @protected
	# @param {Number} from - The absolute position of the start item.
	# @param {Number} to - The absolute position of the target item.
	# @param {Number} [factor=undefined] - The time factor in milliseconds.
	# @returns {Number} - The time in milliseconds for the translation.
	###

	Owl::duration = (from, to, factor) ->
		Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs(factor or @settings.smartSpeed)

	###*
	# Slides to the specified item.
	# @public
	# @param {Number} position - The position of the item.
	# @param {Number} [speed] - The time in milliseconds for the transition.
	###

	Owl::to = (position, speed) ->
		if @settings.loop
			distance = position - @relative(@current())
			revert = @current()
			before = @current()
			after = @current() + distance
			direction = if before - after < 0 then true else false
			items = @_clones.length + @_items.length
			if after < @settings.items and direction == false
				revert = before + @_items.length
				@reset revert
			else if after >= items - (@settings.items) and direction == true
				revert = before - (@_items.length)
				@reset revert
			window.clearTimeout @e._goToLoop
			@e._goToLoop = window.setTimeout($.proxy((->
				@speed @duration(@current(), revert + distance, speed)
				@current revert + distance
				@update()
				return
			), this), 30)
		else
			@speed @duration(@current(), position, speed)
			@current position
			@update()
		return

	###*
	# Slides to the next item.
	# @public
	# @param {Number} [speed] - The time in milliseconds for the transition.
	###

	Owl::next = (speed) ->
		speed = speed or false
		@to @relative(@current()) + 1, speed
		return

	###*
	# Slides to the previous item.
	# @public
	# @param {Number} [speed] - The time in milliseconds for the transition.
	###

	Owl::prev = (speed) ->
		speed = speed or false
		@to @relative(@current()) - 1, speed
		return

	###*
	# Handles the end of an animation.
	# @protected
	# @param {Event} event - The event arguments.
	###

	Owl::transitionEnd = (event) ->
		# if css2 animation then event object is undefined
		if event != undefined
			event.stopPropagation()
			# Catch only owl-stage transitionEnd event
			if (event.target or event.srcElement or event.originalTarget) != @$stage.get(0)
				return false
		@state.inMotion = false
		@trigger 'translated'
		return

	###*
	# Gets viewport width.
	# @protected
	# @return {Number} - The width in pixel.
	###

	Owl::viewport = ->
		width = undefined
		if @options.responsiveBaseElement != window
			width = $(@options.responsiveBaseElement).width()
		else if window.innerWidth
			width = window.innerWidth
		else if document.documentElement and document.documentElement.clientWidth
			width = document.documentElement.clientWidth
		else
			throw 'Can not detect viewport width.'
		width

	###*
	# Replaces the current content.
	# @public
	# @param {HTMLElement|jQuery|String} content - The new content.
	###

	Owl::replace = (content) ->
		@$stage.empty()
		@_items = []
		if content
			content = if content instanceof jQuery then content else $(content)
		if @settings.nestedItemSelector
			content = content.find('.' + @settings.nestedItemSelector)
		content.filter(->
			@nodeType == 1
		).each $.proxy(((index, item) ->
			item = @prepare(item)
			@$stage.append item
			@_items.push item
			@_mergers.push item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 or 1
			return
		), this)
		@reset if $.isNumeric(@settings.startPosition) then @settings.startPosition else 0
		@invalidate 'items'
		return

	###*
	# Adds an item.
	# @todo Use `item` instead of `content` for the event arguments.
	# @public
	# @param {HTMLElement|jQuery|String} content - The item content to add.
	# @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	###

	Owl::add = (content, position) ->
		position = if position == undefined then @_items.length else @normalize(position, true)
		@trigger 'add',
			content: content
			position: position
		if @_items.length == 0 or position == @_items.length
			@$stage.append content
			@_items.push content
			@_mergers.push content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 or 1
		else
			@_items[position].before content
			@_items.splice position, 0, content
			@_mergers.splice position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 or 1
		@invalidate 'items'
		@trigger 'added',
			content: content
			position: position
		return

	###*
	# Removes an item by its position.
	# @todo Use `item` instead of `content` for the event arguments.
	# @public
	# @param {Number} position - The relative position of the item to remove.
	###

	Owl::remove = (position) ->
		position = @normalize(position, true)
		if position == undefined
			return
		@trigger 'remove',
			content: @_items[position]
			position: position
		@_items[position].remove()
		@_items.splice position, 1
		@_mergers.splice position, 1
		@invalidate 'items'
		@trigger 'removed',
			content: null
			position: position
		return

	###*
	# Adds triggerable events.
	# @protected
	###

	Owl::addTriggerableEvents = ->
		handler = $.proxy(((callback, event) ->
			$.proxy ((e) ->
				if e.relatedTarget != this
					@suppress [ event ]
					callback.apply this, [].slice.call(arguments, 1)
					@release [ event ]
				return
			), this
		), this)
		$.each {
			'next': @next
			'prev': @prev
			'to': @to
			'destroy': @destroy
			'refresh': @refresh
			'replace': @replace
			'add': @add
			'remove': @remove
		}, $.proxy(((event, callback) ->
			@$element.on event + '.owl.carousel', handler(callback, event + '.owl.carousel')
			return
		), this)
		return

	###*
	# Watches the visibility of the carousel element.
	# @protected
	###

	Owl::watchVisibility = ->
		# test on zepto

		isElVisible = (el) ->
			el.offsetWidth > 0 and el.offsetHeight > 0

		checkVisible = ->
			if isElVisible(@$element.get(0))
				@$element.removeClass 'owl-hidden'
				@refresh()
				window.clearInterval @e._checkVisibile
			return

		if !isElVisible(@$element.get(0))
			@$element.addClass 'owl-hidden'
			window.clearInterval @e._checkVisibile
			@e._checkVisibile = window.setInterval($.proxy(checkVisible, this), 500)
		return

	###*
	# Preloads images with auto width.
	# @protected
	# @todo Still to test
	###

	Owl::preloadAutoWidthImages = (imgs) ->
		loaded = undefined
		that = undefined
		$el = undefined
		img = undefined
		loaded = 0
		that = this
		imgs.each (i, el) ->
			$el = $(el)
			img = new Image

			img.onload = ->
				loaded++
				$el.attr 'src', img.src
				$el.css 'opacity', 1
				if loaded >= imgs.length
					that.state.imagesLoaded = true
					that.initialize()
				return

			img.src = $el.attr('src') or $el.attr('data-src') or $el.attr('data-src-retina')
			return
		return

	###*
	# Destroys the carousel.
	# @public
	###

	Owl::destroy = ->
		if @$element.hasClass(@settings.themeClass)
			@$element.removeClass @settings.themeClass
		if @settings.responsive != false
			$(window).off 'resize.owl.carousel'
		if @transitionEndVendor
			@off @$stage.get(0), @transitionEndVendor, @e._transitionEnd
		for i of @_plugins
			@_plugins[i].destroy()
		if @settings.mouseDrag or @settings.touchDrag
			@$stage.off 'mousedown touchstart touchcancel'
			$(document).off '.owl.dragEvents'

			@$stage.get(0).onselectstart = ->

			@$stage.off 'dragstart', ->
				false
		# remove event handlers in the ".owl.carousel" namespace
		@$element.off '.owl'
		@$stage.children('.cloned').remove()
		@e = null
		@$element.removeData 'owlCarousel'
		@$stage.children().contents().unwrap()
		@$stage.children().unwrap()
		@$stage.unwrap()
		return

	###*
	# Operators to calculate right-to-left and left-to-right.
	# @protected
	# @param {Number} [a] - The left side operand.
	# @param {String} [o] - The operator.
	# @param {Number} [b] - The right side operand.
	###

	Owl::op = (a, o, b) ->
		rtl = @settings.rtl
		switch o
			when '<'
				return if rtl then a > b else a < b
			when '>'
				return if rtl then a < b else a > b
			when '>='
				return if rtl then a <= b else a >= b
			when '<='
				return if rtl then a >= b else a <= b
			else
				break
		return

	###*
	# Attaches to an internal event.
	# @protected
	# @param {HTMLElement} element - The event source.
	# @param {String} event - The event name.
	# @param {Function} listener - The event handler to attach.
	# @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	###

	Owl::on = (element, event, listener, capture) ->
		if element.addEventListener
			element.addEventListener event, listener, capture
		else if element.attachEvent
			element.attachEvent 'on' + event, listener
		return

	###*
	# Detaches from an internal event.
	# @protected
	# @param {HTMLElement} element - The event source.
	# @param {String} event - The event name.
	# @param {Function} listener - The attached event handler to detach.
	# @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	###

	Owl::off = (element, event, listener, capture) ->
		if element.removeEventListener
			element.removeEventListener event, listener, capture
		else if element.detachEvent
			element.detachEvent 'on' + event, listener
		return

	###*
	# Triggers an public event.
	# @protected
	# @param {String} name - The event name.
	# @param {*} [data=null] - The event data.
	# @param {String} [namespace=.owl.carousel] - The event namespace.
	# @returns {Event} - The event arguments.
	###

	Owl::trigger = (name, data, namespace) ->
		status = item:
			count: @_items.length
			index: @current()
		handler = $.camelCase($.grep([
			'on'
			name
			namespace
		], (v) ->
			v
		).join('-').toLowerCase())
		event = $.Event([
			name
			'owl'
			namespace or 'carousel'
		].join('.').toLowerCase(), $.extend({ relatedTarget: this }, status, data))
		if !@_supress[name]
			$.each @_plugins, (name, plugin) ->
				if plugin.onTrigger
					plugin.onTrigger event
				return
			@$element.trigger event
			if @settings and typeof @settings[handler] == 'function'
				@settings[handler].apply this, event
		event

	###*
	# Suppresses events.
	# @protected
	# @param {Array.<String>} events - The events to suppress.
	###

	Owl::suppress = (events) ->
		$.each events, $.proxy(((index, event) ->
			@_supress[event] = true
			return
		), this)
		return

	###*
	# Releases suppressed events.
	# @protected
	# @param {Array.<String>} events - The events to release.
	###

	Owl::release = (events) ->
		$.each events, $.proxy(((index, event) ->
			delete @_supress[event]
			return
		), this)
		return

	###*
	# Checks the availability of some browser features.
	# @protected
	###

	Owl::browserSupport = ->
		@support3d = isPerspective()
		if @support3d
			@transformVendor = isTransform()
			# take transitionend event name by detecting transition
			endVendors = [
				'transitionend'
				'webkitTransitionEnd'
				'transitionend'
				'oTransitionEnd'
			]
			@transitionEndVendor = endVendors[isTransition()]
			# take vendor name from transform name
			@vendorName = @transformVendor.replace(/Transform/i, '')
			@vendorName = if @vendorName != '' then '-' + @vendorName.toLowerCase() + '-' else ''
		@state.orientation = window.orientation
		return

	###*
	# The jQuery Plugin for the Owl Carousel
	# @public
	###

	$.fn.owlCarousel = (options) ->
		@each ->
			if !$(this).data('owlCarousel')
				$(this).data 'owlCarousel', new Owl(this, options)
			return

	###*
	# The constructor for the jQuery Plugin
	# @public
	###

	$.fn.owlCarousel.Constructor = Owl
	return
) window.Zepto or window.jQuery, window, document

###*
# Lazy Plugin
# @version 2.0.0
# @author Bartosz Wojciechowski
# @license The MIT License (MIT)
###

(($, window, document) ->

	###*
	# Creates the lazy plugin.
	# @class The Lazy Plugin
	# @param {Owl} carousel - The Owl Carousel
	###

	Lazy = (carousel) ->

		###*
		# Reference to the core.
		# @protected
		# @type {Owl}
		###

		@_core = carousel

		###*
		# Already loaded items.
		# @protected
		# @type {Array.<jQuery>}
		###

		@_loaded = []

		###*
		# Event handlers.
		# @protected
		# @type {Object}
		###

		@_handlers = 'initialized.owl.carousel change.owl.carousel': $.proxy(((e) ->
			if !e.namespace
				return
			if !@_core.settings or !@_core.settings.lazyLoad
				return
			if e.property and e.property.name == 'position' or e.type == 'initialized'
				settings = @_core.settings
				n = settings.center and Math.ceil(settings.items / 2) or settings.items
				i = settings.center and n * -1 or 0
				position = (e.property and e.property.value or @_core.current()) + i
				clones = @_core.clones().length
				load = $.proxy(((i, v) ->
					@load v
					return
				), this)
				while i++ < n
					@load clones / 2 + @_core.relative(position)
					clones and $.each(@_core.clones(@_core.relative(position++)), load)
			return
		), this)
		# set the default options
		@_core.options = $.extend({}, Lazy.Defaults, @_core.options)
		# register event handler
		@_core.$element.on @_handlers
		return

	###*
	# Default options.
	# @public
	###

	Lazy.Defaults = lazyLoad: false

	###*
	# Loads all resources of an item at the specified position.
	# @param {Number} position - The absolute position of the item.
	# @protected
	###

	Lazy::load = (position) ->
		$item = @_core.$stage.children().eq(position)
		$elements = $item and $item.find('.owl-lazy')
		if !$elements or $.inArray($item.get(0), @_loaded) > -1
			return
		$elements.each $.proxy(((index, element) ->
			$element = $(element)
			image = undefined
			url = window.devicePixelRatio > 1 and $element.attr('data-src-retina') or $element.attr('data-src')
			@_core.trigger 'load', {
				element: $element
				url: url
			}, 'lazy'
			if $element.is('img')
				$element.one('load.owl.lazy', $.proxy((->
					$element.css 'opacity', 1
					@_core.trigger 'loaded', {
						element: $element
						url: url
					}, 'lazy'
					return
				), this)).attr 'src', url
			else
				image = new Image
				image.onload = $.proxy((->
					$element.css
						'background-image': 'url(' + url + ')'
						'opacity': '1'
					@_core.trigger 'loaded', {
						element: $element
						url: url
					}, 'lazy'
					return
				), this)
				image.src = url
			return
		), this)
		@_loaded.push $item.get(0)
		return

	###*
	# Destroys the plugin.
	# @public
	###

	Lazy::destroy = ->
		handler = undefined
		property = undefined
		for handler of @handlers
			`handler = handler`
			@_core.$element.off handler, @handlers[handler]
		for property of Object.getOwnPropertyNames(this)
			`property = property`
			typeof @[property] != 'function' and (@[property] = null)
		return

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy
	return
) window.Zepto or window.jQuery, window, document

###*
# AutoHeight Plugin
# @version 2.0.0
# @author Bartosz Wojciechowski
# @license The MIT License (MIT)
###

(($, window, document) ->

	###*
	# Creates the auto height plugin.
	# @class The Auto Height Plugin
	# @param {Owl} carousel - The Owl Carousel
	###

	AutoHeight = (carousel) ->

		###*
		# Reference to the core.
		# @protected
		# @type {Owl}
		###

		@_core = carousel

		###*
		# All event handlers.
		# @protected
		# @type {Object}
		###

		@_handlers =
			'initialized.owl.carousel': $.proxy((->
				if @_core.settings.autoHeight
					@update()
				return
			), this)
			'changed.owl.carousel': $.proxy(((e) ->
				if @_core.settings.autoHeight and e.property.name == 'position'
					@update()
				return
			), this)
			'loaded.owl.lazy': $.proxy(((e) ->
				if @_core.settings.autoHeight and e.element.closest('.' + @_core.settings.itemClass) == @_core.$stage.children().eq(@_core.current())
					@update()
				return
			), this)
		# set default options
		@_core.options = $.extend({}, AutoHeight.Defaults, @_core.options)
		# register event handlers
		@_core.$element.on @_handlers
		return

	###*
	# Default options.
	# @public
	###

	AutoHeight.Defaults =
		autoHeight: false
		autoHeightClass: 'owl-height'

	###*
	# Updates the view.
	###

	AutoHeight::update = ->
		@_core.$stage.parent().height(@_core.$stage.children().eq(@_core.current()).height()).addClass @_core.settings.autoHeightClass
		return

	AutoHeight::destroy = ->
		handler = undefined
		property = undefined
		for handler of @_handlers
			`handler = handler`
			@_core.$element.off handler, @_handlers[handler]
		for property of Object.getOwnPropertyNames(this)
			`property = property`
			typeof @[property] != 'function' and (@[property] = null)
		return

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight
	return
) window.Zepto or window.jQuery, window, document

###*
# Video Plugin
# @version 2.0.0
# @author Bartosz Wojciechowski
# @license The MIT License (MIT)
###

(($, window, document) ->

	###*
	# Creates the video plugin.
	# @class The Video Plugin
	# @param {Owl} carousel - The Owl Carousel
	###

	Video = (carousel) ->

		###*
		# Reference to the core.
		# @protected
		# @type {Owl}
		###

		@_core = carousel

		###*
		# Cache all video URLs.
		# @protected
		# @type {Object}
		###

		@_videos = {}

		###*
		# Current playing item.
		# @protected
		# @type {jQuery}
		###

		@_playing = null

		###*
		# Whether this is in fullscreen or not.
		# @protected
		# @type {Boolean}
		###

		@_fullscreen = false

		###*
		# All event handlers.
		# @protected
		# @type {Object}
		###

		@_handlers =
			'resize.owl.carousel': $.proxy(((e) ->
				if @_core.settings.video and !@isInFullScreen()
					e.preventDefault()
				return
			), this)
			'refresh.owl.carousel changed.owl.carousel': $.proxy(((e) ->
				if @_playing
					@stop()
				return
			), this)
			'prepared.owl.carousel': $.proxy(((e) ->
				$element = $(e.content).find('.owl-video')
				if $element.length
					# $element.css('display', 'none');
					@fetch $element, $(e.content)
				return
			), this)
		# set default options
		@_core.options = $.extend({}, Video.Defaults, @_core.options)
		# register event handlers
		@_core.$element.on @_handlers
		@_core.$element.on 'click.owl.video', '.owl-video-play-icon', $.proxy(((e) ->
			console.log 'clicked'
			@play e
			return
		), this)
		return

	###*
	# Default options.
	# @public
	###

	Video.Defaults =
		video: false
		videoHeight: false
		videoWidth: false

	###*
	# Gets the video ID and the type (YouTube/Vimeo only).
	# @protected
	# @param {jQuery} target - The target containing the video data.
	# @param {jQuery} item - The item containing the video.
	###

	Video::fetch = (target, item) ->
		type = if target.attr('data-vimeo-id') then 'vimeo' else 'youtube'
		id = target.attr('data-vimeo-id') or target.attr('data-youtube-id')
		width = target.attr('data-width') or @_core.settings.videoWidth
		height = target.attr('data-height') or @_core.settings.videoHeight
		url = target.attr('href')
		if url
			id = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/)
			if id[3].indexOf('youtu') > -1
				type = 'youtube'
			else if id[3].indexOf('vimeo') > -1
				type = 'vimeo'
			else
				throw new Error('Video URL not supported.')
			id = id[6]
		else
			throw new Error('Missing video URL.')
		@_videos[url] =
			type: type
			id: id
			width: width
			height: height
		item.attr 'data-video', url
		@thumbnail target, @_videos[url]
		return

	###*
	# Creates video thumbnail.
	# @protected
	# @param {jQuery} target - The target containing the video data.
	# @param {Object} info - The video info object.
	# @see `fetch`
	###

	Video::thumbnail = (target, video) ->
		tnLink = undefined
		icon = undefined
		path = undefined
		dimensions = if video.width and video.height then 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' else ''
		customTn = target.find('img')
		srcType = 'src'
		lazyClass = ''
		settings = @_core.settings

		create = (path) ->
			icon = '<div class="owl-video-play-icon"></div>'
			if settings.lazyLoad
				tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>'
			else
				tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>'
			target.after tnLink
			target.after icon
			return

		# wrap video content into owl-video-wrapper div
		target.wrap '<div class="owl-video-wrapper"' + dimensions + '></div>'
		if @_core.settings.lazyLoad
			srcType = 'data-src'
			lazyClass = 'owl-lazy'
		# custom thumbnail
		if customTn.length
			create customTn.attr(srcType)
			# customTn.remove();
			return false
		if video.type == 'youtube'
			path = 'http://img.youtube.com/vi/' + video.id + '/hqdefault.jpg'
			create path
		else if video.type == 'vimeo'
			$.ajax
				type: 'GET'
				url: 'http://vimeo.com/api/v2/video/' + video.id + '.json'
				jsonp: 'callback'
				dataType: 'jsonp'
				success: (data) ->
					path = data[0].thumbnail_large
					create path
					return
		return

	###*
	# Stops the current video.
	# @public
	###

	Video::stop = ->
		@_core.trigger 'stop', null, 'video'
		@_playing.find('.owl-video-frame').remove()
		@_playing.find('img').css 'display', 'block'
		@_playing.removeClass 'owl-video-playing'
		@_playing = null
		return

	###*
	# Starts the current video.
	# @public
	# @param {Event} ev - The event arguments.
	###

	Video::play = (ev) ->
		target = $(ev.target or ev.srcElement)
		item = target.closest('.' + @_core.settings.itemClass)
		video = @_videos[item.attr('data-video')]
		width = video.width or '100%'
		height = video.height or @_core.$stage.height()
		html = undefined
		wrap = undefined
		target.prev().find('img').css 'display', 'none'
		@_core.trigger 'play', null, 'video'
		if @_playing
			@stop()
		if video.type == 'youtube'
			html = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/' + video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>'
		else if video.type == 'vimeo'
			html = '<iframe src="http://player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width + '" height="' + height + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
		item.addClass 'owl-video-playing'
		@_playing = item
		wrap = $('<div style="height:' + height + 'px; width:' + width + 'px" class="owl-video-frame">' + html + '</div>')
		target.after wrap
		return

	###*
	# Checks whether an video is currently in full screen mode or not.
	# @todo Bad style because looks like a readonly method but changes members.
	# @protected
	# @returns {Boolean}
	###

	Video::isInFullScreen = ->
		# if Vimeo Fullscreen mode
		element = document.fullscreenElement or document.mozFullScreenElement or document.webkitFullscreenElement
		if element and $(element).parent().hasClass('owl-video-frame')
			@_core.speed 0
			@_fullscreen = true
		if element and @_fullscreen and @_playing
			return false
		# comming back from fullscreen
		if @_fullscreen
			@_fullscreen = false
			return false
		# check full screen mode and window orientation
		if @_playing
			if @_core.state.orientation != window.orientation
				@_core.state.orientation = window.orientation
				return false
		true

	###*
	# Destroys the plugin.
	###

	Video::destroy = ->
		handler = undefined
		property = undefined
		@_core.$element.off 'click.owl.video'
		for handler of @_handlers
			`handler = handler`
			@_core.$element.off handler, @_handlers[handler]
		for property of Object.getOwnPropertyNames(this)
			`property = property`
			typeof @[property] != 'function' and (@[property] = null)
		return

	$.fn.owlCarousel.Constructor.Plugins.Video = Video
	return
) window.Zepto or window.jQuery, window, document

###*
# Animate Plugin
# @version 2.0.0
# @author Bartosz Wojciechowski
# @license The MIT License (MIT)
###

(($, window, document) ->

	###*
	# Creates the animate plugin.
	# @class The Navigation Plugin
	# @param {Owl} scope - The Owl Carousel
	###

	Animate = (scope) ->
		@core = scope
		@core.options = $.extend({}, Animate.Defaults, @core.options)
		@swapping = true
		@previous = undefined
		@next = undefined
		@handlers =
			'change.owl.carousel': $.proxy(((e) ->
				if e.property.name == 'position'
					@previous = @core.current()
					@next = e.property.value
				return
			), this)
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(((e) ->
				@swapping = e.type == 'translated'
				return
			), this)
			'translate.owl.carousel': $.proxy(((e) ->
				if @swapping and (@core.options.animateOut or @core.options.animateIn)
					@swap()
				return
			), this)
		@core.$element.on @handlers
		return

	###*
	# Default options.
	# @public
	###

	Animate.Defaults =
		animateOut: false
		animateIn: false

	###*
	# Toggles the animation classes whenever an translations starts.
	# @protected
	# @returns {Boolean|undefined}
	###

	Animate::swap = ->
		if @core.settings.items != 1 or !@core.support3d
			return
		@core.speed 0
		left = undefined
		clear = $.proxy(@clear, this)
		previous = @core.$stage.children().eq(@previous)
		next = @core.$stage.children().eq(@next)
		incoming = @core.settings.animateIn
		outgoing = @core.settings.animateOut
		if @core.current() == @previous
			return
		if outgoing
			left = @core.coordinates(@previous) - @core.coordinates(@next)
			previous.css('left': left + 'px').addClass('animated owl-animated-out').addClass(outgoing).one 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear
		if incoming
			next.addClass('animated owl-animated-in').addClass(incoming).one 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear
		return

	Animate::clear = (e) ->
		$(e.target).css('left': '').removeClass('animated owl-animated-out owl-animated-in').removeClass(@core.settings.animateIn).removeClass @core.settings.animateOut
		@core.transitionEnd()
		return

	###*
	# Destroys the plugin.
	# @public
	###

	Animate::destroy = ->
		handler = undefined
		property = undefined
		for handler of @handlers
			`handler = handler`
			@core.$element.off handler, @handlers[handler]
		for property of Object.getOwnPropertyNames(this)
			`property = property`
			typeof @[property] != 'function' and (@[property] = null)
		return

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate
	return
) window.Zepto or window.jQuery, window, document

###*
# Autoplay Plugin
# @version 2.0.0
# @author Bartosz Wojciechowski
# @license The MIT License (MIT)
###

(($, window, document) ->

	###*
	# Creates the autoplay plugin.
	# @class The Autoplay Plugin
	# @param {Owl} scope - The Owl Carousel
	###

	Autoplay = (scope) ->
		@core = scope
		@core.options = $.extend({}, Autoplay.Defaults, @core.options)
		@handlers =
			'translated.owl.carousel refreshed.owl.carousel': $.proxy((->
				@autoplay()
				return
			), this)
			'play.owl.autoplay': $.proxy(((e, t, s) ->
				@play t, s
				return
			), this)
			'stop.owl.autoplay': $.proxy((->
				@stop()
				return
			), this)
			'mouseover.owl.autoplay': $.proxy((->
				if @core.settings.autoplayHoverPause
					@pause()
				return
			), this)
			'mouseleave.owl.autoplay': $.proxy((->
				if @core.settings.autoplayHoverPause and @core.$element.find('.owl-video-playing').length == 0
					@autoplay()
				return
			), this)
		@core.$element.on @handlers
		return

	###*
	# Default options.
	# @public
	###

	Autoplay.Defaults =
		autoplay: false
		autoplayTimeout: 5000
		autoplayHoverPause: false
		autoplaySpeed: false

	###*
	# @protected
	# @todo Must be documented.
	###

	Autoplay::autoplay = ->
		if @core.settings.autoplay and !@core.state.videoPlay
			window.clearTimeout @interval
			@interval = window.setTimeout($.proxy((->
				@play()
				return
			), this), @core.settings.autoplayTimeout)
		else
			window.clearTimeout @interval
		return

	###*
	# Starts the autoplay.
	# @public
	# @param {Number} [timeout] - ...
	# @param {Number} [speed] - ...
	# @returns {Boolean|undefined} - ...
	# @todo Must be documented.
	###

	Autoplay::play = (timeout, speed) ->
		# if tab is inactive - doesnt work in <IE10
		if document.hidden == true
			return
		if @core.state.isTouch or @core.state.isScrolling or @core.state.isSwiping or @core.state.inMotion
			return
		if @core.settings.autoplay == false
			window.clearInterval @interval
			return
		@core.next @core.settings.autoplaySpeed
		return

	###*
	# Stops the autoplay.
	# @public
	###

	Autoplay::stop = ->
		window.clearInterval @interval
		return

	###*
	# Pauses the autoplay.
	# @public
	###

	Autoplay::pause = ->
		window.clearInterval @interval
		return

	###*
	# Destroys the plugin.
	###

	Autoplay::destroy = ->
		handler = undefined
		property = undefined
		window.clearInterval @interval
		for handler of @handlers
			`handler = handler`
			@core.$element.off handler, @handlers[handler]
		for property of Object.getOwnPropertyNames(this)
			`property = property`
			typeof @[property] != 'function' and (@[property] = null)
		return

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay
	return
) window.Zepto or window.jQuery, window, document

###*
# Navigation Plugin
# @version 2.0.0
# @author Artus Kolanowski
# @license The MIT License (MIT)
###

(($, window, document) ->
	'use strict'

	###*
	# Creates the navigation plugin.
	# @class The Navigation Plugin
	# @param {Owl} carousel - The Owl Carousel.
	###

	Navigation = (carousel) ->

		###*
		# Reference to the core.
		# @protected
		# @type {Owl}
		###

		@_core = carousel

		###*
		# Indicates whether the plugin is initialized or not.
		# @protected
		# @type {Boolean}
		###

		@_initialized = false

		###*
		# The current paging indexes.
		# @protected
		# @type {Array}
		###

		@_pages = []

		###*
		# All DOM elements of the user interface.
		# @protected
		# @type {Object}
		###

		@_controls = {}

		###*
		# Markup for an indicator.
		# @protected
		# @type {Array.<String>}
		###

		@_templates = []

		###*
		# The carousel element.
		# @type {jQuery}
		###

		@$element = @_core.$element

		###*
		# Overridden methods of the carousel.
		# @protected
		# @type {Object}
		###

		@_overrides =
			next: @_core.next
			prev: @_core.prev
			to: @_core.to

		###*
		# All event handlers.
		# @protected
		# @type {Object}
		###

		@_handlers =
			'prepared.owl.carousel': $.proxy(((e) ->
				if @_core.settings.dotsData
					@_templates.push $(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot')
				return
			), this)
			'add.owl.carousel': $.proxy(((e) ->
				if @_core.settings.dotsData
					@_templates.splice e.position, 0, $(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot')
				return
			), this)
			'remove.owl.carousel prepared.owl.carousel': $.proxy(((e) ->
				if @_core.settings.dotsData
					@_templates.splice e.position, 1
				return
			), this)
			'change.owl.carousel': $.proxy(((e) ->
				if e.property.name == 'position'
					if !@_core.state.revert and !@_core.settings.loop and @_core.settings.navRewind
						current = @_core.current()
						maximum = @_core.maximum()
						minimum = @_core.minimum()
						e.data = if e.property.value > maximum then (if current >= maximum then minimum else maximum) else if e.property.value < minimum then maximum else e.property.value
				return
			), this)
			'changed.owl.carousel': $.proxy(((e) ->
				if e.property.name == 'position'
					@draw()
				return
			), this)
			'refreshed.owl.carousel': $.proxy((->
				if !@_initialized
					@initialize()
					@_initialized = true
				@_core.trigger 'refresh', null, 'navigation'
				@update()
				@draw()
				@_core.trigger 'refreshed', null, 'navigation'
				return
			), this)
		# set default options
		@_core.options = $.extend({}, Navigation.Defaults, @_core.options)
		# register event handlers
		@$element.on @_handlers
		return

	###*
	# Default options.
	# @public
	# @todo Rename `slideBy` to `navBy`
	###

	Navigation.Defaults =
		nav: false
		navRewind: true
		navText: [
			'prev'
			'next'
		]
		navSpeed: false
		navElement: 'div'
		navContainer: false
		navContainerClass: 'owl-nav'
		navClass: [
			'owl-prev'
			'owl-next'
		]
		slideBy: 1
		dotClass: 'owl-dot'
		dotsClass: 'owl-dots'
		dots: true
		dotsEach: false
		dotData: false
		dotsSpeed: false
		dotsContainer: false
		controlsClass: 'owl-controls'

	###*
	# Initializes the layout of the plugin and extends the carousel.
	# @protected
	###

	Navigation::initialize = ->
		$container = undefined
		override = undefined
		options = @_core.settings
		# create the indicator template
		if !options.dotsData
			@_templates = [ $('<div>').addClass(options.dotClass).append($('<span>')).prop('outerHTML') ]
		# create controls container if needed
		if !options.navContainer or !options.dotsContainer
			@_controls.$container = $('<div>').addClass(options.controlsClass).appendTo(@$element)
		# create DOM structure for absolute navigation
		@_controls.$indicators = if options.dotsContainer then $(options.dotsContainer) else $('<div>').hide().addClass(options.dotsClass).appendTo(@$element)
		@_controls.$indicators.on 'click', 'div', $.proxy(((e) ->
			index = if $(e.target).parent().is(@_controls.$indicators) then $(e.target).index() else $(e.target).parent().index()
			e.preventDefault()
			@to index, options.dotsSpeed
			return
		), this)
		# create DOM structure for relative navigation
		$container = if options.navContainer then $(options.navContainer) else $('<div>').addClass(options.navContainerClass).prependTo(@_controls.$container)
		@_controls.$next = $('<' + options.navElement + '>')
		@_controls.$previous = @_controls.$next.clone()
		@_controls.$previous.addClass(options.navClass[0]).html(options.navText[0]).hide().prependTo($container).on 'click', $.proxy(((e) ->
			@prev options.navSpeed
			return
		), this)
		@_controls.$next.addClass(options.navClass[1]).html(options.navText[1]).hide().appendTo($container).on 'click', $.proxy(((e) ->
			@next options.navSpeed
			return
		), this)
		# override public methods of the carousel
		for override of @_overrides
			`override = override`
			@_core[override] = $.proxy(@[override], this)
		return

	###*
	# Destroys the plugin.
	# @protected
	###

	Navigation::destroy = ->
		handler = undefined
		control = undefined
		property = undefined
		override = undefined
		for handler of @_handlers
			`handler = handler`
			@$element.off handler, @_handlers[handler]
		for control of @_controls
			`control = control`
			@_controls[control].remove()
		for override of @overides
			`override = override`
			@_core[override] = @_overrides[override]
		for property of Object.getOwnPropertyNames(this)
			`property = property`
			typeof @[property] != 'function' and (@[property] = null)
		return

	###*
	# Updates the internal state.
	# @protected
	###

	Navigation::update = ->
		i = undefined
		j = undefined
		k = undefined
		options = @_core.settings
		lower = @_core.clones().length / 2
		upper = lower + @_core.items().length
		size = if options.center or options.autoWidth or options.dotData then 1 else options.dotsEach or options.items
		if options.slideBy != 'page'
			options.slideBy = Math.min(options.slideBy, options.items)
		if options.dots or options.slideBy == 'page'
			@_pages = []
			i = lower
			j = 0
			k = 0
			while i < upper
				if j >= size or j == 0
					@_pages.push
						start: i - lower
						end: i - lower + size - 1
					j = 0
					++k
				j += @_core.mergers(@_core.relative(i))
				i++
		return

	###*
	# Draws the user interface.
	# @todo The option `dotData` wont work.
	# @protected
	###

	Navigation::draw = ->
		difference = undefined
		i = undefined
		html = ''
		options = @_core.settings
		$items = @_core.$stage.children()
		index = @_core.relative(@_core.current())
		if options.nav and !options.loop and !options.navRewind
			@_controls.$previous.toggleClass 'disabled', index <= 0
			@_controls.$next.toggleClass 'disabled', index >= @_core.maximum()
		@_controls.$previous.toggle options.nav
		@_controls.$next.toggle options.nav
		if options.dots
			difference = @_pages.length - (@_controls.$indicators.children().length)
			if options.dotData and difference != 0
				i = 0
				while i < @_controls.$indicators.children().length
					html += @_templates[@_core.relative(i)]
					i++
				@_controls.$indicators.html html
			else if difference > 0
				html = new Array(difference + 1).join(@_templates[0])
				@_controls.$indicators.append html
			else if difference < 0
				@_controls.$indicators.children().slice(difference).remove()
			@_controls.$indicators.find('.active').removeClass 'active'
			@_controls.$indicators.children().eq($.inArray(@current(), @_pages)).addClass 'active'
		@_controls.$indicators.toggle options.dots
		return

	###*
	# Extends event data.
	# @protected
	# @param {Event} event - The event object which gets thrown.
	###

	Navigation::onTrigger = (event) ->
		settings = @_core.settings
		event.page =
			index: $.inArray(@current(), @_pages)
			count: @_pages.length
			size: settings and (if settings.center or settings.autoWidth or settings.dotData then 1 else settings.dotsEach or settings.items)
		return

	###*
	# Gets the current page position of the carousel.
	# @protected
	# @returns {Number}
	###

	Navigation::current = ->
		index = @_core.relative(@_core.current())
		$.grep(@_pages, (o) ->
			o.start <= index and o.end >= index
		).pop()

	###*
	# Gets the current succesor/predecessor position.
	# @protected
	# @returns {Number}
	###

	Navigation::getPosition = (successor) ->
		position = undefined
		length = undefined
		options = @_core.settings
		if options.slideBy == 'page'
			position = $.inArray(@current(), @_pages)
			length = @_pages.length
			if successor then ++position else --position
			position = @_pages[(position % length + length) % length].start
		else
			position = @_core.relative(@_core.current())
			length = @_core.items().length
			if successor then (position += options.slideBy) else (position -= options.slideBy)
		position

	###*
	# Slides to the next item or page.
	# @public
	# @param {Number} [speed=false] - The time in milliseconds for the transition.
	###

	Navigation::next = (speed) ->
		$.proxy(@_overrides.to, @_core) @getPosition(true), speed
		return

	###*
	# Slides to the previous item or page.
	# @public
	# @param {Number} [speed=false] - The time in milliseconds for the transition.
	###

	Navigation::prev = (speed) ->
		$.proxy(@_overrides.to, @_core) @getPosition(false), speed
		return

	###*
	# Slides to the specified item or page.
	# @public
	# @param {Number} position - The position of the item or page.
	# @param {Number} [speed] - The time in milliseconds for the transition.
	# @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	###

	Navigation::to = (position, speed, standard) ->
		length = undefined
		if !standard
			length = @_pages.length
			$.proxy(@_overrides.to, @_core) @_pages[(position % length + length) % length].start, speed
		else
			$.proxy(@_overrides.to, @_core) position, speed
		return

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation
	return
) window.Zepto or window.jQuery, window, document

###*
# Hash Plugin
# @version 2.0.0
# @author Artus Kolanowski
# @license The MIT License (MIT)
###

(($, window, document) ->
	'use strict'

	###*
	# Creates the hash plugin.
	# @class The Hash Plugin
	# @param {Owl} carousel - The Owl Carousel
	###

	Hash = (carousel) ->

		###*
		# Reference to the core.
		# @protected
		# @type {Owl}
		###

		@_core = carousel

		###*
		# Hash table for the hashes.
		# @protected
		# @type {Object}
		###

		@_hashes = {}

		###*
		# The carousel element.
		# @type {jQuery}
		###

		@$element = @_core.$element

		###*
		# All event handlers.
		# @protected
		# @type {Object}
		###

		@_handlers =
			'initialized.owl.carousel': $.proxy((->
				if @_core.settings.startPosition == 'URLHash'
					$(window).trigger 'hashchange.owl.navigation'
				return
			), this)
			'prepared.owl.carousel': $.proxy(((e) ->
				hash = $(e.content).find('[data-hash]').andSelf('[data-hash]').attr('data-hash')
				@_hashes[hash] = e.content
				return
			), this)
		# set default options
		@_core.options = $.extend({}, Hash.Defaults, @_core.options)
		# register the event handlers
		@$element.on @_handlers
		# register event listener for hash navigation
		$(window).on 'hashchange.owl.navigation', $.proxy((->
			hash = window.location.hash.substring(1)
			items = @_core.$stage.children()
			position = @_hashes[hash] and items.index(@_hashes[hash]) or 0
			if !hash
				return false
			@_core.to position, false, true
			return
		), this)
		return

	###*
	# Default options.
	# @public
	###

	Hash.Defaults = URLhashListener: false

	###*
	# Destroys the plugin.
	# @public
	###

	Hash::destroy = ->
		handler = undefined
		property = undefined
		$(window).off 'hashchange.owl.navigation'
		for handler of @_handlers
			`handler = handler`
			@_core.$element.off handler, @_handlers[handler]
		for property of Object.getOwnPropertyNames(this)
			`property = property`
			typeof @[property] != 'function' and (@[property] = null)
		return

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash
	return
) window.Zepto or window.jQuery, window, document

# ---
# generated by js2coffee 2.2.0