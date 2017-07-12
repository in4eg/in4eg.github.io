var setActiveTab;

setActiveTab = function(content, indx) {
  content.find('.tab').removeClass('active').eq(indx).addClass('active');
};

$('[data-tabs]').each(function(i, nav) {
  $(nav).find('li').click(function(e) {
    e.preventDefault();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    setActiveTab($($(nav).data('tabs')), $(this).index());
  });
  $($(nav).data('tabs')).find('[data-title]').each(function(i, title) {
    $(title).click(function() {
      $(nav).find('li').eq(i).click();
    });
  });
});

$('.tabs-content').on('click', '.anchor', function(e) {
  var targetOffset;
  e.preventDefault();
  $('[data-tabs="#' + $(this).closest('.tabs-content').attr('id') + '"]').find('li').eq($(this).closest('.tab').index()).click();
  if (window.innerWidth <= 767) {
    targetOffset = $(this).offset().top;
    $('html,body').animate({
      scrollTop: targetOffset
    }, 250);
  }
});
