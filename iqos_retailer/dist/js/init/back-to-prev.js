$(document).on('click', '.prev-btn', function(){
	var parentForm = $(this).parents('[data-prev]').parent('.step');
	var prevForm = $($(this).parents('[data-prev]').data('prev'));

	parentForm.removeClass('active');
	prevForm.addClass('active');
})

$(document).on('click', '.skip-btn', function(){
	var parentForm = $(this).parents('[data-prev]').parent('.step');
	var nextForm = $($(this).parents('[data-next]').data('next'));

	parentForm.removeClass('active');
	nextForm.addClass('active');
})