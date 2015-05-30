'use strict';

describe('Users page', function () {
    var page;

    beforeEach(function () {
        browser.get('/');
        page = require('./main.po');
    });

    it('should add a new user', function () {
        expect(page.users.count()).toBe(3);
        page.addNewButton.click();

        page.username.sendKeys('Angular');
        page.age.sendKeys('20');
        page.city.sendKeys('Cochabamba');
        page.saveButton.click();
        expect(page.users.count()).toBe(4);
    });
});
