$('[data-toggle]').each(function(i, button) {
	$(button).click(function(e) {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('#'+$(this).data('toggle')).removeClass('active animated');
		} else {
			$(this).addClass('active');
			$('#'+$(this).data('toggle')).addClass('active');
			setTimeout(function(){
				$('#'+$(this).data('toggle')).addClass('animated');
			}.bind(this), 200);
		}
	});
});