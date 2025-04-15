$('[data-code-send]').click(function(){
	$('#preloaderCode').addClass('active');
	var callBackFunction = $(this).data('code-send');

	if (window[callBackFunction]) {
		window[callBackFunction]();
	}
})