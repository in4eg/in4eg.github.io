$('[data-offers-checkbox]').each(function(i, checkbox){
	var count = $(checkbox).data('offers-checkbox');
	$(checkbox).on('click', function(){
		var currentValue = parseInt($(count).text().trim());
		if ($(checkbox).prop('checked')) {
			currentValue += 1;
		} else {
			currentValue -= 1;
		}
		$(count).text(currentValue)
	})
})

