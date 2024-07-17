
$(document).ready(function() {

	function getRandom(size){
		let zeros = '0'.repeat(size - 1);
		let x = parseFloat('1' + zeros);
		let y = parseFloat('9' + zeros);
		let confirmationCode = String(Math.floor(x + Math.random() * y));
		return confirmationCode;
	}


	$(document).on('click', '[data-cloned] > .button', function(){
		let element = $(this).parents('[data-cloned]');
		let cloned = $(element).clone(true);
		let inputId = $(element).find('input, select').attr('id')+getRandom(3);
		$(cloned).find('input, select').attr('id', inputId).val('');
		$(cloned).find('label').remove();
		$(cloned).insertAfter(element);
		$(element).removeAttr('data-cloned');
		$(element).find('.button').remove();
	});
});