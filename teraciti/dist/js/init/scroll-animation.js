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