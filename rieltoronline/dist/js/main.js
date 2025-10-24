// accordeon
class Accordion {
	constructor(groupEl, options = {}) {
		this.root = groupEl;

		this.opts = {
			activeClass: options.activeClass || 'active',
			titleSelector: options.titleSelector || '.accordeon-title',
			itemSelector: options.itemSelector || '[data-accordeon]',
			closeOthers: options.closeOthers !== false, // за замовчуванням true
		};

		this._onClick = this._onClick.bind(this);
		this._cache();
		this._bind();
	}

	_cache() {
		this.items = Array.from(this.root.querySelectorAll(this.opts.itemSelector));
		this.buttons = Array.from(this.root.querySelectorAll(this.opts.titleSelector));
	}

	_bind() {
		this.buttons.forEach((btn) => btn.addEventListener('click', this._onClick, false));
	}

	destroy() {
		this.buttons.forEach((btn) => btn.removeEventListener('click', this._onClick));
	}

	_onClick(e) {
		e.preventDefault();

		// Шукаємо найближчий елемент акордеону, а не лише прямого батька
		const item = e.currentTarget.closest(this.opts.itemSelector);
		if (!item || !this.root.contains(item)) return;

		const isActive = item.classList.contains(this.opts.activeClass);

		if (isActive) {
			this.close(item);
		} else {
			if (this.opts.closeOthers) this.closeAll();
			this.open(item);
		}
	}

	open(item) {
		item.classList.add(this.opts.activeClass);
	}

	close(item) {
		item.classList.remove(this.opts.activeClass);
	}

	closeAll() {
		this.items.forEach((el) => el.classList.remove(this.opts.activeClass));
	}

	/**
	 * Ініціалізуємо інстанси за “групами”.
	 * Групою вважаємо спільний контейнер (parentElement) для кількох [data-accordeon].
	 */
	static initAll(options) {
		const allItems = Array.from(document.querySelectorAll('[data-accordeon]'));
		const groups = new Set();

		allItems.forEach((item) => {
			if (item.parentElement) groups.add(item.parentElement);
		});

		return Array.from(groups).map((groupEl) => new Accordion(groupEl, options));
	}
}

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.accordeon-list').forEach((group) => {
		new Accordion(group);
	});
});

class ArticlesPagerLoader {
	constructor({ loadBtn, container, progressEl, captionEl, pagination, perPage = 12, jsonUrl = "articles.json" }) {
		this.loadBtn    = loadBtn;
		this.container  = container;
		this.progressEl = progressEl;
		this.captionEl  = captionEl;
		this.pagination = pagination;
		this.perPage    = perPage;
		this.jsonUrl    = jsonUrl;

		this.baseCount   = this.container ? this.container.querySelectorAll("li.item").length : 0;

		this.jsonItems   = [];
		this.combined    = [];
		this.totalCount  = this.baseCount;
		this.loadedCount = this.baseCount;
		this.activePage  = 1;

		this.appendNextChunk = this.appendNextChunk.bind(this);
	}

	makeLi(item) {
		const li = document.createElement("li");
		li.className = "item";
		li.innerHTML = `
			<a href="${item.link}" class="article-preview">
				<div class="spaced-inner">
					<figure class="article-image">
						<img src="${item.image}" alt="image">
					</figure>
				</div>
				<div class="caption">
					<div class="spaced-inner bordered"><div class="date">${item.date}</div></div>
					<div class="spaced-inner">
						<h2 class="article-title">${item.title}</h2>
						<div class="description">${item.description}</div>
					</div>
				</div>
			</a>`;
		return li;
	}

	buildPagination() {
		if (!this.pagination) return;
		const totalPages = Math.max(1, Math.ceil(this.totalCount / this.perPage));

		this.pagination.innerHTML = "";

		// Prev
		const prev = document.createElement("a");
		prev.href = "#";
		prev.className = "item";
		prev.innerHTML = '<i class="icon icon-chevron-left"></i>';
		if (this.activePage <= 1) prev.classList.add("disabled");
		this.pagination.appendChild(prev);

		// Pages
		for (let i = 1; i <= totalPages; i++) {
			const a = document.createElement("a");
			a.href = "#";
			a.className = "item" + (i <= this.activePage ? " active" : "");
			a.textContent = i;
			this.pagination.appendChild(a);
		}

		// Next
		const next = document.createElement("a");
		next.href = "#";
		next.className = "item";
		next.innerHTML = '<i class="icon icon-chevron-right"></i>';
		if (this.activePage >= totalPages || totalPages === 1) {
			next.classList.add("disabled");
		}
		this.pagination.appendChild(next);
	}

	updateProgress() {
		const percent = this.totalCount ? Math.min((this.loadedCount / this.totalCount) * 100, 100) : 0;
		const left    = Math.max(this.totalCount - this.loadedCount, 0);

		if (this.progressEl) this.progressEl.style.width = percent + "%";
		if (this.captionEl)  this.captionEl.textContent  = left > 0 ? `Залишилось ще ${left} дописів` : "Більше дописів немає";
		if (left <= 0) {
			this.loadBtn.disabled = true;
			this.loadBtn.classList.add("disabled");
		} else {
			this.loadBtn.disabled = false;
			this.loadBtn.classList.remove("disabled");
		}
	}

	appendNextChunk() {
		if (this.loadedCount >= this.totalCount) return;

		const start = this.loadedCount;
		const end   = Math.min(start + this.perPage, this.totalCount);

		const frag = document.createDocumentFragment();
		for (let i = start; i < end; i++) frag.appendChild(this.makeLi(this.combined[i]));
		this.container.appendChild(frag);

		this.loadedCount = end;
		this.activePage  = Math.ceil(this.loadedCount / this.perPage);

		this.updateProgress();
		this.buildPagination();
	}

	async init() {
		try {
			const res = await fetch(this.jsonUrl, { cache: "no-store" });
			this.jsonItems = await res.json();
		} catch {
			this.jsonItems = [];
		}

		const baseShadow = Array.from(this.container.querySelectorAll("li.item")).map(li => {
			const a   = li.querySelector("a.article-preview");
			const img = li.querySelector("img");
			return {
				link: a ? a.getAttribute("href") : "#",
				image: img ? img.getAttribute("src") : "",
				date:  (li.querySelector(".date")?.textContent || "").trim(),
				title: (li.querySelector(".article-title")?.textContent || "").trim(),
				description: (li.querySelector(".description")?.textContent || "").trim()
			};
		});

		this.combined   = baseShadow.concat(this.jsonItems);
		this.totalCount = this.baseCount + this.jsonItems.length;

		this.buildPagination();
		this.updateProgress();

		this.loadBtn.addEventListener("click", this.appendNextChunk);
	}
}

// Виклик класу
document.addEventListener("DOMContentLoaded", () => {
	const loadBtn = document.querySelector("[data-load]");
	if (!loadBtn) return;

	const containerId = loadBtn.getAttribute("data-load");
	const pager = new ArticlesPagerLoader({
		loadBtn,
		container:  document.querySelector(containerId),
		progressEl: loadBtn.querySelector(".progress-bar .state"),
		captionEl:  document.querySelector(".top .caption"),
		pagination: document.querySelector(".pagination-nav"),
		perPage:    12,
		jsonUrl:    "articles.json"
	});
	pager.init();
});

// objects-pager-loader.js
class ObjectsPagerLoader {
	constructor({ loadBtn, container, progressEl, captionEl, pagination, perPage = 12, jsonUrl = "objects.json" }) {
		this.loadBtn    = loadBtn;
		this.container  = container;
		this.progressEl = progressEl;
		this.captionEl  = captionEl;
		this.pagination = pagination;
		this.perPage    = perPage;
		this.jsonUrl    = jsonUrl;

		this.baseCount   = this.container ? this.container.querySelectorAll("li.item").length : 0;

		this.jsonItems   = [];
		this.combined    = [];
		this.totalCount  = this.baseCount;
		this.loadedCount = this.baseCount;
		this.activePage  = 1;

		this.appendNextChunk = this.appendNextChunk.bind(this);
	}

