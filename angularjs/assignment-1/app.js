(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {

        $scope.food_list = '';
        $scope.message = '';

        $scope.displayMessage = function () {

            var totalListElements = count_list($scope.food_list);

            if (totalListElements === 0) {
                $scope.message = 'Please enter data first';
            } else if (totalListElements <= 3) {
                $scope.message = 'Enjoy!';
            } else {
                $scope.message = 'Too much';
            }
        };

        function count_list(string) {
            // ---- NOT consider and empty item ----
            var totalListElements = 0;
            var listElements = string.split(',');

            if ((listElements.length === 1) && (listElements[0] === "")) {
                totalListElements = 0;
            } else {
                totalListElements = listElements.length;
            }
            return totalListElements;
        }

    }
})();
