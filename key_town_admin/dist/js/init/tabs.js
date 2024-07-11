
var setActiveTab = function(content, indx) {
	content.each(function(i, cont) {
		$('> .content', cont).removeClass('active').eq(indx).addClass('active');
		$('> .content', cont).closest('.scrolled').perfectScrollbar('update');
	});
};

$('body').on('click', '[data-tabs] > .tab', function(e) {
	let nav = $(this).closest('[data-tabs]')[0];
	if ($(this).hasClass('disabled')) {
		return;
	}
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	setActiveTab($($(nav).data('tabs')), $(this).index());
});
