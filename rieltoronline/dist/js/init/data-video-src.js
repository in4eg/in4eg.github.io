// show video modal
document.addEventListener('DOMContentLoaded', function(){
	let videoTriggerElemens = document.querySelectorAll("[data-video-src]");

	let videoModalToggle = function(){
		let videoSrc = this.src;
		let videoPopup = document.getElementById('videoPopup');

		function showModal(){
			videoPopup.classList.add('showed')

			setTimeout(function(){
				videoPopup.classList.add('active');
			}, 25)
		}

		let promise = new Promise(function(resolve, reject) {
			videoPopup.querySelector('iframe').src = videoSrc;
		});
		promise.then(showModal())
	}

	for (i = 0; i < videoTriggerElemens.length; i++) {
		let videoSrc = videoTriggerElemens[i].dataset.videoSrc;
		if (videoSrc) {
			videoTriggerElemens[i].addEventListener('click', videoModalToggle.bind({src: videoSrc}), true);
		};
	};
})