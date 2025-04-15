var removeSkillRequest, softSkillsCreated, unique;

$(document).on('change', '[data-softcategory]', function() {
  var j, len, ref, skillTitle;
  $('#softSkillsTableAdd').find($(this).data('relate')).find('option').remove();
  ref = softSkills[$(this).find('option:selected').text()];
  for (j = 0, len = ref.length; j < len; j++) {
    skillTitle = ref[j];
    $('#softSkillsTableAdd').find($(this).data('relate')).append($('<option>').attr('value', skillTitle).text(skillTitle));
  }
});

$('[data-add="#softskill-list"]').click(function() {
  var i;
  if ($(this).attr('id') !== 'generalSoftSkills') {
    softSkillsToRemove.list = [];
  }
  $('#softSkillsTableAdd').removeClass('hidden');
  i = randomId(5);
  setTimeout((function() {
    var j, len, ref, selectedCategory, selectedTitle, skillCategory, skillTitle, templateSoftSkillTable;
    templateSoftSkillTable = "<tr> <td data-caption=\"Skill category\"> <div class=\"select-outer\"> <select name=\"soft" + i + "\" class=\"select\" data-push=\"#soft" + i + "\" data-softcategory id=\"softSkillsCat" + i + "\" data-relate=\"#softSkillsCTit" + i + "\"> </select> <span class=\"arrow\"> <i class=\"icon icon-angle-down\"></i> </span> </div> </td> <td data-caption=\"Skill name\"> <div class=\"select-outer\"> <select name=\"softtitle" + i + "\" class=\"select\" data-push=\"#softtitle" + i + "\" data-id=\"softtitle" + i + "\" data-softtitle id=\"softSkillsCTit" + i + "\" data-parent> </select> <span class=\"arrow\"> <i class=\"icon icon-angle-down\"></i> </span> </div> </td> </tr>";
    $(document).find('#softSkillsTableAdd').find('tbody').append(templateSoftSkillTable);
    for (skillCategory in softSkills) {
      $('#softSkillsTableAdd').find('#softSkillsCat' + i).append($('<option>').attr('value', skillCategory).text(skillCategory));
    }
    selectedCategory = $('#softSkillsTableAdd').find('#softSkillsCat' + i).children('option:selected').text();
    selectedTitle = $('#softSkillsTableAdd').find('tbody').find('tr').find('[data-softtitle]').find('option:selected').text().trim();
    ref = softSkills[selectedCategory];
    for (j = 0, len = ref.length; j < len; j++) {
      skillTitle = ref[j];
      $('#softSkillsTableAdd').find($('#softSkillsCat' + i).data('relate')).attr('data-parent', selectedCategory).data('parent', selectedCategory);
      $('#softSkillsTableAdd').find($('#softSkillsCat' + i).data('relate')).append($('<option>').attr('value', skillTitle).text(skillTitle));
    }
  }), 10);
});

$(document).on('input change', '[data-softcategory]', function() {
  var val;
  val = $(this).val();
  $($(this).data('relate')).data('parent', val).attr('data-parent', val);
});

$(document).on('input change', '#skillType', function() {
  if ($(this).val().length <= 0) {
    $(this).parent('.form-group').addClass('error');
  } else {
    $(this).parent('.form-group').removeClass('error');
  }
});

$(document).on('click', '[data-remove-tag]', function() {
  var category, currentSkill, duplicateIndex, i, index, list, parent, parentTable, skill, skillId;
  list = $($(this).data('remove-tag')).parents('.skills-list');
  parent = list.parents('.cover').children();
  category = list.prev('[data-soft-category]').text().trim();
  skill = $(this).find('.title').text().trim();
  skillId = $(this).data('remove-tag');
  parentTable = $(this).parents('.skill-tags');
  if (softSkillsCreated[list.prev('[data-soft-category]').text().trim()]) {
    index = softSkillsCreated[list.prev('[data-soft-category]').text().trim()].indexOf($(this).find('.title').text().trim());
    softSkillsCreated[list.prev('[data-soft-category]').text().trim()] = softSkillsCreated[list.prev('[data-soft-category]').text().trim()].splice(index, 1);
  }
  if (parentTable.children().length <= 1) {
    $(this).parents('tr').remove();
  }
  duplicateIndex = -1;
  currentSkill = $($(this).children('.title')[0]).text().trim();
  i = 0;
  while (i < softSkillsToAdd.list.length) {
    if (softSkillsToAdd.list[i].skillName === currentSkill) {
      duplicateIndex = i;
      break;
    }
    i++;
  }
  if (duplicateIndex !== -1) {
    softSkillsToAdd.list.splice(duplicateIndex, 1);
  } else {
    softSkillsToRemove.list.push(currentSkill);
  }
  $(this).remove();
});

