$(document).ready(function() {
  $('.sign-form .call-btn').click(function(e) {
    e.preventDefault();
    $(this).closest('form').addClass('expanded');
    $(this).closest('form').find('input').focus();
  });
  $('.sign-form input').keyup(function(e) {
    if (e.keyCode === 27) {
      $(this).blur();
      $('.sign-form').removeClass('expanded');
    }
  });
  $('body').click(function(e) {
    if ($(e.target).closest('.sign-form').length === 0) {
      $('.sign-form').removeClass('expanded');
    }
  });
});
