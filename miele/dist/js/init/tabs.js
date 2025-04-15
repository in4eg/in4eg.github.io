$(function() {

  /*tabs */
  var setActiveTab;
  setActiveTab = function(content, indx) {
    content.find('.content').removeClass('active').eq(indx).addClass('active');
    $('.form-btn').removeClass('active').eq(indx).addClass('active');
    if ($(document).width() <= 640) {
      $('html,body').scrollTop(content.find('.content').eq(indx).offset().top);
    }
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
});

$('.next-btn').on('click', function() {
  $('.content').removeClass('active');
  $('.content').eq(1).addClass('active');
  $('.tabs').find('li').removeClass('active');
  $('.tabs').find('li').eq(1).addClass('active');
  $(this).removeClass('active');
  $('.submit-btn').addClass('active');
});
