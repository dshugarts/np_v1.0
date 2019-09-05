var myApp = angular.module('myApp', ['ngRoute', 'ngAria']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  console.log('myApp -- config')





  $routeProvider
    .when('/', {
      redirectTo: 'home'
    })
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController as vm',
    })
    .when('/dashboard', {
      templateUrl: '/views/templates/dashboard.html',
      controller: 'HomeController as vm',
    })
    .otherwise({
      template: '<h1>404</h1>'
    });
}]);