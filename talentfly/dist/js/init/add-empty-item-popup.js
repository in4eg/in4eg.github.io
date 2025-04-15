$(document).on('click', '[data-add]', function(e) {
  var country, degree, editBlock, formData, i, j, k, l, len, len1, len2, len3, m, month, relatedBlock, str, year;
  if (typeof $(this).attr('href') === 'undefined') {
    if (typeof $(this).attr('data-call-popup') === 'undefined') {
      editBlock = $($(this).attr('data-call'));
    } else {
      editBlock = $($(this).attr('data-call-popup'));
    }
  } else {
    editBlock = $($(this).attr('href'));
  }
  editBlock.find('[data-on-edit]').attr('data-on-edit', '');
  editBlock.find('[data-removeon]').hide();
  editBlock.find('[data-year-select]').append($('<option>').attr('value', '').text('Year'));
  for (j = 0, len = used.length; j < len; j++) {
    year = used[j];
    editBlock.find('[data-year-select]').append($('<option>').attr('value', year).text(year));
  }
  editBlock.find('[data-year-select]').on('change', function() {
    $(this).children('[value = ""]').remove();
  });
  editBlock.find('[data-month-select]').append($('<option>').attr('value', '').attr('data-number', i).text('Month'));
  for (i = k = 0, len1 = months.length; k < len1; i = ++k) {
    month = months[i];
    editBlock.find('[data-month-select]').append($('<option>').attr('value', month).attr('data-number', i).text(month));
  }
  editBlock.find('[data-month-select]').on('change', function() {
    $(this).children('[value = ""]').remove();
  });
  for (m = 0, len2 = degrees.length; m < len2; m++) {
    degree = degrees[m];
    editBlock.find('[data-degree-select]').append($('<option>').attr('value', degree).text(degree));
  }
  str = void 0;
  l = 0;
  len3 = countries.length;
  editBlock.find('[data-country-select]').append($('<option>').attr('value', '').text('Choose your country'));
  while (l < len3) {
    country = countries[l];
    str = $('<option>').attr('value', country).text(country);
    editBlock.find('[data-country-select]').append(str);
    l++;
  }
  editBlock.find('[data-country-select]').on('change', function() {
    $(this).children('[value = ""]').remove();
  });
  editBlock.find('.for-edit').addClass('hidden');
  editBlock.find('.for-add').removeClass('hidden');
  if (editBlock.attr('id') === 'edit-summary-popup') {
    relatedBlock = $('#summaryMess');
    formData = relatedBlock.text().trim();
  } else if (editBlock.attr('id') === 'edit-experience-popup') {
    relatedBlock = $('#experienceMore');
    formData = relatedBlock.html();
  } else if (editBlock.attr('id') === 'edit-education-popup') {
    relatedBlock = $('#educationMore');
    formData = relatedBlock.html();
  } else if (editBlock.attr('id') === 'edit-certification-popup') {
    relatedBlock = $('#certificationMore');
    formData = relatedBlock.html();
  } else if (editBlock.attr('id') === 'edit-volunteering-popup') {
    relatedBlock = $('#volunteeringMore');
    formData = relatedBlock.html();
  } else if (editBlock.attr('id') === 'edit-gereral-popup') {
    relatedBlock = $('#userMainInfo');
    formData = relatedBlock.html();
  }
});

if (!Object.entries) {
  console.log('no entries');
  Object.entries = function(obj) {
    var i, ownProps, resArray;
    ownProps = Object.keys(obj);
    i = ownProps.length;
    resArray = new Array(i);
    while (i--) {
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    }
    return resArray;
  };
}
