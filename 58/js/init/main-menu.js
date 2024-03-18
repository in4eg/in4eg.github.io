$('[data-menu]').click(function(e) {
	var indx = $('.tab-content, .tab-item.active').index();
	var tabs = $(this).data('menu');
	var btn = $(this);

	var x = e.clientX;
	var y = e.clientY;

	btn.toggleClass('active');
	$('.page-footer, #spyFixed').toggleClass('hidden');

	$('.main-header').addClass('show');
	$(tabs).addClass('active');
	$('.tab-content').removeClass('active');

	$('#headerTabs .fake-round').css({
		left: x + 'px',
		top: y + 'px'
	});


	if (btn.hasClass('active')) {
		$('body, .main-header').css('width', $('body').width() + 'px').addClass('overlayed');
		$('.main-header').addClass('animated');

		if (window.innerWidth >= 768) {
			setTimeout(function(){
				$('.tab-content').eq(indx).addClass('active');
			}, 550);
		}
	} else {
		$('body, .main-header').css('width', '').removeClass('overlayed');
		$('.main-header').removeClass('animated');

		setTimeout(function(){
			$('.main-header').removeClass('show');
			$(tabs).removeClass('active');
		}, 450);
	}
});

$(document).on('click', '[data-inner-link]', function(){
	var target = $(this).attr('href');
	var targetSection = target.replace(/^.+html/,'');

	$('html,body').animate({
		scrollTop: $(targetSection).offset().top - $('#mainHeader').outerHeight()
	}, 300);

	$('[data-menu]').removeClass('active');
	$('body, .main-header').css('width', '').removeClass('overlayed');
	$('.main-header').removeClass('animated');
	$('.tab-content').removeClass('active');
	$('.page-footer, #spyFixed').removeClass('hidden');

	setTimeout(function(){
		$('.main-header').removeClass('show');
		$('#headerTabs').removeClass('active');
	}, 450);
})


