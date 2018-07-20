import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {HomeComponent} from "./home/home.component";
import {AboutMeComponent} from "./about-me/about-me.component";

const routes: Routes = [
  {
    path: '',
    children: [],
    component: HomeComponent
  },
  {
    component: PortfolioComponent,
    path:'portfolio'
  },
  {
    component: HomeComponent,
    path:'home'
  },
  {
    component: AboutMeComponent,
    path: 'about-me'
  },
  {
    component: HomeComponent,
    path:'**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
