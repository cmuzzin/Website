import {ModuleWithProviders, NgModule} from '@angular/core';
import {FooterComponent} from './components/footer/footer.component';
import {HeroComponent} from './components/hero/hero.component';
import {NavComponent} from './components/nav/nav.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import { ScrollToComponent } from './components/scroll-to/scroll-to.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [FooterComponent, HeroComponent, NavComponent, ScrollToComponent],
  entryComponents: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FooterComponent,
    HeroComponent,
    NavComponent,
    ScrollToComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
    };
  }
}
