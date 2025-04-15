$(document).ready(function() {
  $('.timeline .point').hover(function(e) {
    return $('.timeline .point').removeClass('active');
  });
  $('.timeline').mouseleave(function(e) {
    $('.timeline .point').eq(0).addClass('active');
  });
});
