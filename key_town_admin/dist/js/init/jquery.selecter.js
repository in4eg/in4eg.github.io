$(document).ready(function(){

	window.getSelectChangedOption = function(select){
		let id = $(select).attr('id');
		filterArray = [];
		$(select).find('option').each(function(i, option){
			if ($(option).attr('selected') && !$(option).attr('disabled')) {
				filterArray.push($(option).text().trim())
			};
		});
	};

	// select init
	$(document).find('select').each(function(i, select) {
		let data = $(select).data();
		// selecter
		$(select).selecter({
			multiple: data && data.multiple === true ? true : false,
			search: data && data.search === true ? true : false,
			classname: data && data.classname ? data.classname : null,
			onOpen: function(){ },
			onChange: function(select){
				window.getSelectChangedOption(select);
			},
			onClose: function(){ },
		});
	});

	$(document).on('click', '[type="reset"]', function(e){
		let selectors = $(this).parents('form').find('select');
		$(selectors).each(function(i, select){
			$(select).find('option').each(function(i, option){
				$(option).prop('selected', false).removeAttr('selected');
			});
			$(select).find('option[disabled]').prop('selected', true).attr('selected', 'true');
			$(select).next('.selecter').find('.anchor').html($(select).find('option[disabled]').text().trim());
			$(select).next('.selecter').find('.anchor').removeClass('collapsed-bottom');
			$(select).next('.selecter').find('li').each(function(i, li){
				$(li).removeClass('active');
				$(li).find('[type="checkbox"]').prop('checked', false).removeAttr('checked');
				if ($(li).hasClass('disabled')) {
					$(li).addClass('active')
				}
			});
		});
		let inputs = $(this).parents('form').find('input');
		$(inputs).each(function(i, input){
			$(input).attr('value',' ')
		})
	});

	$(document).on('click', '.selecter .tag', function(e){
		e.preventDefault();
		e.stopPropagation();
		let tag = this;
		let selecter = $(tag).parents('.selecter');
		if (!selecter.length) return;
		let tagText = $(tag).text().trim().replace('X','');

		let select = $(selecter).siblings('select');

		$(select).find('option').each(function(i, option){
			if (tagText == $(option).val()) {
				$(option).prop('selected', false).removeAttr('selected');
			}
		});

		$(selecter).find('li').each(function(i, li){
			if (tagText == $(li).text().trim()) {
				$(li).removeClass('active');
				$(li).find('[type="checkbox"]').prop('checked', false).removeAttr('checked');
			}
		});

		$(tag).remove();

		window.tooltipHint.hide();

		if ($(selecter).find('.anchor').find('.tag').length < 1) {
			let text = $(select).find('option[disabled]').text().trim();
			$(select).find('option[disabled]').prop('selected', true).attr('selected', 'true');
			$(selecter).find('.anchor').removeClass('collapsed-bottom').html(text);
		}

	});
});






