$(document).ready(function() {
	$('.button').mousedown(function(e) {
		var left, top;
		left = e.pageX - $(this).offset().left;
		top = e.pageY - $(this).offset().top;
		$('.fade', this).css({
			left: left + "px",
			top: top + "px"
		});
		setTimeout((function(_this) {
			return function() {
				return $('.fade', _this).addClass('active');
			};
		})(this), 1);
		setTimeout((function(_this) {
			return function() {
				return $('.fade', _this).removeClass('active');
			};
		})(this), 600);
	});
});

$(document).ready(function() {

	function getRandom(size){
		let zeros = '0'.repeat(size - 1);
		let x = parseFloat('1' + zeros);
		let y = parseFloat('9' + zeros);
		let confirmationCode = String(Math.floor(x + Math.random() * y));
		return confirmationCode;
	}

	$(document).on('click', '[data-cloned] > .button', function(){
		let element = $(this).parents('[data-cloned]');
		let cloned = $(element).clone(true);
		$(cloned).find('.selecter').remove();
		let inputId = $(element).find('input, select').attr('id')+getRandom(3);
		$(cloned).find('input, select').attr('id', inputId).val('').attr('name', inputId);
		$(cloned).find('label').remove();
		$(cloned).insertAfter(element);
		$(element).removeAttr('data-cloned');
		$(element).find('.button').remove();
		window.tooltipHint.hide();

		// selecter reinit
		if ($(cloned).find('select')){

			let data = $(cloned).find('select').data();
			$(cloned).find('select').selecter({
				multiple: data && data.multiple === true ? true : false,
				search: data && data.search === true ? true : false,
				classname: data && data.classname ? data.classname : null,
				onOpen: function(){ },
				onChange: function(select){
					window.getSelectChangedOption(select);
				},
				onClose: function(){ },
			});
		}
	});
});
$(document).ready(function() {
	$(document).on('click', '[data-delete]', function(e){
		if ($(this).siblings('[data-delete]').length == 0) {
			$(this).parent().addClass('empty');
		}
		$(this).remove();
		window.tooltipHint.hide();
	})
});

$(document).ready(function() {

	function closeAllDropdowns(dropdown){
		dropdown.removeClass('active');
		dropdown.find('.anchor').removeClass('active');
		dropdown.find('[data-fade-in]').removeClass('faded-in');
	}

	$('[data-dropdown]').each(function(i, elem) {
		$('.anchor', elem).click(function(e) {
			e.preventDefault();
			closeAllDropdowns($('[data-dropdown]').not(elem));
			$(this).not('.not-active').toggleClass('active');
			$(this).closest('[data-dropdown]').toggleClass('active');

			setTimeout(function(){
				$(elem).find('[data-fade-in]').addClass('faded-in');
			}, 50);
		});

		$('.close-dropdown', elem).click(function(e) {
			$(elem).removeClass('active');
		});
	});

	$(document).on('click', function(e){
		if (!$(e.target).closest('[data-dropdown]').length) {
			closeAllDropdowns($('[data-dropdown]'));
		}
	})
});

