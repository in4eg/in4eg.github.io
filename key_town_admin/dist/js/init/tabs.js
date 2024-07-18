$('body').on('click', '[data-tabs] > .tab', function(e) {
	let container = $(this).closest('[data-tabs]')[0];
	let tabIndex = $(this).index();
	window.setActiveTab(container, tabIndex);
});

window.setActiveTab = function(container, tabIndex){
	let clickedTab = $(container).find('.tab').eq(tabIndex);
	if (clickedTab.hasClass('disabled')) {
		return;
	}
	$(clickedTab).siblings().removeClass('active');
	$(clickedTab).addClass('active');
	$('> .tab-content', container).removeClass('active').eq(tabIndex).addClass('active');
}