$(document).ready(function() {
	$('[data-toggle] .btn-toggle').each(function(i, anchor) {
		$(anchor).click(function(e) {
			$('[data-toggle]').not($(anchor).parents('[data-toggle]')).each(function(i, acc) {
				$('.btn-toggle', acc).removeClass('active animated');
				$(acc).removeClass('active animated');
			});
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$(this).closest('[data-toggle]').removeClass('active animated');
			} else {
				$(this).addClass('active');
				$(this).closest('[data-toggle]').addClass('active');
				setTimeout(function(){ $(anchor).closest('[data-toggle]').addClass('animated'); }, 200);
			}
			if ($('.scrolled')) {
				$('.scrolled').perfectScrollbar('update');
			}
			setTimeout(function(){
				if ($(anchor).parents('[data-toggle]').find('.text-input')) {
					$(anchor).parents('[data-toggle]').find('.text-input').focus();
				}
			}, 5);
		});
	});
});

$('body').click(function(e) {
	if ($(e.target).closest('.toggle-inner, .btn-toggle').length === 0) {
		$('[data-toggle], .btn-toggle').removeClass('active animated');
	}
});