$('[data-scrollto]').click(function(e) {
	var headerOffset;
	var target = $(this).attr('data-scrollto');
	e.preventDefault();
	headerOffset = $('.main-header').hasClass('fixed') ? $('.main-header').outerHeight() : 0;
	$('html,body').animate({
		scrollTop: $($(this).data('scrollto')).offset().top - headerOffset
	}, 500);
	setTimeout(function(){
		location.hash = target.replace(/\#/gim ,'')
	}, 100);
});