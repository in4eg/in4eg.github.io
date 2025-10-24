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
