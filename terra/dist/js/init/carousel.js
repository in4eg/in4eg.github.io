if ($('[data-slider]')) {
  $('[data-slider]').each(function(i, slider) {
    var items;
    items = $(slider).data('slider').split(',');
    $(slider).owlCarousel({
      nav: false,
      loop: false,
      dots: false,
      mouseDrag: false,
      responsive: {
        0: {
          items: items[4],
          dots: true
        },
        545: {
          items: items[3],
          dots: true
        },
        681: {
          items: items[2],
          dots: true
        },
        994: {
          items: items[1],
          dots: false,
          mouseDrag: false
        },
        1199: {
          items: items[0],
          dots: false,
          mouseDrag: false
        }
      }
    });
  });
}

if ($('.js-equel-slider')) {
  $('.js-equel-slider').owlCarousel({
    nav: false,
    loop: false,
    dots: false,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
        dots: true
      },
      546: {
        items: 2,
        dots: true
      },
      681: {
        items: 3,
        dots: true
      },
      994: {
        items: 4,
        dots: false,
        mouseDrag: false
      }
    }
  });
}

if ($('.js-slider')) {
  $('.js-slider').owlCarousel({
    nav: false,
    loop: false,
    dots: false,
    margin: 20,
    mouseDrag: true,
    responsive: {
      0: {
        items: 1,
        dots: true
      },
      546: {
        items: 2,
        dots: true
      },
      994: {
        items: 3,
        dots: false,
        mouseDrag: false
      }
    }
  });
}
