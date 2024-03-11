$('[data-check-all]').each(function(i, mainToggle){
	var group = $(mainToggle).data('check-all');
	var toggleOption = $(group).data('group');
	var choosen = [];

	$(mainToggle).on('click', function(){
		if($(mainToggle).prop('checked')){
			$(group).find('input[type=checkbox]').each(function(i, input){
				$(input).prop('checked', true);
				var calcInput = $(input).parents('[data-count]').find('.calculator input[type=number]');
				var id = $(input).attr('id');
				choosen.push(id)
				if (calcInput && toggleOption == 'general') {
					var count = parseInt(calcInput.val().trim());
					calcInput.val(++count);
				}
			})
			if (toggleOption == 'single') {
				$('[data-category-button]').removeClass('single').addClass('selected');
				changeButton($('[data-category-button]'), '', 'All categories');
			}
		} else {
			$(group).find('input[type=checkbox]').each(function(i, input){
				$(input).prop('checked', false)
				var calcInput = $(input).parents('[data-count]').find('.calculator input[type=number]');
				if (calcInput && toggleOption == 'general') {
					var count = parseInt(calcInput.val().trim());
					if (toggleOption == 'general') {
						calcInput.val(0);
					}
				}
			});
			if (toggleOption == 'single') {
				choosen = [];
				$('[data-category-button]').removeClass('single').removeClass('selected');
			}
		}
	});

	$(group).find('input[type=checkbox]').each(function(i, input){
		$(input).on('click', function(){
			switch (toggleOption) {
				case 'single':
				var image = $(this).siblings('label').find('img').attr('src');
				var text = $(this).siblings('label').find('.caption').text();

				if($(mainToggle).prop('checked') && !$(input).prop('checked')){
					$(mainToggle).prop('checked', false)
				}

				if ($(input).prop('checked')) {
					var id = $(input).attr('id');
					choosen.push(id)

					if (choosen.length > 1) {
						$('[data-category-button]').removeClass('single').addClass('selected');
						changeButton($('[data-category-button]'), '', 'Multiple');
					} else if (choosen.length == 1) {
						$('[data-category-button]').addClass('single');
						changeButton($('[data-category-button]'), image, text);
					}
				} else {
					removeFromArray(choosen, $(input).attr('id'));
					if (choosen.length < 1) {
						$('[data-category-button]').removeClass('single');
						changeButton($('[data-category-button]'), '', 'All categories');
					} else if (choosen.length == 1) {
						$('[data-category-button]').addClass('single');
						var image = $('#' + choosen[0]).siblings('label').find('img').attr('src');
						var text = $('#' + choosen[0]).siblings('label').find('.caption').text();
						changeButton($('[data-category-button]'), image, text);
					} else if (choosen.length > 1) {
						$('[data-category-button]').removeClass('single').addClass('selected');
						changeButton($('[data-category-button]'), '', 'Multiple');
					} else {
						$('[data-category-button]').removeClass('single').removeClass('selected');
					}
				}
				break;
				case 'general':
				var calcInput = $(input).parents('[data-count]').find('.calculator input[type=number]');
				var count = parseInt(calcInput.val().trim());

				if(!$(mainToggle).prop('checked') && $(input).prop('checked')){
					$(mainToggle).prop('checked', true)
				}
				if($(input).prop('checked') && count < 1){
					calcInput.val(++count);
				} else if (!$(input).prop('checked')){
					calcInput.val(0);
				}
				break;
				default:
				if($(mainToggle).prop('checked') && !$(input).prop('checked')){
					$(mainToggle).prop('checked', false)
				}
			}
		})
	})

})

var changeButton = function(button, newImage, newText){
	var arr = button.data('category-button').split(',');
	img = arr[0];
	text = arr[1];

	$(img).attr('src', newImage)
	$(text).html(newText);
}
var removeFromArray = function(arr, item) {
	for(var i in arr){
		if(arr[i]==item){
			arr.splice(i,1);
			break;
		}
	}
	return arr;
}