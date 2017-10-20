import {Injectable} from '@angular/core';
import {LocalAuthorities, LocalAuthority} from '../model/local-authority';
import {RatingsSummary, RatingsSummaries} from '../model/ratings-summary';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import {Region, Regions} from '../model/region';
import {environment} from '../../environments/environment';

@Injectable()
export class LocalAuthorityService {

  private regionsUrl = `${environment.apiUrl}/regions/`;
  private localAuthoritiesUrl = `/local-authorities/`;

  constructor(private http: HttpClient) {
  }

  getRegions(): Promise<Regions> {
    return this.http.get(this.regionsUrl)
      .toPromise()
      .then(response => response as Regions)
      .catch(this.handleError);

  }

  getLocalAuthoritiesByRegion(regionName: string): Promise<LocalAuthorities> {
    return this.http.get(`${this.regionsUrl}${regionName}${this.localAuthoritiesUrl}`)
      .toPromise()
      .then(response => response as LocalAuthorities)
      .catch(this.handleError);
  }

  getRatingsForAGivenLocalAuthority(regionName: string, localAuthorityCode: string): Promise<RatingsSummaries> {
    return this.http.get(`${this.regionsUrl}${regionName}${this.localAuthoritiesUrl}${localAuthorityCode}`)
      .toPromise()
      .then(response => response as RatingsSummaries)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
