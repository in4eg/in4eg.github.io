$('[data-oninput]').on('click touch', function(e) {
  e.stopPropagation();
  $($(this).data('oninput')).focus();
});
