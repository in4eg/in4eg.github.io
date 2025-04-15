$('[data-toggle-clicked]').click(function(){
	$(this).toggleClass('clicked');
	$($(this).data('toggle-clicked')).toggleClass('clicked');
})

$('body').click(function(e) {
	if ($(e.target).closest('[data-toggle-clicked], .toggle-outer').length === 0) {
		$('[data-toggle-clicked]').removeClass('clicked');
		$('.toggle-outer').removeClass('clicked');
	}
});