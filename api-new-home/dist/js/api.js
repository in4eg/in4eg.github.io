			// объект для отработки логов в консоль
			var LOG = {
				// елемент
				element: document.getElementById('console'),
				// строка
				string: document.getElementById('console').innerHTML,
				// добаляем новую запись
				push: function(str){
					// добавляем время и новую строку в уже существующюю
					this.string = this.string + '<br>' + this.timestamp() + str;
					// обновляем содержимое блока
					this.element.innerHTML = this.string;
					// скроллим в самый конец
					this.element.scrollTop = this.element.scrollHeight;
				},
				// генерируем время
				timestamp: function(){
					var str = '[';
					date = new Date();
					// нужно обработать время
					// потому что время возвращается без ноля в начале
					str += (date.getUTCHours() < 10 ? '0' : '')+date.getUTCHours();
					str += ':'+(date.getUTCMinutes() < 10 ? '0' : '')+date.getUTCMinutes();
					str += ':'+(date.getUTCSeconds() < 10 ? '0' : '')+date.getUTCSeconds();
					str += '] '
					return str;
				}
			};

			// Объект для запросов, пока что только GET
			var ajax = {

				// принимает:
				// url [str] - адрес для запроса
				// successCallback [fn] - колбек, который выполнится в случае успешного запроса
				// stateChangeCallback [fn] - колбек, который будет выполняться каждый раз при смене состояния запроса
				// errorCallback [fn] - колбек, который будет вызван при ошибке
				get: function(url, successCallback, stateChangeCallback, errorCallback){
					// создаем новый запрос
					// он будет хранить в себе всю необходимую информациию
					// и его целиком можно отдавать в колбеки, или же отдавать по частям
					var request = new XMLHttpRequest();
					request.open('GET', url, true);
					// обрабатываем колбеки
					request.onload = function() {
						// 200 (OK) - отправляется серером в ответ, если все хорошо
						if (request.status === 200) {
							// если все хорошо и мы передали колбек, то передаем в него ответ и сам запрос для отладки
							if (successCallback){
								successCallback(request.responseText, request);
							}
						} else {
							// если все плохо и мы передали колбек, то передаем в него запрос для отладки
							if (errorCallback){
								errorCallback(request);
							}
						}
					};
					request.onreadystatechange = function(){
						// Содержит состояние объекта XMLHttpRequest.
						// Изменяется от 0 до 4:
						// 0: запрос не инициализирован
						// 1: установлено соединение с сервером
						// 2: запрос получен
						// 3: обработка запроса
						// 4: запрос завершен и ответ готов
						if (stateChangeCallback){
							// в колбек передаем сам запрос и его состояние
							stateChangeCallback(request.readyState, request)
						}
					}
					// отправляем запрос
					request.send();
				}

			};
			// пример использования
			// ajax.get('example.json', function(response){
			// 	console.log(JSON.parse(response));
			// }, function(readyState){
			// 	console.log(readyState)
			// });

			// объект для хранения елементов
			var DOM = {
				info: 	document.getElementById('info'), 		// блок с информацией
				image: 	document.getElementById('image'), 	// картинка на фоне
				map: 		document.getElementById('map'), 		// карта
				input: 	document.getElementById('address'), // поле ввода
				videos: document.getElementById('videos'), 	// список с результатами поиска видео

				// елементы погоды
				weather: {
					icon: 				document.getElementById('icon'), 						// иконка
					temperature: 	document.getElementById('temperature'), 		// температура
					humidity: 		document.getElementById('humidity'), 				// влажность
					cloudly: 			document.getElementById('cloudly'), 				// облачность
					wind: 				document.getElementById('wind'), 						// скорость ветера
					date: 				document.getElementById('date'), 						// дата
					type: 				document.getElementById('type'), 						// тип погоды (облачно, ясно)
					results: 			document.getElementById('weatherResults'), 	// список с результатами погоды на 5 дней
					images: 			document.getElementById('images') 					// список с результатами поиска картинок
				},

				// замена картинки на фоне
				switchImage: function(str, callback){
					// сначала затмеваем ее
					this.info.classList.add('faded');
					setTimeout(function(){
						// вставляем новую картинку
						this.image.setAttribute('src', 'img/'+data[str].img);
						// и если передали колбек - выполняем его
						if (callback){
							callback();
						}
						// так же, после всего убираем прозрачность с задержкой, чтобы не наблюдать рывков при смене
						setTimeout(function(){
							this.info.classList.remove('faded');
						}, 500);
					}, 1050);
				}

			};

			// объект с данными для каждого типа погоды
			var data = {
				// названия соответсвуют полям этого объекта
				names: ['sun','clear','cloud','lightRain','rain','huragan','snow'],
				sun: 				{ img: 'sun.jpg', 				name: 'Солнечно', 			icon: 'sun' },
				clear: 			{ img: 'clear.jpg', 			name: 'Солнечно', 			icon: 'sun' },
				cloud: 			{ img: 'cloud.jpg', 			name: 'Облачно', 				icon: 'sun-and-cloud' },
				lightRain: 	{ img: 'light-rain.jpg', 	name: 'Легкий дождь', 	icon: 'cloud-and-rain' },
				rain: 			{ img: 'rain.jpg', 				name: 'Сильный дождь', 	icon: 'rain' },
				huragan: 		{ img: 'huragan.jpg', 		name: 'Ураган', 				icon: 'storm' },
				snow: 			{ img: 'snow.jpg', 				name: 'Снег', 					icon: 'snowflake' }
			};

			// Кастомный цвет карты
			// -->> https://snazzymaps.com/style/1/pale-dawn
			var mapStyles = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]

			// объявляем переменные глобально, чтобы иметь к ним доступ в любой функции
			var map, geocoder,
					markers = [],
					today = new Date();

			// форматируем дату в понятный вид
			var dd = today.getDate(), 			// День.
					mm = today.getMonth()+1, 		// Месяц. Январь под индексом 0! Это баг джаваскрипта
					yyyy = today.getFullYear();	// Год.
			// метод getDate вернет число без ноля. Для более привычного вида - добавим вперед ноль, если число меньше 10
			if (dd < 10) { dd = '0' + dd }
			// метод getMonth работает точно так же, делаем точно то же самое
			if (mm < 10) { mm = '0' + mm }
			// и заносим все в одну строку разделяя точками
			today = dd + '.' + mm + '.' + yyyy;


			// функции --------------------------------------------------


			// функция, которая включает карты по заданным координатам
			// (в данном случае передаются координаты, взятые в браузере)
			function initMap(userPosition){
				LOG.push('Создание стилей карты...');
				var styledMap = new google.maps.StyledMapType(mapStyles, {
					name: "Styled Map"
				});
				LOG.push('Создание каты...');
				// создаем новую карту и заносим ее в переменную
				map = new google.maps.Map(DOM.map, {
					zoom: 12,
					center: {
						lat: userPosition.latitude, 	// широта
						lng: userPosition.longitude 	// долгота
					},
					// вставляем кастомные стили
					mapTypeControlOptions: {
						mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
					}
				});
				LOG.push('Устновка маркера в точке [lat: '+userPosition.latitude+', lng: '+userPosition.longitude+']...');
				// ставим маркер в точку где сейчас находимся сами
				var marker = new google.maps.Marker({
					map: map,
					position: {
						lat: userPosition.latitude,
						lng: userPosition.longitude
					},
					icon: 'img/flag.png'
				});
				LOG.push('Применение стилей...');
				// применяем кастомные стили
				map.mapTypes.set('map_style', styledMap);
				map.setMapTypeId('map_style');
				// запрашиваем погоду
				getWeather(userPosition.latitude, userPosition.longitude);
				// создаем новый геокодер и сохраняем в переменную
				geocoder = new google.maps.Geocoder();
			};

			// функция для кодирования введенных данных ползователем
			function geocodeAddress() {

				LOG.push('Производится кодироване по запросу "'+DOM.input.value+'"');
				// декодируем данные
				// согласно документации, geocode() принимает объект с опциями запроса
				// в данном случае - адрес, его берем из значения поля ввода
				geocoder.geocode({'address': DOM.input.value}, function(results, status) {

					LOG.push('Геокодирование завершено.');
					// так же, согдасно докам, нужно проверить статус запроса,
					// если сервер вернул 200 (OK) - то все хорошо
					if (status === google.maps.GeocoderStatus.OK) {
						LOG.push('Карта установлена в центре с [lat: '+results[0].geometry.location.lat()+', lng: '+results[0].geometry.location.lng()+']');
						// указываем центр карты
						map.setCenter(results[0].geometry.location);
						LOG.push('Устанвока меркера в точке [lat: '+results[0].geometry.location.lat()+', lng: '+results[0].geometry.location.lng()+']');
						// ставим маркер в точку которую ищем
						var marker = new google.maps.Marker({
							map: map,
							position: results[0].geometry.location,
							icon: 'img/flag.png'
						});
						// запрашиваем погоду с задержкой, потому что на данный момент у нас ресурсы заняты поиском на карте
						setTimeout(function(){
							// а когда освободятся - запрашиваем
							getWeather(results[0].geometry.location.lat(), results[0].geometry.location.lng());
						}, 1000);

					// иначе выводим оповещение
					} else {
						LOG.push('Ошибка геокодирования.');
						alert('Geocode was not successful for the following reason: ' + status);
					}
				});
			};


			// погода --------------------------------------------------


			// Апи погоды возвращает разный айди для разного типа погоды
			// Узнав какой у нас конкретно айди или в какой диапазон он входит,
			// мы сможем узнать какой тип погоды
			// Таблица возвращаемых состояний апи
			// -->> https://openweathermap.org/weather-conditions
			function getWeatherType(id){
				var result = {};
				if (id === 800){ 							// ровно 800 - это ясная погода
					result.type = 'clear';			// в основном ясная погода, может чуть-чуть с облачками
				} else if (id >= 800 && id < 900){
					result.type = 'cloud';			// облачно
				} else if (id >= 300 && id < 400){
					result.type = 'lightRain';	// легкий дождик
				} else if (id >= 500 && id < 600){
					result.type = 'rain';				// дождь
				} else if (id >= 200 && id < 300){
					result.type = 'huragan';		// ураган, торнадо
				} else if (id >= 600 && id < 700){
					result.type = 'snow';				// снег, слабый, мокрый, любой
				} else {
					// вообще, тут должен быть туман, но очень лень искть иконку тумана
					// поэтому туман у нас будет легким дождем
					result.type = 'lightRain';
				}
				return result;
			};

			// функция обновляет все данные о погоде в HTML-елементах
			function setWeatherConditions(result){
				// Градус Кельвина
				// это градусы цельсия минус 273.15
				// -->> https://ru.wikipedia.org/wiki/%D0%9A%D0%B5%D0%BB%D1%8C%D0%B2%D0%B8%D0%BD
				DOM.weather.temperature.innerHTML = (result.main.temp - 273.15).toFixed(0);
				// Влажность (возвращается в процентах)
				DOM.weather.humidity.innerHTML = result.main.humidity+'%';
				// Облачность (возвращается в процентах)
				DOM.weather.cloudly.innerHTML = result.clouds.all+'%';
				// берем информацию про погоду из вспомогательной функции
				currentWeather = getWeatherType(result.weather[0].id);
				// вставляем текущую дату
				DOM.weather.date.innerHTML = today;
				// вставляем текущее название
				DOM.weather.type.innerHTML = data[currentWeather.type].name;
				// убираем у иконки все классы, для надежности, потому что
				// не знаем какой именно класс сейчас там
				DOM.weather.icon.classList.remove(
					'icon-sun-and-cloud', 'icon-sun', 'icon-snowflake',
					'icon-rain', 'icon-cloud-and-rain', 'icon-storm'
				);
				// и ставим текущий класс
				DOM.weather.icon.classList.add('icon-'+data[currentWeather.type].icon);
				// вставляем скорость ветра
				DOM.weather.wind.innerHTML = result.wind.speed;
			};

			// функция запрашивает погоду, принимает широту и долготу
			function getWeather(lat, lng){
				LOG.push('Отправка запроса на погоду...');
				// отсылаем запрос
				ajax.get('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&APPID=4b2a78506f9ea61c408b16a2765ff6b1', function(response){
					LOG.push('Погода получена по координатам [lat: '+lat+', lng: '+lng+'].');
					// парсим ответ
					result = JSON.parse(response);
					// меняем картинку и в качестве колбека передаем фкнкции для погоды и картинок
					DOM.switchImage(getWeatherType(result.weather[0].id).type, function(){
						setWeatherConditions(result);
						getWeatherForecast(lat, lng);
						getImages(DOM.input.value);
					});
				});
			};

			// функция оборачивает элемент результатов, возвращает строку с HTML
			function createWeatherResultItem(obj){
				str = '<li>';
				str += '<span><i class="icon icon-clock"></i>'+formatTimeReverse(obj.dt_txt)+'</span>';
				str += '<span><i class="icon icon-sun-and-cloud"></i>'+obj.clouds.all+'%</span>';
				str += '<span><i class="icon icon-thermometer"></i>'+(obj.main.temp-273.15).toFixed(1)+'<sup class="faded">°C</sup></span>';
				str += '</li>';
				return str;
			};

			// Запрашиваем погоду на 5 дней
			// -->> https://openweathermap.org/forecast5#5days
			function getWeatherForecast(lat, lng){
				LOG.push('Отправка запроса на погоду на 5 дней...');
				// отсылаем запрос
				ajax.get('http://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lng+'&APPID=4b2a78506f9ea61c408b16a2765ff6b1', function(response){
					LOG.push('Погода на 5 дней получена.');
					// парсим
					result = JSON.parse(response);
					// очищаем список, удалив все что есть
					var html = '';
					// проходим по результатам поиска и выводим элемент, завернутый с помощью функции
					result.list.forEach(function(res){
						html += createWeatherResultItem(res);
					});
					// вставляем результат в список
					DOM.weather.results.innerHTML = html;
				});
			};

			// Вспомогательнвя функция, принимает на вход дату
			// возвращает строку в виже HH:MM
			function formatTime(date){
				return date.getUTCHours()+ ':' +date.getUTCMinutes();
			};

			// функция помогает отворматировать и обернуть для стилизации дату
			// в списке погоды на 5 дней
			// дата на вход поступает в виде [22-22-2222 22:22:22] [MM-DD-YYYY hh:mm:ss]
			// на выходе получим дату MM.DD.YYY и время hh:mm
			function formatTimeReverse(str){
				var res = '',
						// split() - нарезает строку на части по заданному значению
						// возвращает массив
						parts = str.split(' ');
				res += '<b>'+parts[0].replace(/\-/gim, '.')+'</b>';
				// .substr(0, 5) - обрежет строку начиная с 0 и длинной 5 букв
				res += '<i>'+parts[1].substr(0, 5)+'</i>';
				return res;
			};


			// картинки --------------------------------------------------


			// функция заворачивает результат поиска картинок
			function createImagesResultItem(obj){
				// вставляем все в ссылку
				str = '<li><a href="'+obj.pageURL+'" target="_blank">';
				// картинка
				str += '<figure><img src="'+obj.webformatURL+'" class="'+(obj.imageHeight > obj.imageWidth ? 'vertical' : '')+'"></figure>';
				// лайки, просмотры, загрузки
				str += '<div class="statistics">';
				str += '<span><i class="icon icon-heart"></i>'+obj.likes+'</span>';
				str += '<span><i class="icon icon-eye"></i>'+obj.views+'</span>';
				// str += '<span><i class="icon icon-download"></i>'+obj.downloads+'</span>';
				str += '</div>';
				str += '</a></li>';
				// возвращаем результат
				return str;
			};

			// функция запрашивает картинки
			function getImages(name){
				LOG.push('Отправка запроса на картинки...');
				// отсылаем запрос
				ajax.get("https://pixabay.com/api/?key=4012631-a654f1c3e17cd26467c72d57d&q="+encodeURIComponent(name), function(response){
					LOG.push('Картинки загружены по запросу "'+name+'".');
					// очищаем список
					var html = '';
					// пробегаемся по всем картинкам
					JSON.parse(response).hits.forEach(function(item){
						html += createImagesResultItem(item);
					});
					// и вставляем их в список
					DOM.weather.images.innerHTML = html;
					// тут же, запрашиваем видео, чтобы снизить нагрузку
					setTimeout(function(){
						getVideos(name);
					}, 2000);
				});
			};


			// видео --------------------------------------------------


			// функция для обработки колбека загрузки фрейма
			function frameLoadCallback(count){
				LOG.push('Видео '+(count + 1)+' загружено во фрейм.');
			}

			// функция оборачивает найденное видео
			function createVideosResultItem(obj, i){
				str = '<li>';
				// заворачиваем в обертку, чтобы фрейм был адаптивным и пропорциональным
				str += '<div class="video-wrapper">';
				// согласно YouTube можно просто вставить айфрейм с сылкой на айди видео типа [ DkeKJGKngh ]
				str += '<iframe src="https://www.youtube.com/embed/'+obj.id.videoId+'" frameborder="0" allowfullscreen onload="frameLoadCallback('+i+')"></iframe>'
				str += '</div>'
				str += '</li>';
				// возвращаем результат
				return str;
			};

			// функция запрашивает видео
			// принимает на вход запрос, например [ Чернобыль ]
			function getVideos(q){
				LOG.push('Отправка запроса на видео...');
				// оборачиваем зпрос
				var request = gapi.client.youtube.search.list({
					part: 'snippet', q: q, maxResults: 3
				});
				// отсылаем его и обрабатываем ответ
				request.execute(function(response){
					LOG.push('Запрос обработан. Видео загружены по запросу "'+q+'". Фреймы начинают загружаться...');
					// очищаем список с видео
					var html = '';
					// пробегаемся по каждому видео и оборачиваем его
					response.items.forEach(function(item, i){
						html += createVideosResultItem(item, i);
					});
					// вставляем результат в список
					DOM.videos.innerHTML = html;
				});
			};


			// инициализация --------------------------------------------------


			// главная функция, она вызовется после загрузки Google Maps API
			function init(){

				LOG.push('Иницилизируется API карт...');

				// проверяем, поддерживает ли браузер геолокацию
				if (navigator.geolocation) {
					// если да, то опредеяем координаты пользователья
					LOG.push('Запрос на местоположение пользователья...');
					navigator.geolocation.getCurrentPosition(function(position){
						// и инициализируем карту с центром там, где пользователь
						LOG.push('Местоположение получено.');
						initMap(position.coords);
					});

				// или же, если нет - то выкидываем оповещение и прекращаем работу
				} else {
					LOG.push('Ошибка. Не получается определить местоположение.');
					alert("Geolocation is not supported by this browser.");
					return;
				}

				// навешиваем обработчик на поле ввода, слушаем то что пользователь ищет
				document.getElementById('address').addEventListener('keyup', function(e) {
					e.preventDefault();
					// если нижали Enter - отправляем запрос через API Google
					if (e.keyCode === 13){
						geocodeAddress();
					}
				});

			};

			// иницивлизируем апи ютюба
			function initYoutube(){
				LOG.push('Иницилизируется API Google...');
				gapi.client.load('youtube', 'v3', function(){
					// вставляем ключ
					gapi.client.setApiKey('AIzaSyD49-XZ2JV7Rws3KDM2T7nA56Jbi-O7djY');
					// и только тут инициализируем карты и все остальное
					// потому что апи client.js гораздо больше и всегда инициализируется позже чем карты
					// получается, что первый запрос не даст видео потому что апи не успевает загрузться
					// поэтому инициализируем здесь, чтобы предотвратить это
					init();
					LOG.push('API Google загружено.');
				});
			}
