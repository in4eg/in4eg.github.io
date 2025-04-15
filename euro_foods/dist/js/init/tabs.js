var setActiveTab;

setActiveTab = function(content, indx) {
  content.each(function(i, cont) {
    $('> .content', cont).removeClass('active').eq(indx).addClass('active');
  });
};

$('body').on('click', '[data-tabs] > li', function(e) {
  var nav;
  nav = $(this).closest('[data-tabs]')[0];
  if ($(this).hasClass('disabled')) {
    return;
  }
  $(this).siblings().removeClass('active');
  $(this).addClass('active');
  setActiveTab($($(nav).data('tabs')), $(this).index());
});
