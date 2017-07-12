$(document).ready(function() {
  var setActiveTab, setFooterHeight, teleport, toggleMainAside, waitForFinalEvent;
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
  $('[data-dropdown]').each(function(i, elem) {
    $('.anchor', elem).click(function(e) {
      e.preventDefault();
      $(this).closest('[data-dropdown]').toggleClass('active');
    });
    $('.dropdown-menu li', elem).click(function(e) {
      $('.anchor', elem).html($(this).text());
      $(elem).removeClass('active');
    });
  });
  $('.dropdown-call').on('click', function() {
    $(this).hide();
  });
  $('.show-collapse').click(function() {
    if ($(this).hasClass('active')) {
      $($(this).data('open')).removeClass('active');
      $(this).html($(this).data('show')).removeClass('active');
    } else {
      $($(this).data('open')).addClass('active');
      $(this).html($(this).data('hide')).addClass('active');
    }
  });
  $('#show-form-group').on('click', function() {
    $('.hide-form-group').hide();
    $('.show-form-group').show();
    $(this).hide();
  });
  $('#getContent').click(function() {
    $.ajax({
      url: './elements.html',
      cache: false,
      success: function(html) {
        $('#news').append(html);
      }
    });
    return true;
  });
  $('#toggle-filter').click(function(e) {
    if ($(window).width() <= 1199) {
      e.preventDefault();
      $('.filter-side').addClass('active');
      $('.filter-fade').addClass('active');
      if (window.innerWidth <= 640) {
        $('html,body').animate({
          scrollTop: $('.filter-treatment').offset().top - 80
        }, 200);
      }
      if ($('.notification-wrap').hasClass('active')) {
        $('.notification-wrap').removeClass('active');
        $('#showNotification').parent('.dropdown').removeClass('active');
      }
    }
  });
  $('#closeFilter, .filter-fade').click(function(e) {
    if ($(window).width() <= 1199) {
      e.preventDefault();
      $('.filter-side').removeClass('active');
      $('.filter-fade').removeClass('active');
    }
  });
  $('#loadTreatment').click(function() {
    $.ajax({
      url: './treatment.html',
      cache: false,
      success: function(html) {
        $('#treatmentContainer').append(html);
      }
    });
    return true;
  });
  $('#treatmentContainer').on('click', '[data-remove]', function() {
    var itemToRemove;
    itemToRemove = $(this).data('remove');
    $(this).parents(itemToRemove).remove();
  });
  $('.popup-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
  $('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true
  });
  $('.consult-list').click(function() {
    var items;
    items = [];
    $('.white-popup').each(function() {
      items.push({
        src: $(this)
      });
    });
    $.magnificPopup.open({
      items: items,
      gallery: {
        enabled: true
      }
    });
  });
  $('#toggle-panel').click(function() {
    $(this).toggleClass('active');
    $('.aside-nav').toggleClass('active');
    $('.filter-side').removeClass('active');
    $('.filter-fade').removeClass('active');
    $('.fader').toggleClass('active');
    $('html,body').toggleClass('overlayed');
    if ($('.notification-wrap').hasClass('active')) {
      $('.notification-wrap').removeClass('active');
      $('#showNotification').parent('.dropdown').removeClass('active');
      $('.fader').addClass('active');
      $('html').addClass('overlayed');
    }
    if (window.innerWidth <= 480) {
      $('main').toggleClass('overlayed');
    }
  });
  $('#showNotification').click(function(e) {
    if ($(window).width() <= 1259) {
      e.preventDefault();
      $('.filter-side').removeClass('active');
      $('.filter-fade').removeClass('active');
      $('body').removeClass('overlayed');
      $('.notification-wrap').toggleClass('active');
      $('.fader').toggleClass('active');
      $(this).parent('.dropdown').toggleClass('active');
      $('html').toggleClass('overlayed');
    }
    if ($('.aside-nav').hasClass('active')) {
      $('.aside-nav').removeClass('active');
      $('#toggle-panel').removeClass('active');
      $('.fader').addClass('active');
      $('html').addClass('overlayed');
    }
  });
  $('.fader').click(function() {
    $(this).toggleClass('active');
    $('.aside-nav').removeClass('active');
    $('html,body').removeClass('overlayed');
    $('.fader').removeClass('active');
    $('#toggle-panel').removeClass('active');
    $('.notification-wrap').removeClass('active');
    $('#showNotification').parent('.dropdown').removeClass('active');
    if (window.innerWidth <= 480) {
      $('main').removeClass('overlayed');
    }
  });
  $('.result-show').on('click', function() {
    $('.result-hide').stop(true, true).slideDown();
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
  $('body').click(function(e) {
    if ($(e.target).closest('[data-dropdown], .dropdown-call').length === 0) {
      $('[data-dropdown]').removeClass('active');
      $('.dropdown-call').show();
    }
  });
  $('.slider').each(function(i, slider) {
    $(slider).owlCarousel({
      items: 1,
      nav: true,
      dots: true,
      loop: true,
      smartSpeed: 700
    });
  });
  $('.reviews-list').each(function(i, list) {
    var nav, owl;
    nav = $('[data-nav="' + $(list).attr('id') + '"]');
    owl = $(list).owlCarousel({
      items: 2,
      loop: true,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        993: {
          items: 2
        }
      }
    });
    nav.find('.prev').click(function(e) {
      owl.trigger('prev.owl.carousel');
      e.preventDefault();
    });
    nav.find('.next').click(function(e) {
      owl.trigger('next.owl.carousel');
      e.preventDefault();
    });
  });
  $('.about-list').each(function(i, list) {
    var nav, owl;
    nav = $('[data-nav="' + $(list).attr('id') + '"]');
    owl = $(list).owlCarousel({
      items: 1,
      loop: true,
      nav: false,
      dots: true
    });
    nav.find('.prev').click(function(e) {
      owl.trigger('prev.owl.carousel');
      e.preventDefault();
    });
    nav.find('.next').click(function(e) {
      owl.trigger('next.owl.carousel');
      e.preventDefault();
    });
  });
  $('.clients-list').each(function(i, list) {
    var nav, owl;
    nav = $('[data-nav="' + $(list).attr('id') + '"]');
    owl = $(list).owlCarousel({
      items: 2,
      loop: true,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        481: {
          items: 2
        },
        769: {
          items: 3
        },
        993: {
          items: 5
        }
      }
    });
    nav.find('.prev').click(function(e) {
      owl.trigger('prev.owl.carousel');
      e.preventDefault();
    });
    nav.find('.next').click(function(e) {
      owl.trigger('next.owl.carousel');
      e.preventDefault();
    });
  });
  $('.award-list').each(function(i, list) {
    var nav, owl;
    nav = $('[data-nav="' + $(list).attr('id') + '"]');
    owl = $(list).owlCarousel({
      items: 2,
      loop: true,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 1
        },
        481: {
          items: 2
        },
        769: {
          items: 3,
          dots: false
        },
        993: {
          items: 5
        }
      }
    });
    nav.find('.prev').click(function(e) {
      owl.trigger('prev.owl.carousel');
      e.preventDefault();
    });
    nav.find('.next').click(function(e) {
      owl.trigger('next.owl.carousel');
      e.preventDefault();
    });
  });
  $('select').each(function(i, select) {
    return $(select).select2({
      minimumResultsForSearch: -1,
      dropdownParent: $(select).parent()
    });
  });
  $('.seminar-list, .award-list').magnificPopup({
    delegate: '.owl-item:not(.cloned) .gallery-item',
    type: 'image',
    tLoading: 'Загрузка..',
    gallery: {
      tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
      enabled: true
    }
  });
  $('.seminar-list').each(function(i, list) {
    var nav, owl;
    nav = $('[data-nav="' + $(list).attr('id') + '"]');
    owl = $(list).owlCarousel({
      items: 4,
      loop: true,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        481: {
          items: 2
        },
        769: {
          items: 3
        },
        993: {
          items: 4
        }
      }
    });
    nav.find('.prev').click(function(e) {
      owl.trigger('prev.owl.carousel');
      e.preventDefault();
    });
    nav.find('.next').click(function(e) {
      owl.trigger('next.owl.carousel');
      e.preventDefault();
    });
  });
  setFooterHeight = function() {
    var footerHeight, headerHeight;
    headerHeight = $('.main-header').outerHeight();
    footerHeight = $('.main-footer').outerHeight();
    $('main').css({
      paddingBottom: footerHeight + 'px'
    });
    $('.main-footer').css({
      marginTop: -footerHeight + 'px'
    });
  };
  setFooterHeight();
  (teleport = function() {
    $('[data-tablet]').each(function(i, elem) {
      var parent;
      if ($(document).width() <= 992) {
        $(elem).appendTo($($(elem).data('tablet')));
      } else {
        parent = $($(elem).data('desktop'));
        $(elem).appendTo(parent);
      }
    });
    $('[data-mobile]').each(function(i, elem) {
      var parent;
      if ($(document).width() <= 768) {
        $(elem).appendTo($($(elem).data('mobile')));
      } else {
        parent = $($(elem).data('desktop'));
        $(elem).appendTo(parent);
      }
    });
    $('[data-toggle]').each(function(i, elem) {
      var parent;
      if (window.innerWidth <= 991) {
        $(elem).prependTo($($(elem).data('toggle')));
      } else {
        parent = $($(elem).data('parent'));
        $(elem).prependTo(parent);
      }
    });
    if (window.innerWidth <= 999) {
      $('.logo-inner').prependTo($('#inner-wrap'));
    } else {
      $('.logo-inner').prependTo($('.logo-holder'));
    }
    if (window.innerWidth <= 639) {
      $('.user-info').appendTo($('#inner-wrap'));
    } else {
      $('.user-info').appendTo($('.user-cover'));
    }
    if ($(document).width() <= 768) {
      $('.main-nav').prependTo($('.main-nav-outer'));
    } else {
      $('.main-nav').prependTo($('.main-nav-desktop'));
    }
  })();

  /*main menu */
  toggleMainAside = function() {
    var isActive;
    isActive = $('#mainMenuToggle').hasClass('active');
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
  $('#mainMenuToggle').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    toggleMainAside();
  });
  $('#hideMainMenu').click(function(e) {
    e.preventDefault();
    $('#mainMenuToggle').removeClass('active');
    toggleMainAside();
  });

  /*search */
  $('.search-toggle').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.search-col').addClass('active');
    } else {
      $('.search-col').removeClass('active');
    }
  });
  $('.dropdown').click(function() {
    $('.search-toggle, .search-col').removeClass('active');
  });
  $('.main-footer .heading').click(function(e) {
    e.preventDefault();
    $('.main-footer .heading').not(this).removeClass('active');
    $(this).toggleClass('active');
  });

  /*tabs */
  setActiveTab = function(content, indx) {
    content.find('.content').removeClass('active').eq(indx).addClass('active');
    if ($(document).width() <= 640) {
      $('html,body').scrollTop(content.find('.content').eq(indx).offset().top);
    }
  };
  $('[data-tabs]').each(function(i, nav) {
    $(nav).find('li').click(function(e) {
      e.preventDefault();
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      setActiveTab($($(nav).data('tabs')), $(this).index());
    });
    $($(nav).data('tabs')).find('[data-title]').each(function(i, title) {
      $(title).click(function() {
        $(nav).find('li').eq(i).click();
      });
    });
  });

  /*steps */
  $('.step-form').each(function(i, form) {
    var current, length, next, prev, setState, step, submit, total;
    step = 0;
    length = $(form).find('.step').length;
    prev = $(form).find('.prev');
    next = $(form).find('.next');
    submit = $(form).find('.submit');
    current = $(form).find('.current');
    total = $(form).find('.total');
    setState = function() {
      $(form).find('.step').removeClass('active').eq(step).addClass('active');
      current.html(step + 1);
      if (step === 0) {
        prev.addClass('disabled');
      } else {
        prev.removeClass('disabled');
      }
      if (step === length - 1) {
        next.hide();
      } else {
        next.show();
      }
      if (step < length - 1) {
        submit.hide();
      } else {
        submit.show();
      }
    };
    setState();
    prev.click(function(e) {
      e.preventDefault();
      if (step > 0) {
        --step;
      }
      setState();
    });
    next.click(function(e) {
      e.preventDefault();
      if (step < length - 1) {
        ++step;
      }
      setState();
    });
  });
  $('.close-notice').click(function() {
    $('.header-notification').removeClass('opened');
    $('main').removeClass('opened');
  });

  /*scrollto */
  $('[data-scrollto]').click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $($(this).data('scrollto')).offset().top
    }, 500);
  });
  $('.file-group input[type="file"]').on('change', function(e) {
    if ($(this)[0].files.length !== 0) {
      $('label[for="' + $(this).attr('id') + '"] span').html($(this)[0].files[0].name);
    } else {
      $('label[for="' + $(this).attr('id') + '"] span').html('Прикрепить файл');
    }
  });
  $(window).resize(function() {
    waitForFinalEvent((function() {
      setFooterHeight();
      teleport();
    }), 200, '');
  });
});
