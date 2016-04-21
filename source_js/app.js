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

/*

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/settings', {
    templateUrl: 'partials/settings.html',
    controller: 'SettingsController',
    activeTab: 'settings'
  }).
  when('/users', {
    templateUrl: 'partials/users.html',
    controller: 'SettingsController',
    activeTab: 'users'
  }).
  when('/users/add', {
    templateUrl: 'partials/addUser.html',
    controller: 'SettingsController',
    activeTab: 'users'
  }).
  when('/users/:user_id', {
    templateUrl: 'partials/userDetails.html',
    controller: 'SettingsController',
    activeTab: 'users'
  }).
  when('/tasks', {
    templateUrl: 'partials/tasks.html',
    controller: 'SettingsController',
    activeTab: 'tasks'
  }).
  when('/tasks/add', {
    templateUrl: 'partials/addTask.html',
    controller: 'SettingsController',
    activeTab: 'tasks'
  }).
  when('/tasks/:task_id', {
    templateUrl: 'partials/taskDetails.html',
    controller: 'SettingsController',
    activeTab: 'tasks'
  }).
  when('/tasks/:task_id/edit', {
    templateUrl: 'partials/editTask.html',
    controller: 'SettingsController',
    activeTab: 'tasks'
  }).
  otherwise({
    redirectTo: '/tasks'
  });
}]);

*/