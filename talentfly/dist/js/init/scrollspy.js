var scrollSpy;

scrollSpy = function(nav) {
  var links;
  links = nav.find('[data-scrollto]');
  $(window).scroll(function() {
    var block, j, len, link;
    for (j = 0, len = links.length; j < len; j++) {
      link = links[j];
      block = $(link).data('scrollto');
      $(block).each(function(i, section) {
        if ($(window).scrollTop() + 35 >= $(section).offset().top) {
          $($(link).data('scrollto', $(link).data('scrollto'))).parent().siblings().removeClass('active');
          $($(link).data('scrollto', $(link).data('scrollto'))).parent().addClass('active');
        } else {
          $($(link).data('scrollto', $(link).data('scrollto'))).removeClass('active');
        }
      });
    }
  });
};

scrollSpy($('.spy-nav'));
