var computerDetails = function () {

    this.computername = $('#name');
    this.introducedDate = $('#introduced');
    this.discontinuedDate = $('#discontinued');
    this.companyName = $('#company');
    this.createNew = $('.btn.primary');
    this.deleteComputer = $('.btn.danger');
    this.saveComputer = $('.btn.primary');

    //function to enter details on Add new computer screen
    this.enterDetails = function (elem, detail) {
        return elem.sendKeys(detail);
    }

    //function to select company from the dropdown
    this.selectCompany = function (company) {
        var companyNameDropdown = this.companyName;
        return companyNameDropdown.element(by.cssContainingText('option', company)).click();
    }

    //function to edit the details of existing computer
    this.editDetails = function (elem, detail) {
        elem.clear();
        return elem.sendKeys(detail);
    }

    //function to add/edit/delete a computer
    this.submitDetails = function (elem) {
        return elem.click();
    }

}

module.exports = new computerDetails();