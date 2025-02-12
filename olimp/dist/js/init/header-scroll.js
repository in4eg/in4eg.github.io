// header scroll
document.addEventListener('DOMContentLoaded', function(){
	let getSectionHeight = function(){
		let sections = document.getElementById('mainHeader').dataset.scrollCheck;
		let height = 0;

		if (sections && sections.length) {
			Array.prototype.forEach.call(document.querySelectorAll(sections), function(section){
				height = section.clientHeight;
			});
		}

		return height;
	};

	let checkTopPoint = 10;

	let addHeaderShadow = function(point){
		if (window.pageYOffset && window.pageYOffset >= checkTopPoint) {
			document.getElementById('mainHeader').classList.add('scrolled');
		} else {
			document.getElementById('mainHeader').classList.remove('scrolled');
		}
	};

	let addHeaderColor = function(bannerHeight){
		if (!bannerHeight) return;
		if (window.pageYOffset && window.pageYOffset >= bannerHeight) {
			document.getElementById('mainHeader').classList.remove('light');
			document.getElementById('mainHeader').classList.add('dark');
		} else {
			document.getElementById('mainHeader').classList.add('light');
			document.getElementById('mainHeader').classList.remove('dark');
		}
	};

	addHeaderShadow(checkTopPoint);
	addHeaderColor(getSectionHeight());

	document.addEventListener("scroll", (event) => {
		addHeaderShadow(checkTopPoint);
		addHeaderColor(getSectionHeight());
	});

	window.addEventListener('resize', function(event){
		addHeaderColor(getSectionHeight());
	});
});
