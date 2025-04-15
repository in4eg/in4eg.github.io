$('[data-dots]').on('click', '.dot', function() {
  var index;
  index = $(this).index();
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
  $($('[data-dots]').data('dots')).find('[data-slide]').removeClass('active');
  $($('[data-dots]').data('dots')).find('[data-slide="' + index + '"]').addClass('active');
});
