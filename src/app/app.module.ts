import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {PortfolioComponent} from './portfolio/portfolio.component';
import {HomeModule} from "./home/home.module";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
