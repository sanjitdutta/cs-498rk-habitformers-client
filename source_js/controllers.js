var hfControllers = angular.module('hfControllers', []);

hfControllers.controller('NavController', ['$scope', 'Database', '$route', function($scope, Database, $route) {

  $scope.user = {
  	name : 'Test User'
  };
  $scope.$route = $route;

}]);

hfControllers.controller('MonthlyController', ['$scope', 'Database', function($scope, Database) {

	$scope.habits;
	$scope.days;
	$scope.month;

	$scope.month = 'April 2016';

	$scope.habits = [
		{name: 'Wash my hair'},
		{name: 'Do the dishes'},
		{name: 'Do 1,000 pull ups'}
	];

	$scope.days = [
		{dayNum: 29, dayName: 'Sunday', past: true},
		{dayNum: 30, dayName: 'Monday', past: true},
		{dayNum: 31, dayName: 'Tuesday', past: true},
		{dayNum: 1, dayName: 'Wednesday'},
		{dayNum: 2, dayName: 'Thursday'},
		{dayNum: 3, dayName: 'Friday'},
		{dayNum: 4, dayName: 'Saturday'},
		{dayNum: 5, dayName: 'Sunday',},
		{dayNum: 6, dayName: 'Monday',},
		{dayNum: 7, dayName: 'Tuesday',},
		{dayNum: 8, dayName: 'Wednesday'},
		{dayNum: 9, dayName: 'Thursday'},
		{dayNum: 10, dayName: 'Friday', today: true},
		{dayNum: 11, dayName: 'Saturday'},
		{dayNum: 12, dayName: 'Sunday',},
		{dayNum: 13, dayName: 'Monday',},
		{dayNum: 14, dayName: 'Tuesday',},
		{dayNum: 15, dayName: 'Wednesday'},
		{dayNum: 16, dayName: 'Thursday'},
		{dayNum: 17, dayName: 'Friday'},
		{dayNum: 18, dayName: 'Saturday'},
		{dayNum: 19, dayName: 'Sunday',},
		{dayNum: 20, dayName: 'Monday',},
		{dayNum: 21, dayName: 'Tuesday',},
		{dayNum: 22, dayName: 'Wednesday'},
		{dayNum: 23, dayName: 'Thursday'},
		{dayNum: 24, dayName: 'Friday'},
		{dayNum: 25, dayName: 'Saturday'},
		{dayNum: 26, dayName: 'Sunday',},
		{dayNum: 27, dayName: 'Monday',},
		{dayNum: 28, dayName: 'Tuesday',},
		{dayNum: 29, dayName: 'Wednesday'},
		{dayNum: 30, dayName: 'Thursday'},
		{dayNum: 31, dayName: 'Friday'},
		{dayNum: 1, dayName: 'Saturday', future: true}
	];

	$scope.colorClass = function(index) {
		return "color-" + index;
	}

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