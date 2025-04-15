$(document).ready(function() {
  $('#signUpEmailToContinue, #signUpPasswordToContinue, #signUpFirstNameToContinue, #signUpLastNameToContinue').focusout(function() {
    if ($(this).val() !== '') {
      $(this).addClass('labeled');
    } else {
      $(this).removeClass('labeled');
    }
  });
});