	// перетворює "м2" -> "м<sup>2</sup>"
	_formatM2(s) {
		return (s || "").replace(/м2\b/g, "м<sup>2</sup>");
	}

	makeLi(item) {
		const li = document.createElement("li");
		li.className = "item";
		const detailsHTML = this._formatM2(item.details);

		li.innerHTML = `
			<a href="${item.link}" aria-label="Read more" class="object-preview">
				<div class="spaced-inner">
					<figure class="object-image">
						<img src="${item.image}" alt="image">
					</figure>
				</div>
				<div class="caption">
					<div class="spaced-inner bordered"><div class="date">${item.date || ""}</div></div>
					<div class="spaced-inner stretch-inner">
						<h2 class="object-title">${item.title || ""}</h2>
						<div class="description">
							<div class="line">${item.location || ""}</div>
							<div class="line">${detailsHTML}</div>
							<div class="price">${item.price || ""}</div>
						</div>
					</div>
				</div>
			</a>`;
		return li;
	}

	buildPagination() {
		if (!this.pagination) return;
		const totalPages = Math.max(1, Math.ceil(this.totalCount / this.perPage));

		this.pagination.innerHTML = "";

		const prev = document.createElement("a");
		prev.href = "#";
		prev.className = "item";
		prev.innerHTML = '<i class="icon icon-chevron-left"></i>';
		if (this.activePage <= 1) prev.classList.add("disabled");
		this.pagination.appendChild(prev);

		for (let i = 1; i <= totalPages; i++) {
			const a = document.createElement("a");
			a.href = "#";
			a.className = "item" + (i <= this.activePage ? " active" : "");
			a.textContent = i;
			this.pagination.appendChild(a);
		}

		const next = document.createElement("a");
		next.href = "#";
		next.className = "item";
		next.innerHTML = '<i class="icon icon-chevron-right"></i>';
		if (this.activePage >= totalPages || totalPages === 1) next.classList.add("disabled");
		this.pagination.appendChild(next);
	}

	updateProgress() {
		const percent = this.totalCount ? Math.min((this.loadedCount / this.totalCount) * 100, 100) : 0;
		const left    = Math.max(this.totalCount - this.loadedCount, 0);

		if (this.progressEl) this.progressEl.style.width = percent + "%";
		if (this.captionEl)  this.captionEl.textContent  = left > 0 ? `Залишилось ще ${left} об’єктів` : "Більше об’єктів немає";

		if (left <= 0) {
			this.loadBtn.disabled = true;
			this.loadBtn.classList.add("disabled");
		} else {
			this.loadBtn.disabled = false;
			this.loadBtn.classList.remove("disabled");
		}
	}

	appendNextChunk() {
		if (this.loadedCount >= this.totalCount) return;

		const start = this.loadedCount;
		const end   = Math.min(start + this.perPage, this.totalCount);

		const frag = document.createDocumentFragment();
		for (let i = start; i < end; i++) frag.appendChild(this.makeLi(this.combined[i]));
		this.container.appendChild(frag);

		this.loadedCount = end;
		this.activePage  = Math.ceil(this.loadedCount / this.perPage);

		this.updateProgress();
		this.buildPagination();
	}

	async init() {
		try {
			const res = await fetch(this.jsonUrl, { cache: "no-store" });
			this.jsonItems = await res.json();
		} catch {
			this.jsonItems = [];
		}

		const baseShadow = Array.from(this.container.querySelectorAll("li.item")).map(li => {
			const a   = li.querySelector("a.object-preview");
			const img = li.querySelector("img");
			return {
				link: a ? a.getAttribute("href") : "#",
				image: img ? img.getAttribute("src") : "",
				date:  (li.querySelector(".date")?.textContent || "").trim(),
				title: (li.querySelector(".object-title")?.textContent || "").trim(),
				location: (li.querySelector(".description .line:nth-child(1)")?.textContent || "").trim(),
				details: (li.querySelector(".description .line:nth-child(2)")?.innerHTML || "").trim().replace(/<sup>2<\/sup>/g, "2"),
				price: (li.querySelector(".description .price")?.textContent || "").trim()
			};
		});

		this.combined   = baseShadow.concat(this.jsonItems);
		this.totalCount = this.baseCount + this.jsonItems.length;

		this.buildPagination();
		this.updateProgress();

		this.loadBtn.addEventListener("click", this.appendNextChunk);
	}
}

// Виклик класу
document.addEventListener("DOMContentLoaded", () => {
	const loadBtn = document.querySelector("[data-load-object]");
	if (!loadBtn) return;

	const containerId = loadBtn.getAttribute("data-load-object");
	const pager = new ObjectsPagerLoader({
		loadBtn,
		container:  document.querySelector(containerId),
		progressEl: loadBtn.querySelector(".progress-bar .state"),
		captionEl:  document.querySelector(".top .caption"),
		pagination: document.querySelector(".pagination-nav"),
		perPage:    12,
		jsonUrl:    "objects.json"
	});
	pager.init();
});

