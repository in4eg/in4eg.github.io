$(document).ready(function () {

// 	$(window).on("load", function () {
// 	//preloader
// 	var preloader = $("#page-preloader"),
// 	spinner   = preloader.find(".preloader-inner");
// 	spinner.fadeOut();
// 	preloader.delay(350).fadeOut("slow");

// });
//placeholder
$("input, textarea").placeholder();
//main carousel
if ($(".top-slider").length) {

	$(".top-slider").owlCarousel({
		loop:false,
		margin:0,
		autoplay: true,
		autoplayHoverPause: true,
		smartSpeed: 500,
		nav:false,
		dots:false,
		navText: ["", ""],
		responsive:{
			0:{
				items:1
			}
		}
	});
};
//hover on bottom buttons in card-block 
$(".card-block").find(".round-arrow-btn").hover(function(){
	$(this).toggleClass("hovered");
	$(this).parents().find(".empty-golden-btn").toggleClass("hovered");
});
$(".card-block").find(".empty-golden-btn").hover(function(){
	$(this).toggleClass("hovered");
	$(this).parents().find(".round-arrow-btn").toggleClass("hovered");
});
//fixed nav
updateColumnPosition();

//карусель 3 шт
if ($(".centered").length) {

	$(".centered").owlCarousel({
		loop:true,
		margin:0,
		// autoplay: true,
		// autoplayHoverPause: true,
		smartSpeed: 800,
		nav:true,
		slideBy: 2,
		mouseDrag: false,
		dots:true,
		navText: ["", ""],
		responsive:{
			0:{
				items:1,
				nav:false,
				margin:10
			},
			512:{
				items:2,
				nav:false,
				margin: 0
			},
			768:{
				items:3,
				nav:false
			},
			1295:{
				nav:true
			},
		}
	});
	

	$(".centered").find(".owl-item.active").eq(1).addClass("secound");

	$(".centered").find(".owl-nav").on("click", ".owl-prev, .owl-next", function(){
		$(".centered").find(".owl-item").removeClass("secound");
		setTimeout(function(){
			$(".centered").find(".owl-item.active").eq(1).addClass("secound");
		}, 800);

	});
	$(".centered").find(".owl-dots").on("click", ".owl-dot", function(){
		$(".centered").find(".owl-item").removeClass("secound");
		setTimeout(function(){
			$(".centered").find(".owl-item.active").eq(1).addClass("secound");
		}, 800);
	});
};
if ($(".simple-carousel").length) {

	$(".simple-carousel").owlCarousel({
		loop:true,
		margin:30,
		autoplay: true,
		autoplayHoverPause: true,
		smartSpeed: 400,
		nav:true,
		dots:false,
		navText: ["", ""],
		responsive:{
			0:{
				items:1,
				nav:false,
				dots:true
			},
			520:{
				items:2,
				nav:false,
				dots:true
			},
			768:{
				items:3,
				nav:false,
				dots:true,
				margin:20
			},
			1300:{
				nav:true
			},
		}
	});
};
/*slider on card.html width plan*/
if ($(".plan-simple").length) {

	$(".plan-simple").owlCarousel({
		loop:false,
		margin:30,
		autoplay: true,
		autoplayHoverPause: true,
		smartSpeed: 600,
		nav:true,
		dots:false,
		navText: ["", ""],
		responsive:{
			0:{
				items:1,
				nav:false,
				dots:true
			},
			520:{
				items:2,
				nav:false,
				dots:true
			},
			768:{
				items:3,
				nav:false,
				dots:true
			},
			1300:{
				nav:true
			},
		}
	});
};
/*compare.html items*/
if ($(".compare-simple").length) {

	$(".compare-simple").owlCarousel({
		loop:false,
		margin:0,
		mouseDrag: false,
		smartSpeed: 400,
		nav:true,
		dots:false,
		navText: ["", ""],
		responsive:{
			0:{
				items:1,
				nav:false,
				dots:true
			},
			541:{
				items:2,
				nav:false,
				dots:true
			},
			993:{
				items:3,
				nav:false,
				dots:true,
				mouseDrag: true,
			},
			1300:{
				nav:true
			},
		}
	});
};
//card page top slider
if ($(".card-slider").length) {

	$(".card-slider").owlCarousel({
		loop:true,
		margin:0,
		autoplay: true,
		autoplayHoverPause: true,
		smartSpeed: 500,
		nav:true,
		dots:true,
		navText: ["", ""],
		responsive:{
			0:{
				items:1
			}
		}
	});
};
//toggle active on star

$(document).on("click", ".icon-star:not(.no-click)", function(){
	toggleActiveStar($(this), $(".black-tooltip"));
});
//left outer
leftOuter($(".white-flag-caption"));
//clone and remove img on a news-page
cloneElements($(".article-figure"), $(".article-outer"), $(".figure-parent"));
//search page
equalHeight($(".square-cover").find(".item-figure"));
//calculate top on main-nav
navTop($(".menu-nav"), $(".top-row"));

//resize window
$( window ).resize(function() {
//search page
equalHeight($(".square-cover").find(".item-figure"));

leftOuter($(".white-flag-caption"));
	//clone and remove img on a news-page
	cloneElements($(".article-figure"), $(".article-outer"), $(".figure-parent"));
});
//remove active from city-nav in header
var browserWidth = window.innerWidth;

if (browserWidth <= 520) {

	document.body.addEventListener('click', function(e){
		isClickOnInner = closest(e.target, '.city-nav-list, .toggle-nav-list');
		if (!isClickOnInner){
			$(".city-nav-list").removeClass("active");
			$(".toggle-nav-list").removeClass("active");

		}
	});
}

//resize window end

//scroll window
$( window ).scroll(function() {
	//calculate top on main-nav
	navTop($(".menu-nav"), $(".top-row"));
	//fixed nav
	updateColumnPosition();

});
//mousep functions
$(document).mouseup(function (e) {

	var form = $(".form");
	var modal = $(".modal-inner");

	if (form.has(e.target).length === 0){
		form.find("input").removeClass("error");
		form.find(".message").html("");
	}
	if (modal.has(e.target).length === 0 && !modal.is(e.target)){
		modal.parent(".modal-wrap").removeClass("active");
		$("body").removeClass("no-scroll");
	}
	
});
$(document).on('touchstart', function (e) {
	var container = $(".modal-inner");

    if (!container.is(e.target) // if the target of the click isn't the container...
    && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
    	container.parent(".modal-wrap").removeClass("active");
    	$("body").removeClass("no-scroll");
    }
});
//mousep functions end

document.body.addEventListener('click', function(e){
	isClickOnInner = closest(e.target, '.share-block, .open-share-block');
	if (!isClickOnInner){
		$(".share-block").removeClass("active");
	}
});


//open nav
openNav($(".nav-open-btn"), $(".menu-nav"));
closeNav($(".nav-close-btn"), $(".menu-nav"));
closeNav($(".menu-nav"), $(".menu-nav"));



//collapse faq
$(".collapse-head").on("click", function(){
	accordeon($(this), $(".collapse-inner"), $(".collapse-head"));
	// $("html, body").animate({ scrollTop: $(".collapse-wrap").offset().top }, "slow");

});
//open hidden-block
$(".open-hidden-block").on("click", function(){
	openHiddenBlock($(this), $(this).siblings(".hidden-block"));
});

$("input").focus(function(){
	if ($(this).hasClass("error")) {
		$(this).removeClass("error");
	}
})
//valid form

$(".form").submit(function (e) {

	var error = 0;
	//text
	$(this).find("input:text").each(function () {

		if (!$(this).val()) {
			error = 1;
			$(this).addClass("error");
		}
		else {
			$(this).removeClass("error");
		}
	});
	//mail
	$(this).find(".mail").each(function(){

		var email = $(this);
		var emailValue = email.val();

		if (!isValidEmailAddress(emailValue)) {
			error = 2;
			email.addClass("error");
		} 
	// for a download link
	else {

		if (email.hasClass("download")) {
			e.preventDefault();
			$(".hidden-download").click();
			// window.location.href = $(".hidden-download").attr("href");
			console.log("has");
		}
	}
	// for a download link end
});
//phone
$(this).find(".phone").each(function(){

	var phone = $(this).val();
	var phoneLngth = phone.length;

	if( /[^0-9]/.test(phone) ) {
		$(this).addClass("error");
		error = 3;
	} else if (phoneLngth <= 3) {
		$(this).addClass("error");
		error = 4;
	} else {
		$(this).removeClass("error");
	}
});
if (error === 0) {
	$(this).find("input").removeClass("error");
	$(this).find(".message").html("");


	if ($(this).hasClass("request-send")) {
		e.preventDefault();
		console.log("here is ajax request must be");
		
		$(this).parents(".form-out-cover").find("#form").hide();
		$(this).parents(".form-out-cover").find("#message").show();
	}
	return true;

}
else {
	var err_text;

	if (error === 1) {
		err_text = "Не все обязательные поля заполнены!";
	}
	if (error === 2) {
		err_text = "Введен не корректный e-mail!";
	}
	if (error === 3) {
		err_text = "Номер телефона должен содержать только цифры";
	}
	if (error === 4) {
		err_text = "Введите, пожалуйста, номер телефона";
	}
	$(this).find(".message").html(err_text);
	return false;
};
});
//form end
//hide message in request form on card.html
$(".hide-message").on("click", function(){
	$(this).parents(".form-out-cover").find("#message").hide();
	$(this).parents(".form-out-cover").find("#form").show();
});
//show and hide city-nav on 768 and less
$(".toggle-nav-list").on("click", function(){

	if ($(this).hasClass("active")) {
		$(this).removeClass("active");
		$(this).next(".city-nav-list").removeClass("active");
	} else {
		$(this).addClass("active");
		$(this).next(".city-nav-list").addClass("active");
	}
});
// program tabs
$(".tab-tab-list").on("click", "li", function(){

	var tabs = $(".tab-tab-list li"),
	content = $(".tab-caption-wrap .tab-caption"),
	image = $(".tab-figure");

	tabs.removeClass("active");
	content.removeClass("active");
	image.removeClass("active");

	$(this).addClass("active");
	content.eq($(this).index()).addClass("active");
	image.eq($(this).index()).addClass("active");

});
// tabs on index-new lawyer-tab
$(".lawyer-tab-list").on("click", "li", function(){

	var tabs = $(".lawyer-tab-list li"),
	content = $(".lawyer-tab-caption"),
	image = $(".tab-photo-cover");

	tabs.removeClass("active");
	content.removeClass("active");
	image.removeClass("active");

	$(this).addClass("active");
	content.eq($(this).index()).addClass("active");
	image.eq($(this).index()).addClass("active");

});

//modal window
openNav($(".request-modal-show"), $(".request-modal"));
openNav($(".consalt-modal-show"), $(".consalt-modal"));
openNav($(".message-modal-show"), $(".message-modal"));

closeNav($(".close-modal"), $(".modal-wrap"));
closeNav($(".close-consalt-modal"), $(".modal-wrap"));
closeNav($(".close-message-modal"), $(".modal-wrap"));

//plan on card.html
$(".plan-button").on("click", function(){
	if(!($(this).hasClass("click-open"))){
		$(this).addClass("click-open").siblings().removeClass("click-open");
	}
});

$(".a1-button").on("click", function(){
	toggleOnClick($(".a1-baloon"), $(".a1"));
});
$(".a2-button").on("click", function(){
	toggleOnClick($(".a2-baloon"), $(".a2"));
});
$(".b1-button").on("click", function(){
	toggleOnClick($(".b1-baloon"), $(".b1"));
});
$(".b2-button").on("click", function(){
	toggleOnClick($(".b2-baloon"), $(".b2"));
});    
$(".c1-button").on("click", function(){
	toggleOnClick($(".c1-baloon"), $(".c1"));
});
$(".c2-button").on("click", function(){
	toggleOnClick($(".c2-baloon"), $(".c2"));
});
$(".d1-button").on("click", function(){
	toggleOnClick($(".d1-baloon"), $(".d1"));
});
$(".d2-button").on("click", function(){
	toggleOnClick($(".d2-baloon"), $(".d2"));
});
$(".e2-button").on("click", function(){
	toggleOnClick($(".e2-baloon"), $(".e2"));
});
$(".f1-button").on("click", function(){
	toggleOnClick($(".f1-baloon"), $(".f1"));
});
$(".f2-button").on("click", function(){
	toggleOnClick($(".f2-baloon"), $(".f2"));
});
$(".m-button").on("click", function(){
	toggleOnClick($(".m-baloon"), $(".m"));
});
$(".n-button").on("click", function(){
	toggleOnClick($(".n-baloon"), $(".n"));
});

if($(window).width()>1023){
	toggleOnHover($(".a1-button"),$(".a1-baloon"), $(".a1"));
	toggleOnHover($(".a2-button"),$(".a2-baloon"), $(".a2"));
	toggleOnHover($(".b1-button"),$(".b1-baloon"), $(".b1"));
	toggleOnHover($(".b2-button"),$(".b2-baloon"), $(".b2"));
	toggleOnHover($(".c1-button"),$(".c1-baloon"), $(".c1"));
	toggleOnHover($(".c2-button"),$(".c2-baloon"), $(".c2"));
	toggleOnHover($(".d1-button"),$(".d1-baloon"), $(".d1"));
	toggleOnHover($(".d2-button"),$(".d2-baloon"), $(".d2"));
	toggleOnHover($(".e2-button"),$(".e2-baloon"), $(".e2"));
	toggleOnHover($(".f1-button"),$(".f1-baloon"), $(".f1"));
	toggleOnHover($(".f2-button"),$(".f2-baloon"), $(".f2"));
	toggleOnHover($(".m-button"),$(".m-baloon"), $(".m"));
	toggleOnHover($(".n-button"),$(".n-baloon"), $(".n"));
}

$(".plan-baloon-close").on("click", function(){
	$(".plan-baloon").fadeOut(250);
	$(".apartament-path").removeClass("active-place");
	$(".plan-button").removeClass("click-open");
});
// plan end

//show share block
$(".open-share-block").on("click", function(){
	$(".share-block").toggleClass("active");
});

$(".add-compare-btn").click(function(){
	$(this).toggleClass("active");
})

});
//document ready end

