import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";

const routes: Routes = [
  {
    path: '',
    children: [],
    component: HomeComponent
  },
  {
    component: HomeComponent,
    path:'home'
  },
  {
    component: PortfolioComponent,
    path:'portfolio'
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
