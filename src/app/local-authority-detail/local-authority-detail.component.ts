import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';

import {LocalAuthorityService} from '../service/local-authority.service';
import {RatingsSummary} from '../model/ratings-summary';

@Component({
  selector: 'local-authority-detail',
  templateUrl: './local-authority-detail.component.html',
  styleUrls: ['./local-authority-detail.component.css']
})

export class LocalAuthorityDetailComponent implements OnInit {

  ratingsSummaries: RatingsSummary[];

  constructor(private localAuthorityService: LocalAuthorityService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.localAuthorityService.getRatingsForAGivenLocalAuthority(params.get('regionName'), params.get('localAuthorityCode')))
      .subscribe(ratingsSummaries => this.ratingsSummaries = ratingsSummaries.ratingsSummaries);
  }

  goBack(): void {
    this.location.back();
  }
}
