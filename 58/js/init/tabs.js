/*tabs */
var setActiveTab = function(content, indx) {
	content.find('.tab-content').removeClass('active animated').eq(indx).addClass('active');
	content.find('.tab-content').eq(indx).scrollTop(0);
};

var toggleTabs = function(el, nav) {
	el.siblings().removeClass('active');
	el.addClass('active');
	setActiveTab($($(nav).data('tabs')), el.index());
	$('[data-tabs]').removeClass('active');
}

if (window.innerWidth >= 768) {
	$('[data-tabs]').each(function(i, nav) {
		$(nav).find('.tab-item').hover(function(e) {
			e.preventDefault();
			toggleTabs($(this), nav);
		});
	});

} else {
	$('[data-tabs]').each(function(i, nav) {
		$(nav).find('.tab-item').click(function(e) {
			e.preventDefault();
			toggleTabs($(this), nav);
			$('#headerTabs').addClass('animated');

			setTimeout(function(){ $('#headerTabs').removeClass('animated'); }, 650);
		});
	});
}

$(document).on('click', '.back-link', function(){
	$(this).parents('.tab-content').removeClass('active');
})

$(window).resize(function(e){
	if (window.innerWidth >= 768) {
		$('[data-tabs]').each(function(i, nav) {
			$(nav).find('.tab-item').hover(function(e) {
				e.preventDefault();
				toggleTabs($(this), nav);
			});
		});

	} else {
		$('[data-tabs]').each(function(i, nav) {
			$(nav).find('.tab-item').click(function(e) {
				e.preventDefault();
				toggleTabs($(this), nav);
				$('#headerTabs').addClass('animated');

				setTimeout(function(){ $('#headerTabs').removeClass('animated'); }, 650);
			});
		});
	}

	if (window.innerWidth <= 768) {
		contentScrollAnimation()
	}
});