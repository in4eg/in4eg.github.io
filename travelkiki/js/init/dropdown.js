$(document).ready(function() {
	$('[data-dropdown]').each(function(i, elem) {
		$('.anchor', elem).click(function(e) {
			e.preventDefault();
			$(this).closest('[data-dropdown]').toggleClass('active');
			if ($(this).closest('[data-dropdown]').hasClass('active')) {
				$(this).closest('[data-dropdown]').find('.scrolled').perfectScrollbar('update');
			}
		});
		$('body').click(function(e) {
			if ($(e.target).closest(elem).length === 0) {
				$(elem).removeClass('active');
			}
		});
	});
});
