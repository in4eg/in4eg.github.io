var inputSearch, searchBox;

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
