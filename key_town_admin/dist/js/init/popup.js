$(document).ready(function() {
	$(function() {
		$('[data-call]').click(function(e) {
			var called;
			e.preventDefault();
			called = $($(this).data('call'));
			if (!called.hasClass('active')) {
				$('body').css('width', $('body').width() + 'px').addClass('overlayed');
				called.addClass('showed');
				setTimeout(function() {
					called.addClass('active');
					if (called.data('onopen') && window[called.data('onopen')]) {
						return window[called.data('onopen')](called);
					}
				}, 100);
			}
		});
		window.CallPopup = function(selector) {
			var called;
			called = $(selector);
			if (!called.hasClass('active')) {
				$('body').css('width', $('body').width() + 'px').addClass('overlayed');
				called.addClass('showed');
				setTimeout(function() {
					called.addClass('active');
					if (called.data('onopen') && window[called.data('onopen')]) {
						return window[called.data('onopen')](called);
					}
				}, 100);
			}
		};
		// window.CallPopup('#paymentModal');
		$('[data-dismiss]').click(function(e) {
			var called;
			e.preventDefault();
			called = $($(this).data('dismiss'));
			$('body').css('width', '').removeClass('overlayed');
			called.removeClass('active');
			setTimeout(function() {
				called.removeClass('showed');
				if ($(document).find('.popup.active').length < 1) {
					if (called.data('onclose') && window[called.data('onclose')]) {
						return window[called.data('onclose')](called);
					}
				}
				let tabs = called.find('[data-tabs]')[0];
				if (tabs) {
					window.setActiveTab(tabs, 0);
				}
			}, 300);
		});
		let hidePopups = function() {
			$('.popup').each(function(i, popup) {
				var called;
				called = $(popup);
				$('body').css('width', '').removeClass('overlayed');
				called.removeClass('active');
				setTimeout(function() {
					called.removeClass('showed');
					if (called.data('onclose') && window[called.data('onclose')]) {
						return window[called.data('onclose')](called);
					}
				}, 300);
			});
		};
		$('.close-all-popups').click(function(e) {
			e.preventDefault();
			hidePopups();
		});
		$('.popup').click(function(e) {
			if ($(e.target).closest('.inner').length === 0 && $(e.target).closest('.files-cover').length === 0) {
				e.preventDefault();
				hidePopups();
			}
		});
	});
});

