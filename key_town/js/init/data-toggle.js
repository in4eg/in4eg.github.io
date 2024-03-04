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