
$("[data-counter]").each(function(index, item){
	var data = $(item).attr("data-counter"),
			counter = data.split(",")[0],
			timeout = data.split(",")[1];

	function runAnimation(){
		var timeStart = new Date().getTime();
		var timeEnd = new Date().getTime() + timeout;
		$(item).attr("data-initialized", "true");
		var interval = setInterval(function(){
			var timeNow = new Date().getTime();
			var progress = (timeNow - timeStart) / timeout;
			if (progress >= 1){
				progress = 1;
				clearInterval(interval);
			}
			$(item).html(Math.ceil(progress * counter));
		}, 30);
	}
	$(window).scroll(function(){
		if ($(item).attr("data-initialized")) return;
		var scrollTop = $(window).scrollTop();
		var treshold = window.innerHeight * 0.75;
		if (scrollTop > $(item).offset().top - treshold){
			runAnimation();
		}
	});

});
// data-menu-toggle
document.addEventListener('DOMContentLoaded', function(){

	const PAGE_HEADER = document.getElementById('mainHeader');

	class MenuToggle {
		activeButtonClassName = 'active';
		activeMenuClassName = 'active';
		animatedMenuClassName = 'animated';
		toggleButton = null;
		menuEl = null;

		constructor(toggleButton){
			this.toggleButton = toggleButton;
		}

		init(){
			this.toggleButton.addEventListener('click', this.menuToggle.bind(this), false);
			let menuId = this.toggleButton.dataset.menuToggle;
			this.menuEl = document.getElementById(menuId);

			document.addEventListener("click", function (e) {
				if (!e.target.closest('[data-menu-toggle]') && !e.target.closest('#'+menuId)) {
					this.closeMenu();
				};
			}.bind(this));

			document.addEventListener("click", function (e) {
				if (e.target.closest('[data-scrollto]')) {
					this.closeMenu();
				};
			}.bind(this));
		}

		closeMenu = function(){
			this.toggleButton.classList.remove(this.activeButtonClassName);
			this.menuEl.classList.remove(this.animatedMenuClassName);
			setTimeout(()=>{
				document.body.classList.remove('overlayed');
				this.menuEl.classList.remove(this.activeMenuClassName);
			},50);
		};

		openMenu = function(){
			this.toggleButton.classList.add(this.activeButtonClassName);
			this.menuEl.classList.add(this.activeMenuClassName);
			setTimeout(()=>{
				document.body.classList.add('overlayed');
				this.menuEl.classList.add(this.animatedMenuClassName);
			},50);
		}

		menuToggle = function() {
			if (this.toggleButton.classList.contains(this.activeButtonClassName)) {
				this.closeMenu();
			} else {
				this.openMenu();
			};
		}
	};

	Array.prototype.forEach.call(document.querySelectorAll("[data-menu-toggle]"), function(toggleButton){
		const menuToggle = new MenuToggle(toggleButton);
		menuToggle.init();
	});
});


$(document).ready(function(){
	if ($.fn.owlCarousel) {
		$(document).find('.owl-carousel').each(function(i, carousel) {
			let data = $(carousel).data();
			let responsiveArr = [];
			if (data.slides){
				responsiveArr = data.slides.split(',');
			};

			$(carousel).owlCarousel({
				loop: !data.loop || data.loop == false ? false : true,
				margin:0,
				nav: !data.nav || data.nav == false ? false : true,
				dots: !data.dots || data.dots == false ? false : true,
				responsive:{
					0:{
						items: responsiveArr.length ? responsiveArr[4] : 1
					},
					480:{
						items: responsiveArr.length ? responsiveArr[3] : 1
					},
					768:{
						items: responsiveArr.length ? responsiveArr[2] : 1
					},
					993:{
						items: responsiveArr.length ? responsiveArr[1] : 1
					},
					1200:{
						items: responsiveArr.length ? responsiveArr[0] : 1
					}
				}
			})
		});
	}
});
$(document).ready(function() {

	var detectScrolledSection = function(section){
		if ($(document).scrollTop() + $(window).outerHeight() / 2 > $(section).offset().top) {
			$('a[data-scrollto]').removeClass('highlighted');
			$('a[href="#'+$(section).attr('id')+'"]').addClass('highlighted');
		} else {
			$('a[href="#'+$(section).attr('id')+'"]').removeClass('highlighted');
		}
	};

	detectScrolledSection($('.section'));

	setTimeout(function() {
		$('.hero-section').addClass('loaded');
	}, 50);
	setTimeout(function() {
		$('.hero-section').addClass('animated');
	}, 150);

	$('.section:not(.hero-section)').each(function(i, section) {
		if ($(document).scrollTop() + $(window).outerHeight() / 2 > $(section).offset().top) {
			setTimeout(function() {
				$(section).addClass('animated');
			}, 50);
		}
	});

	$('.section').each(function(i, section) {
		$(window).scroll(function() {
			if ($(document).scrollTop() + $(window).outerHeight() / 2 > $(section).offset().top) {
				setTimeout(function() {
					$(section).addClass('animated');
				}, 150);
			}

			detectScrolledSection(section);
		});
	});;
});
$('[data-scrollto]').click(function(e) {
	var headerOffset;
	var target = $(this).attr('data-scrollto');
	e.preventDefault();
	headerOffset = $('.main-header').hasClass('fixed') ? $('.main-header').outerHeight() : 0;
	$('html,body').animate({
		scrollTop: $($(this).data('scrollto')).offset().top - headerOffset
	}, 500);
	setTimeout(function(){
		location.hash = target.replace(/\#/gim ,'')
	}, 100);
});