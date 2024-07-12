
function getBase64(file, loaderMainWrap) {
	var reader = new FileReader();
	reader.readAsDataURL(file);
	console.warn(file)
	if (file.type.startsWith("image/")) {
		reader.onload = function () {
			appendImage(file.name, reader.result, loaderMainWrap);
		};
		reader.onerror = function (error) {
			console.error('Error: ', error);
		};
	} else if (file.type.startsWith("video/")) {
		reader.onload = function () {
			appendVideo(file.name, reader.result, loaderMainWrap);
		};
		reader.onerror = function (error) {
			appendError(file.name,'load', loaderMainWrap);
		};
	} else {
		appendError(file.name, 'type', loaderMainWrap);
	};
};

function appendImage(name, src, loaderMainWrap){
	let coverEl = document.createElement("div");
			coverEl.classList.add('files-cover');
	let imgEl = document.createElement('img');
			imgEl.src = src;
	coverEl.appendChild(imgEl);
	let nameEl = document.createElement("div");
			nameEl.classList.add('file-name');
			nameEl.appendChild(document.createTextNode(name));
	coverEl.appendChild(nameEl);
	loaderMainWrap.appendChild(coverEl);
};

function appendVideo(name, src, loaderMainWrap){
	let coverEl = document.createElement("div");
			coverEl.classList.add('files-cover');
	let videoEl = document.createElement('video')
			videoEl.src = src
			videoEl.controls = true;
	coverEl.appendChild(videoEl);
	let nameEl = document.createElement("div");
			nameEl.classList.add('file-name');
			nameEl.appendChild(document.createTextNode(name));
	coverEl.appendChild(nameEl);
	loaderMainWrap.appendChild(coverEl)
};

function appendError(name, type, loaderMainWrap){
	let errorStatus = {
		load: 'Помилка завантаження',
		type: 'Не підходящий формат для фото чи відео'
	}
	let coverEl = document.createElement("div");
			coverEl.classList.add('error-cover');
			coverEl.classList.add('files-cover');
			coverEl.appendChild(document.createTextNode(errorStatus[type]));
	let nameEl = document.createElement("div");
			nameEl.classList.add('file-name');
			nameEl.appendChild(document.createTextNode(name));
	coverEl.appendChild(nameEl);
	loaderMainWrap.appendChild(coverEl);
};

function handleFiles(){
	let files = this.files;
	let loaderMainWrap = null;
	for (var i = 0; i < files.length; i++) {
		getBase64(files[i], this.parentElement);
	}
}

function hasClass(element, className) {
	return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}

document.querySelectorAll('[data-loader]').forEach(function(loaderCover, i){
	coverChildren = loaderCover.children;
	for (var i = 0; i < coverChildren.length; i++) {
		if (coverChildren[i].hasAttribute('data-label')) {
			let fileLoader = coverChildren[i];
					fileLoader.ondragover = function (e) {
						e.preventDefault();
						fileLoader.classList.add('hover')
					};
					fileLoader.ondragend = function (e) {
						e.preventDefault();
						fileLoader.classList.remove('hover');
					};
					fileLoader.ondrop = function (e) {
						e.preventDefault();
						fileLoader.classList.remove('hover');
						for (var i = 0; i < e.dataTransfer.files.length; i++) {
							getBase64(e.dataTransfer.files[i], loaderCover);
						}
					}
		} else if (coverChildren[i].hasAttribute('data-file')) {
			let inputElement = coverChildren[i];
					inputElement.addEventListener("change", handleFiles, false);
		} else {
			appendError('type', loaderCover);
		}
	}

})













