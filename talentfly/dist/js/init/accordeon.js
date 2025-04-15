var contents, remove, titles;

contents = $('.accordeon-content');

titles = $('.accordeon-title');

titles.on('click', function() {
  var content, title;
  title = $(this);
  remove(this);
  $(title).toggleClass('toggle-open');
  contents.filter(':visible').slideUp(function() {
    $(this).prev('.accordeon-title').removeClass('is-opened');
  });
  content = title.next('.accordeon-content');
  if (!content.is(':visible')) {
    content.slideDown(function() {
      title.addClass('is-opened');
    });
  }
});

remove = function(title) {
  $('.accordeon-title').each(function(index, element) {
    if (element !== title) {
      $(element).removeClass('toggle-open');
      $(element).removeClass('is-opened');
    }
  });
};
