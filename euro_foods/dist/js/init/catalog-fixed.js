var hideBlock, waitForFinalEvent;

waitForFinalEvent = (function() {
  var timers;
  timers = {};
  return function(callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = 'Don\'t call this twice without a uniqueId';
    }
    if (timers[uniqueId]) {
      clearTimeout(timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

hideBlock = function() {
  $(window).scroll(function() {
    if (window.innerWidth <= 767) {
      $('[data-scroll-hide]').addClass('hidden');
      waitForFinalEvent((function() {
        $('[data-scroll-hide]').removeClass('hidden');
      }), 500, '');
    } else {
      $('[data-scroll-hide]').removeClass('hidden');
    }
  });
};

if (window.innerWidth <= 767) {
  hideBlock();
} else {
  $('[data-scroll-hide]').removeClass('hidden');
}

$(window).resize(function() {
  if (window.innerWidth <= 767) {
    hideBlock();
  } else {
    $('[data-scroll-hide]').removeClass('hidden');
  }
});
