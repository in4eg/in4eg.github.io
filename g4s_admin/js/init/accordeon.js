$(document).ready(function() {
	$(document).on('click', '[data-accordeon] .anchor', function(e){
		var anchor = this;
		$('[data-accordeon]').not($(anchor).parents('[data-accordeon]')).each(function(i, acc) {
			$('.anchor', acc).removeClass('active');
			$(acc).removeClass('active');
		});
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).closest('[data-accordeon]').removeClass('active');
		} else {
			$(this).addClass('active');
			$(this).closest('[data-accordeon]').addClass('active');
		}
		if ($('.scrolled')) {
			$('.scrolled').perfectScrollbar('update');
		}
	})
});
