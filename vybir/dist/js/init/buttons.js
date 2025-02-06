document.addEventListener("DOMContentLoaded", function() {
	let lastKnownScrollPositionY = 0;
	let ticking = false;
	let heigthPoint = 1000;
	const SCROLL_ANIMATE_CLASS = 'animated';

	function setAnimatedClass(scrollYPos) {
		let animatedSelection = [].slice.call(document.querySelectorAll('[data-scroll-animate]'));
		if (scrollYPos > heigthPoint) {
			for (let i = 0; i < animatedSelection.length; i++) {
				let selectionElement = animatedSelection[i];
				selectionElement.classList.add(SCROLL_ANIMATE_CLASS);
			};
		} else {
			for (let i = 0; i < animatedSelection.length; i++) {
				let selectionElement = animatedSelection[i];
				selectionElement.classList.remove(SCROLL_ANIMATE_CLASS);
			};
		}
	}

	document.addEventListener("scroll", (event) => {
		lastKnownScrollPositionY = window.scrollY;

		if (!ticking) {
			window.requestAnimationFrame(() => {
				setAnimatedClass(lastKnownScrollPositionY);
				ticking = false;
			});

			ticking = true;
		}
	});
});