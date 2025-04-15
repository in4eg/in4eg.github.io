jQuery(function($) {
  var checkFragment, items, numItems, perPage;
  items = $('.intrview-item');
  numItems = 30;
  perPage = items.length;
  checkFragment = function() {
    var hash;
    hash = window.location.hash || '#page-1';
    hash = hash.match(/^#page-(\d+)$/);
    if (hash) {
      $('#pagination-box').pagination('selectPage', parseInt(hash[1]));
    }
  };
  $('#pagination-box').pagination({
    items: numItems,
    itemsOnPage: perPage,
    displayedPages: 4,
    currentPage: 1,
    edges: 1,
    ellipsePageSet: false,
    cssStyle: '',
    prevText: '<i class="icon icon-angle-down" data-icon-left></i> <div class="previous">Previous</div>',
    nextText: '<div class="previous">Next</div> <i class="icon icon-angle-down" data-icon-right ></i>',
    onInit: function() {
      var i, page, ref;
      $('.pages-date').append(this.pages);
      for (page = i = 1, ref = this.pages; 1 <= ref ? i <= ref : i >= ref; page = 1 <= ref ? ++i : --i) {
        $('#page-state').find('[data-page-select]').append($('<option>').attr('value', page).text(page));
      }
    },
    onPageClick: function(page, e) {
      $('[data-page-select]').val(page);
    }
  }, $('.select').change(function() {
    var showFrom, showTo;
    showFrom = perPage * $('[data-page-select]').val() - 1;
    showTo = showFrom + perPage;
    items.hide().slice(showFrom, showTo).show();
    $('#pagination-box').pagination('selectPage', $('[data-page-select]').val());
    window.location.hash = "#page-" + $('[data-page-select]').val();
  }), $('.previous').on('mousedown', function() {
    console.log('sdk');
  }), $('span.next').click(function() {}));
  $(window).bind('popstate', checkFragment);
  checkFragment();
});
