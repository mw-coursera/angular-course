(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckCtrl', LunchCheckCtrl);

    LunchCheckCtrl.$inject = ['$scope'];
    function LunchCheckCtrl($scope) {

        $scope.checkFood = function() {
            if ($scope.food === undefined || $scope.food === "") {
                $scope.message = "Please enter data first";
            } else {
                var foods = $scope.food.split(",");
                $scope.message = foods.length > 3 ? "Too Much" : "Enjoy";
            }
        };
    }
})();
