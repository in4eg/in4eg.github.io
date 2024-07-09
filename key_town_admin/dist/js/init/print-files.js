$(document).ready(function() {
	function printDiv(divName) {
		var printContents = document.getElementById(divName).innerHTML;
		w=window.open();
		w.document.write(printContents);
		w.print();
		w.close();
	}

	$('[data-print]').each(function(i, elem) {
		$(elem).click(function(e) {
			e.preventDefault();
			printDiv($(elem).data('print'));
		});
	});
});