var initMap;

if (document.getElementById('map')) {
  initMap = function() {
    var i, map, marker, myLatlng, zoom;
    myLatlng = {
      lat: 59.9342802,
      lng: 30.3350986
    };
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      scrollwheel: false,
      center: myLatlng
    });
    marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: 'img/map-marker.png',
      title: 'St.Peterburg'
    });
    i = map.getZoom();
    zoom = $('#map').data('zoom');
  };
}

// google.maps.event.addDomListener window, 'load', initMap
