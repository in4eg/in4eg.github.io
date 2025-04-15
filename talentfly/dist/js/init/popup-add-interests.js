var newInterestsTemplate;

newInterestsTemplate = void 0;

$('[data-add="#interests-list"]').click(function() {
  var i, templateInterest;
  i = randomId(5);
  templateInterest = "<div class=\"block-info full-line\"> <div class=\"form-group last\"> <div class=\"element-option\"> <button type=\"button\" class=\"btn btn-default move-btn drag-handle\" data-down=\"#interestsBody\"> Down <span class=\"btn btn-grey btn-xs btn-round\"><i class=\"icon icon-down-arrow-key\"></i></span> </button> <button type=\"button\" class=\"btn btn-default move-btn drag-handle\" data-up=\"#interestsBody\"> Up <span class=\"btn btn-grey btn-xs btn-round\"><i class=\"icon icon-up-arrow-key\"></i></span> </button> <button type=\"button\" class=\"btn btn-default simple-btn trash-btn\" data-remove-link=\"#interests-list\"> <i class=\"icon icon-delete\"></i> </button> </div> <div class=\"input-title\">Title</div> <input type=\"text\" class=\"input-simple title-input in-focus\" id=\"hobbyTitle" + i + "\" data-push=\"#interTitle" + i + "\" data-minlength=\"2\" data-id=\"interTitle" + i + "\"> <div class=\"alert\">Minimum 2 characters</div> </div> <div class=\"form-group last\"> <div class=\"input-title\">Link<span class=\"optional\">(optional)</span></div> <input type=\"text\" class=\"input-simple ignored link\" id=\"hobbyLink" + i + "\" data-push-href=\"#interestLink" + i + "\"> <div class=\"alert\">URL is not correct</div> </div> <div class=\"form-group last\"> <div class=\"input-title\">Description<span class=\"optional\">(optional)</span></div> <textarea name=\"hobbyDescription" + i + "\" id=\"hobbyCaption" + i + "\" class=\"textarea small ignored\" data-push=\"#intLead" + i + "\" data-characters=\"500\" maxlength=\"500\"></textarea> <div class=\"help\">E.g. Personal blog about be keeping Personal blog about be keeping</div> <div class=\"count-help\"><span class=\"count\">500</span>characters left</div> </div> </div>";
  $('#interestsBody').append(templateInterest);
  newInterestsTemplate = templateInterest;
  setTimeout((function() {
    $('#interestsBody').find('.in-focus').focus();
  }), 500);
});

$(document).on('click', '#cancelInterests', function() {
  if ($('#interests-list').hasClass('empty')) {
    $('#interests-list').children().remove();
    $('#interests-list').parents('a').addClass('hidden');
    $('#interests-list').parents('a').siblings('.hidden-helper').addClass('active');
  }
});

$(document).on('click', '#saveInterests', function() {
  var item, items, j, len, title;
  if ($('#interests-list').hasClass('empty')) {
    $('#interests-list').removeClass('empty');
  }
  items = $('#interests-list').children('li');
  for (j = 0, len = items.length; j < len; j++) {
    item = items[j];
    title = $(item).find('.title').text().trim();
    if (title.length === 0) {
      $(item).remove();
    }
  }
});
