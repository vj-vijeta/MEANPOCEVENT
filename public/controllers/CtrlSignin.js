/**
 * This is signin controller for ORA admin, here admin will
 * provide email-password pair and Process will be done here.
 * 
 * @param  {[type]} $scope           angular's scope variable which properties will be used in views
 * @param  {[type]} $state           angular's state variable used to change state
 * @param  {Object} FactAuthService) authentication service used for interaction with server
 * @return {[type]}                  null
 */

App.controller('CtrlSignin', ['$scope', '$rootScope', '$state', '$localStorage', 'cfpLoadingBar', 'FactAuthService', function($scope, $rootScope, $state, $localStorage, cfpLoadingBar, FactAuthService) {
	/**
	 * Form data like, email, password
	 * @type {Object}
	 */
	$scope.formData = {};

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
				$localStorage.current = data.user;
			}, function(error) {
				$scope.errorMessage = error.data.msg || error.data[0].msg;

				// $localStorage.current = {
				// 	_id: 4,
				// 	name: 'Jitesh Tukadiya',
				// 	type: 'user',
				// 	email: 'jitesh@tukadiya.com',
				// 	admin: {
				// 		_id: 3,
				// 		name: 'Jitesh Rklick',
				// 		email: 'jitesh@rklick.com',
				// 		type: 'admin'
				// 	},
				// 	tenant: {
				// 		_id: 2,
				// 		name: 'Rklick Tenant',
				// 		email: 'tenant@rklick.com',
				// 		type: 'tenant'
				// 	}
				// }
			});
		}

		return false;
	};
}]);