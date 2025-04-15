ValidURL = (link) ->
	pattern = /(http(s)?:\/\/.)/g
	return pattern.test(link)

isValidEmail = (email)->
	re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email)

fileValidation = (fileInput)->
	filePath = fileInput.value
	allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i
	if !allowedExtensions.exec(filePath)
		console.log 'Please upload file having extensions .jpeg/.jpg/.png/.gif only.'
		fileInput.value = ''
		return false
	else
		return true
	

$ '[data-onsubmit]'
	.each (i, form)->

		$(form).on 'submit', (e)->
			e.preventDefault()

			errors = [off,off]
			isFormScrolled = off
			scrollTarget = if $(this).parents('.popup').length isnt 0 then $('.popup') else $ 'html, body'
			currentDate = new Date()
			currentMonth = currentDate.getMonth()
			choosenYear = parseInt $(form).find('[data-end]').val()
			currentYear = currentDate.getFullYear()

			$('input:not(.ignored), textarea:not(.ignored)', this).each (i, input)->
			# $('input', this).each (i, input)->
				$(input).siblings('.icon-success').removeClass 'active'

				if ($(input).attr('id') == 'cropOutput')
					$($(image).attr('data-output')).val(cropImage(image, cropperCoords)).trigger('change').attr 'data-coord', JSON.stringify(cropperCoords)
					
				if ($(input).hasClass('email') and !isValidEmail($(input).val().trim()))
					errors[i] = on
					$(input).siblings('.icon-error').addClass 'active'
					$(input).parents('.form-group').addClass 'error'
				else if ($(input).hasClass('link') and !ValidURL($(input).val().trim()))
					errors[i] = on
					$(input).siblings('.icon-error').addClass 'active'
					$(input).parents('.form-group').addClass 'error'
				else if $(input).data('minlength') and $(input).val().trim().length < $(input).data('minlength')
					errors[i] = on
					$(input).siblings('.icon-error').addClass 'active'
					$(input).parents('.form-group').addClass 'error'
				else if $(input).val().trim() is ""
					errors[i] = on
					$(input).siblings('.icon-error').addClass 'active'
					$(input).parents('.form-group').addClass 'error'
				else if $(form).find('[data-start]').val() > $(form).find('[data-end]').val() and !$(form).find('[data-current-input]')[0].checked
					errors[i] = on
					$('[data-month-select]').removeClass 'error'
					$(form).find('.year-alert').removeClass 'active'
					$(form).find('.month-alert').removeClass 'active'
					$(form).find('[data-start]').addClass 'error'
					$(form).find('[data-end]').addClass 'error'
					$(form).find('.year-alert').addClass 'active'

				else if $(form).find('[data-start]').val() == $(form).find('[data-end]').val()

					$('[data-year-select]').removeClass 'error'
					$(form).find('.year-alert').removeClass 'active'

					if $(form).find('[data-month-start]').find('option:selected').data('number') > $(form).find('[data-month-end]').find('option:selected').data('number') and !$(form).find('[data-current-input]')[0].checked
						errors[i] = on
						$(form).find('[data-month-start]').addClass 'error'
						$(form).find('[data-month-end]').addClass 'error'
						$(form).find('.year-alert').addClass 'active'

					else if currentYear == choosenYear

						if $(form).find('[data-month-end]').find('option:selected').data('number') > currentMonth
							errors[i] = on
							$(form).find('[data-month-start]').removeClass 'error'
							$(form).find('[data-month-end]').addClass 'error'
							$(form).find('.year-alert').addClass 'active'
							$(form).find('.month-alert').addClass 'active'
						else
							errors[i] = off
							$(form).find('[data-month-end]').removeClass 'error'
							$(form).find('.month-alert').removeClass 'active'
					else
						errors[i] = off
						$(form).find('[data-month-start]').removeClass 'error'
						$(form).find('[data-month-end]').removeClass 'error'
						$(form).find('[data-start]').removeClass 'error'
						$(form).find('[data-end]').removeClass 'error'
						$(form).find('.year-alert').removeClass 'active'
						$(form).find('.month-alert').removeClass 'active'
						
				else if currentYear == choosenYear
					errors[i] = on
					if $(form).find('[data-month-end]').find('option:selected').data('number') > currentMonth
						$(form).find('[data-month-start]').removeClass 'error'
						$(form).find('[data-month-end]').addClass 'error'
						$(form).find('[data-start]').removeClass 'error'
						$(form).find('.year-alert').removeClass 'active'
						$(form).find('.month-alert').addClass 'active'
					else
						errors[i] = off
						$(form).find('[data-month-end]').removeClass 'error'
						$(form).find('.month-alert').removeClass 'active'
				else
					errors[i] = off
					$(input).siblings('.icon-error').removeClass 'active'
					$(input).siblings('.icon-success').addClass 'active'
					$(input).parents('.form-group').removeClass 'error'
					$(form).find('[data-start]').removeClass 'error'
					$(form).find('[data-end]').removeClass 'error'
					$(form).find('[data-month-start]').removeClass 'error'
					$(form).find('[data-month-end]').removeClass 'error'
					$(form).find('.year-alert').removeClass 'active'
					$(form).find('.month-alert').removeClass 'active'

				return
			hasErrors = off
			for error in errors
				if error then hasErrors = on; e.preventDefault(); return;

			if !hasErrors
				for instance of CKEDITOR.instances
					`instance = instance`
					CKEDITOR.instances[instance].updateElement()
				inputs = $(form).find('input, select, textarea')

				data = {}

				for input in inputs
					data[$(input).attr('id')] = if input.type.match(/(radio|checkbox)/gim) then $(input).prop('checked') else $(input).val()

				if $(form).hasClass 'sortable-form'
					# data['sortable-form'] = true
					for input,i in inputs
						# For languages
						if $(input).attr('id').indexOf('lan') != -1
							idCurrent = $(input).attr('id').replace('lan', '')
							data['sortIndex' + idCurrent] = $(input).parents('tr').index()
						# For technical skills	
						if $(input).attr('id').indexOf('skillTechTitle') != -1
							idCurrent = $(input).attr('id').replace('skillTechTitle', '')
							data['sortIndex' + idCurrent] = $(input).parents('tr').index()
						# For interests
						if $(input).attr('id').indexOf('hobbyTitle') != -1
							idCurrent = $(input).attr('id').replace('hobbyTitle', '')
							data['sortIndex' + idCurrent] = $(input).parents('.block-info').index()

						# data[$(input).attr('id') + '_' + 'sort_index'] = if $(input).parents('tr') then $(input).parents('tr').index() else $(input).parents('.block-info').index()

					dataId = $(form).find('[data-id]')

					popupFormId = $(form).parents('.white-popup').attr('id')

					for elemId, i in dataId
						if popupFormId == 'edit-technicalskills-popup'
							idCurrent = $(elemId).attr('id').replace('skillTechTitle', '')
						else if popupFormId == 'edit-languages-popup'
							idCurrent = $(elemId).attr('id').replace('lan', '')
						else if popupFormId == 'edit-interests-popup'
							idCurrent = $(elemId).attr('id').replace('hobbyTitle', '')
							
						data['blockId' + idCurrent] = $(elemId).attr('data-id')

				# getFormData(data, form)
				hidePopups()

				if window[$(form).attr('data-onsubmit')]
					window[$(form).attr('data-onsubmit')].call(form, e, data)
					console.log data

				if $(form).find('[data-id]').data('id')
					relatedBlock = '#' + $(form).find('[data-id]').data('id')

				if $(@).hasClass 'info-form'
					$('.success-fadeout', @).addClass 'active'
					$('.success-fadein', @).addClass 'active'
				else
					if $.magnificPopup
						clearPopupInfo()
						$.magnificPopup.close()

			return
		return