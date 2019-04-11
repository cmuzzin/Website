import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {AboutMeComponent} from './about-me/about-me.component';
import { RecentWorkComponent } from './recent-work/recent-work.component';
import {SharedModule} from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [HomeComponent, AboutMeComponent, RecentWorkComponent, SkillsComponent, ExperienceComponent, ContactFormComponent],
  exports: []
})
export class HomeModule {
}
