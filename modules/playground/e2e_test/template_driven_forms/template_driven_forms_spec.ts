import {verifyNoBrowserErrors} from '@angular/platform-browser/testing_e2e';

describe('Template-Driven Forms', function() {

  afterEach(verifyNoBrowserErrors);

  var URL = 'all/playground/src/template_driven_forms/index.html';

  it('should display errors', function() {
    browser.get(URL);

    var form = element.all(by.css('form')).first();
    var input = element.all(by.css('#creditCard')).first();
    var firstName = element.all(by.css('#firstName')).first();

    input.sendKeys('invalid');
    firstName.click();

    expect(form.getInnerHtml()).toContain('is invalid credit card number');
  });

  it('should display async errors', function() {
    browser.get(URL);

    var form = element.all(by.css('form')).first();
    var input = element.all(by.css('#firstName')).first();
    var creditCard = element.all(by.css('#creditCard')).first();

    input.sendKeys('nobody');
    creditCard.click();

    expect(form.getInnerHtml()).toContain('User not found');
  });
});
