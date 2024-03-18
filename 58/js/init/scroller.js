function scrollToActive(){
	var nav = $('#spyFixed');
	var totalHeight = $('body')[0].scrollHeight - $(window).height();
	var scrollTop = $(window).scrollTop();
	var persentScroll = scrollTop / (totalHeight - 100);

	nav.scrollLeft(nav[0].scrollWidth * persentScroll);
	// nav.find('a').css('transform', 'translateX(' + nav.width() * persentScroll + 'px');
}

scrollToActive()

$(window).scroll(function(){
	scrollToActive()
})



