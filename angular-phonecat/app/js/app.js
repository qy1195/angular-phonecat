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
