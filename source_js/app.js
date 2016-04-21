var app = angular.module('hf', ['ngRoute', '720kb.datepicker', 'hfControllers', 'hfServices']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'partials/index.html',
    controller: 'LoginController',
    activeTab: 'index'
  }).
  when('/settings', {
    templateUrl: 'partials/settings.html',
    controller: 'SettingsController',
    activeTab: 'settings'
  }).
  when('/statistics/:id', {
    templateUrl: 'partials/settings.html',
    controller: 'StatisticsController',
    activeTab: 'statistics'
  }).
  when('/monthly', {
    templateUrl: 'partials/monthly.html',
    controller: 'MonthlyController',
    activeTab: 'monthly'
  }).
  when('/weekly/:id', {
    templateUrl: 'partials/settings.html',
    controller: 'WeeklyController',
    activeTab: 'weekly'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);