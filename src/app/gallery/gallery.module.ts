import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { GalleryComponent } from './gallery.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [GalleryComponent, ModalComponent],
  exports: []
})
export class GalleryModule {
}
