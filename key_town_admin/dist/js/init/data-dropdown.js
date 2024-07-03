$(document).ready(function() {
	$('[data-dropdown]').each(function(i, elem) {
		$('.anchor', elem).click(function(e) {
			e.preventDefault();
			$(this).toggleClass('active');
			$(this).closest('[data-dropdown]').toggleClass('active');
		});
		$('.close-dropdown', elem).click(function(e) {
			$(elem).removeClass('active');
		});
	});

	$(document).on('click', function(e){
		if (!$(e.target).closest('[data-dropdown]').length) {
			$('[data-dropdown]').removeClass('active');
		}
	})
});
