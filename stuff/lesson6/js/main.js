$(document).ready(function() {

	$(".nav-open").on("click", function(){
		$(".main-nav").addClass("active");
	});

	$(".nav-close").on("click", function(){
		$(".main-nav").removeClass("active");
	});

});