$(document).ready(function () {
	if ($.fn.packery) {
		$('.gallery-grid').packery({
			// options
			itemSelector: '.grid-item',
			gutter: 0
		});
	}
})