App.controller('CtrlSignout', ['$scope', '$state', function($scope, $state) {
	
	delete localStorage.signinToken;
	delete localStorage.masterData;
	$state.transitionTo('auth.signin');
}]);