$(document).ready(function() {
	$('[data-toggle]').each(function(i, button) {
		$(button).click(function(e) {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$($(this).data('toggle')).removeClass('active animated');
			} else {
				$(this).addClass('active');
				$($(this).data('toggle')).addClass('active');
				setTimeout(function(){
					$($(this).data('toggle')).addClass('animated');
				}.bind(this), 200);
			}
		});
	});
});
$(document).ready(function() {

	window.tooltipHint = {
		x: 0,
		y: 0,
		newTooltip: null,
		element: null,

		setCoordinates: function(pageX, pageY, element){
			this.x = pageX;
			this.y = pageY;
			// + element height/width
		},

		setText: function(text){
			this.text = text;
		},

		getCoordinates: function(){
			return {x: this.x, y: this.y}
		},

		getText: function(){
			return this.text;
		},

		getElementSize: function(){
			return this.element.getBoundingClientRect();
		},

		setTooltipPosition: function(){
			// console.log(this.getElementSize())
			
			// this.getCoordinates().y + "px";
			// this.getCoordinates().x + "px";
		},

		createTooltipElement: function(){
			this.newTooltip = document.createElement('div');
			this.newTooltip.className = "tooltip";
			this.newTooltip.setAttribute("id", "tooltip");
			this.newTooltip.appendChild(document.createTextNode(this.getText()));
			// postion
			this.newTooltip.style.top = this.getCoordinates().y + "px";
			this.newTooltip.style.left = this.getCoordinates().x + "px";
					document.body.appendChild(this.newTooltip);
		},

		show: function(element, event){
			if (!element || !event) return;
			let text = element.dataset.tooltip.trim();
			this.element = element;
			this.setText(text);
			this.setCoordinates(event.pageX,event.pageY, element);
			this.createTooltipElement();

			setTimeout(function(){
				this.newTooltip.classList.add("active");
			}.bind(this), 250)
		},

		hide: function(){
			this.setText('');
			this.setCoordinates(0, 0);
			let tooltip = document.getElementById('tooltip');
			if (tooltip) {
				tooltip.remove();
			}
		}
	};


$(document).on('mouseenter', '[data-tooltip]', function(e){
	let tooltip = this;
	window.tooltipHint.show(tooltip, e);
})

$(document).on('mouseleave', '[data-tooltip]', function(e){
	let tooltip = this;
	window.tooltipHint.hide();
})

});
$(document).ready(function() {
	if ($('[data-fancybox]') && typeof Fancybox === 'function') {
		Fancybox.bind('[data-fancybox]', {
			compact: false,
			idle: false,
			animated: false,
			showClass: false,
			hideClass: false,
			dragToClose: false,
			Images: {
				zoom: false,
			},
			Toolbar: {
				display: {
					left: [],
					middle: [],
					right: ['close'],
				},
			},
		});
	};
});
function handleFiles(){
	let files = this.files;
	let loaderMainWrap = null;
	let uploadBox = this.parentElement.querySelectorAll('[data-upload]')[0];
	if (uploadBox.classList.contains('single-load')) {
		oldPhoto = uploadBox.children;
		for (var i = 0; i < oldPhoto.length; i++) {
			oldPhoto[i].remove();
		}
	}
	for (var i = 0; i < files.length; i++) {
		getBase64(files[i], uploadBox);
	}
}

function removeFiles(){
	this.remove();
	window.tooltipHint.hide();
}

function hasClass(element, className) {
	return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}

function getBase64(file, loaderMainWrap) {
	var reader = new FileReader();
	reader.readAsDataURL(file);
	if (file.type.startsWith("image/")) {
		reader.onload = function () {
			appendImage(file.name, reader.result, loaderMainWrap);
		};
		reader.onerror = function (error) {
			console.error('Error: ', error);
		};
	} else if (file.type.startsWith("video/")) {
		reader.onload = function () {
			appendVideo(file.name, reader.result, loaderMainWrap);
		};
		reader.onerror = function (error) {
			appendError(file.name,'load', loaderMainWrap);
		};
	} else {
		appendError(file.name, 'type', loaderMainWrap);
	};
};

function appendImage(name, src, loaderMainWrap){
	let coverEl = document.createElement("div");
			coverEl.classList.add('files-cover');
			coverEl.setAttribute('data-tooltip', 'Клікніть, щоб видалити')
	let innerCover = document.createElement("div");
			innerCover.classList.add('inner');
	let imgEl = document.createElement('img');
			imgEl.src = src;
	innerCover.appendChild(imgEl);
	coverEl.appendChild(innerCover);
	let nameEl = document.createElement("div");
			nameEl.classList.add('file-name');
			nameEl.appendChild(document.createTextNode(name));
	coverEl.appendChild(nameEl);
	coverEl.addEventListener("click", removeFiles, false);
	if (loaderMainWrap) {
		loaderMainWrap.appendChild(coverEl);
	}
};

function appendVideo(name, src, loaderMainWrap){
	let coverEl = document.createElement("div");
			coverEl.classList.add('files-cover');
			coverEl.setAttribute('data-tooltip', 'Клікніть, щоб видалити')
	let innerCover = document.createElement("div");
			innerCover.classList.add('inner');
	let videoEl = document.createElement('video')
			videoEl.src = src
			videoEl.controls = true;
	innerCover.appendChild(videoEl);
	coverEl.appendChild(innerCover);
	let nameEl = document.createElement("div");
			nameEl.classList.add('file-name');
			nameEl.appendChild(document.createTextNode(name));
	coverEl.appendChild(nameEl);
	coverEl.addEventListener("click", removeFiles, false);
	if (loaderMainWrap) {
		loaderMainWrap.appendChild(coverEl);
	}
};

