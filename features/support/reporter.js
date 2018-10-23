var fs = require("fs");
var mkdirp = require("mkdirp");
var path = require("path");
var reporter = require("cucumber-html-reporter");
var htmlReports = process.cwd() + "/reports/html";
var targetJson = process.cwd() + "/reports/json/e2eReport.json";

var cucumberReporteroptions = {
    theme: "bootstrap",
    jsonFile: targetJson,
    output: htmlReports + "/e2eReport.html",
    reportSuiteAsScenarios: true
};

var Reporter = function () {

    this.createDirectory = function (dirName) {
        if (!fs.existsSync(dirName)) {
            mkdirp.sync(dirName);
        }
    }

    this.createHTMLReport = function () {
        try {
            reporter.generate(cucumberReporteroptions);

        } catch (err) {
            if (err) {
                console.log("Failed to save cucumber test results to json file.");
                console.log(err);
            }
        }
    }

}

module.exports = new Reporter();