$(document).ready(function() {

	function closeAllDropdowns(dropdown){
		dropdown.removeClass('active');
		dropdown.find('.anchor').removeClass('active');
		dropdown.find('[data-fade-in]').removeClass('faded-in');
	}

	$('[data-dropdown]').each(function(i, elem) {
		$('.anchor', elem).click(function(e) {
			e.preventDefault();
			closeAllDropdowns($('[data-dropdown]').not(elem));
			$(this).not('.not-active').toggleClass('active');
			$(this).closest('[data-dropdown]').toggleClass('active');

			setTimeout(function(){
				$(elem).find('[data-fade-in]').addClass('faded-in');
			}, 50);
		});

		$('.close-dropdown', elem).click(function(e) {
			$(elem).removeClass('active');
		});
	});

	$(document).on('click', function(e){
		if (!$(e.target).closest('[data-dropdown]').length) {
			closeAllDropdowns($('[data-dropdown]'));
		}
	})
});
