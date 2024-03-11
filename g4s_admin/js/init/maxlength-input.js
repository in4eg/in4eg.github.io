$('input[maxlength]').each(function(i, input){
	$(input).keyup(function() {
		$(input).val(this.value.replace(/[^0-9]/g,''));
	})
})