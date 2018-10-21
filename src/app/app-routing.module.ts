import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {GalleryComponent} from "./home/gallery/gallery.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    component: HomeComponent,
    path: 'home',
    children: [
      {
        component: GalleryComponent,
        path: 'gallery/:id'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
