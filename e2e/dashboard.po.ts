import {browser, by, element} from 'protractor';
import {RegionPage} from './region.po';

export class DashboardPage {

  navigateTo() {
    return browser.get('/regions');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getSubParagraphText() {
    return element(by.css('app-root h2')).getText();
  }

  getRegions() {
    return element.all(by.css('.module.region>h4')).getText();
  }

  navigateToARegion(region: string) {
    const regionPage = new RegionPage();
    regionPage.navigateTo(region);
    return regionPage;
  }
}