//closest
function closest(el, selector) {
	var matchesSelector = el.matches ||
	el.webkitMatchesSelector ||
	el.mozMatchesSelector ||
	el.msMatchesSelector;
	while (el) {
		if (matchesSelector.call(el, selector)) {
			break;
		}
		el = el.parentElement;
	}
	return el;
}
//plan on card.html
function toggleOnClick(baloon, place){
	baloon.fadeIn(250).siblings().fadeOut(250);
	$(".apartament-path").removeClass("active-place");
	place.addClass("active-place");
};

function toggleOnHover(button, baloon, place){

	$(button).hover(function(){
		var clickOpen = $(".click-open");

		if(clickOpen.length == 0){
			baloon.stop().fadeIn(250);
			$(".apartament-path").removeClass("active-place");
			place.addClass("active-place");
		}
	}, function(){
		var clickOpen = $(".click-open");

		if(clickOpen.length == 0){
			baloon.stop().fadeOut(250);
			$(".apartament-path").removeClass("active-place");
		}
	});
};
//plan end
//email regExp
function isValidEmailAddress(emailAddress) {
	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	return pattern.test(emailAddress);
};
//clone image in news-page
function cloneElements(block, parent, prevParent) {

	var bodyWidth = window.innerWidth;

	if (bodyWidth <= 1199) {
		block.eq(0).clone().prependTo(parent);
		block.eq(0).remove();

	} else {
		block.eq(0).clone().prependTo(prevParent);
		block.eq(0).remove();
	}
};

