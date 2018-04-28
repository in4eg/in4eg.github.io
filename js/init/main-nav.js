$('[data-toggle]').click(function() {
  if ($($(this).data('toggle')).hasClass('active')) {
    $(this).removeClass('active');
    $($(this).data('toggle')).removeClass('animated');
    setTimeout(((function(_this) {
      return function() {
        $($(_this).data('toggle')).removeClass('active');
      };
    })(this)), 250);
  } else {
    $($(this).data('toggle')).addClass('active');
    $(this).addClass('active');
    setTimeout(((function(_this) {
      return function() {
        $($(_this).data('toggle')).addClass('animated');
      };
    })(this)), 100);
  }
});

$('body').click(function(e) {
  if ($(e.target).closest('[data-toggle], #mainNav').length === 0) {
    $('#mainNav').removeClass('animated');
    setTimeout(((function(_this) {
      return function() {
        $('#mainNav').removeClass('active');
        $('.toggle-btn').removeClass('active');
      };
    })(this)), 250);
  }
});

$('.nav-list').on('click', 'li', function() {
  if (window.innerWidth <= 768) {
    $('#mainNav').removeClass('animated');
    setTimeout(((function(_this) {
      return function() {
        $('#mainNav').removeClass('active');
        $('.toggle-btn').removeClass('active');
      };
    })(this)), 250);
  }
});
