var computerDetails = require('../pages/computerDetails.js'),
    homePage = require('../pages/homePage.js');

Given('I create computer with details - {string}, {string},{string} and {string}', function (name, introDate, discontinuedate, companyName) {
    homePage.addComputer();
    computerDetails.enterDetails(computerDetails.computername, name);
    computerDetails.enterDetails(computerDetails.introducedDate, introDate);
    computerDetails.enterDetails(computerDetails.discontinuedDate, discontinuedate);
    computerDetails.selectCompany(companyName);
    return computerDetails.submitDetails(computerDetails.createNew);
});

When(/^I add computer with name as - "([^"]*)"$/, function (name) {
    return computerDetails.enterDetails(computerDetails.computername, name);
});

When(/^Introducing date as - "([^"]*)"$/, function (introDate) {
    return computerDetails.enterDetails(computerDetails.introducedDate, introDate);
});

When(/^Discontinued date as - "([^"]*)"$/, function (discontinuedate) {
    return computerDetails.enterDetails(computerDetails.discontinuedDate, discontinuedate);
});

When(/^company as - "([^"]*)"$/, function (companyName) {
    return computerDetails.selectCompany(companyName);
});

When(/^I created this new computer$/, function () {
    return computerDetails.submitDetails(computerDetails.createNew);
});

When(/^I edit name as - "([^"]*)"$/, function (detail) {
    return computerDetails.editDetails(computerDetails.computername, detail)
});

When(/^I edit Introducing date as - "([^"]*)"$/, function (detail) {
    return computerDetails.editDetails(computerDetails.introducedDate, detail)
});

When(/^I edit Discontinued date as - "([^"]*)"$/, function (detail) {
    return computerDetails.editDetails(computerDetails.discontinuedDate, detail)
});

When(/^I saved this existing computer$/, function () {
    return computerDetails.submitDetails(computerDetails.saveComputer);
});

When(/^I delete the computer$/, function () {
    return computerDetails.submitDetails(computerDetails.deleteComputer)
});

