App.controller('CtrlSyx', ['$scope', '$localStorage', '$rootScope', 'FactSocketService', function ($scope, $localStorage, $rootScope, FactSocketService) {

    console.log('Main controller');
    
    $rootScope.notifications = $rootScope.notifications || [];

    FactSocketService.connect();

    FactSocketService.on('event', function(data) {
        console.log(data);
        $rootScope.$apply(function() {
            $rootScope.notifications.push(data.value.value);
        });
    });

    window.onbeforeunload = function() {
        FactSocketService.disconnect();
    };
}]);