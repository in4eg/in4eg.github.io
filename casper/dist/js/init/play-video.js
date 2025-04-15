$('#playVideo').click(function() {
  $(this).parents('.video-hover').addClass('hidden');
  $(this).parents('.video-hover').next('iframe').find('.ytp-large-play-button').trigger('click');
});
