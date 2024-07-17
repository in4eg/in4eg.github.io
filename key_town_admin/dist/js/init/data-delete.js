$(document).ready(function() {
	$(document).on('click', '[data-delete]', function(e){
		if ($(this).siblings('[data-delete]').length == 0) {
			$(this).parent().addClass('empty');
		}
		$(this).remove();
		window.tooltipHint.hide();
	})
});
