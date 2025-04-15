$('[data-tooltip]').each(function(i, elem){
	$(elem).on('click', '.anchor', function(){
		$(elem).toggleClass('active');
		$('[data-tooltip]').not($(this).parent()[0]).removeClass('active');
	});
})

$('body').click(function(e) {
	if ($(e.target).closest('[data-tooltip], [data-tooltip] .anchor').length === 0) {
		$('[data-tooltip]').removeClass('active');
	}
});