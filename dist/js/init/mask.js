$('[data-mask]').each(function(i, input) {
	var mask = $(input).attr('data-mask');
	$(input).mask(mask, { placeholder: '' } );
});