import {ModuleWithProviders, NgModule} from '@angular/core';
import {CustomValidatorsService} from "./services/custom-validators.service";
import {FooterComponent} from "./components/footer/footer.component";
import {ImagesService} from "./services/image.service";
import {HeroComponent} from "./components/hero/hero.component";
import {NavComponent} from "./components/nav/nav.component";
import {ModalComponent} from './components/modal/modal.component';
import {CommonModule} from "@angular/common";
import {CarouselComponent} from './components/carousel/carousel.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [FooterComponent, HeroComponent, NavComponent, ModalComponent, CarouselComponent],
  entryComponents: [],
  exports: [CommonModule, FormsModule, ReactiveFormsModule,  HttpClientModule,
    FooterComponent, HeroComponent, NavComponent, ModalComponent, CarouselComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [CustomValidatorsService, ImagesService]
    }
  }
}
