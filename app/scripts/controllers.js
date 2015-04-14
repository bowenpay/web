'use strict';

/* Controllers */
var webControllers = angular.module('webControllers', []);

webControllers.controller('WebIndexCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
  	$scope.isActive = function(route) {
        return route === $location.path();
    };
    $("#qrcode").qrcode({
        width:200,
        height:200,
        text: "images/index-qrcode.jpg"
    });
    $scope.displayQRCode = function(){
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