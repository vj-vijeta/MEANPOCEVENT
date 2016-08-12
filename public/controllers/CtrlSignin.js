/**
 * This is signin controller for ORA admin, here admin will
 * provide email-password pair and Process will be done here.
 * 
 * @param  {[type]} $scope           angular's scope variable which properties will be used in views
 * @param  {[type]} $state           angular's state variable used to change state
 * @param  {Object} FactAuthService) authentication service used for interaction with server
 * @return {[type]}                  null
 */

App.controller('CtrlSignin', ['$scope', '$rootScope', '$state', '$mdToast', '$localStorage', 'cfpLoadingBar', 'FactAuthService', 'FactMasterService', function($scope, $rootScope, $state, $mdToast, $localStorage, cfpLoadingBar, FactAuthService, FactMasterService) {
	console.log($scope)
	/**
	 * Form data like, email, password
	 * @type {Object}
	 */
	$scope.formData = {
		remember: false
	};

	/**
	 * Server error message
	 * @type {[type]}
	 */
	$scope.errorMessage = null;

	/**
	 * Signin process will begin from here
	 * @return {[type]} [description]
	 */
	$scope.doSignin = function() {

		$scope.errorMessage = null;
		
		if(this.signinForm.$valid) {
			
			// Start Loading bar
			cfpLoadingBar.start();
			
			FactAuthService.signin($scope.formData, function(data) {
				if(data.success === true) {
					localStorage.signinToken = data.result.token;
					var userDetails = angular.copy(data.result);

					cfpLoadingBar.start();

					FactMasterService.getAllMastersWithNoCat({}, function(data) {
						console.log($localStorage, data);

						if(data.success == true) {

							$localStorage.masters = {};
							
							angular.forEach(data.result, function(master) {

								angular.forEach(master, function(val, key){
									$localStorage.masters[key] = val;
								})
							});

							$state.transitionTo('dashboard.index');
						} else {
							$state.transitionTo('dashboard.index');
						}
					});
					// $state.transitionTo('dashboard.index');
				} else {
					
					$mdToast.show(
						$mdToast.simple()
							.textContent(data.result)
							.position('top right')
							.hideDelay(3000)
					);
					// $scope.errorMessage = data.message || 'Invalid Login details';
				}
			}, function(error) {
				console.log(error)
				$mdToast.show(
					$mdToast.simple()
						.textContent(error.data.result)
						.position('top right')
						.hideDelay(3000)
				);
			});
		}

		return false;
	};
}]);