// smoth scroll
document.addEventListener('DOMContentLoaded', function(){
	Array.prototype.forEach.call(document.querySelectorAll("[data-scrollto]"), function(button){
		button.addEventListener("click", function (e) {
			e.preventDefault();
			let scrollTarget = button.dataset.scrollto;
			document.querySelector(scrollTarget).scrollIntoView({
				behavior: 'smooth' 
			});
		});
	});
});
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
// data-accordeon
document.addEventListener('DOMContentLoaded', function(){
	let allTabFilters = document.querySelectorAll("[data-tag-filter]");

	function alertAndNavigationToggle(open){
		let alertMessage = document.getElementById('searchEmptyMessage');
		let pagination = document.getElementById('filterPagination');
		let filterForm = document.getElementById('searchCaseForm');

		if (open) {
			if (filterForm) filterForm.classList.add('disabled');
			if (alertMessage) alertMessage.classList.remove('hidden');
			if (pagination) pagination.classList.add('hidden');
		} else {
			if (filterForm) filterForm.classList.remove('disabled');
			if (alertMessage) alertMessage.classList.add('hidden');
			if (pagination) pagination.classList.remove('hidden');
		};
	};

	let applyTagFilter = function(data){
		if (!data) return;

		let parentCover = document.querySelector(data.parent);
		let selectedTags = parentCover.querySelectorAll(data.tag);

		let alertMessage = document.getElementById('searchEmptyMessage');
		let pagination = document.getElementById('filterPagination');

		document.getElementById('searchCaseForm').classList.remove('disabled');

		[].forEach.call(parentCover.children, function(tag) {
			tag.classList.add('hidden-tag');
		});

		if (selectedTags.length) {
			[].forEach.call(selectedTags, function(tag) {
				tag.classList.remove('hidden-tag');
			});
			// we need to combine tag filter and form filter
			let allListItems = parentCover.querySelectorAll('li');
			let hiddenListItems = parentCover.querySelectorAll('.hidden');
			let hiddenByFilterListItems = parentCover.querySelectorAll('.hidden-tag');

			if (parentCover.querySelectorAll('li:not(.hidden):not(.hidden-tag)').length) {
				alertAndNavigationToggle(false);
			} else {
				if (hiddenByFilterListItems.length >= hiddenListItems.length || hiddenListItems.length >= hiddenByFilterListItems.length) {
					alertAndNavigationToggle(true);
				}
			}
		} else {
			alertAndNavigationToggle(true);
		}
		// callback
		window.onTagFilter(data);
	};

	function applyDropdownFilter(button, dropdown){
		let buttonText = button.innerHTML;
		let dropdownTitle = dropdown.querySelector('.dropdown-header').querySelector('.item');
		dropdownTitle.innerHTML = buttonText;
		dropdown.classList.remove('opened');
	};

	for (i = 0; i < allTabFilters.length; i++) {
		let allTabButtons = allTabFilters[i].querySelectorAll("[data-tag]");
		let tagParent = allTabFilters[i].dataset.tagFilter;
		for (n = 0; n < allTabButtons.length; n++) {
			let button = allTabButtons[n];
			button.addEventListener('click', function(e){
				let tag = button.dataset.tag;
				if (tag) {
					if (button.closest('[data-dropdown]')) {
						applyDropdownFilter(button, button.closest('[data-dropdown]'));
					}
					applyTagFilter({tag: tag, parent: tagParent});
				};
			}, true);
		}
	}
});
// toggle class event
document.addEventListener('DOMContentLoaded', function(){
	const headerContainer = document.getElementById('mainHeader');

	Array.prototype.forEach.call(document.querySelectorAll("[data-toggle-element]"), function(button){
		let defaultClass = 'active'
		const ANIMATED_CLASS = 'animated';
		let toggleClass = button.dataset.toggleClass ? button.dataset.toggleClass : defaultClass;
		let elementLink = button.dataset.toggleElement;

		button.addEventListener("click", function (e) {
			headerContainer.classList.remove('menu-active');

			Array.prototype.forEach.call(document.querySelectorAll(elementLink), function(element){
				if (!element.classList.contains(toggleClass)) {
					element.classList.add(toggleClass);
					button.classList.add(defaultClass);
					setTimeout(function(){
						element.classList.add(ANIMATED_CLASS);
					}, 250)
					if (element.classList.contains('main-header') && element.querySelector('.search-input')) {
						element.querySelector('.search-input').focus();
					}
					if (element.classList.contains('header-navigation')) {
						document.body.style.width = window.getComputedStyle(document.body).width;
						document.body.classList.add('overlayed');
						document.getElementById('mainHeader').style.width = window.getComputedStyle(document.getElementById('mainHeader')).width;
					}
				} else {
					element.classList.remove(toggleClass);
					button.classList.remove(defaultClass);
					if (document.body.classList.contains('overlayed')){
						document.body.classList.remove('overlayed');
						document.getElementById('mainHeader').style.width = '';
						document.body.style.width = '';
					};
					if (!element.classList.contains('main-header')) {
						element.classList.remove(ANIMATED_CLASS);
					}
				};
			});
		});
	});

	const mainNavigationContainer = document.getElementById('mainNavigation');

	function hideMobileNav(){
		if (mainNavigationContainer.classList.contains('active')) {
			document.querySelector('[data-toggle-element="#mainNavigation"]').classList.remove('active');
			mainNavigationContainer.classList.remove('active', 'animated');
			document.body.classList.remove('overlayed');
			document.body.style.width = '';
			document.getElementById('mainHeader').style.width = '';
		}
	}

	document.body.addEventListener(`click`, function(e){
		if (e.target.closest('[data-toggle-element="#mainNavigation"]')) return;
		if (e.target.closest('#mainNavigation')) return;

		hideMobileNav();
		if (headerContainer.classList.contains('form-search-active') && !e.target.closest('#mainHeader')) {
			headerContainer.classList.remove('form-search-active');
			document.body.classList.remove('overlayed');
			document.getElementById('mainHeader').style.width = '';
		}
	}, {passive: true});


	Array.prototype.forEach.call(document.querySelectorAll("[data-header-close]"), function(button){
		button.addEventListener("click", function (e) {
			hideMobileNav();
		});
	});
});

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
//dropdown
document.addEventListener('DOMContentLoaded', function(){
	let DROPDOWN_ACTIVE_CLASS = 'opened';
	let allDropdowns = document.querySelectorAll("[data-dropdown]");
	let allDropdownButtons = document.querySelectorAll("[data-dropdown] .dropdown-header");

	let closeAllDropdowns = function(){
		for (i = 0; i < allDropdowns.length; i++) {
			let dropdownInner = allDropdowns[i].querySelector('.dropdown-inner');
			allDropdowns[i].classList.remove(DROPDOWN_ACTIVE_CLASS);
			dropdownInner.style.maxHeight = null;
		}
	}

	let dropdownToggle = function() {
		let button = this;
		let dropdownInner = button.parentElement.querySelector('.dropdown-inner');
		if (button.parentElement.classList.contains(DROPDOWN_ACTIVE_CLASS)) {
			closeAllDropdowns();
		} else {
			closeAllDropdowns();
			button.parentElement.classList.add(DROPDOWN_ACTIVE_CLASS);
		};
	}

	for (i = 0; i < allDropdownButtons.length; i++) {
		allDropdownButtons[i].addEventListener('click', dropdownToggle, false);
	};

	document.addEventListener("click", function (e) {
		if (!e.target.closest('[data-dropdown]')) {
			closeAllDropdowns();
		};
	});
});
// header scroll
document.addEventListener('DOMContentLoaded', function(){
	const CHECK_POINT = 10;
	const DARK_HEADER_CLASS = 'dark';
	const LIGTH_HEADER_CLASS = 'light';

	let addHeaderShadow = function(point){
		if (window.pageYOffset && window.pageYOffset >= CHECK_POINT) {
			document.getElementById('mainHeader').classList.add('scrolled');
		} else {
			document.getElementById('mainHeader').classList.remove('scrolled');
		}
	};

	let addHeaderColor = function(){
		let pageHeader = document.getElementById('mainHeader');
		let sections = pageHeader.dataset.scrollCheck;
		let sectionData = {};
		if (sections && sections.length) {
			Array.prototype.forEach.call(document.querySelectorAll(sections), function(section, i){
				let sectionStart = section.offsetTop;
				let sectionEnd = sectionStart + section.getBoundingClientRect().height;
				let pageOffset = window.pageYOffset + pageHeader.getBoundingClientRect().height/2;
				if (pageOffset >= sectionStart && pageOffset  <= sectionEnd) {
					sectionData[i] = true;
				} else {
					sectionData[i] = false;
				}
			});
		}
		if (Object.values(sectionData).every(el => el == false)) {
			pageHeader.classList.add(DARK_HEADER_CLASS)
			pageHeader.classList.remove(LIGTH_HEADER_CLASS)
		} else {
			pageHeader.classList.remove(DARK_HEADER_CLASS)
			pageHeader.classList.add(LIGTH_HEADER_CLASS)
		}
	};

	addHeaderShadow(CHECK_POINT);
	addHeaderColor();

	document.addEventListener("scroll", (event) => {
		addHeaderShadow(CHECK_POINT);
		addHeaderColor();
	});

	window.addEventListener('resize', function(event){
		addHeaderColor();
	});
});

// DualRange

