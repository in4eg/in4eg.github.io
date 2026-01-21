// Get Cities for radio / checkbox (filter[…])
class GetCities {
	constructor({
		jsonSelector = '#city-rayon',
		cityName = 'filter[city]',
		districtName = 'filter[district][]',
		cityInputSelector = '#city',
		districtGroupSelector = '#district'
	} = {}) {
		this.jsonEl = document.querySelector(jsonSelector);
		if (!this.jsonEl) return;

		this.data = JSON.parse(this.jsonEl.textContent);

		this.cityContainer = document.querySelector(`[name="${cityName}"]`)?.closest('[data-options]');
		this.districtContainer = document.querySelector(`[name="${districtName}"]`)?.closest('[data-options]');

		this.cityInput = document.querySelector(cityInputSelector);
		this.districtGroup = document
			.querySelector(districtGroupSelector)
			?.closest('.labeled-group.filter-group.form-group');

		this.params = new URLSearchParams(location.search);

		this.cityName = cityName;
		this.districtName = districtName;

		this.init();
	}

	init() {
		this.renderCities();
		this.restoreFromGet();
		this.toggleDistrictState();
		this.bindEvents();
	}

	/* ---------- RENDER ---------- */
	renderCities() {
		if (!this.cityContainer) return;
		this.cityContainer.innerHTML = '';

		this.data.cities.forEach(city => {
			this.cityContainer.appendChild(this._createCityItem(city));
		});
	}

	renderDistricts(cityId) {
		if (!this.districtContainer) return;
		this.districtContainer.innerHTML = '';

		Object.values(this.data.rayons)
			.filter(r => String(r.city_id) === String(cityId))
			.forEach(rayon => {
				this.districtContainer.appendChild(this._createDistrictItem(rayon));
			});
	}

	/* ---------- CREATE ---------- */
	_createCityItem(city) {
		const item = document.createElement('div');
		item.className = 'item';
		item.innerHTML = `
			<div class="radio-group form-group">
				<input
					type="radio"
					name="${this.cityName}"
					class="radio"
					id="city-${city.id}"
					value="${city.id}">
				<label for="city-${city.id}" class="radio-label" data-label>
					${city.name}
				</label>
			</div>`;
		return item;
	}

	_createDistrictItem(rayon) {
		const item = document.createElement('div');
		item.className = 'item';
		item.innerHTML = `
			<div class="checkbox-group form-group">
				<input
					type="checkbox"
					name="${this.districtName}"
					class="checkbox"
					id="district-${rayon.url}"
					value="${rayon.url}">
				<label for="district-${rayon.url}" class="checkbox-label" data-label>
					${rayon.name}
				</label>
			</div>`;
		return item;
	}

	/* ---------- EVENTS ---------- */
	bindEvents() {
		document.addEventListener('change', e => {
			if (e.target.name !== this.cityName) return;

			this.renderDistricts(e.target.value);
			this.toggleDistrictState(true);
			this.rebuildFiltersUI();
		});

		this.cityInput?.addEventListener('input', () => {
			this.toggleDistrictState();
		});
	}

	/* ---------- RESTORE ---------- */
	restoreFromGet() {
		const cityId = this.params.get(this.cityName);
		if (!cityId) return;

		const radio = document.querySelector(
			`[name="${this.cityName}"][value="${cityId}"]`
		);

		if (radio) {
			radio.checked = true;
			this.renderDistricts(cityId);
		}

		const districts = this.params.getAll(this.districtName);
		districts.forEach(val => {
			const cb = document.querySelector(
				`[name="${this.districtName}"][value="${val}"]`
			);
			if (cb) cb.checked = true;
		});
	}

	/* ---------- STATE ---------- */
	toggleDistrictState(enable = false) {
		if (!this.districtGroup) return;

		if (enable || document.querySelector(`[name="${this.cityName}"]:checked`)) {
			this.districtGroup.classList.remove('disabled');
		} else {
			this.districtGroup.classList.add('disabled');
			this.districtContainer && (this.districtContainer.innerHTML = '');
		}
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




// Home page/ Telegram Page
class GetCitiesForSelect {
	constructor({
		jsonSelector = '#city-rayon',
		citySelect = '#city-select',
		districtSelect = '#district-select'
	} = {}) {
		this.jsonEl = document.querySelector(jsonSelector);
		if (!this.jsonEl) return;

		this.data = JSON.parse(this.jsonEl.textContent);

		this.citySelect = document.querySelector(citySelect);
		this.districtSelect = document.querySelector(districtSelect);

		if (!this.citySelect || !this.districtSelect) return;

		this.init();
	}

	init() {
		this.renderCities();
		this.disableDistricts();
		this.bindSelecterEvents();
	}

	/* ---------- CITIES ---------- */
	renderCities() {
		this.citySelect.innerHTML = '';
		this.citySelect.appendChild(new Option('Усі', ''));

		this.data.cities.forEach(city => {
			this.citySelect.appendChild(
				new Option(city.name, city.id)
			);
		});

		this.refreshSelecter(this.citySelect);
	}

	/* ---------- DISTRICTS ---------- */
	renderDistricts(cityId) {
		this.districtSelect.innerHTML = '';
		this.districtSelect.appendChild(new Option('Усі', ''));

		Object.values(this.data.rayons)
			.filter(r => String(r.city_id) === String(cityId))
			.forEach(rayon => {
				this.districtSelect.appendChild(
					new Option(rayon.name, rayon.url)
				);
			});

		this.districtSelect.disabled = false;
		this.districtSelect.classList.remove('disabled');

		this.refreshSelecter(this.districtSelect);
	}

	clearDistricts() {
		this.districtSelect.innerHTML = '';
		this.districtSelect.appendChild(new Option('Усі', ''));
		this.disableDistricts();
		this.refreshSelecter(this.districtSelect);
	}

	disableDistricts() {
		this.districtSelect.disabled = true;
		this.districtSelect.classList.add('disabled');
	}

	/* ---------- SELECTER INTEGRATION ---------- */
	bindSelecterEvents() {
		if (!window.__selecterInstances) return;

		const cityInstance = window.__selecterInstances.find(
			i => i.select === this.citySelect
		);

		if (!cityInstance) return;

		const originalOnChange = cityInstance.settings.onChange;

		cityInstance.settings.onChange = (selectEl, settings, value) => {
			if (!value) {
				this.clearDistricts();
			} else {
				this.renderDistricts(value);
			}

			if (typeof originalOnChange === 'function') {
				originalOnChange(selectEl, settings, value);
			}
		};
	}

	refreshSelecter(selectEl) {
		if (!window.__selecterInstances) return;

		const instance = window.__selecterInstances.find(
			i => i.select === selectEl
		);

		instance?.refresh();
	}
}

document.addEventListener('DOMContentLoaded', () => {
	window.__selecterInstances = initSelecter('.select');

	new GetCitiesForSelect();
});
