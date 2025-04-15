var cropImage, cropperCoords, filesExt, imageSave, inputs, savedCaption, savedImg, savedStorage;

cropImage = void 0;

cropperCoords = void 0;

filesExt = ['jpg', 'png', 'jpeg'];

imageSave = void 0;

savedImg = void 0;

savedStorage = void 0;

savedCaption = void 0;

inputs = $('.changed-info').find('select, input');

$('#personPhoto').on('change', function(e) {
  var canvasData, cropBoxData, cropper, files, fr, image, parts, self, src, storage;
  if ($('#profileImage').find('img').length > 0) {
    storage = window.localStorage;
    savedStorage = storage.getItem('userpic');
    savedImg = $('#genPhoto').find('img').attr('src');
    savedCaption = $('#personPhoto').siblings('.file-name').text().trim();
  }
  parts = $(this).val().toLowerCase().split('.');
  if (filesExt.join().search(parts[parts.length - 1]) === -1) {
    $(this).siblings('.alert').text('Only png/jpg files allowed').css('opacity', '1');
    $(this).siblings('.file-name').css('border', '1px solid #FF5E5E').css('color', '#FF5E5E');
    self = this;
    setTimeout((function() {
      $(self).siblings('.alert').css('opacity', '0');
      $(self).siblings('.file-name').css('border', '').css('color', '#5d6778');
      $(self).siblings('.file-name').text('png, .jpg, .jpeg, up to 2MB');
      $(self).val('');
    }), 3000, self);
    return;
  } else if (this.files[0].size > 2100000) {
    $(this).siblings('.alert').text('Only files up to 2MB allowed').css('opacity', '1');
    $(this).siblings('.file-name').css('border', '1px solid #FF5E5E').css('color', '#FF5E5E');
    self = this;
    setTimeout((function() {
      $(self).siblings('.alert').css('opacity', '0');
      $(self).siblings('.file-name').css('border', '').css('color', '#5d6778');
      $(self).siblings('.file-name').text('png, .jpg, .jpeg, up to 2MB');
      $(self).val('');
    }), 3000, self);
    return;
  }
  canvasData = void 0;
  cropBoxData = void 0;
  cropper = void 0;
  files = void 0;
  fr = void 0;
  image = void 0;
  src = void 0;
  self = this;
  files = e.target.files;
  fr = new FileReader;
  fr.onload = function() {
    $('#image').attr('src', fr.result);
    if ($(self).val() && $(self).data('popup').length > 0) {
      src = $(self).attr('data-popup');
      image = document.getElementById('image');
      cropBoxData = void 0;
      canvasData = void 0;
      cropper = void 0;
      setTimeout(((function(_this) {
        return function() {
          $.magnificPopup.open({
            items: {
              src: "#crop-photo-popup"
            },
            closeMarkup: '<button class="mfp-close btn btn-grey btn-round" title="Close (Esc)"><i class="icon icon-close"></i></button>',
            type: 'inline',
            closeOnBgClick: false
          });
          $.magnificPopup.instance.st.callbacks = {
            close: function() {
              cropBoxData = cropper.getCropBoxData();
              canvasData = cropper.getCanvasData();
              cropper.destroy();
            }
          };
        };
      })(this)), 50);
      setTimeout(((function(_this) {
        return function() {
          cropper = new Cropper(image, {
            aspectRatio: 1 / 1,
            scalable: false,
            zoomable: false,
            zoomOnTouch: false,
            zoomOnWheel: false,
            autoCropArea: .5,
            crop: function(coord) {
              cropperCoords = coord;
              return coord;
            },
            ready: function() {
              cropper.setCropBoxData(cropBoxData).setCanvasData(canvasData);
            }
          });
        };
      })(this)), 55);
    }
  };
  fr.readAsDataURL(files[0]);
});

cropImage = function(image, coord) {
  var bbox, canvas, ctx;
  bbox = void 0;
  canvas = void 0;
  ctx = void 0;
  canvas = document.createElement('canvas');
  ctx = canvas.getContext('2d');
  bbox = image.getBoundingClientRect();
  canvas.width = coord.detail.width;
  canvas.height = coord.detail.height;
  ctx.drawImage(image, -coord.detail.x, -coord.detail.y, image.width, image.height);
  return canvas.toDataURL().replace(new RegExp('data:image/png;base64,', 'gim'), '');
};

