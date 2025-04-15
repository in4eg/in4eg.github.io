$(document).on 'click', '[data-add]', (e) ->

	if typeof $(@).attr('href') is 'undefined'
		
		if typeof $(@).attr('data-call-popup') is 'undefined'
			editBlock = $($(@).attr('data-call'))
		else
			editBlock = $($(@).attr('data-call-popup'))
	else
		editBlock = $($(@).attr('href'))

	editBlock.find('[data-on-edit]').attr 'data-on-edit', ''
	editBlock.find('[data-removeon]').hide()

	# Add placeholder as first option
	editBlock.find('[data-year-select]').append $('<option>').attr('value', '').text('Year')
	for year in used
		editBlock.find('[data-year-select]').append($('<option>').attr('value', year).text(year))
	# When You choose any other option remove placeholder 
	editBlock.find('[data-year-select]').on 'change', ->
		$(this).children('[value = ""]').remove()
		return

	editBlock.find('[data-month-select]').append $('<option>').attr('value', '').attr('data-number', i).text('Month')
	for month, i in months
		editBlock.find('[data-month-select]').append($('<option>').attr('value', month).attr('data-number', i).text(month))
	editBlock.find('[data-month-select]').on 'change', ->
		$(this).children('[value = ""]').remove()
		return

	for degree in degrees
		editBlock.find('[data-degree-select]').append($('<option>').attr('value', degree).text(degree))
		
	str = undefined
	l = 0
	len3 = countries.length
	editBlock.find('[data-country-select]').append $('<option>').attr('value', '').text('Choose your country')
	while l < len3
		country = countries[l] # add 'selected' attribute to USA
		# if country == 'USA'
		# 	str = $('<option>').attr('value', country).attr('selected', '').text(country)
		# else
		str = $('<option>').attr('value', country).text(country)
		editBlock.find('[data-country-select]').append str
		l++
	editBlock.find('[data-country-select]').on 'change', ->
		$(this).children('[value = ""]').remove()
		return

	editBlock.find('.for-edit').addClass 'hidden'
	editBlock.find('.for-add').removeClass 'hidden'

	if editBlock.attr('id') is 'edit-summary-popup'
		relatedBlock = $ '#summaryMess'
		formData = relatedBlock.text().trim()
	else if editBlock.attr('id') is 'edit-experience-popup'
		relatedBlock = $ '#experienceMore'
		formData = relatedBlock.html()
	else if editBlock.attr('id') is 'edit-education-popup'
		relatedBlock = $ '#educationMore'
		formData = relatedBlock.html()
	else if editBlock.attr('id') is 'edit-certification-popup'
		relatedBlock = $ '#certificationMore'
		formData = relatedBlock.html()
	else if editBlock.attr('id') is 'edit-volunteering-popup'
		relatedBlock = $ '#volunteeringMore'
		formData = relatedBlock.html()
	else if editBlock.attr('id') is 'edit-gereral-popup'
		relatedBlock = $ '#userMainInfo'
		formData = relatedBlock.html()

	return

if !Object.entries
	console.log 'no entries'
	Object.entries = (obj) ->
		ownProps = Object.keys(obj)
		i = ownProps.length
		resArray = new Array(i)
		# preallocate the Array
		while i--
			resArray[i] = [
				ownProps[i]
				obj[ownProps[i]]
			]
		resArray