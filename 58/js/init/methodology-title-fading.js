(function(){

	function setHeaderAlpha(){
		var top = $(document).scrollTop();
		var alpha = Math.clamp(top / ($('.header-banner .banner-overlay').offset().top + 120), 0, 1);

		$('[data-fade-out-scroll]').css('opacity', (1-alpha));
		$('[data-fade-on-scroll]').css('opacity', (alpha));
	}
	setHeaderAlpha();

	$(window).scroll(function(){
		setHeaderAlpha();
	});


})();