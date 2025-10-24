// data-show-more
document.addEventListener('DOMContentLoaded', function(){
	let showMoreButton = document.getElementById('showMore') ? document.getElementById('showMore').querySelector("[data-show-more]") : null;
	let elementsCover = showMoreButton ? document.querySelector(showMoreButton.dataset.showMore) : null;

	function setMoreCounter() {
		if (!elementsCover) return;
		let totalCount = elementsCover.children.length;
		let visibleCount = parseInt(elementsCover.dataset.mobileVisible);

		for (i = visibleCount; i < elementsCover.children.length; i++) {
			elementsCover.children[i].classList.add('hidden');
		};

		if (showMoreButton) {
			showMoreButton.querySelector('.count').innerHTML = totalCount - visibleCount;
		}
	};

	function showMoreElements(button){
		let allChildren = elementsCover.children;
		for (i = 0; i < elementsCover.children.length; i++) {
			elementsCover.children[i].classList.remove('hidden');
		};
		showMoreButton.parentElement.classList.add('hidden');
	}

	if (window.innerWidth <= 768) {
		setMoreCounter();
	};

	window.addEventListener('resize', function(event){
		if (window.innerWidth <= 768) {
			setMoreCounter();
		};
	});

	document.body.addEventListener('click', function(e){
		let showMoreButton = e.target.closest("[data-show-more]");
		if (showMoreButton){
			showMoreElements(showMoreButton);
		};
	});
});