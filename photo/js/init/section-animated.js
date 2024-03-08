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
});