function appendError(name, type, loaderMainWrap){
	let errorStatus = {
		load: 'Помилка завантаження',
		type: 'Тільки для .png, .jpg, .mp4'
	}
	let coverEl = document.createElement("div");
			coverEl.classList.add('error-cover');
			coverEl.classList.add('files-cover');
			coverEl.setAttribute('data-tooltip', 'Клікніть, щоб видалити')
	let textEl = document.createElement("div");
			textEl.classList.add('error-text');
			textEl.appendChild(document.createTextNode(errorStatus[type]));
	coverEl.appendChild(textEl);
	let nameEl = document.createElement("div");
			nameEl.classList.add('file-name');
			nameEl.appendChild(document.createTextNode(name));
	coverEl.appendChild(nameEl);
	coverEl.addEventListener("click", removeFiles, false);
	if (loaderMainWrap) {
		loaderMainWrap.appendChild(coverEl);
	}
};

document.querySelectorAll('[data-loader]').forEach(function(loaderCover, i){
	let uploadBox = loaderCover.querySelectorAll('[data-upload]')[0];
	coverChildren = loaderCover.children;
	for (var i = 0; i < coverChildren.length; i++) {
		if (coverChildren[i].hasAttribute('data-label')) {
			let fileLoader = coverChildren[i];
					fileLoader.ondragover = function (e) {
						e.preventDefault();
						fileLoader.classList.add('hover')
					};
					fileLoader.ondragend = function (e) {
						e.preventDefault();
						fileLoader.classList.remove('hover');
					};
					fileLoader.ondrop = function (e) {
						e.preventDefault();
						fileLoader.classList.remove('hover');
						for (var i = 0; i < e.dataTransfer.files.length; i++) {
							getBase64(e.dataTransfer.files[i], uploadBox);
						}
					}
		} else if (coverChildren[i].hasAttribute('data-file')) {
			let inputElement = coverChildren[i];
					inputElement.addEventListener("change", handleFiles, false);
		} else {
			appendError('type', uploadBox);
		}
	}
})

// delete loaded files
document.querySelectorAll('.files-cover').forEach(function(loaderCover, i){
	loaderCover.addEventListener("click", removeFiles, false);
})














$(document).ready(function(){

	window.getSelectChangedOption = function(select){
		let id = $(select).attr('id');
		filterArray = [];
		$(select).find('option').each(function(i, option){
			if ($(option).attr('selected') && !$(option).attr('disabled')) {
				filterArray.push($(option).text().trim())
			};
		});
	};

	// select init
	$(document).find('select').each(function(i, select) {
		let data = $(select).data();
		// selecter
		$(select).selecter({
			multiple: data && data.multiple === true ? true : false,
			search: data && data.search === true ? true : false,
			classname: data && data.classname ? data.classname : null,
			onOpen: function(){ },
			onChange: function(select){
				window.getSelectChangedOption(select);
			},
			onClose: function(){ },
		});
	});

	$(document).on('click', '[type="reset"]', function(e){
		let selectors = $(this).parents('form').find('select');
		$(selectors).each(function(i, select){
			$(select).find('option').each(function(i, option){
				$(option).prop('selected', false).removeAttr('selected');
			});
			$(select).find('option[disabled]').prop('selected', true).attr('selected', 'true');
			$(select).next('.selecter').find('.anchor').html($(select).find('option[disabled]').text().trim());
			$(select).next('.selecter').find('.anchor').removeClass('collapsed-bottom');
			$(select).next('.selecter').find('li').each(function(i, li){
				$(li).removeClass('active');
				$(li).find('[type="checkbox"]').prop('checked', false).removeAttr('checked');
				if ($(li).hasClass('disabled')) {
					$(li).addClass('active')
				}
			});
		});
		let inputs = $(this).parents('form').find('input');
		$(inputs).each(function(i, input){
			$(input).attr('value',' ')
		})
	});

	$(document).on('click', '.selecter .tag', function(e){
		e.preventDefault();
		e.stopPropagation();
		let tag = this;
		let selecter = $(tag).parents('.selecter');
		if (!selecter.length) return;
		let tagText = $(tag).text().trim().replace('X','');

		let select = $(selecter).siblings('select');

		$(select).find('option').each(function(i, option){
			if (tagText == $(option).val()) {
				$(option).prop('selected', false).removeAttr('selected');
			}
		});

		$(selecter).find('li').each(function(i, li){
			if (tagText == $(li).text().trim()) {
				$(li).removeClass('active');
				$(li).find('[type="checkbox"]').prop('checked', false).removeAttr('checked');
			}
		});

		$(tag).remove();

		if ($(selecter).find('.anchor').find('.tag').length < 1) {
			let text = $(select).find('option[disabled]').text().trim();
			$(select).find('option[disabled]').prop('selected', true).attr('selected', 'true');
			$(selecter).find('.anchor').removeClass('collapsed-bottom').html(text);
		}

	});
});







