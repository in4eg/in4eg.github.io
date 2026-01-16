class GetCities {
	constructor({
		jsonSelector = '#city-rayon',
		cityContainerSelector = '[name="city"]',
		districtContainerSelector = '[name="district[]"]'
	} = {}) {
		this.jsonEl = document.querySelector(jsonSelector);
		if (!this.jsonEl) return;

		this.data = JSON.parse(this.jsonEl.textContent);
		this.cityContainer = document.querySelector(cityContainerSelector)?.closest('[data-options]');
		this.districtContainer = document.querySelector(districtContainerSelector)?.closest('[data-options]');

		this.params = new URLSearchParams(location.search);

		this.init();
	}

	init() {
		this.renderCities();
		this.restoreCityFromGet();
		this.bindCityChange();
	}

	/* ---------- RENDER ---------- */
	renderCities() {
		if (!this.cityContainer) return;
		this.cityContainer.innerHTML = '';

		this.data.cities.forEach(city => {
			this.cityContainer.appendChild(
				this._createCityItem(city)
			);
		});
	}

	renderDistricts(cityId) {
		if (!this.districtContainer) return;
		this.districtContainer.innerHTML = '';

		Object.values(this.data.rayons)
			.filter(r => String(r.city_id) === String(cityId))
			.forEach(rayon => {
				this.districtContainer.appendChild(
					this._createDistrictItem(rayon)
				);
			});

		this.restoreDistrictsFromGet();
	}

	/* ---------- CREATE ITEMS ---------- */
	_createCityItem(city) {
		const item = document.createElement('div');
		item.className = 'item';

		item.innerHTML = `
			<div class="radio-group form-group">
				<input
					type="radio"
					name="city"
					class="radio"
					id="city-${city.id}"
					value="${city.id}"
				>
				<label for="city-${city.id}" class="radio-label" data-label>
					${city.name}
				</label>
			</div>
		`;

		return item;
	}

	_createDistrictItem(rayon) {
		const item = document.createElement('div');
		item.className = 'item';

		item.innerHTML = `
			<div class="checkbox-group form-group">
				<input
					type="checkbox"
					name="district[]"
					class="checkbox"
					id="district-${rayon.url}"
					value="${rayon.url}"
				>
				<label for="district-${rayon.url}" class="checkbox-label" data-label>
					${rayon.name}
				</label>
			</div>
		`;

		return item;
	}

	/* ---------- EVENTS ---------- */
	bindCityChange() {
		document.addEventListener('change', (e) => {
			if (e.target.name !== 'city') return;

			const cityId = e.target.value;
			this.renderDistricts(cityId);

			this.reinitSelecter();
			this.rebuildFiltersUI();
		});
	}

	/* ---------- RESTORE FROM GET ---------- */
	restoreCityFromGet() {
		const cityId = this.params.get('city');
		if (!cityId) return;

		const radio = document.querySelector(`[name="city"][value="${cityId}"]`);
		if (radio) {
			radio.checked = true;
			this.renderDistricts(cityId);
		}
	}

	restoreDistrictsFromGet() {
		const values = this.params.getAll('district[]');
		if (!values.length) return;

		values.forEach(val => {
			const cb = document.querySelector(`[name="district[]"][value="${val}"]`);
			if (cb) cb.checked = true;
		});
	}

	/* ---------- HELPERS ---------- */
	reinitSelecter() {
		if (window.filterSelecterInstances) {
			window.filterSelecterInstances.forEach(i => i.destroy());
		}

		window.filterSelecterInstances = initSelecter('.select-filter');
	}

	rebuildFiltersUI() {
		document.querySelectorAll('.filters-cover').forEach(el => {
			el._filtersUI?.rebuild?.();
		});
	}
}

document.addEventListener('DOMContentLoaded', () => {
	new GetCities();
});
