var FindCity, calculateAndDisplayRoute, form, getSearchData, initMap, prepareData;

getSearchData = function(JSONobject) {
  var country, countryBlock, flag, flagBlock, icon, iconBlock, lat, latBlock, lon, lonBlock, name, nameBlock, parentBlock, section, temp, tempBlock, weather, weatherBlock, wrapBlock;
  name = JSONobject.name;
  country = JSONobject.sys.country;
  lon = JSONobject.coord.lon;
  lat = JSONobject.coord.lat;
  weather = JSONobject.weather[0].description;
  icon = 'http://openweathermap.org/img/w/' + JSONobject.weather[0].icon + '.png';
  flag = 'http://openweathermap.org/images/flags/' + JSONobject.sys.country.toLowerCase() + '.png';
  temp = Math.round(JSONobject.main.temp);
  section = document.getElementsByClassName('weather-section')[0];
  section.style.backgroundImage = 'url("img/' + JSONobject.weather[0].icon + '.jpg")';
  parentBlock = document.getElementById('forecast');
  parentBlock.innerHTML = '';
  wrapBlock = document.createElement('div');
  wrapBlock.className = 'wrap';
  parentBlock.appendChild(wrapBlock);
  nameBlock = document.createElement('div');
  nameBlock.className = 'name';
  nameBlock.innerHTML = name;
  wrapBlock.appendChild(nameBlock);
  countryBlock = document.createElement('div');
  countryBlock.className = 'country';
  countryBlock.innerHTML = country;
  wrapBlock.appendChild(countryBlock);
  flagBlock = document.createElement('img');
  flagBlock.setAttribute('src', flag);
  flagBlock.className = 'flag';
  wrapBlock.appendChild(flagBlock);
  iconBlock = document.createElement('img');
  iconBlock.setAttribute('src', icon);
  iconBlock.className = 'icon';
  wrapBlock.appendChild(iconBlock);
  lonBlock = document.createElement('div');
  lonBlock.className = 'lon';
  lonBlock.innerHTML = 'lon: ' + lon;
  wrapBlock.appendChild(lonBlock);
  latBlock = document.createElement('div');
  latBlock.className = 'lat';
  latBlock.innerHTML = 'lat: ' + lat;
  wrapBlock.appendChild(latBlock);
  weatherBlock = document.createElement('div');
  weatherBlock.className = 'weather';
  weatherBlock.innerHTML = weather;
  wrapBlock.appendChild(weatherBlock);
  tempBlock = document.createElement('div');
  tempBlock.className = 'temp';
  tempBlock.innerHTML = temp + '&deg;';
  wrapBlock.appendChild(tempBlock);
};

prepareData = function(text) {
  var res;
  if (text) {
    res = text.replace(/(\s)+/g, '').toLowerCase();
    return res.charAt(0).toUpperCase() + res.substr(1);
  } else {
    text = 'cherkassy';
  }
  return text;
};

FindCity = function(param) {
  var jsonurl, request;
  param = prepareData(document.getElementById('search-input').value);
  jsonurl = 'http://api.openweathermap.org/data/2.5/weather?APPID=2f42d399f9f939b664dca10abedd0504&q=' + param + '&units=metric';
  request = new XMLHttpRequest;
  request.open('post', jsonurl);
  request.send();
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      JSON.parse(request.responseText);
      return getSearchData(JSON.parse(request.responseText));
    }
  };
};

form = document.getElementById('searchform');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  FindCity();
  initMap(prepareData(document.getElementById('search-input').value));
  return false;
});

FindCity('Cherkassy');

initMap = function(pointB) {
  var directionsDisplay, directionsService, map, markerA, myOptions, pointA;
  pointA = new google.maps.LatLng(49.444431, 32.059769);
  myOptions = {
    zoom: 7,
    center: pointA,
    scrollwheel: false
  };
  map = new google.maps.Map(document.getElementById('map'), myOptions);
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer({
    map: map
  });
  if (pointB) {
    calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB);
  } else {

  }
  markerA = new google.maps.Marker({
    position: pointA,
    title: 'Cherkassy',
    map: map
  });
};

calculateAndDisplayRoute = function(directionsService, directionsDisplay, pointA, pointB) {
  directionsService.route({
    origin: pointA,
    destination: prepareData(document.getElementById('search-input').value),
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
};
