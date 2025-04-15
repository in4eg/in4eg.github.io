$(document).ready ->
  $('#signInEmailToContinue, #signInPasswordToContinue').focusout ->
    if $(this).val() != ''
      $(this).addClass 'labeled'
    else
      $(this).removeClass 'labeled'
    return
  return