class DualRange {
	constructor(root, opts = {}) {
		this.root = root;
		this.range = root.querySelector('.range');
		this.rMin = root.querySelector('.range-min');
		this.rMax = root.querySelector('.range-max');
		this.iMin = root.querySelector('.input-min');
		this.iMax = root.querySelector('.input-max');
		this.fill = root.querySelector('.range-fill');

		if (!this.range || !this.rMin || !this.rMax) {
			throw new Error('DualRange: .range, .range-min, .range-max are required inside .range-group');
		}

		const ds = this.range.dataset;
		this.min  = Number(opts.min  ?? ds.min  ?? 0);
		this.max  = Number(opts.max  ?? ds.max  ?? 100);
		this.step = Number(opts.step ?? ds.step ?? 1);
		this.minGap = Number(opts.minGap ?? 0);

		// початкові значення: opts → data-value-min/max → краї
		const v0 = Array.isArray(opts.values) ? opts.values[0]
			: (opts.valueMin ?? (ds.valueMin !== undefined ? Number(ds.valueMin) : this.min));
		const v1 = Array.isArray(opts.values) ? opts.values[1]
			: (opts.valueMax ?? (ds.valueMax !== undefined ? Number(ds.valueMax) : this.max));

		this.ticksCount = Number(ds.ticks ?? opts.ticks ?? 5);

		// ініціалізація атрибутів інпутів
		[this.rMin, this.rMax, this.iMin, this.iMax].forEach(el => {
			if (!el) return;
			el.min = this.min;
			el.max = this.max;
			el.step = this.step;
		});

		this._setValues(this._snap(v0), this._snap(v1), false);
		this._bind();
		this._buildTicks();
	}

	_bind() {
		// range -> number
		this.rMin.addEventListener('input', () => {
			const a = this._snap(+this.rMin.value);
			const b = Math.max(a + this.minGap, +this.rMax.value);
			this._setValues(a, this._snap(b), true);
		});
		this.rMax.addEventListener('input', () => {
			const b = this._snap(+this.rMax.value);
			const a = Math.min(b - this.minGap, +this.rMin.value);
			this._setValues(this._snap(a), b, true);
		});

		// number -> range
		if (this.iMin) {
			this.iMin.addEventListener('input', () => {
				const a = this._snap(+this.iMin.value);
				const b = Math.max(a + this.minGap, +this.rMax.value);
				this._setValues(this._clamp(a), this._clamp(this._snap(b)), true);
			});
		}
		if (this.iMax) {
			this.iMax.addEventListener('input', () => {
				const b = this._snap(+this.iMax.value);
				const a = Math.min(b - this.minGap, +this.rMin.value);
				this._setValues(this._clamp(this._snap(a)), this._clamp(b), true);
			});
		}

		// reset форми → повернутись до крайніх значень
		const form = this.root.closest('form');
		if (form) {
			form.addEventListener('reset', () => {
				requestAnimationFrame(() => this._setValues(this.min, this.max, true));
			});
		}
	}

	get values() { return [Number(this.rMin.value), Number(this.rMax.value)]; }
	set values([a, b]) { this._setValues(this._snap(a), this._snap(b), true); }

	_snap(v) { const s = this.step || 1; return Math.round((v - this.min) / s) * s + this.min; }
	_clamp(v) { return Math.min(this.max, Math.max(this.min, v)); }

	_setValues(a, b, emit = false) {
		a = this._clamp(a);
		b = this._clamp(b);
		if (b - a < this.minGap) {
			if (a + this.minGap <= this.max) b = a + this.minGap;
			else a = b - this.minGap;
		}
		if (a > b) [a, b] = [b, a];

		this.rMin.value = a;
		this.rMax.value = b;
		if (this.iMin) this.iMin.value = a;
		if (this.iMax) this.iMax.value = b;

		this._paintFill();

		if (emit) {
			this.root.dispatchEvent(new CustomEvent('dualrangechange', {
				bubbles: true,
				detail: { min: a, max: b }
			}));
		}
	}

	_paintFill() {
		if (!this.fill) return;
		const a = (this.rMin.value - this.min) / (this.max - this.min) * 100;
		const b = (this.rMax.value - this.min) / (this.max - this.min) * 100;
		this.fill.style.left = a + '%';
		this.fill.style.right = (100 - b) + '%';
	}

	_buildTicks() {
		const prev = this.range.querySelector('.range-ticks');
		if (prev) prev.remove();

		const n = Number.isFinite(this.ticksCount) && this.ticksCount >= 2 ? this.ticksCount : 5;
		const wrap = document.createElement('div');
		wrap.className = 'range-ticks';

		const fmt = new Intl.NumberFormat('uk-UA');

		for (let i = 0; i < n; i++) {
			const ratio = i / (n - 1);
			const raw = this.min + ratio * (this.max - this.min);
			const val = this._snap(raw);
			const tick = document.createElement('div');
			tick.className = 'range-tick';
			tick.style.left = (ratio * 100) + '%';
			tick.textContent = fmt.format(val);
			wrap.appendChild(tick);
		}
		this.range.appendChild(wrap);
	}

	updateTicks() { this._buildTicks(); }
}

const fmtUA = new Intl.NumberFormat('uk-UA');
const headerText = (min, max, suffix = ' грн') => `${fmtUA.format(min)} — ${fmtUA.format(max)}${suffix}`;

document.querySelectorAll('[data-dropdown]').forEach((dd) => {
	const parentFG = dd.closest('.form-group');

	const rangeGroup = dd.querySelector('.range-group');
	if (!rangeGroup) return;

	const dr = new DualRange(rangeGroup, {});
	const header = dd.querySelector('.dropdown-header');

	const initialHeaderText = header ? header.textContent : '';

	const updateHeader = () => {
		if (!header) return;
		const [vMin, vMax] = dr.values;
		header.textContent = headerText(vMin, vMax, ' грн');
	};

	rangeGroup.addEventListener('dualrangechange', updateHeader);

	dd.addEventListener('click', () => {
		if (parentFG) parentFG.classList.add('focused');
		updateHeader();
	}, { passive: true });

	const form = dd.closest('form');
	if (form) {
		form.addEventListener('reset', () => {
			requestAnimationFrame(() => {
				if (parentFG) parentFG.classList.remove('focused');
				if (header) header.textContent = initialHeaderText;
			});
		});
	}
});

