$(document).ready(function () {

	//placeholder
	$("input, textarea").placeholder();
	//main carousel
	if ($(".top-slider").length) {

		$(".top-slider").owlCarousel({
			loop:true,
			margin:0,
			autoplay: true,
			autoplayHoverPause: true,
			smartSpeed: 500,
			animateOut: 'fadeOut',
			nav:false,
			dots:false,
			navText: ["", ""],
			responsive:{
				0:{
					items:1
				}
			}
		});
	};
	if ($(".event-slider").length) {

		$(".event-slider").owlCarousel({
			loop:true,
			margin:0,
			autoplay: true,
			autoplayHoverPause: false,
			smartSpeed: 250,
			autoplaySpeed: 800,
			nav:false,
			dots:false,
			navText: ["", ""],
			responsive:{
				0:{
					items:1
				},
				768:{
					items:3
				}
			}
		});
	};
	if ($(".card-outer-slider").length) {

		$(".card-outer-slider").owlCarousel({
			loop:true,
			margin:0,
			autoplay: true,
			autoplayHoverPause: true,
			smartSpeed: 250,
			autoplaySpeed: 800,
			nav:false,
			dots:false,
			navText: ["", ""],
			responsive:{
				0:{
					items:1
				}
			}
		});
	};
	if ($(".partners-slider").length) {

		$(".partners-slider").owlCarousel({
			loop:true,
			margin:0,
			autoplay: false,
			autoplayHoverPause: false,
			smartSpeed: 550,
			autoplaySpeed: 1000,
			nav:true,
			dots:false,
			navText: ["", ""],
			responsive:{
				0:{
					items:2
				},
				480:{
					items:3
				},
				768:{
					items:5
				}
			}
		});
	};
// tabs on index-new lawyer-tab
$(".tab-item").hover(function(){

	var tabs = $(".tab-item"),
	content = $(".tab-content");

	tabs.removeClass("active");
	content.removeClass("active");

	$(this).addClass("active");
	content.eq($(this).index()).addClass("active");

});
calendar.init('ajax');

var browserWidth = window.innerWidth;

if (browserWidth >= 768) {

	$(window).scroll(function(){

		if (isVisible($('.card-section')) == true) {
			setTimeout(function(){
				$('.card-section').addClass("animated");
			}, 500);
		} else {
			$('.card-section').removeClass("animated");
		}
		if (isVisible($('.tab-nav-list')) == true) {
			setTimeout(function(){
				$('.tab-nav-list').addClass("animated");
			}, 500);
		} else {
			$('.tab-nav-list').removeClass("animated");
		}
		if (isVisible($('.tab-content-wrap')) == true) {
			setTimeout(function(){
				$('.tab-content-wrap').addClass("animated");
			}, 500);
		} else {
			$('.tab-content-wrap').removeClass("animated");
		}
		if (isVisible($('.events-section')) == true) {
			setTimeout(function(){
				$('.events-section').addClass("animated");
			}, 900);
		} else {
			$('.events-section').removeClass("animated");
		}
		if (isVisible($('.banner-gray-caption')) == true) {
			setTimeout(function(){
				$('.banner-gray-caption').addClass("animated");
			}, 900);
		} else {
			$('.banner-gray-caption').removeClass("animated");
		}
	});
};
//open nav
openNav($(".open-nav"), $(".main-nav"));
closeNav($(".close-nav"), $(".main-nav"));


});
//document end


// Функция добавления обработчика
// function addEventToObject(object, type, callback) {
// 	if (object == null || typeof(object) == 'undefined') return;
// 	if (object.addEventListener) {
// 		object.addEventListener(type, callback, false);
// 	} else if (object.attachEvent) {
// 		object.attachEvent("on" + type, callback);
// 	} else {
// 		object["on"+type] = callback;
// 	}
// };

// function updateColumnPosition() {
// 	var element = $('.main-nav'), 
// 	innerblock  = $('body'),
// 	siblingblock  = $('.step-right'),

// 	elementHeight = element.outerHeight(),
// 	innerblockWidth = innerblock.outerWidth(),
// 	siblingblockWidth = siblingblock.width(),
// 	siblingblocOuterWidth = siblingblock.outerWidth(),

// 	footerHeight = $('footer').outerHeight(),
// 	headerHeight = $('.top-bar').outerHeight(),
// 	screenHeight = $(window).height(),
// 	documentHeight = $(document).height(),
// 	topHeight = headerHeight,
// 	scrollTop = $(document).scrollTop();

// 	if(!element.data('isloaded')) {
// 		element.data('isloaded', true);
// 		element.css({ width: element.width() });
// 	}
// 	var windWi = $(window).width();
// 	var margin = (siblingblocOuterWidth - siblingblockWidth)/2
	
