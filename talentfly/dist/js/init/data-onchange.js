$(document).find('[data-onchange]').each(function(i, input) {
  $(input).on('change', function(e) {
    var data, url;
    url = $(input).data('url');
    data = {
      status: $(input).prop('checked'),
      videoId: $(input).data('id')
    };
    if (window[$(input).attr('data-onchange')]) {
      window[$(input).attr('data-onchange')](url, data);
    }
  });
});

window.sendVideoStatus = function(url, data) {
  console.log(data);
  $.ajax({
    data: data,
    url: url,
    type: 'get',
    cache: false,
    error: function(data, textStatus, errorThrown) {
      console.log(errorThrown);
    },
    success: function(data) {
      console.log('video status send');
    }
  });
};
