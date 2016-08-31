angular.module('FactSocket', ['ngResource'])
	.factory('FactSocketService', ['$http', function($http) {
		
		var socket = null;
		// var socket = io.connect('http://107.155.87.74:3004', {
		// 	forceNew: true
		// });

		// return socket;
		return {
			connect: function() {
				socket = io.connect('http://104.237.2.155:3026', {
					forceNew: true
				});
			},
			on: function(eventName, callback) {
				// $scope.$apply(function() {
					socket.on(eventName, callback);
				// });
			},
			emit: function(eventName, data) {
				// $scope.$apply(function() {
					socket.emit(eventName, data);
				// });
			},
			disconnect: function() {
				// $scope.$apply(function() {
					socket.disconnect();
				// });
			}
		};
	}]);
