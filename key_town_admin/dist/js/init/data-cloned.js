
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
		$(cloned).find('.selecter').remove();
		let inputId = $(element).find('input, select').attr('id')+getRandom(3);
		$(cloned).find('input, select').attr('id', inputId).val('').attr('name', inputId);
		$(cloned).find('label').remove();
		$(cloned).insertAfter(element);
		$(element).removeAttr('data-cloned');
		$(element).find('.button').remove();
		window.tooltipHint.hide();

		// selecter reinit
		if ($(cloned).find('select')){

			let data = $(cloned).find('select').data();
			$(cloned).find('select').selecter({
				multiple: data && data.multiple === true ? true : false,
				search: data && data.search === true ? true : false,
				classname: data && data.classname ? data.classname : null,
				onOpen: function(){ },
				onChange: function(select){
					window.getSelectChangedOption(select);
				},
				onClose: function(){ },
			});
		}
	});
});