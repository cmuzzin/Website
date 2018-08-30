import { NgModule } from '@angular/core';
import {HomeComponent} from "./home.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent, AboutMeComponent]
})
export class HomeModule { }
