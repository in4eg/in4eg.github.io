$('[data-gallery-slider]').each(function(i, gallery){
	var prev = $(gallery).find('[data-prev]');
	var next = $(gallery).find('[data-next]');
	var mainImage = $($(gallery).data('gallery-slider')).find('img');

	$(gallery).find('[data-preview]').each(function(i, item){
		$(item).click(function(e){
			$(item).addClass('active');
			$(item).siblings().removeClass('active');
			var newSrc = $(item).find('img').attr('src');
			mainImage.attr('src', newSrc);
		})
	});

	prev.click(function(){
		var active = $(gallery).find('[data-preview].active').index() - 1;
		index = active--;
		if (index < 0) {
			index = 0;
		}
		$('[data-preview]').eq(index).addClass('active');
		$('[data-preview]').eq(index).siblings().removeClass('active');
		var newSrc = $('[data-preview]').eq(index).find('img').attr('src');
		mainImage.attr('src', newSrc);
	});
	next.click(function(){
		var active = $(gallery).find('[data-preview].active').index();
		index = ++active;
		if (index >= $('.preview-items').children().length) {
			index = $('.preview-items').children().length;
		}
		$('[data-preview]').eq(index).addClass('active');
		$('[data-preview]').eq(index).siblings().removeClass('active');
		var newSrc = $('[data-preview]').eq(index).find('img').attr('src');
		mainImage.attr('src', newSrc);
	})
});