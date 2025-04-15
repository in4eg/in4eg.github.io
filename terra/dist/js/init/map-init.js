var init;

if (document.getElementById('map')) {
  init = function() {
    var i, infowindow, lat, lng, map, mapElement, mapInstance, mapOptions, mapStyle, marker, zoom;
    mapInstance = document.getElementById('map');
    lat = $(mapInstance).data('lat');
    lng = $(mapInstance).data('lng');
    zoom = $(mapInstance).data('zoom');
    mapStyle = [
      {
        'featureType': 'water',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#e9e9e9'
          }, {
            'lightness': 17
          }
        ]
      }, {
        'featureType': 'landscape',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#f5f5f5'
          }, {
            'lightness': 20
          }
        ]
      }, {
        'featureType': 'road.highway',
        'elementType': 'geometry.fill',
        'stylers': [
          {
            'color': '#ffffff'
          }, {
            'lightness': 17
          }
        ]
      }, {
        'featureType': 'road.highway',
        'elementType': 'geometry.stroke',
        'stylers': [
          {
            'color': '#ffffff'
          }, {
            'lightness': 29
          }, {
            'weight': 0.2
          }
        ]
      }, {
        'featureType': 'road.arterial',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#ffffff'
          }, {
            'lightness': 18
          }
        ]
      }, {
        'featureType': 'road.local',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#ffffff'
          }, {
            'lightness': 16
          }
        ]
      }, {
        'featureType': 'poi',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#f5f5f5'
          }, {
            'lightness': 21
          }
        ]
      }, {
        'featureType': 'poi.park',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#dedede'
          }, {
            'lightness': 21
          }
        ]
      }, {
        'elementType': 'labels.text.stroke',
        'stylers': [
          {
            'visibility': 'on'
          }, {
            'color': '#ffffff'
          }, {
            'lightness': 16
          }
        ]
      }, {
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'saturation': 36
          }, {
            'color': '#333333'
          }, {
            'lightness': 40
          }
        ]
      }, {
        'elementType': 'labels.icon',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      }, {
        'featureType': 'transit',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#f2f2f2'
          }, {
            'lightness': 19
          }
        ]
      }, {
        'featureType': 'administrative',
        'elementType': 'geometry.fill',
        'stylers': [
          {
            'color': '#fefefe'
          }, {
            'lightness': 20
          }
        ]
      }, {
        'featureType': 'administrative',
        'elementType': 'geometry.stroke',
        'stylers': [
          {
            'color': '#fefefe'
          }, {
            'lightness': 17
          }, {
            'weight': 1.2
          }
        ]
      }
    ];
    mapOptions = {
      zoom: zoom,
      zoomControl: false,
      scaleControl: false,
      scrollwheel: false,
      disableDefaultUI: true,
      center: new google.maps.LatLng(lat, lng),
      styles: mapStyle
    };
    mapElement = document.getElementById('map');
    map = new google.maps.Map(mapElement, mapOptions);
    infowindow = new google.maps.InfoWindow;
    marker = void 0;
    i = void 0;
    i = 0;
    while (i < locations.length) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: 'img/map-marker.png'
      });
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        };
      })(marker, i));
      i++;
    }
  };
  google.maps.event.addDomListener(window, 'load', init);
}
