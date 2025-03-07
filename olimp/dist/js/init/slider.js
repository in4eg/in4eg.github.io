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
							slidesToShow: 1.2,
							slidesToScroll: 1.2,
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

	if (window.gliderInstances) {
		for (let key in window.gliderInstances) {
			let glider = window.gliderInstances[key];

			let totalSlides = glider.slides.length;
			let slidesToScroll = glider.opt.slidesToScroll;
			let currentSlides = slidesToScroll;

			function setSlideCount(){
				let countCover = glider.ele.parentElement.querySelector('.slider-navigation .slider-counter');
				if (!countCover) return;

				countCover.querySelector('.current').innerHTML = Math.floor(currentSlides);
				countCover.querySelector('.total').innerHTML = totalSlides;
			};

			function checkNavigation(){
				if (!glider || !totalSlides) return;
				let gliderParent = glider.ele.parentElement;
				if (totalSlides <= glider.opt.slidesToShow) {
					gliderParent.classList.add('hide-arrow');
				} else {
					gliderParent.classList.remove('hide-arrow');
				}
			};

			function setFaderPosition(){
				let fader = glider.ele.parentElement.querySelector('.slider-navigation .fade');
				let fadeWidth = Math.floor(100/Math.ceil(totalSlides/slidesToScroll));
				let leftPosition = Math.floor(currentSlides/totalSlides*100 - fadeWidth);

				if (leftPosition < fadeWidth) {
					leftPosition = 0;
				};

				fader.style.width = fadeWidth + '%';
				fader.style.left = leftPosition + '%';
			};

			function onGliderScrollEnd(scrollElement){
				let itemWidth = glider.itemWidth;
				let leftScrollPosition = scrollElement.scrollLeft;
				currentSlides = Math.floor(leftScrollPosition/itemWidth + slidesToScroll);
				setSlideCount();
				setFaderPosition();
			}

			setSlideCount();
			checkNavigation();
			setFaderPosition();

			// glider.arrows.prev.addEventListener(`click`, function(e){
			// 	if ((totalSlides - slidesToScroll) < slidesToScroll) {
			// 		currentSlides = Math.floor(totalSlides - (totalSlides - slidesToScroll));
			// 	} else {
			// 		currentSlides -= Math.floor(slidesToScroll);
			// 	};
			// 	setSlideCount();
			// 	setFaderPosition();
			// }, {passive: true});

			// glider.arrows.next.addEventListener(`click`, function(e){
			// 	currentSlides += slidesToScroll;
			// 	if (currentSlides >= totalSlides) {
			// 		currentSlides = totalSlides;
			// 	}
			// 	setSlideCount();
			// 	setFaderPosition();
			// }, {passive: true});


			glider.ele.addEventListener('scroll', function(event){
				onGliderScrollEnd(event.srcElement);
			})


			window.addEventListener('resize', function(event){
				setSlideCount();
				checkNavigation();
				setFaderPosition();
			})
		}
	}
})
