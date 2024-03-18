
$('.fullpage').on("fullpage:leave", function(e, data){
	$('.tree').addClass('underlayed');
});
$('.fullpage').on("fullpage:load", function(e, data){
	$('.tree').removeClass('underlayed');
});
// $('.fullpage').on("fullpage:scroll", function(e, data){
// 	console.log("scroll", data);
// });