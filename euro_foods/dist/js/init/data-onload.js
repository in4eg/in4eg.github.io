$('[data-onload]').click(function(e) {
  var parent, url;
  e.preventDefault();
  url = $(this).data('url');
  parent = $(this).data('onload');
  $.ajax({
    url: url,
    type: 'get',
    success: function(data) {
      $('.preloader').removeClass('active');
      $(parent).append(data);
    }
  });
});
