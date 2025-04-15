$('.anchor').click(function(e) {
  e.preventDefault();
  if ($(this).parent('[data-dropdown]').hasClass('active')) {
    $(this).parent('[data-dropdown]').removeClass('active');
  } else {
    $(this).parent('[data-dropdown]').addClass('active');
  }
  $(this).closest('[data-dropdown]').find('[data-catch-focus]').focus();
  if ($(this).hasClass('hidden-anchor')) {
    $(this).addClass('hidden');
  }
});

$('.dropdown-list').on('click', 'li', function() {
  var html;
  html = $(this).text();
  $(this).parents().siblings('.anchor').find('.text').html(html);
  $(this).parents('.dropdown').removeClass('active');
});

$('.anchor-xs').click(function(e) {
  e.preventDefault();
  if (window.innerWidth <= 640) {
    if ($(this).parent('.dropdown-xs').hasClass('active')) {
      $(this).parent('.dropdown-xs').removeClass('active');
    } else {
      $(this).parent('.dropdown-xs').addClass('active');
      $('html,body').animate({
        scrollTop: $(this).offset().top - 10
      }, 200);
    }
  }
});
