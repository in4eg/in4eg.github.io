$('.accordeon .title').each(function(i, title) {
  $(title).click(function(e) {
    $('.accordeon').not($(title).parent()[0]).each(function(i, acc) {
      $('.title', acc).removeClass('active');
      $('.inner', acc).stop(true, true).slideUp();
    });
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).siblings('.inner').stop(true, true).slideUp();
    } else {
      $(this).addClass('active');
      $(this).siblings('.inner').stop(true, true).slideDown();
    }
  });
});
