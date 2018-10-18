import { NgModule } from '@angular/core';
import {HomeComponent} from "./home.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import { RecentWorkComponent } from './recent-work/recent-work.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [HomeComponent, AboutMeComponent, RecentWorkComponent],
  exports: []
})
export class HomeModule { }
