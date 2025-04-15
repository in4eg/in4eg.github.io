var radios;

if (typeof ymaps !== 'undefined' && document.getElementById('y-map')) {
  radios = $('[data-point]');
  ymaps.ready(function() {
    var i, len, map, placemark, point;
    map = new ymaps.Map("y-map", {
      center: points[0].point,
      zoom: 13
    });
    for (i = 0, len = points.length; i < len; i++) {
      point = points[i];
      placemark = new ymaps.Placemark(point.point, {
        hintContent: point.title || '',
        balloonContent: point.text || ''
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map.png',
        iconImageSize: [100, 100],
        iconImageOffset: [-50, -100]
      });
      point.placemark = placemark;
      map.geoObjects.add(placemark);
    }
    radios.click(function(e) {
      var index;
      $('[data-point]').removeClass('active');
      $(this).addClass('active');
      index = parseInt($(this).data('point'));
      point = points[index];
      return map.panTo(point.point, {
        flying: 1,
        duration: 500,
        safe: true,
        autoPan: true,
        checkZoomRange: false,
        autoPanMargin: 49
      });
    });
  });
}

if (typeof ymaps !== 'undefined' && document.getElementById('y-map-simple')) {
  ymaps.ready(function() {
    var i, len, map, placemark, point;
    map = new ymaps.Map("y-map-simple", {
      center: points[0].point,
      zoom: 16,
      controls: []
    });
    for (i = 0, len = points.length; i < len; i++) {
      point = points[i];
      placemark = new ymaps.Placemark(point.point, {
        hintContent: point.title || '',
        balloonContent: point.text || ''
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-marker.png',
        iconImageSize: [51, 70],
        iconImageOffset: [-50, -100]
      });
      point.placemark = placemark;
      map.geoObjects.add(placemark);
      map.behaviors.disable('scrollZoom');
    }
  });
}
