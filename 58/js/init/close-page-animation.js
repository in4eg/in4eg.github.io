$('[data-close-page]').click(function(e){
	e.preventDefault();
	var link = $(this).attr('href');
	var x = e.clientX;
	var y = e.clientY;

	$('.loaded-page').addClass('page-hidden');
	$('#pageFake').css({
		left: x + 'px',
		top: y + 'px'
	}).removeClass('fake-out');

	setTimeout(function(){ location.href = link; }, 250);
})