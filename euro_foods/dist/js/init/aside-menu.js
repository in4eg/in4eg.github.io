$('[data-anchors]').on('click', '.item', function() {
  $('body').css('width', '').removeClass('overlayed');
  $('.main-menu, [data-menu]').removeClass('active');
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
});
