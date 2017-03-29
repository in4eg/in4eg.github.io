'use strict';

var app = angular.module('cv', ['ui.router']);
'use strict';

AboutCtrl.$inject = ["$scope", "$state"];
app.controller('AboutCtrl', AboutCtrl);

function AboutCtrl($scope, $state) {
    console.log('about ctrl');

    $scope.var1 = '22222222222';

    $scope.user = {
        fullName: 'John Doe',
        skills: ['HTML', 'CSS', 'Javascript', 'SCSS', 'Angular']
    };
}
'use strict';

app.constant('config', {
        apiServer: 'http://127.0.0.1/',
        someParam: 'value'
});
'use strict';

SkillsCtrl.$inject = ["$scope", "$state"];
app.controller('SkillsCtrl', SkillsCtrl);

function SkillsCtrl($scope, $state) {
    console.log('SKills ctrl');

    $scope.user = {
        fullName: 'John Doe',
        skills: ['HTML', 'CSS', 'Javascript', 'SCSS', 'Angular']
    };
}
'use strict';

MainCtrl.$inject = ["$scope", "$state"];
app.controller('MainCtrl', MainCtrl);

function MainCtrl($scope, $state) {
    console.log('Main ctrl', $state.current.name);

    $scope.var1 = 'var1112';
}
'use strict';

app.config(["$stateProvider", function ($stateProvider) {
    $stateProvider.state({
        name: 'main',
        url: '',
        template: '<header>\n                               <a ui-sref="main.about" ui-sref-active="active">About</a>\n                               <a ui-sref="main.skills" ui-sref-active="active">Skills</a>\n                           </header>\n                           v1: {{ var1 }}\n                           <ui-view></ui-view>',
        controller: 'MainCtrl as Main'
    }).state({
        name: 'main.about',
        url: '/about',
        templateUrl: '/modules/about/about.html',
        controller: 'AboutCtrl as About'
    }).state({
        name: 'main.skills',
        url: '/skills',
        templateUrl: '/modules/skills/skills.html',
        controller: 'SkillsCtrl as Skills'
    });
}]);
//# sourceMappingURL=main.js.map
