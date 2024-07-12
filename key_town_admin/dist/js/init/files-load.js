function readfiles(files) {
		console.warn(files)

	for (var i = 0; i < files.length; i++) {
		// document.getElementById('fileDragName').value = files[i].name
		// document.getElementById('fileDragSize').value = files[i].size
		// document.getElementById('fileDragType').value = files[i].type
		// reader = new FileReader();
		// reader.onload = function(event) {
		// 	document.getElementById('fileDragImage').setAttribute('src', event.target.result)
		// }
		// reader.readAsDataURL(files[i]);
	}
}

var fileLoader = document.getElementById('fileLoader');
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
			readfiles(e.dataTransfer.files);
		}

function getBase64(file) {
	var reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function () {
		console.log(reader.result);
	};
	reader.onerror = function (error) {
		console.log('Error: ', error);
	};
}

function handleFiles() {
	for (var i = 0; i < this.files.length; i++) {
		console.warn(getBase64(this.files[i]))
	}
}

var inputElement = document.getElementById("editObjFiles");
			inputElement.addEventListener("change", handleFiles, false);
