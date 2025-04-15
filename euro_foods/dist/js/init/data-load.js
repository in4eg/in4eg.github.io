var loaded, onScroll;

loaded = false;

onScroll = function() {
  $('[data-onload]').each(function(i, parent) {
    $(window).scroll(function() {
      var preloaderTemplate, url;
      if ($(window).scrollTop() + window.innerHeight >= document.body.scrollHeight && loaded === false) {
        console.log(loaded);
        if ($(parent).parents('.content').hasClass('active')) {
          url = $(parent).data('url');
          preloaderTemplate = '<div class=\"holder\"> <div class=\"preloader\"> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> </div> </div>';
          if ($(parent).find('.holder').length < 1) {
            $(parent).append(preloaderTemplate);
            setTimeout(((function(_this) {
              return function() {
                $.ajax({
                  url: url,
                  type: 'get',
                  success: function(data) {
                    $(parent).find('.holder').remove();
                    $(parent).append(data);
                    loaded = true;
                  }
                });
              };
            })(this)), 1500);
          }
        }
      } else if ($(document).scrollTop() < $(parent).offset().top) {
        loaded = false;
      }
    });
  });
};

$(document.body).on('touchmove', onScroll);

$(window).on('scroll', onScroll);