//form animations + search filter
document.addEventListener('DOMContentLoaded', function(){

	let filterSearchInput = document.querySelector('[data-filter]');
	let filterSearchInputValue = '';
	let filterFields = filterSearchInput && filterSearchInput.dataset ? filterSearchInput.dataset.filterFields : '';

	function clearFilter(selector){
		let allFilteredItems = document.querySelectorAll(selector);
		for (let i = 0; i < allFilteredItems.length; i++) {
			allFilteredItems[i].innerHTML = allFilteredItems[i].innerHTML.replace(/(<mark>|<\/mark>)/gim, '');
			allFilteredItems[i].parentNode.classList.remove('hidden');
			setCounter(allFilteredItems[i], 0);
		};
		alertMessageToggle(false);
	};

	function alertMessageToggle(open){
		let alertMessage = document.getElementById('searchEmptyMessage');
		let pagination = document.getElementById('filterPagination');
		let showMore = document.getElementById('showMore');

		if (open) {
			if (alertMessage) alertMessage.classList.remove('hidden');
			if (pagination) pagination.classList.add('hidden');
			if (showMore) showMore.classList.add('hidden');
		} else {
			if (alertMessage) alertMessage.classList.add('hidden');
			if (pagination) pagination.classList.remove('hidden');
			if (showMore) showMore.classList.remove('hidden');
		};
	};

	function highlightText(selector, searchText){
		if (!selector || !selector.innerHTML) return;
		const regex = new RegExp(searchText, 'gi');

		let text = selector.innerHTML;
				text = text.replace(/(<mark>|<\/mark>)/gim, '');

		const newtext = text.replace(regex, '<mark>$&</mark>');

		selector.innerHTML = newtext;
	}

	function setCounter(parent, number){
		if (parent.querySelector('.search-tooltip') && parent.querySelector('.search-tooltip').querySelector('.count')) {
			parent.querySelector('.search-tooltip').querySelector('.count').innerHTML = number;
		}

		if (!number) {
			parent.classList.remove('success');
		} else {
			parent.classList.add('success');
		}
	}

	function checkFilters(item) {
		if (!item.querySelector('mark')) {
			item.parentNode.classList.add('hidden');
		} else {
			item.parentNode.classList.remove('hidden');
			setCounter(item, item.querySelectorAll('mark').length)
		};

		let allListItems = item.closest('ul').querySelectorAll('li');
		let hiddenListItems = item.closest('ul').querySelectorAll('.hidden');

		if (hiddenListItems.length >= allListItems.length) {
			alertMessageToggle(true);
		} else {
			alertMessageToggle(false);
		}
	};

	function applyFilter(selector, searchText){
		if (!selector) return;
		let allFilteredItems = document.querySelectorAll(selector);
		let fieldsArray = filterFields.split(',');

		for (let i = 0; i < allFilteredItems.length; i++) {
			for (let n = 0; n < fieldsArray.length; n++) {
				let fieldElements = allFilteredItems[i].querySelector(fieldsArray[n]);
				highlightText(fieldElements, searchText);
			};
			checkFilters(allFilteredItems[i]);
		};
	};

	function onCaseSearchKeyDown(event) {
		const waitForFinalEvent = (function(){
			var timers = {};
			return function (callback, ms, uniqueId) {
				if (!uniqueId) {
					uniqueId = "Don't call this twice without a uniqueId";
				}
				if (timers[uniqueId]) {
					clearTimeout (timers[uniqueId]);
				}
				timers[uniqueId] = setTimeout(callback, ms);
			};
		})();

		let input = this;
		waitForFinalEvent(function(){
			if (input.value && input.value.length) {
				input.parentElement.classList.add('focused');
				if (filterSearchInput.dataset.filter) {
					applyFilter(filterSearchInput.dataset.filter, input.value.toLowerCase());
				};
			} else {
				input.parentElement.classList.remove('focused');
				if (filterSearchInput.dataset.filter) {
					clearFilter(filterSearchInput.dataset.filter);
				};
			}
			filterSearchInputValue = input.value;
		}, 100)

		if (event.keyCode == 13 && window.searchCaseCallback) {
			window.searchCaseCallback();

			if (filterSearchInput.dataset.filter && filterSearchInputValue.length) {
				applyFilter(filterSearchInput.dataset.filter, filterSearchInputValue);
			};
		};
	}

	if (filterSearchInput) {
		filterSearchInput.addEventListener('keydown', onCaseSearchKeyDown, {passive: true});
	}
})
// search
document.addEventListener('DOMContentLoaded', function(){
	let inputSearch = document.getElementById('inputSearch');
	if (!inputSearch) return;

	function onSearchKeyDown(event) {
		let input = this;
		setTimeout(function(){
			if (input.value.length) {
				input.parentElement.classList.add('success');
			} else {
				input.parentElement.classList.remove('success');
			}
		}, 1)

		if (event.keyCode == 13 && window.searchFormSubmit) {
			window.searchFormSubmit();
		}
	}

	inputSearch.addEventListener('keydown', onSearchKeyDown, {passive: true});
});


// section scroll animation
document.addEventListener('DOMContentLoaded', function(){
	let ANIMATED_CLASS = 'animated'

	let setDetectSectionAnimation = function(section){
		if (window.pageYOffset + window.innerHeight / 1.3 > section.offsetTop) {
			if (!section.classList.contains(ANIMATED_CLASS)) {
				section.classList.add(ANIMATED_CLASS);
			};
		};
	};

	// on scroll
	document.addEventListener("scroll", (event) => {
		Array.prototype.forEach.call(document.querySelectorAll(".section"), function(section){
			setDetectSectionAnimation(section);
		});
	}, {passive: true});

	// on load
	Array.prototype.forEach.call(document.querySelectorAll(".section"), function(section){
		setTimeout(function(){
			setDetectSectionAnimation(section);
		}, 10)
	});
	setTimeout(function(){
		document.getElementById('mainHeader').classList.add(ANIMATED_CLASS);
	}, 10)
});
// input select
class Selecter {
	constructor(select, options = {}) {
		if (!(select instanceof HTMLSelectElement)) {
			throw new Error('Selecter: target must be <select>.');
		}
		this.select = select;
		this.settings = Object.assign(
			{
				onOpen: null,
				onClose: null,
				onChange: null,
				multiple: select.hasAttribute('multiple')
			},
			options
		);

		this._outsideClickHandler = this._outsideClickHandler.bind(this);
		this._onAnchorClick = this._onAnchorClick.bind(this);
		this._onListClick = this._onListClick.bind(this);
		this._onFormReset = this._onFormReset.bind(this);

		this._init();
	}

	open() {
		this.root.classList.add('opened');
		if (typeof this.settings.onOpen === 'function') {
			this.settings.onOpen(this.root, this.settings);
		}
	}

	close() {
		this.root.classList.remove('opened');
		if (typeof this.settings.onClose === 'function') {
			this.settings.onClose(this.root, this.settings);
		}
	}

	refresh() {
		this._teardownDOMOnly();
		this._build();
	}

	destroy() {
		this._teardownAll();
		this.select.style.display = this._originalDisplay || '';
	}

	// ---- private ----
	_init() {
		this._originalDisplay = this.select.style.display;
		this.select.style.display = 'none';
		this._build();

		this.form = this.select.closest('form') || null;
		if (this.form) {
			this.form.addEventListener('reset', this._onFormReset);
		}
	}

	_build() {
		const optionsList = [];
		const selectedInfo = this._collectOptions(optionsList);
		this.root = document.createElement('div');
		this.root.className = 'selecter';

		this.anchor = document.createElement('span');
		this.anchor.className = 'anchor';
		this.anchor.innerHTML = selectedInfo.title || '';

		this.dropdown = document.createElement('div');
		this.dropdown.className = 'dropdown';

		this._id = this.select.getAttribute('id') || this._setRandomId();
		this.ul = this._buildOptionsTree(optionsList, this.settings.multiple, this._id);

		this.dropdown.appendChild(this.ul);
		this.root.appendChild(this.anchor);
		this.root.appendChild(this.dropdown);

		this.select.parentNode.insertBefore(this.root, this.select.nextSibling);

		this.anchor.addEventListener('click', this._onAnchorClick);
		this.root.addEventListener('click', this._onListClick);
		document.addEventListener('click', this._outsideClickHandler);

		this._updateAnchorText(null);
	}

	_teardownDOMOnly() {
		this.anchor.removeEventListener('click', this._onAnchorClick);
		this.root.removeEventListener('click', this._onListClick);
		this.root.remove();
	}

	_teardownAll() {
		try {
			this.anchor && this.anchor.removeEventListener('click', this._onAnchorClick);
			this.root && this.root.removeEventListener('click', this._onListClick);
			document.removeEventListener('click', this._outsideClickHandler);
			this.form && this.form.removeEventListener('reset', this._onFormReset);
		} catch (e) {}
		if (this.root && this.root.parentNode) this.root.parentNode.removeChild(this.root);
		this.root = null;
		this.anchor = null;
		this.dropdown = null;
		this.ul = null;
		this.form = null;
	}

	_setRandomId() {
		return Math.floor(Math.random() * Date.now()).toString();
	}

	_collectOptions(outList) {
		let selected = null;
		const opts = Array.from(this.select.options || []);
		opts.forEach((opt, i) => {
			outList.push({
				label: opt.label,
				value: opt.value,
				disabled: !!opt.disabled,
				selected: !!opt.selected
			});
			if (i === 0 && !selected) selected = { title: opt.label };
			if (opt.selected) selected = { title: opt.label };
		});
		return selected || { title: '' };
	}

