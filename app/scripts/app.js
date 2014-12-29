'use strict';

/* App Module */
var webApp = angular.module('webApp', [
  'ngRoute',
  'ngTouch',

  'webControllers'
]);

webApp.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});
webApp.config(function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
});
webApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/home.html',
        controller: 'WebIndexCtrl'
      }).
      when('/product', {
        templateUrl: 'views/product.html',
        controller: 'WebProductCtrl'
      }).
      when('/joinus', {
        templateUrl: 'views/joinus.html',
        controller: 'WebJoinusCtrl'
      }).
      when('/about', {
        templateUrl: 'views/about.html',
        controller: 'WebAboutCtrl'
      }).
      otherwise({
        templateUrl: 'views/home.html',
        controller: 'WebIndexCtrl'
      });
  }]
);

