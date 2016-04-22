var hfControllers = angular.module('hfControllers', []);

hfControllers.controller('NavController', ['$scope', 'Database', '$route', function($scope, Database, $route) {

	$scope.user;
	$scope.$route = $route;

	Database.getUser("57197fbc4f1daf85187fad00").success(function(data) { // need to see how this will be done
		$scope.user = data.data;
	})
	.error(function(data) {
		toastr.error(data.message);
	});

}]);

hfControllers.controller('MonthlyController', ['$scope', 'Database', function($scope, Database) {

	$scope.habits;
	$scope.days;
	$scope.date = new Date();
	$scope.month;
	$scope.sixWeeks = false;
	$scope.user;

	var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

	Database.getUser("57197fbc4f1daf85187fad00").success(function(data) { // need to see how this will be done
		$scope.user = data.data;
	})
	.error(function(data) {
		toastr.error(data.message);
	});

	Database.getHabitsByUser("57197fbc4f1daf85187fad00").success(function(data) { // need to see how this will be done
		$scope.habits = data.data;
		setMonth();
	})
	.error(function(data) {
		toastr.error(data.message);
	});

	$scope.colorClass = function(index) {
		return "color-" + index;
	}

	function setMonth() {
		$scope.month = $scope.date.toLocaleString("en-us", { month: "long" }) + ' ' + $scope.date.getFullYear();
		$scope.days = [];

		var firstDayDate = new Date($scope.date.getTime());
		firstDayDate.setDate(1);
		var firstDay = firstDayDate.getDay();
		var currDay = new Date();
		var today = new Date();

		var i = 0;
		while(i < firstDay) {
			currDay = new Date(firstDayDate.getTime());
			currDay.setTime(firstDayDate.getTime()-((firstDay - i)*24*3600000));
			$scope.days.push({
				date: currDay.toString(),
				dayNum: currDay.getDate(),
				dayName: days[currDay.getDay()],
				habits: [],
				past: true
			});
			i++;
		}

		currDay.setTime(firstDayDate.getTime());
		while(currDay.getMonth() == $scope.date.getMonth()) {
			if(currDay.getDate() == today.getDate() &&
				currDay.getMonth() == today.getMonth() &&
				currDay.getYear() == today.getYear()) {
				$scope.days.push({
					date: currDay.toString(),
					dayNum: currDay.getDate(),
					dayName: days[currDay.getDay()],
					habits: [],
					today: true
				});
			} else {
				$scope.days.push({
					date: currDay.toString(),
					dayNum: currDay.getDate(),
					dayName: days[currDay.getDay()],
					habits: []
				});
			}
			currDay.setTime(currDay.getTime()+(1*24*3600000));
		}

		while($scope.days.length % 7 != 0) {
			$scope.days.push({
				date: currDay.toString(),
				dayNum: currDay.getDate(),
				dayName: days[currDay.getDay()],
				habits: [],
				future: true
			});
			currDay.setTime(currDay.getTime()+(1*24*3600000));
		}

		if($scope.days.length / 7 > 5) {
			$scope.sixWeeks = true;
		} else {
			$scope.sixWeeks = false;
		}

		renderHabits();
	}

	function renderHabits() {
		$scope.habits.forEach(function(habit, i) {

			if(habit.repeat.option == 0) {

				var habitStartDate = new Date(habit.start_date);
				var timeIncrement = (((habit.repeat.days[0] - habitStartDate.getDay() + 7) % 7)*24*3600000);
				habitStartDate.setTime(habitStartDate.getTime() + timeIncrement - 60*60*1000*6);

				$scope.days.forEach(function(day, j) {
					if(habitStartDate > new Date(day.date)) return;
					if((new Date(habit.end_date)).setTime((new Date(habit.end_date)).getTime() + 60*60*1000*24) < new Date(day.date)) return;
					var thisDay = new Date(day.date);
					if((Math.round((thisDay - habitStartDate)/(1000*60*60*24)) % habit.repeat.interval) == 0) {
						$scope.days[j].habits.push({num: i, id: habit._id, completed: false});
					}
				});

			} else {

				$scope.days.forEach(function(day, j) {
					if(new Date(habit.start_date) > new Date(day.date)) return;
					if((new Date(habit.end_date)).setTime((new Date(habit.end_date)).getTime() + 60*60*1000*24) < new Date(day.date)) return;
					var thisDay = new Date(day.date);
					habit.repeat.days.forEach(function(day, k) {
						if(day == thisDay.getDay()) {
							$scope.days[j].habits.push({num: i, id: habit._id, completed: false});
						}
					});
				});

			}

			habit.complete_days.forEach(function(complete, l) {
				if(complete.date < $scope.days[0].date) return;
				if(complete.date > $scope.days[$scope.days.length - 1].date) return;

				// handle putting the checkmark thing
			});
		});
	}

	$scope.prevMonth = function() {
		$scope.date.setMonth($scope.date.getMonth() - 1);
		setMonth();
	}

	$scope.nextMonth = function() {
		$scope.date.setMonth($scope.date.getMonth() + 1);
		setMonth();
	}

	$scope.currMonth = function() {
		$scope.date = new Date();
		setMonth();
	}

}]);


