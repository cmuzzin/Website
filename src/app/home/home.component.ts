///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {CustomValidatorsService} from "../shared/services/custom-validators.service";
import {ToastrService} from "ngx-toastr";
import {AngularFireDatabase} from "angularfire2/database";
import * as firebase from "firebase";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  formErrors = CustomValidatorsService.formErrors;
  image: string;

  constructor(private db: AngularFireDatabase,
              private customValidatorService: CustomValidatorsService,
              private toastr: ToastrService) {
    this.form = this.customValidatorService.form;
  }

  ngOnInit() {

  }

  onSubmit() {
    const {name, email, subject, message} = this.form.value;
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
  };

}
