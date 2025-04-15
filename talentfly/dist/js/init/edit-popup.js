var editorData, formData, setTextLength, softSkillsToAdd, softSkillsToRemove;

softSkillsToRemove = {};

softSkillsToAdd = {};

setTextLength = function(text, textBlock) {
  if (text < 264) {
    textBlock.attr('data-length', '264');
  } else if (text >= 265 && text < 350) {
    textBlock.attr('data-length', '300');
  } else if (text >= 350 && text < 400) {
    textBlock.attr('data-length', '400');
  } else if (text >= 400 && text < 500) {
    textBlock.attr('data-length', '500');
  } else if (text >= 500) {
    textBlock.attr('data-length', '600');
  }
};

$(document).on('input change', '[data-push]', function() {
  var labelText, number;
  if ($(this).attr('id')) {
    if ($(this).attr('id').indexOf('skillYear') !== -1) {
      number = parseInt($(this).val(), 10);
      $(this).val(number);
      labelText = 'years';
      labelText = number === 1 ? 'year' : number < 1 || isNaN(number) ? '<1' : 'years';
      if (isNaN(number)) {
        $(this).val(0);
        $(this).next('label').html(labelText);
      } else {
        $(this).next('label').html(labelText);
      }
    }
  }
});

$(document).on('input change', '[data-push-href]', function() {
  var parentBlock;
  parentBlock = $(this).data('push-href');
  $(document).find(parentBlock).attr('href', $(this).val());
  if ($(this).val().length > 0) {
    $(this).removeClass('ignored');
    $(this).parents('.form-group').removeClass('error');
    $(document).find(parentBlock).removeClass('hidden');
  } else if ($(this).val().length <= 0) {
    $(document).find(parentBlock).addClass('hidden');
    $(this).addClass('ignored');
  }
});

formData = void 0;

editorData = function() {
  var i;
  for (i in CKEDITOR.instances) {
    CKEDITOR.instances[i].on('change', function() {
      var data;
      data = this.getData();
    });
  }
};

editorData();

