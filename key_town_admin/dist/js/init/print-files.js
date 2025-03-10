$(document).ready(function() {

	function printDiv(divName){
		var printContents = document.getElementById(divName).innerHTML;
		var originalContents = document.body.innerHTML;
		document.body.innerHTML = printContents;
		window.print();
		document.body.innerHTML = originalContents;
	}

	$(document).on('click', '[data-print]', function(e){
		e.preventDefault();
		printDiv($(this).data('print'));
	});
});