var mobileTabs, setActiveTab;

setActiveTab = function(content, indx) {
  content.find('.content').removeClass('active').eq(indx).addClass('active');
};

$('[data-tabs]').each(function(i, nav) {
  $(nav).find('li').click(function(e) {
    e.preventDefault();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    setActiveTab($($(nav).data('tabs')), $(this).index());
  });
});

mobileTabs = function() {
  if (window.innerWidth <= 640) {
    $('[data-tabs-anchor]').click(function() {
      $(this).toggleClass('active');
      $(this).next('.tabs-nav').toggleClass('active');
    });
    $('.tabs-nav').on('click', 'li', function() {
      var html;
      html = $(this).text();
      $(this).parent('.tabs-nav').siblings('.tabs-anchor-mobile').html(html);
      $(this).parent('.tabs-nav').siblings('.tabs-anchor-mobile').removeClass('active');
      $(this).parent('.tabs-nav').removeClass('active');
    });
  }
};

mobileTabs();