hfControllers.controller('WeeklyController', ['$scope', 'Database', '$routeParams', function($scope, Database, $routeParams) {
	$scope.id = $routeParams.id;
	$scope.alert = '';

	function displayError(msg) {
		$scope.alert = msg;
	}

	// run on controller load
	(function init() {
		getDays();
	})();

	/**
	 * Returns 7 days of the week and the tasks for those days
	 */
	function getDays() {
		$scope.weekRangeString = "August 20 - 26"
		$scope.days = [
			{
				date: 'Aug 20',
				tasks: []
			},
			{
				date: 'Aug 21',
				tasks: []
			},
			{
				date: 'Aug 22',
				tasks: []
			},
			{
				date: 'Aug 23',
				tasks: []
			},
			{
				date: 'Aug 24',
				tasks: []
			},
			{
				date: 'Aug 25',
				tasks: []
			},
			{
				date: 'Aug 26',
				tasks: []
			}
		]
	}
}]);

hfControllers.controller('SettingsController', ['$scope', 'Database', function($scope, Database) {
  // do stuff
}]);


hfControllers.controller('LoginController', ['$scope', 'Database', function($scope, Database) {
  // do stuff
   $scope.addUser = function(user){
       alert("LOGGIN IN");
   }
}]);

hfControllers.controller('SignUpController', ['$scope', 'Database', function($scope, Database) {
  // do stuff
}]);

hfControllers.controller('StatisticsController', ['$scope', 'Database', '$routeParams', function($scope, Database, $routeParams) {
	$scope.id = $routeParams.id;
	$scope.alert = '';

	function displayError(msg) {
		$scope.alert = msg;
	}


	// run on controller load
	(function init() {
		getEarnedBadges();
		getNextBadge();
		getDays();
	})();

	/**
	 * Returns a list of badge objects earned by the user.
	 */
	function getEarnedBadges() {
		/* What the real code should look like when the route is created
		Database.getBadges(id)
			.success(function(data) {
				$scope.badges = data.data;
			})
			.error(function(data) {
				displayMessage(data.message);
			});

		*/
		$scope.badges = [
			{
				name: "Habit Rabbit",
				description: "Completed 10 habits."
			},
			{
				name: "Big Hands",
				description: "Completed more than 7 habits in a week."
			},
			{
				name: "Habit Bronze Badge",
				description: "Completed 20 habits."
			}
		];
	}

	/**
	 * Returns the next badge a person can earn.
	 */
	function getNextBadge() {
		/* What the real code should look like when the route is created
		Database.getNextBadge(id)
			.success(function(data) {
				$scope.nextBadgeName = data.data.name;
				$scope.nextBadgeCount = data.data.count;
			})
			.error(function(data) {
				displayMessage(data.message);
			});
		*/
		$scope.nextBadgeName = "Habit Silver Badge"
		$scope.nextBadgeCount = "5";
		$scope.nextBadgeDesc = "Complete 30 habits.";
	}

	/**
	 * Returns 7 days of the week and the tasks for those days
	 */
	function getDays() {
		$scope.weekRangeString = "August 20 - 26"
		$scope.days = [
			{
				date: 'Aug 20',
				tasks: []
			},
			{
				date: 'Aug 21',
				tasks: []
			},
			{
				date: 'Aug 22',
				tasks: []
			},
			{
				date: 'Aug 23',
				tasks: []
			},
			{
				date: 'Aug 24',
				tasks: []
			},
			{
				date: 'Aug 25',
				tasks: []
			},
			{
				date: 'Aug 26',
				tasks: []
			}
		]
	}


}]);


hfControllers.controller('LandingController', ['$scope', 'Database', function($scope, Database) {

}]);