// 	if (windWi >= 768) {
// 		if (scrollTop - topHeight > 560 && documentHeight - scrollTop > elementHeight + footerHeight) {
// 			element.css({
// 				position: 'fixed',
// 				top: (34) + 'px',
// 				left: (0) + 'px',
// 				width: (100) + '%'

// 			}).css("padding", "15px 0").css("z-index", "25");
// 			element.children(".outer-float").addClass("container");
// 			element.find(".order-left").addClass("offset-4").css("width", innerblockWidth).css("margin-left", siblingblockWidth + margin);

// 		}
// 		else if (scrollTop - topHeight > 560 && documentHeight - scrollTop < elementHeight + footerHeight) {
// 			element.css({
// 				position: 'fixed',
// 				top: (documentHeight - elementHeight - footerHeight - 20) - scrollTop + 'px'
// 			});

// 		}
// 		else if (scrollTop - topHeight < 560) {
// 			element.css({
// 				position: 'relative',
// 				top: 'inherit',
// 				left: (0) + 'px',
// 				width: (100) + '%'
// 			}).css("padding", "28px 0").css("z-index", "0");
// 			element.children(".outer-float").removeClass("container");
// 			element.find(".order-left").removeClass("offset-4").css("width", "").css("margin-left", "");
// 		};
// 	}

// };

// $(function () {
// 	addEventToObject(window, 'scroll', updateColumnPosition);
// 	updateColumnPosition();
// });