	_buildOptionsTree(optionsList, multiple, id) {
		const ul = document.createElement('ul');
		optionsList.forEach((option, i) => {
			const li = document.createElement('li');
			li.dataset.value = option.value;
			li.className = (option.disabled ? 'disabled ' : '') + (option.selected ? 'active' : '');
			li.appendChild(document.createTextNode(option.label));

			if (multiple && !option.disabled) {
				const cId = `${id}_${i}`;
				const input = document.createElement('input');
				input.type = 'checkbox';
				input.id = cId;
				input.name = cId;
				input.checked = !!option.selected;

				const label = document.createElement('label');
				label.setAttribute('for', cId);

				li.appendChild(document.createTextNode(' '));
				li.appendChild(input);
				li.appendChild(label);
			} else {
				li.appendChild(document.createTextNode(' '));
			}
			ul.appendChild(li);
		});
		return ul;
	}

	_outsideClickHandler(e) {
		if (!this.root) return;
		if (!this.root.contains(e.target)) {
			this.close();
		}
	}

	_onAnchorClick(e) {
		e.preventDefault();
		this._setFocused(true); // клік по селектору => focused
		if (this.root.classList.contains('opened')) this.close();
		else this.open();
	}

	_onListClick(e) {
		const li = e.target.closest('li');
		if (!li || !this.root.contains(li)) return;
		e.preventDefault();

		this._setFocused(true);

		if (li.classList.contains('disabled')) {
			this.close();
			return;
		}

		const multiple = !!this.settings.multiple;

		if (multiple) {
			const checkbox = li.querySelector('input[type="checkbox"]');
			if (li.classList.contains('active')) {
				li.classList.remove('active');
				if (checkbox) {
					checkbox.checked = false;
					checkbox.removeAttribute('checked');
				}
			} else {
				li.classList.add('active');
				if (checkbox) {
					checkbox.checked = true;
					checkbox.setAttribute('checked', 'true');
				}
			}
			const sibs = Array.from(li.parentElement.children);
			const anyActive = sibs.some((el) => el.classList.contains('active') && !el.classList.contains('disabled'));
			sibs.forEach((el) => {
				if (el.classList.contains('disabled')) {
					if (anyActive) el.classList.remove('active');
					else el.classList.add('active');
				}
			});
		} else {
			li.classList.add('active');
			Array.from(li.parentElement.children).forEach((s) => {
				if (s !== li) s.classList.remove('active');
			});
		}

		this._syncSelectWithValue(li.dataset.value);
		this._updateAnchorText(li.dataset.value);
	}

	_onFormReset() {
		this._setFocused(false);
	}

	_syncSelectWithValue(value) {
		const isMultiple = this.settings.multiple;
		const opts = Array.from(this.select.querySelectorAll('option'));
		opts.forEach((opt) => {
			const same = opt.value.toString() === value.toString();
			if (!isMultiple) {
				opt.selected = same;
				if (same) opt.setAttribute('selected', 'true');
				else opt.removeAttribute('selected');
			} else {
				if (same && !opt.hasAttribute('selected')) {
					opt.selected = true;
					opt.setAttribute('selected', 'true');
				} else if (same && opt.hasAttribute('selected')) {
					opt.selected = false;
					opt.removeAttribute('selected');
				}
			}
		});

		const anySelected = this.select.querySelectorAll('option[selected]').length > 0;
		const disabledOpts = this.select.querySelectorAll('option[disabled]');
		disabledOpts.forEach((opt) => {
			if (anySelected) {
				opt.selected = false;
				opt.removeAttribute('selected');
			} else {
				opt.selected = true;
				opt.setAttribute('selected', 'true');
			}
		});

		if (typeof this.settings.onChange === 'function') {
			this.settings.onChange(this.select, this.settings, value);
		}
	}

	_updateAnchorText(lastValue) {
		const anchorEl = this.anchor;
		const adaptiveWidth = 300;

		if (this.settings.multiple) {
			anchorEl.innerHTML = '';
			const selected = Array.from(this.select.querySelectorAll('option[selected]'));
			const labels = selected.map((o) => (o.textContent || o.label || '').trim());

			if (labels.length === 1) {
				anchorEl.textContent = labels[0] || '';
			} else if (labels.length > 1) {
				anchorEl.textContent = labels[0] || '';
				if (anchorEl.offsetWidth <= adaptiveWidth) {
					const count = document.createElement('span');
					count.className = 'count';
					count.textContent = `+${labels.length - 1}`;
					anchorEl.appendChild(count);
				} else {
					const sliced = labels.slice(0, 3).join(',');
					anchorEl.textContent = sliced;
					if (labels.length > 3) {
						const count = document.createElement('span');
						count.className = 'count';
						count.textContent = `+${labels.length - 3}`;
						anchorEl.appendChild(count);
					}
				}
			} else {
				anchorEl.textContent = '';
			}
		} else {
			let text = this.select.value;
			if (lastValue === true) text = 'yes';
			else if (lastValue === false) text = 'no';
			anchorEl.textContent = text || '';
			this.close();
		}
	}

	_setFocused(state) {
		const group = this.select.closest('.form-group');
		if (!group) return;
		if (state) group.classList.add('focused');
		else group.classList.remove('focused');
	}
}

function initSelecter(target, options) {
	let nodes = [];
	if (typeof target === 'string') nodes = Array.from(document.querySelectorAll(target));
	else if (target instanceof HTMLSelectElement) nodes = [target];
	else if (NodeList.prototype.isPrototypeOf(target) || Array.isArray(target)) nodes = Array.from(target);

	const instances = nodes.map((el) => new Selecter(el, options));
	return instances;
}

const instances = initSelecter('.select', {
	onChange: (selectEl, settings, lastValue) => {
		console.log('changed:', lastValue, 'selected:', 
			Array.from(selectEl.selectedOptions).map(o => o.value));
	}
});

// window.Selecter = Selecter;
// window.initSelecter = initSelecter;

// sticky block
document.addEventListener('DOMContentLoaded', function(){
	let stickyBlocks = document.querySelectorAll("[data-sticky]");
	let cloneIsAppended = false;

	Math.clamp = function(value, min, max){
		return value < min ? min : value > max ? max : value;
	}

	function setStickPosition(){
		for (i = 0; i < stickyBlocks.length; i++) {
			let headerHeight = document.getElementById('mainHeader').getBoundingClientRect().height;
			let block = stickyBlocks[i];
			let blockParent = block.closest('.sticky-inner');

			if (window.innerWidth <= 1199) {
				block.style.top = 'auto';
				block.classList.remove('to-top');
				block.classList.remove('to-bottom');
				return;
			}

			let stickInside = block.closest(block.dataset.sticky);
			let stickInsideHeight = stickInside.getBoundingClientRect().height;

			blockParent.style.height = blockParent.getBoundingClientRect().height + 'px';

			let startPosition = stickInside.offsetTop - headerHeight;
			let endPositon = startPosition + stickInsideHeight - block.getBoundingClientRect().height;

			if (window.pageYOffset < startPosition) {
				// console.log('top')
				block.style.top = 'auto';
				block.classList.remove('to-top');
				block.classList.remove('to-bottom');
			} else if (window.pageYOffset >= startPosition && window.pageYOffset <= endPositon) {
				// console.log('middle')
				block.classList.add('to-top');
				block.style.top = headerHeight + 'px';
				block.style.left = blockParent.getBoundingClientRect().left + 'px';
				block.classList.remove('to-bottom');
			} else if (window.pageYOffset > endPositon) {
				// console.log('bottom')
				block.style.left = blockParent.offsetLeft + 'px';
				block.classList.remove('to-top');
				block.classList.add('to-bottom');
			};
		};
	};

	setStickPosition();

	window.addEventListener('scroll', function(event){
		setStickPosition();
	});

	window.addEventListener('resize', function(event){
		setStickPosition();
	});
});




