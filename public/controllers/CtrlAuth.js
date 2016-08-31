App.controller('CtrlAuth', ['$state', '$rootScope', '$localStorage', function($state, $rootScope, $localStorage) {
	
	if($localStorage.current && $state.current.name != 'auth.signout') {
		$state.transitionTo('dashboard.index');
	} else if($state.current.name == 'auth.signout') {
		$rootScope.notifications = [];
		$localStorage.current = undefined;
		$state.transitionTo('auth.signin');
	}
	
	return false;
}]);