removeSkillRequest = function(type, category, skill, id, url) {
  $.ajax({
    data: {
      'type': type,
      'category': category,
      'skill': skill,
      'id': id,
      'action': 'delete'
    },
    url: url,
    type: 'post',
    cache: false,
    headers: {
      'X-CSRFToken': csrf_token
    },
    error: function(data, textStatus, errorThrown) {
      console.log(errorThrown);
    },
    success: function(data) {
      console.log('skill removed');
    }
  });
};

softSkillsCreated = {};

unique = function(arr) {
  var i, obj, str;
  obj = {};
  i = 0;
  while (i < arr.length) {
    str = arr[i];
    obj[str] = true;
    i++;
  }
  return Object.keys(obj);
};

$('#addSoftSkillButton').on('click', function() {
  var addNewCategory, addNewSkill, existCategory, isUniqeCategory, newCategory, newSkill;
  addNewCategory = function() {
    var template;
    template = '<tr> <td class="middle" data-caption="Skill category"> <div class="simple-title">' + newCategory + '</div> </td> <td data-caption="Skill name"> <div class="skill-tags" id="tagSkillWbLzM"><div class="simple tag remove" data-remove-tag><i class="icon icon-close"></i><div class="title">' + newSkill + '</div></div></div> </td></tr>';
    if ($('#softSkillsTable').find('tbody tr').length > 0) {
      $('#softSkillsTable').find('tbody tr:last').after(template);
    } else {
      $('#softSkillsTable').find('tbody').append(template);
    }
  };
  addNewSkill = function(categoryElement) {
    var template;
    template = '<div class="simple tag remove" data-remove-tag><i class="icon icon-close"></i><div class="title">' + newSkill + '</div></div>';
    $(categoryElement).parent().next('td').find('.skill-tags').children('div:last').after(template);
  };
  if (!$('[data-softtitle]').val()) {
    $('#softSkillsTableAdd').find('[data-caption=\'Skill category\']').find('.form-group').addClass('error');
    $('#softSkillsTableAdd').find('[data-caption=\'Skill category\']').find('.select').addClass('error');
    return;
  } else {
    $('#softSkillsTableAdd').find('[data-caption=\'Skill category\']').find('.form-group').removeClass('error');
    $('#softSkillsTableAdd').find('[data-caption=\'Skill category\']').find('.select').removeClass('error');
  }
  newSkill = $('[data-softtitle]').val().trim();
  newCategory = $('[data-softcategory]').val().trim();
  existCategory = $('#softSkillsTable').find('.simple-title:contains("' + newCategory + '")');
  isUniqeCategory = true;
  if (existCategory.length > 0) {
    existCategory.each(function(index, el) {
      var existElement, isUniqeSkill;
      if ($(el).text().trim() === newCategory) {
        isUniqeCategory = false;
        existElement = $(el).parent().next('td').find('.title:contains("' + newSkill + '")');
        isUniqeSkill = true;
        if (existElement.length > 0) {
          existElement.each(function(index, skillEl) {
            if ($(skillEl).text().trim() === newSkill) {
              isUniqeSkill = false;
            }
          });
        }
        if (isUniqeSkill) {
          addNewSkill(el);
          if (softSkillsToRemove.list.indexOf(newSkill) === -1) {
            softSkillsToAdd.list.push({
              skillName: newSkill,
              skillCategory: newCategory
            });
          } else {
            softSkillsToRemove.list.splice(softSkillsToRemove.list.indexOf(newSkill), 1);
          }
        }
      }
    });
    if (isUniqeCategory) {
      addNewCategory();
      if (softSkillsToRemove.list.indexOf(newSkill) === -1) {
        softSkillsToAdd.list.push({
          skillName: newSkill,
          skillCategory: newCategory
        });
      } else {
        softSkillsToRemove.list.splice(softSkillsToRemove.list.indexOf(newSkill), 1);
      }
    }
  } else {
    addNewCategory();
    if (softSkillsToRemove.list.indexOf(newSkill) === -1) {
      softSkillsToAdd.list.push({
        skillName: newSkill,
        skillCategory: newCategory
      });
    } else {
      softSkillsToRemove.list.splice(softSkillsToRemove.list.indexOf(newSkill), 1);
    }
  }
});