$(document).on('click', '[data-edit]', function(e) {
  var block, blockId, blocksCount, country, currentStatus, degree, description, editBlock, existElements, exptData, focusedID, fromList, i, i1, id, infoBlock, instance, item, items, j, k, l, labelText, langItem, langItems, lastBlock, lastUse, lastYearId, leadId, leadText, len, len1, len10, len11, len12, len13, len14, len15, len16, len17, len2, len3, len4, len5, len6, len7, len8, len9, linkHref, linkId, m, month, n, number, o, p, prof, profArr, proficiency, q, r, relatedEl, relatedElement, s, self, skill, str, t, tag, tagId, tagText, tags, techItem, techItems, template, title, titleId, titleText, u, use, v, w, x, y, year, yearId, years, z;
  infoBlock = $(document).find($(this).data('edit'));
  if (typeof $(this).attr('href') === 'undefined') {
    if (typeof $(this).attr('data-call-popup') === 'undefined') {
      editBlock = $($(this).attr('data-call'));
    } else {
      editBlock = $($(this).attr('data-call-popup'));
    }
  } else {
    editBlock = $($(this).attr('href'));
  }
  editBlock.find('.for-add').addClass('hidden');
  editBlock.find('.for-edit').removeClass('hidden');
  if (infoBlock.attr('data-text') === 'textarea') {
    $(infoBlock.data('input')).val($($(this).data('edit')).text().trim());
    formData = $('#summaryMess').html().trim();
    for (instance in CKEDITOR.instances) {
      instance = instance;
      CKEDITOR.instances.summaryEdit.updateElement();
      window.setTimeout((function() {
        CKEDITOR.instances.summaryEdit.setData(formData);
      }), 10);
    }
  } else if (infoBlock.attr('data-text') === 'list') {
    techItems = infoBlock.children('li');
    for (j = 0, len = techItems.length; j < len; j++) {
      techItem = techItems[j];
      title = $(techItem).find('.title').clone().children().remove().end().text().trim();
    }
    items = infoBlock.children('li:not(.read-more)');
    for (i = k = 0, len1 = items.length; k < len1; i = ++k) {
      item = items[i];
      title = $(item).find('.title').clone().children().remove().end().text().trim();
      years = $(item).find('.title').clone().children().remove().text().trim();
      lastUse = $(item).find('.title').clone().find('.value').remove().text().trim();
      number = parseInt(years, 10);
      if (isNaN(number)) {
        number = "";
      }
      if (isNaN(lastUse)) {
        lastUse = '';
      }
      titleId = $($(item).find('.title')).attr('id');
      yearId = $($(item).find('.years')).attr('id');
      lastYearId = $($(item).find('.value')).attr('id');
      labelText = 'years';
      if (number === 1) {
        labelText = 'year';
      }
      template = "<tr> <td class=\"large\" data-caption=\"Skill\"> <div class=\"form-group spaced\"> <input type=\"text\" data-push=\"#" + titleId + "\" data-id=\"" + titleId + "\" id=\"skillTechTitle" + i + "\" value=\"" + title + "\" class=\"input input-simple title-input in-focus\" data-minlength=\"2\"> </div> </td> <td class=\"small\" data-caption=\"Experience\"> <div class=\"form-group spaced\"> <input type=\"text\" data-year class=\"input-simple with-label align-center ignored\" id=\"skillYear" + i + "\" maxlength=\"2\" placeholder=\"-\" value=\"" + number + "\" data-push=\"#" + yearId + "\"> <label for=\"skillYear" + i + "\" class=\"simple-label\">" + labelText + "</label> </div> </td> <td class=\"small\" data-caption=\"Last used\"> <div class=\"select-outer\"> <select class=\"select\" data-used name=\"used" + i + "\" data-push=\"#" + lastYearId + "\" id=\"selTechY" + i + "\"> </select> <span class=\"arrow\"> <i class=\"icon icon-angle-down\"></i> </span> </div> </td> <td class=\"smaller remove-cell\" data-caption=\"Remove\"> <button type=\"button\" class=\"btn btn-default remove-skill\" data-remove-skill=\"" + ($(this).data('edit')) + "\"> <span class=\"text\"><i class=\"icon icon-close\"></i></span> <span class=\"fade\"></span> </button> </td> </tr>";
      $(infoBlock.data('addto')).find('tbody').append(template);
      fromList = false;
      for (m = 0, len2 = used.length; m < len2; m++) {
        use = used[m];
        if (use === +lastUse) {
          $('#selTechY' + i).append($('<option>').attr('value', use).attr('selected', 'selected').text(use));
          fromList = true;
        } else {
          $('#selTechY' + i).append($('<option>').attr('value', use).text(use));
        }
      }
      if (!fromList) {
        $('#selTechY' + i).prepend('<option value="" style="color : lightgrey" selected>Year</option>');
        $('#selTechY' + i).on('change', function() {
          $(this).children('[value = ""]').remove();
        });
      }
    }
    for (n = 0, len3 = techSkills.length; n < len3; n++) {
      skill = techSkills[n];
      $('[data-skill]').append($('<option>').attr('value', skill).text(skill));
    }
    lastBlock = infoBlock.children().last().text().trim();
    if ($(this).attr('data-add') === '#technicalskills-list') {
      $(infoBlock.data('addto')).find('tbody').append(newTechEmptyInput.template);
      for (o = 0, len4 = used.length; o < len4; o++) {
        year = used[o];
        $('#techY' + i).append($('<option>').attr('value', year).text(year));
      }
      $('#technicalSkillsTable').find('.in-focus').focus();
    }
    existElements = infoBlock.find('li');
    if (existElements.length <= 1 && existElements.find('.title').clone().children().remove().end().text().trim().length === 0) {
      infoBlock.addClass('empty');
    }
  } else if (infoBlock.attr('data-text') === 'list-extend') {
    langItems = infoBlock.children('li');
    for (p = 0, len5 = langItems.length; p < len5; p++) {
      langItem = langItems[p];
      title = $(langItem).find('.title').text().trim();
    }
    items = infoBlock.children('li:not(.read-more)');
    self = this;
    for (i = q = 0, len6 = items.length; q < len6; i = ++q) {
      item = items[i];
      title = $(item).find('.title').text().trim().split("\n")[0];
      titleId = $($(item).find('.title')).attr('id');
      leadId = $($(item).find('.lead')).attr('id');
      leadText = $(item).find('.lead').text().trim();
      if (infoBlock.attr('data-input') === 'select') {
        template = "<tr> <td class=\"large\" data-caption=\"Language\"> <div class=\"form-group spaced\"> <input type=\"text\" data-push=\"#" + titleId + "\" data-id=\"" + titleId + "\" id=\"lan" + i + "\" value=\"" + title + "\" class=\"input input-simple in-focus\"> </div> </td> <td class=\"large\" data-caption=\"Proficiency\"> <div class=\"select-outer\"> <select class=\"select\" data-proficiency name=\"used" + i + "\" data-push=\"#" + leadId + "\" id=\"profL" + i + "\"> <option selected value=\"" + leadText + "\">" + leadText + "</option> </select> <span class=\"arrow\"> <i class=\"icon icon-angle-down\"></i> </span> </div> </td> <td class=\"smaller remove-cell\" data-caption=\"Remove\"> <button type=\"button\" class=\"btn btn-default remove-skill\" data-remove-skill=\"" + ($(self).data('edit')) + "\"> <span class=\"text\"><i class=\"icon icon-close\"></i></span> <span class=\"fade\"></span> </button> </td> </tr>";
      }
      $(infoBlock.data('addto')).find('tbody').append(template);
      profArr = [];
      for (r = 0, len7 = proficiencies.length; r < len7; r++) {
        proficiency = proficiencies[r];
        if (proficiency !== leadText) {
          profArr.push(proficiency);
        }
      }
      for (s = 0, len8 = profArr.length; s < len8; s++) {
        prof = profArr[s];
        $(infoBlock.data('addto')).find('#profL' + i).append($('<option>').attr('value', prof).text(prof));
      }
    }
    if ($(self).attr('data-add') === '#languages-list') {
      $(infoBlock.data('addto')).find('tbody').append(newLanguageEmptyInput.template);
    }
    for (t = 0, len10 = proficiencies.length; t < len10; t++) {
      proficiency = proficiencies[t];
      $('#profL' + newLanguageEmptyInput.i).append($('<option>').attr('value', proficiency).text(proficiency));
    }
    $(document).find('#languagesTable').find('.in-focus').focus();
  } else if (infoBlock.attr('data-text') === 'block-extend') {
    items = infoBlock.children('li:not(.read-more)');
    for (i = u = 0, len11 = items.length; u < len11; i = ++u) {
      item = items[i];
      title = $(item).find('.title').text().trim().split("\n")[0];
      titleId = $($(item).find('.title')).attr('id');
      leadId = $($(item).find('.lead')).attr('id');
      leadText = $(item).find('.lead').text().trim();
      linkHref = $($(item).find('.tag-link')).attr('href');
      if (typeof linkId === void 0 || linkId === 'undefined') {
        linkId = '';
      } else {
        linkId = $($(item).find('.tag-link')).attr('id');
      }
      template = "<div class=\"block-info full-line\"> <div class=\"form-group last\"> <div class=\"element-option\"> <button type=\"button\" class=\"btn btn-default move-btn drag-handle\" data-down=\"#interestsBody\"> Down <span class=\"btn btn-grey btn-xs btn-round\"><i class=\"icon icon-down-arrow-key\"></i></span> </button> <button type=\"button\" class=\"btn btn-default move-btn drag-handle\" data-up=\"#interestsBody\"> Up <span class=\"btn btn-grey btn-xs btn-round\"><i class=\"icon icon-up-arrow-key\"></i></span> </button> <button type=\"button\" class=\"btn btn-default simple-btn trash-btn\" data-remove-link=\"" + ($(this).data('edit')) + "\"> <i class=\"icon icon-delete\"></i> </button> </div> <div class=\"input-title\">Title</div> <input type=\"text\" class=\"input-simple title-input in-focus\" data-id=\"" + titleId + "\" data-push=\"#" + titleId + "\" id=\"hobbyTitle" + i + "\" value=\"" + title + "\" data-minlength=\"2\"> <div class=\"alert\">Minimum 2 characters</div> </div> <div class=\"form-group last\"> <div class=\"input-title\">Link<span class=\"optional\">(optional)</span></div> <input type=\"text\" class=\"input-simple ignored link\" id=\"hobbyLink" + i + "\" data-push-href=\"#" + linkId + "\" value=\"" + linkHref + "\"> <div class=\"alert\">URL is not correct</div> </div> <div class=\"form-group last\"> <div class=\"input-title\">Description<span class=\"optional\">(optional)</span></div> <textarea id=\"linkCaption" + i + "\" name=\"used" + i + "\" data-push=\"#" + leadId + "\" class=\"textarea small ignored\" data-characters=\"150\" maxlength=\"150\">" + leadText + "</textarea> <div class=\"help\">E.g. Personal blog about be keeping Personal blog about be keeping</div> <div class=\"count-help\"><span class=\"count\">150</span>characters left</div> </div> </div>";
      $(infoBlock.data('addto')).append(template);
      description = $($(item).find('.lead'));
      relatedEl = $(document).find('[data-push="#' + description.attr('id') + '"]');
      if (relatedEl) {
        $(relatedEl).parent('.form-group').find('.count-help').find('.count').html($(relatedEl).data('characters') - description.text().trim().length);
      }
    }
    if ($(this).attr('data-add') === '#interests-list') {
      $(infoBlock.data('addto')).append(newInterestsTemplate);
      $('#interestsBody').find('.in-focus').focus();
    }
  } else if (infoBlock.attr('data-text') === 'edit') {
    editBlock.find('[data-removeon]').show();
    if (infoBlock.parents().attr('id') === 'experienceMore') {
      for (instance in CKEDITOR.instances) {
        instance = instance;
        CKEDITOR.instances.descriptionEdit.updateElement();
        exptData = $(this).find('[data-change="#descriptionEdit"]').html().trim();
        window.setTimeout((function() {
          CKEDITOR.instances.descriptionEdit.setData(exptData);
        }), 15);
      }
    }
    editBlock.find('[data-on-edit]').data('on-edit', '#' + $(infoBlock).attr('id')).attr('data-on-edit', '#' + $(infoBlock).attr('id'));
    currentStatus = $(infoBlock).find('[data-current]').attr('data-current');
    editBlock.find('[data-current-show]').attr('data-current-show', currentStatus);
    items = infoBlock.find('[data-change]');
    if (currentStatus === 'true') {
      editBlock.find('[data-not-current]').addClass('hidden');
      editBlock.find('[data-current-input]').prop('checked', true);
      editBlock.find('[data-current-work]').attr('data-current-work', 'true');
    }
    editBlock.find('[data-year-select]').append($('<option>').attr('value', '').text('Year'));
    for (v = 0, len12 = used.length; v < len12; v++) {
      year = used[v];
      editBlock.find('[data-year-select]').append($('<option>').attr('value', year).text(year));
    }
    editBlock.find('[data-year-select]').on('change', function() {
      $(this).children('[value = ""]').remove();
    });
    editBlock.find('[data-month-select]').append($('<option>').attr('value', '').attr('data-number', i).text('Month'));
    for (i = w = 0, len13 = months.length; w < len13; i = ++w) {
      month = months[i];
      editBlock.find('[data-month-select]').append($('<option>').attr('value', month).attr('data-number', i).text(month));
    }
    editBlock.find('[data-month-select]').on('change', function() {
      $(this).children('[value = ""]').remove();
    });
    for (x = 0, len14 = degrees.length; x < len14; x++) {
      degree = degrees[x];
      editBlock.find('[data-degree-select]').append($('<option>').attr('value', degree).text(degree));
    }
    str = void 0;
    l = 0;
    len9 = countries.length;
    editBlock.find('[data-country-select]').append($('<option>').attr('value', '').text('Choose your country'));
    while (l < len9) {
      country = countries[l];
      str = $('<option>').attr('value', country).text(country);
      editBlock.find('[data-country-select]').append(str);
      l++;
    }
    editBlock.find('[data-country-select]').on('change', function() {
      $(this).children('[value = ""]').remove();
    });
    for (y = 0, len15 = items.length; y < len15; y++) {
      item = items[y];
      id = $(item).attr('id');
      relatedElement = $($(item).data('change'));
      relatedElement.attr('data-push', '#' + id);
      relatedElement.val($(item).text().trim());
      if ($(item).text().trim() !== '') {
        if (id.indexOf('ear') !== -1 || id.indexOf('onth') !== -1 || id.indexOf('ountry') !== -1) {
          $(relatedElement).children('[value = ""]').remove();
        }
      }
      if ($(relatedElement).parent('.form-group').find('.count-help').find('.count')) {
        $(relatedElement).parent('.form-group').find('.count-help').find('.count').html($(relatedElement).data('characters') - $(item).text().trim().length);
      }
    }
    blockId = editBlock.find('[data-id]');
    blockId.data('id', $(infoBlock).attr('id')).attr('data-id', $(infoBlock).attr('id'));
  } else if (infoBlock.attr('data-text') === 'select-list') {
    softSkillsToRemove.list = [];
    softSkillsToAdd.list = [];
    $('#softSkillsTableAdd').removeClass('hidden');
    i = randomId(5);
    setTimeout((function() {
      var len16, ref, selectedCategory, selectedTitle, skillCategory, skillTitle, templateSoftSkillTable, z;
      templateSoftSkillTable = "<tr> <td data-caption=\"Skill category\"> <div class=\"select-outer form-group\"> <select name=\"soft" + i + "\" class=\"select\" data-push=\"#soft" + i + "\" data-softcategory id=\"softSkillsCat" + i + "\" data-relate=\"#softSkillsCTit" + i + "\"> </select> <span class=\"arrow\"> <i class=\"icon icon-angle-down\"></i> </span> <div class=\"alert\">Choose category</div> </div> </td> <td data-caption=\"Skill name\"> <div class=\"select-outer form-group\"> <select name=\"softtitle" + i + "\" class=\"select\" data-push=\"#softtitle" + i + "\" data-id=\"softtitle" + i + "\" data-softtitle id=\"softSkillsCTit" + i + "\" data-parent> </select> <span class=\"arrow\"> <i class=\"icon icon-angle-down\"></i> </span> </div> </td> </tr>";
      $(document).find('#softSkillsTableAdd').find('tbody').append(templateSoftSkillTable);
      $('#softSkillsTableAdd').find('#softSkillsCat' + i).append('<option value="" disabled selected>Select Category</option>');
      for (skillCategory in softSkills) {
        $('#softSkillsTableAdd').find('#softSkillsCat' + i).append($('<option>').attr('value', skillCategory).text(skillCategory));
      }
      selectedCategory = $('#softSkillsTableAdd').find('#softSkillsCat' + i).children('option:selected').text();
      selectedTitle = $('#softSkillsTableAdd').find('tbody').find('tr').find('[data-softtitle]').find('option:selected').text().trim();
      $('#softSkillsTableAdd').find($('#softSkillsCat' + i).data('relate')).append('<option value="" disabled selected>Select Skill</option>');
      if (softSkills[selectedCategory]) {
        ref = softSkills[selectedCategory];
        for (z = 0, len16 = ref.length; z < len16; z++) {
          skillTitle = ref[z];
          $('#softSkillsTableAdd').find($('#softSkillsCat' + i).data('relate')).attr('data-parent', selectedCategory).data('parent', selectedCategory);
          $('#softSkillsTableAdd').find($('#softSkillsCat' + i).data('relate')).append($('<option>').attr('value', skillTitle).text(skillTitle));
        }
      }
    }), 10);
    blocksCount = infoBlock.find('[data-soft-category]');
    for (z = 0, len16 = blocksCount.length; z < len16; z++) {
      block = blocksCount[z];
      titleText = $(block).text().trim();
      i = randomId(5);
      template = "<tr> <td class=\"middle\" data-caption=\"Skill category\"> <div class=\"simple-title\">" + titleText + "</div> </td> <td data-caption=\"Skill name\"> <div class=\"skill-tags\" id=\"tagSkill" + i + "\"></div> </td> </tr>";
      editBlock.find('[data-appendto]').find('tbody').append(template);
      tags = $(block).next('.skills-list').find('li');
      for (i1 = 0, len17 = tags.length; i1 < len17; i1++) {
        tag = tags[i1];
        tagText = $(tag).find('.title').text().trim();
        tagId = $(tag).find('.title').attr('id');
        $('#tagSkill' + i).append('<div class="simple tag remove" data-remove-tag="#' + tagId + '"><i class="icon icon-close"></i><div class="title">' + tagText + '</div></div>');
      }
    }
  }
  focusedID = '#' + $(this).find('.title').not('.tech-title').attr('id');
  setTimeout((function() {
    var input, j1, len18, ref;
    ref = editBlock.find('input');
    for (j1 = 0, len18 = ref.length; j1 < len18; j1++) {
      input = ref[j1];
      if ($(input).attr('data-push') === focusedID) {
        $(input).focus();
      }
    }
  }), 500);
});

$(document).on('click', '[data-remove-link]', function() {
  var index;
  index = $(this).parents('.block-info').index();
  $(this).parents('.block-info').remove();
});

$(document).on('click', '[data-removeon]', function() {
  var parentBlock;
  $.magnificPopup.close();
  parentBlock = $($(this).data('on-edit')).parents('[data-text]');
  if (parentBlock.children().length - 1 === 0) {
    parentBlock.siblings('.hidden-helper').addClass('active');
  }
  $($(this).data('on-edit')).parent('li').remove();
  $($(this).data('on-edit')).remove();
  if (parentBlock.children().length <= 0) {
    parentBlock.addClass('hidden');
  }
  hidePopups();
});

$(document).on('click', '[data-current-work]', function() {
  var chooseStatus, notCurrentTime;
  notCurrentTime = $(this).siblings().find('[data-not-current]');
  chooseStatus = $(this).find('[data-current-input]');
  if (chooseStatus.prop('checked') === true) {
    notCurrentTime.addClass('hidden');
    chooseStatus.prop('checked', true);
    $(this).attr('data-current-work', 'true');
  } else {
    notCurrentTime.removeClass('hidden');
    chooseStatus.prop('checked', false);
    $(this).attr('data-current-work', 'false');
  }
});
