angular.module('FactAuth', ['ngResource'])
	.factory('FactAuthService', ['$http', '$resource', function($http, $resource) {
		
		// var url = '/dashboard';
		var rootURL = '/api/user';
		var twURL = '/api/twitter'

		return $resource('', {
			id: '@id'
		}, {
			signin: {
				url: rootURL + '/login',
				method: 'POST',
				isArray: false
			},			
			twitterSignIn: {
				url: twURL + '/login',
				method: 'GET',
				isArray: false
			}
		});
	}]);
