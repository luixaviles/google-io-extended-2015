'use strict';

describe('Controller: AddNewCtrl', function () {

  // load the controller's module
  beforeEach(module('projectApp'));

  var AddNewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddNewCtrl = $controller('AddNewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
