$('.dropdown-list').on('click', 'li', function() {
  var html;
  html = $(this).text();
  $(this).parents().siblings('.anchor').find('.text').html(html);
  $(this).parents('.dropdown').removeClass('active');
});
