import { browser, by, element } from 'protractor';

export class RegionPage {
  navigateTo(region: string) {
    return browser.get(`regions/${region}/local-authorities`);
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getSubParagraphText() {
    return element(by.css('app-root h2')).getText();
  }

  hasLocalAuthorities() {
    return element(by.css('.local-authorities')).isPresent();
  }

  back() {
    return browser.navigate().back();
  }

  selectLocalAuthority(localAuthorityCode: string) {
    return element.all(by.css('.local-authorities>li')).click();
  }

  gotoRatingsSummary() {
    return element(by.css('.goto-ratings-summary')).click();
  }

  backToDashboard() {
    return element(by.css('.back-to-dashboard')).click();
  }

  hasBriefSummaryOfLocalAuthority() {
    return element(by.css('.brief-detail-local-authority')).isDisplayed();
  }
}
