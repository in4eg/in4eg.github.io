$('[data-nav]').each(function(i, button) {
	$(button).click(function(e) {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$($(this).data('nav')).removeClass('active animated');
			$(this).parents('.menu-part').find('[data-dropdown]').removeClass('active');
		} else {
			$(this).addClass('active');
			$($(this).data('nav')).addClass('active');
			setTimeout(function(){ $($(button).data('nav')).addClass('animated'); }, 200);
		}
		if ($('.scrolled')) {
			$('.scrolled').perfectScrollbar('update');
		}
		setTimeout(function(){
			if ($($(button).data('nav')).find('.text-input')) {
				$($(button).data('nav')).find('.text-input').focus();
			}
		}, 5);

		$('[data-check]').each(function(i, el){
			if ($(el).prop('checked')) {
				var top = $(el).offset().top;
				var left = $(el).offset().left;
				var fader = $(el).parent().siblings('.fader');

				fader.css({
					top: top + 'px',
					left: left + 5 + 'px'
				})
			}
		});
	});
});