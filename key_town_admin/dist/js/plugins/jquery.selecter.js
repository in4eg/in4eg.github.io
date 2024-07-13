(function( $ ) {

	if (!$){
		console.error('Selecter :: jQuery is not defined.')
	}

	/*
		helpers
		*/
		function setRandomId(){
			return Math.floor(Math.random() * Date.now())
		}

		function getOptionsTree(optionsList, multiple, id) {
			var tree = "<ul>";
			optionsList.map(function(option, i){
				tree += "<li class=\""+(option.disabled ? 'disabled ' : '')+(option.selected ? 'active' : '')+"\" data-value=\""+option.value+"\">"+option.label+(option.disabled ? ' ' : multiple ? "<input type=\"checkbox\" id="+id+'_'+i+" name="+id+'_'+i+"><label for="+id+'_'+i+"></label>" : " ")+"</li>"
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
						selected: option.selected,
						classname: option.classname
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

		function generateBody(select, optionsList, multiple, classname){
			if (!select) return;
			var id = select.getAttribute('id') ? select.getAttribute('id') : setRandomId();
			var body = "";
			body += classname && classname.length ? "<div class=\"selecter "+classname+"\">" : "<div class=\"selecter\">";
			body += "<span class=\"anchor\">"+getSelectedOption(select.options, optionsList).title+"</span>";
			body += "<div class=\"dropdown\">"+getOptionsTree(optionsList, multiple, id)+"</div>";
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
			// ctx.removeClass('opened');
			if (settings.onChange) {
				settings.onChange(ctx, settings, value);
			}
		}


	// setting
		function setSelectOptionsValue(select, value) {
			$(select).find('option').each(function(i, option){
				if (!$(select).attr("multiple")) {
					$(option).prop('selected', false).removeAttr('selected');
					if ($(option).val().toString() == value.toString()) {
						$(option).prop('selected', true).attr('selected', 'true');
					};
				} else {
					if ($(option).val().toString() == value.toString() && !$(option).attr("selected")) {
						$(option).prop('selected', true).attr('selected', 'true');
					} else if ($(option).val().toString() == value.toString() && $(option).attr("selected")) {
						$(option).prop('selected', false).removeAttr('selected');
					}
				};
			});
			if ($(select).children('[selected]').length > 0) {
				$(select).find('option[disabled]').prop('selected', false).removeAttr('selected');
			} else {
				$(select).find('option[disabled]').prop('selected', true).attr('selected', 'true');
			};
		};
	// ctx - select

	function setValue(ctx, value, result, settings){
		change(ctx, settings, $(ctx).val());
		var text = $(ctx).val();
		if (value == true) {
			text = 'yes'
		} else if (value == false) {
			text = 'no'
		}
		if ($(ctx).val().length <= 0) {
			$(result).find('.anchor').removeClass('collapsed-bottom');
			$(result).find('.anchor').html($(ctx).find('[selected]').text().trim());
		} else {
			if (settings && settings.multiple) {
				$(result).find('.anchor').html('');
				var textArray = [];
				if ($(ctx).children('[selected]').length) {
					$(ctx).children('[selected]').each(function(i, option){
						textArray.push($(option).text().trim());
					});
					for (let text of textArray) {
						$(result).find('.anchor').addClass('collapsed-bottom');
						$(result).find('.anchor').append( '<div class="tag">'+text.trim()+'<button class="delete">X</button></div>' )
					}
				};
			} else {
				$(result).find('.anchor').html(text);
				close(result, settings);
			};
		};

	};

	/*
		plugin
		*/

		$.fn.selecter = function(options) {

			var settings = {
				onOpen: null,
				onClose: null,
				onChange: null,
			}

			var settings = $.extend(settings, options);

			this.each(function(i, select){
				var optionsList = [];
				$(select).hide();
				var result = generateBody(select, optionsList, settings.multiple, settings.classname);
				result.on('click', '.anchor', function(e){
					e.preventDefault();
					if ($(this).parent('.selecter').hasClass('opened')){
						close(result, settings);
						return;
					} else {
						open(result, settings);
					}
				});

				$('body').click(function(e){
					if ($(e.target).closest(result).length === 0){
						close(result, settings);
					}
				});

				result.on('click', 'ul > li', function(e){
					e.preventDefault();
					if ($(this).hasClass('disabled')){
						close(result, settings);
						return;
					};
					if (settings.multiple) {
						if ($(this).hasClass('active')) {
							$(this).removeClass('active');
							$(this).find('[type="checkbox"]').prop('checked', false).removeAttr('checked');
						} else {
							$(this).addClass('active');
							$(this).find('[type="checkbox"]').prop('checked', true).attr('checked', 'true');
						};
						if ($(this).parent('ul').children('.active').length > 0) {
							$($(this).siblings('.disabled')).removeClass('active');
						} else {
							$($(this).siblings('.disabled')).addClass('active');
						};
					} else {
						$(this).addClass('active');
						$(this).siblings().removeClass('active');
					};

					setSelectOptionsValue(select, $(this).data('value')); // for select element
					setValue(select, $(this).data('value'), result, settings); // created list

				});

				result.insertAfter($(select));

			});

			return this;

		};

	}(jQuery));