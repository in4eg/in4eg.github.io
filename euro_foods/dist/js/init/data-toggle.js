$('[data-show]').click(function() {
  $($(this).data('show')).addClass('active');
  if (window.innerWidth > 768) {
    $($(this).data('show')).find('input').focus();
  }
  if ($($(this).data('show')).hasClass('search-form')) {
    $('#searchForm').animate({
      width: 530,
      opacity: 1
    }, 250);
  }
});

$('[data-hide]').click(function() {
  $($(this).data('hide')).removeClass('active animate');
  $('#searchForm').css({
    width: 0,
    opacity: 0
  });
});

$('[data-toggle]').click(function(e) {
  $(this).toggleClass('active');
  $($(this).data('toggle')).toggleClass('active');
});

$('body').click(function(e) {
  if ($(e.target).closest('.toggle-outer, [data-toggle], [data-show]').length === 0) {
    $('.toggle-outer').removeClass('active');
    $('#searchForm').css({
      width: 0,
      opacity: 0
    });
  }
});
