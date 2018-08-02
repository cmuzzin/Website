import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomValidatorsService} from "./services/custom-validators.service";
import {FormsModule} from "@angular/forms";
import {FooterComponent} from "./components/footer/footer.component";
import {ImagesService} from "./services/images.service";
import {HeroComponent} from "./components/hero/hero.component";
import {NavComponent} from "./components/nav/nav.component";
import {AppRoutingModule} from "../app-routing.module";
import { CarouselComponent } from './components/carousel/carousel.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [FooterComponent, HeroComponent, NavComponent, CarouselComponent, ModalComponent],
  entryComponents:[],
  exports:[FooterComponent, HeroComponent, NavComponent,CarouselComponent, ModalComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [CustomValidatorsService, ImagesService]
    }
  }
}
