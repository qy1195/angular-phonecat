'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/questions', {
        templateUrl: 'partials/index.html',
        controller: 'questions'
      }).
      when('/questions/hot', {
        templateUrl: 'partials/hot.html',
        controller: 'questions'
      }).
      when('/questions/comment', {
        templateUrl: 'partials/comment.html',
        controller: 'questions'
      }).
      when('/questions/pic', {
        templateUrl: 'partials/pic.html',
        controller: 'questions'
      }).
      when('/questions/:questionId/answers', {
        templateUrl: 'partials/answer.html',
        controller: 'answers'
      }).
      otherwise({
        redirectTo: '/questions'
      });
  }]);

'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('questions', ['$scope', '$http',
  function($scope, $http) {
    $http.get('http://localhost:9000/questions').success(function(data) {
      $scope.users = data;
    });
  }
]);

phonecatControllers.controller('answers', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
    $http.get('http://localhost:9000/questions/'+$routeParams.questionId+'/answers').success(function(data) {
      $scope.item = data;
    });
  }
]);

'use strict';

/* Directives */

'use strict';

/* Filters */

'use strict';

/* Services */

