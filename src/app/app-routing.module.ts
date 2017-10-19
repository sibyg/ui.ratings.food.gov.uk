import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {LocalAuthoritiesComponent} from './local-authorities/local-authorities.component';
import {LocalAuthorityDetailComponent} from './local-authority-detail/local-authority-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/regions', pathMatch: 'full'},
  {path: 'regions', component: DashboardComponent},
  {path: 'regions/:regionName/local-authorities', component: LocalAuthoritiesComponent},
  {path: 'regions/:regionName/local-authorities/:localAuthorityCode', component: LocalAuthorityDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
