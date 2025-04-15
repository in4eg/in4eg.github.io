$(document).ready(function() {
  var contactUsMessage, height, i, inputs;
  $('textarea').focus(function() {
    $('.txta-none').hide("slow");
  });
  $('textarea').focusout(function() {
    if ($(this).val() === '') {
      $('.txta-none').show('slow');
    }
  });
  inputs = $('.input');
  i = 0;
  while (i < inputs.length) {
    if ($(inputs[i]).val().trim().length !== 0) {
      $(inputs[i]).addClass('labeled');
    } else {
      $(inputs[i]).removeClass('labeled');
    }
    i++;
  }
  contactUsMessage = $('#contactUsMessage')[0];
  contactUsMessage.value = '';
  autosize($(contactUsMessage));
  height = $(contactUsMessage).height();
  $(contactUsMessage).on('autosize:resized', function() {
    var mBottom;
    if ($(this).height() > height) {
      mBottom = $($('#contactUsForm')[0]).css('marginBottom').slice(0, -2) - 21;
      $($('#contactUsForm')[0]).css('margin-bottom', mBottom + 'px');
    } else {
      mBottom = +$($('#contactUsForm')[0]).css('marginBottom').slice(0, -2) + 21;
      $($('#contactUsForm')[0]).css('margin-bottom', mBottom + 'px');
    }
    height = $(this).height();
  });
});
