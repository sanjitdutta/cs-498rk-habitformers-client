var hfControllers = angular.module('hfControllers', []);

hfControllers.controller('NavController', ['$scope', 'Database', '$route', function($scope, Database, $route) {

  $scope.user = {
  	name : 'Test User'
  };
  $scope.$route = $route;

}]);

hfControllers.controller('MonthlyController', ['$scope', 'Database', function($scope, Database) {
  // do stuff
}]);

hfControllers.controller('WeeklyController', ['$scope', 'Database', function($scope, Database) {
  // do stuff
}]);

hfControllers.controller('SettingsController', ['$scope', 'Database', function($scope, Database) {
  // do stuff
}]);


hfControllers.controller('LoginController', ['$scope', 'Database', function($scope, Database) {
  // do stuff
}]);

hfControllers.controller('StatisticsController', ['$scope', 'Database', function($scope, Database) {
  


  
}]);