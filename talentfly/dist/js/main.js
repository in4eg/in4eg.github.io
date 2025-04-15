var checkFormData, removeHash, waitForFinalEvent;

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

removeHash = function() {
  history.pushState('', document.title, window.location.pathname + window.location.search);
};

$(document).ready(function() {
  var countersSlider, fourItemSlider, i, inputs, mainSlider, recommendSlider, reviewSlider, setFooterHeight, teleport, toggleMainAside;
  removeHash();
  inputs = $('.input');
  i = 0;
  while (i < inputs.length) {
    if ($(inputs[i]).val().trim().length !== 0) {
      $(inputs[i]).addClass('labeled');
    } else {
      $(inputs[i]).removeClass('labeled');
    }
    i++;
  }

  /*teleport */
  (teleport = function() {
    $('[data-tablet]').each(function(i, elem) {
      var parent;
      if (window.innerWidth <= 1007) {
        $(elem).appendTo($($(elem).data('tablet')));
      } else {
        parent = $($(elem).data('desktop'));
        $(elem).appendTo(parent);
      }
    });
    $('[data-mobile]').each(function(i, elem) {
      var parent;
      if (window.innerWidth <= 768) {
        $(elem).appendTo($($(elem).data('mobile')));
      } else {
        parent = $($(elem).data('desktop'));
        $(elem).appendTo(parent);
      }
    });
    $('[data-mobile-xs]').each(function(i, elem) {
      var parent;
      if (window.innerWidth <= 480) {
        $(elem).appendTo($($(elem).data('mobile-xs')));
      } else {
        parent = $($(elem).data('desktop'));
        $(elem).appendTo(parent);
      }
    });
  })();

  /*scrollto */
  $('[data-scrollto]').click(function(e) {
    var headerOffset;
    e.preventDefault();
    headerOffset = $('.main-header').hasClass('fixed') ? $('.main-header').outerHeight() : 0;
    $('html,body').animate({
      scrollTop: $($(this).data('scrollto')).offset().top - headerOffset
    }, 500);
  });
  setFooterHeight = function() {
    var footerHeight;
    footerHeight = $('.main-footer').outerHeight();
    $('main').css({
      paddingBottom: footerHeight + 'px'
    });
    $('.main-footer').css({
      marginTop: -footerHeight + 'px'
    });
  };
  setFooterHeight();

  /*
  			owl carousel
   */
  if ($.fn.owlCarousel) {
    mainSlider = $('.main-slider').owlCarousel({
      items: 1,
      loop: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      nav: false,
      dots: false,
      mouseDrag: false,
      touchDrag: false,
      smartSpeed: 1000,
      fluidSpeed: 1000,
      autoplaySpeed: 1000,
      navSpeed: 1000,
      autoplay: true,
      autoplayTimeout: $('.main-slider').data('timeout') || 5000,
      onTranslate: function(event) {
        return $('.main-slider-wrapper .slider-nav > li').removeClass('active').eq(event.item.index).addClass('active');
      }
    });
    $('.main-slider-wrapper .slider-nav > li').click(function(e) {
      e.preventDefault();
      mainSlider.trigger('to.owl.carousel', $(this).index());
    });
    reviewSlider = $('.review-slider').owlCarousel({
      items: 1,
      loop: true,
      nav: false,
      dots: false,
      autoplaySpeed: 500,
      navSpeed: 500,
      autoplay: true,
      onTranslate: function(event) {
        $('.dots-slider > li').removeClass('active').eq(event.item.index - 2).addClass('active');
        if (event.item.index - 1 > $('.dots-slider > li').length) {
          $('.dots-slider > li').removeClass('active').eq(0).addClass('active');
        }
      }
    });
    $('.dots-slider > li').click(function(e) {
      e.preventDefault();
      reviewSlider.trigger('to.owl.carousel', $(this).index());
    });
    recommendSlider = $('.recommendation-slider').owlCarousel({
      items: 3,
      loop: false,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        640: {
          items: 2
        },
        769: {
          items: 4
        },
        992: {
          items: 2
        },
        1200: {
          items: 3
        }
      },
      onTranslate: function(event) {
        $('.slider-prev').removeClass('disabled');
        if (event.item.index + event.page.size >= event.item.count) {
          $('.slider-next').addClass('disabled');
        } else {
          $('.slider-next').removeClass('disabled');
        }
        if (event.item.index === 0) {
          $('.slider-prev').addClass('disabled');
        }
      },
      onInitialize: function(event) {
        if (this.$element.context.children.length <= event.page.size) {
          $('.slider-prev').addClass('disabled');
          $('.slider-next').addClass('disabled');
          $('.nav-overflow').addClass('collapsed');
        }
        $('.slider-prev').addClass('disabled');
      },
      onResize: function(event) {
        if (event.item.index + event.page.size >= event.item.count) {
          $('.slider-next').addClass('disabled');
        } else {
          $('.slider-next').removeClass('disabled');
        }
      }
    });
    $('.slider-next').click(function() {
      recommendSlider.trigger('next.owl.carousel');
    });
    $('.slider-prev').click(function() {
      recommendSlider.trigger('prev.owl.carousel', [300]);
    });
    fourItemSlider = $('.four-item-slider').owlCarousel({
      items: 4,
      loop: false,
      nav: false,
      dots: false,
      mouseDrag: false,
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 2
        },
        769: {
          items: 4
        },
        992: {
          items: 2
        },
        1200: {
          items: 4
        }
      },
      onTranslate: function(event) {
        $('#sliderNav').find('.slider-prev').removeClass('disabled');
        if (event.item.index + event.page.size >= event.item.count) {
          $('#sliderNav').find('.slider-next').addClass('disabled');
        } else {
          $('#sliderNav').find('.slider-next').removeClass('disabled');
        }
        if (event.item.index === 0) {
          $('#sliderNav').find('.slider-prev').addClass('disabled');
        }
      },
      onInitialize: function(event) {
        if (this.$element.context.children.length <= event.page.size) {
          $('#sliderNav').find('.slider-prev').addClass('disabled');
          $('#sliderNav').find('.slider-next').addClass('disabled');
          $('#sliderNav').parents('.nav-overflow').addClass('collapsed');
        }
        $('#sliderNav').find('.slider-prev').addClass('disabled');
      },
      onResize: function(event) {
        if (event.item.index + event.page.size >= event.item.count) {
          $('#sliderNav').find('.slider-next').addClass('disabled');
        } else {
          $('#sliderNav').find('.slider-next').removeClass('disabled');
        }
      }
    });
    $('#sliderNav .slider-next').click(function() {
      fourItemSlider.trigger('next.owl.carousel');
    });
    $('#sliderNav .slider-prev').click(function() {
      fourItemSlider.trigger('prev.owl.carousel', [300]);
    });
    countersSlider = $('.counters-slider').owlCarousel({
      items: 3,
      loop: false,
      mouseDrag: false,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1,
          dots: true
        },
        641: {
          items: 2,
          dots: true
        },
        769: {
          items: 3
        }
      },
      onTranslate: function() {
        $(window).trigger('resize');
      }
    });
  }

  /*
  			main menu
   */
  toggleMainAside = function() {
    var isActive;
    isActive = $('.main-menu-toggle').hasClass('active');
    if (isActive) {
      $('.mobile-nav').show();
      $('html,body').addClass('overlayed');
      setTimeout((function() {
        return $('.mobile-nav').addClass('active');
      }), 10);
    } else {
      $('.mobile-nav').removeClass('active');
      setTimeout(function() {
        $('html,body').removeClass('overlayed');
        return $('.mobile-nav').hide();
      }, 300);
    }
  };
  $('.main-menu-toggle').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    toggleMainAside();
  });
  $('#hideMainMenu').click(function(e) {
    e.preventDefault();
    $('.main-menu-toggle').removeClass('active');
    toggleMainAside();
  });
  if ($.fn.magnificPopup) {
    $(document).find('.video-popup').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      closeMarkup: '<button class="mfp-close btn btn-grey btn-round" title="Close (Esc)"><i class="icon icon-close"></i></button>',
      removalDelay: 0,
      preloader: false,
      fixedContentPos: false
    });
    $(document).find('.video-open').click(function(e) {
      var src;
      src = $(this).attr('href');
      e.preventDefault();
      $.magnificPopup.close();
      setTimeout((function() {
        $.magnificPopup.open({
          items: {
            src: src
          },
          closeMarkup: '<button class="mfp-close btn btn-grey btn-round" title="Close (Esc)"><i class="icon icon-close"></i></button>',
          type: 'iframe'
        });
      }), 500);
    });
    $('.gallery-link').magnificPopup({
      gallery: {
        enabled: true
      },
      type: 'image'
    });
    $(document).on('click', '[data-call-popup]', function() {
      window.$.magnificPopup.open({
        items: {
          src: $(this).attr('data-call-popup')
        },
        closeMarkup: '<button class="mfp-close btn btn-grey btn-round" title="Close (Esc)"><i class="icon icon-close"></i></button>',
        type: 'inline',
        callbacks: {
          close: function() {
            $('#profileImage').find('img').removeClass('hidden');
            $('#removeUserPhoto').removeClass('hidden');
            checkFormData($.magnificPopup.instance.ev.context.hash);
            removeHash();
          }
        }
      });
    });
    $(document).on('click', '.open-popup-link:not(.disabled)', function(e) {
      $(this).magnificPopup({
        type: 'inline',
        midClick: true,
        focus: '.call-focus',
        closeMarkup: '<button class="mfp-close btn btn-grey btn-round"><i class="icon icon-close"></i></button>',
        zoom: {
          enabled: false
        },
        callbacks: {
          close: function() {
            checkFormData($.magnificPopup.instance.ev.context.hash);
            removeHash();
          }
        }
      }).magnificPopup('open');
    });
  }
  $(window).resize(function() {
    waitForFinalEvent((function() {
      setFooterHeight();
      teleport();
    }), 100, '');
  });
  $('.disabled').click(function(e) {
    e.preventDefault();
  });
});

