$(document).ready(function () {
  google.maps.event.addDomListener(window, 'load', init);

  var bodyWidth = window.innerWidth;

  if (bodyWidth >= 769) {
    $("#map").height($(".choosen-inner").height() - 10)
  }  
});

var mapPin = {
  "center" : true,
  "name" : "Miami Beach.Sunny Isles Beach 33131, FL, USA", 
  "description" : "Miami Beach, FL, USA",
  "address" : "Miami Beach, FL, USA",
  "geometry" : {
    "location" : {
      "lat" : 25.763292138174872,
      "lng" : -80.19253071900195
    }
  }
};

var myLatLng = {
  lat: mapPin.geometry.location.lat,
  lng: mapPin.geometry.location.lng
};
var map;
var markers = [];

function init() {

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    scrollwheel: false,
    center: myLatLng
  });
  var markerImage = new google.maps.MarkerImage(
    'images/icons/pin.png'
    );
  var marker = new google.maps.Marker({
    position: myLatLng,
    icon: markerImage,
    map: map
  });

  infowindow = new google.maps.InfoWindow();

  var windowContent = mapPin.name;

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(windowContent);
    infowindow.open(map, this);
  });

}
function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}
function createMarker(place) {

  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
  markers.push(marker);

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });

}

$(".point").click(function(e) {
  e.preventDefault();
  $(".point").removeClass('active');
  $(this).addClass('active');

  setMapOnAll(map);

  var category = $(this).attr("data-category");
  var service = new google.maps.places.PlacesService(map);

  service.nearbySearch({
    location: myLatLng,
    radius: 500,
    types: [category]
  }, callback);

});
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
}