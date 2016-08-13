angular.module('FactInterceptors', [])
	.factory('FactResourceInterceptor',['$q','$injector', '$rootScope',function($q, $injector, $rootScope){
		return {
			request: function(request) {

				if(request.url.indexOf('/ajax/') > -1) {
					// request.headers['x-access-token'] = localStorage.signinToken;
				}
				return request;
			},
            responseError: function(err) {

                // console.log(err)

            	// if(err.status == 403) {
            	// 	$injector.get('$state').transitionTo('auth.signout');
                //     return $q.reject(err);
            	// } else if(err.status == 500) {
                //     if(typeof err.data != 'object') {
                //         err.data = {
                //             success: false,
                //             result: 'Internal Server Error'
                //         }
                //     }
                // }

                return err;
            }
		};
	}])
	.config(['$httpProvider', function($httpProvider) {
		$httpProvider.interceptors.push('FactResourceInterceptor');
	}]);