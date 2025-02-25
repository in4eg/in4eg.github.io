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
	})(this), 610);
});
$("[data-counter]").each(function(index, item){
	var data = $(item).attr("data-counter"),
			counter = data.split(",")[0],
			timeout = data.split(",")[1];

	function runAnimation(){
		var timeStart = new Date().getTime();
		var timeEnd = new Date().getTime() + timeout;
		$(item).attr("data-initialized", "true");
		var interval = setInterval(function(){
			var timeNow = new Date().getTime();
			var progress = (timeNow - timeStart) / timeout;
			if (progress >= 1){
				progress = 1;
				clearInterval(interval);
			}
			$(item).html(Math.ceil(progress * counter));
		}, 30);
	}
	$(window).scroll(function(){
		if ($(item).attr("data-initialized")) return;
		var scrollTop = $(window).scrollTop();
		var treshold = window.innerHeight * 0.75;
		if (scrollTop > $(item).offset().top - treshold){
			runAnimation();
		}
	});

});
$('[data-toggle]').each(function(i, button) {
	$(button).click(function(e) {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('#'+$(this).data('toggle')).removeClass('active animated');
			if ($(this).hasClass('menu-toggle')) {
				$('body').removeClass('overlayed');
			}
		} else {
			$(this).addClass('active');
			$('#'+$(this).data('toggle')).addClass('active');
			if ($(this).hasClass('menu-toggle')) {
				$('body').addClass('overlayed');
			}
			setTimeout(function(){
				$('#'+$(this).data('toggle')).addClass('animated');
			}.bind(this), 200);
		}
	});
});

