import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './root/app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LocalAuthorityDetailComponent} from './local-authority-detail/local-authority-detail.component';
import {LocalAuthoritiesComponent} from './local-authorities/local-authorities.component';
import {LocalAuthorityService} from './service/local-authority.service';

import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    LocalAuthorityDetailComponent,
    LocalAuthoritiesComponent
  ],
  providers: [LocalAuthorityService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
