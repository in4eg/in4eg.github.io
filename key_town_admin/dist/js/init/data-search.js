
$(document).ready(function() {
	$('[data-search]').each(function(i, search) {
		$(search).keydown(function(e) {
			console.log(e)
		});
	});
});