import {ModuleWithProviders, NgModule} from '@angular/core';
import {CustomValidatorsService} from "./services/custom-validators.service";
import {FooterComponent} from "./components/footer/footer.component";
import {ImagesService} from "./services/images.service";
import {HeroComponent} from "./components/hero/hero.component";
import {NavComponent} from "./components/nav/nav.component";
import {CarouselComponent} from './components/carousel/carousel.component';
import {ModalComponent} from './components/modal/modal.component';
import {ToastrModule} from "ngx-toastr";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {environment} from "../../environments/environment";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
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
