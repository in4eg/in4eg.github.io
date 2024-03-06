if ($('[data-carousel]').length > 0) {
	$('[data-carousel]').each(function(i, slider) {
		if ($.fn.owlCarousel) {
			var items = $(slider).data('carousel').split(',');

			$(slider).owlCarousel({
				items:1,
				loop:true,
				margin:0,
				autoplay:true,
				autoplayTimeout:3000,
				smartSpeed: 500,
				autoplayHoverPause:false,
				responsive: {
					0: {
						items: items[5] || 1
					},
					481: {
						items: items[4] || 1,
						dots: true
					},
					641: {
						items: items[3] || 1
					},
					767: {
						items: items[2] || 1
					},
					994: {
						items: items[1] || 1
					},
					1200: {
						items: items[0] || 1
					}
				}
			});
		}
	});
}
