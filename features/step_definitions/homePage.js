var homePage = require('../pages/homePage.js'),
    computerDetails = require('../pages/computerDetails.js');
    var moment = require('moment');

Given(/^I open Computer database application as an admin$/, function () {
    return browser.get('/');
});

When(/^I add new computer$/, function () {
    return homePage.addComputer();
});

Then(/^computer with name - "([^"]*)" should have been added$/, function (name) {
    return expect(homePage.getAlertMessage()).to.eventually.contain(name);
});

When(/^I search existing computer - "([^"]*)"$/, function (name) {
    return homePage.searchComputer(name);
});

When(/^I open the computer details for computer - "([^"]*)"$/, function (name) {
    return homePage.openComputerDetails(name);
});

Then(/^computer should be saved with new name - "([^"]*)"$/, function (name) {
    return expect(homePage.getAlertMessage()).to.eventually.contain(name);
});

Then('computer should be saved with new details - {string}, {string} and {string}', function (name, introDate, discontinuedate) {
    expect(homePage.getAlertMessage()).to.eventually.contain(name);
    homePage.searchComputer(name);
    expect(homePage.getDetails(homePage.computerName)).to.eventually.equal(name);
    expect(homePage.getDetails(homePage.introduced)).to.eventually.equal(moment(introDate).format('DD MMM YYYY'));
    return expect(homePage.getDetails(homePage.discontinued)).to.eventually.equal(moment(discontinuedate).format('DD MMM YYYY'));
    });

Then(/^computer - "([^"]*)" should be deleted$/, function (name) {
    expect(homePage.getAlertMessage()).to.eventually.equal('Done! Computer has been deleted');
    browser.sleep(1000);
    return expect(homePage.isComputerDeleted(name)).to.eventually.equal('Nothing to display');
});

Then(/^Computer name should be - "([^"]*)"$/, function (detail) {
    return expect(homePage.getDetails(homePage.computerName)).to.eventually.equal(detail);
});

Then(/^Introducing date should be - "([^"]*)"$/, function (detail) {
    return expect(homePage.getDetails(homePage.introduced)).to.eventually.equal(moment(detail).format('DD MMM YYYY'));
});

Then(/^Discontinued date should be - "([^"]*)"$/, function (detail) {
    return expect(homePage.getDetails(homePage.discontinued)).to.eventually.equal(moment(detail).format('DD MMM YYYY'));
});

Then(/^Company name should be - "([^"]*)"$/, function (detail) {
    return expect(homePage.getDetails(homePage.company)).to.eventually.equal(detail);
});

