// вешаем app на window чтобы остальные модули
// смогли его использовать
window.app = angular.module("portfolio", ["ngRoute"]);

// хак для префикса в адресной строке, по умолчанию
// почему-то - "#!/", а это не хорошо
app.config(['$locationProvider', function($locationProvider) {
	$locationProvider.hashPrefix('');
}]);

// настраиваем роутер
// он работает так, что ему нужно указать
// - путь, к которому будет обращение
// - шаблон, можно указать как строкой, так и просто путь к шаблону
// - и контроллер, если нужен, он будет оаботать с текущим шаблоном
app.config(function($routeProvider) {
	$routeProvider
	// главка
	.when("/", {
		templateUrl : "assets/g12-angular-router/templates/main.html",
		controller: 'MainCtrl'
	})
	// тоже главка, вдруг захотят сюда зайти
	.when("/main", {
		templateUrl : "assets/g12-angular-router/templates/main.html",
		controller: 'MainCtrl'
	})
	// обо мне
	.when("/about", {
		templateUrl : "assets/g12-angular-router/templates/about.html"
	})
	// способности
	.when("/skills", {
		templateUrl : "assets/g12-angular-router/templates/skills.html",
		controller: 'SkillsCtrl'
	})
	// работы портфолио
	.when("/works", {
		templateUrl : "assets/g12-angular-router/templates/works.html",
		controller: 'WorksCtrl'
	})
	// детальная страничка работы портфолио
	.when("/works/:id", {
		templateUrl : "assets/g12-angular-router/templates/work.html",
		controller: 'WorkCtrl'
	})
	// сонтакты
	.when("/contact", {
		templateUrl : "assets/g12-angular-router/templates/contact.html"
	})
	// если ничего такого нет, то перенаправляем на главку
	.otherwise({
		templateUrl : "assets/g12-angular-router/templates/main.html",
		controller: 'MainCtrl'
	})
});
