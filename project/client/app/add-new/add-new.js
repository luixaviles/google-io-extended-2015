'use strict';

angular.module('projectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('add-new', {
        url: '/add-new',
        templateUrl: 'app/add-new/add-new.html',
        controller: 'AddNewCtrl'
      });
  });