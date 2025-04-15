var shareButtons;

shareButtons = function(percent, link) {
  var clone;
  console.log('link = ' + link);
  if (percent >= 50) {
    $('#how-other-see-button').removeClass('disabled');
    $('#how-other-see-button').removeAttr('data-tooltip');
    $('#how-other-see-button').attr('href', link);
    clone = $('#how-other-see-button').clone();
    $('#how-other-see-button').after(clone);
    $($('#how-other-see-button')[0]).remove();
    $('#share-profile-button').removeClass('disabled');
    $('#share-profile-button').removeAttr('data-tooltip');
    $('#share-profile-button').attr('href', '#share-profile-popup');
    clone = $('#share-profile-button').clone();
    $('#share-profile-button').after(clone);
    $($('#share-profile-button')[0]).remove();
    $('#download-pdf-button').removeClass('disabled');
    $('#download-pdf-button').removeAttr('data-tooltip');
    $('#download-pdf-button').attr('href', '/profile/get-pdf/');
    clone = $('#download-pdf-button').clone();
    $('#download-pdf-button').after(clone);
    $($('#download-pdf-button')[0]).remove();
  } else {
    $('#how-other-see-button').addClass('disabled');
    $('#how-other-see-button').removeAttr('href');
    $('#how-other-see-button').attr('data-tooltip', 'Your profile should be filled at least 50%');
    clone = $('#how-other-see-button').clone();
    $('#how-other-see-button').after(clone);
    $($('#how-other-see-button')[0]).remove();
    $('#share-profile-button').addClass('disabled');
    $('#share-profile-button').attr('data-tooltip', 'Your profile should be filled at least 50%');
    $('#share-profile-button').removeAttr('href');
    clone = $('#share-profile-button').clone();
    $('#share-profile-button').after(clone);
    $($('#share-profile-button')[0]).remove();
    $('#download-pdf-button').addClass('disabled');
    $('#download-pdf-button').attr('data-tooltip', 'Your profile should be filled at least 50%');
    $('#download-pdf-button').removeAttr('href');
    clone = $('#download-pdf-button').clone();
    $('#download-pdf-button').after(clone);
    $($('#download-pdf-button')[0]).remove();
  }
};
