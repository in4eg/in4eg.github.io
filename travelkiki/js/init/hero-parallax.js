$(document).ready(function() {
	if (!$('.hero, .form-hero').length) return;

	$('.hero, .form-hero').each(function(i, hero){
		var ratio = parseFloat($(hero).data('parallax-ratio') || 1);
		$(document).scroll(function(){
			var top = $(document).scrollTop();
			$('.background', hero).css('transform', 'translateY('+(top / 2 * ratio)+'px)');
		});
	});
});