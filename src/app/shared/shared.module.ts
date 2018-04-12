import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomValidatorsService} from "./services/custom-validators.service";
import {FormsModule} from "@angular/forms";
import {FooterComponent} from "./components/footer/footer.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [FooterComponent],
  entryComponents:[],
  exports:[FooterComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [CustomValidatorsService]
    }
  }
}
