$('body').on('click', '[data-tabs] > .tab', function(e) {
	let container = $(this).closest('[data-tabs]')[0];
	if ($(this).hasClass('disabled')) {
		return;
	}
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	$('> .tab-content', container).removeClass('active').eq($(this).index()).addClass('active');
});
