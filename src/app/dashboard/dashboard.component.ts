import {Component, OnInit} from '@angular/core';
import {Region} from '../model/region';
import {LocalAuthorityService} from "../service/local-authority.service";

@Component({
  selector: 'food-ratings-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  regions: Region[] = [];

  constructor(private localAuthorityService: LocalAuthorityService) {}

  ngOnInit(): void {
    this.localAuthorityService.getRegions().then(regions => this.regions = regions);
  }
}
