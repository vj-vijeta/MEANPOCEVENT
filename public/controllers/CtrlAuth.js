App.controller('CtrlAuth', ['$state', '$localStorage', function($state, $localStorage) {
	
	if($localStorage.current && $state.current.name != 'auth.signout') {
		$state.transitionTo('dashboard.index');
	} else if($state.current.name == 'auth.signout') {
		$localStorage.current = undefined;
		$state.transitionTo('auth.signin');
	}
	
	return false;
}]);