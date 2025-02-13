window.addEventListener('load', function(){
	new Glider(document.querySelector('.glider'), {
		draggable: true,
		arrows: {
			prev: '.glider-prev',
			next: '.glider-next'
		},
		responsive: [
			{
				// screens greater than >= 0px
				breakpoint: 0,
				settings: {
					// Set to `auto` and provide item width to adjust to viewport
					slidesToShow: 1.3,
					slidesToScroll: 1.3,
					duration: 0.25
				}
			}, {
				// screens greater than >= 640px
				breakpoint: 640,
				settings: {
					// Set to `auto` and provide item width to adjust to viewport
					slidesToShow: 2,
					slidesToScroll: 2,
					duration: 0.25
				}
			}, {
				// screens greater than >= 768px
				breakpoint: 768,
				settings: {
					// Set to `auto` and provide item width to adjust to viewport
					slidesToShow: 2,
					slidesToScroll: 2,
					duration: 0.25
				}
			},{
				// screens greater than >= 775px
				// breakpoint: 993,
				settings: {
					// Set to `auto` and provide item width to adjust to viewport
					slidesToShow: 3,
					slidesToScroll: 3,
					duration: 0.25
				}
			},{
				// screens greater than >= 1200px
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					duration: 0.25
				}
			}
		]
	})
})

document.querySelector('.glider').addEventListener('glider-slide-visible', function(event){
	var glider = Glider(this);
	// console.warn(glider)
	// console.warn(event)

});