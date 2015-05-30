'use strict';

var MainPage = function () {
    this.users = element.all(by.repeater('user in users'));
    this.addNewButton = element(by.css('[ng-click="addNew()"]'));

    this.username = element(by.model('user.name'));
    this.age = element(by.model('user.age'));
    this.city = element(by.model('user.city'));
    this.saveButton = element(by.css('[ng-click="save()"]'));
};

module.exports = new MainPage();

