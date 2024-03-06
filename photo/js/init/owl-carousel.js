$(document).ready(function(){
	if ($.fn.owlCarousel) {
		$(document).find('.owl-carousel').each(function(i, carousel) {
			$(carousel).owlCarousel({
				loop:true,
				margin:0,
				nav:false,
				dots: true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:2
					},
					1000:{
						items:3
					}
				}
			})
		});
	}
});