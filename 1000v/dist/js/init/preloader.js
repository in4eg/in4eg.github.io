$(window).load(function(){
	setTimeout(function(){
		$('.preloader').each(function(i, preloader){
			$(preloader).removeClass('active');
		})
	}, 350);
});