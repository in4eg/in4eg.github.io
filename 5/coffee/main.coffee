getSearchData = (JSONobject) ->
  console.log JSONobject
  
  name = JSONobject.name
  country = JSONobject.sys.country
  lon = JSONobject.coord.lon
  lat = JSONobject.coord.lat
  weather = JSONobject.weather[0].description
  icon = 'http://openweathermap.org/img/w/' + JSONobject.weather[0].icon + '.png'
  flag = 'http://openweathermap.org/images/flags/' + JSONobject.sys.country.toLowerCase() + '.png'
  temp = Math.round(JSONobject.main.temp * 4.5 / 100)

  section = document.getElementsByClassName('weather-section')[0]
  section.style.backgroundImage = 'url("img/' + JSONobject.weather[0].icon + '.jpg")'

  parentBlock = document.getElementById 'forecast'
  parentBlock.innerHTML = ''

  #wrap
  wrapBlock = document.createElement 'div'
  wrapBlock.className = 'wrap'
  parentBlock.appendChild wrapBlock

  #name
  nameBlock = document.createElement 'div'
  nameBlock.className = 'name'
  nameBlock.innerHTML = name
  wrapBlock.appendChild nameBlock

  #country
  countryBlock = document.createElement 'div'
  countryBlock.className = 'country'
  countryBlock.innerHTML = country
  wrapBlock.appendChild countryBlock

  #flag
  flagBlock = document.createElement 'img'
  flagBlock.setAttribute 'src', flag
  flagBlock.className = 'flag'
  wrapBlock.appendChild flagBlock

  #icon
  iconBlock = document.createElement 'img'
  iconBlock.setAttribute 'src', icon
  iconBlock.className = 'icon'
  wrapBlock.appendChild iconBlock

  #lon
  lonBlock = document.createElement 'div'
  lonBlock.className = 'lon'
  lonBlock.innerHTML = 'lon: ' + lon
  wrapBlock.appendChild lonBlock

  #lat
  latBlock = document.createElement 'div'
  latBlock.className = 'lat'
  latBlock.innerHTML = 'lat: ' + lat
  wrapBlock.appendChild latBlock

  #weather
  weatherBlock = document.createElement 'div'
  weatherBlock.className = 'weather'
  weatherBlock.innerHTML = weather
  wrapBlock.appendChild weatherBlock

  #temp
  tempBlock = document.createElement 'div'
  tempBlock.className = 'temp'
  tempBlock.innerHTML = temp + '&deg;'
  wrapBlock.appendChild tempBlock

  return

prepareData = (text) ->
  if text
    res = text.replace(/(\s)+/g, '').toLowerCase()
    return res.charAt(0).toUpperCase() + res.substr(1)
  else
    text = 'cherkassy'
    
  text


FindCity = (param)->
  param = prepareData document.getElementById('search-input').value

  jsonurl = 'http://api.openweathermap.org/data/2.5/weather?APPID=2f42d399f9f939b664dca10abedd0504&q=' + param
  request = new XMLHttpRequest

  request.open 'post', jsonurl
  request.send()

  request.onreadystatechange = ->
    if request.readyState == 4 and request.status == 200
      JSON.parse request.responseText
      getSearchData JSON.parse request.responseText

  return


form = document.getElementById 'searchform'

form.addEventListener 'submit', (e)->
  e.preventDefault();
  FindCity()
  initMap(prepareData document.getElementById('search-input').value)
  return false


FindCity('Cherkassy')


initMap = (pointB)->
	#Cherkassy
  pointA = new (google.maps.LatLng)(49.444431, 32.059769)

  myOptions = 
    zoom: 7
    center: pointA
    scrollwheel: off
  map = new (google.maps.Map)(document.getElementById('map'), myOptions)

  directionsService = new (google.maps.DirectionsService)
  directionsDisplay = new (google.maps.DirectionsRenderer)(map: map)

  if pointB
  	calculateAndDisplayRoute directionsService, directionsDisplay, pointA, pointB
  else
		markerA = new (google.maps.Marker)(
			position: pointA
			title: 'Cherkassy'
			map: map)
  return

calculateAndDisplayRoute = (directionsService, directionsDisplay, pointA, pointB) ->
  directionsService.route {
    origin: pointA
    destination: prepareData document.getElementById('search-input').value
    travelMode: google.maps.TravelMode.DRIVING
  }, (response, status) ->
    if status == google.maps.DirectionsStatus.OK
      directionsDisplay.setDirections response
    else
      window.alert 'Directions request failed due to ' + status
    return
  return

