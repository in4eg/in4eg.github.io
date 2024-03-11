/*tabs */
var setActiveTab = function(content, indx) {
	content.find('.tab-content').removeClass('active animated').eq(indx).addClass('active');
	content.find('.tab-content').eq(indx).scrollTop(0);

	setTimeout(function(){ content.find('.tab-content').eq(indx).addClass('animated'); }, 200);
};

var toggleTabs = function(el, nav) {
	el.siblings().removeClass('active');
	el.addClass('active');
	setActiveTab($($(nav).data('tabs')), el.index());
}

$('[data-tabs]').each(function(i, nav) {
	$(nav).find('.tab-item').click(function(e) {
		$(nav).find('.tab-item').removeClass('active')
		e.preventDefault();
		toggleTabs($(this), nav);
		if ($('.scrolled')) {
			$('.scrolled').perfectScrollbar('update');
		}
	});
});