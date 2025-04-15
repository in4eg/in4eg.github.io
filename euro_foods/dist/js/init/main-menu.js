$('[data-menu]').click(function(e) {
  $(this).toggleClass('active');
  $($(this).data('menu')).toggleClass('active');
  $('.main-header').toggleClass('opened');
  if ($(this).hasClass('active')) {
    $('body,html').css('width', $('body').width() + 'px').addClass('overlayed menu-overlayed');
  } else {
    $('body,html').css('width', '').removeClass('overlayed menu-overlayed');
  }
});

$('body').click(function(e) {
  if ($(e.target).closest('.main-menu .menu-inner, [data-menu]').length === 0) {
    if ($('.main-menu').hasClass('active')) {
      $('.main-menu').removeClass('active');
      $('[data-menu]').removeClass('active');
      $('.main-header').removeClass('opened');
      $('body,html').css('width', '').removeClass('overlayed menu-overlayed');
    }
  }
});

$('[data-hide-menu]').click(function(e) {
  $($(this).data('hide-menu')).removeClass('active');
  $('.main-header').removeClass('opened');
  $('body,html').css('width', '').removeClass('overlayed menu-overlayed');
  $('[data-menu]').removeClass('active');
});
