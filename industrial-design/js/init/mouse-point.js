
$(document).mousemove(function( event ) {
	var point = document.getElementById('mousePoin');
	if (point && event) {
		setPointPosition(point, event);
		poinHover(point, event);
	}
});

$(window).scroll(function() {
	var point = document.getElementById('mousePoin');
	if (point && event) {
		setPointPosition(point, event);
		poinHover(point, event);
	}
});


var setPointPosition = function(point, event){
	if (!point || !event) return;
	var bb = point.getBoundingClientRect();
	var x = event.clientX - bb.width/2;
	var y = event.clientY - bb.height/2;

	$(point).css({
		'transform':'translate3d('+x+'px, '+y+'px, 0px)',
	});
};

var poinHover = function(point, event){
	if (!point || !event) return;

	if ($(event.target).hasClass('link') || $(event.target).closest().hasClass('link')) {
		$(point).removeClass('hovered-large');
		$(point).addClass('hovered');
	} else if ($(event.target).hasClass('gallery-img')) {
		$(point).removeClass('hovered');
		$(point).addClass('hovered-large');
	} else {
		$(point).removeClass('hovered hovered-large hovered-draggable hovered-video hovered-fullscreen');
	}


}