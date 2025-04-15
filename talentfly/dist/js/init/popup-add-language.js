var newLanguageEmptyInput;

newLanguageEmptyInput = {};

$('[data-add="#languages-list"]').click(function() {
  var i, j, len, proficiency, templateLanguage;
  i = randomId(5);
  templateLanguage = "<tr> <td class=\"large\" data-caption=\"Language\"> <div class=\"form-group spaced\"> <input type=\"text\" data-push=\"#langEd" + i + "\" id=\"lan" + i + "\" class=\"input input-simple in-focus\" > </div> </td> <td class=\"large\" data-caption=\"Proficiency\"> <div class=\"select-outer\"> <select class=\"select\" data-proficiency name=\"used" + i + "\" data-push=\"#langLead" + i + "\" id=\"profL" + i + "\"> </select> <span class=\"arrow\"> <i class=\"icon icon-angle-down\"></i> </span> </div> </td> <td class=\"smaller remove-cell\" data-caption=\"Remove\"> <button type=\"button\" class=\"btn btn-default remove-skill\" data-remove-skill=\"" + ($(this).data('edit')) + "\"> <span class=\"text\"><i class=\"icon icon-close\"></i></span> <span class=\"fade\"></span> </button> </td> </tr>";
  $('#langBody').append(templateLanguage);
  for (j = 0, len = proficiencies.length; j < len; j++) {
    proficiency = proficiencies[j];
    $('#profL' + i).append($('<option>').attr('value', proficiency).text(proficiency));
  }
  newLanguageEmptyInput.template = templateLanguage;
  newLanguageEmptyInput.i = i;
  setTimeout((function() {
    $(document).find('#languagesTable').find('.in-focus').focus();
  }), 50);
});

$(document).on('click', '[data-remove-skill-lang]', function() {
  var index, listToRemove;
  index = $(this).parents('tr').index();
  listToRemove = $($(this).data('remove-skill-lang'));
  $(this).parents('tr').remove();
  listToRemove.find('li').eq(index).remove();
  if (listToRemove.find('li').length === 0) {
    listToRemove.addClass('hidden');
    listToRemove.siblings('.hidden-helper').addClass('active');
  }
});
