import { NgModule } from '@angular/core';
import {HomeComponent} from "./home.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { RecentWorkComponent } from './recent-work/recent-work.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [HomeComponent, AboutMeComponent, RecentWorkComponent],
  exports: []
})
export class HomeModule { }
