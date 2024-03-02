$(document).ready(function(){
	$(document).find('select').each(function(i, select) {
		let data = $(select).data();
		$(select).selecter({
			multiple: data && data.multiple === true ? true : false,
			onOpen: function(){ },
			onChange: function(){ },
			onClose: function(){ },
		});
	});
});