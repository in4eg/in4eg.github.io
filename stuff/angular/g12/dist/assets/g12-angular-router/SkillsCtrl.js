app.controller('SkillsCtrl', function ($scope) {

	$scope.skills = [
		{
			name: 'General',
			skills: ['Sites', 'Web Apps', 'SEO', 'Design', 'Marketing']
		},
		{
			name: 'Instruments, libraries, frameworks',
			skills: ['Angular.js', 'React.js', 'jQuery', 'Bootstrap', 'Materialize']
		},
		{
			name: 'Experience',
			skills: ['Windows', 'Linux', 'Prject management']
		}
	];

});