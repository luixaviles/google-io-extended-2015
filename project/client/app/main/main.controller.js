'use strict';

angular.module('projectApp')
    .controller('MainController', function ($scope, dialogs) {
        $scope.users = [
            {name: "Juan", age: 21, city: "Cochabamba"},
            {name: "Rosa", age: 25, city: "La Paz"},
            {name: "Pedro", age: 24, city: "Santa Cruz"}
        ];

        $scope.addNew = function () {
            var dlg = dialogs.create('app/add-new/add-new.html', 'AddNewController', {}, 'lg');
            dlg.result.then(function (user) {
                $scope.users.push(user);
            }, function () {

            });
        };
    });
