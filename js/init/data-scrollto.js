$('[data-scrollto]').click(function(e) {
	e.preventDefault();
	var target = $(this).attr('data-scrollto');
	var sectionHeight = $(target).offset().top;

	$('html,body').animate({
		scrollTop: sectionHeight
	}, 500);
	
	setTimeout(function(){
		location.hash = target.replace(/\#/gim ,'')
	}, 510);
});