// tabs
class Tabs {
	constructor(navEl, options = {}) {
		this.nav = navEl;
		this.opts = {
			tabBtnSelector: options.tabBtnSelector || '.tab-button',
			faderSelector: options.faderSelector || '.tab-fader',
			activeClassBtn: options.activeClassBtn || 'active',
			activeClassContent: options.activeClassContent || 'active',
		};

		this.containerSelector = this.nav.dataset.tabsContainer || null;
		this.buttons = Array.from(this.nav.querySelectorAll(this.opts.tabBtnSelector));
		this.fader = this.nav.querySelector(this.opts.faderSelector);

		this._onResize = this._onResize.bind(this);
		this._handlers = [];

		this.init();
	}

	init() {
		if (!this.containerSelector) return;

		this.buttons.forEach((btn, index) => {
			const handler = (e) => {
				e.preventDefault();
				this.toggleTo(index, btn);
			};
			btn.addEventListener('click', handler, false);
			this._handlers.push({ btn, handler });
		});

		const initialIndex = Math.max(
			0,
			this.buttons.findIndex((b) => b.classList.contains(this.opts.activeClassBtn))
		);
		this.toggleTo(initialIndex, this.buttons[initialIndex]);

		window.addEventListener('resize', this._onResize, { passive: true });
	}

	destroy() {
		this._handlers.forEach(({ btn, handler }) => btn.removeEventListener('click', handler));
		this._handlers = [];
		window.removeEventListener('resize', this._onResize);
	}

	toggleTo(index, button) {
		if (!button) return;

		this.buttons.forEach((b) => b.classList.remove(this.opts.activeClassBtn));
		button.classList.add(this.opts.activeClassBtn);

		this._setFaderSize(button);
		this._setActiveTab(index);
	}

	_setFaderSize(button) {
		if (!this.fader || !button || !button.parentElement) return;
		const rect = button.getBoundingClientRect();
		const parentRect = button.parentElement.getBoundingClientRect();

		this.fader.style.width = rect.width + 'px';
		this.fader.style.height = rect.height + 'px';
		this.fader.style.left = rect.left - parentRect.left + 'px';
		this.fader.style.top = rect.top - parentRect.top - 1 + 'px';
	}

	_setActiveTab(index) {
		if (!this.containerSelector) return;
		const container = document.querySelector(this.containerSelector);
		if (!container) return;

		const allTabContent = Array.from(container.querySelectorAll('.tab-content'));
		allTabContent.forEach((el) => el.classList.remove(this.opts.activeClassContent));

		const current = allTabContent[index];
		if (current) current.classList.add(this.opts.activeClassContent);
	}

	_onResize() {
		const activeBtn = this.buttons.find((b) => b.classList.contains(this.opts.activeClassBtn));
		if (activeBtn) this._setFaderSize(activeBtn);
	}

	static initAll(options) {
		const instances = [];
		document.querySelectorAll('[data-tabs-container]').forEach((nav) => {
			instances.push(new Tabs(nav, options));
		});
		return instances;
	}
}

document.addEventListener('DOMContentLoaded', () => {
	window.TabsInstances = Tabs.initAll();
});

