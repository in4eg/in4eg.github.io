

var bannerPositionDesktop = function() {
	var bannerHeight = $('#headerBanner').outerHeight();
	var navHeight = $('#spyFixed').height();
	var offsetTop = bannerHeight - navHeight;
	var previousScroll = 0;

	$(window).scroll(function(){
		var currentScroll = $(this).scrollTop();
		if ($(window).scrollTop() > 0) {
			$('#innerHeader, #spyFixed').addClass('light-top');

			// if ($(window).scrollTop() > 0) {
				if (currentScroll > previousScroll){
					$('#innerHeader, #spyFixed').addClass('scrolled-down');
				} else {
					$('#innerHeader, #spyFixed').removeClass('scrolled-down');
				}
				previousScroll = currentScroll;
			// }
			// console.log(previousScroll);
		} else {
			$('#innerHeader, #spyFixed').removeClass('light-top');
		}
		if (offsetTop && $(window).scrollTop() >= offsetTop) {
			$('#spyFixed').addClass('fixed-top');
			$('#innerHeader').addClass('opened');
			$('#pageFooter').removeClass('no-buttons');
		} else {
			$('#spyFixed').removeClass('fixed-top');
			$('#innerHeader').removeClass('opened');
		}
	});
}
bannerPositionDesktop();

