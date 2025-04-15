errorsDictionary = {
	###имя###
	nameLength: '<span>Имя</span> не может быть короче двух символов!'
	nameIsEmpty: 'Введите пожалуйста <span>Имя</span>!'
	###номер###
	phoneIsEmpty: 'Введите пожалуйста <span>номер телефона</span>!'
	phoneLength: 'Введите <span>номер телефона</span> полностью!'
	###имейл###
	emailIsEmpty: 'Введите пожалуйста <span>email</span>!'
	emailValid:  'Неправильно введен <span>email</span>! <br> <span>email</span> должен соответствовать шабону: <span>username@example.com</span>'
	###текст###
	textIsEmpty: 'Введите пожалуйста <span>текст сообщения</span>!'
	textLength: '<span>текст сообщения</span> не может быть короче 20 символов!'
}

Validator = (input)->

	error = false

	validEmail = (email)->
		re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		re.test email

	validateName = ->
		min = parseInt input.data('minlength')
		max = parseInt input.attr('maxlength')
		if input.val().trim() is ''
			error = errorsDictionary.nameIsEmpty
		else if input.val().trim().length < min
			error = errorsDictionary.nameLength
		return

	validatePhone = ->
		value = input.val().trim().replace(/(\+|_|-|\s| )/gim, '')
		mask = input.data('mask').replace(/(\+|_|-|\s| )/gim, '')
		min = parseInt input.data('minlength')
		max = parseInt input.val().trim()
		if value is ''
			error = errorsDictionary.phoneIsEmpty
		else if value.length < mask.length
			error = errorsDictionary.phoneLength
		return

	validateEmail = ->
		value = input.val().trim()
		if value is ''
			error = errorsDictionary.emailIsEmpty
		else if !validEmail value
			error = errorsDictionary.emailValid
		return

	validateText = ->
		min = parseInt input.data('minlength')
		value = input.val().trim()
		if value is ''
			error = errorsDictionary.textIsEmpty
		else if value.length < min
			error = errorsDictionary.textLength
		return


	switch input.data 'validate'
		when 'name'
			do validateName
			break
		when 'phone'
			do validatePhone
			break
		when 'email'
			do validateEmail
			break
		when 'text'
			do validateText
			break


	return error
