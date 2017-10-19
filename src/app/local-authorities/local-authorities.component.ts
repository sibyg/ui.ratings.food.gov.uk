import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Location} from '@angular/common';

import {LocalAuthority} from '../model/local-authority';
import {LocalAuthorityService} from '../service/local-authority.service';

@Component({
  selector: 'local-authorities',
  templateUrl: './local-authorities.component.html',
  styleUrls: ['./local-authorities.component.css']
})

export class LocalAuthoritiesComponent implements OnInit {
  selectedLocalAuthority: LocalAuthority;
  localAuthorities: LocalAuthority[];

  constructor(private location: Location, private route: ActivatedRoute,
              private router: Router, private localAuthorityService: LocalAuthorityService) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.localAuthorityService.getLocalAuthoritiesByRegion(params.get('regionName')))
      .subscribe(localAuthorities => this.localAuthorities = localAuthorities);
  }

  onSelect(localAuthority: LocalAuthority): void {
    this.selectedLocalAuthority = localAuthority;
  }

  gotoRatingsSummary(): void {
    this.router.navigate([`regions/${this.selectedLocalAuthority.regionName}/local-authorities/${this.selectedLocalAuthority.code}`]);
  }

  goBack(): void {
    this.location.back();
  }
}
