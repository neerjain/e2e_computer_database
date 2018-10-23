var cucumber = require('cucumber'),
  chai = require("chai"),
  reporter = require('./features/support/reporter');
jsonReports = process.cwd() + "/reports/json";
chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

exports.config = {
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,
  directConnect: 'true',
  baseUrl: 'http://computer-database.herokuapp.com/computers',
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to this directory.
  specs: [
    './features/*.feature'
  ],


  cucumberOpts: {
    require: ['./features/step_definitions/*.js', './features/support/*.js'],
    tags: [],
    strict: true,
    format: ['node_modules/cucumber-pretty', 'json:./reports/json/e2eReport.json'],
    dryRun: false,
    compiler: []
  },

  onPrepare: function () {
    browser.manage().window().maximize();
    browser.ignoreSynchronization = true;
    global.Given = cucumber.Given;
    global.When = cucumber.When;
    global.Then = cucumber.Then;
    global.expect = chai.expect;
    reporter.createDirectory(jsonReports);
  },

  onComplete: function () {
    reporter.createHTMLReport();
  }
};
