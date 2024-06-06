window.runCountdown = function(counter, simple) {
	$(counter).countdown(new Date($(counter).data('countdown')), function(event) {
		return $(this).html(event.strftime("<ul class=\"clear\"> <li><div class=\"count\">%D</div><div class=\"title\">" + (simple ? 'д.' : 'Дні') + "</div></li> <li><div class=\"count\">%H</div><div class=\"title\">" + (simple ? 'г.' : 'Години') + "</div></li> <li><div class=\"count\">%M</div><div class=\"title\">" + (simple ? 'х.' : 'Хвилини') + "</div></li> <li><div class=\"count\">%S</div><div class=\"title\">" + (simple ? 'с.' : 'Секунди') + "</div></li> </ul>"));
	});
	$(counter).on('update.countdown', function(event) {
		if (window[$(this).data('onupdate')]) {
			return window[$(this).data('onupdate')](event);
		}
	});
	$(counter).on('finish.countdown', function(event) {
		if (window[$(this).data('onfinish')]) {
			return window[$(this).data('onfinish')](event);
		}
	});
};

$('[data-countdown]').each(function(i, counter) {
	runCountdown(counter, false);
});
