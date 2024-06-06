$('[data-scrollto]').click(function(e) {
	var headerOffset;
	e.preventDefault();
	headerOffset = $('.main-header').hasClass('fixed') ? $('.main-header').outerHeight() : 0;
	$('html,body').animate({
		scrollTop: $($(this).data('scrollto')).offset().top - headerOffset
	}, 500);
	if (window.innerWidth <= 1200 && $('#mainNavigation').hasClass('active')) {
		$('#mainNavigation').removeClass('active animated');
		$('.button-menu').removeClass('active');
		$('body').removeClass('overlayed');
	}
});