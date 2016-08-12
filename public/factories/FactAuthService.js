angular.module('FactAuth', ['ngResource'])
	.factory('FactAuthService', ['$http', '$resource', function($http, $resource) {
		
		// var url = '/dashboard';
		var rootURL = '/ajax/auth';

		return $resource('', {
			id: '@id',
			token: '@token'
		}, {
			signin: {
				url: rootURL + '/login',
				method: 'POST',
				isArray: false
			},
			forgotPassword: {
				url: rootURL + '/forgot',
				method: 'POST',
				isArray: false
			},
			resetPassword: {
				url: rootURL + '/reset/:token',
				method: 'POST',
				isArray: false
			},
			getCurrentUser: {
				url: rootURL + '/currentuser',
				method: 'GET',
				isArray: false
			}
		});
	}]);