$(document).ready(function() {
	$(function() {
		$('[data-call]').click(function(e) {
			var called;
			e.preventDefault();
			called = $($(this).data('call'));
			if (!called.hasClass('active')) {
				$('body').css('width', $('body').width() + 'px').addClass('overlayed');
				called.addClass('showed');
				setTimeout(function() {
					called.addClass('active');
					if (called.data('onopen') && window[called.data('onopen')]) {
						return window[called.data('onopen')](called);
					}
				}, 100);
			}
		});
		window.CallPopup = function(selector) {
			var called;
			called = $(selector);
			if (!called.hasClass('active')) {
				$('body').css('width', $('body').width() + 'px').addClass('overlayed');
				called.addClass('showed');
				setTimeout(function() {
					called.addClass('active');
					if (called.data('onopen') && window[called.data('onopen')]) {
						return window[called.data('onopen')](called);
					}
				}, 100);
			}
		};
		// CallPopup('#classDetail');
		$('[data-dismiss]').click(function(e) {
			var called;
			e.preventDefault();
			called = $($(this).data('dismiss'));
			$('body').css('width', '').removeClass('overlayed');
			called.removeClass('active');
			setTimeout(function() {
				called.removeClass('showed');
				if ($(document).find('.popup.active').length < 1) {
					if (called.data('onclose') && window[called.data('onclose')]) {
						return window[called.data('onclose')](called);
					}
				}
			}, 300);
		});
		let hidePopups = function() {
			$('.popup').each(function(i, popup) {
				var called;
				called = $(popup);
				$('body').css('width', '').removeClass('overlayed');
				called.removeClass('active');
				setTimeout(function() {
					called.removeClass('showed');
					if (called.data('onclose') && window[called.data('onclose')]) {
						return window[called.data('onclose')](called);
					}
				}, 300);
			});
		};
		$('.close-all-popups').click(function(e) {
			e.preventDefault();
			hidePopups();
		});
		$('.popup').click(function(e) {
			if ($(e.target).closest('.inner').length === 0 && $(e.target).closest('.files-cover').length === 0) {
				e.preventDefault();
				hidePopups();
			}
		});
	});
});


$(document).ready(function() {

	function printDiv(divName){
		var printContents = document.getElementById(divName).innerHTML;
		var originalContents = document.body.innerHTML;
		document.body.innerHTML = printContents;
		window.print();
		document.body.innerHTML = originalContents;
	}

	$(document).on('click', '[data-print]', function(e){
		e.preventDefault();
		printDiv($(this).data('print'));
	});
});
$(document).ready(function() {

	$('[data-scrollto]').click(function(e) {
		var headerOffset;
		// console.log(e)
		e.preventDefault();
		headerOffset = $('.main-header').hasClass('fixed') ? $('.main-header').outerHeight() : 0;
		$('html,body').animate({
			scrollTop: $($(this).data('scrollto')).offset().top - headerOffset
		}, 500);
	});
});
$('body').on('click', '[data-tabs] > .tab', function(e) {
	let container = $(this).closest('[data-tabs]')[0];
	if ($(this).hasClass('disabled')) {
		return;
	}
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	$('> .tab-content', container).removeClass('active').eq($(this).index()).addClass('active');
});

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