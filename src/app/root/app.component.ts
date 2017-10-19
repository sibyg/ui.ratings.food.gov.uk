import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 align="center">{{title}}</h1>
    <!--<nav>-->
      <!--<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>-->
      <!--<a routerLink="/local-authorities" routerLinkActive="active">Local Authorities</a>-->
    <!--</nav>-->
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Food Ratings - UK';
}
