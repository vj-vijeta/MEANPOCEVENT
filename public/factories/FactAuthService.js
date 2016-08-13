angular.module('FactAuth', ['ngResource'])
	.factory('FactAuthService', ['$http', '$resource', function($http, $resource) {
		
		// var url = '/dashboard';
		var rootURL = '/api/user';

		return $resource('', {
			id: '@id'
		}, {
			signin: {
				url: rootURL + '/login',
				method: 'POST'
			}
		});
	}]);
