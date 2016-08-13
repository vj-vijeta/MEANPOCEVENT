angular.module('FactInterceptors', [])
	.factory('FactResourceInterceptor',['$q','$injector', '$rootScope',function($q, $injector, $rootScope){
		return {
			response: function(response) {
				if (response.status === 401) {
					// $location.url($meanConfig.loginPage);
					return $q.reject(response);
				}
				return response || $q.when(response);
			},
			responseError: function(rejection) {

				if (rejection.status === 401) {
					// $location.url($meanConfig.loginPage);
					return $q.reject(rejection);
				}
				return $q.reject(rejection);
			}

		};
	}])
	.config(['$httpProvider', function($httpProvider) {
		$httpProvider.interceptors.push('FactResourceInterceptor');
	}]);