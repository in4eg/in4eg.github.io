$(function() {
  $('[data-call]:not(#applyOrder)').click(function(e) {
    var called;
    e.preventDefault();
    called = $($(this).data('call'));
    if (!called.hasClass('active')) {
      $('body, .main-header, html').css('width', $('body').width() + 'px').addClass('overlayed');
      called.show().addClass('showed');
      setTimeout(function() {
        called.addClass('active');
        if (called.data('onopen') && window[called.data('onopen')]) {
          return window[called.data('onopen')](called);
        }
      }, 100);
    }
  });
  window.CallPopup = function(selector) {
    var called;
    called = $(selector);
    if (!called.hasClass('active')) {
      $('body, .main-header, html').css('width', $('body').width() + 'px').addClass('overlayed');
      called.show().addClass('showed');
      setTimeout(function() {
        called.addClass('active');
        if (called.data('onopen') && window[called.data('onopen')]) {
          return window[called.data('onopen')](called);
        }
      }, 100);
    }
  };
  $('[data-dismiss]').click(function(e) {
    var called;
    e.preventDefault();
    called = $($(this).data('dismiss'));
    $('body, .main-header, html').css('width', '').removeClass('overlayed');
    called.removeClass('active');
    setTimeout(function() {
      called.hide().removeClass('showed');
      if (called.data('onclose') && window[called.data('onclose')]) {
        return window[called.data('onclose')](called);
      }
    }, 300);
  });
  window.hidePopups = function() {
    $('.popup').each(function(i, popup) {
      var called;
      called = $(popup);
      $('body, .main-header, html').css('width', '').removeClass('overlayed');
      called.removeClass('active');
      setTimeout(function() {
        $('.success-fadeout').removeClass('active');
        $('.success-fadeout').children('.success-fadein').fadeOut();
        called.hide().removeClass('showed');
        if (called.data('onclose') && window[called.data('onclose')]) {
          return window[called.data('onclose')](called);
        }
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
