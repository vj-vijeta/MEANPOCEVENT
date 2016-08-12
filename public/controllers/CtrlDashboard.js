App.controller('CtrlDashboard', ['$scope', '$rootScope', 'FactUserService', function($scope, $rootScope, FactUserService) {

	console.log('Dashboard');
	
	// if(!$rootScope.userData) {

		FactUserService.getCurrentUser({}, function(data) {
			
			if(data.success == true) {

				$rootScope.userData = data.result;
			}
		});
	// }	
}]);