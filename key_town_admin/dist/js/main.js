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

var dropFile, formatBytes, handleImage, handleVideo, stateChange, uploadProgress;

uploadProgress = function(event) {
	var percent;
	percent = parseInt(event.loaded / event.total * 100);
	dropZone.text('Загрузка: ' + percent + '%');
};

stateChange = function(event) {
	if (event.target.readyState === 4) {
		if (event.target.status === 200) {
			dropZone.text('Files uploaded success');
		} else {
			dropZone.text('Error! Try again');
			dropZone.addClass('error');
		}
	}
};

dropFile = function(dropZone, type, maxSize) {
	var maxFileSize, sizeCaption;
	maxFileSize = maxSize;
	if (type === 'image') {
		sizeCaption = '5';
	} else if (type === 'video') {
		sizeCaption = '20';
	}
	if (window.FileReader) {
		dropZone.ondragover = function() {
			$(dropZone).addClass('hover');
			return false;
		};
		dropZone.ondragleave = function() {
			$(dropZone).removeClass('hover');
			return false;
		};
		dropZone.ondrop = function(event) {
			var file, i, j, len, parent, reader, ref;
			event.preventDefault();
			$(dropZone).removeClass('hover');
			ref = event.dataTransfer.files;
			for (i = j = 0, len = ref.length; j < len; i = ++j) {
				file = ref[i];
				parent = $(dropZone).next('[data-file-name]');
				if (file.size > maxFileSize) {
					parent.append("<div class=\"file-item \"> <div class=\"error-caption\"> <div class=\"caption-inside\"> Too Large File <div class=\"image-size error\">" + (formatBytes(file.size)) + "</div> </div> </div> </div>");
					return false;
				} else if (type === 'image' && file.type === 'image/png' || type === 'image' && file.type === 'image/jpeg') {
					$(dropZone).removeClass('error').addClass('drop');
					$(dropZone).find('.label-lead').html('Loaded success!');
					reader = new FileReader;
					reader.onload = function(e) {
						parent.append("<div class=\"file-item\"> <button type=\"button\" class=\"btn btn-link remove-btn\"> <i class=\"icon icon-rubbish\"></i> </button> <figure class=\"image-cover\"><img src=\"" + e.target.result + "\" alt=\"model\"></figure> </div>");
						if ($(window).width() > 768) {
							parent.scrollTop(parent.prop("scrollHeight"));
							$('.scrolled[data-xs-disabled]').perfectScrollbar();
							$('.scrolled').perfectScrollbar('update');
						}
					};
					reader.readAsDataURL(event.dataTransfer.files[i]);
				} else if (type === 'video' && file.type === "video/mp4" || type === 'video' && file.type === "video/ogg") {
					parent.append("<div class=\"video-item\"> <i class=\"icon icon-video-camera camera-icon\"></i> <div class=\"video-title\">" + file.name + "</div> <div class=\"video-size\">" + (formatBytes(file.size)) + "</div> <button type=\"button\" class=\"btn btn-link remove-btn\"> <i class=\"icon icon-rubbish\"></i> </button> </div>");
					$(dropZone).removeClass('error').addClass('drop');
					$(dropZone).find('.label-lead').html('Loaded success!');
					if ($(window).width() > 768) {
						parent.scrollTop(parent.prop("scrollHeight"));
						$('.scrolled[data-xs-disabled]').perfectScrollbar();
						$('.scrolled').perfectScrollbar('update');
					}
				} else {
					$(dropZone).find('.label-lead').html('Please download the file in correct format');
					$(dropZone).addClass('error');
					return false;
				}
			}
		};
	} else {
		$(dropZone).find('.label-lead').html('Click on label area');
	}
};

$('[data-drop-file]').each(function(i, el) {
	var maxSize, type;
	type = $(el).data('drop-file');
	maxSize = $(el).find('[data-file-size]').data('file-size');
	dropFile(el, type, maxSize);
});

handleImage = function(event, parent) {
	var file, i, j, len, maxImageSize, reader, ref;
	maxImageSize = $(event.target).data('file-size');
	ref = event.target.files;
	for (i = j = 0, len = ref.length; j < len; i = ++j) {
		file = ref[i];
		if (file.size > maxImageSize) {
			parent.append("<div class=\"file-item \"> <div class=\"error-caption\"> <div class=\"caption-inside\"> Too Large File <div class=\"image-size error\">" + (formatBytes(file.size)) + "</div> </div> </div> </div>");
		} else {
			reader = new FileReader;
			reader.onload = function(e) {
				parent.append("<div class=\"file-item \"> <button type=\"button\" class=\"btn btn-link remove-btn\"> <i class=\"icon icon-rubbish\"></i> </button> <figure class=\"image-cover\"><img src=\"" + e.target.result + "\" alt=\"model\"></figure> </div>");
				if ($(window).width() > 768) {
					parent.scrollTop(parent.prop("scrollHeight"));
					$('.scrolled[data-xs-disabled]').perfectScrollbar();
					$('.scrolled').perfectScrollbar('update');
				}
				parent.prev('[data-drop-file]').addClass('drop');
			};
			reader.readAsDataURL(event.target.files[i]);
		}
	}
};

