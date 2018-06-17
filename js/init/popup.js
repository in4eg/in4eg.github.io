$(function() {
  $(document).on('click', '[data-call]', function(e) {
    var called, containers;
    e.preventDefault();
    called = $($(this).data('call'));
    containers = $('[data-scrollbar]');
    if (!called.hasClass('active')) {
      $('body, .main-header, html').css('width', $('body').width() + 'px').addClass('overlayed');
      $('.main-header, main').addClass('blured');
      called.show().addClass('showed');
      setTimeout(function() {
        called.addClass('active');
        if (typeof ps !== 'undefined') {
          ps.update();
        }
        if (called.data('onopen') && window[called.data('onopen')]) {
          return window[called.data('onopen')](called);
        }
      }, 50);
    }
  });
  window.CallPopup = function(selector) {
    var called;
    called = $(selector);
    if (typeof ps !== 'undefined') {
      ps.update();
    }
    if (!called.hasClass('active')) {
      $('body, html').css('width', $('body').width() + 'px').addClass('overlayed');
      called.show().addClass('showed');
      setTimeout(function() {
        called.addClass('active');
        if (called.data('onopen') && window[called.data('onopen')]) {
          return window[called.data('onopen')](called);
        }
      }, 50);
      $('.main-header, main').addClass('blured');
    }
  };
  $(document).on('click', '[data-dismiss]', function(e) {
    var called;
    e.preventDefault();
    called = $($(this).data('dismiss'));
    $('body, html').css('width', '').removeClass('overlayed');
    called.removeClass('active');
    setTimeout(function() {
      called.hide().removeClass('showed');
      if (called.data('onclose') && window[called.data('onclose')]) {
        window[called.data('onclose')](called);
      }
      return $('.main-header, main').removeClass('blured');
    }, 300);
  });
  window.hidePopups = function() {
    $('.popup').each(function(i, popup) {
      var called;
      called = $(popup);
      $('body, html').css('width', '').removeClass('overlayed');
      called.removeClass('active');
      setTimeout(function() {
        $('.success-fadeout').removeClass('active');
        $('.success-fadeout').children('.success-fadein').fadeOut();
        called.hide().removeClass('showed');
        if (called.data('onclose') && window[called.data('onclose')]) {
          window[called.data('onclose')](called);
        }
        return $('.main-header, main').removeClass('blured');
      }, 300);
    });
  };
  $('.close-popup').click(function(e) {
    e.preventDefault();
    hidePopups();
  });
  $('.popup').click(function(e) {
    if ($(e.target).closest('.inner').length === 0) {
      e.preventDefault();
      hidePopups();
    }
  });
});
