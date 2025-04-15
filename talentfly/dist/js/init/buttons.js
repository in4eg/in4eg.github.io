$('.btn').mousedown(function(e) {
  var left, top;
  left = e.pageX - $(this).offset().left;
  top = e.pageY - $(this).offset().top;
  $('.fade', this).css({
    left: left + "px",
    top: top + "px"
  });
  setTimeout((function(_this) {
    return function() {
      return $('.fade', _this).addClass('active');
    };
  })(this), 1);
  setTimeout((function(_this) {
    return function() {
      return $('.fade', _this).removeClass('active');
    };
  })(this), 610);
});

$('input[type="checkbox"], input[type="radio"]').keydown(function(e) {
  if (e.keyCode === 13) {
    $(this).trigger('click');
  }
});
