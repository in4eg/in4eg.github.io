$(document).on('click', '[data-add-video]', function(e) {
  var caption, data, dataArr, title, video;
  e.preventDefault();
  data = $(this).data('add-video');
  dataArr = data.split(';');
  title = $($(this).attr('href')).find('[data-title]');
  caption = $($(this).attr('href')).find('[data-caption]');
  video = $($(this).attr('href')).find('[data-link-src]');
  title.html(dataArr[0].trim());
  caption.html(dataArr[1].trim());
  video.attr('href', dataArr[2].trim());
});
