var processMainMenu;

processMainMenu = function() {
  var dropdown, dropdownMenu, list, menu, menuWidth, totalWidth;
  dropdown = $('#toggleMenuDropdown');
  dropdownMenu = dropdown.find('.dropdown');
  menu = $('.main-menu .menu');
  dropdown.find('li').each(function(i, li) {
    return $(li).insertAfter($('.main-menu .menu > li').not(dropdown).eq(-1));
  });
  list = $('.main-menu .menu > li').not(dropdown);
  totalWidth = 0;
  menuWidth = $('.main-menu').outerWidth();
  list.each(function(i, li) {
    totalWidth += $(li).outerWidth();
    if (totalWidth > (menuWidth - 120)) {
      return $(li).appendTo(dropdownMenu);
    }
  });
  if (dropdownMenu.find('> li').length === 0) {
    dropdown.addClass('hidden');
  } else {
    dropdown.removeClass('hidden');
  }
};

processMainMenu();

$('#toggleMenuDropdown > a').click(function(e) {
  e.preventDefault();
  $('#toggleMenuDropdown').toggleClass('active');
});

$(document).click(function(e) {
  if ($(e.target).closest('#toggleMenuDropdown').length === 0) {
    $('#toggleMenuDropdown').removeClass('active');
  }
});

$(window).resize(function() {
  waitForFinalEvent(function() {
    processMainMenu();
  }, 150, 'menu');
});
