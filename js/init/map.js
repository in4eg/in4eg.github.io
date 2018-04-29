var initialize, mapStyle, setMarkers;

if (document.getElementsByClassName('google-map')) {
  mapStyle = [
    {
      'featureType': 'water',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#d3d3d3'
        }
      ]
    }, {
      'featureType': 'transit',
      'stylers': [
        {
          'color': '#808080'
        }, {
          'visibility': 'off'
        }
      ]
    }, {
      'featureType': 'road.highway',
      'elementType': 'geometry.stroke',
      'stylers': [
        {
          'visibility': 'on'
        }, {
          'color': '#b3b3b3'
        }
      ]
    }, {
      'featureType': 'road.highway',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#ffffff'
        }
      ]
    }, {
      'featureType': 'road.local',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'visibility': 'on'
        }, {
          'color': '#ffffff'
        }, {
          'weight': 1.8
        }
      ]
    }, {
      'featureType': 'road.local',
      'elementType': 'geometry.stroke',
      'stylers': [
        {
          'color': '#d7d7d7'
        }
      ]
    }, {
      'featureType': 'poi',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'visibility': 'on'
        }, {
          'color': '#ebebeb'
        }
      ]
    }, {
      'featureType': 'administrative',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#a7a7a7'
        }
      ]
    }, {
      'featureType': 'road.arterial',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#ffffff'
        }
      ]
    }, {
      'featureType': 'road.arterial',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#ffffff'
        }
      ]
    }, {
      'featureType': 'landscape',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'visibility': 'on'
        }, {
          'color': '#efefef'
        }
      ]
    }, {
      'featureType': 'road',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#696969'
        }
      ]
    }, {
      'featureType': 'administrative',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'visibility': 'on'
        }, {
          'color': '#737373'
        }
      ]
    }, {
      'featureType': 'poi',
      'elementType': 'labels.icon',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    }, {
      'featureType': 'poi',
      'elementType': 'labels',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    }, {
      'featureType': 'road.arterial',
      'elementType': 'geometry.stroke',
      'stylers': [
        {
          'color': '#d6d6d6'
        }
      ]
    }, {
      'featureType': 'road',
      'elementType': 'labels.icon',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    }, {}, {
      'featureType': 'poi',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#dadada'
        }
      ]
    }
  ];
  initialize = function() {
    var map1;
    map1 = document.getElementById('map');
    map1 = new google.maps.Map(map1, {
      zoom: $('.google-map').data('zoom'),
      scrollwheel: false,
      styles: mapStyle,
      center: {
        lat: places[0][1],
        lng: places[0][2]
      }
    });
    setMarkers(map1);
  };
  setMarkers = function(map) {
    var contentString, i, image, infowindow, marker, place, shape;
    image = {
      url: 'img/map-marker.png'
    };
    shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: 'poly'
    };
    i = 0;
    while (i < places.length) {
      place = places[i];
      marker = new google.maps.Marker({
        position: {
          lat: place[1],
          lng: place[2]
        },
        map: map,
        icon: image,
        shape: shape,
        title: place[0]
      });
      contentString = place[0];
      infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      i++;
    }
  };
  google.maps.event.addDomListener(window, 'load', initialize);
}
