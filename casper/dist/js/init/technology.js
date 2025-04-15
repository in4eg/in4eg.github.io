$(document).ready(function() {
  $('.technology-list li').click(function(e) {
    if ($(e.target).closest('.tooltip').length === 0) {
      $('.technology-wrapper .point').not(this).removeClass('opened');
      $(this).find('.point').toggleClass('opened');
      $(this).siblings().removeClass('opened');
      $(this).addClass('opened');
      $('.servers-list > li').removeClass('opened');
    }
  });
  $('.technology-wrapper .point .close').click(function(e) {
    $(this).closest('.point').removeClass('opened');
    $(this).parents('li').removeClass('opened');
  });
  $('.servers-list > li').click(function(e) {
    $('.technology-list li').removeClass('opened');
    $('.technology-list li').find('.point').removeClass('opened');
    $($('.servers-list > li')).not(this).removeClass('opened');
    $(this).toggleClass('opened');
  });
});
