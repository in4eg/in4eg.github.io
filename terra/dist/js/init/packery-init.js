var packeryInit;

(packeryInit = function() {
  var isActive, packeryGrid, packeryOptions, packeryToggle;
  if ($.fn.packery) {
    packeryOptions = {
      itemSelector: '.item'
    };
    packeryGrid = $('[data-packery]');
  }
  isActive = void 0;
  (packeryToggle = function() {
    if (window.innerWidth > 681) {
      isActive = true;
      if (isActive === true) {
        packeryGrid.packery(packeryOptions);
      }
    } else {
      if (isActive === true) {
        packeryGrid.packery('destroy');
        isActive = false;
      }
    }
  })();
  $(window).resize(function() {
    packeryToggle();
  });
})();
