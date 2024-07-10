var checkConditionalBLocks, setActiveTab, setPointerPosition;

setActiveTab = function(content, indx) {
	content.each(function(i, cont) {
		$('> .content', cont).removeClass('active').eq(indx).addClass('active');
		$('> .content', cont).closest('.scrolled').perfectScrollbar('update');
	});
};

setPointerPosition = function(tabs) {
	tabs.find('.pointer').css({
		left: tabs.find('.active').position().left + 'px',
		width: tabs.find('.active').outerWidth() + 'px'
	});
};

checkConditionalBLocks = function(tabs) {
	$('[data-if-tab-active*="' + tabs.attr('data-tabs') + '"]').each(function(i, conditional) {
		var data, index, selector;
		data = $(conditional).attr('data-if-tab-active');
		if (!data) {
			return;
		}
		index = parseInt(data.split('|')[0]);
		selector = data.split('|')[1];
		if ($(selector).find('> .active').index() === index) {
			$(conditional).removeClass('hidden');
		} else {
			$(conditional).addClass('hidden');
		}
	});
};

$('body').on('click', '[data-tabs] > .tab', function(e) {
	var nav, text;
	nav = $(this).closest('[data-tabs]')[0];
	if ($(this).hasClass('disabled')) {
		return;
	}
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	setActiveTab($($(nav).data('tabs')), $(this).index());
	setPointerPosition($(this).parent());
	checkConditionalBLocks($(nav));
	if ($(window).width() > 768) {
		$('.scrolled[data-xs-disabled]').perfectScrollbar();
		$('.scrolled').perfectScrollbar('update');
	}
	if ($(this).parent('.selecter-tabs').length > 0) {
		text = $(this).text().trim();
		$(this).parents('.selecter').find('.anchor').html(text);
		$(this).parents('.selecter').removeClass('opened');
	}
});

$('body').on('click', '[data-set-tab]', function(e) {
	var data, index, selector;
	data = $(this).attr('data-set-tab');
	if (!data) {
		return;
	}
	index = data.split('|')[0];
	selector = data.split('|')[1];
	$('[data-set-tab*="' + selector + '"]').removeClass('actived');
	if ($('[data-set-tab*="' + selector + '"]').length > 1) {
		$(this).addClass('actived');
	}
	if ($('[data-tabs="#' + $(selector).attr('id') + '"]').length) {
		$('[data-tabs="#' + $(selector).attr('id') + '"]').find('> li').eq(index).click();
	} else {
		$(selector).find('> .content').removeClass('active').eq(index).addClass('active');
		if ($(selector).closest('.scrolled').length) {
			$(selector).closest('.scrolled').perfectScrollbar('update');
		}
	}
});

$('[data-tabs]').each(function(i, tabs) {
	setPointerPosition($(tabs));
	checkConditionalBLocks($(tabs));
});

$(window).resize(function() {
	$('[data-tabs]').each(function(i, tabs) {
		return setPointerPosition($(tabs));
	});
});
