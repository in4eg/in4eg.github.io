$(document).ready(function() {
	if ($('[data-fancybox]') && window.fancybox) {
		Fancybox.bind('.owl-item:not(.cloned) [data-fancybox]', {
			compact: false,
			idle: false,
			animated: false,
			showClass: false,
			hideClass: false,
			dragToClose: false,
			Images: {
				zoom: false,
			},
			Toolbar: {
				display: {
					left: [],
					middle: [],
					right: ['close'],
				},
			},
		});
	};
});