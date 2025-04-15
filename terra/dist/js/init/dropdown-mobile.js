var dropdownOpen;

(dropdownOpen = function() {
  if (window.innerWidth <= 1199) {
    $(document).find('[data-dropdown]').each(function(i, elem) {
      $(elem).on('click', function() {
        $('.dropdown').not($(this)).each(function(i, el) {
          $(el).removeClass('active');
        });
        $(this).toggleClass('active');
      });
    });
  } else {
    $(document).find('[data-dropdown]').each(function(i, elem) {
      return $(elem).off('click', function() {
        $('.dropdown').not($(this)).each(function(i, el) {
          $(el).removeClass('active');
        });
        $(this).toggleClass('active');
      });
    });
    return;
  }
})();

$(window).resize(function() {
  if (window.innerWidth <= 1199) {
    dropdownOpen();
  }
});
