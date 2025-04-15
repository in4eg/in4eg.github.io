$('[data-onscroll]').each(function(i, block){
	var headerHeight = $('#mainHeader').outerHeight()
	$(block).scroll(function(e){
		// console.log()
		var relativeBtn = $(block).data('onscroll');
		var totalHeight = block.scrollHeight - $(window).height();
		var persent = $(block).scrollTop() / totalHeight * 100;
		$(block).attr('data-scroll-persent', persent)

		if ($(block).scrollTop() > headerHeight) {
			$('#mainHeader').addClass('on-scroll');
			$(relativeBtn).removeClass('disabled');
		} else {
			$('#mainHeader').removeClass('on-scroll');
			$(relativeBtn).addClass('disabled');
		}
		dependOnScroll(persent, relativeBtn);
		textClipping(persent, relativeBtn);
	})
})

function dependOnScroll(persent, relativeBtn) {
	if (persent > 0) {
		$(relativeBtn).removeClass('disabled');
	} else {
		$(relativeBtn).addClass('disabled');
	}

	if (persent >= 98) {
		$(relativeBtn).addClass('active');
	} else {
		$(relativeBtn).removeClass('active');
	}

	$(relativeBtn).find('.fake-round').css({
		width: persent + '%'
	});
}


function textClipping(persent, clipParent) {
	var clipAreaPersent = $(clipParent).find('.text-clipping').width() / $(clipParent).width() * 100;
	var startPoint = (100 - clipAreaPersent)/2;
	var difference = persent - startPoint;
	var clipPersent = difference / clipAreaPersent;

	// if (persent >= startPoint && persent <= startPoint + clipAreaPersent) {
		if (persent >= startPoint) {
			var pathPersent = Math.ceil(clipPersent * 100);
			$(clipParent).find('.text-clipping').addClass('fadeout');
			$(clipParent).find('.text-clipping').attr('style', '-webkit-clip-path: polygon(0% 0%, ' + pathPersent +'% 0%, ' + pathPersent +'% 100%, 0% 100%); clip-path: polygon(0% 0%, ' + pathPersent +'% 0%, ' + pathPersent +'% 100%, 0% 100%);');
		} else if (persent <= startPoint){
			$(clipParent).find('.text-clipping').removeClass('fadeout');
		}
	}

	$('body').on('click', '#progressBtn.active', function(){
		$('#returnToRetailer').addClass('active');
		$('#mainHeader').addClass('light-buttons');
	})