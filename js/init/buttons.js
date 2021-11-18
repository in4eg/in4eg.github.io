$('.button').click(function(e) {
	var scope = this;
	$('.fader', scope).removeClass('active');
	var coords = {
		x: e.pageX - $(scope).offset().left - 15,
		y: e.pageY - $(scope).offset().top - 15
	};
	$('.fader', scope).css({
		top: coords.y,
		left: coords.x
	});
	setTimeout(function() {
		$('.fader', scope).addClass('active');
	}, 4);
});