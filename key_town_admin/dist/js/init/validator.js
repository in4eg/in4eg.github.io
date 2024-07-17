$(function() {
	let isValidEmail = function(email) {
		let reg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
		return reg.test(email);
	};
	let isValidPhone = function(phone) {
		let reg = new RegExp(/^[0-9]{10}$/);
		return reg.test(phone);
	};
	$('.validate-form input:not(.ignored), .validate-form textarea:not(.ignored)').on('keyup keydown change', function() {
		let input = this;
		let i = 0;
		let errors = [false];
		$(input).parents('.input-cover').removeClass('success');
		if ($(input).hasClass('phone') && !isValidPhone($(input).val().trim())) {
			errors[i] = true;
			$(input).parents('.input-cover').addClass('error');
		} else if ($(input).hasClass('email') && !isValidEmail($(input).val().trim())) {
			errors[i] = true;
			$(input).parents('.input-cover').removeClass('success').addClass('error');
		} else if ($(input).data('mask') && ($(input).val().trim().replace(/_/gim, '').length < $(input).data('mask').length)) {
			errors[i] = true;
			$(input).parents('.input-cover').removeClass('success').addClass('error');
		} else if ($(input).data('minlength') && $(input).val().trim().length < $(input).data('minlength')) {
			errors[i] = true;
			$(input).parents('.input-cover').removeClass('success').addClass('error');
		} else if ($(input).data('equals') && $(input).val().trim() !== $($(input).data('equals')).val().trim()) {
			errors[i] = true;
			$(input).parents('.input-cover').removeClass('success').addClass('error');
		} else if ($(input).val().trim() === "") {
			errors[i] = true;
			$(input).parents('.input-cover').removeClass('success').addClass('error');
		} else {
			errors[i] = false;
			$(input).parents('.input-cover').removeClass('error').addClass('success');
		}
	});
	$('.validate-form').on('submit', function(e) {
		var error, errors, hasErrors, j, len;
		errors = [false, false];
		$('input:not(.ignored), textarea:not(.ignored)', this).each(function(i, input) {
			$(input).siblings('.icon-success').removeClass('active');
			if ($(input).hasClass('phone') && !isValidPhone($(input).val().trim())) {
				errors[i] = true;
				e.preventDefault();
				$(input).parents('.input-cover').addClass('error');
			} else if ($(input).hasClass('email') && !isValidEmail($(input).val().trim())) {
				errors[i] = true;
				e.preventDefault();
				$(input).parents('.input-cover').addClass('error');
			} else if ($(input).data('minlength') && $(input).val().trim().length < $(input).data('minlength')) {
				errors[i] = true;
				e.preventDefault();
				$(input).parents('.input-cover').addClass('error');
			} else if ($(input).data('equals') && $(input).val().trim() !== $($(input).data('equals')).val().trim()) {
				errors[i] = true;
				e.preventDefault();
				$(input).parents('.input-cover').addClass('error');
			} else if ($(input).val().trim() === "") {
				errors[i] = true;
				e.preventDefault();
				$(input).parents('.input-cover').addClass('error');
			} else {
				errors[i] = false;
				$(input).parents('.input-cover').removeClass('error');
			}
		});
		hasErrors = false;
	});
});


$(document).ready(function() {
	$('[data-show]').each(function(i, button){
		$(button).click(function(e) {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$($(this).data('show')).find('[type="text"]').attr('type', 'password');
			} else {
				$(this).addClass('active');
				$($(this).data('show')).find('[type="password"]').attr('type', 'text');
			}
		});
	})
})