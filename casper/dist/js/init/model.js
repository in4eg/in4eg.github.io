$(document).ready(function() {
  $('.model-wrapper .point').click(function(e) {
    if ($(e.target).closest('.tooltip').length === 0) {
      $('.model-wrapper .point').not(this).removeClass('opened');
      $(this).toggleClass('opened');
    }
  });
  $('.model-wrapper .point .close').click(function(e) {
    $(this).closest('.point').removeClass('opened');
  });
});
