$(document).ready(function() {
  var block, i, n, slices, slicesTech, textsTech, url;
  slices = $('#experienceTabs .slice');
  i = 0;
  while (i < slices.length) {
    n = i + 1;
    slices[i].setAttribute('data-call-popup', '#experience-detail-popup-' + n);
    i++;
  }
  slices = $('#experienceTabs .popupLabel');
  i = 0;
  while (i < slices.length) {
    n = i + 1;
    slices[i].setAttribute('data-call-popup', '#experience-detail-popup-' + n);
    i++;
  }
  block = $('#skillsTabs1_1 .graph')[0];
  if ($(block).attr('data-extra-skills') === 'true') {
    url = $(block).attr('data-link');
    slicesTech = $('#skillsTabs1_1 .slice');
    $(slicesTech[0]).css('cursor', 'pointer');
    $(slicesTech[0]).click(function() {
      $(location).attr('href', url);
    });
    textsTech = $('#skillsTabs1_1 text');
    $(textsTech[0]).css('cursor', 'pointer');
    $(textsTech[0]).click(function() {
      $(location).attr('href', url);
    });
  }
});
