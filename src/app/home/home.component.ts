import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormValidatorService} from '../shared/services/form-validator.service';
import {ToastrService} from 'ngx-toastr';
import {AngularFireDatabase} from '@angular/fire/database';
import { Gallery } from '../shared/dtos/gallary';
import { ImagesService } from '../shared/services/image.service';
import { SkillsService } from '../shared/services/tags.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: FormGroup = this.customValidatorService.form;
  formErrors = FormValidatorService.formErrors;
  galleries: Array<Gallery>;
  skills: Array<Object>;

  constructor(private db: AngularFireDatabase,
              private customValidatorService: FormValidatorService,
              private toastr: ToastrService,
              private imageService: ImagesService,
              private skillsService: SkillsService) {
  }

  ngOnInit() {
    this.imageService.getGalleries().subscribe(
      (gallaries: any) => this.galleries = gallaries);
    this.skillsService.getSkills().subscribe(
      (skills: any) => this.skills = skills);
  }

  onSubmit(form: FormGroup) {
    const {name, email, subject, message} = form.value;
    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href='mailto:${email}'>${email}</a></div>
      <div>Subject: ${subject}</div>
      <div>Message: ${message}</div>
    `;
    const formRequest = {name, email, subject, message, html};
    this.db.list('/messages').push(formRequest);
    this.toastr.success('Thanks!', 'I received your message!');
    this.form.reset();
  }

}
