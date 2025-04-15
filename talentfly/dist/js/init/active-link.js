var getUrlVar;

$(document).ready(function() {});

(getUrlVar = function() {
  var i, len, link, links, url;
  url = location.protocol + '//' + location.host + location.pathname;
  links = $('nav').find('.menu').find('a');
  for (i = 0, len = links.length; i < len; i++) {
    link = links[i];
    if (url.endsWith($(link).attr('href'))) {
      $(link).parent('li').addClass('active');
    }
  }
  return;
})();

if (!String.prototype.endsWith) {
  Object.defineProperty(String.prototype, 'endsWith', {
    value: function(searchString, position) {
      var lastIndex, subjectString;
      subjectString = this.toString();
      if (position === void 0 || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      lastIndex = subjectString.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
    }
  });
}
