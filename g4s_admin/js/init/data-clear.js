$('[data-clear]').click(function(){
	$(this).siblings('.form-group').find('input').val('');
	$(this).parents('[data-toggle]').removeClass('active animated');
	$(this).parents('[data-toggle]').find('.btn-toggle').removeClass('active');
})