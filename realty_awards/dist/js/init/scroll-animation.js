$(document).ready(function() {
	setTimeout(function() {
		$('.hero-section').addClass('loaded');
	}, 750);
	setTimeout(function() {
		$('.hero-section').addClass('animated');
	}, 1150);

	$('.section:not(.hero-section)').each(function(i, section) {
		if ($(document).scrollTop() + $(window).outerHeight() / 2 > $(section).offset().top) {
			setTimeout(function() {
				$(section).addClass('animated');
			}, 150);
		}
	});

	$('.section').each(function(i, section) {
		$(window).scroll(function() {
			if ($(document).scrollTop() + $(window).outerHeight() / 2 > $(section).offset().top) {
				setTimeout(function() {
					$(section).addClass('animated');
				}, 150);
			}
		});
	});;
});

$( document ).ready(function() {
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 750);

	detectScrolledSection($('.section'));
});

$(window).scroll(function() {
	detectScrolledSection($('.section'));
});

var detectScrolledSection = function(element){
	element.each(function(i, section) {
		if ($(document).scrollTop() + $(window).outerHeight() / 2 > $(section).offset().top) {
			$('a[data-scrollto]').removeClass('highlighted');
			$('a[href="#'+$(section).attr('id')+'"]').addClass('highlighted');
		} else {
			$('a[href="#'+$(section).attr('id')+'"]').removeClass('highlighted');
		}
	});
};