isVisible = function(element){
	var top = $(document).scrollTop(),
	elementOffset = element.offset().top,
	elementHeight = $(window).height();
	return top + elementHeight > elementOffset && top < elementOffset + elementHeight;
};
//open nav 
function openNav(btn, nav) {

	btn.on("click", function(){
		nav.addClass("active");
		$("body, html").addClass("no-scroll");
	});
};
function closeNav(btn, nav) {

	btn.on("click", function(){
		nav.removeClass("active");
		$("body, html").removeClass("no-scroll");
	});
};
//data
addEventListener('DOMContentLoaded', function () {
	pickmeup('#arrive', {
		position       : 'right',
		hide_on_select : true
	});
	pickmeup('#count', {
		position       : 'left',
		hide_on_select : true
	});
});
//calendar
var calendar = {

	init: function(ajax) {

		if (ajax) {

			$.ajax({
				url: 'data/events.json',
				type: 'GET',
			})
			.done(function(data) {
				var events = data.events;

				for (var i = 0; i < events.length; i++) {
					$('.list-event').append('<div class="day-event" date-day="'+ events[i].day +'" date-month="' + events[i].month +'" date-year="'+ events[i].year +'" data-number="'+ i +'"><div class="calendar-caption"><a href="#"><h2 class="perfomance-title">'+ events[i].title +'</h2><ul class="card-caption-list"><li class="calendar">'+ events[i].date +'</li><li class="location">'+ events[i].location +'</li></div>');
				}
				calendar.startCalendar();
			})
			.fail(function(data) {
				console.log(data);
			});
		} else {
			calendar.startCalendar();
		}

	},

	startCalendar: function() {
		var mon = 'пн';
		var tue = 'вт';
		var wed = 'ср';
		var thur = 'чт';
		var fri = 'пт';
		var sat = 'сб';
		var sund = 'вс';

		var d = new Date();
		var strDate = yearNumber + "/" + (d.getMonth() + 1) + "/" + d.getDate();
		var yearNumber = (new Date).getFullYear();

		var monthNumber = d.getMonth() + 1;

		function GetMonthName(monthNumber) {
			var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
			return months[monthNumber - 1];
		}

		setMonth(monthNumber, mon, tue, wed, thur, fri, sat, sund);

		function setMonth(monthNumber, mon, tue, wed, thur, fri, sat, sund) {
			$('.month').text(GetMonthName(monthNumber) + ' ' + yearNumber);
			$('.month').attr('data-month', monthNumber);
			printDateNumber(monthNumber, mon, tue, wed, thur, fri, sat, sund);
		}

		$('.btn-next').on('click', function(e) {
			var monthNumber = $('.month').attr('data-month');
			if (monthNumber > 11) {
				$('.month').attr('data-month', '0');
				var monthNumber = $('.month').attr('data-month');
				yearNumber = yearNumber + 1;
				setMonth(parseInt(monthNumber) + 1, mon, tue, wed, thur, fri, sat, sund);
			} else {
				setMonth(parseInt(monthNumber) + 1, mon, tue, wed, thur, fri, sat, sund);
			};
		});

		$('.btn-prev').on('click', function(e) {
			var monthNumber = $('.month').attr('data-month');
			if (monthNumber < 2) {
				$('.month').attr('data-month', '13');
				var monthNumber = $('.month').attr('data-month');
				yearNumber = yearNumber - 1;
				setMonth(parseInt(monthNumber) - 1, mon, tue, wed, thur, fri, sat, sund);
			} else {
				setMonth(parseInt(monthNumber) - 1, mon, tue, wed, thur, fri, sat, sund);
			};
		});

		function printDateNumber(monthNumber, mon, tue, wed, thur, fri, sat, sund) {

			$($('tbody.event-calendar tr')).each(function(index) {
				$(this).empty();
			});

			$($('thead.event-days tr')).each(function(index) {
				$(this).empty();
			});

			function getDaysInMonth(month, year) {
				// Since no month has fewer than 28 days
				var date = new Date(year, month, 1);
				var days = [];
				while (date.getMonth() === month) {
					days.push(new Date(date));
					date.setDate(date.getDate() + 1);
				}
				return days;
			}

			i = 0;

			setDaysInOrder(mon, tue, wed, thur, fri, sat, sund);

			function setDaysInOrder(mon, tue, wed, thur, fri, sat, sund) {
				var monthDay = getDaysInMonth(monthNumber - 1, yearNumber)[0].toString().substring(0, 3);
				if (monthDay === 'Mon') {
					$('thead.event-days tr').append('<td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td>');
				} else if (monthDay === 'Tue') {
					$('thead.event-days tr').append('<td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td><td>' + mon + '</td>');
				} else if (monthDay === 'Wed') {
					$('thead.event-days tr').append('<td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td><td>' + mon + '</td><td>' + tue + '</td>');
				} else if (monthDay === 'Thu') {
					$('thead.event-days tr').append('<td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td><td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td>');
				} else if (monthDay === 'Fri') {
					$('thead.event-days tr').append('<td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td><td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td>');
				} else if (monthDay === 'Sat') {
					$('thead.event-days tr').append('<td>' + sat + '</td><td>' + sund + '</td><td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td>');
				} else if (monthDay === 'Sun') {
					$('thead.event-days tr').append('<td>' + sund + '</td><td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td>');
				}
			};
			$(getDaysInMonth(monthNumber - 1, yearNumber)).each(function(index) {
				var index = index + 1;
				if (index < 8) {
					$('tbody.event-calendar tr.1').append('<td date-month="' + monthNumber + '" date-day="' + index + '" date-year="' + yearNumber + '">' + index + '</td>');
				} else if (index < 15) {
					$('tbody.event-calendar tr.2').append('<td date-month="' + monthNumber + '" date-day="' + index + '" date-year="' + yearNumber + '">' + index + '</td>');
				} else if (index < 22) {
					$('tbody.event-calendar tr.3').append('<td date-month="' + monthNumber + '" date-day="' + index + '" date-year="' + yearNumber + '">' + index + '</td>');
				} else if (index < 29) {
					$('tbody.event-calendar tr.4').append('<td date-month="' + monthNumber + '" date-day="' + index + '" date-year="' + yearNumber + '">' + index + '</td>');
				} else if (index < 32) {
					$('tbody.event-calendar tr.5').append('<td date-month="' + monthNumber + '" date-day="' + index + '" date-year="' + yearNumber + '">' + index + '</td>');
				}
				i++;
			});
			var date = new Date();
			var month = date.getMonth() + 1;
			var thisyear = new Date().getFullYear();
			setCurrentDay(month, thisyear);
			setEvent();
			displayEvent();
		}

		function setCurrentDay(month, year) {
			var viewMonth = $('.month').attr('data-month');
			var eventYear = $('.event-days').attr('date-year');
			if (parseInt(year) === yearNumber) {
				if (parseInt(month) === parseInt(viewMonth)) {
					$('tbody.event-calendar td[date-day="' + d.getDate() + '"]').addClass('current-day');
				}
			}
		};

		$('tbody td').on('click', function(e) {
			if ($(this).hasClass('event')) {
				$('tbody.event-calendar td').removeClass('active');
				$(this).addClass('active');
			} else {
				$('tbody.event-calendar td').removeClass('active');
			};
		});

		function setEvent() {
			$('.day-event').each(function(i) {
				var eventMonth = $(this).attr('date-month');
				var eventDay = $(this).attr('date-day');
				var eventYear = $(this).attr('date-year');
				var eventClass = $(this).attr('event-class');
				if (eventClass === undefined) eventClass = 'event';
				else eventClass = 'event ' + eventClass;

				if (parseInt(eventYear) === yearNumber) {
					$('tbody.event-calendar tr td[date-month="' + eventMonth + '"][date-day="' + eventDay + '"]').addClass(eventClass);
				}
			});
		};

		function displayEvent() {
			$('tbody.event-calendar .event').on('click', function(e) {

				$('.day-event').slideUp('fast');
				var monthEvent = $(this).attr('date-month');
				var dayEvent = $(this).text();
				$('.day-event[date-month="' + monthEvent + '"][date-day="' + dayEvent + '"]').slideDown('fast');

			});
		};
	}
};
//search
