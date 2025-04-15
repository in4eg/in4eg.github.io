var filesExt;

filesExt = ['jpg', 'png', 'jpeg'];

$('#sertifPhoto').change(function() {
  var parts, self;
  parts = $(this).val().toLowerCase().split('.');
  if (filesExt.join().search(parts[parts.length - 1]) === -1) {
    $(this).siblings('.alert').css('opacity', '1');
    $(this).siblings('.file-name').css('border', '1px solid #FF5E5E');
    self = this;
    setTimeout((function() {
      $(self).siblings('.alert').css('opacity', '0');
      $(self).siblings('.file-name').css('border', '1px solid #d8dbe6');
      $(self).siblings('.file-name').text('Your document');
      $(self).val('');
    }), 3000, self);
  }
});
