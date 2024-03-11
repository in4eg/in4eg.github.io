$('[data-check]').each(function(i, el){
	$(el).click(function(e){
		var top = $(e.target).offset().top;
		var left = $(e.target).offset().left;
		var fader = $(this).parent().siblings('.fader');

		fader.css({
			top: top + 'px',
			left: left + 5 + 'px'
		})

		var relatedTab = $(this).attr('id');

		if ($('body').find('[data-payment="' + relatedTab + '"]')) {
			$('body').find('[data-payment]').removeClass('active animated');
			$('body').find('[data-payment="' + relatedTab + '"]').addClass('active');
			setTimeout(function(){ $('body').find('[data-payment="' + relatedTab + '"]').addClass('animated'); }, 200);
		}
	})
});
$(window).resize(function(){
	$('[data-check]').each(function(i, el){
		if ($(el).prop('checked')) {
			var left = $(el).offset().left;
			var fader = $(el).parent().siblings('.fader');

			fader.css({
				left: left + 5 + 'px'
			})
		}
	});
});