var { After, Status, setDefaultTimeout } = require('cucumber');
let scenarioTimeout = 200 * 1000;

setDefaultTimeout(scenarioTimeout);

After(function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        var attach = this.attach;
        return browser.takeScreenshot().then(function (png) {
            var decodedImage = new Buffer(png, "base64");
            return attach(decodedImage, "image/png");
        });
    }
});