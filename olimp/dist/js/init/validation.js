// validation
window.addEventListener("DOMContentLoaded", function() {

	class ValidationForm {

		constructor(form) {
			this.input_success_class = 'success';
			this.input_error_class = 'error';
			this.input_focus_class = 'focused';
			this.form = form;

			this.setFocusedClass = function(inputParent, hasValue){
				if (hasValue) {
					inputParent.classList.add(this.input_focus_class);
				} else {
					inputParent.classList.remove(this.input_focus_class);
				}
			};

			this.onInputKeyDown = function(){
				if (!this.event || !this.form) return;
				let event = this.event;
				let form = this.form;
				let input = event.srcElement.activeElement;
				let inputType = input.classList.contains('phone') ? 'phone' : input.classList.contains('email') ? 'email' : '';

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

				waitForFinalEvent(function(){
					form.setFocusedClass(input.parentElement, input.value.length);

					switch (inputType) {
						case 'phone':
							form.setPhoneMask(event, input);
							break;
						case 'email':
							form.validateEmail(event, input);
							break;
						default:
							// for textarea and inputs text
							form.validateByTextLength(input);
					}
				}, 5);
			};

			this.onFormSubmit = function(data){
				let event = data.event;
				let form = data.form;
				let formNode = data.element;

				let formInputs = formNode.querySelectorAll('.input');
				let formTextareas = formNode.querySelectorAll('.textarea');
				let formSelects = formNode.querySelectorAll('.select');

				if (formInputs && formInputs.length) {
					for (let i = 0; i < formInputs.length; i++) {
						let input = formInputs[i];
						form.validateByTextLength(input);
					};
				};

				if (formTextareas && formTextareas.length) {
					for (let t = 0; t < formTextareas.length; t++) {
						let textArea = formTextareas[t];
						form.validateByTextLength(textArea);
					};
				};

				if (formSelects && formSelects.length) {
					for (let s = 0; s < formSelects.length; s++) {
						let formSelect = formSelects[s];
						form.validateBySelectOptions(formSelect);
					};
				};

				// callback
				if (window.onContactFormSubmit) {
					window.onContactFormSubmit(this);
				};
			};
		}

		isValidEmail(email){
			let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		};

		setValidationClass(element, validationSuccess){
			if (validationSuccess) {
				element.classList.add(this.input_success_class);
				element.classList.remove(this.input_error_class);
			} else {
				element.classList.add(this.input_error_class);
				element.classList.remove(this.input_success_class);
			}
		};

		setPhoneMask(event, input){
			let keyCode = event.keyCode;
			let pos = input.selectionStart;
			if (pos < 3) event.preventDefault();
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
			if (!reg.test(input.value) || input.value.trim().length < 5 || keyCode > 47 && keyCode < 58) {
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
			let minlength = parseInt(field.dataset.minlength) || 2;
			this.setValidationClass(field.parentElement,field.value.length >= minlength);
		};

		validateBySelectOptions(select){
			let defaultOption = select.querySelector('[disabled]');
			this.setValidationClass(select.parentElement,select.value !== defaultOption.innerHTML);
		};

		onSelectChange(){
			let event = this;
			let select = event.srcElement.activeElement;
			validateBySelectOptions(select);
		};

		init() {
			let formInputs = this.form.querySelectorAll('.input');
			let formTextareas = this.form.querySelectorAll('.textarea');
			let formSelects = this.form.querySelectorAll('.select');

			if (formInputs && formInputs.length) {
				for (let i = 0; i < formInputs.length; i++) {
					let input = formInputs[i];
					this.setFocusedClass(input.parentElement, input.value.length);
					input.addEventListener('keydown', this.onInputKeyDown.bind({event: event, form: this}), {passive: true});
				};
			};

			if (formTextareas && formTextareas.length) {
				for (let t = 0; t < formTextareas.length; t++) {
					let textArea = formTextareas[t];
					this.setFocusedClass(textArea.parentElement, textArea.value.length);
					textArea.addEventListener('keydown', this.onInputKeyDown.bind({event: event, form: this}), {passive: true});
				};
			};

			if (formSelects && formSelects.length) {
				for (let s = 0; s < formSelects.length; s++) {
					let formSelect = formSelects[s];
					this.setFocusedClass(formSelect.parentElement, formSelect.value.length);
					formSelect.addEventListener('keydown', this.onInputKeyDown.bind({event: event, form: this}), {passive: true});
				};
			};

			let form = this;

			this.form.addEventListener('click', function(event){
				let submit = event.target.closest("[type='submit']");
				if (submit) {
					form.onFormSubmit({event: event, form: form, element: this});
				}
			}, {passive: true});

		};
	};

	let allValidateForms = document.querySelectorAll('.contact-form');

	for (i = 0; i < allValidateForms.length; i++) {
		const newForm = new ValidationForm(allValidateForms[i]);
		newForm.init();
	}

	window.initValidation = function(form) {
		const newForm = new ValidationForm(form);
		newForm.init();
	}
});