// validation
window.addEventListener("DOMContentLoaded", function() {

	class ValidationForm {

		classes = {
			success: 'success',
			error: 'error',
			focused: 'focused',
			ignored: 'ignored'
		}

		form = null;
		formInputs = null;
		formTextareas = null;
		formSelects = null;
		formCheckboxes = null;
		formFileInputs = null;
		submitButtons = null;

		constructor(form) {
			this.form = form;
			this.formInputs = form.querySelectorAll(`.input:not(.${this.classes.ignored})`);
			this.formTextareas = form.querySelectorAll(`.textarea:not(.${this.classes.ignored})`);
			this.formSelects = form.querySelectorAll(`.select:not(.${this.classes.ignored})`);
			this.formCheckboxes = form.querySelectorAll(`.checkbox:not(.${this.classes.ignored})`);
			this.formFileInputs = form.querySelectorAll(`.file:not(.${this.classes.ignored})`);

			this.submitButtons = this.form.querySelectorAll('button[type="submit"], input[type="submit"]');

			this.form.addEventListener('submit', (event) => {
				this.onFormSubmit(event);
			});

			this.form.addEventListener('reset', (event) => {
				this.onFormReset(event);
			});
		};

		updateSubmitState() {
			const groups = Array.from(this.form.querySelectorAll('.form-group:not(.' + this.classes.ignored + ')'));
			if (!groups.length) {
				this.submitButtons.forEach(btn => btn.classList.remove('disabled'));
				return;
			}
			const hasError = groups.some(g => g.classList.contains(this.classes.error));
			const allSuccess = groups.every(g => g.classList.contains(this.classes.success));
			const shouldDisable = hasError || !allSuccess;
			this.submitButtons.forEach(btn => {
				btn.classList.toggle('disabled', shouldDisable);
			});
		}

		onFormSubmit(event){
			let formInputs = this.formInputs;
			let formTextareas = this.formTextareas;
			let formSelects = this.formSelects;
			let formFileInputs = this.formFileInputs;
			let formCheckboxes  = this.formCheckboxes;

			if (formInputs && formInputs.length) {
				for (let i = 0; i < formInputs.length; i++) {
					let input = formInputs[i];
					// Пропускаємо OTP-поля, їх валідність веде initCodeInputs()
					if (input.classList.contains('number-single-input')) continue;
					this.validateByTextLength(input);
				}
			}

			if (formTextareas && formTextareas.length) {
				for (let t = 0; t < formTextareas.length; t++) {
					let textArea = formTextareas[t];
					this.validateByTextLength(textArea);
				}
			}

			if (formSelects && formSelects.length) {
				for (let s = 0; s < formSelects.length; s++) {
					let formSelect = formSelects[s];
					this.validateBySelectOptions(formSelect);
				}
			}

			if (formFileInputs && formFileInputs.length) {
				for (let s = 0; s < formFileInputs.length; s++) {
					let formFileInput = formFileInputs[s];
					this.validateByFileUpload(formFileInput);
				}
			}

			if (formCheckboxes && formCheckboxes.length) {
				for (let s = 0; s < formCheckboxes.length; s++) {
					let formCheckbox = formCheckboxes[s];
					this.validateCheckbox(formCheckbox);
				}
			}

			// callback
			if (window.onFormSubmit) {
				window.onFormSubmit(this);
			}
		};

		onFormReset(event){
			let allFormGroup = this.form.querySelectorAll('.form-group');
			let allFormUploads = this.form.querySelectorAll('.files-cover');
			let allChartCounters = this.form.querySelectorAll('.chart-counter');
			for (let i = 0; i < allFormGroup.length; i++) {
				allFormGroup[i].classList.remove(this.classes.success, this.classes.error, this.classes.focused)
			}
			if (allFormUploads && allFormUploads.length) {
				for (let i = 0; i < allFormUploads.length; i++) {
					allFormUploads[i].remove();
				}
			}
			if (allChartCounters && allChartCounters.length) {
				for (let i = 0; i < allChartCounters.length; i++) {
					allChartCounters[i].innerHTML = '0';
				}
			}
			this.form.querySelectorAll('.number-single-input').forEach(inp => inp.value = '');
			this.updateSubmitState();
		};

		setFocusedClass(inputParent, hasValue){
			if (hasValue) {
				inputParent.classList.add(this.classes.focused);
			} else {
				inputParent.classList.remove(this.classes.focused);
			}
		};

		onFieldInput(e){
			const el = e.target;

			if (el.classList.contains('number-single-input')) return;

			const type =
				el.classList.contains('phone') ? 'phone' :
				el.classList.contains('email') ? 'email' : '';

			this.setFocusedClass(el.parentElement, el.value.length);

			switch (type) {
				case 'phone':
					this.setPhoneMask(e, el);
					break;
				case 'email':
					this.validateEmail(e, el);
					break;
				default:
					this.setChartsCount(el.value.length, el);
					this.validateByTextLength(el);
			}
		};

		onCheckboxChange(){
			this._this.validateCheckbox(this.checkbox);
		};

		isValidEmail(email){
			let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		};

		setValidationClass(element, validationSuccess){
			if (validationSuccess) {
				element.classList.add(this.classes.success);
				element.classList.remove(this.classes.error);
			} else {
				element.classList.add(this.classes.error);
				element.classList.remove(this.classes.success);
			}
			this.updateSubmitState();
		};

		setChartsCount(valLength, element){
			if (!element) return;
			const group = element.closest('.form-group');
			if (!group) return;
			const counterEl = group.querySelector('.chart-counter');
			if (!counterEl) return;
			counterEl.textContent = valLength;
		};

		setPhoneMask(event, input){
			let keyCode = event.keyCode || 0;
			let pos = input.selectionStart || 0;
			if (pos < 3 && event.type === 'keydown') event.preventDefault();
			let matrix = input.getAttribute('placeholder') ? input.getAttribute('placeholder') : '+380 (___) ___ __ _',
					i = 0,
					def = matrix.replace(/\D/g, ""),
					val = input.value.replace(/\D/g, ""),
					new_value = matrix.replace(/[_\d]/g, function(a) {
							return i < val.length ? val.charAt(i++) || def.charAt(i) : a
					});
			i = new_value.indexOf("_");
			if (i != -1) {
				i < 5 && (i = 3);
				new_value = new_value.slice(0, i);
			}
			let reg = matrix.substr(0, input.value.length).replace(/_+/g,
					function(a) {
							return "\\d{1," + a.length + "}"
					}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(input.value) || input.value.trim().length < 5 || (keyCode > 47 && keyCode < 58)) {
				input.value = new_value;
			}
			if (event.type == "blur" && input.value.trim().length < 5) {
				input.value = "";
			}
			this.setValidationClass(input.parentElement, input.value.length == matrix.length);
		};

		validateEmail(event, input){
			this.setValidationClass(input.parentElement, this.isValidEmail(input.value.trim()));
		};

		validateByTextLength(field){
			// OTP-поля валідовуємо окремо
			if (field.classList.contains('number-single-input')) return;
			let minlength = parseInt(field.dataset.minlength) || 2;
			this.setValidationClass(field.parentElement, field.value.length >= minlength);
		};

		validateBySelectOptions(select){
			let defaultOption = select.querySelector('[disabled]');
			this.setValidationClass(select.parentElement, select.value !== (defaultOption ? defaultOption.innerHTML : ''));
		};

		validateByFileUpload(fileInput){
			let inputHasFiles = fileInput.files.length;
			this.setValidationClass(fileInput.parentElement, inputHasFiles);
		};

		validateCheckbox(checkbox) {
			let isChecked = checkbox.checked;
			this.setValidationClass(checkbox.parentElement, isChecked);
		};

		onSelectChange(){
			let select = document.activeElement;
			this.validateBySelectOptions(select);
		};

		initCodeInputs() {
			const groups = this.form.querySelectorAll('.form-group'); // будемо шукати інпути всередині кожної групи

			groups.forEach(group => {
				const codeInputs = group.querySelectorAll('.number-single-input');
				if (!codeInputs.length) return;

				const idxOf = (nodeList, el) => Array.prototype.indexOf.call(nodeList, el);
				const focusNext = (list, i) => { if (i < list.length - 1) list[i + 1].focus(); };
				const focusPrev = (list, i) => { if (i > 0) list[i - 1].focus(); };

				const updateGroupState = () => {
					const filled = Array.from(codeInputs).some(inp => (inp.value || '').length === 1);
					this.setValidationClass(group, filled);
				};

				codeInputs.forEach((input) => {
					input.type = 'text';
					input.setAttribute('inputmode', 'numeric');
					input.setAttribute('autocomplete', 'one-time-code');
					input.setAttribute('maxlength', '1');

					input.addEventListener('input', () => {
						input.value = input.value.replace(/\D/g, '').slice(0, 1);
						const i = idxOf(codeInputs, input);
						if (input.value.length === 1) {
							focusNext(codeInputs, i);
						}
						updateGroupState();
					}, { passive: true });

					input.addEventListener('paste', (e) => {
						e.preventDefault();
						const digits = (e.clipboardData.getData('text') || '').replace(/\D/g, '');
						let i = idxOf(codeInputs, input);
						for (const d of digits) {
							if (i >= codeInputs.length) break;
							codeInputs[i].value = d.slice(0, 1);
							i++;
						}
						if (i < codeInputs.length) codeInputs[i].focus();
						else codeInputs[codeInputs.length - 1].focus();
						updateGroupState();
					});

					// Backspace
					input.addEventListener('keydown', (e) => {
						if (e.key === 'Backspace') {
							const i = idxOf(codeInputs, input);
							if (input.value === '') {
								focusPrev(codeInputs, i);
							} else {
								input.value = '';
							}
							e.preventDefault();
							updateGroupState();
						}
					});

					input.addEventListener('focus', () => input.select(), { passive: true });
				});

				updateGroupState();
			});
		}

		init() {
			let formInputs = this.form.querySelectorAll('.input');
			let formTextareas = this.form.querySelectorAll('.textarea');
			let formSelects = this.form.querySelectorAll('.select');
			let formFileInputs = this.form.querySelectorAll('.file');
			let formCheckboxes = this.form.querySelectorAll('.checkbox');

			// INPUTS
			if (formInputs && formInputs.length) {
				for (let i = 0; i < formInputs.length; i++) {
					let input = formInputs[i];
					this.setFocusedClass(input.parentElement, input.value.length);
					this.setChartsCount(input.value.length, input);
					input.addEventListener('input', this.onFieldInput.bind(this), {passive: true});
					input.addEventListener('blur', this.onFieldInput.bind(this), {passive: true});
				}
			}

			// TEXTAREAS
			if (formTextareas && formTextareas.length) {
				for (let t = 0; t < formTextareas.length; t++) {
					let textArea = formTextareas[t];
					this.setFocusedClass(textArea.parentElement, textArea.value.length);
					this.setChartsCount(textArea.value.length, textArea);
					textArea.addEventListener('input', this.onFieldInput.bind(this), {passive: true});
					textArea.addEventListener('blur', this.onFieldInput.bind(this), {passive: true});
				}
			}

			// SELECTS
			if (formSelects && formSelects.length) {
				for (let s = 0; s < formSelects.length; s++) {
					let formSelect = formSelects[s];
					this.setFocusedClass(formSelect.parentElement, formSelect.value.length);
					formSelect.addEventListener('change', this.onFieldInput.bind(this), {passive: true});
				}
			}

			// CHECKBOXES
			if (formCheckboxes && formCheckboxes.length) {
				for (let s = 0; s < formCheckboxes.length; s++) {
					let formCheckbox = formCheckboxes[s];
					this.setFocusedClass(formCheckbox.parentElement, formCheckbox.checked);
					formCheckbox.addEventListener('change', this.onCheckboxChange.bind({_this: this, checkbox: formCheckbox}), {passive: true});
				}
			}

			this.initCodeInputs();

		};
	};

	let allValidateForms = document.querySelectorAll('.validate-form');

	for (let i = 0; i < allValidateForms.length; i++) {
		const newForm = new ValidationForm(allValidateForms[i]);
		newForm.init();
	}

	let allSearchReset = document.querySelectorAll('.search-reset');
	if (allSearchReset && allSearchReset.length) {
		for (let i = 0; i < allSearchReset.length; i++) {
			let resetButton = allSearchReset[i];
			resetButton.addEventListener('click', (e) => {
				let input = e.target.closest('.form-group').querySelector('input');
				if (input) input.focus();
			});
		}
	}
});
