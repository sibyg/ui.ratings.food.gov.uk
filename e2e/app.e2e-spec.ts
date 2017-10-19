import {DashboardPage} from './dashboard.po';
import {RegionPage} from './region.po';
import {RatingsPage} from './ratings.po';

describe('ui.ratings.food.gov.uk App', () => {
  let page: DashboardPage;
  let regionPage: RegionPage;
  let ratingsPage: RatingsPage;
  let region: string;
  let localAuthority: string;

  beforeEach(() => {
    page = new DashboardPage();
  });

  it('dashboard should display the title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Food Ratings - UK');
  });

  it('dashboard should display 4 regions', () => {
    page.navigateTo();
    expect(page.getRegions()).toEqual(['EAST', 'NORTH', 'SOUTH', 'WEST']);
  });

  it('dashboard should navigate to regions', () => {
    region = 'NORTH';
    regionPage = page.navigateToARegion(region);
    expect(page.getSubParagraphText()).toEqual('Local Authorities');
  });

  it('region should display local authorities', () => {
    expect(regionPage.hasLocalAuthorities()).toEqual(true);
  });

  it('region should allow to select local authority', () => {
    localAuthority = 'N-LA-A';
    regionPage.selectLocalAuthority(localAuthority);
    expect(regionPage.hasBriefSummaryOfLocalAuthority()).toEqual(true);
  });

  it('local authority to should display brief ratings summary', () => {
    regionPage.gotoRatingsSummary();
    ratingsPage = new RatingsPage();
    expect(ratingsPage.getSubParagraphText()).toEqual('Ratings Summary');
    expect(ratingsPage.hasRatingsSummary()).toEqual(true);
  });

  it('should navigate back from brief ratings summary', () => {
    ratingsPage.backToRegion();
    expect(regionPage.hasLocalAuthorities()).toEqual(true);
  });

  it('region should allow to go back to dashboard', () => {
    regionPage.backToDashboard();
    expect(page.getRegions()).toEqual(['EAST', 'NORTH', 'SOUTH', 'WEST']);
  });
});
