if (navigator.userAgent.search('Safari') >= 0 && navigator.userAgent.search('Chrome') < 0) {
  $(document).ready(function() {
    $('.process-step').addClass('safari');
    $('.steps-divider').addClass('safari');
  });
}
