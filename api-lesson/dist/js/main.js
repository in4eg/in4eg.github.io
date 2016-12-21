$(document).ready(function() {
  google.maps.event.addDomListener(window, 'load', initMap);

});
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 50.25, lng: 30.30},
    zoom: 8,
    styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#8ebfd3"},{"visibility":"on"}]}],

  });

  var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
          'Error: The Geolocation service failed.' :
          'Error: Your browser doesn\'t support geolocation.');
      }
      //weather

      function getSearchData(JSONobject) {
        //console.log(JSONobject);

        html = '';

        var name = JSONobject.name +', '+JSONobject.sys.country;
        var temp = Math.round(10*(JSONobject.main.temp -273.15))/10 ;
        var tmin = Math.round(10*(JSONobject.main.temp_min -273.15)) / 10;
        var tmax = Math.round(10*(JSONobject.main.temp_max -273.15)) / 10 ;

        var text = JSONobject.weather[0].description;
        var img =  "http://openweathermap.org/img/w/" +JSONobject.weather[0].icon + ".png";
        var flag = "http://openweathermap.org/images/flags/" +JSONobject.sys.country.toLowerCase()  + ".png";
        var gust = JSONobject.wind.speed;
        var pressure = JSONobject.main.pressure ;
        var cloud=JSONobject.clouds.all ; 

        html=html+'<tr><td><img src="'+img+'" ></td><td><b><a href="/city/'+JSONobject.id+'">'+ name+'</a></b>'+
        ' <img src="'+flag+'" >  <b><i>' +text+'</i> </b>' + 
        '<p>  <span class="badge badge-info">'+temp +'°С </span> ' +
        'temperature from '+tmin+' to '+tmax+'°С, wind '+gust+ 'm/s. clouds '+cloud+'%, ' +pressure+
        ' hpa</p><p>Geo coords  <a href="/Maps?zoom=12&lat='+JSONobject.coord.lat+'&lon='+JSONobject.coord.lon+'&layers=B0FTTFF">[ '+
        JSONobject.coord.lon+", "+ JSONobject.coord.lat +' ]</a></p></td></tr>';

        html='<table class="table">'+html+'</table>';

        $("#forecastIntro").hide();
        $("#forecast").html(html).show();

      }
// Подготовка текста для поиска (удаление пробелов, приведения текста к нижнему регистру и первой буквы к первому)
function prepareData(text) {
  if(text){
    var res = text.replace(/(\s)+/g,'').toLowerCase();
    return res.charAt(0).toUpperCase()+res.substr(1);  
  }
  return text;
}

function FindCity() {
  $("#forecast").html('');
  param = prepareData(document.getElementById('search_str').value);

  var jsonurl = "http://api.openweathermap.org/data/2.5/weather?APPID=2f42d399f9f939b664dca10abedd0504&q="+param;

  $.getJSON(jsonurl, getSearchData);
  return false; 
}
var q = GetURLParameter('q');
if ( q ) {
  FindCity();
}

function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++)
  {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam)
    {
      return sParameterName[1];
    }
  }
}