handleVideo = function(event, parent) {
	var file, i, j, len, maxVideoSize, ref, sizeCaption;
	maxVideoSize = $(event.target).data('file-size');
	sizeCaption = '20';
	ref = event.target.files;
	for (i = j = 0, len = ref.length; j < len; i = ++j) {
		file = ref[i];
		if (file.size > maxVideoSize) {
			$(event.target).parent('.drop-file').find('.label-lead').html('File too large! Max file size ' + sizeCaption + ' MB');
			$(event.target).parent('.drop-file').addClass('error');
			return;
		} else {
			$(event.target).parent('.drop-file').removeClass('error').addClass('drop');
			$(event.target).parent('.drop-file').find('.label-lead').html('Loaded success!');
			parent.append("<div class=\"video-item\"> <i class=\"icon icon-video-camera camera-icon\"></i> <div class=\"video-title\">" + file.name + "</div> <div class=\"video-size\">" + (formatBytes(file.size)) + "</div> <button type=\"button\" class=\"btn btn-link remove-btn\"> <i class=\"icon icon-rubbish\"></i> </button> </div>");
		}
		if ($(window).width() > 768) {
			parent.scrollTop(parent.prop("scrollHeight"));
			$('.scrolled[data-xs-disabled]').perfectScrollbar();
			$('.scrolled').perfectScrollbar('update');
		}
		parent.prev('[data-drop-file]').addClass('drop');
	}
};

$('[data-drop-file]').each(function(i, el) {
	var parent, type;
	type = $(el).data('drop-file');
	parent = $(el).next('[data-file-name]');
	$(el).on('input', function(e) {
		if (type === 'image') {
			handleImage(e, parent);
		} else if (type === 'video') {
			handleVideo(e, parent);
		}
	});
});

formatBytes = function(bytes) {
	if (bytes < 1024) {
		return bytes + ' Bytes';
	} else if (bytes < 1048576) {
		return (bytes / 1024).toFixed(3) + ' KB';
	} else if (bytes < 1073741824) {
		return (bytes / 1048576).toFixed(3) + ' MB';
	} else {
		return (bytes / 1073741824).toFixed(3) + ' GB';
	}
};


$(document).ready(function() {
	$('[data-search]').each(function(i, search) {
		$(search).keydown(function(e) {
			console.log(e)
		});
	});
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

	var tooltipHint = {
		x: 0,
		y: 0,
		newTooltip: null,

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

		createTooltipElement: function(){
			this.newTooltip = document.createElement('div');
			this.newTooltip.className = "tooltip";
			this.newTooltip.setAttribute("id", "tooltip");
			this.newTooltip.appendChild(document.createTextNode(this.getText()));
			this.newTooltip.style.top = this.getCoordinates().y + "px";
			this.newTooltip.style.left = this.getCoordinates().x + "px";
					document.body.appendChild(this.newTooltip);
		},

		show: function(element, event){
			if (!element || !event) return;
			let text = element.dataset.tooltip.trim();
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
			document.getElementById("tooltip").remove();
		}
	};



	$('[data-tooltip]').each(function(i, tooltip) {

		$(tooltip).mouseenter(function(e) {
			tooltipHint.show(tooltip, e);
		});

		$(tooltip).mouseleave(function(e) {
			tooltipHint.hide();
		});
	});
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
$(document).ready(function(){

	function getSelectChangedOption(select){
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
			classname: data && data.classname ? data.classname : null,
			onOpen: function(){ },
			onChange: function(select){
				getSelectChangedOption(select);
			},
			onClose: function(){ },
		});
	});

});
$(document).ready(function(){
	$(function() {

		var setPointPosition = function(point, event) {
			if (!point || !event) return;
			var bb = point.getBoundingClientRect();
			var x = event.clientX - bb.width / 2;
			var y = event.clientY - bb.height / 2;

			$(point).css({
					'transform': 'translate3d(' + x + 'px, ' + y + 'px, 0px)',
			});
		};

		var poinHover = function(point, event) {
			if (!point || !event) return;

			if ($(event.target) && $(event.target).closest('[data-mouse]').length ) {
				let link = $(event.target).closest('[data-mouse]');
				let linkText = $(link).attr('data-mouse');

				$(point).addClass('hovered');
				$(point).text(linkText)
			} else {
				$(point).removeClass('hovered');
				$(point).text('');
			}
		};

		var point = document.getElementById('mousePoint')

		if (point) {
			$(document).mousemove(function(event) {
				if (point && event) {
					// setPointPosition(point, event);
					// poinHover(point, event);
				}
			});

			$(window).scroll(function(event) {
				if (point && event) {
					// setPointPosition(point, event);
					// poinHover(point, event);
				}
			});

			setTimeout(function(){
				// point.classList.add('visible');
			}, 250);
		}
	});

});
$(document).ready(function() {
	$(function() {
		var CallPopup, hidePopups;
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
		CallPopup = function(selector) {
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
				if (called.data('onclose') && window[called.data('onclose')]) {
					return window[called.data('onclose')](called);
				}
			}, 300);
		});
		hidePopups = function() {
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
		$('.close-popup').click(function(e) {
			e.preventDefault();
			hidePopups();
		});
		$('.popup').click(function(e) {
			if ($(e.target).closest('.inner').length === 0) {
				e.preventDefault();
				hidePopups();
			}
		});
	});
});


$(document).ready(function() {
	function printDiv(divName) {
		var printContents = document.getElementById(divName).innerHTML;
		w=window.open();
		w.document.write(printContents);
		w.print();
		w.close();
	}

	$('[data-print]').each(function(i, elem) {
		$(elem).click(function(e) {
			e.preventDefault();
			printDiv($(elem).data('print'));
		});
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

var setActiveTab = function(content, indx) {
	content.each(function(i, cont) {
		$('> .content', cont).removeClass('active').eq(indx).addClass('active');
		$('> .content', cont).closest('.scrolled').perfectScrollbar('update');
	});
};

$('body').on('click', '[data-tabs] > .tab', function(e) {
	let nav = $(this).closest('[data-tabs]')[0];
	if ($(this).hasClass('disabled')) {
		return;
	}
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	setActiveTab($($(nav).data('tabs')), $(this).index());
});



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
