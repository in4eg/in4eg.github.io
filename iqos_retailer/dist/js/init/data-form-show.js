$('[data-form-show]').click(function(){
	parent = $(this).data('form-show');
	$(parent).addClass('active');
	setTimeout(function(){
		$(parent).addClass('animated');
	}, 150);
})