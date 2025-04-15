var beforePrevLastDropDown, closeDropdowns, footer, footerTop, lastDropdown, lastDropdownTop, prevLastDropDown;

closeDropdowns = function(dropdown) {
  $('.js-dropdown').each(function(index, element) {
    if (dropdown !== element) {
      $(element).removeClass('is-open');
    }
  });
};

(function($, window, document) {
  var $html;
  $html = $('html');
  $html.on('click.ui.dropdown', '.js-dropdown', function(e) {
    e.preventDefault();
    closeDropdowns(this);
    $(this).toggleClass('is-open');
  });
  $html.on('click.ui.dropdown', '.js-dropdown [data-dropdown-value]', function(e) {
    var $dropdown, $item;
    e.preventDefault();
    $item = $(this);
    $dropdown = $item.parents('.js-dropdown');
    $dropdown.find('.js-dropdown__input').val($item.data('dropdown-value'));
  });
  $html.on('click.ui.dropdown', function(e) {
    var $target;
    $target = $(e.target);
    if (!$target.parents().hasClass('js-dropdown')) {
      $('.js-dropdown').removeClass('is-open');
    }
  });
})(jQuery, window, document);

lastDropdown = $('.c-dropdown__list').last();

footer = $('.main-footer.admin-footer')[0];


/* if elements are exist */

if (lastDropdownTop && footer) {
  lastDropdownTop = $(lastDropdown).offset().top;
  footerTop = $(footer).offset().top;
  if (footerTop < lastDropdownTop + 330) {
    lastDropdown.addClass('dropdown-up');
    prevLastDropDown = $('.c-dropdown__list')[$('.c-dropdown__list').length - 2];
    $(prevLastDropDown).addClass('dropdown-up');
    beforePrevLastDropDown = $('.c-dropdown__list')[$('.c-dropdown__list').length - 3];
    $(beforePrevLastDropDown).addClass('dropdown-up');
  }
}
