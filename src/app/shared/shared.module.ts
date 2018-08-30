import {ModuleWithProviders, NgModule} from '@angular/core';
import {CustomValidatorsService} from "./services/custom-validators.service";
import {FooterComponent} from "./components/footer/footer.component";
import {ImagesService} from "./services/images.service";
import {HeroComponent} from "./components/hero/hero.component";
import {NavComponent} from "./components/nav/nav.component";
import {CarouselComponent} from './components/carousel/carousel.component';
import {ModalComponent} from './components/modal/modal.component';
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [FooterComponent, HeroComponent, NavComponent, CarouselComponent, ModalComponent],
  entryComponents: [],
  exports: [FooterComponent, HeroComponent, NavComponent, CarouselComponent, ModalComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [CustomValidatorsService, ImagesService]
    }
  }
}
