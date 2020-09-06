var filterFloat, initMap, mapStyle, markers;

if (document.getElementById('map')) {
	filterFloat = function(value) {
		if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value)) {
			return Number(value);
		}
		return 0/0;
	};
	mapStyle = [];
	markers = [];
	initMap = function() {
		var currentZoom, i, image, imagePrimary, initLat, initLng, initZoom, j, len, map, place, setMarkers;
		initLat = filterFloat(document.getElementById('map').dataset.lat);
		initLng = filterFloat(document.getElementById('map').dataset.lng);
		initZoom = filterFloat(document.getElementById('map').dataset.zoom);
		map = new google.maps.Map(document.getElementById('map'), {
			center: {
				lat: initLat,
				lng: initLng
			},
			disableDefaultUI: true,
			scrollwheel: false,
			styles: mapStyle,
			zoom: initZoom
		});
		image = {
			url: 'images/map-marker.png',
			size: new google.maps.Size(32, 44)
		};
		imagePrimary = {
			url: 'images/map-marker.png',
			size: new google.maps.Size(32, 44)
		};
		setMarkers = function(map, index, image, title, address) {
			var contentString, infowindow, lat, lng, marker, shape;
			lat = index.position[0];
			lng = index.position[1];
			shape = {
				coords: [1, 1, 1, 20, 18, 20, 18, 1],
				type: 'poly'
			};
			marker = new google.maps.Marker({
				position: {
					lat: lat,
					lng: lng
				},
				map: map,
				icon: image,
				shape: shape,
				title: index.title
			});
			markers.push({
				marker: marker,
				id: lng
			});
			contentString = "<div id=\"contentMarker\" class=\"marker-map-content\"> <div class=\"title\">" + title + "</div> <div class=\"paragraph\">" + address + "</div> </div>";
			infowindow = new google.maps.InfoWindow({
				content: contentString
			});
			marker.addListener('click', function() {
				infowindow.open(map, marker);
			});
			// infowindow.open(map, marker);
		};
		for (i = j = 0, len = places.length; j < len; i = ++j) {
			place = places[i];
			if (places[i].main === true) {
				setMarkers(map, places[i], imagePrimary, places[i].title, places[i].address);
			} else {
				setMarkers(map, places[i], image, places[i].title, places[i].address);
			}
		}
		$('[data-tabs]').on('click', '.tab-item', function(e) {
			var coord, lat, lng, zoom;
			e.preventDefault();
			lat = $(this).data('lat');
			lng = $(this).data('lng');
			zoom = $(this).data('zoom');
			map.setZoom(zoom);
			coord = new google.maps.LatLng(lat, lng);
			map.panTo(coord);
			if (window.innerWidth <= 640) {
				if (top !== 0) {
					$('html,body').animate({
						scrollTop: $('#map').offset().top - 20
					}, 200);
				}
			}
		});
		currentZoom = map.getZoom();
		$('[data-zoomin]').click(function() {
			map.setZoom(currentZoom += 1);
		});
		$('[data-zoomout]').click(function() {
			map.setZoom(currentZoom -= 1);
		});
	};
	google.maps.event.addDomListener(window, 'load', initMap);
}
