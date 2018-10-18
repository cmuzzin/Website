import {NgModule} from '@angular/core';
import {HomeComponent} from "./home.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {CommonModule} from "@angular/common";
import {RecentWorkComponent} from './recent-work/recent-work.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent, AboutMeComponent, RecentWorkComponent],
  exports: []
})
export class HomeModule {
}
