App.controller('CtrlIndex', ['$scope', '$rootScope', 'FactEventService', 'FactVisitService', 'FactCustomerService', function ($scope, $rootScope, FactEventService, FactVisitService, FactCustomerService) {

	console.log($scope)

	$scope.counts = {
		customers: {
			total: 0,
			active: 0,
			inActive: 0,
			activePercent: 0
		},
		visits: {
			total: 0,
			completedPercent: 0
		},
		events: {
			total: 0,
			completedPercent: 0
		}
	};

	$scope.totalEvents = 0;
	$scope.totalVisits = 0;
	$scope.events = [];
	$scope.visits = [];
	$scope.eventsPerPage = 5;
	$scope.visitsPerPage = 5;
	$scope.currentPageEvent = 1;
	$scope.currentPageVisit = 1;
	$scope.status = [];

	var getAllCounts = function() {
		FactEventService.getEventsCount({}, function (data) {

			if(data.success) {
				$scope.counts.events.total = data.count;

				angular.forEach(data.result, function(res) {
					$scope.counts.events[res.group.toLowerCase()] = res.reduction;
				});

				if($scope.counts.events.total > 0) {
					$scope.counts.events.completed = $scope.counts.events.completed || 0;
					$scope.counts.events.completedPercent = (($scope.counts.events.completed * 100)/$scope.counts.events.total).toFixed(2);
				} else {
					$scope.counts.events.completedPercent = 0;
				}
			}
		});

		FactVisitService.getVisitsCount({}, function (data) {

			if(data.success) {
				$scope.counts.visits.total = data.count;

				angular.forEach(data.result, function(res) {
					$scope.counts.visits[res.group.toLowerCase()] = res.reduction;
				});

				if($scope.counts.visits.total > 0) {
					$scope.counts.visits.completed = $scope.counts.visits.completed || 0;
					$scope.counts.visits.completedPercent = (($scope.counts.visits.completed * 100)/$scope.counts.visits.total).toFixed(2);
				} else {
					$scope.counts.visits.completedPercent = 0;
				}
			}
		});

		FactCustomerService.getCustomersCount({}, function (data) {

			if(data.success) {

				$scope.counts.customers.active = data.result[0].group ? data.result[0].reduction : data.result[1].reduction;
				$scope.counts.customers.inActive = data.result[0].group ? data.result[0].reduction : data.result[1].reduction;

				$scope.counts.customers.total = $scope.counts.customers.active + $scope.counts.customers.inActive;

				if($scope.counts.customers.total > 0) {
					$scope.counts.customers.activePercent = (($scope.counts.customers.active * 100)/$scope.counts.customers.total).toFixed(2);
					$scope.counts.customers.inActivePercent = (($scope.counts.customers.inActive * 100)/$scope.counts.customers.total).toFixed(2);
				} else {
					$scope.counts.customers.activePercent = 0;
					$scope.counts.customers.inActivePercent = 0;
				}
			}
		});
	};

	getAllCounts();

	var initEventsData = function () {

		var skip = ($scope.currentPageEvent - 1) * $scope.eventsPerPage;
		var limit = parseInt(skip) + parseInt($scope.eventsPerPage);

		var request = {
			skip: skip,
			limit: limit
		};

		$scope.events = [];

		FactEventService.getAllUpcoming(request, function (data) {

			if (data.success) {
				$scope.events = data.result;
				$scope.totalEvents = data.count;
			}

		});
	};

	var initVisitsData = function () {

		var skip = ($scope.currentPageVisit - 1) * $scope.visitsPerPage;
		var limit = parseInt(skip) + parseInt($scope.visitsPerPage);

		var request = {
			skip: skip,
			limit: limit
		};

		$scope.visits = [];

		FactVisitService.getAllUpcoming(request, function (data) {

			if (data.success) {
				$scope.visits = data.result;
				$scope.totalVisits = data.count;
			}

		});
	};

	$scope.$watch('currentPageEvent', function (a) {
		initEventsData();
	});

	$scope.$watch('currentPageVist', function (a) {
		initVisitsData();
	});

	$scope.pageChangedEvent = function () {
		$scope.currentPageEvent = ($scope.currentPageEvent > Math.ceil($scope.totalEvents / $scope.eventsPerPage)) ? Math.ceil($scope.totalEvents / $scope.eventsPerPage) : $scope.currentPageEvent;
	};

	$scope.pageChangedVisit = function () {
		$scope.currentPageVisit = ($scope.currentPageVisit > Math.ceil($scope.totalVisits / $scope.visitsPerPage)) ? Math.ceil($scope.totalVisits / $scope.visitsPerPage) : $scope.currentPageVisit;
	};
}]);