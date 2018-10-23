var homePage = function () {

    //elements
    // $ is shorthand notation for element(by.css(')) and $$ is shorthand notation for element.all(by.css(''))

    this.addNewComputer = $('.btn.success');
    this.searchComputerName = $('#searchbox');
    this.filter = $('#searchsubmit');
    this.message = $('.alert-message.warning');
    this.computerList = $('.well');
    this.computerName = $$('td').get(0);
    this.introduced = $$('td').get(1);
    this.discontinued = $$('td').get(2);
    this.company = $$('td').get(3);

    //function to click on Add a new computer button on the home page
    this.addComputer = function () {
        return this.addNewComputer.click();
    }

    //function to get the alert message details taht is displayed on adding , editing,deleting a computer   
    this.getAlertMessage = function () {
        return this.message.getText();
    }

    //function to search for any computer by entering the name
    this.searchComputer = function (name) {
        this.searchComputerName.sendKeys(name);
        return this.filter.click();
    }

    //function to open the details of any computer
    this.openComputerDetails = function (name) {
        element(by.cssContainingText('a', name)).click();
    }

    //function to check if computer has been deleted by searching a deleted computer
    this.isComputerDeleted = function (name) {
        this.searchComputer(name);
        return this.computerList.getText();
    }

    //function to get the details in the list displayed after searching a computer
    this.getDetails = function (elem) {
        return elem.getText();
    }
}

module.exports = new homePage();

