$('[data-calendar]').click(function(){
	$($(this).data('calendar')).addClass('active');
})


$('body').click(function(e) {
	if ($(e.target).closest('[data-calendar], #calendarCover').length === 0) {
		$('[data-calendar]').removeClass('active');
		$('#calendarCover').removeClass('active');
	}
});

$('.calendar td').each(function(i, date){
	$(date).click(function(){
		if ($('.dates-row').find('.date.start').parent('.item').hasClass('active')) {
			$('.dates-row').find('.date.end').parent('.item').addClass('active');
		} else {
			$('.dates-row').find('.date.start').parent('.item').addClass('active');
		}
	})
})