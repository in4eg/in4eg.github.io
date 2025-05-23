var blockToRemove;

blockToRemove = void 0;

$(function() {
  var hidePopups;
  $('[data-call]').click(function(e) {
    var called;
    e.preventDefault();
    called = $($(this).data('call'));
    if (!called.hasClass('active')) {
      $('body').css('width', $('body').width() + 'px').addClass('overlayed');
      called.show();
      setTimeout(function() {
        called.addClass('active');
        if (called.data('onopen') && window[called.data('onopen')]) {
          return window[called.data('onopen')](called);
        }
      }, 100);
      if ($(this).data('id', '#removePopup')) {
        blockToRemove = $(this).parents('.item').data('id');
      }
    }
  });
  window.CallPopup = function(selector) {
    var called;
    called = $(selector);
    if (!called.hasClass('active')) {
      $('body').css('width', $('body').width() + 'px').addClass('overlayed');
      called.show();
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
    $('body').css('width', '').removeClass('overlayed');
    called.removeClass('active');
    setTimeout(function() {
      called.hide();
      if (called.data('onclose') && window[called.data('onclose')]) {
        return window[called.data('onclose')](called);
      }
    }, 300);
  });
  hidePopups = function() {
    $('.popup').each(function(i, popup) {
      var called;
      called = $(popup);
      $('body').css('width', '').removeClass('overlayed');
      called.removeClass('active');
      setTimeout(function() {
        called.hide();
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
