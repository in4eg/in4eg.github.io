$('[data-show]').click(function(){
	$($(this).data('show')).addClass('active');
})
$('[data-hide]').click(function(){
	var block = $($(this).data('hide'));
	block.removeClass('active');
})