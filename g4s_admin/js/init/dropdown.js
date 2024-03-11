$(document).ready(function() {
	$('[data-dropdown]').each(function(i, elem) {
		$('.dropdown-anchor', elem).click(function(e) {
			e.preventDefault();
			$(this).closest('[data-dropdown]').toggleClass('active');
			if ($('.scrolled')) {
				$('.scrolled').perfectScrollbar('update');
			}
		});
	});
});
