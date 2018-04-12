import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {HomeComponent} from "./home/home.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