checkFormData = function(popupId) {
  var form, formData, intItem, intItems, j, k, l, langItem, langItems, len, len1, len2, softItems, techItem, techItems, title;
  $('#emailRequest').val('');
  $(popupId).find('[data-removeon]').show();
  form = $(popupId).find('[data-multiply]');
  $('#softSkillsTableAdd').addClass('hidden');
  formData = void 0;
  if (form.length) {
    techItems = $(document).find('#technicalskills-list').children('li');
    for (j = 0, len = techItems.length; j < len; j++) {
      techItem = techItems[j];
      title = $(techItem).find('.title').clone().children().remove().end().text().trim();
      if (title.length <= 0) {
        techItem.remove();
      }
    }
    if ($(document).find('#technicalskills-list').children('li').length <= 0) {
      $(document).find('#technicalskills-list').parents('.parent-cover').addClass('hidden');
      $(document).find('#technicalskills-list').parents('.parent-cover').siblings('.hidden-helper').addClass('active');
    }
    langItems = $(document).find('#languages-list').children('li');
    for (k = 0, len1 = langItems.length; k < len1; k++) {
      langItem = langItems[k];
      title = $(langItem).find('.title').text().trim();
      if (title.length <= 0) {
        langItem.remove();
      }
    }
    if ($(document).find('#languages-list').children('li').length <= 0) {
      $(document).find('#languages-list').addClass('hidden');
      $(document).find('#languages-list').siblings('.hidden-helper').addClass('active');
    }
    intItems = $(document).find('#interests-list').children('li');
    for (l = 0, len2 = intItems.length; l < len2; l++) {
      intItem = intItems[l];
      title = $(intItem).find('.title').text().trim();
      if (title.length <= 0) {
        intItem.remove();
      }
    }
    if ($(document).find('#interests-list').children('li').length <= 0) {
      $(document).find('#interests-list').addClass('hidden');
      $(document).find('#interests-list').siblings('.hidden-helper').addClass('active');
    }
    softItems = $(document).find('#generalSoftSkills').find('.cover').children('[data-soft-category]');
    if (softItems.length <= 0) {
      $(document).find('#generalSoftSkills').addClass('hidden');
      $(document).find('#generalSoftSkills').siblings('.hidden-helper').addClass('active');
    }
  }
  if ($('#summaryMess').text().length <= 0) {
    $('#summaryMess').addClass('hidden');
    $('#summaryMess').next('.hidden-helper').addClass('active');
  }
};

$('.input').on('focus keyup blur change', function() {
  if ($(this).val().trim().length !== 0) {
    $(this).addClass('labeled');
  } else {
    $(this).removeClass('labeled');
  }
});

$('*[data-redirect]').on('click', function() {
  window.location.href = $(this).attr('data-redirect');
});

$('.close-modal').on('click', function() {
  $.magnificPopup.close();
});
