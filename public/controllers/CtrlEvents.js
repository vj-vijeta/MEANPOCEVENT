App.controller('CtrlEvents', ['$scope', '$rootScope', '$localStorage', 'FactEventsService', function($scope, $rootScope, $localStorage, FactEventsService) {

    $scope.totalItems = 0;
    $scope.fromItems = 0;
    $scope.toItems = 0;
    $scope.items = [];
    $scope.itemsPerPage = 10;
    $scope.currentPage = 1;
    $scope.fetchingData = false;

    var initItems = function() {

        var skip = ($scope.currentPage - 1) * $scope.itemsPerPage;
        var limit = parseInt($scope.itemsPerPage);

        var request = {
            current: angular.copy($localStorage.current),
            skip: skip,
            limit: limit
        };

        $scope.fetchingData = true;

        FactEventsService.list(request, function(data) {
            
            $scope.fetchingData = false;

            $scope.items = data.list;
            $scope.totalItems = data.count;
            
            if(data.list.length > 0) $scope.fromItems = skip + 1;
            
            $scope.toItems = skip + data.list.length;

        }, function(errList) {

            $scope.fetchingData = false;
            $scope.items = [];

        });
    };

    $scope.$watchGroup(['currentPage'], function() {
        if($scope.fetchingData == false) {
            initItems();
        }
    });
}]);