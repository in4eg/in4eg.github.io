if document.getElementById 'map'

	filterFloat = (value) ->
		if /^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value)
			return Number(value)
		NaN

	mapStyle = []
	markers = []

	initMap = ->
		initLat = filterFloat document.getElementById('map').dataset.lat
		initLng = filterFloat document.getElementById('map').dataset.lng
		initZoom = filterFloat document.getElementById('map').dataset.zoom

		map = new (google.maps.Map)(document.getElementById('map'),
			center:
				lat: initLat
				lng: initLng
			disableDefaultUI: on
			scrollwheel: off
			styles: mapStyle
			zoom: initZoom)

		image = 
			url: 'img/map-pan-small.png'
			size: new google.maps.Size(44, 51)

		imagePrimary = 
			url: 'img/map-pan.png'
			size: new google.maps.Size(44, 51)


		setMarkers = (map, index, image, title, address) ->
			# console.log map
			lat = index.position[0]
			lng = index.position[1]

			shape = 
				coords: [1, 1, 1, 20, 18, 20, 18, 1]
				type: 'poly'

			marker = new (google.maps.Marker)(
				position:
					lat: lat
					lng: lng
				map: map
				icon: image
				shape: shape
				title: index.title)
			markers.push({marker, id: lng})

			contentString = "
					<div id=\"contentMarker\" class=\"marker-map-content\">
						<div class=\"title\">#{title}</div>
						<div class=\"paragraph\">#{address}</div>
					</div>
					"
			infowindow = new (google.maps.InfoWindow)(content: contentString)

			marker.addListener 'click', ->
				infowindow.open map, marker
				return

			# if places[i].main is true
			# 	infowindow.open(map,marker);

			return

		for place, i in places

			if places[i].main is true
				setMarkers(map, places[i], imagePrimary, places[i].title, places[i].address)
			else
				setMarkers(map, places[i], image, places[i].title, places[i].address)

		$ '[data-tabs]'
			.on 'click', '.tab-item', (e)->
				e.preventDefault();
				lat = $(@).data('lat')
				lng = $(@).data('lng')
				zoom = $(@).data('zoom')

				map.setZoom zoom
				coord = new (google.maps.LatLng)(lat, lng)
				map.panTo coord

				if window.innerWidth <= 640
					if top != 0
						$('html,body').animate
							scrollTop: $('#map').offset().top - 20
						, 200
				return

		currentZoom = map.getZoom()

		$ '[data-zoomin]'
			.click ->
				map.setZoom currentZoom += 1
				return

		$ '[data-zoomout]'
			.click ->
				map.setZoom currentZoom -= 1
				return
		return

	google.maps.event.addDomListener window, 'load', initMap