$(document).ready(function() {

	var detectScrolledSection = function(section){
		if ($(document).scrollTop() + $(window).outerHeight() / 2 > $(section).offset().top) {
			$('a[data-scrollto]').removeClass('highlighted');
			$('a[href="#'+$(section).attr('id')+'"]').addClass('highlighted');
		} else {
			$('a[href="#'+$(section).attr('id')+'"]').removeClass('highlighted');
		}
	};

	detectScrolledSection($('.section'));

	setTimeout(function() {
		$('.hero-section').addClass('loaded');
	}, 1);
	setTimeout(function() {
		$('.hero-section').addClass('animated');
	}, 10);

	$('.section:not(.hero-section)').each(function(i, section) {
		if ($(document).scrollTop() + $(window).outerHeight()/2 > $(section).offset().top) {
			$(section).addClass('animated');
		}
	});

	$('.section').each(function(i, section) {
		$(window).scroll(function() {
			if ($(document).scrollTop() + $(window).outerHeight() / 2 > $(section).offset().top) {
				setTimeout(function() {
					$(section).addClass('animated');
				}, 150);
			}

			detectScrolledSection(section);
		});
	});;
});