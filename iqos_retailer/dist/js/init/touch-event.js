(function($) {
	$.fn.swipeDetector = function(options) {
		var defaultSettings, pixelOffsetX, pixelOffsetY, startX, startY, swipeEnd, swipeStart, swipeState, swipeTarget, swiping;
		swipeState = 0;
		startX = 0;
		startY = 0;
		pixelOffsetX = 0;
		pixelOffsetY = 0;
		swipeTarget = this;
		defaultSettings = {
			swipeThreshold: 70,
			useOnlyTouch: false
		};
		swipeStart = function(event) {
			if (options.useOnlyTouch && !event.originalEvent.touches) {
				return;
			}
			if (event.originalEvent.touches) {
				event = event.originalEvent.touches[0];
			}
			if (swipeState === 0) {
				swipeState = 1;
				startX = event.clientX;
				startY = event.clientY;
			}
		};
		swipeEnd = function(event) {
			if (swipeState === 2) {
				swipeState = 0;
				if (Math.abs(pixelOffsetX) > Math.abs(pixelOffsetY) && Math.abs(pixelOffsetX) > options.swipeThreshold) {
					if (pixelOffsetX < 0) {
						swipeTarget.trigger($.Event('swipeLeft.sd'));
					} else {
						swipeTarget.trigger($.Event('swipeRight.sd'));
					}
				} else if (Math.abs(pixelOffsetY) > options.swipeThreshold) {
					if (pixelOffsetY < 0) {
						swipeTarget.trigger($.Event('swipeUp.sd'));
					} else {
						swipeTarget.trigger($.Event('swipeDown.sd'));
					}
				}
			}
		};
		swiping = function(event) {
			var swipeOffsetX, swipeOffsetY;
			if (swipeState !== 1) {
				return;
			}
			if (event.originalEvent.touches) {
				event = event.originalEvent.touches[0];
			}
			swipeOffsetX = event.clientX - startX;
			swipeOffsetY = event.clientY - startY;
			if (Math.abs(swipeOffsetX) > options.swipeThreshold || Math.abs(swipeOffsetY) > options.swipeThreshold) {
				swipeState = 2;
				pixelOffsetX = swipeOffsetX;
				pixelOffsetY = swipeOffsetY;
			}
		};
		(function() {
			options = $.extend(defaultSettings, options);
			swipeTarget.on('mousedown touchstart', swipeStart);
			$('html').on('mouseup touchend', swipeEnd);
			$('html').on('mousemove touchmove', swiping);
		})();
		return swipeTarget;
	};
})(jQuery);