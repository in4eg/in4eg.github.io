async function initMap() {
	let mapElement = document.getElementById('map');
	let mapLocation = mapElement.getAttribute('data-position').split(',');
	let position = { lat: parseFloat(mapLocation[0].trim()), lng: parseFloat(mapLocation[1].trim()) };
	let mapZoom = parseInt(mapElement.getAttribute('data-zoom')) || 10;
	let markerTitle = mapElement.getAttribute('data-title');

	// Request needed libraries.
	const { Map } = await google.maps.importLibrary("maps");
	const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
	const map = new Map(document.getElementById("map"), {
		center: position,
		zoom: mapZoom,
		styles: [{"stylers": [{"saturation": "0"}]}, {"stylers": [{"color": "#6e3a35"},{"saturation": "0"}]}, {"stylers": [{"color": "#5a524f"},{"saturation": "0"}]}, {"stylers": [{"visibility": "off"}] }, {"stylers": [{"color": "#6e3a35"},{"saturation": "0"},{"visibility": "on"}]}, {"stylers": [{"color": "#efebea"},{"saturation": "0"}]},{"stylers": [{"color": "#af9d94"},{"saturation": "0"},{"visibility": "off"}]},{"stylers": [{"color": "#5a524f"},{"saturation": "0"}]},{"stylers": [{"visibility": "off"}]},{"stylers": [{"saturation": "0"}]},{"stylers": [{"hue": "#ff0000"},{"saturation": "34"},{"visibility": "off"}]},{"stylers": [{"color": "#5a524f"},{"saturation": "0"}]},{"stylers": [{"visibility": "off"}]},{"stylers": [{"visibility": "off"}]},{"stylers": [{"visibility": "off"}]},{"stylers": [{"color": "#5a524f"}]},{"stylers": [{"visibility": "off"}]},{"stylers": [{"visibility": "off"},{"lightness": "60"},{"gamma": "1.00"},{"hue": "#ff0000"},{"saturation": "-90"}]},{"stylers": [{"color": "#ffffff"},{"saturation": "0"}]},{"stylers": [{"visibility": "simplified"},{"hue": "#ff0000"},{"weight": "0.01"}]},{"stylers": [{"color": "#bfb1a9"},{"saturation": "0"}]},{"stylers": [{"color": "#bfb1a9"},{"saturation": "0"}]},{"stylers": [{"color": "#5a524f"},{"saturation": "0"}]},{"stylers": [{"visibility": "off"}]},{"stylers": [{"visibility": "on"},{"hue": "#ff0000"},{"saturation": "-90"},{"lightness": "0"},{"gamma": "1.00"},{"weight": "1"}]},{"stylers": [{"color": "#d2cac7"},{"saturation": "0"}]},{"stylers": [{"saturation": "0"}]},{"stylers": [{"color": "#5a524f"},{"saturation": "0"}]},{"stylers": [{"visibility": "off"}]},{"stylers": [{"visibility": "off"}]}],
		zoomControl: false,
		scaleControl: false,
		scrollwheel: false,
		disableDefaultUI: true,
		mapId: mapId,
		mapTypeControl: false,
		keyboardShortcuts: window.innerWidth <= 768 ? false : true,
		gestureHandling: window.innerWidth <= 768 ? 'cooperative' : 'auto'
	});
	const marker = new AdvancedMarkerElement({
		map,
		position: position,
		title: markerTitle
	});
}

window.initMap = initMap;