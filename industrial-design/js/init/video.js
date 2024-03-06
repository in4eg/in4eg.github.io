$('video').each(function(i, video){
	$(video).click(function(){
		if (video.paused){
			playVideo(video);
		} else {
			pauseVideo(video);
		}
	})
	$('[data-fullscreen-toggle="#'+$(video).attr('id')+'"]').click((function(){
		goFullscreen(video)
	}))
})

function playVideo(video) {
	video.play();
}

function pauseVideo(video) {
	video.pause();
}

function goFullscreen(video) {
	if (video.mozRequestFullScreen) {
		video.mozRequestFullScreen();
	} else if (video.webkitRequestFullScreen) {
		video.webkitRequestFullScreen();
	}
}