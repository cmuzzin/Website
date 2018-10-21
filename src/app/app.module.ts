import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "../environments/environment";
import {SharedModule} from "./shared/shared.module";
import {HomeModule} from "./home/home.module";
import { GalleryComponent } from './gallery/gallery.component';
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AngularFireModule} from "@angular/fire";
import {AngularFireFunctionsModule} from "@angular/fire/functions";

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireFunctionsModule,
    HomeModule,
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
