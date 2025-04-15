$(document).ready(function() {
  var heroInterval, i;
  i = 1;
  heroInterval = setInterval(function() {
    $('.hero-section').removeClass('bg-color1 bg-color2 bg-color3 bg-color4 bg-color5 bg-color6 bg-color7 bg-color8').addClass("bg-color" + i);
    if (i < 4) {
      i++;
    } else {
      clearInterval(heroInterval);
      $('#CasperBody').attr('transform', "translate(0,0)");
      $('.hero-section, .main-header, .animation-svg').addClass('loaded');
    }
  }, 500);
});
