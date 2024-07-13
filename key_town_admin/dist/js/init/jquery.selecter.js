$(document).ready(function(){

	function getSelectChangedOption(select){
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
				getSelectChangedOption(select);
			},
			onClose: function(){ },
		});
	});

	$(document).on('click', '[type="reset"]', function(e){
		let selectors = $(this).parents('form').find('select');
		if (!selectors.length) return;
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
		})
	})

});