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
			console.log(item);
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
	if ($('[data-fancybox]') && window.fancybox) {
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

$('[data-scrollto]').click(function(e) {
	var headerOffset;
	console.log(e)
	e.preventDefault();
	headerOffset = $('.main-header').hasClass('fixed') ? $('.main-header').outerHeight() : 0;
	$('html,body').animate({
		scrollTop: $($(this).data('scrollto')).offset().top - headerOffset
	}, 500);
});
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
