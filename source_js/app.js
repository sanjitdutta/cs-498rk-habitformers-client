var app = angular.module('habit-formers', ['ngRoute', 'hfControllers', 'hfServices']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/index.html',
    controller: 'IndexController',
    activeTab: 'index'
  })
  .when('/settings', {
    templateUrl: 'partials/settings.html',
    controller: 'SettingsController',
    activeTab: 'settings'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);