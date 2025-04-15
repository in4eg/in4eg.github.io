var currentTime, currentYear, newTechEmptyInput;

currentTime = new Date;

currentYear = currentTime.getFullYear();

newTechEmptyInput = {};

$('[data-add="#technicalskills-list"]').click(function() {
  var i, j, len, templateTableTechSkill, year;
  i = randomId(5);
  templateTableTechSkill = "<tr> <td class=\"large\" data-caption=\"Skill\"> <div class=\"form-group spaced\"> <input type=\"text\" name=\"name" + i + "\" data-push=\"#titleChange" + i + "\" id=\"skillTechTitle" + i + "\" class=\"input input-simple title-input in-focus\" data-minlength=\"2\"> </div> </td> <td class=\"small\" data-caption=\"Experience\"> <div class=\"form-group spaced\"> <input type=\"text\" data-year class=\"input-simple with-label align-center ignored\" id=\"skillYear" + i + "\" maxlength=\"2\" data-push=\"#year" + i + "\" value=\"1\"> <label for=\"skillYear" + i + "\" class=\"simple-label\">year</label> </div> </td> <td class=\"small\" data-caption=\"Last used\"> <div class=\"select-outer\"> <select class=\"select\" data-used name=\"used" + i + "\" data-push=\"#lastYear" + i + "\" data-year-select id=\"techY" + i + "\"> </select> <span class=\"arrow\"> <i class=\"icon icon-angle-down\"></i> </span> </div> </td> <td class=\"smaller remove-cell\" data-caption=\"Remove\"> <button type=\"button\" class=\"btn btn-default remove-skill\" data-remove-skill=\"#technicalskills-list\"> <span class=\"text\"><i class=\"icon icon-close\"></i></span> <span class=\"fade\"></span> </button> </td> </tr>";
  $(document).find('#technicalSkillsTable').find('tbody').append(templateTableTechSkill);
  for (j = 0, len = used.length; j < len; j++) {
    year = used[j];
    $('#techY' + i).append($('<option>').attr('value', year).text(year));
  }
  $('#techY' + i).prepend('<option value="" style="color : lightgrey" selected>Year</option>');
  $('#techY' + i).on('change', function() {
    $(this).children('[value = ""]').remove();
  });
  newTechEmptyInput.template = templateTableTechSkill;
  newTechEmptyInput.i = i;
  setTimeout((function() {
    $('#technicalSkillsTable').find('.in-focus').focus();
  }), 500);
});

$(document).on('click', '#cancelSave', function() {
  if ($('#technicalskills-list').hasClass('empty')) {
    $('#technicalskills-list').children().remove();
    $('#technicalskills-list').parents('a').addClass('hidden');
    $('#technicalskills-list').parents('a').siblings('.hidden-helper').addClass('active');
  }
});

$(document).on('click', '#saveSkills', function() {
  var item, items, j, len, title;
  if ($('#technicalskills-list').hasClass('empty')) {
    $('#technicalskills-list').removeClass('empty');
  }
  items = $('#technicalskills-list').children('li');
  for (j = 0, len = items.length; j < len; j++) {
    item = items[j];
    title = $(item).find('.title').clone().children().remove().end().text().trim();
    if (title.length === 0) {
      $(item).remove();
    }
  }
});

$(document).on('click', '[data-remove-skill]', function() {
  var index, listToRemove;
  index = $(this).parents('tr').index();
  listToRemove = $($(this).data('remove-skill'));
  $(this).parents('tr').remove();
});
