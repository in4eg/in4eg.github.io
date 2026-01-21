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
		if (this.root && this.root.parentNode) {
			this.root.parentNode.removeChild(this.root);
		}
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
			li.className =
				(option.disabled ? 'disabled ' : '') +
				(option.selected ? 'active' : '');

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
		this._setFocused(true);
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
			li.classList.toggle('active');
			if (checkbox) {
				checkbox.checked = li.classList.contains('active');
			}
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
			} else {
				opt.selected = same ? !opt.selected : opt.selected;
			}
		});

		if (typeof this.settings.onChange === 'function') {
			this.settings.onChange(this.select, this.settings, value);
		}
	}

	_updateAnchorText() {
		const opt = this.select.selectedOptions[0];
		this.anchor.textContent = opt ? opt.textContent.trim() : '';
		this.close();
	}

	_setFocused(state) {
		const group = this.select.closest('.form-group');
		if (!group) return;
		group.classList.toggle('focused', state);
	}
}

function initSelecter(target, options) {
	let nodes = [];

	if (typeof target === 'string') {
		nodes = Array.from(document.querySelectorAll(target));
	} else if (target instanceof HTMLSelectElement) {
		nodes = [target];
	} else if (NodeList.prototype.isPrototypeOf(target) || Array.isArray(target)) {
		nodes = Array.from(target);
	}

	const instances = nodes.map((el) => new Selecter(el, options));
	return instances;
}

// ВИКЛЮЧАЄМО city / district/ sorting, щоб не було дублювання по data-атрибуту skip
const instances = initSelecter(
	Array.from(document.querySelectorAll('.select')).filter(el => {
		return el.dataset.selecter !== 'skip';
	}),
	{
		onChange: (selectEl, settings, lastValue) => {
			console.log(
				'changed:',
				lastValue,
				'selected:',
				Array.from(selectEl.selectedOptions).map(o => o.value)
			);
		}
	}
);

