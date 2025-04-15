$(document).ready(function() {
  $('.language-select li').click(function(e) {
    var text, val;
    val = $(this).data('value');
    text = $(this).text();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.language-select input').val(val).trigger('change');
    $('.language-select .anchor .text').text(text);
  });
});
