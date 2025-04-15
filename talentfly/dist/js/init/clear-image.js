$('[data-hide]').click(function() {
  $($(this).data('hide')).find('img').addClass('hidden');
  $(this).addClass('hidden');
});
