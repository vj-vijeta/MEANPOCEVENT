App.controller('CtrlSingleEvent', ['$scope', '$stateParams', '$localStorage', 'FactEventsService', 'FactSocketService', function($scope, $stateParams, $localStorage, FactEventsService, FactSocketService) {

    console.log(FactSocketService)

    $scope.event = {};
    $scope.purchased = false;
    $scope.purchaseInProgress = false;
    $scope.errorMessage = null;
    
	if($stateParams.id) {
        FactEventsService.single({
            id: $stateParams.id
        }, function(data) {
            $scope.event = data.event;
        }, function(errList) {
            $state.transitionTo('dashboard.events');
        });
    } else {
        $state.transitionTo('dashboard.events');
    }

    $scope.confirmPurchase = function() {

        $scope.errorMessage = null;
        $scope.purchaseInProgress = true;

        var request = {
            current: $localStorage.current,
            id: $stateParams.id
        };

        FactEventsService.purchase(request, function(data) {
            $scope.purchaseInProgress = false;
            $scope.purchased = true;
        }, function(err) {
            $scope.errorMessage = err.data.msg;
        });
    };

    // FactSocketService.connect();

    // FactSocketService.on('new message', function(data) {
    //     console.log(data);
    // });

}]);