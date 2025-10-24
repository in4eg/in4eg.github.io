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