$('#profileImage').click(function() {
  var canvasData, cropBoxData, cropper, image, imageSrc;
  image = document.getElementById('image');
  imageSrc = localStorage.getItem('userpic');
  if (localStorage['userpic']) {
    $(image).attr('src', imageSrc);
    cropBoxData = void 0;
    canvasData = void 0;
    cropper = void 0;
    setTimeout(((function(_this) {
      return function() {
        $.magnificPopup.open({
          items: {
            src: "#crop-photo-popup"
          },
          closeMarkup: '<button class="mfp-close btn btn-grey btn-round" title="Close (Esc)"><i class="icon icon-close"></i></button>',
          type: 'inline',
          closeOnBgClick: false
        });
        $.magnificPopup.instance.st.callbacks = {
          close: function() {
            cropBoxData = cropper.getCropBoxData();
            canvasData = cropper.getCanvasData();
            cropper.destroy();
          }
        };
      };
    })(this)), 10);
    setTimeout(((function(_this) {
      return function() {
        cropper = new Cropper(image, {
          aspectRatio: 1 / 1,
          scalable: false,
          zoomable: false,
          zoomOnTouch: false,
          zoomOnWheel: false,
          autoCropArea: .5,
          crop: function(coord) {
            cropperCoords = coord;
            return coord;
          },
          ready: function() {
            cropper.setCropBoxData(cropBoxData).setCanvasData(canvasData);
          }
        });
      };
    })(this)), 15);
  }
});

$('[data-photo-remove]').click(function() {
  var cropedUserPhoto, storage;
  $('.userpic').find('img').addClass('hidden');
  $(this).addClass('hidden');
  $('#personPhoto').siblings('.file-name').html('png, .jpg, .jpeg, up to 2MB');
  cropedUserPhoto = 'remove_image';
  savedStorage = window.localStorage['userpic'];
  storage = window.localStorage;
  storage.removeItem('userpic');
});

$('#cancelGereral').click(function() {
  var storage;
  $.magnificPopup.close();
  storage = window.localStorage;
  storage.setItem('userpic', savedStorage);
  $('#genPhoto').find('img').removeClass`hidden`;
  $('[data-photo-remove]').removeClass`hidden`;
  if ($('#profileImage').find('img').hasClass('hidden')) {
    $('.userpic').find('img').removeClass('hidden');
    $('[data-photo-remove]').removeClass('hidden');
  } else {
    $('#profileImage').find('img').attr('src', savedImg);
    $('#personPhoto').siblings('.file-name').html(savedCaption);
  }
});

$('#saveGeneral').click(function() {
  if ($('#profileImage').find('img').hasClass('hidden')) {
    $('#profileImage').find('img').attr('src', '');
  }
  $('html,body').animate({
    scrollTop: $('body').offset().top
  }, 500);
});

$('#cropSave').click(function() {
  var imageSrc, storage;
  imageSrc = $('#image').attr('src');
  storage = window.localStorage;
  storage.setItem('userpic', imageSrc);
  $('.userpic').find('img').removeClass('hidden');
  $('[data-photo-remove]').removeClass('hidden');
  $.magnificPopup.close();
  $('#preloader').removeClass('hidden');
  setTimeout(((function(_this) {
    return function() {
      var i, input, len;
      $('#preloader').addClass('hidden');
      for (i = 0, len = inputs.length; i < len; i++) {
        input = inputs[i];
        $('.changed-info').find('#' + $(input).attr('id')).val($(input).val());
      }
      $.magnificPopup.open({
        items: {
          src: "#edit-gereral-popup"
        },
        closeMarkup: '<button class="mfp-close btn btn-grey btn-round" title="Close (Esc)"><i class="icon icon-close"></i></button>',
        type: 'inline',
        closeOnBgClick: true
      });
    };
  })(this)), 270);
});

$('#cropCancel').click(function() {
  $.magnificPopup.close();
  if ($('#profileImage').find('img').length === 0) {
    $('#personPhoto').siblings('.file-name').html('png, .jpg, .jpeg, up to 2MB');
  }
  setTimeout(((function(_this) {
    return function() {
      var i, input, len;
      $.magnificPopup.open({
        items: {
          src: "#edit-gereral-popup"
        },
        closeMarkup: '<button class="mfp-close btn btn-grey btn-round" title="Close (Esc)"><i class="icon icon-close"></i></button>',
        type: 'inline',
        closeOnBgClick: true
      });
      for (i = 0, len = inputs.length; i < len; i++) {
        input = inputs[i];
        $('.changed-info').find('#' + $(input).attr('id')).val($(input).val());
      }
    };
  })(this)), 70);
});
