$('[data-toggle]').click(function() {
  if ($($(this).data('toggle')).hasClass('active')) {
    $(this).removeClass('active');
    $($(this).data('toggle')).removeClass('animated');
    setTimeout((() => {
      $($(this).data('toggle')).removeClass('active');
    }), 250);
  } else {
    $($(this).data('toggle')).addClass('active');
    $(this).addClass('active');
    setTimeout((() => {
      $($(this).data('toggle')).addClass('animated');
    }), 100);
  }
});

$('body').click(function(e) {
  if ($(e.target).closest('[data-toggle], #mainNav').length === 0) {
    $('#mainNav').removeClass('animated');
    setTimeout((() => {
      $('#mainNav').removeClass('active');
      $('.toggle-btn').removeClass('active');
    }), 250);
  }
});

$('.nav-list').on('click', 'li', function() {
  if (window.innerWidth <= 768) {
    $('#mainNav').removeClass('animated');
    setTimeout((() => {
      $('#mainNav').removeClass('active');
      $('.toggle-btn').removeClass('active');
    }), 250);
  }
});
