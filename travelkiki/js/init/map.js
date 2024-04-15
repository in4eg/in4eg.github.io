mapboxgl.accessToken = 'pk.eyJ1IjoiaW40ZWciLCJhIjoiY2x1d3N1YXhvMGMxMjJybW94d2tuamhsYSJ9.FZXR1OgP4OwrwXTCqHJhhg';
var map = new mapboxgl.Map({
		container: 'map',
		// inkor/cjm09fiiw784r2rppn2itgscr
		// style: 'mapbox://styles/m1sa/cjpiabvcr0f8v2rozc8rm66kt', //dark
		style: 'mapbox://styles/m1sa/cjkntwiak1h8l2spjxmjajomg', //light
		center: [10, 0],
		zoom: $(window).innerWidth() < 768 ? 0.2 : 1.5,
		"light": {
			"anchor": "viewport",
			"color": "white",
			"intensity": .1
		}
	});

var points = [{
	position: [50.3365752,30.8815552],
	title: "KBP Kiev",
	price: Math.floor(Math.random() * 1000)
},{
	position: [47.4336435,19.2535279],
	title: "BUD Budapest",
	price: Math.floor(Math.random() * 1000)
},{
	position: [41.7998868,12.2440497],
	title: "FCO Roma",
	price: Math.floor(Math.random() * 1000)
},{
	position: [52.5588327,13.2862487],
	title: "TXL Berlin",
	price: Math.floor(Math.random() * 1000)
},{
	position: [55.9736482,37.4103143],
	title: "SVO Moscow",
	price: Math.floor(Math.random() * 1000)
},{
	position: [53.3584608,-2.2766053],
	title: "MAN Manchester",
	price: Math.floor(Math.random() * 1000)
},{
	position: [38.9531162,-77.4587275],
	title: "IAD Washington",
	price: Math.floor(Math.random() * 1000)
},{
	position: [25.795865,-80.2892344],
	title: "MIA Miami",
	price: Math.floor(Math.random() * 1000)
},{
	position: [49.1966913,-123.183701],
	title: "YVR Vancouver",
	price: Math.floor(Math.random() * 1000)
},{
	position: [43.0542394,74.4673192],
	title: "FRU Manas",
	price: Math.floor(Math.random() * 1000)
},{
	position: [19.0895595,72.8634257],
	title: "BOM Mumbai",
	price: Math.floor(Math.random() * 1000)
},{
	position: [40.0710046,116.5878245],
	title: "PEK Pekin",
	price: Math.floor(Math.random() * 1000)
},{
	position: [35.5493932,139.7776499],
	title: "HND Tokyo",
	price: Math.floor(Math.random() * 1000)
},{
	position: [1.3644202,103.9893421],
	title: "SIN Singapore",
	price: Math.floor(Math.random() * 1000)
},{
	position: [56.7447746,60.8007598],
	title: "SVX Koltsovo",
	price: Math.floor(Math.random() * 1000)
},{
	position: [49.670833,73.3322554],
	title: "KGF Sary-Arka",
	price: Math.floor(Math.random() * 1000)
},{
	position: [60.3210416,24.9506717],
	title: "HEL Helsinki",
	price: Math.floor(Math.random() * 1000)
},{
	position: [43.4450151,39.9416763],
	title: "AER Sochi",
	price: Math.floor(Math.random() * 1000)
},{
	position: [-23.6273246,-46.6587729],
	title: "CGH Congonhas",
	price: Math.floor(Math.random() * 1000)
},{
	position: [42.7925942,141.6682899],
	title: "CTS New Chitose",
	price: Math.floor(Math.random() * 1000)
},{
	position: [-37.6690123,144.8388386],
	title: "MEL Melbourne",
	price: Math.floor(Math.random() * 1000)
},{
	position: [-6.1275282,106.6515171],
	title: "CGK Soekarno-Hatta",
	price: Math.floor(Math.random() * 1000)
},{
	position: [8.9800689,38.7967432],
	title: "ADD Addis Ababa Bole",
	price: Math.floor(Math.random() * 1000)
}];


// displaying markers
map.on('load', function () {

	// other masrkers

	var markers = [];

	points.forEach(function(point){
		var marker = new maps.createMarker('marker', "<span class=\"point\"></span><span class=\"title\">"+point.title+"</span><span class=\"price\">"+point.price+"&euro;</span>", 'top-left', [-2,-10]);
		marker.setPosition(point.position.reverse()).setMap(map);
		markers.push(marker);
	});

	var i = 0;
	var showCurrentMarker = function(){
		markers[i].hidePoint().hideContent();
		i = i >= points.length-1 ? 0 : ++i;
		markers[i].showPoint().showContent();
	};
	// showCurrentMarker();

	setInterval(function(){
		showCurrentMarker();
	}, 3000);

	// home place
	var marker = new maps.createMarker('marker home', "<span class=\"point\"></span><span class=\"title\">Athenes</span>", 'top-left', [-2,-10]);
	marker.setPosition([37.9356467,23.9484156].reverse()).setMap(map);
	marker.showPoint().showContent();
	markers.push(marker);

});