$( window ).on( "resize", function() {
	if (window.innerWidth > 1200) {
		$('body').removeClass('overlayed');
	}
});
$(document).ready(function() {
	if ($('[data-fancybox]') && window.Fancybox) {
		Fancybox.bind('.owl-item:not(.cloned) [data-fancybox]', {
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
async function initMap() {
	let mapElement = document.getElementById('map');
	let mapLocation = mapElement.getAttribute('data-position').split(',');
	let position = { lat: parseFloat(mapLocation[0].trim()), lng: parseFloat(mapLocation[1].trim()) };
	let mapZoom = parseInt(mapElement.getAttribute('data-zoom')) || 10;
	let mapStyles = [{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#d3d3d3"}]},{featureType:"transit",stylers:[{color:"#808080"},{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"on"},{color:"#b3b3b3"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#ffffff"},{weight:1.8}]},{featureType:"road.local",elementType:"geometry.stroke",stylers:[{color:"#d7d7d7"}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#ebebeb"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#a7a7a7"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#efefef"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#696969"}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{visibility:"on"},{color:"#737373"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#d6d6d6"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{},{featureType:"poi",elementType:"geometry.fill",stylers:[{color:"#dadada"}]}];
	let markerTitle = mapElement.getAttribute('data-title');

	// Request needed libraries.
	const { Map } = await google.maps.importLibrary("maps");
	const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
	const map = new Map(document.getElementById("map"), {
		center: position,
		zoom: mapZoom,
		styles: mapStyles,
		zoomControl: false,
		scaleControl: false,
		scrollwheel: false,
		disableDefaultUI: true,
		mapId: "4504f8b37365c3d0",
		mapTypeControl: false,
		keyboardShortcuts: window.innerWidth <= 768 ? false : true,
		gestureHandling: window.innerWidth <= 768 ? 'cooperative' : 'auto'
	});
	const marker = new AdvancedMarkerElement({
		map,
		position: position,
		title: markerTitle
	});
}

window.initMap = initMap;
$(document).ready(function(){
	if ($.fn.owlCarousel) {
		$(document).find('.owl-carousel').each(function(i, carousel) {
			let data = $(carousel).data();
			let responsiveArr = [];
			if (data.slides){
				responsiveArr = data.slides.split(',');
			};

			$(carousel).owlCarousel({
				loop: !data.loop || data.loop == false ? false : true,
				margin:0,
				nav: !data.nav || data.nav == false ? false : true,
				dots: !data.dots || data.dots == false ? false : true,
				responsive:{
					0:{
						items: responsiveArr.length ? responsiveArr[4] : 1
					},
					480:{
						items: responsiveArr.length ? responsiveArr[3] : 1
					},
					768:{
						items: responsiveArr.length ? responsiveArr[2] : 1
					},
					993:{
						items: responsiveArr.length ? responsiveArr[1] : 1
					},
					1200:{
						items: responsiveArr.length ? responsiveArr[0] : 1
					}
				}
			})
		});
	}
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
	setTimeout(function() {
		$('.first-section').addClass('loaded');
	}, 750);
	setTimeout(function() {
		$('.first-section').addClass('animated-inner');
	}, 1150);

	$('.section:not(.first-section)').each(function(i, section) {
		if ($(document).scrollTop() + $(window).outerHeight() / 2 > $(section).offset().top) {
			setTimeout(function() {
				$(section).addClass('animated-inner');
			}, 150);
		}
	});

	$('.section').each(function(i, section) {
		$(window).scroll(function() {
			if ($(document).scrollTop() + $(window).outerHeight() / 2 > $(section).offset().top) {
				setTimeout(function() {
					$(section).addClass('animated-inner');
				}, 150);
			}
		});
	});;


	$(window).scroll(function(){
		totalHeight = $(document).height();
		scrollPosition = $(window).scrollTop() + $(window).height();
		scrollTop = $(window).scrollTop();

		// footer
		footerPosition(totalHeight, scrollPosition);
		headerPosition(scrollTop);
	});

	var footerPosition = function(totalHeight, scrollPosition) {
		var footerHeight = $('#mainFooter').outerHeight();

		if (scrollPosition >= totalHeight - footerHeight) {
			$('#pageFooter').addClass('to-top');
		} else if (totalHeight/3 > scrollPosition) {
			$('#pageFooter').removeClass('visible');
		} else {
			$('#pageFooter').removeClass('to-top');
			$('#pageFooter').addClass('visible');
		}
	}

	var headerPosition = function(scrollTop) {
		if (scrollTop >= 10) {
			$('#mainHeader').addClass('scrolled');
		} else {
			$('#mainHeader').removeClass('scrolled');
		}
	}

	footerPosition($(document).height(), $(window).scrollTop() + $(window).height());
});
$('[data-scrollto]').click(function(e) {
	var headerOffset;
	console.log(e)
	e.preventDefault();
	headerOffset = $('.main-header').hasClass('fixed') ? $('.main-header').outerHeight() : 0;
	$('html,body').animate({
		scrollTop: $($(this).data('scrollto')).offset().top - headerOffset
	}, 500);
});
(function( $ ) {

	if (!$){
		console.error('Selecter :: jQuery is not defined.')
	}

	/*
		helpers
		*/
		function setRandomId(){
			return Math.floor(Math.random() * Date.now())
		}

		function getOptionsTree(optionsList, multiple, id) {
			var tree = "<ul>";
			optionsList.map(function(option, i){
				tree += "<li class=\""+(option.disabled ? 'disabled ' : '')+(option.selected ? 'active' : '')+"\" data-value=\""+option.value+"\">"+option.label+(option.disabled ? ' ' : multiple ? "<input type=\"checkbox\" id="+id+'_'+i+" name="+id+'_'+i+"><label for="+id+'_'+i+"></label>" : " ")+"</li>"
			});
			tree += "</ul>";
			return tree;
		}

		function getSelectedOption(options, optionsList){
			var selected;

			if (options.length && options.length > 0) {
				[].map.call(options, function(option, i){
					optionsList.push({
						label: option.label,
						value: option.value,
						disabled: option.disabled,
						selected: option.selected
					});
					if (option && i === 0){
						selected = {
							title: option.label
						}
					}
					if (option && option.selected){
						selected = {
							title: option.label
						}
					}
				})
			}
			return selected;
		}

		function generateBody(select, optionsList, multiple){
			if (!select) return;
			var id = select.getAttribute('id') ? select.getAttribute('id') : setRandomId();
			var body = "";
			body += "<div class=\"selecter\">";
			body += "<span class=\"anchor\">"+getSelectedOption(select.options, optionsList).title+"</span>";
			body += "<div class=\"dropdown\">"+getOptionsTree(optionsList, multiple, id)+"</div>";
			body += "</div>";
			return $(body);
		}

		function open(ctx, settings){
			ctx.addClass('opened');
			if (settings.onOpen) {
				settings.onOpen(ctx, settings);
			}
		}

		function close(ctx, settings){
			ctx.removeClass('opened');
			if (settings.onClose) {
				settings.onClose(ctx, settings);
			}
		}

		function change(ctx, settings, value){
			// ctx.removeClass('opened');
			if (settings.onChange) {
				settings.onChange(ctx, settings, value);
			}
		}


	// setting
		function setSelectOptionsValue(select, value) {
			$(select).find('option').each(function(i, option){
				if (!$(select).attr("multiple")) {
					$(option).prop('selected', false).removeAttr('selected');
					if ($(option).val().toString() == value.toString()) {
						$(option).prop('selected', true).attr('selected', 'true');
					};
				} else {
					if ($(option).val().toString() == value.toString() && !$(option).attr("selected")) {
						$(option).prop('selected', true).attr('selected', 'true');
					} else if ($(option).val().toString() == value.toString() && $(option).attr("selected")) {
						$(option).prop('selected', false).removeAttr('selected');
					}
				};
			});
			if ($(select).children('[selected]').length > 0) {
				$(select).find('option[disabled]').prop('selected', false).removeAttr('selected');
			} else {
				$(select).find('option[disabled]').prop('selected', true).attr('selected', 'true');
			};
		};

	// ctx - select
	function setValue(ctx, value, result, settings){
		// $(ctx).val(value).trigger('change');
		change(ctx, settings, $(ctx).val());

		let adaptiveWidth = 300;
		var text = $(ctx).val();
		if (value == true) {
			text = 'yes'
		} else if (value == false) {
			text = 'no'
		}
		if (settings && settings.multiple) {
			$(result).find('.anchor').html('');
			var textArray = [];
			if ($(ctx).children('[selected]').length) {
				$(ctx).children('[selected]').each(function(i, option){
					textArray.push($(option).text().trim());
				});
				if (textArray.length == 1) {
					$(result).find('.anchor').html(textArray.toString());
				} else {
					if ($(result).find('.anchor').width() <= adaptiveWidth) {
						var htmlCount = "<span class=\"count\">+"+(textArray.length-1)+"</span>";
						$(result).find('.anchor').html(textArray[0]+''+htmlCount)
					} else if ($(result).find('.anchor').width() > adaptiveWidth) {
						let slicedArray = textArray.slice(0, 3);
						var htmlCount = textArray.length > 3 ? "<span class=\"count\">+"+(textArray.length-3)+"</span>" : "";
						$(result).find('.anchor').html(slicedArray.toString()+''+htmlCount)
					}
				}
			};
		} else {
			$(result).find('.anchor').html(text);
			close(result, settings);
		};
	};

	/*
		plugin
		*/

		$.fn.selecter = function(options) {

			var settings = {
				onOpen: null,
				onClose: null,
				onChange: null,
			}

			var settings = $.extend(settings, options);

			this.each(function(i, select){

				var optionsList = [];

				$(select).hide();

				var result = generateBody(select, optionsList, settings.multiple);

				result.on('click', '.anchor', function(e){
					e.preventDefault();
					if ($(this).parent('.selecter').hasClass('opened')){
						close(result, settings);
						return;
					} else {
						open(result, settings);
					}
				});

				$('body').click(function(e){
					if ($(e.target).closest(result).length === 0){
						close(result, settings);
					}
				});

				result.on('click', 'ul > li', function(e){
					e.preventDefault();
					if ($(this).hasClass('disabled')){
						close(result, settings);
						return;
					};
					if (settings.multiple) {
						if ($(this).hasClass('active')) {
							$(this).removeClass('active');
							$(this).find('[type="checkbox"]').prop('checked', false).removeAttr('checked');
						} else {
							$(this).addClass('active');
							$(this).find('[type="checkbox"]').prop('checked', true).attr('checked', 'true');
						};
						if ($(this).parent('ul').children('.active').length > 0) {
							$($(this).siblings('.disabled')).removeClass('active');
						} else {
							$($(this).siblings('.disabled')).addClass('active');
						};
					} else {
						$(this).addClass('active');
						$(this).siblings().removeClass('active');
					};

					setSelectOptionsValue(select, $(this).data('value')); // for select element
					setValue(select, $(this).data('value'), result, settings); // created list

				});

				result.insertAfter($(select));

			});

			return this;

		};

	}(jQuery));

$(document).ready(function(){
	window.filterOptions = {};

	function checkFilters(){
		var inputsFilled = false;
		if ($('#filterButton').length) {
			for (let option in window.filterOptions) {
				if (window.filterOptions[option].length) {
					inputsFilled = true;
					break;
				} else {
					inputsFilled = false;
				}
			}
			if (inputsFilled) {
				$('#filterButton').addClass('marker-active');
			} else {
				$('#filterButton').removeClass('marker-active');
			};
		};
	}

	$(function() {
		$('.filter-form input:not(.ignored)').on('keyup keydown change', function() {
			var input = this;
			getInputChangedValue(input);
		});
	});

	$('.filter-form input:not(.ignored)').each(function(i, input) {
		var input = this;
		getInputChangedValue(input);
	});

	function getInputChangedValue(input){
		var value = $(input).val().trim();
		window.filterOptions[$(input).attr('id')] = value;
		checkFilters();
	};


	function getSelectChangedOption(select){
		let id = $(select).attr('id');
		filterArray = [];
		$(select).find('option').each(function(i, option){
			if ($(option).attr('selected') && !$(option).attr('disabled')) {
				filterArray.push($(option).text().trim())
			};
		});
		window.filterOptions[id] = filterArray;
		checkFilters();
		return select;
	};

	// select init
	$(document).find('select').each(function(i, select) {
		let data = $(select).data();
		getSelectChangedOption(select);
		// selecter
		$(select).selecter({
			multiple: data && data.multiple === true ? true : false,
			onOpen: function(){ },
			onChange: function(select){
				getSelectChangedOption(select);
			},
			onClose: function(){ },
		});
	});

	// clear form data
	$('[data-clear]').each(function(i, btn) {
		$(btn).click(function(){
			var formId = $(btn).data('clear');
			if (formId && $(formId)) {
				$(formId).find('select').each(function(i, select){
					$(select).find('option').each(function(i, option){
						$(option).prop('selected', false).removeAttr('selected');
					});
					$(select).find('option[disabled]').prop('selected', true).attr('selected', 'true');
					$(select).next('.selecter').find('.anchor').html($(select).find('option[disabled]').text().trim());
					$(select).next('.selecter').find('li').each(function(i, li){
						$(li).removeClass('active');
						$(li).find('[type="checkbox"]').prop('checked', false).removeAttr('checked');
						if ($(li).hasClass('disabled')) {
							$(li).addClass('active')
						}
					});
				});
				checkFilters();
				if ($('#filterButton').length) {
					$('#filterButton').removeClass('marker-active');
				};
			}
		})
	})
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
