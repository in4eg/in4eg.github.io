$(document).ready(function() {
  var block;
  block = $('#text_h').height();
  if (block < 200) {
    console.log('TRUE');
    $('#sum .read-more').css('display', 'none');
  }
});
