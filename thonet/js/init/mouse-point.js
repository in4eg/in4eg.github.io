
$(document).mousemove(function( event ) {
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
		$(point).removeClass('hovered-large hovered-draggable hovered-video hovered-fullscreen');
		$(point).addClass('hovered');
	} else if ($(event.target).hasClass('gallery-img')) {
		$(point).removeClass('hovered hovered-draggable hovered-video hovered-fullscreen');
		$(point).addClass('hovered-large');
	} else if ($(event.target).hasClass('draggable-item')) {
		$(point).removeClass('hovered hovered-large hovered-video hovered-fullscreen');
		$(point).addClass('hovered-draggable');
	} else if ($(event.target).hasClass('video') || event.target.nodeName == 'VIDEO') {
		$(point).removeClass('hovered hovered-large hovered-draggable hovered-fullscreen');
		$(point).addClass('hovered-video');
	} else if ($(event.target).hasClass('fullscreen-button')) {
		$(point).removeClass('hovered hovered-large hovered-draggable hovered-video');
		$(point).addClass('hovered-fullscreen');
	} else {
		$(point).removeClass('hovered hovered-large hovered-draggable hovered-video hovered-fullscreen');
	}
}