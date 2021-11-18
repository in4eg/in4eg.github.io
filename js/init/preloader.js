$(document).ready(function(){
	var loader = false;
	if (window.scrollY > 0) {
		$('.preloader').addClass('hidden');
		$('body').addClass('onload');
		loader = true;
	} else {
		$(document).on('click keydown scroll', function(){
			if (!loader) {
				$('body').addClass('onload');
				loader = true;
			}
			setTimeout(function(){
				$('.preloader').addClass('hidden');
			},200)
		});
	}
})
