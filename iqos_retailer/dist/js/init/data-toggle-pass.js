$('[data-toggle-pass]').click(function(){
	$(this).toggleClass('active');
	$(this).find('.icon-img').toggleClass('active');
	if ($(this).hasClass('active')) {
		$(this).siblings('input').attr('type', 'text');
	} else {
		$(this).siblings('input').attr('type', 'password');
	}
})