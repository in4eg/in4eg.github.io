$( document ).ready(function() {
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 750);

	detectScrolledSection($('.section'));
});

$(window).scroll(function() {
	detectScrolledSection($('.section'));
});

var detectScrolledSection = function(element){
	element.each(function(i, section) {
		if ($(document).scrollTop() + $(window).outerHeight() / 2 > $(section).offset().top) {
			$('a[href="#'+$(section).attr('id')+'"]').addClass('highlighted');
		} else {
			$('a[href="#'+$(section).attr('id')+'"]').removeClass('highlighted');
		}
	});
};