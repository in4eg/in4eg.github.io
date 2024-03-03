$(document).ready(function(){
	window.filterOptions = {};

	function checkFilters(){
		var inputsFilled = false;
		if ($('#filterButton').length) {
			for (let option in window.filterOptions) {
				if (window.filterOptions[option].length) {
					inputsFilled = true;
					break;
				} else {
					inputsFilled = false;
				}
			}
			if (inputsFilled) {
				$('#filterButton').addClass('marker-active');
			} else {
				$('#filterButton').removeClass('marker-active');
			};
		};
	}

	$(function() {
		$('.filter-form input:not(.ignored)').on('keyup keydown change', function() {
			var input = this;
			getInputChangedValue(input);
		});
	});

	$('.filter-form input:not(.ignored)').each(function(i, input) {
		var input = this;
		getInputChangedValue(input);
	});

	function getInputChangedValue(input){
		var value = $(input).val().trim();
		window.filterOptions[$(input).attr('id')] = value;
		checkFilters();
	};


	function getSelectChangedOption(select){
		let id = $(select).attr('id');
		filterArray = [];
		$(select).find('option').each(function(i, option){
			if ($(option).attr('selected') && !$(option).attr('disabled')) {
				filterArray.push($(option).text().trim())
			};
		});
		window.filterOptions[id] = filterArray;
		checkFilters();
		return select;
	};

	// select init
	$(document).find('select').each(function(i, select) {
		let data = $(select).data();
		getSelectChangedOption(select);
		// selecter
		$(select).selecter({
			multiple: data && data.multiple === true ? true : false,
			onOpen: function(){ },
			onChange: function(select){
				getSelectChangedOption(select);
			},
			onClose: function(){ },
		});
	});

	// clear form data
	$('[data-clear]').each(function(i, btn) {
		$(btn).click(function(){
			var formId = $(btn).data('clear');
			if (formId && $(formId)) {
				$(formId).find('select').each(function(i, select){
					$(select).find('option').each(function(i, option){
						$(option).prop('selected', false).removeAttr('selected');
					});
					$(select).find('option[disabled]').prop('selected', true).attr('selected', 'true');
					$(select).next('.selecter').find('.anchor').html($(select).find('option[disabled]').text().trim());
					$(select).next('.selecter').find('li').each(function(i, li){
						$(li).removeClass('active');
						$(li).find('[type="checkbox"]').prop('checked', false).removeAttr('checked');
						if ($(li).hasClass('disabled')) {
							$(li).addClass('active')
						}
					});
				});
				checkFilters();
				if ($('#filterButton').length) {
					$('#filterButton').removeClass('marker-active');
				};
			}
		})
	})
});
