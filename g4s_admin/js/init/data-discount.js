$('[data-discount]').each(function(i, input){
	$(input).on('keyup keydown change', function() {
		if (!$(input).val().trim()) {
			$(input).parents('.discout-form').removeClass('with-data');
		} else {
			$(input).parents('.discout-form').addClass('with-data');
		}
	});
});