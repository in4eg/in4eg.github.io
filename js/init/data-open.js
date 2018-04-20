$('[data-open]').click(function() {
  $($(this).data('open')).find('.hidden').removeClass('hidden');
  $(this).fadeOut();
});
