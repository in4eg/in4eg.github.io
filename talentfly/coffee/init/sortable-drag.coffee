do ->

	byId = (id) ->
		document.getElementById id

	loadScripts = (desc, callback) ->
		deps = []
		key = undefined
		idx = 0
		for key of desc
			`key = key`
			deps.push key
		(->
			pid = undefined
			name = deps[idx]
			script = document.createElement('script')
			script.type = 'text/javascript'
			script.src = desc[deps[idx]]
			pid = setInterval((->
				if window[name]
					clearTimeout pid
					deps[idx++] = window[name]
					if deps[idx]
						_next()
					else
						callback.apply null, deps
				return
			), 30)
			document.getElementsByTagName('head')[0].appendChild script
			return
		)()
		return

	console = window.console
	if !console.log

		console.log = ->
			alert [].join.apply(arguments, ' ')
			return

	if window.innerWidth > 640

		Sortable.create byId('sortableTable'),
			group: 'words'
			animation: 150
			filter: "textarea, input, select, button"
			preventOnFilter: off
			dataIdAttr: 'data-block'
			store:
				get: (sortable) ->
					order = localStorage.getItem(sortable.options.group)
					if order then order.split('|') else []
				set: (sortable) ->
					order = sortable.toArray()
					localStorage.setItem sortable.options.group, order.join('|')
					return

			onEnd: (evt) ->
				index = $(evt.item).index()
				# relatedElement = $($(evt.item).find('[data-push]').data('push')).parents('li')
				# relatedIndex = $(relatedElement).index()
				id = $(evt.item).find('.title-input').data 'push'
				url = $(evt.from).data 'url'

				# moveRelatedElements(index, relatedElement, relatedIndex)

				return


		Sortable.create byId('interestsBody'),
			group: 'words'
			animation: 150
			filter: "textarea, input, select, button"
			preventOnFilter: off
			dataIdAttr: 'data-block'
			store:
				get: (sortable) ->
					order = localStorage.getItem(sortable.options.group)
					if order then order.split('|') else []
				set: (sortable) ->
					order = sortable.toArray()
					localStorage.setItem sortable.options.group, order.join('|')
					return
			onEnd: (evt) ->
				index = $(evt.item).index()
				# relatedElement = $($(evt.item).find('[data-push]').data('push')).parents('li')
				# relatedIndex = $(relatedElement).index()
				id = $(evt.item).find('.input-simple').data 'push'
				url = $(evt.from).data 'url'

				# moveRelatedElements(index, relatedElement, relatedIndex)

				return

		Sortable.create byId('langBody'),
			group: 'words'
			animation: 150
			filter: "textarea, input, select, button"
			preventOnFilter: off
			dataIdAttr: 'data-block'
			store:
				get: (sortable) ->
					order = localStorage.getItem(sortable.options.group)
					if order then order.split('|') else []
				set: (sortable) ->
					order = sortable.toArray()
					localStorage.setItem sortable.options.group, order.join('|')
					return
			onEnd: (evt) ->
				index = $(evt.item).index()
				# relatedElement = $($(evt.item).find('[data-push]').data('push')).parents('li')
				# relatedIndex = $(relatedElement).index()
				id = $(evt.item).find('.input-simple').data 'push'
				url = $(evt.from).data 'url'

				# moveRelatedElements(index, relatedElement, relatedIndex)

				return

# moveRelatedElements = (index, relatedElement, relatedIndex)->
# 	if relatedIndex < index
# 		$(relatedElement).insertAfter($(relatedElement).parents('ul').children().eq(index))
# 	else if relatedIndex > index
# 		$(relatedElement).insertBefore($(relatedElement).parents('ul').children().eq(index))
# 	return
