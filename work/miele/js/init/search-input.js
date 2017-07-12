$('.search-form').find('.input').keyup(function() {
  if ($(this).val().trim().length > 1) {
    $(this).closest('.search').addClass('active');
    $('.search-results .scrollable').perfectScrollbar('update');
  } else {
    $(this).closest('.search').removeClass('active');
  }
});
