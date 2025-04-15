$(document).on('click', '[data-remove]', function(event) {
  $(document).find('[data-id="' + blockToRemove + '"]').remove();
  if ($(this).parents('[data-packery]')) {
    packeryInit();
  }
  $('.popup').each(function(i, popup) {
    var called;
    called = $(popup);
    $('html,body').css('width', '').removeClass('overlayed');
    called.removeClass('active');
    setTimeout(function() {
      called.hide();
      if (called.data('onclose') && window[called.data('onclose')]) {
        return window[called.data('onclose')](called);
      }
    }, 300);
  });
});
