# currentTime = new Date
# currentYear = currentTime.getFullYear()

# getFormData = (data, form)->
# 	i = randomId(5)

# 	relatedBlock = $ $(form).data('append')

# 	if typeof $(form).attr('data-multiply') is 'undefined'

# 		if $(form).data('append') is '#experienceMore'

# 			templateForm = "
# 				<div data-call=\"#edit-experience-popup\" data-edit=\"#experienceInfo#{i}\" class=\"block-info detail edited\" id=\"experienceInfo#{i}\" data-text=\"edit\">
# 					<div class=\"head\">
# 						<div class=\"title\">
# 							<span id=\"job#{i}\" data-change=\"#jobTitle\">#{data.jobTitle}</span>
# 							<span class=\"edit\">
# 								<i class=\"icon icon-pencil-edit\"></i>
# 							</span>
# 						</div>
# 						<div class=\"position\" id=\"company#{i}\" data-change=\"#companyName\">#{data.companyName}</div>
# 						<div class=\"date\" data-current=\"#{data.presExp}\">
# 							<i class=\"icon icon-event\"></i>
# 							<span id=\"monthbefore#{i}\" data-change=\"#monthBefore\">#{data.monthBefore}</span>
# 							<span id=\"yearbefore#{i}\" data-change=\"#yearBefore\">#{data.yearBefore}</span> - 
# 							<span id=\"monthafter#{i}\" data-change=\"#monthAfter\" class=\"if-not-current\">#{data.monthAfter}</span>
# 							<span id=\"yearafter#{i}\" data-change=\"#afterYear\" class=\"if-not-current\">#{data.afterYear}</span>
# 							<span class=\"present-on\">Present</span>
# 							<p class=\"duration total-year-#{i}\">#{countYear}</p>
# 							<div class=\"place\">
# 								<span id=\"CountryExp#{i}\" data-change=\"#CountryExp\">#{data.CountryExp}</span><span class=\"comma\">,</span>
# 								<span id=\"city#{i}\" data-change=\"#city\">#{data.city}</span><span class=\"comma\">,</span>
# 								<span id=\"location#{i}\" data-change=\"#location\">#{data.location}</span>
# 							</div>
# 						</div>
# 					</div>
# 						<div class=\"description full-length\">
# 						<div class=\"paragraph\" id=\"description#{i}\" data-change=\"#descriptionEdit\">
# 							#{data.descriptionEdit}
# 						</div>
# 					</div>
# 				</div>
# 				"
# 			setTimeout (=>
# 				locationOptions = relatedBlock.find('#experienceInfo' + i).find('.place').children('span')
# 				for option in locationOptions
# 					if $(option).text().trim().length <= 0

# 						if $(option).index() is 2 or $(option).index() is 4
# 							$(option).prev().addClass 'toRemove'

# 				relatedBlock.find('#experienceInfo' + i).find('.place').children('.toRemove').remove()
# 				return
# 			), 50
# 		else if $(form).data('append') is '#educationMore'

# 			templateForm = "
# 				<a href=\"#edit-education-popup\" data-edit=\"#educationInfo#{i}\" data-text=\"edit\" id=\"educationInfo#{i}\" class=\"block-info detail edited open-popup-link\">
# 					<div class=\"head\">
# 						<div class=\"title\">
# 							<span id=\"institutionName#{i}\" data-change=\"#institutionName\">#{data.institutionName}</span>
# 							<span class=\"edit\">
# 								<i class=\"icon icon-pencil-edit\"></i>
# 							</span>
# 						</div>
# 						<div class=\"position\"><span data-change=\"#studyDegree\" id=\"stDeg#{i}\">#{data.studyDegree}</span>, <span data-change=\"#fieldOfStudy\" id=\"field#{i}\">#{data.fieldOfStudy}</span></div>
# 						<div class=\"date\" data-current=\"#{data.presEduc}\">
# 							<i class=\"icon icon-event\"></i>
# 							<span id=\"educStartMonth#{i}\" data-change=\"#educStartMonth\">#{data.educStartMonth}</span>
# 							<span id=\"educStartYear#{i}\" data-change=\"#educStartYear\">#{data.educStartYear}</span> - 
# 							<span id=\"educEndMonth#{i}\" data-change=\"#educEndMonth\" class=\"if-not-current\">#{data.educEndMonth}</span>
# 							<span id=\"educEndYear#{i}\" data-change=\"#educEndYear\" class=\"if-not-current\">#{data.educEndYear}</span>
# 							<span class=\"present-on\">Present</span>
# 							<p class=\"duration total-year-#{i}\">#{countYear}</p>
# 							<div class=\"place\">
# 								<span id=\"CountryEd#{i}\" data-change=\"#CountryEd\">#{data.CountryEd}</span><span class=\"comma\">,</span>
# 								<span id=\"educationLocation#{i}\" data-change=\"#educationLocation\">#{data.educationLocation}</span><span class=\"comma\">,</span>
# 								<span id=\"educationCity#{i}\" data-change=\"#educationCity\">#{data.educationCity}</span>
# 							</div>
# 						</div>
# 					</div>
# 				</a>
# 				"
			
