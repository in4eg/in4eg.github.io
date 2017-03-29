app.controller('MainCtrl', function ($scope) {

	// у каждого контроллера есть свой $scope
	// это область видимости в js
	// в html это распространяется на всех детей,
	// которые лежат в родителе в директивой ng-controller
	$scope.user = {
		name: 'Inna',
		secondName: 'Kravchenko',
		email: 'innakravchenko@com'
	};

});