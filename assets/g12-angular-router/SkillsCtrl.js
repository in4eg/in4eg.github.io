app.controller('SkillsCtrl', function ($scope) {

	$scope.skills = [
		{
			name: 'General',
			skills: ['Front-end Development']
		},
		{
			name: 'Instruments, libraries, frameworks',
			skills: ['JavaScript', 'CoffeeScript', 'Sass/Scss', 'Gulp', 'Vue.js', 'jQuery', 'Bootstrap', 'Materialize']
		},
		{
			name: 'Experience',
			skills: ['cross-browser HTML and CSS', 'Unix-like operating system', 'MVC']
		}
	];

});