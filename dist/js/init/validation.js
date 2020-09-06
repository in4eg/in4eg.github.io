$(function() {
	var isValidEmail, isValidLink;
	$('.validate-form input:not(.ignored), .validate-form textarea:not(.ignored)').on('keyup keydown change', function() {
		var errors, i, input;
		input = this;
		i = 0;
		errors = [false];
		$(input).siblings('.icon-success').removeClass('active');
		if ($(input).hasClass('email') && !isValidEmail($(input).val().trim())) {
			errors[i] = true;
			$(input).siblings('.icon-error').addClass('active');
			$(input).parents('.form-group').addClass('error').removeClass('success');
		} else if ($(input).hasClass('link') && !isValidLink($(input).val().trim())) {
			errors[i] = true;
			$(input).siblings('.icon-error').addClass('active');
			$(input).parents('.form-group').addClass('error').removeClass('success');
		} else if ($(input).data('mask') && ($(input).val().trim().replace(/_/gim, '').length < $(input).data('mask').length)) {
			errors[i] = true;
			$(input).siblings('.icon-error').addClass('active');
			$(input).parents('.form-group').addClass('error').removeClass('success');
		} else if ($(input).data('minlength') && $(input).val().trim().length < $(input).data('minlength')) {
			errors[i] = true;
			$(input).siblings('.icon-error').addClass('active');
			$(input).parents('.form-group').addClass('error').removeClass('success');
		} else if ($(input).data('equals') && $(input).val().trim() !== $($(input).data('equals')).val().trim()) {
			errors[i] = true;
			$(input).siblings('.icon-error').addClass('active');
			$(input).parents('.form-group').addClass('error').removeClass('success');
		} else if ($(input).val().trim() === "") {
			errors[i] = true;
			$(input).siblings('.icon-error').addClass('active');
			$(input).parents('.form-group').addClass('error').removeClass('success');
		} else {
			errors[i] = false;
			$(input).siblings('.icon-error').removeClass('active');
			$(input).siblings('.icon-success').addClass('active');
			$(input).parents('.form-group').removeClass('error').addClass('success');
		}
	});
	isValidEmail = function(email) {
		var re;
		re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	};
	isValidLink = function(link) {
		var reg;
		reg = /:\/\/(?:www\.)?(facebook)(.*)/;
		return reg.test(link);
	};
	$('.validate-form').on('submit', function(e) {
		var called, error, errors, hasErrors, isFormScrolled, j, len, parent, scrollTarget;
		errors = [false, false];
		isFormScrolled = false;
		scrollTarget = $(this).parents('.popup').length !== 0 ? $('.popup') : $('html, body');
		$('input:not(.ignored), textarea:not(.ignored)', this).each(function(i, input) {
			$(input).siblings('.icon-success').removeClass('active');
			if ($(input).hasClass('email') && !isValidEmail($(input).val().trim())) {
				errors[i] = true;
				$(input).siblings('.icon-error').addClass('active');
				$(input).siblings('.input-label').addClass('shaked');
				$(input).parents('.form-group').addClass('error');
			} else if ($(input).hasClass('link') && !isValidLink($(input).val().trim())) {
				errors[i] = true;
				$(input).siblings('.icon-error').addClass('active');
				$(input).siblings('.input-label').addClass('shaked');
				$(input).parents('.form-group').addClass('error');
			} else if ($(input).data('mask') && ($(input).val().trim().replace(/_/gim, '').length < $(input).data('mask').length)) {
				errors[i] = true;
				$(input).siblings('.icon-error').addClass('active');
				$(input).siblings('.input-label').addClass('shaked');
				$(input).parents('.form-group').addClass('error');
			} else if ($(input).data('minlength') && $(input).val().trim().length < $(input).data('minlength')) {
				errors[i] = true;
				$(input).siblings('.icon-error').addClass('active');
				$(input).siblings('.input-label').addClass('shaked');
				$(input).parents('.form-group').addClass('error');
			} else if ($(input).data('equals') && $(input).val().trim() !== $($(input).data('equals')).val().trim()) {
				errors[i] = true;
				$(input).siblings('.icon-error').addClass('active');
				$(input).siblings('.input-label').addClass('shaked');
				$(input).parents('.form-group').addClass('error');
			} else if ($(input).val().trim() === "") {
				errors[i] = true;
				$(input).siblings('.icon-error').addClass('active');
				$(input).parents('.form-group').addClass('error');
			} else {
				errors[i] = false;
				$(input).siblings('.icon-error').removeClass('active');
				$(input).siblings('.input-label').addClass('shaked');
				$(input).siblings('.icon-success').addClass('active');
				$(input).parents('.form-group').removeClass('error');
			}
			setTimeout(function() {
				$('.input-label').removeClass('shaked');
			}, 350);
		});

		var checkCount = 0;
		$('[data-offers-checkbox]').each(function(i, checkbox){
			if ($(checkbox).prop('checked')) {
				checkCount += 1;
			}
		})

		if (checkCount == 0) {
			if (typeof $(this).data('popup-error') !== 'undefined') {
				called = $($(this).data('popup-error'));
				if (!called.hasClass('active')) {
					$('body').css('width', $('body').width() + 'px').addClass('overlayed');
					called.addClass('showed');
					setTimeout(function() {
						called.addClass('active');
						if (called.data('onopen') && window[called.data('onopen')]) {
							return window[called.data('onopen')](called);
						}
						if ($('.popup .scrolled')) {
							$('.popup .scrolled').perfectScrollbar('update');
						}
					}, 100);
				};
			};
		};

		hasErrors = false;
		for (j = 0, len = errors.length; j < len; j++) {
			error = errors[j];
			if (error) {

				hasErrors = true;
				e.preventDefault();
				return;
			};
		};
		if (!hasErrors) {
			$('.input').parents('.form-group').removeClass('error');
			$('.input').parents('.form-group').addClass('success');
		};
	});
});
