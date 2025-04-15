$(document).ready(function() {
  $('#pswdRestoreLabel').click(function() {
    document.getElementById('pswdRestoreEmail').focus();
  });
  $('#pswdRestoreSendButton').click(function() {
    $('#mainRestoreSection').css('display', 'none');
    $('#restoreSuccessNotification').removeClass('display-none');
  });
  $('#pswdRestoreEmail, #pswdRestorePassword, #pswdRestoreEnter, #pswdRestoreReEnter').focusout(function() {
    if ($(this).val() !== '') {
      $(this).addClass('labeled');
    } else {
      $(this).removeClass('labeled');
    }
  });
  $('#sendEmail').on('click', function(e) {
    var self;
    $('#emailResetForm').off();
    $(this).addClass('box-disabled');
    self = this;
    setTimeout((function() {
      $(self).removeClass('box-disabled');
    }), 6000);
  });
  $('#sendPass').on('click', function(e) {
    var self;
    $('#pswdRestoreForm').off();
    $(this).addClass('box-disabled');
    self = this;
    setTimeout((function() {
      $(self).removeClass('box-disabled');
    }), 6000);
  });
});
