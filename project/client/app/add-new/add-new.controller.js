'use strict';

angular.module('projectApp')
    .controller('AddNewController', function ($scope, $modalInstance) {
        $scope.save = function () {
            $modalInstance.close($scope.user);
        };
        $scope.cancel = function() {
            $modalInstance.dismiss();
        };
    });
