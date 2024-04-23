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
		})(this), 610);
	});
});
$(document).ready(function() {
	$(document).on('click', '[data-color-toggle]', function(e){
		parent = $(this).data('color-toggle');
		$(parent).data('dark-color', !$(parent).data('dark-color'));
		$('#themeFake').css('opacity', '1');

		var x = e.clientX;
		var y = e.clientY;

		if ($(parent).data('dark-color')) {
			$('#themeFake').css({
				left: x + 'px',
				top: y + 'px'
			}).addClass('active');
			$('#roundCanvas').data('stroke', '#ffd158');
			$('meta[name=theme-color]').attr('content', '#1f2023');
		} else {
			$('#themeFake').removeClass('active');
			$('#roundCanvas').data('stroke', '#3b3d46');
			$('meta[name=theme-color]').attr('content', '#fff');
		}

		setTimeout(function(){
			$(parent).attr('data-dark-color', $(parent).data('dark-color'));
			$('#themeFake').css('opacity', '0');
			drawRadialIndicator();

			if ($(parent).data('dark-color')) {
				$('#headerBanner').css('background-image', 'url(' + $('#headerBanner').data('dark') + ')');
			} else {
				$('#headerBanner').css('background-image', 'url(' + $('#headerBanner').data('light') + ')');
			}
		}, 350);
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
	if (typeof Fancybox !== 'undefined') {
		Fancybox.bind('[data-fancybox="gallery"]', {
			dragToClose: false,

			Toolbar: {
				display: {
					left: [],
					middle: [],
					right: ['close'],
				},
			},

			Images: {
				zoom: false,
			},

			Thumbs: {
				type: 'classic',
			},

			Carousel: {
				transition: false,
				friction: 0,
			},

			on: {
				'Carousel.ready Carousel.change': (fancybox) => {
					fancybox.container.style.setProperty(
						'--bg-image',
						`url("${fancybox.getSlide().thumbSrc}")`
					);
				},
			},
		});
	}
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
				margin: data.margin ? data.margin : 0,
				nav: !data.nav || data.nav == false ? false : true,
				dots: !data.dots || data.dots == false ? false : true,
				center: !data.center || data.center == false ? false : true,
				autoplay: !data.autoplay || data.autoplay == false ? false : true,
				smartSpeed: 1000,
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

	function drawRound(id, persent, useDarkTheme) {
		var pixelRatio = window.devicePixelRatio || 1;
		var canvas = document.getElementById(id);

		if (canvas !== null && persent >= 0 && persent <= 1 ) {
			var ctx = canvas.getContext('2d');

			var width = 0;
			var height = 0;

			var lineWidth = 3;

			setCanvasSize(canvas, pixelRatio);

			var i = persent;

			var strokeColor = $(canvas).data('stroke');

			ctx.beginPath()
			ctx.lineWidth = lineWidth*pixelRatio;
			ctx.arc(canvas.width/2, canvas.height/2, canvas.height/2 - (lineWidth * pixelRatio / 2), -Math.PI/2, -Math.PI * (2 * (1 - i))-Math.PI/2);

			ctx.strokeStyle = strokeColor;
			ctx.stroke()

			if (i >= 1) {
				ctx.fillStyle = strokeColor;
				ctx.strokeStyle = strokeColor;
				ctx.stroke();
				$(canvas).parent().addClass('filled');
			} else {
				$(canvas).parent().removeClass('filled');
			}
		}
	}

	var setCanvasSize = function(canvas, pixelRatio) {
		width = $(canvas).parent().outerWidth() * pixelRatio;
		height = $(canvas).parent().outerHeight() * pixelRatio;
		canvas.width = width;
		canvas.height = height;
	}

	function drawRadialIndicator(){
		var totalHeight = $('body')[0].scrollHeight - $(window).height();
		var scrollTop = $(window).scrollTop();
		drawRound('roundCanvas', scrollTop / totalHeight, false);
	}
	drawRadialIndicator();


	$(window).scroll(function(){
		drawRadialIndicator();
	});

	$(window).resize(function() {
		drawRadialIndicator();
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

	footerPosition($(document).height(), $(window).scrollTop() + $(window).height());
});