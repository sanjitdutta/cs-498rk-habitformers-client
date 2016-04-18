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
  })
  .when('/statistics/:id', {
    templateUrl: 'partials/settings.html',
    controller: 'StatisticsController',
    activeTab: 'statistics'
  })
  .when('/weekly/:id', {
    templateUrl: 'partials/settings.html',
    controller: 'WeeklyController',
    activeTab: 'weekly'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);