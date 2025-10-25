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
			<button type="button" class="button round-link" data-add-favourite>
				<i class="icon icon-heart-empty active"></i>
				<i class="icon icon-heart-full"></i>
			</button>
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
