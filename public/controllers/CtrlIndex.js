App.controller('CtrlIndex', ['$scope', '$rootScope', function ($scope, $rootScope) {

    $scope.line = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        series: ["Series A", "Series B"],
        data: [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ],
        onClick: function(points, evt) {
            console.log(points, evt)
        }
    };
    
    $scope.bar = {
        labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012"],
        series: ["Series A", "Series B"],
        data: [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ]
    };
    
    $scope.donut = {
        labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
        data: [300, 500, 100]
    };
    
    $scope.radar = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        data: [
            [65, 59, 90, 81, 56, 55, 40],
            [28, 48, 40, 19, 96, 27, 100]
        ]
    };

    $scope.init = function () {
        // check if there is query in url
        // and fire search in case its value is not empty
        var c = new components();
        c.load("chartapp");
    };    
}]);