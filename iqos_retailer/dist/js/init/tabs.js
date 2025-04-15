if ($('[data-carousel]').length > 0) {
	$('[data-carousel]').each(function(i, slider) {
		if ($.fn.owlCarousel) {
			var speed = $(slider).data('speed') || 3500;
			var timeout = $(slider).data('timeout') || 8000;

			$(slider).owlCarousel({
				loop: false,
				margin: 0,
				autoplay: false,
				autoplayTimeout: timeout,
				autoplaySpeed: speed,
				nav: false,
				navText: ['<i class="icon icon-left-arrow"></i>', '<i class="icon icon-right-arrow"></i>'],
				dots: false,
				responsive:{
					0:{
						items:1
					}
				},
				onTranslate: function(event) {
					var index = event.item.index;
					var sliderNav = $(slider).data('nav');

					if (typeof $(slider).data('nav') === 'string') {
						var activeItem = $(sliderNav).find('[data-item]').eq(index);
						activeItem.addClass('active');
						activeItem.siblings().removeClass('active');
					}
				}
			});
			$('[data-item]').click(function() {
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
				$(slider).trigger('to.owl.carousel', [$(this).index(), 300]);
			});
		} else {
			activateSlide(0, $('#tabsSlider'))
		}
	});
}

$('[data-tab]').each(function(i, item) {
	$(item).click(function(e){
		var tabsContainer = $($(this).data('tab'));
		var index = $(this).data('item')
		tabsContainer.addClass('active');

		$(this).addClass('active');
		$(this).siblings().removeClass('active');

		$('#sliderNav').find('[data-item]').eq(index).addClass('active');

		var positionX = e.clientX;
		var positionY = e.clientY;

		$('#tabsFake').css({
			top: positionY,
			left: positionX
		})

		setTimeout(function(){ tabsContainer.addClass('fade-show'); }, 250);
		setTimeout(function(){ tabsContainer.addClass('animated'); }, 750);

		if (!$.fn.owlCarousel) {
			activateSlide(index, $('#tabsSlider'))
		}
	})
});

function activateSlide(index, tabsSlider){
	tabsSlider.find('.content').eq(index).addClass('active')
}

$('[data-close-tabs]').click(function(){
	var tabs = $($(this).data('close-tabs'));
	
	tabs.removeClass('animated');
	setTimeout(function(){ tabs.removeClass('fade-show'); }, 250);
	setTimeout(function(){ tabs.removeClass('active'); $('[data-item]').removeClass('active'); }, 450);
})

