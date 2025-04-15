(function( $ ) {

	if (!$){
		console.error('Selecter :: jQuery is not defined.')
	}

	/*
		helpers
	*/
	function getOptionsTree(optionsList) {
		var tree = "<ul>";
		optionsList.map(function(option, i){
			tree += "<li class=\""+(option.disabled ? 'disabled' : '')+(option.selected ? 'active' : '')+"\" data-value=\""+option.value+"\">"+option.label+"</li>";
		});
		tree += "</ul>";
		return tree;
	}

	function getSelectedOption(options, optionsList){
		var selected;

		if (options.length && options.length > 0) {
			[].map.call(options, function(option, i){
				optionsList.push({
					label: option.label,
					value: option.value,
					disabled: option.disabled,
					selected: option.selected
				});
				if (option && i === 0){
					selected = {
						title: option.label
					}
				}
				if (option && option.selected){
					selected = {
						title: option.label
					}
				}
			})
		}
		return selected;
	}

	function generateBody(select, optionsList){
		var body = "";
		body += "<div class=\"selecter\">";
		body += "<span class=\"anchor\">"+getSelectedOption(select.options, optionsList).title+"</span>";
		body += "<div class=\"dropdown\">"+getOptionsTree(optionsList)+"</div>";
		body += "</div>";
		return $(body);
	}

	function open(ctx, settings){
		ctx.addClass('opened');
		if (settings.onOpen) {
			settings.onOpen(ctx, settings);
		}
	}

	function close(ctx, settings){
		ctx.removeClass('opened');
		if (settings.onClose) {
			settings.onClose(ctx, settings);
		}
	}

	function change(ctx, settings, value){
		ctx.removeClass('opened');
		if (settings.onChange) {
			settings.onChange(ctx, settings, value);
		}
	}


	// setting

	// ctx - select
	function setValue(ctx, value, result, settings){
		$(ctx).val(value).trigger('change');
		change(result, settings, $(ctx).val());
		$(result).find('.anchor').html($(ctx).val());
		close(result, settings);
	}

	/*
		plugin
	*/

	$.fn.selecter = function(options) {

		var settings = {
			onOpen: null,
			onClose: null,
			onChange: null
		}


		var settings = $.extend(settings, options);

		this.each(function(i, select){

			var optionsList = [];

			$(select).hide();

			var result = generateBody(select, optionsList);

			result.on('click', '.anchor', function(e){
				e.preventDefault();
				open(result, settings);
			});

			$('body').click(function(e){
				if ($(e.target).closest(result).length === 0){
					close(result, settings);
				}
			});

			result.on('click', 'ul > li', function(e){
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
				e.preventDefault();
				if ($(this).hasClass('disabled')){
					close(result, settings);
					return;
				}
				setValue(select, $(this).data('value'), result, settings);
			});

			result.insertAfter($(select));

		});

		return this;

	};

}(jQuery));