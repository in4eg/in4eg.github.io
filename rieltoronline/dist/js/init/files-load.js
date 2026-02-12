(function(){
	function isImage(file) {
		return file && file.type && file.type.startsWith('image/');
	}

	function readFileAsDataURL(file) {
		return new Promise(function(resolve, reject){
			const reader = new FileReader();
			reader.onload = function() { resolve(reader.result); };
			reader.onerror = function(err) { reject(err); };
			reader.readAsDataURL(file);
		});
	}

	document.querySelectorAll('.userpic').forEach(function(userpic){
		const uploadBox = userpic.querySelector('[data-upload]');
		const label = userpic.querySelector('[data-label]');
		const input = userpic.querySelector('[data-file]');
		if (!uploadBox || !label || !input) return;

		const existingImg = uploadBox.querySelector('img');
		const originalSrc = existingImg ? existingImg.src : '';

		function removeButtonRemove() {
			const prev = uploadBox.querySelector('.userpic-remove');
			if (prev) prev.remove();
		}

		function addRemoveButton() {
			removeButtonRemove();
			const btn = document.createElement('button');
			btn.type = 'button';
			btn.className = 'userpic-remove';
			btn.setAttribute('aria-label', 'Remove photo');
			btn.textContent = '×';
			btn.addEventListener('click', function(e){
				e.stopPropagation();
				if (existingImg) existingImg.src = originalSrc;
				else uploadBox.innerHTML = originalSrc ? ('<img src="' + originalSrc + '" class="image">') : '';
				input.value = '';
				removeButtonRemove();
				// reset header icon if present
				resetHeaderUserPhoto();
			});
			uploadBox.appendChild(btn);
		}

		async function handleFile(file) {
			if (!file) return;
			if (!isImage(file)) {
				uploadBox.classList.add('file-error');
				setTimeout(()=>uploadBox.classList.remove('file-error'), 1500);
				return;
			}
			try {
				const dataUrl = await readFileAsDataURL(file);
				let img = uploadBox.querySelector('img');
				if (!img) {
					img = document.createElement('img');
					img.className = 'image';
					uploadBox.innerHTML = '';
					uploadBox.appendChild(img);
				}
				img.src = dataUrl;
				img.style.opacity = "1";
				addRemoveButton();
				updateHeaderUserPhoto(dataUrl);
			} catch (err) {
				console.error('File read error', err);
			}
		}

		input.addEventListener('change', function(){
			const file = input.files && input.files[0];
			handleFile(file);
		});

		label.ondragover = function(e){
			e.preventDefault();
			label.classList.add('hover');
		};
		label.ondragleave = function(e){
			e.preventDefault();
			label.classList.remove('hover');
		};
		label.ondrop = function(e){
			e.preventDefault();
			label.classList.remove('hover');
			const dt = e.dataTransfer;
			if (!dt) return;
			const file = dt.files && dt.files[0];
			if (file) {
				try {
					const dataTransfer = new DataTransfer();
					dataTransfer.items.add(file);
					input.files = dataTransfer.files;
				} catch (err) {
					console.warn('Could not set input.files programmatically', err);
				}
				handleFile(file);
			}
		};

		uploadBox.addEventListener('click', function(){
			input.click();
		});
	});

	// === HEADER PHOTO SWAP ===
	function updateHeaderUserPhoto(src) {
		const header = document.getElementById('mainHeader');
		if (!header) return;
		const userLink = header.querySelector('#userLink');
		if (!userLink) return;
		const existingImg = userLink.querySelector('img');
		const icon = userLink.querySelector('i.icon-user');
		if (existingImg) {
			existingImg.src = src;
		} else {
			if (icon) icon.remove();
			const img = document.createElement('img');
			img.src = src;
			img.alt = 'user';
			img.className = 'userpic';
			userLink.appendChild(img);
		}
	}

	function resetHeaderUserPhoto() {
		const header = document.getElementById('mainHeader');
		if (!header) return;
		const userLink = header.querySelector('#userLink');
		if (!userLink) return;
		const img = userLink.querySelector('img');
		if (img) img.remove();
		if (!userLink.querySelector('i.icon-user')) {
			const icon = document.createElement('i');
			icon.className = 'icon icon-user';
			userLink.appendChild(icon);
		}
	}
})();
