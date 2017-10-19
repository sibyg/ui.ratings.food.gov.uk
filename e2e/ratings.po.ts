import { browser, by, element } from 'protractor';

export class RatingsPage {

  navigateTo(region: string, code: string) {
    return browser.get(`regions/${region}/local-authorities${code}`);
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getSubParagraphText() {
    return element(by.css('app-root h2')).getText();
  }

  backToRegion() {
    return element(by.css('.back-to-region')).click();
  }

  hasBriefSummaryOfLocalAuthority() {
    return element(by.css('.brief-detail-local-authority')).isDisplayed();
  }

  hasRatingsSummary() {
    return element(by.css('.ratings-summary')).isDisplayed();
  }
}
