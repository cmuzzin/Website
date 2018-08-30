import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {BrowserModule} from "@angular/platform-browser";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {HomeComponent} from "./home/home.component";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {AboutMeComponent} from "./home/about-me/about-me.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    HomeComponent,
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    ToastrModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
