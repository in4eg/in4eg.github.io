$(window).scroll(function(){
	totalHeight = $(document).height();
	scrollPosition = $(window).scrollTop() + $(window).height();
	scrollTop = $(window).scrollTop();

	// footer
	footerPosition(totalHeight, scrollPosition);

	// header
	headerPosition(scrollTop);
});

var footerPosition = function(totalHeight, scrollPosition) {
	var footerHeight = $('#mainFooter').outerHeight();

	if (scrollPosition >= totalHeight - footerHeight) {
		$('#pageFooter').addClass('to-top');
	} else {
		$('#pageFooter').removeClass('to-top');
	}
}

footerPosition($(document).height(), $(window).scrollTop() + $(window).height());


var headerPosition = function(scrollTop) {
	var offsetTop = $('#headerBanner').outerHeight();

	if (offsetTop) {
		if (scrollTop >= offsetTop) {
			$('#mainHeader').addClass('to-top');
			// $('#innerHeader').addClass('opened');
		} else {
			$('#mainHeader').removeClass('to-top');
			// $('#innerHeader').removeClass('opened');
		}
	} else {

		if (scrollTop >= 50 && !$('#methodolodySection').hasClass('offseted')) {
			$('#mainHeader').addClass('to-top');
			// $('#innerHeader').addClass('opened');
		} else {
			$('#mainHeader').removeClass('to-top');
			// $('#innerHeader').removeClass('opened');
		}
	}
}

headerPosition($(window).scrollTop());

var contentScrollAnimation = function(){
	$('.tab-content').each(function(i, el){
		var topOffset = 50;
		var top = 0;
		var maxOffset = 110;

		$(el).scroll(function(){
			var top = $(el).scrollTop();
			var alpha = Math.clamp(top / topOffset, 0, 1);

			$(el).find('.back-link img').css('opacity', (1-alpha*2));

			$(el).find('.back-link').css({
				width:  Math.clamp(400 * (1-alpha), maxOffset, 180)  + 'px',
				height: Math.clamp(400 * (1-alpha), maxOffset + 14, 180)  + 'px',
			});

			// console.log($(el).find('.title').offset().top);
			console.log(top);

			if (top >= maxOffset) {
				console.log('add top');
				$(el).find('.title').addClass('top');
			} else {
				$(el).find('.title').removeClass('top');
			}



			if (top >= 220) {
				console.log('add fixed')
				$(el).find('.title').addClass('fixed');
			} else {
				$(el).find('.title').removeClass('fixed');
			}
		})
	})
}

if (window.innerWidth <= 768) {
	contentScrollAnimation()
}