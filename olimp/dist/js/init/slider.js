window.addEventListener('load', function(){
	window.gliderInstances = {};

	if (document.querySelectorAll('.glider').length && window.Glider) {

		Array.prototype.forEach.call(document.querySelectorAll('.glider'), function(slider){
			gliderInstances[slider.id] = new Glider(slider, {
				draggable: true,
				arrows: {
					prev: slider.parentElement.querySelector('.glider-prev'),
					next: slider.parentElement.querySelector('.glider-next')
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
						breakpoint: 993,
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
	}
})

if (document.querySelectorAll('.glider').length) {
	Array.prototype.forEach.call(document.querySelectorAll('.glider'), function(slider){
		slider.addEventListener('glider-slide-visible', function(event){
			var glider = Glider(this);

			let countCover = glider.ele.parentElement.querySelector('.slider-navigation .slider-counter');
			if (!countCover) return;

			let totalSlides = glider.slides.length;
			let currentSlides = event.detail.slide+1;

			let checkNavigation = function(){
				if (totalSlides <= glider.opt.slidesToShow) {
					slider.parentElement.classList.add('hide-arrow')
				} else {
					slider.parentElement.classList.remove('hide-arrow')
				}
			};

			checkNavigation();

			countCover.querySelector('.current').innerHTML = currentSlides;
			countCover.querySelector('.total').innerHTML = totalSlides;

			let fadeWidth = glider.opt.slidesToScroll*10;

			glider.ele.parentElement.querySelector('.slider-navigation .fade').style.width = fadeWidth + '%';

			let leftPosition = (100 - (totalSlides - currentSlides)/totalSlides*100) - fadeWidth;
			if (leftPosition < 0) {
				leftPosition = 0
			}

			glider.ele.parentElement.querySelector('.slider-navigation .fade').style.left = leftPosition + '%';

			window.addEventListener('resize', function(event){
				checkNavigation();
			});
		});
	})

};