'use strict';

/* Controllers */
var webControllers = angular.module('webControllers', []);

webControllers.controller('WebIndexCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
  	$scope.isActive = function(route) {
        return route === $location.path();
    };
    $scope.toggleQRCode = function(){
        $(".qr-outter").toggleClass("show");
    };
  }
]);
webControllers.controller('WebProductCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
  	$scope.isActive = function(route) {
        return route === $location.path();
    };
  }
]);
webControllers.controller('WebJoinusCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
  	$scope.isActive = function(route) {
        return route === $location.path();
    };
  }
]);
webControllers.controller('WebAboutCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
  	$scope.isActive = function(route) {
        return route === $location.path();
    };
  }
]);