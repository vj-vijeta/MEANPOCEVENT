angular.module('FactEvents', ['ngResource'])
	.factory('FactEventsService', ['$http', '$resource', function($http, $resource) {
		
		// var url = '/dashboard';
		var rootURL = '/api/event';
		var pgURL = '/pg/api/event';

		return $resource('', {
			id: '@id'
		}, {
            single: {
				url: pgURL + '/single/:id',
				method: 'GET',
				isArray: false
			},
			list: {
				url: pgURL + '/listpublic',
				method: 'POST',
				isArray: false
			},
			purchase: {
				url: rootURL + '/purchase',
				method: 'POST',
				isArray: false
			}
		});
	}]);
