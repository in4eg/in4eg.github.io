$(document).ready(function() {
  $('#signInEmailToContinue, #signInPasswordToContinue').focusout(function() {
    if ($(this).val() !== '') {
      $(this).addClass('labeled');
    } else {
      $(this).removeClass('labeled');
    }
  });
});
