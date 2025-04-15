var commaSeparate;

commaSeparate = function(places) {
  places.forEach(function(div) {
    var i, spansWithInnerHtml;
    spansWithInnerHtml = $(div).children('span:parent');
    i = 0;
    while (i < spansWithInnerHtml.length - 1) {
      $('<span class="comma">,</span>').insertAfter(spansWithInnerHtml[i]);
      i++;
    }
  });
};

$(document).ready(function() {
  var places;
  places = document.querySelectorAll('.place');
  commaSeparate(places);
});
