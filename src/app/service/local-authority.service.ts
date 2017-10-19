import {Injectable} from '@angular/core';
import {LocalAuthority} from '../model/local-authority';
import {RatingsSummary} from '../model/ratings-summary';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import {Region} from '../model/region';
import {environment} from '../../environments/environment';

@Injectable()
export class LocalAuthorityService {

  private regionsUrl = `${environment.apiUrl}/regions/`;
  private localAuthoritiesUrl = `/local-authorities/`;

  constructor(private http: HttpClient) {
  }

  getRegions(): Promise<Region[]> {
    return this.http.get(this.regionsUrl)
      .toPromise()
      .then(response => response as Region[])
      .catch(this.handleError);

  }

  getLocalAuthoritiesByRegion(regionName: string): Promise<LocalAuthority[]> {
    return this.http.get(`${this.regionsUrl}${regionName}${this.localAuthoritiesUrl}`)
      .toPromise()
      .then(response => response as LocalAuthority[])
      .catch(this.handleError);
  }

  getRatingsForAGivenLocalAuthority(regionName: string, localAuthorityCode: string): Promise<RatingsSummary[]> {
    return this.http.get(`${this.regionsUrl}${regionName}${this.localAuthoritiesUrl}${localAuthorityCode}`)
      .toPromise()
      .then(response => response as RatingsSummary[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
