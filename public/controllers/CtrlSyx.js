App.controller('CtrlSyx', ['$scope', '$localStorage', '$rootScope', 'FactSocketService', function ($scope, $localStorage, $rootScope, FactSocketService) {

    console.log('Main controller');

    // FactSocketService.connect();

    window.onbeforeunload = function() {
        // FactSocketService.disconnect();
    };
}]);