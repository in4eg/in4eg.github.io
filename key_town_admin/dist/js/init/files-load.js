
function getBase64(file) {
	var reader = new FileReader();
	var errorStatus = {
		errorLoad: 'Помилка завантаження',
		errorType: 'Не підходящий формат для фото чи відео'
	}

	reader.readAsDataURL(file);
	if (file.type.startsWith("image/")) {
		reader.onload = function () {
			appendImage(reader.result);
		};
		reader.onerror = function (error) {
			console.error('Error: ', error);
		};
	} else if (file.type.startsWith("video/")) {
		reader.onload = function () {
			appendVideo(reader.result);
		};
		reader.onerror = function (error) {
			console.error('Error: ', error);
			appendError(errorStatus.errorLoad);
		};
	} else {
		console.error('Error: ', errorStatus.errorType);
		appendError(errorStatus.errorType);
	};
};

function appendImage(src){
	let coverEl = document.createElement("div");
			coverEl.classList.add('files-cover');
	let imgEl = document.createElement('img');
			imgEl.src = src;
	coverEl.appendChild(imgEl);
	loaderMainWrap.appendChild(coverEl);
};

function appendVideo(src){
	let coverEl = document.createElement("div");
			coverEl.classList.add('files-cover');
	let videoEl = document.createElement('video')
			videoEl.src = src
			videoEl.controls = true;
	coverEl.appendChild(videoEl);
	loaderMainWrap.appendChild(coverEl)
};

function appendError(text){
	let coverEl = document.createElement("div");
			coverEl.classList.add('error-cover');
			coverEl.appendChild(document.createTextNode(text));
	loaderMainWrap.appendChild(coverEl);
};

function handleFiles(){
	let files = this.files;
	for (var i = 0; i < files.length; i++) {
		getBase64(files[i]);
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
							getBase64(e.dataTransfer.files[i]);
						}
					}
		} else if (coverChildren[i].hasAttribute('data-file')) {
			let inputElement = coverChildren[i];
					inputElement.addEventListener("change", handleFiles, false);

		}
	}

})













