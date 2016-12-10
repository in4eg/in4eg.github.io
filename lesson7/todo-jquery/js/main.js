$(document).ready(function(){
	$( "#sortable" ).sortable();


});

$( window ).load(function() {

	if(localStorage.getItem('todos')) {
		$('.collection').addClass("active").html(localStorage.getItem('todos'));
		$(".card-panel").hide();
	}
});

$(".submit-btn").on("click", function(){

	var listValue = $(".input-add").val();

	if (listValue != '') {

		$(".input-add").val("").blur();
		$(".card-panel").hide();
		$(".btn-holder").addClass("active");

		var inputInner = $("<input>").attr("type", "text").attr("disabled", true).attr("value", listValue);
		inputInner.addClass("input");

		var id = makeid();

		var check = $("<input>").attr("type", "checkbox").attr("id", id);
		var checkLable = $("<label></label>").attr("for", id).text("Done");


		var editBtn = $("<button></button>").attr("type", "button");
		editBtn.addClass("waves-effect waves-light btn btn-edit").text("Edit");

		var delBtn = $("<button></button>").attr("type", "button");
		delBtn.addClass("btn btn-trash waves-effect red").text("Delete");

		var li =$("<li></li>").addClass("collection-item").append(inputInner).append(check).append(checkLable).append(editBtn).append(delBtn);

		$(".collection").addClass("active").append(li);

		var todos = $('.collection').html();

		console.log(todos);
		localStorage.setItem('todos', todos);

	} else {
		alert("Please, add smth!");
	}
});


$(".collection").on("click", ".btn-trash", function(){
	$(this).parent(".collection-item").remove();
});

$(".collection").on("click", ".btn-edit", function(){

	var valIn = $(this).siblings(".input").attr("value");

	// console.log(valIn);

	if ($(this).hasClass("btn-save")) {
		$(this).removeClass("btn-save").addClass("btn-edit").text("edit");
		$(this).siblings(".input").attr("disabled", true).attr("value", valIn);

	} else {
		$(this).siblings(".input").attr("disabled", false).focus();
		$(this).addClass("btn-save").text("save");
	}

});

$(".collection").on("click", ".collection-item", function(){
	$(this).toggleClass("choosen");
});

$(".collection").on('click', 'input[type="checkbox"]', function(){

	var row = $(this).parents('.collection-item');
	$(this).is(':checked') ? row.addClass('checked') : row.removeClass('checked');

});

//clear localStorage
$('#clear').click( function() {
	window.localStorage.clear();
	location.reload();
	return false;
});


function makeid(){
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for( var i=0; i < 5; i++ )
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
}