$(document).on('click', '[data-down]', function() {
  var id, nextElemIndex, parent, relatedElement, relatedIndex, topPosition, totalIndex, url;
  totalIndex = $($(this).data('down')).children().length;
  nextElemIndex = $(this).parents('.block-info').next().index();
  topPosition = $(this).parents('.block-info').position().top;
  id = $($(this).data('down')).find('.block-info').find('.title-input').data('push');
  parent = '#' + $($(this).data('down')).find('.block-info').parent().attr('id');
  url = $(parent).data('url');
  relatedElement = $($(this).parents('.block-info').find('[data-id]').data('push')).parents('li');
  relatedIndex = $(relatedElement).index();
  if ($(this).parents('.block-info').next().length > 0) {
    $(this).parents('.block-info').insertAfter($(this).parents('.block-info').next());
    relatedElement.insertAfter(relatedElement.next());
    $('.mfp-wrap').animate({
      scrollTop: topPosition
    }, 500);
  }
  sendElementIndex(nextElemIndex, id, parent, url);
});

$(document).on('click', '[data-up]', function() {
  var id, nextElemIndex, parent, relatedElement, relatedIndex, topPosition, totalIndex, url;
  totalIndex = $($(this).data('up')).children().length;
  nextElemIndex = $(this).parents('.block-info').prev().index();
  topPosition = $(this).parents('.block-info').position().top - $(this).parents('.block-info').height();
  id = $($(this).data('up')).find('.block-info').find('.title-input').data('push');
  parent = '#' + $($(this).data('up')).find('.block-info').parent().attr('id');
  url = $(parent).data('url');
  relatedElement = $(document).find($(this).parents('.block-info').find('[data-id]').data('push')).parents('li');
  relatedIndex = $(relatedElement).index();
  if ($(this).parents('.block-info').prev().length > 0) {
    $(this).parents('.block-info').insertBefore($(this).parents('.block-info').prev());
    relatedElement.insertBefore(relatedElement.prev());
    $('.mfp-wrap').animate({
      scrollTop: topPosition
    }, 500);
  }
  sendElementIndex(nextElemIndex, id, parent, url);
});
