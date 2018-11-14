import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import { GalleryComponent } from './gallery.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [GalleryComponent],
  exports: []
})
export class GalleryModule {
}
