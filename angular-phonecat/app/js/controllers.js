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
