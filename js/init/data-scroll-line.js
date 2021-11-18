$('[data-scroll-line]').each(function(i, elem){
	$(window).scroll(function(){
		$(elem).find('.inner').css({
			width: getPersent() * 100 + '%'
		})
	});
})

function getPersent(){
	var totalHeight = $('body')[0].scrollHeight - $(window).height();
	var scrollTop = $(window).scrollTop();
	return scrollTop / (totalHeight - 100);
}