map.on('load', function(){

	_a = Math.floor(Math.random()*points.length),
	_b = Math.floor(Math.random()*points.length);
	var a = points[_a],
			b = points[_b];

	$('.main-map .map').addClass('initialized');

	// a = points[2];
	// b = points[3];

	
	// console.log(_a, _b)

	// console.log(maps.getOrigin(a.position, b.position))
	// console.log(Math.degrees(Math.getAngleFromVector(Math.getNormal(a.position, b.position))))
	// console.log(maps.getOrigin(b.position, a.position))
	// console.log(c, n)


	// maps.bound(map, a.position, b.position);
	// map.once('moveend', function() {
	// 	maps.showWeather(a, map, maps.getOrigin(b.position, a.position));
	// 	var anim = maps.animatePath(map, a.position, b.position, 3000, function(){
	// 		maps.showWeather(b, map, maps.getOrigin(a.position, b.position));
	// 	}).run();
	// });
	// setTimeout(function(){
	// 	// map.fitBounds(new mapboxgl.LngLatBounds(
	// 	// 	[points[5].position[0], points[5].position[1]],
	// 	// 	[points[4].position[0], points[4].position[1]]
	// 	// ), {
	// 	// 	padding: {top: 100, bottom: 100, left: 100, right: 100}
	// 	// })
	// }, 1)

	// var cities = [
	// 	// points[Math.floor(Math.random()*points.length)],
	// 	// points[Math.floor(Math.random()*points.length)],
	// 	// points[Math.floor(Math.random()*points.length)],
	// 	// points[Math.floor(Math.random()*points.length)],
	// ];
	// for (var i = 1; i < 4; i++){
	// 	cities.push(points[i]);
	// }
	// // var cities = [
	// // 	// points[6],
	// // 	// points[5],
	// // 	// points[4],
	// // 	// points[4]
	// // ];
	// var path = cities.map(function(city){
	// 	return city.position;
	// });
	// x = path.flat(0).min();
	// y = path.flat(1).min();
	// X = path.flat(0).max();
	// Y = path.flat(1).max();
	// // console.log()
	// maps.bound(map, [x,y], [X,Y]);

	// maps.animateMultiPath(map, path, 1500, function(indexA, indexB){
	// 	// var normal = Math.getNormal(path[indexA], path[indexB]);
	// 	var normal = Math.getNormalFromVectors(path[indexA], path[indexB]);
	// 	center = Math.getCenterOfPath(path[indexA], path[indexB]);
	// 	// new maps.createMarker('', 'c').setPosition(center).setMap(map);
	// 	// new maps.createMarker('', 'b').setPosition(path[indexA+1]).setMap(map);
	// 	angle = Math.getAngleFromPath(center, path[indexB]);
	// 	// console.log(angle)
	// 	// if (Math.getAngleFromPath(path[indexA], path[indexB]) < 0){
	// 	// 	var normal = Math.getNormal2(path[indexA], path[indexB]);
	// 	// }
	// 	// if (Math.getAngleFromVector(normal) < 0){
	// 	// 	normal = Math.getNormal(path[indexB], path[indexA]);
	// 	// }
	// 	var position = [
	// 		path[indexA+1],
	// 		[path[indexA+1][0]+normal[0]*30, path[indexA+1][1]+normal[1]*30]
	// 	];
	// 	maps.showWeather(cities[indexA+1], map, maps.getOrigin(center, path[indexA+1]), position[1]);
	// 	new maps.createMarker('point-marker '+(indexB < path.length-1 ? 'primary' : ''), "<span class=\"point\"></span>").setPosition(cities[indexB].position).setMap(map).showPoint();
	// 	// maps.drawLine(map, cities[indexA].position, cities[indexB].position, 'red');
	// 	// maps.drawLine(map, position[0], position[1], 'green');
	// 	// console.log(position)
	// }, function(){
	// 	maps.showWeather(cities[0], map, maps.getOrigin(path[1], path[0]));
	// 	new maps.createMarker('point-marker', "<span class=\"point\"></span>").setPosition(cities[0].position).setMap(map).showPoint();
	// 	new maps.createMarker('point-marker primary', "<span class=\"point\"></span>").setPosition(cities[1].position).setMap(map).showPoint();
	// 	// console.log('start')
	// }, function(){
	// 	maps.showWeather(cities[cities.length-1], map, maps.getOrigin(path[path.length-2], path[path.length-1]));
	// 	// console.log('end')
	// });


	// maps.getWeather(points[4].title.replace(/[A-Z]{3}/g, ''), function(res){
	// 	console.log(res)
	// });

});