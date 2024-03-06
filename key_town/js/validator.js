

$(function() {
	var isValidEmail;
	$('.validate-form input:not(.ignored), .validate-form textarea:not(.ignored)').on('keyup keydown change', function() {
		var errors, i, input;
		input = this;
		i = 0;
		errors = [false];
		$(input).siblings('.icon-success').removeClass('active');
		if ($(input).hasClass('email') && !isValidEmail($(input).val().trim())) {
			errors[i] = true;
			$(input).siblings('.icon-error').addClass('active');
			$(input).parents('.input-cover').addClass('error');
		} else if ($(input).data('mask') && ($(input).val().trim().replace(/_/gim, '').length < $(input).data('mask').length)) {
			errors[i] = true;
			$(input).siblings('.icon-error').addClass('active');
			$(input).parents('.input-cover').addClass('error');
		} else if ($(input).data('minlength') && $(input).val().trim().length < $(input).data('minlength')) {
			errors[i] = true;
			$(input).siblings('.icon-error').addClass('active');
			$(input).parents('.input-cover').addClass('error');
		} else if ($(input).data('equals') && $(input).val().trim() !== $($(input).data('equals')).val().trim()) {
			errors[i] = true;
			$(input).siblings('.icon-error').addClass('active');
			$(input).parents('.input-cover').addClass('error');
		} else if ($(input).val().trim() === "") {
			errors[i] = true;
			$(input).siblings('.icon-error').addClass('active');
			$(input).parents('.input-cover').addClass('error');
		} else {
			errors[i] = false;
			$(input).siblings('.icon-error').removeClass('active');
			$(input).siblings('.icon-success').addClass('active');
			$(input).parents('.input-cover').removeClass('error');
		}
	});
	isValidEmail = function(email) {
		var re;
		re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	};
	$('.validate-form').on('submit', function(e) {
		var error, errors, hasErrors, isFormScrolled, j, len, scrollTarget;
		errors = [false, false];
		isFormScrolled = false;
		scrollTarget = $(this).parents('.popup').length !== 0 ? $('.popup') : $('html, body');
		$('input:not(.ignored), textarea:not(.ignored)', this).each(function(i, input) {
			$(input).siblings('.icon-success').removeClass('active');
			if ($(input).hasClass('email') && !isValidEmail($(input).val().trim())) {
				errors[i] = true;
				$(input).siblings('.icon-error').addClass('active');
				$(input).parents('.input-cover').addClass('error');
			} else if ($(input).data('minlength') && $(input).val().trim().length < $(input).data('minlength')) {
				errors[i] = true;
				$(input).siblings('.icon-error').addClass('active');
				$(input).parents('.input-cover').addClass('error');
			} else if ($(input).data('equals') && $(input).val().trim() !== $($(input).data('equals')).val().trim()) {
				errors[i] = true;
				$(input).siblings('.icon-error').addClass('active');
				$(input).parents('.input-cover').addClass('error');
			} else if ($(input).val().trim() === "") {
				errors[i] = true;
				$(input).siblings('.icon-error').addClass('active');
				$(input).parents('.input-cover').addClass('error');
			} else {
				errors[i] = false;
				$(input).siblings('.icon-error').removeClass('active');
				$(input).siblings('.icon-success').addClass('active');
				$(input).parents('.input-cover').removeClass('error');
			}
		});
		hasErrors = false;
		for (j = 0, len = errors.length; j < len; j++) {
			error = errors[j];
			if (error) {
				hasErrors = true;
				e.preventDefault();
				$('.form-head').addClass('error');
				return;
			}
		}
		if (!hasErrors) {
			$('.success-fadeout', this).addClass('active');
			$('.success-fadein', this).fadeIn();
			$(input).parents('.input-cover').removeClass('error');
		}
	});
	$('.file-input').each(function(i, input) {
		$('input', input).on('change', function() {
			return $('label', input).html(this.files[0].name);
		});
	});
});

window.addEventListener("DOMContentLoaded", function() {
		[].forEach.call( document.querySelectorAll('.phone'), function(input) {
		var keyCode;
		function mask(event) {
				event.keyCode && (keyCode = event.keyCode);
				var pos = this.selectionStart;
				if (pos < 3) event.preventDefault();
				var matrix = "+38 (___) ___-__-__",
						i = 0,
						def = matrix.replace(/\D/g, ""),
						val = this.value.replace(/\D/g, ""),
						new_value = matrix.replace(/[_\d]/g, function(a) {
								return i < val.length ? val.charAt(i++) || def.charAt(i) : a
						});
				i = new_value.indexOf("_");
				if (i != -1) {
						i < 5 && (i = 3);
						new_value = new_value.slice(0, i)
				}
				var reg = matrix.substr(0, this.value.length).replace(/_+/g,
						function(a) {
								return "\\d{1," + a.length + "}"
						}).replace(/[+()]/g, "\\$&");
				reg = new RegExp("^" + reg + "$");
				if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
				if (event.type == "blur" && this.value.length < 5)  this.value = ""
		}

		input.addEventListener("input", mask, false);
		input.addEventListener("focus", mask, false);
		input.addEventListener("blur", mask, false);
		input.addEventListener("keydown", mask, false)
	});
});