# 			setTimeout (=>
# 				locationOptions = relatedBlock.find('#educationInfo' + i).find('.place').children('span')
# 				for option in locationOptions
# 					if $(option).text().trim().length <= 0

# 						if $(option).index() is 2 or $(option).index() is 4
# 							$(option).prev().addClass 'toRemove'

# 				relatedBlock.find('#educationInfo' + i).find('.place').children('.toRemove').remove()
# 				return
# 			), 50
# 		else if $(form).data('append') is '#certificationMore'

# 			templateForm = "
# 				<a href=\"#edit-certification-popup\" data-edit=\"#certificationInfo#{i}\" data-text=\"edit\" id=\"certificationInfo#{i}\" class=\"block-info detail edited with-image open-popup-link\">
# 					<div class=\"head\">
# 						<div class=\"main\">
# 							<div class=\"title\">
# 								<span id=\"certTit1#{i}\" data-change=\"#certifName\">#{data.certifName}</span>
# 								<span class=\"edit\">
# 									<i class=\"icon icon-pencil-edit\"></i>
# 								</span>
# 							</div>
# 							<div class=\"position\" data-change=\"#certifAuth\" id=\"certAut#{i}\">#{data.certifAuth}</div>
# 						</div>
# 						<div class=\"image\">
# 							<figure class=\"image-cover\">
# 								<img src=\"#{data.sertifPhoto}\" alt=\"sertificate\">
# 							</figure>
# 						</div>
# 						<div class=\"date\" data-current=\"#{data.presSertif}\">
# 							<i class=\"icon icon-event\"></i>
# 							<span id=\"certStMonth#{i}\" data-change=\"#sertifStartMonth\">#{data.sertifStartMonth}</span>
# 							<span id=\"certStYear#{i}\" data-change=\"#sertifStartYear\">#{data.sertifStartYear}</span> - 
# 							<span id=\"certEndMonth#{i}\" data-change=\"#sertifEndMonth\" class=\"if-not-current\">#{data.sertifEndMonth}</span>
# 							<span id=\"certEndYear#{i}\" data-change=\"#sertifEndYear\" class=\"if-not-current\">#{data.sertifEndYear}</span>
# 							<span class=\"present-on\">Present</span>
# 							<p class=\"duration total-year-#{i}\">#{countYear}</p>
# 							<div class=\"place\">
# 								<span id=\"sertifCountry#{i}\" data-change=\"#sertifCountry\">#{data.sertifCountry}</span><span class=\"comma\">,</span>
# 								<span id=\"certCity#{i}\" data-change=\"#sertifCity\">#{data.sertifCity}</span><span class=\"comma\">,</span>
# 								<span id=\"certLoc#{i}\" data-change=\"#sertifLocation\">#{data.sertifLocation}</span>
# 							</div>
# 						</div>
# 					</div>
# 				</a>
# 				"
# 			setTimeout (=>
# 				locationOptions = relatedBlock.find('#certificationInfo' + i).find('.place').children('span')
# 				for option in locationOptions
# 					if $(option).text().trim().length <= 0

# 						if $(option).index() is 2 or $(option).index() is 4
# 							$(option).prev().addClass 'toRemove'

# 				relatedBlock.find('#certificationInfo' + i).find('.place').children('.toRemove').remove()
# 				return
# 			), 50
# 		else if $(form).data('append') is '#volunteeringMore'
			
