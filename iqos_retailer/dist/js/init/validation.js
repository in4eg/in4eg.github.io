$(function() {

	var isValidEmail = function(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	};
	var isValidLink = function(link) {
		var reg = /:\/\/(?:www\.)?(facebook)(.*)/;
		return reg.test(link);
	};
	var isSingleNumber = function(number) {
		var re = /^[0-9]$/;
		return re.test(number);
	};

	$('[data-mask]').each(function(i, input) {
		var mask = $(input).attr('data-mask');
		$(input).mask(mask, {
			placeholder: ""
		});
	});

	function setInputFilter(textbox, inputFilter) {
		["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
			textbox.addEventListener(event, function() {
				if (inputFilter(this.value)) {
					this.oldValue = this.value;
					this.oldSelectionStart = this.selectionStart;
					this.oldSelectionEnd = this.selectionEnd;
				} else if (this.hasOwnProperty("oldValue")) {
					this.value = this.oldValue;
					this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
				}
			});
		});
	}

	$('.input.number').each(function(i, el){
		setInputFilter(el, function(value) {
			return /^\d*\.?\d*$/.test(value);
		});
	})

	var varificationNumber = [];

	$('.validate-form input.number').on('keydown', function(e) {
		var input = this;
		var index = $(input).data('id');
		var prevInput = $(input).parents('.item').prev('.item').find('.input.number');

		if ($('#preloaderCode').hasClass('active')) {
			$('#preloaderCode').removeClass('active');
		}

		if (e.keyCode == 8) {
			if(!$(input).val() && index != 0) {
				$(input).attr('disabled', 'true')
				varificationNumber[index] = '';
				prevInput.focus()
			}
		}
	});

	$('.validate-form input.phone').on('keydown', function(e) {
		var input = this;
		var inputs = $(input).parents('.validate-form').find('.input');
		var error = [];
		var compareValue = $(input).parents('[data-error-test]').data('error-test');

		$(this).parent('.form-group').addClass('on-focus');
		$(this).parent('.form-group').removeClass('error');
		if ($(this).val().trim().length !== 0) {
			$(this).addClass('labeled');
			$(this).parent('.form-group').addClass('on-focus');
		} else {
			$(this).removeClass('labeled');
		}

		var i = -1;
		for (el of inputs) {
			i++
			elIndex = i;

			if ($(el).data('mask') && ($(el).val().trim().replace(/_/gim, '').length < $(el).data('mask').length)) {
				error[elIndex] = false
			} else {
				error[elIndex] = true
			}
		}
		// console.log(varificationNumber)
		if (error.length == inputs.length && error.includes(false) == false) {
			$(input).parents('.validate-form').removeClass('error-form');
			$(input).parents('.validate-form').addClass('success-form');
			$(input).parents('.validate-form').find('.next-btn').removeClass('disabled');
		} else {
			$(input).parents('.validate-form').addClass('error-form');
			$(input).parents('.validate-form').removeClass('success-form');
			$(input).parents('.validate-form').find('.next-btn').addClass('disabled');
		}
	});

	$('.validate-form input:not(.ignored), .validate-form textarea:not(.ignored)').on('input', function(e) {
		var input = this;
		var inputs = $(input).parents('.validate-form').find('.input');
		var error = [];
		var compareValue = $(input).parents('[data-error-test]').data('error-test');

		$(this).parent('.form-group').addClass('on-focus');
		$(this).parent('.form-group').removeClass('error');
		if ($(this).val().trim().length !== 0) {
			$(this).addClass('labeled');
			$(this).parent('.form-group').addClass('on-focus');
		} else {
			$(this).removeClass('labeled');
		}

		if ($(this).data('parent') && $(this).prop('checked') === true) {
			$('[data-children="#' + $(this).attr('id') +'"]').prop('checked', 'checked');
		} else {
			$('[data-children="#' + $(this).attr('id') +'"]').prop('checked', false);
		}

		if ($(this).data('children') && $(this).prop('checked') !== false) {
			$($(this).data('children')).prop('checked', 'checked');
		} else if ($(this).prop('checked') === false && $('[data-children]').not(this).prop('checked') !== false) {
			$($(this).data('children')).prop('checked', 'checked');
		} else {
			$($(this).data('children')).prop('checked', false);
		}

		var i = -1;
		for (el of inputs) {
			i++
			elIndex = i;

			if ($(el).hasClass('email') && !isValidEmail($(el).val().trim())) {
				error[elIndex] = false;
			} else if ($(el).data('mask') && ($(el).val().trim().replace(/_/gim, '').length < $(el).data('mask').length)) {
				error[elIndex] = false;
			} else if ($(el).hasClass('number') && !isSingleNumber($(el).val().trim())) {
				error[elIndex] = false;
			} else if ($(el).data('minlength') && $(el).val().trim().length < $(el).data('minlength')) {
				error[elIndex] = false;
			} else if ($(el).val().trim() === "") {
				error[elIndex] = false;
			} else if ($(el).hasClass('checkbox') && $(el).prop('checked') === false) {
				error[elIndex] = false;
			} else {
				error[elIndex] = true;
			}
		}
		var numberValue;
		var arrayValue = [];
		if ($(input).hasClass('number')) {

			if ($(input).data('id') == 0) {
				if ($(input).val().length > 1) {
					arrayValue = $(input).val().split('');

					$('[data-id="0"]').val(arrayValue[0]);
					$('[data-id="1"]').removeAttr('disabled').val(arrayValue[1]).addClass('labeled');
					$('[data-id="2"]').removeAttr('disabled').val(arrayValue[2]).addClass('labeled');
					$('[data-id="3"]').removeAttr('disabled').val(arrayValue[3]).addClass('labeled');
					setTimeout(function(){
						$('[data-id="3"]').focus();
					},10)
					varificationNumber = arrayValue.slice(0,4);
					if (arrayValue.length < 4) {
						$('[data-id="2"]').attr('disabled', 'true').val('').removeClass('labeled');
						$('[data-id="3"]').attr('disabled', 'true').val('').removeClass('labeled');
						setTimeout(function(){
							$('[data-id="1"]').focus();
						},10)
					}
				} else {
					$('[data-id="1"]').attr('disabled', 'true').val('').removeClass('labeled');
					$('[data-id="2"]').attr('disabled', 'true').val('').removeClass('labeled');
					$('[data-id="3"]').attr('disabled', 'true').val('').removeClass('labeled');
				}
			} else {
				if($(input).val().length > 1) {
					numberValue = $(input).val()[0];
				} else {
					numberValue = $(input).val();
				}
				$(input).val(numberValue);
			}

		}

		if ($(input).hasClass('number') && isSingleNumber($(input).val().trim())) {
			var nextInput = $(input).parents('.item').next('.item').find('.input.number');
			nextInput.removeAttr('disabled').focus()

			if ($(input).val()) {
				varificationNumber[$(input).data('id')] = $(input).val();
			}
		}

		if (compareValue == varificationNumber.join('')){
			$(input).parents('.form-group').addClass('error');
		} else {
			$(input).parents('.form-group').removeClass('error');
		}

		// console.log(varificationNumber)
		if (error.length == inputs.length && error.includes(false) == false) {
			$(input).parents('.validate-form').removeClass('error-form');
			$(input).parents('.validate-form').addClass('success-form');
			$(input).parents('.validate-form').find('.next-btn').removeClass('disabled');
		} else {
			$(input).parents('.validate-form').addClass('error-form');
			$(input).parents('.validate-form').removeClass('success-form');
			$(input).parents('.validate-form').find('.next-btn').addClass('disabled');
		}
	});

$('.validate-form').on('submit', function(e) {
	var called, error, errors, hasErrors, isFormScrolled, j, len, parent, scrollTarget;
	errors = [false, false];
	isFormScrolled = false;
	scrollTarget = $(this).parents('.popup').length !== 0 ? $('.popup') : $('html, body');
	$('input:not(.ignored), textarea:not(.ignored), .checkbox-input', this).each(function(i, input) {
		var emailMessage;
		$(input).siblings('.icon-success').removeClass('active');
		emailMessage = Validator($(input));
		if ($(input).hasClass('email') && !isValidEmail($(input).val().trim())) {
			$(input).closest('.form-group').find('.alert').html(emailMessage);
			errors[i] = true;
			$(input).siblings('.icon-error').addClass('active');
			$(input).parents('.form-group').addClass('error');
		} else if ($(input).hasClass('number') && !isSingleNumber($(input).val().trim())) {
			errors[i] = true;
			$(input).siblings('.icon-error').addClass('active');
			$(input).parents('.form-group').addClass('error');
		} else if ($(input).data('equals') && $(input).val().trim() !== $($(input).data('equals')).val().trim()) {
			errors[i] = true;
			$(input).siblings('.icon-error').addClass('active');
			$(input).parents('.form-group').addClass('error');
		} else if ($(input).hasClass('checkbox-valid') && $(input).prop('checked') === false) {
			errors[i] = true;
			$(input).siblings('.icon-error').addClass('active');
			$(input).parents('.form-group').addClass('error');
		} else if ($(input).hasClass('phone') && ($(input).val().trim().replace(/_/gim, '').length < $(input).data('mask').length)) {
			errors[i] = true;
			$(input).siblings('.icon-error').addClass('active');
			$(input).parents('.form-group').addClass('error');
		} else if ($(input).data('minlength') && $(input).val().trim().length < $(input).data('minlength')) {
			errors[i] = true;
			$(input).siblings('.icon-error').addClass('active');
			$(input).parents('.form-group').addClass('error');
		} else if ($(input).val().trim() === "") {
			errors[i] = true;
			$(input).siblings('.icon-error').addClass('active');
			$(input).parents('.form-group').addClass('error');
		} else {
			errors[i] = false;
			$(input).siblings('.icon-error').removeClass('active');
			$(input).siblings('.icon-success').addClass('active');
			$(input).parents('.form-group').removeClass('error');
		}
	});
	hasErrors = false;
	for (j = 0, len = errors.length; j < len; j++) {
		error = errors[j];
		if (error) {
			hasErrors = true;
			e.preventDefault();
			return;
		}
	}
	if (!hasErrors) {
		e.preventDefault();
		prevForm = $(this).parent('.step');
		nextForm = $(this).data('next');

		$(prevForm).removeClass('active');
		$(nextForm).addClass('active');


		$(nextForm).find('[data-focus]').focus();
	}
});


$('.input').focus(function() {
	$(this).parent('.form-group').addClass('on-focus');
}).blur(function() {
	$(this).parent('.form-group').removeClass('on-focus');
});
setTimeout(function() {
	$('.input').each(function(i, input) {
		if ($(input).val().trim().length !== 0) {
			return $(input).addClass('labeled');
		} else {
			return $(input).removeClass('labeled');
		}
	});

}, 300);
});
