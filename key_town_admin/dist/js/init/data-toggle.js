$(document).ready(function() {
	$('[data-toggle]').each(function(i, button) {
		$(button).click(function(e) {
			if ($(this).hasClass('open')) {
				$(this).removeClass('open');
				$($(this).data('toggle')).removeClass('open animated');
			} else {
				$(this).addClass('open');
				$($(this).data('toggle')).addClass('open');
				setTimeout(function(){
					$($(this).data('toggle')).addClass('animated');
				}.bind(this), 200);
			}
		});
	});
});