# 			templateForm = "
# 				<li>
# 						<a href=\"#edit-volunteering-popup\" class=\"block-info detail edited open-popup-link\" id=\"volInfo#{i}\" data-text=\"edit\" data-edit=\"#volInfo#{i}\">
# 							<div class=\"head\">
# 								<div class=\"title\">
# 									<span data-change=\"#volOrganization\" id=\"volOrg#{i}\">#{data.volOrganization}</span>
# 									<span class=\"edit\">
# 										<i class=\"icon icon-pencil-edit\"></i>
# 									</span>
# 								</div>
# 								<div class=\"position\" data-change=\"#volRole\" id=\"volRol#{i}\" >#{data.volRole}</div>
# 								<div class=\"date\" data-current=\"#{data.presentVol}\">
# 									<i class=\"icon icon-event\"></i>
# 									<span id=\"volStMonth#{i}\" data-change=\"#volStartMonth\">#{data.volStartMonth}</span>
# 									<span id=\"volStYear#{i}\" data-change=\"#volStartYear\">#{data.volStartYear}</span> - 
# 									<span id=\"volEndMonth#{i}\" data-change=\"#volEndMonth\" class=\"if-not-current\">#{data.volEndMonth}</span>
# 									<span id=\"volEndYear#{i}\" data-change=\"#volEndYear\" class=\"if-not-current\">#{data.volEndYear}</span>
# 									<span class=\"present-on\">Present</span>
# 									<p class=\"duration total-year-#{i}\">#{countYear}</p>
# 									<div class=\"place\">
# 										<span id=\"CountryVol#{i}\" data-change=\"#CountryVol\">#{data.CountryVol}</span><span class=\"comma\">,</span>
# 										<span id=\"volC#{i}\" data-change=\"#volCity\">#{data.volCity}</span><span class=\"comma\">,</span>
# 										<span id=\"volLoc#{i}\" data-change=\"#volLocation\">#{data.volLocation}</span>
# 									</div>
# 								</div>
# 							</div>
# 						</a>
# 					</li>
# 				"
# 			setTimeout (=>
# 				locationOptions = relatedBlock.find('#volInfo' + i).find('.place').children('span')
# 				for option in locationOptions
# 					if $(option).text().trim().length <= 0

# 						if $(option).index() is 2 or $(option).index() is 4
# 							$(option).prev().addClass 'toRemove'

# 				relatedBlock.find('#volInfo' + i).find('.place').children('.toRemove').remove()
# 				return
# 			), 50


# 		getMonthNum = (month) ->
# 			monthArr = [
# 				'January'
# 				'February'
# 				'March'
# 				'April'
# 				'May'
# 				'June'
# 				'July'
# 				'August'
# 				'September'
# 				'October'
# 				'November'
# 				'December'
# 			]
# 			monthArr.indexOf(month) + 1

# 		monthStart = $(form).find('[data-month-start]').val()
# 		monthStart = getMonthNum(monthStart)
# 		yearStart = $(form).find('[data-start]').val()

# 		try
# 			if $(form).find('[data-current-input]')[0].checked
# 				now = new Date();
# 				yearEnd = now.getFullYear()
# 				monthEnd = now.getMonth() + 1
# 			else
# 				monthEnd = $(form).find('[data-month-end]').val()
# 				monthEnd = getMonthNum(monthEnd)
# 				yearEnd = $(form).find('[data-end]').val()
# 		catch err
			
# 		fullExperienceInMonth = (yearEnd - yearStart) * 12 + monthEnd - monthStart
# 		yearsNum = Math.floor(fullExperienceInMonth / 12)
# 		monthsNum = fullExperienceInMonth % 12
# 		if yearsNum == 1 then (yearsString = 'year') else (yearsString = 'years')
# 		if monthsNum == 1 then (monthsString = 'month') else (monthsString = 'months')
# 		if yearsNum == 0
# 			countYear = '(' + monthsNum + ' ' + monthsString + ')'
# 		else
# 			if monthsNum == 0
# 				countYear = '(' + yearsNum + ' ' + yearsString + ')'
# 			else
# 				countYear = '(' + yearsNum + ' ' + yearsString + ' ' + monthsNum + ' ' + monthsString + ')'
		
# 		setTimeout (=>
# 			relatedBlock.find('.total-year-' + i).html(countYear)
# 			return
# 		), 50

# 		if relatedBlock.hasClass 'hidden'
# 			relatedBlock.removeClass 'hidden'
# 			relatedBlock.next('.hidden-helper').removeClass 'active'
# 		try
# 			if $(form).find('[data-push]').attr('data-push').length <= 0
# 				relatedBlock.append templateForm
# 		# Catch errors for video settings form
# 		catch err
# 	else
# 		console.log 'multiply form'

# 	do hidePopups
# 	return