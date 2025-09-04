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