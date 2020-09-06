if ($('[data-carousel]').length > 0) {
	$('[data-carousel]').each(function(i, slider) {
		if ($.fn.owlCarousel) {
			var items = $(slider).data('carousel').split(',');
			var speed = $(slider).data('speed') || 3500;
			var timeout = $(slider).data('timeout') || 8000;
			var sliderId = $(slider).attr('id');
			if (typeof $(slider).data('margin') !== 'undefined') {
				margin = $(slider).data('margin');
			} else {
				margin = 20;
			}
			$(slider).owlCarousel({
				loop: false,
				margin: margin,
				autoplay: false,
				autoplayTimeout: timeout,
				autoplaySpeed: speed,
				nav: false,
				dots: false,
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
				},
				onInitialized: function(event) {
					var slides = event.item.count;
					if (slides <= items[0]) {
						$($(slider).data('nav')).addClass('disabled');
					}
				}
			});
			// Go to the next item
			$($(slider).data('nav')).find('.slider-next').click(function() {
				$(slider).trigger('next.owl.carousel', [300]);
			})
			// Go to the previous item
			$($(slider).data('nav')).find('.slider-prev').click(function() {
				$(slider).trigger('prev.owl.carousel', [300]);
			})
		}
	});
}
