$(document).ready ->
  $('#signUpEmailToContinue, #signUpPasswordToContinue, #signUpFirstNameToContinue, #signUpLastNameToContinue').focusout ->
    if $(this).val() != ''
      $(this).addClass 'labeled'
    else
      $(this).removeClass 'labeled'
    return
  return