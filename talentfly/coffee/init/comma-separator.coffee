# $(document).ready ->
#   places = document.querySelectorAll('.place')
#   places.forEach (div) ->
#     spansWithInnerHtml = $(div).children('span:parent')
#     i = 0
#     while i < spansWithInnerHtml.length - 1
#       $('<span class="comma">,</span>').insertAfter spansWithInnerHtml[i]
#       i++
#     return
#   return


commaSeparate = (places) ->
	places.forEach (div) ->
		spansWithInnerHtml = $(div).children('span:parent')
		i = 0
		while i < spansWithInnerHtml.length - 1
			$('<span class="comma">,</span>').insertAfter spansWithInnerHtml[i]
			i++
		return
	return

$(document).ready ->
	places = document.querySelectorAll('.place')
	commaSeparate places
	return