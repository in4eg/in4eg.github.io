$('[data-open]').click(function() {
  if ($($(this).data('open')).hasClass('active')) {
    $(this).removeClass('active');
    $($(this).data('open')).removeClass('animated');
    $('html,body').removeClass('overlayed');
    $('html,body').css('width', 'auto');
    setTimeout(((function(_this) {
      return function() {
        $($(_this).data('open')).removeClass('active');
      };
    })(this)), 200);
  } else {
    $(this).addClass('active');
    $($(this).data('open')).addClass('active');
    $('html,body').css('width', $('body').width() + 'px');
    $('html,body').addClass('overlayed');
    setTimeout(((function(_this) {
      return function() {
        $($(_this).data('open')).addClass('animated');
      };
    })(this)), 70);
  }
});

$('body').click(function(e) {
  if ($(e.target).closest('#navTablet, [data-open], [data-call], .popup').length === 0) {
    $('#navTablet, [data-open], #headerFade').removeClass('animated active');
    $('html,body').removeClass('overlayed');
    $('html,body').css('width', 'auto');
  }
});