//hidden-block
function openHiddenBlock(btn, block){

	var btn, block;
	var changeText = btn.attr("data-text");
	var text = btn.attr("data-textchange");

	if (block.hasClass("active")) {
		block.removeClass("active");
		btn.html(text).removeClass("active");

	} else {
		block.addClass("active");
		btn.html(changeText).addClass("active");
	}
};
//collapse
function accordeon(head, block, all) {

	var head,
	block,
	all;

	if (head.hasClass("active")) {
		head.removeClass("active");
		head.siblings(block).stop().slideUp();
	} else {
		all.removeClass("active");
		$(block).stop().slideUp();
		head.addClass("active");
		head.siblings(block).stop().slideDown();
	}
};

//equal height to card-item
function equalHeight(itemWrap) {

	var itemWrap;
	// console.log(itemWrap.height());
	// console.log(itemWrap.width());
	
	itemWrap.height(itemWrap.width());
};

//calculate top on main-nav
function navTop(nav, topBlock){

	var scroll = $(document).scrollTop();
	var nav;
	var top = topBlock.outerHeight();
	var windowWidth = $(document).width();

	// console.log(scroll, top);

	if (scroll == 0 && windowWidth <= 1199) {
		nav.css("top", -top + "px");
	} else if (scroll < top) {
		nav.css("top", (scroll - top) + "px");
	} else {
		nav.css("top", 0 + "px");
	}
};
//open nav 
function openNav(btn, nav) {

	btn.on("click", function(){
		nav.addClass("active");
		$("body").addClass("no-scroll");
	});
};
function closeNav(btn, nav) {

	btn.on("click", function(){
		nav.removeClass("active");
		$("body").removeClass("no-scroll");
	});
};
//change left position
function leftOuter(block){

	var windowWidth = $(document).width();
	var containerWidth = $(".container").width();
	var size = windowWidth - containerWidth;

	block.css("left", size/2 + "px");
};
//toggle class function
function toggleActiveStar(element, tooltip) {

	if (element.hasClass("active")) {
		var changetext = element.next(tooltip).attr("data-changetext");

		element.removeClass("active");
		element.next(tooltip).removeClass("active");
		element.next(tooltip).html(changetext);
	} else {
		var text = element.next(tooltip).attr("data-text");

		element.addClass("active");
		element.next(tooltip).addClass("active");
		element.next(tooltip).html(text);
	}
};
//fixed nav
function addEventToObject(object, type, callback) {

	if (object == null || typeof(object) == "undefined") return;

	if (object.addEventListener) {
		object.addEventListener(type, callback, false);
	} else if (object.attachEvent) {
		object.attachEvent("on" + type, callback);
	} else {
		object["on"+type] = callback;
	}
};
function updateColumnPosition() {
	
	var element = $("#sticky"),
	elementHeight = element.outerHeight(),
	bar = $(".top-bar"),
	footerHeight = $("footer").outerHeight(),
	headerHeight = $(".top-row").outerHeight(),
	screenHeight = $(window).height(),
	documentHeight = $(document).height(),
	topHeight = headerHeight,
	scrollTop = $(document).scrollTop();

	if(!element.data("isloaded")) {
		element.data("isloaded", true);
		element.css({ width: element.width() });
	}

	if (scrollTop - topHeight > 0 && documentHeight - scrollTop - 20 > elementHeight + footerHeight) {
		element.css({
			position: "fixed",
			top: (0) + "px",
			left: (0) + "px",
			width: (100) + "%"
		}).css("z-index", 25)
		bar.height(elementHeight);
	}
	else if (scrollTop - topHeight > 0 && documentHeight - scrollTop - 20 < elementHeight + footerHeight) {
		element.css({
			position: "fixed",
			top: (documentHeight - elementHeight - footerHeight - 10) - scrollTop + "px"
		});
	}
	else if (scrollTop - topHeight < 10) {
		element.css({
			position: "relative",
			top: "inherit",
					// right: (0) + "px"
					left: (0) + "px",
					width: (100) + "%"
				});
		bar.height(0);
	};
};
