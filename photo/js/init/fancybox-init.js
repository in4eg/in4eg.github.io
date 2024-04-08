$(document).ready(function() {
	if (typeof Fancybox !== 'undefined') {
		Fancybox.bind('[data-fancybox="gallery"]', {
			dragToClose: false,

			Toolbar: {
				display: {
					left: [],
					middle: [],
					right: ['close'],
				},
			},

			Images: {
				zoom: false,
			},

			Thumbs: {
				type: 'classic',
			},

			Carousel: {
				transition: false,
				friction: 0,
			},

			on: {
				'Carousel.ready Carousel.change': (fancybox) => {
					fancybox.container.style.setProperty(
						'--bg-image',
						`url("${fancybox.getSlide().thumbSrc}")`
					);
				},
			},
		});
	}
});