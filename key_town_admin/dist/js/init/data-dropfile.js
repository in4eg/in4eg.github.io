var dropFile, formatBytes, handleImage, handleVideo, stateChange, uploadProgress;

uploadProgress = function(event) {
	var percent;
	percent = parseInt(event.loaded / event.total * 100);
	dropZone.text('Загрузка: ' + percent + '%');
};

stateChange = function(event) {
	if (event.target.readyState === 4) {
		if (event.target.status === 200) {
			dropZone.text('Files uploaded success');
		} else {
			dropZone.text('Error! Try again');
			dropZone.addClass('error');
		}
	}
};

dropFile = function(dropZone, type, maxSize) {
	var maxFileSize, sizeCaption;
	maxFileSize = maxSize;
	if (type === 'image') {
		sizeCaption = '5';
	} else if (type === 'video') {
		sizeCaption = '20';
	}
	if (window.FileReader) {
		dropZone.ondragover = function() {
			$(dropZone).addClass('hover');
			return false;
		};
		dropZone.ondragleave = function() {
			$(dropZone).removeClass('hover');
			return false;
		};
		dropZone.ondrop = function(event) {
			var file, i, j, len, parent, reader, ref;
			event.preventDefault();
			$(dropZone).removeClass('hover');
			ref = event.dataTransfer.files;
			for (i = j = 0, len = ref.length; j < len; i = ++j) {
				file = ref[i];
				parent = $(dropZone).next('[data-file-name]');
				if (file.size > maxFileSize) {
					parent.append("<div class=\"file-item \"> <div class=\"error-caption\"> <div class=\"caption-inside\"> Too Large File <div class=\"image-size error\">" + (formatBytes(file.size)) + "</div> </div> </div> </div>");
					return false;
				} else if (type === 'image' && file.type === 'image/png' || type === 'image' && file.type === 'image/jpeg') {
					$(dropZone).removeClass('error').addClass('drop');
					$(dropZone).find('.label-lead').html('Loaded success!');
					reader = new FileReader;
					reader.onload = function(e) {
						parent.append("<div class=\"file-item\"> <button type=\"button\" class=\"btn btn-link remove-btn\"> <i class=\"icon icon-rubbish\"></i> </button> <figure class=\"image-cover\"><img src=\"" + e.target.result + "\" alt=\"model\"></figure> </div>");
						if ($(window).width() > 768) {
							parent.scrollTop(parent.prop("scrollHeight"));
							$('.scrolled[data-xs-disabled]').perfectScrollbar();
							$('.scrolled').perfectScrollbar('update');
						}
					};
					reader.readAsDataURL(event.dataTransfer.files[i]);
				} else if (type === 'video' && file.type === "video/mp4" || type === 'video' && file.type === "video/ogg") {
					parent.append("<div class=\"video-item\"> <i class=\"icon icon-video-camera camera-icon\"></i> <div class=\"video-title\">" + file.name + "</div> <div class=\"video-size\">" + (formatBytes(file.size)) + "</div> <button type=\"button\" class=\"btn btn-link remove-btn\"> <i class=\"icon icon-rubbish\"></i> </button> </div>");
					$(dropZone).removeClass('error').addClass('drop');
					$(dropZone).find('.label-lead').html('Loaded success!');
					if ($(window).width() > 768) {
						parent.scrollTop(parent.prop("scrollHeight"));
						$('.scrolled[data-xs-disabled]').perfectScrollbar();
						$('.scrolled').perfectScrollbar('update');
					}
				} else {
					$(dropZone).find('.label-lead').html('Please download the file in correct format');
					$(dropZone).addClass('error');
					return false;
				}
			}
		};
	} else {
		$(dropZone).find('.label-lead').html('Click on label area');
	}
};

$('[data-drop-file]').each(function(i, el) {
	var maxSize, type;
	type = $(el).data('drop-file');
	maxSize = $(el).find('[data-file-size]').data('file-size');
	dropFile(el, type, maxSize);
});

handleImage = function(event, parent) {
	var file, i, j, len, maxImageSize, reader, ref;
	maxImageSize = $(event.target).data('file-size');
	ref = event.target.files;
	for (i = j = 0, len = ref.length; j < len; i = ++j) {
		file = ref[i];
		if (file.size > maxImageSize) {
			parent.append("<div class=\"file-item \"> <div class=\"error-caption\"> <div class=\"caption-inside\"> Too Large File <div class=\"image-size error\">" + (formatBytes(file.size)) + "</div> </div> </div> </div>");
		} else {
			reader = new FileReader;
			reader.onload = function(e) {
				parent.append("<div class=\"file-item \"> <button type=\"button\" class=\"btn btn-link remove-btn\"> <i class=\"icon icon-rubbish\"></i> </button> <figure class=\"image-cover\"><img src=\"" + e.target.result + "\" alt=\"model\"></figure> </div>");
				if ($(window).width() > 768) {
					parent.scrollTop(parent.prop("scrollHeight"));
					$('.scrolled[data-xs-disabled]').perfectScrollbar();
					$('.scrolled').perfectScrollbar('update');
				}
				parent.prev('[data-drop-file]').addClass('drop');
			};
			reader.readAsDataURL(event.target.files[i]);
		}
	}
};

handleVideo = function(event, parent) {
	var file, i, j, len, maxVideoSize, ref, sizeCaption;
	maxVideoSize = $(event.target).data('file-size');
	sizeCaption = '20';
	ref = event.target.files;
	for (i = j = 0, len = ref.length; j < len; i = ++j) {
		file = ref[i];
		if (file.size > maxVideoSize) {
			$(event.target).parent('.drop-file').find('.label-lead').html('File too large! Max file size ' + sizeCaption + ' MB');
			$(event.target).parent('.drop-file').addClass('error');
			return;
		} else {
			$(event.target).parent('.drop-file').removeClass('error').addClass('drop');
			$(event.target).parent('.drop-file').find('.label-lead').html('Loaded success!');
			parent.append("<div class=\"video-item\"> <i class=\"icon icon-video-camera camera-icon\"></i> <div class=\"video-title\">" + file.name + "</div> <div class=\"video-size\">" + (formatBytes(file.size)) + "</div> <button type=\"button\" class=\"btn btn-link remove-btn\"> <i class=\"icon icon-rubbish\"></i> </button> </div>");
		}
		if ($(window).width() > 768) {
			parent.scrollTop(parent.prop("scrollHeight"));
			$('.scrolled[data-xs-disabled]').perfectScrollbar();
			$('.scrolled').perfectScrollbar('update');
		}
		parent.prev('[data-drop-file]').addClass('drop');
	}
};

$('[data-drop-file]').each(function(i, el) {
	var parent, type;
	type = $(el).data('drop-file');
	parent = $(el).next('[data-file-name]');
	$(el).on('input', function(e) {
		if (type === 'image') {
			handleImage(e, parent);
		} else if (type === 'video') {
			handleVideo(e, parent);
		}
	});
});

formatBytes = function(bytes) {
	if (bytes < 1024) {
		return bytes + ' Bytes';
	} else if (bytes < 1048576) {
		return (bytes / 1024).toFixed(3) + ' KB';
	} else if (bytes < 1073741824) {
		return (bytes / 1048576).toFixed(3) + ' MB';
	} else {
		return (bytes / 1073741824).toFixed(3) + ' GB';
	}
};
