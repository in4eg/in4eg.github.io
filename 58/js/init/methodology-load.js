(function(){

	var fited = false;
	var expanded = false;
	var CONTAINER = $('#methodologyPageContainer');
	var SECTION = $('#methodolodySection');
	var TREE = $('.tree');

	function fitMethodologySection(){
		if (!fited) return;
		$('.tree').addClass('underlayed');
		var windowHeight = $(window).height();
		var bbox = $('[data-methodology-anchor]')[0].getBoundingClientRect();
		SECTION.addClass('offseted');
		CONTAINER.find('.half-title').css({
			marginLeft: bbox.left-CONTAINER.find('.title-container').offset().left-40
		})
		CONTAINER.css('height', windowHeight-(bbox.top+bbox.height/2)+"px").addClass('opened');

		if (window.innerWidth <= 993 && window.innerWidth > 769) {
			$('html,body').animate({
				scrollTop: $('.methodolody-start').offset().top - $('.main-header').outerHeight() - 8
			}, 300);
			setTimeout(function(){
				$('#mainHeader').removeClass('to-top');
			}, 500);
		} else if (window.innerWidth <= 768){
			$('html,body').animate({
				scrollTop: $('.methodolody-start').offset().top - $('.main-header').outerHeight() + 32
			}, 300);
			$('body').css('width', $('body').width() + 'px').addClass('overlayed');
		}
	};
	function unfitMethodologySection(){
		fited = false;
		expanded = false;
		CONTAINER.css('height', "200px").removeClass('opened');
		SECTION.removeClass('offseted');
		$('#mainHeader').removeClass('faded');
		setTimeout(function(){
			if (!$('#loadMethodology').hasClass('clicked')) {
				$('.tree').removeClass('underlayed expanded');
				$('.fullpage').trigger("fullpage:force-restore");
			}
			$('#loadMethodology').removeClass('clicked');
		}, 510);
		if (window.innerWidth <= 768){
			$('body').css('width', '').removeClass('overlayed');
		}
	};
	function showSection(e) {
		var dir = e.deltaY * -1;
		if (fited && dir > 0 && !expanded){
			expandSectionFully();
		} else if (fited && dir < 0 && !expanded){
			fited = false;
			expanded = false;
			unfitMethodologySection();
		}
	};
	function expandSectionFully(){
		expanded = true;
		$('#mainHeader').addClass('faded');
		$.ajax({
			url: "methodology-ajax.html",
			method: "GET",
			success: function(res){
				// CONTAINER.html(res);
				$('.methodology-temp-fake').html(res);
				var h = $('.methodology-temp-fake').outerHeight();
				var w = $('.methodology-temp-fake > div').outerWidth();
				SECTION.addClass('faded');
				TREE.addClass('faded');
				CONTAINER.css('height', h+"px").css('width', w+"px").css('bottom', ($(window).height() - h)+"px").addClass('expanded');
				setTimeout(function(){
					location.href = "methodology.html";
				}, 510);
			}
		});
	};

	$('.fullpage').on("fullpage:freeze", function(){
		// console.log('freeze')
		// fited = true;
		if ($('#loadMethodology').hasClass('clicked')) {
			fited = true;
		}
		fitMethodologySection();
	});

	$('.fullpage').on("fullpage:restore", function(){
		// console.log('restore')
		unfitMethodologySection();
	});

	$(window).resize(function(){
		waitForFinalEvent(function(){
			fitMethodologySection();
		}, 500, "fit");
	});


	$(document).mousewheel(function(e){
		showSection(e);
	});

	$('.fullpage')

	$('#methodologyMobile').swipeDetector().on('swipeLeft.sd swipeRight.sd swipeUp.sd swipeDown.sd', function(event) {
		if (event.type === 'swipeUp' && fited) {
			expandSectionFully()
		} else if (event.type === 'swipeDown') {
			unfitMethodologySection()
		}
	});

	$(document).on('click', '#closePage', unfitMethodologySection)

	$(document).on('click', '#linkMethodology', function(e){
		var link = $(this).attr('href');
		e.preventDefault();
		fited = true;
		fitMethodologySection();
		$('.index-header').removeClass('to-top');

		setTimeout(function(){
			location.href = "methodology.html";
		}, 510);
	})
})();