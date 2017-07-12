$(document).ready(function() {
  var setFooter, setZoomImages, teleport, waitForFinalEvent;
  waitForFinalEvent = (function() {
    var timers;
    timers = {};
    return function(callback, ms, uniqueId) {
      if (!uniqueId) {
        uniqueId = 'Don\'t call this twice without a uniqueId';
      }
      if (timers[uniqueId]) {
        clearTimeout(timers[uniqueId]);
      }
      timers[uniqueId] = setTimeout(callback, ms);
    };
  })();
  $('.btn').click(function() {
    var button, clickTimer;
    $(this).addClass('focused');
    button = $(this);
    clickTimer = setTimeout(function() {
      button.removeClass('focused');
      return clearTimeout(clickTimer);
    }, 550);
  });
  $('.tag-list').on('click', '.tag', function() {
    $(this).remove();
  });
  $('.form-btn').click(function() {
    $('html,body').scrollTop($('.basket-form').offset().top);
  });
  $('.clear').click(function() {
    var index;
    $(this).parents('.basket-item').remove();
    index = $(this).parents('.basket-item').data('item');
    console.log(index);
    $('.basket-info').find('.item-info').eq(index).remove();
  });
  $('.filter-form').on('click', 'label', function() {
    var html;
    html = $(this).text();
    console.log(html);
    $("<li class='tag'></li>").html(html).appendTo($('.tag-list'));
  });
  $('.clear-tag').click(function() {
    $('.tag-list').find('.tag').remove();
  });
  $('.block.parent').on('click', '.title', function() {
    $(this).parent().toggleClass('active');
  });
  $('.input').each(function(i, input) {
    $(input).focus(function() {
      $(input).addClass('active');
    }).blur(function() {
      if ($(input).val().trim().replace(/(\+|\-|_|\(|\)| |\s)/gim, '').length === 0) {
        $(input).removeClass('active');
        $(input).val('');
      }
    });
  });
  $('[data-dropdown]').each(function(i, elem) {
    $('.anchor', elem).click(function(e) {
      e.preventDefault();
      $(this).closest('[data-dropdown]').toggleClass('active');
      if ($(this).closest('[data-dropdown]').hasClass('active')) {
        $(this).closest('[data-dropdown]').find('.scrollable').perfectScrollbar('update');
      }
    });
  });
  $('body').click(function(e) {
    if ($(e.target).closest('[data-dropdown]').length === 0) {
      $('[data-dropdown]').removeClass('active');
    }
  });
  if ($.fn.owlCarousel) {
    $('.main-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 1
        }
      }
    });
    $('.goods-carousel').owlCarousel({
      loop: false,
      mouseDrag: false,
      margin: 0,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1,
          dots: true,
          mouseDrag: true,
          loop: true
        },
        480: {
          items: 2,
          dots: true,
          mouseDrag: true,
          loop: true
        },
        992: {
          items: 4
        }
      }
    });
    $('.news-carousel').owlCarousel({
      loop: false,
      mouseDrag: false,
      margin: 0,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1,
          dots: true,
          mouseDrag: true,
          loop: true
        },
        480: {
          items: 2,
          dots: true,
          mouseDrag: true,
          loop: true
        },
        992: {
          items: 3
        }
      }
    });
    $('.similar-carousel').owlCarousel({
      loop: false,
      mouseDrag: false,
      margin: 0,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1,
          dots: true,
          mouseDrag: true,
          loop: true
        },
        480: {
          items: 1,
          dots: true,
          mouseDrag: true,
          loop: true
        },
        769: {
          items: 2,
          dots: true,
          mouseDrag: true,
          loop: true
        },
        1200: {
          items: 3
        }
      }
    });
    $('.preview-carousel').owlCarousel({
      loop: false,
      mouseDrag: false,
      margin: 0,
      nav: true,
      navText: ["<i class='icon icon-arrow-left'></i>", "<i class='icon icon-arrow-right'></i>"],
      dots: false,
      responsive: {
        0: {
          items: 3,
          dots: true,
          mouseDrag: true,
          nav: false
        },
        480: {
          items: 4,
          dots: true,
          nav: false
        },
        769: {
          items: 5,
          dots: true,
          nav: false
        },
        1200: {
          items: 5
        }
      }
    });
    $('.recommended-carousel').owlCarousel({
      loop: true,
      mouseDrag: true,
      margin: 0,
      nav: true,
      navText: ["<i class='icon icon-arrow-left'></i>", "<i class='icon icon-arrow-right'></i>"],
      dots: false,
      responsive: {
        0: {
          items: 1,
          dots: true,
          mouseDrag: true,
          nav: true
        },
        545: {
          items: 2
        }
      }
    });
    $('.compare-carousel').owlCarousel({
      loop: false,
      mouseDrag: false,
      margin: 0,
      nav: false,
      dots: false,
      responsive: {
        0: {
          mouseDrag: true,
          items: 2
        },
        769: {
          items: 3
        },
        992: {
          items: 4
        },
        1200: {
          items: 5
        }
      }
    });
    $('.carousel-prev').click(function() {
      $('.compare-carousel').trigger('prev.owl.carousel');
    });
    $('.carousel-next').click(function() {
      $('.compare-carousel').trigger('next.owl.carousel');
    });
  }
  $('.preview-list').on('click', '.item', function() {
    var src;
    src = $(this).find('img').attr('src');
    $('.zoom-image').attr('data-zoom', src);
    $('#product-image').attr('src', src);
    setZoomImages();
  });
  $('select').each(function(i, select) {
    return $(select).select2({
      minimumResultsForSearch: -1,
      dropdownParent: $(select).parent()
    });
  });
  $('.change-position').click(function() {
    $('.collapsed-right').toggleClass('close');
    $('.collapsed-left').toggleClass('open');
    $('.carousel-nav').toggleClass('centered');
    $(this).toggleClass('pushed');
  });
  (teleport = function() {
    $('[data-tablet]').each(function(i, elem) {
      var parent;
      if (windowWidth() <= 991) {
        $(elem).appendTo($($(elem).data('tablet')));
      } else {
        parent = $($(elem).data('desktop'));
        $(elem).appendTo(parent);
      }
    });
    $('[data-mobile]').each(function(i, elem) {
      var parent;
      if (windowWidth() <= 479) {
        $(elem).appendTo($($(elem).data('mobile')));
      } else if (windowWidth() <= 991 && $(elem).data('tablet')) {
        $(elem).appendTo($($(elem).data('tablet')));
      } else {
        parent = $($(elem).data('desktop'));
        $(elem).prependTo(parent);
      }
    });
  })();
  $('.packery').packery({
    itemSelector: 'li'
  });
  $('body').click(function(e) {
    if ($(e.target).closest('.aside-nav, .aside-nav .anchor').length === 0) {
      $('.aside-nav').removeClass('active');
    }
  });
  $('[data-scrollto]').click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $($(this).data('scrollto')).offset().top
    }, 500);
  });
  (setFooter = function() {
    var height;
    height = $('.main-footer').outerHeight();
    $('main').css('padding-bottom', height + 'px');
    $('.main-footer').css('margin-top', -height + 'px');
  })();
  $('.open-catalog').click(function() {
    $('.main-nav').addClass('active');
    $('body, html').addClass('overlayed');
  });
  $('.close-nav').click(function() {
    $('.main-nav').removeClass('active');
    $('body, html').removeClass('overlayed');
  });
  $('.show-catalog').click(function() {
    if (windowWidth() <= 991) {
      $('.tablet-nav').addClass('active');
      $(this).siblings('.nav-list').hide();
      $(this).hide();
      $('.hidden-tablet').hide();
    }
  });
  $('.toggle-search').click(function() {
    if (windowWidth() <= 639) {
      $(this).siblings('.inner-form').toggleClass('active');
    }
  });
  $('body').click(function(e) {
    if ($(e.target).closest('.inner-form, .toggle-search').length === 0) {
      $('.inner-form').removeClass('active');
    }
  });
  $('.close-catalog').click(function() {
    $('.tablet-nav').removeClass('active');
    $(this).parents().siblings('.nav-list').show();
    $('.show-catalog').show();
    $('.hidden-tablet').show();
  });
  $('.list li').click(function() {
    $(this).siblings().removeClass('active');
    $(this).parents().siblings('.mobile-full').find('.list li').removeClass('active');
    $(this).toggleClass('active');
  });
  $('.open-filter').click(function() {
    if (windowWidth() <= 768) {
      $('.filter-form').addClass('active');
      $('body, html').addClass('overlayed');
    }
  });
  $('.close-filter').click(function() {
    if (windowWidth() <= 768) {
      $('.filter-form').removeClass('active');
      $('body, html').removeClass('overlayed');
    }
  });
  $('.main-footer').find('.title').click(function() {
    if (windowWidth() <= 479) {
      $(this).toggleClass('active');
      $(this).next('.subnav').toggleClass('active');
    }
  });
  $('.compare-remove').click(function() {
    $(this).parents('.owl-item').remove().css('width', '0px');
    $(this).parents('.item').remove();
  });
  (setZoomImages = function() {
    if ($(document).width() > 992) {
      $('.zoom-image').each(function(i, img) {
        $(img).zoom({
          url: $(img).attr('zoom')
        });
      });
    } else {
      $('.zoom-image').each(function(i, img) {
        $(img).trigger('zoom.destroy');
      });
    }
  })();
  $(window).resize(function() {
    waitForFinalEvent((function() {
      setFooter();
      teleport();
      setZoomImages();
    }), 200, '');
  });
});
