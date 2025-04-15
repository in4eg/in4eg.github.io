$(document).on('click', '[data-call]', function(e) {
  var called, instance;
  e.preventDefault();
  console.log('call popup');
  called = $($(this).data('call'));
  console.log(called);
  if (!called.hasClass('active')) {
    called.show().addClass('showed');
    setTimeout(function() {
      console.log('setTimeout');
      called.addClass('active');
      if (called.data('onopen') && window[called.data('onopen')]) {
        return window[called.data('onopen')](called);
      }
    }, 100);
  }
  if (called.attr('id') === 'edit-experience-popup') {
    for (instance in CKEDITOR.instances) {
      instance = instance;
      window.setTimeout((function() {
        CKEDITOR.instances.descriptionEdit.setData('');
      }), 10);
    }
  }
});

window.CallPopup = function(selector) {
  var called;
  called = $(selector);
  if (!called.hasClass('active')) {
    $('body, html').addClass('overlayed');
    called.show().addClass('showed');
    setTimeout(function() {
      called.addClass('active');
      if (called.data('onopen') && window[called.data('onopen')]) {
        return window[called.data('onopen')](called);
      }
    }, 100);
  }
};

$(document).on('click', '[data-dismiss]', function(e) {
  var called;
  e.preventDefault();
  called = $($(this).data('dismiss'));
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
