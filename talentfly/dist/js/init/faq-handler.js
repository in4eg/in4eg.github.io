var bufferedQuestionObjects, contents, getSearchResults, hideQuestions, highlightKeys, i, inputSearch, questionObjects, remove, searchBox, searchQuestions, showMessage, titles;

inputSearch = $('#inputSearch')[0];

searchBox = $('#searchBox')[0];

$(inputSearch).on('click', function() {
  $(searchBox).addClass('long-search-box');
});

$(inputSearch).on('blur', function() {
  if (!inputSearch.value) {
    $(searchBox).removeClass('long-search-box');
    $(searchBox).addClass('usual-search-box');
  } else {
    $(searchBox).addClass('long-search-box');
  }
});

contents = $('.answer');

titles = $('.question');

titles.on('click', function() {
  var content, title;
  title = $(this);
  remove(this);
  $(title).toggleClass('toggle-open');
  contents.filter(':visible').slideUp(function() {
    $(this).prev('.question').removeClass('is-opened');
  });
  content = title.next('.answer');
  if (!content.is(':visible')) {
    content.slideDown(function() {
      title.addClass('is-opened');
    });
  }
});

remove = function(title) {
  $('.question').each(function(index, element) {
    if (element !== title) {
      $(element).removeClass('toggle-open');
      $(element).removeClass('is-opened');
    }
  });
};

searchQuestions = function(key) {
  var results;
  results = void 0;
  results = getSearchResults(key);
  if (results.found.length === 0) {
    showMessage();
  } else {
    highlightKeys(key, results);
    hideQuestions(results);
  }
};

getSearchResults = function(key) {
  var i;
  var found, i, unfound;
  unfound = [];
  found = [];
  i = 0;
  while (i < bufferedQuestionObjects.length) {
    questionObjects[i].innerHTML = bufferedQuestionObjects[i];
    i++;
  }
  i = 0;
  while (i < questionObjects.length) {
    if (questionObjects[i].innerText.toLowerCase().includes(key.toLowerCase()) === false) {
      unfound.push(questionObjects[i]);
    } else {
      found.push(questionObjects[i]);
    }
    i++;
  }
  return {
    'unfound': unfound,
    'found': found
  };
};

showMessage = function() {
  $('.search-box-with-message').addClass('not-found');
  $('.accordeon-box').css('display', 'none');
};

highlightKeys = function(key, results) {
  var i, inner, regexp;
  regexp = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
  inner = void 0;
  i = 0;
  while (i < questionObjects.length) {
    inner = questionObjects[i].innerHTML;
    questionObjects[i].innerHTML = inner.replace(regexp, '<span class="highlighted-key">$&</span>');
    i++;
  }
};

hideQuestions = function(results) {
  var i, j;
  if ($('.search-box-with-message').hasClass('not-found')) {
    $('.search-box-with-message').removeClass('not-found');
    $('.accordeon-box').css('display', 'block');
  }
  i = 0;
  while (i < results.unfound.length) {
    results.unfound[i].parentNode.parentNode.style.display = 'none';
    i++;
  }
  j = 0;
  while (j < results.found.length) {
    results.found[j].parentNode.parentNode.style.display = 'block';
    j++;
  }
};

$(document).ready(function() {
  $('#inputSearch').on('keyup', function() {
    searchQuestions($(this).context.value);
  });
});

questionObjects = document.getElementsByClassName('question-text');

bufferedQuestionObjects = [];

i = 0;

while (i < questionObjects.length) {
  bufferedQuestionObjects[i] = questionObjects[i].innerHTML;
  i++;
}
