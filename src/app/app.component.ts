import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularFireDatabase } from 'angularfire2/database';
import {CustomValidatorsService} from './shared/services/custom-validators.service';
import * as _ from "lodash";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 form: FormGroup;
 formErrors = CustomValidatorsService.formErrors;
 validationMessages = CustomValidatorsService.validationMessages;

  private updateErrorMessages() {
    const form = this.form;
    _.each(this.formErrors, (msg, field) => {
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        _.each(control.errors, (val2, key) => {
          this.formErrors[field] = messages[key];
        });
      }
    });
  }

  constructor(private fb: FormBuilder,
              private db: AngularFireDatabase) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.maxLength(250)]]
    });
    this.form.valueChanges.debounceTime(500).subscribe(() => this.updateErrorMessages());
  };


  onSubmit() {
    const {name, email, subject, message} = this.form.value;
    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Subject: ${subject}</div>
      <div>Message: ${message}</div>
    `;
    let formRequest = { name, email, subject, message, html };
    this.db.list('/messages').push(formRequest);
    this.form.reset();
  };
}
